import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const TITLES = [
    "Flutter App Developer",
    "Full Stack Web Developer",
    "Cybersecurity Enthusiast",
    "Digital Strategist"
];

const Hero: React.FC = () => {
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 sm:px-12 z-10">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Intro Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand/30 text-brand-light text-sm font-medium tracking-wide"
                >
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                    Welcome to my digital space
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-4 text-text"
                >
                    Uthman Adesiyan
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-text-muted font-light mb-8 flex flex-col sm:flex-row items-center gap-2"
                >
                    <span>Founder of</span>
                    <span className="font-semibold text-text">Brillo Digitals</span>
                </motion.p>

                {/* Rotating Titles */}
                <div className="h-16 md:h-20 mb-10 w-full overflow-hidden relative flex justify-center items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={titleIndex}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute text-2xl sm:text-4xl md:text-5xl font-bold text-gradient animate-gradient-x"
                        >
                            {TITLES[titleIndex]}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a href="#portfolio" className="group relative px-8 py-4 bg-brand hover:bg-brand-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(218,175,111,0.4)] hover:shadow-[0_0_30px_rgba(218,175,111,0.6)] flex items-center justify-center gap-2 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            View Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a href="#contact" className="px-8 py-4 glass hover:bg-white/5 text-text font-semibold rounded-full transition-all duration-300 border border-white/10 hover:border-brand/50 flex items-center justify-center">
                        Contact Me
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex lg:mx-4 flex-col items-center"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent"></div>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="mt-2 text-brand-light"
                    >
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}

        </section>
    );
};

export default Hero;
