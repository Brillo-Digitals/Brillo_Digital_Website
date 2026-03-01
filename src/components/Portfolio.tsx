import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Download, Apple, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const TABS = ["All", "Mobile Apps", "Web Applications", "Other Applications ", "Web Design and Marketing"];

const INITIAL_VISIBLE = 8;

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    tags: string[];
    image: string;
    github?: string;
    live?: string;
    hasApk: boolean;
    downloadLink: string;
    downloadName: string;
}

const PORTFOLIO_DATA: Project[] = [
    {
        id: 1,
        title: "Rhythm - Habit Builder App",
        description: "A habit building app built with Flutter, featuring clean architecture and biometric authentication.",
        category: TABS[1],
        tags: ["Flutter", "Dart", "Share Preferences", "SQflite"],
        image: "/images/rhythm.png",
        github: "https://github.com/Brillo-Digitals/rhythm_habit_building_app",
        hasApk: true,
        downloadLink: "https://github.com/Brillo-Digitals/my_apps/releases/download/v1.0.0/rhythm-v-1-0-0.apk",
        downloadName: "Rhythm-v1-0-0.apk"
    },
    {
        id: 2,
        title: "MoneyKa Store",
        description: "A custom Shopify theme providing a high-converting, headless-like online shopping experience.",
        category: TABS[4],
        tags: ["Shopify", "Liquid", "Tailwind", "JavaScript"],
        image: "/images/moneykastore.jpg",
        live: "https://moneykastore.com",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 3,
        title: "Brillo Digitals Website",
        description: "This very portfolio — a custom React website with Framer Motion animations and a premium dark UI.",
        category: TABS[2],
        tags: ["React", "TypeScript", "TailwindCss", "Framer Motion"],
        image: "/images/brillo_digitals.png",
        live: "/",
        github: "https://github.com/Brillo-Digitals/Brillo_Digital_Website",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 4,
        title: "forcastr - Weather Forecast App",
        description: "A cross-platform weather app with real-time forecasts, location detection and a clean Flutter interface.",
        category: TABS[1],
        tags: ["Flutter", "REST API", "Shared Preferences", "Provider"],
        image: "/images/forcastr.png",
        github: "#",
        hasApk: true,
        downloadLink: "https://github.com/Brillo-Digitals/my_apps/releases/download/v1.0.0/forcastr-v1-0-0.apk",
        downloadName: "forcastr-v1-0-0.apk"
    },
    {
        id: 5,
        title: "CGPA Calculator",
        description: "A smart academic GPA tracking app with semester management and local persistence, built with Flutter.",
        category: TABS[1],
        tags: ["Flutter", "Dart", "Shared Preferences", "Provider"],
        image: "/images/cgpa_calculator.png",
        github: "https://github.com/Brillo-Digitals/cgpa_calculator",
        hasApk: true,
        downloadLink: "https://github.com/Brillo-Digitals/my_apps/releases/download/v1.0.0/cgpa-calculator-v-1-0-0.apk",
        downloadName: "cgpa-calculator-v1-0-0.apk"
    },
    {
        id: 6,
        title: "Warden Game - Simulator",
        description: "A narrative-driven cryo-facility escape simulation with branching storylines and a dark terminal aesthetic.",
        category: TABS[1],
        tags: ["Flutter", "Dart"],
        image: "/images/warden.png",
        github: "https://github.com/Brillo-Digitals/Warden_Cryo_Game",
        hasApk: true,
        downloadLink: "https://github.com/Brillo-Digitals/my_apps/releases/download/v1.0.0/warden-v-1-0-0.apk",
        downloadName: "warden-v1-0-0.apk"
    },
    {
        id: 7,
        title: "World War Two",
        description: "A 2D action-packed Python game with custom physics, enemy AI, and dynamic level progression using Pygame.",
        category: TABS[3],
        tags: ["Python", "Pygame", "Game Development", "OOP"],
        image: "/images/ww2.png",
        live: "#",
        github: "#",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 8,
        title: "Todo App",
        description: "A clean, fast Flutter to-do app with offline storage via Hive, task priorities, and smooth animations.",
        category: TABS[1],
        tags: ["Flutter", "Dart", "Hive", "Provider"],
        image: "/images/to_do_app.png",
        github: "https://github.com/Brillo-Digitals/to_to_app",
        hasApk: true,
        downloadLink: "https://github.com/Brillo-Digitals/my_apps/releases/download/v1.0.0/to-do-v-1-0-0.apk",
        downloadName: "todo-app-v1-0-0.apk"
    },
    {
        id: 9,
        title: "PulseLab Beat Maker",
        description: "An interactive beat-making desktop app with step sequencing, real-time playback, layered drum kits, and tempo control.",
        category: TABS[3],
        tags: ["Python", "Pygame", "Audio Processing", "Music Tech"],
        image: "/images/beat_maker.png",
        live: "#",
        github: "#",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 10,
        title: "Quizzler",
        description: "A brain-teaser quiz app with multiple categories, timed rounds, and score tracking, built with Flutter.",
        category: TABS[1],
        tags: ["Flutter", "Dart", "Provider"],
        image: "/images/quizler.png",
        github: "https://github.com/Brillo-Digitals/my_apps/releases/download/v1.0.0/quizzler-v-1-0-0.apk",
        hasApk: true,
        downloadLink: "https://github.com/Brillo-Digitals/Quizzler-Brain-Tester",
        downloadName: "quizzler-v1-0-0.apk"
    },
    {
        id: 11,
        title: "KeyWave Piano",
        description: "A digital piano simulator with keyboard-to-note mapping, polyphonic playback, octave shifting, and key animations.",
        category: TABS[3],
        tags: ["Python", "Pygame", "Sound Engine", "Interactive App"],
        image: "/images/piano.png",
        live: "#",
        github: "#",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 12,
        title: "A4's Collection Website",
        description: "A React e-commerce storefront with product browsing, filtering, and a polished shopping experience.",
        category: TABS[2],
        tags: ["React", "TypeScript", "TailwindCss", "JavaScript"],
        image: "/images/a4scollection.png",
        live: "https://a4scollections.netlify.app/",
        github: "https://github.com/Brillo-Digitals/A4-s-Collections",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 13,
        title: "ECAP",
        description: "A full-stack Django web application for agricultural product purchase and expert consultation.",
        category: TABS[2],
        tags: ["Python", "Django", "PostgreSQL", "REST API"],
        image: "/images/ecap.png",
        github: "#",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 14,
        title: "Galaxy",
        description: "A cross-platform space shooter game with enemy waves, physics, and leaderboard tracking, built with Kivy.",
        category: TABS[3],
        tags: ["Python", "Kivy", "Mobile App", "Cross-Platform"],
        image: "/images/galaxy.png",
        live: "#",
        github: "#",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
];

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
    const [showAll, setShowAll] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const filteredProjects = activeTab === "All"
        ? PORTFOLIO_DATA
        : PORTFOLIO_DATA.filter(p => p.category === activeTab);

    const isAllTab = activeTab === "All";
    const visibleProjects = isAllTab && !showAll
        ? filteredProjects.slice(0, INITIAL_VISIBLE)
        : filteredProjects;

    const hasMore = isAllTab && filteredProjects.length > INITIAL_VISIBLE;

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setShowAll(false);
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
                <h2 className="mb-4 text-3xl font-bold md:text-5xl text-text">Featured Work</h2>
                <div className="w-20 h-1 mb-8 rounded-full bg-brand"></div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab
                                ? 'bg-brand text-white shadow-[0_0_15px_rgba(218,175,111,0.5)]'
                                : 'glass text-text/70 hover:text-text hover:bg-white/5 border border-white/5'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
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
                            className="flex flex-col overflow-hidden glass-card rounded-2xl group cursor-default"
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
                                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-brand/80 text-white backdrop-blur-sm shadow">
                                    {project.category}
                                </div>

                                {/* Link icons */}
                                <div className="absolute flex gap-2 transition-all duration-300 translate-y-2 opacity-0 top-3 right-3 group-hover:opacity-100 group-hover:translate-y-0">
                                    {project.github && project.github !== "#" && (
                                        <a
                                            href={project.github}
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
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="mb-2 text-xl font-bold leading-snug text-text group-hover:text-brand-light transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="flex-1 mb-5 text-sm leading-relaxed text-text/75">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full glass text-text/80 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* APK Downloads */}
                                {project.hasApk && (
                                    <div className="flex flex-col gap-3 pt-4 mt-auto border-t sm:flex-row border-white/10">
                                        <button
                                            onClick={() => handleDownloadApk(project)}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-brand to-brand-light text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(218,175,111,0.4)] hover:scale-[1.02] transition-all duration-300"
                                        >
                                            <Download className="w-4 h-4" />
                                            Download APK
                                        </button>
                                        <div className="relative flex-1 group/tooltip">
                                            <button
                                                disabled
                                                className="flex items-center justify-center w-full gap-2 px-4 py-3 transition-all cursor-not-allowed glass opacity-50 rounded-xl text-text/60 text-sm"
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
                        onClick={() => setShowAll(prev => !prev)}
                        className="group flex items-center gap-3 px-8 py-4 rounded-full glass border border-brand/30 text-text font-semibold hover:border-brand/70 hover:bg-brand/10 hover:text-brand-light transition-all duration-300 shadow-[0_0_10px_rgba(218,175,111,0.08)] hover:shadow-[0_0_24px_rgba(218,175,111,0.22)]"
                    >
                        {showAll ? (
                            <>
                                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                                Show Less
                            </>
                        ) : (
                            <>
                                View All {filteredProjects.length} Projects
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                            </>
                        )}
                    </button>
                </motion.div>
            )}
        </section>
    );
};

export default Portfolio;
