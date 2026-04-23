import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Github, Sparkles, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, toProjectSlug, toSlug } from '../data/portfolio';

const PortfolioProject: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const project = useMemo(() => {
        if (!id) return null;
        return PORTFOLIO_DATA.find((item) => item.id === Number(id)) ?? null;
    }, [id]);

    const relatedProjects = useMemo(() => {
        if (!project) return [];
        return PORTFOLIO_DATA
            .filter((item) => item.category === project.category && item.id !== project.id)
            .slice(0, 3);
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen pt-28 px-6 md:px-12 max-w-5xl mx-auto text-text">
                <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-2 text-text/70 hover:text-brand transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </button>
                <h1 className="mt-8 text-3xl md:text-5xl font-bold">Project not found</h1>
                <p className="mt-4 text-text/75">The project you requested does not exist.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-6xl mx-auto text-text">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <button
                    onClick={() => navigate(`/portfolio/${toSlug(project.category)}`)}
                    className="inline-flex items-center gap-2 text-text/70 hover:text-brand transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to {project.category}
                </button>
            </motion.div>

            <motion.article
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="editorial-shell"
            >
                <div className="relative h-80 md:h-[28rem] bg-brand-dark/20">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                    <div className="absolute inset-0 ink-grid opacity-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-9">
                        <span className="eyebrow mb-4">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl headline-gradient">{project.title}</h1>
                    </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10 grid gap-8 lg:grid-cols-[1.8fr_1fr]">
                    <section className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="glass rounded-2xl border border-white/10 p-4">
                                <p className="text-[11px] uppercase tracking-[0.22em] text-brand-light/80 mb-2">Role</p>
                                <p className="text-sm text-text/85">{project.role}</p>
                            </div>
                            <div className="glass rounded-2xl border border-white/10 p-4">
                                <p className="text-[11px] uppercase tracking-[0.22em] text-brand-light/80 mb-2">Timeline</p>
                                <p className="text-sm text-text/85">{project.timeline}</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-3">Project Story</h2>
                            <p className="text-text/80 leading-relaxed">{project.story}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="glass rounded-2xl border border-white/10 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-brand-light/80 mb-2">Challenge</p>
                                <p className="text-sm text-text/80 leading-relaxed">{project.challenge}</p>
                            </div>
                            <div className="glass rounded-2xl border border-white/10 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-brand-light/80 mb-2">Approach</p>
                                <p className="text-sm text-text/80 leading-relaxed">{project.approach}</p>
                            </div>
                            <div className="glass rounded-2xl border border-white/10 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-brand-light/80 mb-2">Result</p>
                                <p className="text-sm text-text/80 leading-relaxed">{project.result}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.highlights.map((highlight) => (
                                    <span
                                        key={highlight}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/15 glass text-text/85"
                                    >
                                        <Sparkles className="w-3.5 h-3.5 text-brand-light" />
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-brand/25 bg-brand/10 p-5">
                            <h3 className="text-lg font-semibold mb-3">Outcome Notes</h3>
                            <div className="space-y-2 text-sm text-text/80">
                                {project.outcomePoints.map((point) => (
                                    <p key={point} className="leading-relaxed">{point}</p>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 text-xs border rounded-full border-white/10 text-text/70"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    <aside className="space-y-4">
                        {project.github && project.github !== '#' && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-brand/40 text-brand-light hover:bg-brand/10 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                View Code
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        )}

                        {project.live && project.live !== '#' && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/20 text-text hover:border-brand/40 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Visit Live Project
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        )}

                        {project.hasApk && project.downloadLink !== '#' && (
                            <a
                                href={project.downloadLink}
                                download={project.downloadName}
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand text-white hover:brightness-110 transition-all"
                            >
                                <Download className="w-4 h-4" />
                                Download APK
                            </a>
                        )}

                        <button
                            onClick={() => navigate(`/portfolio/${toSlug(project.category)}`)}
                            className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-text/80 hover:text-text transition-colors"
                        >
                            Explore {project.category}
                        </button>
                    </aside>
                </div>
            </motion.article>

            {relatedProjects.length > 0 && (
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-5">Related Projects</h2>
                    <div className="grid md:grid-cols-3 gap-5">
                        {relatedProjects.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => navigate(`/portfolio/project/${item.id}/${toProjectSlug(item.title)}`)}
                                className="text-left editorial-shell rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform"
                            >
                                <img src={item.image} alt={item.title} className="h-36 w-full object-cover" />
                                <div className="p-4">
                                    <p className="font-semibold leading-snug">{item.title}</p>
                                    <p className="mt-2 text-sm text-text/70 line-clamp-3">{item.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default PortfolioProject;
