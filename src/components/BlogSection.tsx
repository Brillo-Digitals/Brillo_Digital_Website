import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogs, type BlogPost } from '../data/blog';

const BlogCard: React.FC<{ blog: BlogPost }> = ({ blog }) => (
    <div className="flex-shrink-0 w-[320px] sm:w-[380px] h-[480px] glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/5 hover:border-brand/50 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
            <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-semibold text-brand-light border border-white/10">
                {blog.category}
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-text mb-3 line-clamp-2 group-hover:text-brand-light transition-colors">
                {blog.title}
            </h3>
            <p className="text-text-muted text-sm mb-4 line-clamp-3 flex-grow">
                {blog.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-text-muted/80 mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{blog.readTime}</span>
                </div>
            </div>
        </div>
    </div>
);

const BlogSection: React.FC = () => {
    // Take the first 6 blogs for the home page section
    const featuredBlogs = blogs.slice(0, 6);
    
    // Duplicate the array to create a seamless infinite loop
    const doubledBlogs = [...featuredBlogs, ...featuredBlogs];

    return (
        <section id="blog" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text">Latest Insights</h2>
                    <div className="w-20 h-1 bg-brand rounded-full mx-auto md:mx-0 mb-4"></div>
                    <p className="text-text-muted text-lg max-w-xl">
                        Thoughts, tutorials, and deep dives into software engineering and digital strategy.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Link 
                        to="/blog" 
                        className="group flex items-center gap-2 px-6 py-3 rounded-full border border-brand/30 text-brand-light font-semibold hover:bg-brand hover:text-white transition-all duration-300"
                    >
                        Show More 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Infinite Looping Marquee */}
            <div className="w-full relative py-4">
                {/* Gradient fades on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ 
                            ease: "linear", 
                            duration: 35, 
                            repeat: Infinity 
                        }}
                        className="flex gap-6 px-3 w-max"
                    >
                        {doubledBlogs.map((blog, idx) => (
                            <BlogCard key={`${blog.id}-${idx}`} blog={blog} />
                        ))}
                    </motion.div>
                </div>
            </div>
            
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        </section>
    );
};

export default BlogSection;
