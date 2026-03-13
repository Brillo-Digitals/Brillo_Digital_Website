import axios from 'axios';

const BIN_ID = '69b4043cc3097a1dd520b4a6';
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// Read from .env if provided, otherwise assume the bin is open for editing (or read-only works)
const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY || '';

export interface ProjectEngagement {
    likes: number;
    useful: number;
}

export interface EngagementData {
    projects: Record<string, ProjectEngagement>;
}

const getHeaders = () => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };
    if (API_KEY) {
        headers['X-Master-Key'] = API_KEY;
    }
    return headers;
};

export const fetchEngagementData = async (): Promise<EngagementData> => {
    try {
        const response = await axios.get(BASE_URL, { headers: getHeaders() });
        return response.data.record as EngagementData;
    } catch (error) {
        console.error('Error fetching engagement data from JSONBin:', error);
        return { projects: {} };
    }
};

export const updateEngagementData = async (data: EngagementData): Promise<void> => {
    try {
        await axios.put(BASE_URL, data, { headers: getHeaders() });
    } catch (error) {
        console.error('Error updating engagement data in JSONBin:', error);
    }
};

export const generateRandomInitialData = (): ProjectEngagement => {
    // Random number between 20 and 43 inclusive
    return {
        likes: Math.floor(Math.random() * (43 - 20 + 1)) + 20,
        useful: Math.floor(Math.random() * (43 - 20 + 1)) + 20,
    };
};
