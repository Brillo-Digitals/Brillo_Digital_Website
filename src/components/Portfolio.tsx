import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Download, Apple, CheckCircle } from 'lucide-react';

const TABS = ["All", "Mobile Apps", "Web Applications", "Other Applications ", "Web Design and Marketing"];

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

const PORTFOLIO_DATA = [
    {
        id: 1,
        title: "Rhythm - Habit Builder App",
        description: "A habit building app built with Flutter, featuring clean architecture and biometric authentication.",
        category: TABS[1],
        tags: ["Flutter", "Dart", "Share Preferences", "SQflite"],
        image: "/images/rhythm_app.png",
        github: "https://github.com/Brillo-Digitals/rhythm_habit_building_app",
        hasApk: true,
        downloadLink: "#",
        downloadName: "Rhythm-v1.0.0.apk"
    },
    {
        id: 2,
        title: "MoneyKa Store",
        description: "A custom Shopify theme development providing a high-converting, headless-like experience.",
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
        description: "A custom React Js Website development.",
        category: TABS[2],
        tags: ["React", "TypeScript", "TailwindCss", "JavaScript"],
        image: "/images/brillo_digitals_website.png",
        live: "/",
        github: "https://github.com/Brillo-Digitals/Brillo_Digital_Website",
        hasApk: false,
        downloadLink: "#",
        downloadName: ""
    },
    {
        id: 4,
        title: "EcoTrack App",
        description: "Cross-platform mobile application for tracking carbon footprint and eco-friendly habits.",
        category: TABS[1],
        tags: ["Flutter", "REST API", "StateProvider"],
        image: "https://images.unsplash.com/photo-1616077168079-7e09a6a38df5?q=80&w=800&auto=format&fit=crop",
        github: "#",
        hasApk: true,
        downloadLink: "#",
        downloadName: "SecurePayMobile.apk"
    }
];

const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const filteredProjects = activeTab === "All"
        ? PORTFOLIO_DATA
        : PORTFOLIO_DATA.filter(p => p.category === activeTab);

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
        <section id="portfolio" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
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
                        <span className="font-medium text-text">{toastMessage}</span>
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
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
                <div className="w-20 h-1 bg-brand rounded-full mb-8"></div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                                ? 'bg-brand text-white shadow-[0_0_15px_rgba(218,175,111,0.5)]'
                                : 'glass text-text-muted hover:text-text hover:bg-white/5'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={project.id}
                            className="glass-card rounded-2xl overflow-hidden group flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-brand-dark/20">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80"></div>

                                {/* Top Links Overlay */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                    {project.github && (
                                        <a href={project.github} className="p-2 glass rounded-full hover:bg-brand hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} className="p-2 glass rounded-full hover:bg-brand hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="text-brand-light text-xs font-bold uppercase tracking-wider mb-2">
                                    {project.category}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-text group-hover:text-brand-light transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-text-muted text-sm mb-6 flex-1">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-3 py-1 glass rounded-full text-text/80">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Mobile Specific App Downloads */}
                                {project.hasApk && (
                                    <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-white/5">
                                        <button
                                            onClick={() => handleDownloadApk(project)}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-brand to-brand-light text-white font-medium rounded-xl hover:shadow-[0_0_20px_rgba(218,175,111,0.4)] hover:scale-[1.02] transition-all duration-300 animate-pulse"
                                        >
                                            <Download className="w-5 h-5" />
                                            Download APK
                                        </button>

                                        <div className="relative group/tooltip flex-1">
                                            <button
                                                disabled
                                                className="w-full flex items-center justify-center gap-2 px-4 py-3 glass opacity-60 cursor-not-allowed rounded-xl text-text-muted transition-all"
                                            >
                                                <Apple className="w-5 h-5" />
                                                iOS - Coming Soon
                                            </button>
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-background text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                                                iOS version currently in development
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Portfolio;
