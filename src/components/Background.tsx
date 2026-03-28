import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 bg-[#07070a] overflow-hidden pointer-events-none">
            {/* Classy Animated Mesh Gradient Effect */}
            <motion.div
                animate={{
                    x: ["0%", "8%", "-5%", "0%"],
                    y: ["0%", "-10%", "5%", "0%"],
                    scale: [1, 1.1, 0.95, 1],
                    opacity: [0.15, 0.3, 0.2, 0.15],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-brand rounded-full blur-[140px] md:blur-[200px]"
            />

            <motion.div
                animate={{
                    x: ["0%", "-10%", "8%", "0%"],
                    y: ["0%", "15%", "-5%", "0%"],
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.1, 0.25, 0.15, 0.1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-brand-light rounded-full blur-[150px] md:blur-[220px]"
            />

            <motion.div
                animate={{
                    x: ["0%", "5%", "-8%", "0%"],
                    y: ["0%", "5%", "-10%", "0%"],
                    scale: [1, 0.9, 1.1, 1],
                    opacity: [0.05, 0.15, 0.08, 0.05],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] bg-brand-dark rounded-full blur-[130px] md:blur-[180px]"
            />

            {/* Premium cinematic noise/grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiAvPgo8cmVjdCB4PSIyIiB5PSIyIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiAvPgo8L3N2Zz4=')]"></div>

            {/* Subtle Grid pattern overlay to maintain structure */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBWMDBIMHY0MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-50"></div>
            
            {/* Cinematic vignette to darken edges and focus on content */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
        </div>
    );
};

export default Background;
