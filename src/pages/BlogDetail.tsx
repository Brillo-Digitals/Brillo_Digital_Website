import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { blogs } from '../data/blog';
import Footer from '../components/Footer';

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    // Find the requested blog post
    const blog = blogs.find(b => b.id === id);

    // Scroll to the top when the component mounts or id changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Handle case where blog isn't found
    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center relative z-10">
                <h1 className="text-4xl font-bold mb-4 text-text">Blog not found</h1>
                <p className="text-text-muted mb-8 text-center max-w-md">We couldn't find the article you're looking for. It might have been removed or the URL is incorrect.</p>
                <button onClick={() => navigate('/blog')} className="px-6 py-3 bg-brand hover:bg-brand-light text-white font-semibold rounded-full transition-all duration-300">
                    Return to all articles
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 relative z-10 flex flex-col">
            <article className="max-w-4xl mx-auto px-6 md:px-12 w-full">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link 
                        to="/blog" 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-text-muted hover:text-brand hover:border-brand/50 transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Articles
                    </Link>
                </motion.div>

                {/* Article Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-10 text-center md:text-left"
                >
                    <div className="mb-6 inline-block px-4 py-1.5 rounded-full glass border border-brand/30 text-brand-light text-sm font-semibold tracking-wide">
                        {blog.category}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text mb-6 leading-tight">
                        {blog.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-text-muted border-b border-white/10 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-brand" />
                            <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-brand" />
                            <span>{blog.readTime}</span>
                        </div>
                        <button className="flex items-center gap-2 hover:text-brand transition-colors ml-auto group border border-white/10 px-4 py-1.5 rounded-full glass">
                            <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="text-sm">Share</span>
                        </button>
                    </div>
                </motion.header>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden mb-16 relative border border-white/10 shadow-[0_0_40px_rgba(218,175,111,0.15)]"
                >
                    <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent mix-blend-multiply opacity-50"></div>
                </motion.div>

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="prose prose-invert prose-lg max-w-none 
                               prose-headings:text-text prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                               prose-p:text-text-muted prose-p:leading-relaxed prose-p:mb-8
                               prose-a:text-brand hover:prose-a:text-brand-light 
                               prose-strong:text-text prose-strong:font-semibold
                               prose-blockquote:border-l-brand prose-blockquote:bg-brand/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:text-brand-light prose-blockquote:italic
                               mb-24"
                    dangerouslySetInnerHTML={{ __html: blog.content }} 
                />

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 p-8 glass-card rounded-3xl border border-brand/20 text-center relative overflow-hidden flex flex-col items-center"
                >
                     <div className="absolute inset-0 bg-brand/5 pointer-events-none"></div>
                     <h3 className="text-3xl font-bold text-text mb-4 z-10">Enjoyed this article?</h3>
                     <p className="text-text-muted mb-8 max-w-lg z-10">Follow me on Github or reach out if you'd like to collaborate on your next big project.</p>
                     <div className="flex gap-4 z-10">
                        <Link to="/" className="px-8 py-3 bg-brand hover:bg-brand-light text-white font-semibold rounded-full transition-all duration-300">
                             Contact Me
                         </Link>
                     </div>
                </motion.div>
            </article>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default BlogDetail;
