import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Download, Apple, CheckCircle, ThumbsUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEngagement } from '../hooks/useEngagement';

import { TABS, type Project, PORTFOLIO_DATA, toProjectSlug, toSlug } from '../data/portfolio';

const INITIAL_VISIBLE = 13;

const cardVariants = {
    hidden: { opacity: 0, y: 44, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.07,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    }),
    exit: {
        opacity: 0,
        y: -16,
        scale: 0.96,
        transition: { duration: 0.25 },
    },
};

const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const filteredProjects = activeTab === "All"
        ? PORTFOLIO_DATA
        : PORTFOLIO_DATA.filter(p => p.category === activeTab);

    // With the new logic we ONLY show INITIAL_VISIBLE limit on the homepage
    const visibleProjects = filteredProjects.slice(0, INITIAL_VISIBLE);

    const hasMore = filteredProjects.length > INITIAL_VISIBLE;

    const { data: engagementData, userLikes, userUseful, toggleLike, toggleUseful } = useEngagement(
        visibleProjects.map(p => p.id)
    );

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

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
        <section id="portfolio" className="relative z-10 w-full px-6 py-24 mx-auto md:px-12 max-w-7xl">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-12 text-center"
            >
                <div className="editorial-shell p-6 md:p-8 w-full max-w-4xl">
                    <span className="eyebrow mb-4">Selected case studies</span>
                    <h2 className="mb-4 text-3xl font-bold md:text-5xl headline-gradient">Featured Work</h2>
                    <p className="mb-8 text-text/70 max-w-2xl mx-auto">
                        Each project links to a dedicated page with delivery context, implementation notes, and outcome-focused insights.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {TABS.map((tab) => (
                            <div key={tab} className="relative group/tab">
                                <button
                                    onClick={() => handleTabChange(tab)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === tab
                                        ? 'bg-brand text-white shadow-[0_0_15px_rgba(218,175,111,0.5)]'
                                        : 'glass text-text/70 hover:text-text hover:bg-white/5 border border-white/5'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && tab !== "All" && (
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/portfolio/${toSlug(tab)}`);
                                            }}
                                            className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                                            title={`Go to ${tab} page`}
                                        >
                                            <ExternalLink className="w-3 h-3" />
                                        </motion.span>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                <AnimatePresence mode="popLayout">
                    {visibleProjects.map((project, i) => (
                        <motion.div
                            layout
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            whileHover={{ y: -8, transition: { duration: 0.22, ease: "easeOut" } }}
                            key={project.id}
                            onClick={() => navigate(`/portfolio/project/${project.id}/${toProjectSlug(project.title)}`)}
                            className="flex flex-col overflow-hidden cursor-pointer editorial-shell rounded-2xl group"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden bg-brand-dark/20">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

                                {/* Category badge */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/portfolio/${toSlug(project.category)}`);
                                    }}
                                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-brand/80 text-white backdrop-blur-sm shadow hover:bg-brand transition-colors z-10"
                                >
                                    {project.category}
                                </button>

                                {/* Link icons */}
                                <div className="absolute flex gap-2 transition-all duration-300 translate-y-2 opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:translate-y-0">
                                    {project.github && project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            onClick={(e) => e.stopPropagation()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 transition-colors rounded-full glass hover:bg-brand hover:text-white"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                    {project.live && project.live !== "#" && (
                                        <a
                                            href={project.live}
                                            onClick={(e) => e.stopPropagation()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 transition-colors rounded-full glass hover:bg-brand hover:text-white"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-6 ink-grid">
                                <h3 className="mb-2 text-xl font-bold leading-snug transition-colors duration-300 text-text group-hover:text-brand-light">
                                    {project.title}
                                </h3>
                                <p className="flex-1 mb-5 text-sm leading-relaxed text-text/75">
                                    {project.description}
                                </p>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/portfolio/project/${project.id}/${toProjectSlug(project.title)}`);
                                    }}
                                    className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-brand-light hover:text-brand transition-colors"
                                >
                                    View Project Page
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </button>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium border rounded-full glass text-text/80 border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Engagement: Like & Useful */}
                                <div className="flex items-center gap-4 py-3 mt-auto border-t border-white/10">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleLike(project.id);
                                        }}
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
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleUseful(project.id);
                                        }}
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
                                    <div className="flex flex-col gap-3 pt-4 mt-auto border-t sm:flex-row border-white/10">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDownloadApk(project);
                                            }}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 glass border border-brand/50 text-brand-light font-semibold rounded-xl hover:bg-brand/10 hover:border-brand hover:scale-[1.02] transition-all duration-300 shadow-[0_0_10px_rgba(218,175,111,0.05)] hover:shadow-[0_0_20px_rgba(218,175,111,0.2)]"
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
                                            <div className="absolute px-3 py-1 mb-2 text-xs transition-opacity -translate-x-1/2 border rounded opacity-0 pointer-events-none bottom-full left-1/2 bg-background group-hover/tooltip:opacity-100 whitespace-nowrap border-white/10 text-text/70">
                                                iOS version in development
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* See More / Show Less */}
            {hasMore && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    className="flex justify-center mt-14"
                >
                    <button
                        onClick={() => navigate(`/portfolio/${toSlug(activeTab)}`)}
                        className="group flex items-center gap-3 px-8 py-4 rounded-full glass border border-brand/30 text-text font-semibold hover:border-brand/70 hover:bg-brand/10 hover:text-brand-light transition-all duration-300 shadow-[0_0_10px_rgba(218,175,111,0.08)] hover:shadow-[0_0_24px_rgba(218,175,111,0.22)]"
                    >
                        View All {filteredProjects.length} Projects
                        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                </motion.div>
            )}
        </section>
    );
};

export default Portfolio;
