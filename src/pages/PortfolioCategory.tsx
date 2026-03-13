import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Download, Apple, CheckCircle, ArrowLeft, ThumbsUp, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../components/Portfolio';
import type { Project } from '../components/Portfolio';
import { useEngagement } from '../hooks/useEngagement';

const PortfolioCategory: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const navigate = useNavigate();
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    // If category is not valid or doesn't exist, we fallback
    const decodedCategory = category ? decodeURIComponent(category) : "All";

    const filteredProjects = decodedCategory === "All"
        ? PORTFOLIO_DATA
        : PORTFOLIO_DATA.filter(p => p.category === decodedCategory);

    const { data: engagementData, userLikes, userUseful, toggleLike, toggleUseful } = useEngagement(
        filteredProjects.map(p => p.id)
    );

    useEffect(() => {
        // Scroll to top when page mounts
        window.scrollTo(0, 0);
    }, []);

    const handleDownloadApk = (thisProject: Project) => {
        const a = document.createElement("a");
        a.href = thisProject.downloadLink;
        a.download = thisProject.downloadName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setToastMessage("Download starting...");
        setTimeout(() => setToastMessage(null), 3000);
    };

    return (
        <div className="min-h-screen bg-background text-text pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Toast Notification */}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 20, x: "-50%" }}
                        className="fixed bottom-10 left-1/2 z-50 glass px-6 py-3 rounded-full flex items-center gap-3 border-brand/50 shadow-[0_0_20px_rgba(218,175,111,0.3)]"
                    >
                        <CheckCircle className="w-5 h-5 text-brand-light" />
                        <span className="font-semibold text-text">{toastMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 flex flex-col gap-6"
            >
                <div>
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 text-text/70 hover:text-brand transition-colors mb-4"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-text to-text/60 bg-clip-text text-transparent">
                        {decodedCategory} Projects
                    </h1>
                </div>
                <div className="w-20 h-1 rounded-full bg-brand"></div>
            </motion.div>

            {/* Masonry Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {filteredProjects.map((project, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        key={project.id}
                        className="break-inside-avoid shadow-xl glass-card rounded-2xl overflow-hidden group border border-white/5"
                    >
                        {/* Image wrapper - Masonry lets images decide their height or you can use standard aspect ratios. The user wants image to retain it's dimension */}
                        <div className="relative overflow-hidden bg-brand-dark/20 flex items-center justify-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90" />

                            <div className="absolute flex gap-2 transition-all duration-300 translate-y-2 opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:translate-y-0 z-20">
                                {project.github && project.github !== "#" && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 transition-colors rounded-full glass hover:bg-brand hover:text-white"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {project.live && project.live !== "#" && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 transition-colors rounded-full glass hover:bg-brand hover:text-white"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 relative z-10">
                            <h3 className="mb-3 text-2xl font-bold leading-snug transition-colors duration-300 text-text group-hover:text-brand-light">
                                {project.title}
                            </h3>
                            <p className="mb-6 text-base leading-relaxed text-text/75">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 text-xs font-semibold tracking-wide border rounded-full glass text-text/80 border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Engagement: Like & Useful */}
                            <div className="flex items-center gap-4 py-3 mt-auto border-t border-white/10">
                                <button
                                    onClick={() => toggleLike(project.id)}
                                    className={`flex items-center gap-1.5 transition-colors ${
                                        userLikes[project.id] ? 'text-brand' : 'text-text/60 hover:text-text'
                                    }`}
                                >
                                    <ThumbsUp className={`w-4 h-4 ${userLikes[project.id] ? 'fill-current' : ''}`} />
                                    <span className="text-sm font-medium">
                                        {engagementData.projects?.[project.id]?.likes || 0}
                                    </span>
                                </button>
                                <button
                                    onClick={() => toggleUseful(project.id)}
                                    className={`flex items-center gap-1.5 transition-colors ${
                                        userUseful[project.id] ? 'text-brand-light' : 'text-text/60 hover:text-text'
                                    }`}
                                >
                                    <Zap className={`w-4 h-4 ${userUseful[project.id] ? 'fill-current' : ''}`} />
                                    <span className="text-sm font-medium">
                                        {engagementData.projects?.[project.id]?.useful || 0}
                                    </span>
                                </button>
                            </div>

                            {/* APK Downloads */}
                            {project.hasApk && (
                                <div className="flex flex-col gap-3 pt-6 border-t sm:flex-row border-white/10">
                                    <button
                                        onClick={() => handleDownloadApk(project)}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-brand to-brand-light text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(218,175,111,0.4)] hover:scale-[1.02] transition-all duration-300 shadow-lg"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download APK
                                    </button>
                                    <div className="relative flex-1 group/tooltip">
                                        <button
                                            disabled
                                            className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm transition-all opacity-50 cursor-not-allowed glass rounded-xl text-text/60"
                                        >
                                            <Apple className="w-4 h-4" />
                                            iOS — Soon
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-text/60 text-lg">
                    No projects found for this category.
                </div>
            )}
        </div>
    );
};

export default PortfolioCategory;
