import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [focused, setFocused] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const handleFocus = (field: string) => setFocused(field);
    const handleBlur = () => setFocused(null);

    const inputClasses = (field: string) => `
    w-full bg-background-light/50 border rounded-xl px-4 py-3 text-text outline-none transition-all duration-300
    ${focused === field ? 'border-brand shadow-[0_0_10px_rgba(218,175,111,0.2)]' : 'border-white/10 hover:border-white/20'}
  `;

    return (
        <section id="contact" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Connect</h2>
                <div className="w-20 h-1 bg-brand rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold mb-6 text-text">Reach Out</h3>
                    <p className="text-text-muted mb-8 leading-relaxed">
                        Interested in working together or have a question? Fill out the form or reach out through my social channels. Let's build something extraordinary.
                    </p>

                    <div className="space-y-4">
                        <a href="mailto:hello@brillodigitals.com" className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 border border-white/5 hover:border-brand/30 transition-all group">
                            <div className="p-3 rounded-lg bg-brand/10 text-brand group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-sm text-text-muted">Email</div>
                                <div className="font-medium text-text">uthmanadesiyan112@gmail.com</div>
                            </div>
                        </a>

                        <a href="#" className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 border border-white/5 hover:border-brand/30 transition-all group">
                            <div className="p-3 rounded-lg bg-brand/10 text-brand group-hover:scale-110 transition-transform">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-sm text-text-muted">LinkedIn</div>
                                <div className="font-medium text-text">Uthman Adesiyan</div>
                            </div>
                        </a>

                        <a href="#" className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/5 border border-white/5 hover:border-brand/30 transition-all group">
                            <div className="p-3 rounded-lg bg-brand/10 text-brand group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-sm text-text-muted">WhatsApp</div>
                                <div className="font-medium text-text">+234 8146269699</div>
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6 relative overflow-hidden">
                        {isSubmitted && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 border-2 border-brand/50 rounded-2xl"
                            >
                                <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mb-4 text-brand-light">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-text mb-2">Message Sent!</h3>
                                <p className="text-text-muted">I'll get back to you as soon as possible.</p>
                            </motion.div>
                        )}

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formState.name}
                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                                onFocus={() => handleFocus('name')}
                                onBlur={handleBlur}
                                className={inputClasses('name')}
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formState.email}
                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                                onFocus={() => handleFocus('email')}
                                onBlur={handleBlur}
                                className={inputClasses('email')}
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={formState.message}
                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                                onFocus={() => handleFocus('message')}
                                onBlur={handleBlur}
                                className={`${inputClasses('message')} resize-none`}
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 ${isSubmitting
                                ? 'bg-brand/50 text-white/50 cursor-not-allowed'
                                : 'bg-brand hover:bg-brand-light text-white shadow-[0_0_15px_rgba(218,175,111,0.4)] hover:shadow-[0_0_25px_rgba(218,175,111,0.6)]'
                                }`}
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" /> Send Message
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
