import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
    "Flutter", "React", "Node.js", "Django", "Golang", "Python", "JavaScript", "Assembly"
];

const About: React.FC = () => {
    return (
        <section id="about" className="relative z-10 w-full max-w-6xl px-6 py-24 mx-auto md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-16 text-center"
            >
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">About Me</h2>
                <div className="w-20 h-1 rounded-full bg-brand"></div>
            </motion.div>

            <div className="grid items-center gap-12 md:grid-cols-2">
                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6 text-lg leading-relaxed text-text-muted"
                >
                    <p>
                        I'm a <strong className="font-medium text-text">Cybersecurity student</strong> at the Federal University of Technology, Akure, with an expected graduation in 2027. My tech journey began in 2020, driven by a passion for creating secure, scalable, and impactful digital experiences.
                    </p>
                    <p>
                        With a unique blend of development expertise and a security-first mindset, I build applications that are not only visually stunning and highly performant but also robust and secure from the ground up.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <div className="flex-1 p-4 text-center rounded-xl glass-card">
                            <div className="mb-1 text-3xl font-bold text-brand">6+</div>
                            <div className="text-sm font-medium">Years coding</div>
                        </div>
                        <div className="flex-1 p-4 text-center rounded-xl glass-card">
                            <div className="mb-1 text-3xl font-bold text-brand">30+</div>
                            <div className="text-sm font-medium">Projects</div>
                        </div>
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="p-8 glass-card"
                >
                    <h3 className="mb-6 text-xl font-semibold text-text">Core Stack & Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                        {SKILLS.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                                whileHover={{ y: -3, scale: 1.05 }}
                                className="px-4 py-2 font-medium transition-colors border rounded-full cursor-pointer border-brand/30 bg-brand/5 text-brand-light hover:bg-brand/20 hover:border-brand"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
