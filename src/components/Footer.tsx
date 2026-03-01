import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SiFacebook, SiInstagram, SiWhatsapp, SiX, SiTiktok } from 'react-icons/si';

const Footer: React.FC = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full py-8 mt-12 border-t border-white/5 bg-background/50 backdrop-blur-sm"
        >
            <div className="flex flex-col items-center justify-between gap-4 px-6 mx-auto max-w-7xl md:px-12 md:flex-row">
                <div className="flex items-center">
                    <img src="/b_d_logo.png" alt="Brillo Digitals" className="object-contain w-auto h-10 md:h-12" />
                </div>

                <p className="text-sm text-text-muted">
                    &copy; {new Date().getFullYear()} Brillo Digitals. All rights reserved.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a href="https://github.com/Brillo-Digitals" className="p-2 transition-colors rounded-full glass hover:bg-brand hover:text-white group" aria-label="Github">
                        <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                    <a href="#" className="p-2 transition-colors rounded-full glass hover:bg-brand hover:text-white group" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                    <a href="https://x.com/brillodigitals" className="p-2 transition-colors rounded-full glass hover:bg-brand hover:text-white group" aria-label="Twitter / X">
                        <SiX className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                    <a href="https://www.instagram.com/brillo_digitals112/" className="p-2 transition-colors rounded-full glass hover:bg-brand hover:text-white group" aria-label="Instagram">
                        <SiInstagram className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=61561449877042" className="p-2 transition-colors rounded-full glass hover:bg-brand hover:text-white group" aria-label="Facebook">
                        <SiFacebook className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                    <a href="https://www.tiktok.com/@brillo_digitals" className="p-2 transition-colors rounded-full glass hover:bg-brand hover:text-white group" aria-label="TikTok">
                        <SiTiktok className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                    <a href="https://wa.me/2348146269699" className="p-2 transition-colors rounded-full glass hover:bg-brand hover:text-white group" aria-label="WhatsApp">
                        <SiWhatsapp className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                    <a href="mailto:hello@brillodigitals.com" className="p-2 transition-colors rounded-full glass hover:bg-brand hover:text-white group" aria-label="Email">
                        <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
