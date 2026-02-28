import React from 'react';
import { motion } from 'framer-motion';
import { Github as GithubIcon, Activity } from 'lucide-react';

const Github: React.FC = () => {
    // Generate mock contribution data (52 weeks * 7 days)
    const weeks = 52;
    const daysPerWeek = 7;

    // Create a pattern that looks somewhat realistic
    const contributions = Array.from({ length: weeks * daysPerWeek }).map((_, i) => {
        // Randomize intensity 0-4
        // More intense towards the end (right side) to show growth
        const baseProbability = (i / (weeks * daysPerWeek)) * 0.5 + 0.1;
        if (Math.random() > baseProbability) return 0; // Empty

        const intensity = Math.floor(Math.random() * 4) + 1; // 1 to 4
        return intensity;
    });

    const getIntensityColor = (intensity: number) => {
        switch (intensity) {
            case 0: return 'bg-background-light/50 border border-white/5'; // empty
            case 1: return 'bg-brand/30 border border-brand/20'; // low
            case 2: return 'bg-brand/50 border border-brand/40'; // medium
            case 3: return 'bg-brand/80 border border-brand/60'; // high
            case 4: return 'bg-brand-light border border-brand-light/80 shadow-[0_0_8px_rgba(253,240,167,0.8)]'; // very high
            default: return 'bg-background-light/50 border border-white/5';
        }
    };

    return (
        <section id="github" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 md:p-12 relative overflow-hidden"
            >
                {/* Background Accent */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand/10 rounded-full blur-[80px]"></div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <GithubIcon className="w-8 h-8 text-text" />
                            <h2 className="text-3xl font-bold text-text">Open Source</h2>
                        </div>
                        <p className="text-text-muted flex items-center gap-2">
                            <Activity className="w-4 h-4 text-brand-light" />
                            Building in public & contributing to the community
                        </p>
                    </div>

                    <a
                        href="https://github.com/Brillo-Digitals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full border border-brand/30 text-brand-light font-medium hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 flex items-center gap-2"
                    >
                        @Brillo-Digitals
                    </a>
                </div>

                {/* Contribution Grid */}
                <div className="overflow-x-auto pb-4 relative z-10 custom-scrollbar">
                    <div className="flex gap-1 min-w-max">
                        {Array.from({ length: weeks }).map((_, weekIndex) => (
                            <div key={weekIndex} className="flex flex-col gap-1">
                                {Array.from({ length: daysPerWeek }).map((_, dayIndex) => {
                                    const day = weekIndex * daysPerWeek + dayIndex;
                                    const intensity = contributions[day];
                                    return (
                                        <motion.div
                                            key={day}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.2,
                                                delay: (weekIndex * 0.01) + (dayIndex * 0.005)
                                            }}
                                            className={`w-3 h-3 md:w-4 md:h-4 rounded-[2px] ${getIntensityColor(intensity)}`}
                                        ></motion.div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-end items-center gap-2 text-xs text-text-muted">
                        <span>Less</span>
                        <div className={`w-3 h-3 rounded-[2px] ${getIntensityColor(0)}`}></div>
                        <div className={`w-3 h-3 rounded-[2px] ${getIntensityColor(1)}`}></div>
                        <div className={`w-3 h-3 rounded-[2px] ${getIntensityColor(2)}`}></div>
                        <div className={`w-3 h-3 rounded-[2px] ${getIntensityColor(3)}`}></div>
                        <div className={`w-3 h-3 rounded-[2px] ${getIntensityColor(4)}`}></div>
                        <span>More</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Github;
