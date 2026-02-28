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
            className="relative z-10 w-full border-t border-white/5 bg-background/50 backdrop-blur-sm mt-12 py-8"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center">
                    <img src="/b_d_logo.png" alt="Brillo Digitals" className="h-10 md:h-12 w-auto object-contain" />
                </div>

                <p className="text-sm text-text-muted">
                    &copy; {new Date().getFullYear()} Uthman Adesiyan. All rights reserved.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4">
                    <a href="#" className="p-2 rounded-full glass hover:bg-brand hover:text-white transition-colors group" aria-label="Github">
                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-2 rounded-full glass hover:bg-brand hover:text-white transition-colors group" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-2 rounded-full glass hover:bg-brand hover:text-white transition-colors group" aria-label="Twitter / X">
                        <SiX className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-2 rounded-full glass hover:bg-brand hover:text-white transition-colors group" aria-label="Instagram">
                        <SiInstagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-2 rounded-full glass hover:bg-brand hover:text-white transition-colors group" aria-label="Facebook">
                        <SiFacebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-2 rounded-full glass hover:bg-brand hover:text-white transition-colors group" aria-label="TikTok">
                        <SiTiktok className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-2 rounded-full glass hover:bg-brand hover:text-white transition-colors group" aria-label="WhatsApp">
                        <SiWhatsapp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="mailto:hello@brillodigitals.com" className="p-2 rounded-full glass hover:bg-brand hover:text-white transition-colors group" aria-label="Email">
                        <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
