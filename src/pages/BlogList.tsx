import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogs, type BlogPost } from '../data/blog';
import Footer from '../components/Footer';

const BlogList: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 relative z-10 max-w-7xl mx-auto flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-text-muted hover:text-brand hover:border-brand/50 transition-all duration-300 mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
                
                <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">All Articles</h1>
                <div className="w-24 h-1 bg-brand rounded-full mb-6"></div>
                <p className="text-xl text-text-muted max-w-2xl">
                    Dive into our entire archive of tutorials, insights, and tech deep dives.
                </p>
            </motion.div>

            <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
            >
                {blogs.map((blog: BlogPost) => (
                    <motion.div
                        key={blog.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="h-full"
                    >
                        <Link to={`/blog/${blog.id}`} className="block glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/5 hover:border-brand/40 transition-all duration-300 h-full">
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                            <img 
                                src={blog.image} 
                                alt={blog.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-semibold text-brand-light border border-white/10">
                                {blog.category}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-2xl font-bold text-text mb-3 line-clamp-2 group-hover:text-brand-light transition-colors">
                                {blog.title}
                            </h2>
                            <p className="text-text-muted mb-6 line-clamp-3 flex-grow">
                                {blog.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-text-muted/80 mt-auto pt-4 border-t border-white/5">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    <span>{blog.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    <span>{blog.readTime}</span>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
            
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default BlogList;
