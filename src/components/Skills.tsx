import React from 'react';
import { motion } from 'framer-motion';
import {
    SiDart, SiJavascript, SiPython, SiGo,
    SiFlutter, SiReact, SiNodedotjs, SiDjango,
    SiWordpress, SiShopify, SiWix
} from 'react-icons/si';
import { Mail, Share2, TrendingUp, Code2 } from 'lucide-react';

const SKILL_GROUPS = [
    {
        title: "Languages",
        icon: <Code2 className="w-5 h-5" />,
        items: [
            { name: "Dart", icon: <SiDart /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Python", icon: <SiPython /> },
            { name: "Golang", icon: <SiGo /> },
            { name: "Assembly", icon: <span className="font-mono text-xs font-bold">ASM</span> },
        ]
    },
    {
        title: "Frameworks & Tools",
        icon: <SiReact className="w-5 h-5" />,
        items: [
            { name: "Flutter", icon: <SiFlutter /> },
            { name: "React", icon: <SiReact /> },
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Django", icon: <SiDjango /> },
        ]
    },
    {
        title: "CMS & Marketing",
        icon: <TrendingUp className="w-5 h-5" />,
        items: [
            { name: "WordPress", icon: <SiWordpress /> },
            { name: "Shopify", icon: <SiShopify /> },
            { name: "Wix", icon: <SiWix /> },
            { name: "SEO", icon: <TrendingUp /> },
            { name: "Email", icon: <Mail /> },
            { name: "Social Ads", icon: <Share2 /> },
        ]
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
                <div className="w-20 h-1 bg-brand rounded-full mb-6"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {SKILL_GROUPS.map((group, groupIdx) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5 text-text">
                            <div className="text-brand-light">
                                {group.icon}
                            </div>
                            <h3 className="text-xl font-bold">{group.title}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {group.items.map((item, itemIdx) => (
                                <motion.div
                                    key={item.name}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: (groupIdx * 0.1) + (itemIdx * 0.05) }}
                                    className="group flex flex-col items-center justify-center p-4 glass rounded-xl border border-white/5 hover:border-brand/50 hover:bg-brand/10 transition-all duration-300 cursor-default"
                                >
                                    <div className="text-3xl mb-3 text-text-muted group-hover:text-brand-light transition-colors drop-shadow-[0_0_8px_rgba(218,175,111,0)] group-hover:drop-shadow-[0_0_8px_rgba(218,175,111,0.6)]">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-medium text-text text-center">
                                        {item.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
