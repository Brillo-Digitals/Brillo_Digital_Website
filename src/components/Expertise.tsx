import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Smartphone, MonitorPlay, ShieldCheck } from 'lucide-react';

const EXPERTISE_DATA = [
    {
        title: "Mobile Development",
        icon: <Smartphone className="w-8 h-8" />,
        skills: ["Flutter apps", "Clean architecture", "State management", "Backend integration"],
        delay: 0.1,
    },
    {
        title: "Full Stack Development",
        icon: <MonitorPlay className="w-8 h-8" />,
        skills: ["React", "Node.js", "Django", "REST APIs", "Authentication systems"],
        delay: 0.2,
    },
    {
        title: "Cybersecurity",
        icon: <ShieldCheck className="w-8 h-8" />,
        skills: ["Secure architecture", "Backend hardening", "Security-first design"],
        delay: 0.3,
    }
];

interface CardProps {
    data: typeof EXPERTISE_DATA[0];
}

const ExpertiseCard: React.FC<CardProps> = ({ data }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const rotateXValue = event.clientY - rect.top - rect.height / 2;
        const rotateYValue = event.clientX - rect.left - rect.width / 2;
        x.set(rotateYValue);
        y.set(rotateXValue);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: data.delay }}
            style={{ perspective: 1000 }}
            className="h-full"
        >
            <motion.div
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="h-full group relative p-8 rounded-2xl bg-background-light/40 backdrop-blur-lg border border-white/5 hover:border-brand/40 transition-colors duration-300"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-brand/0 group-hover:bg-brand/5 blur-xl transition-all duration-500 pointer-events-none"></div>
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-brand/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {data.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-text group-hover:text-brand-light transition-colors">
                        {data.title}
                    </h3>
                    <ul className="space-y-3 mt-auto">
                        {data.skills.map((skill, i) => (
                            <li key={i} className="flex items-center text-text-muted">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-light mr-3"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Expertise: React.FC = () => {
    return (
        <section id="expertise" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Expertise</h2>
                <div className="w-20 h-1 bg-brand rounded-full mb-6"></div>
                <p className="text-text-muted max-w-2xl text-lg">
                    Specializing in end-to-end digital solutions, combining robust engineering with a security-first approach.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
                {EXPERTISE_DATA.map((expertise, idx) => (
                    <ExpertiseCard key={idx} data={expertise} />
                ))}
            </div>
        </section>
    );
};

export default Expertise;
