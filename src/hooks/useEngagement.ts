import { useState, useEffect } from 'react';
import { fetchEngagementData, updateEngagementData, generateRandomInitialData } from '../services/jsonbin';
import type { EngagementData } from '../services/jsonbin';

export const useEngagement = (projectIds: number[]) => {
    const [data, setData] = useState<EngagementData>({ projects: {} });
    const [loading, setLoading] = useState(true);
    // keep track of user likes locally so they can toggle their own like
    const [userLikes, setUserLikes] = useState<Record<number, boolean>>(() => {
        try {
            return JSON.parse(localStorage.getItem('brillo_likes') || '{}');
        } catch {
            return {};
        }
    });
    const [userUseful, setUserUseful] = useState<Record<number, boolean>>(() => {
        try {
            return JSON.parse(localStorage.getItem('brillo_useful') || '{}');
        } catch {
            return {};
        }
    });

    useEffect(() => {
        const loadAndInitData = async () => {
            let currentData = await fetchEngagementData();
            let needsUpdate = false;
            
            // Check if any visible projects are missing data
            const newData = { ...currentData };
            if (!newData.projects) {
                newData.projects = {};
            }

            for (const id of projectIds) {
                if (!newData.projects[id]) {
                    newData.projects[id] = generateRandomInitialData();
                    needsUpdate = true;
                }
            }

            setData(newData);
            setLoading(false);

            if (needsUpdate) {
                // Update JSONBin with the newly initialized random data
                await updateEngagementData(newData);
            }
        };

        if (projectIds.length > 0) {
            loadAndInitData();
        }
    }, [projectIds.join(',')]);

    // Automatically sync localStorage when user interacts
    useEffect(() => {
        localStorage.setItem('brillo_likes', JSON.stringify(userLikes));
    }, [userLikes]);

    useEffect(() => {
        localStorage.setItem('brillo_useful', JSON.stringify(userUseful));
    }, [userUseful]);

    const toggleLike = async (projectId: number) => {
        const hasLiked = userLikes[projectId];
        const newLikeState = !hasLiked;
        
        setUserLikes(prev => ({ ...prev, [projectId]: newLikeState }));

        const currentProjectStats = data.projects[projectId] || { likes: 0, useful: 0 };
        const updatedStats = {
            ...currentProjectStats,
            likes: newLikeState ? currentProjectStats.likes + 1 : Math.max(0, currentProjectStats.likes - 1)
        };

        const newData = {
            ...data,
            projects: {
                ...data.projects,
                [projectId]: updatedStats
            }
        };
        
        // Optimistic update
        setData(newData);
        
        // Update server
        await updateEngagementData(newData);
    };

    const toggleUseful = async (projectId: number) => {
        const hasMarkedUseful = userUseful[projectId];
        const newUsefulState = !hasMarkedUseful;

        setUserUseful(prev => ({ ...prev, [projectId]: newUsefulState }));

        const currentProjectStats = data.projects[projectId] || { likes: 0, useful: 0 };
        const updatedStats = {
            ...currentProjectStats,
            useful: newUsefulState ? currentProjectStats.useful + 1 : Math.max(0, currentProjectStats.useful - 1)
        };

        const newData = {
            ...data,
            projects: {
                ...data.projects,
                [projectId]: updatedStats
            }
        };

        // Optimistic update
        setData(newData);
        
        // Update server
        await updateEngagementData(newData);
    };

    return {
        data,
        loading,
        userLikes,
        userUseful,
        toggleLike,
        toggleUseful
    };
};
