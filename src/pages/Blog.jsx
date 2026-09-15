import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
    {
        title: "The Death of Traditional SEO: Why Velocity Matters",
        snippet: "Search engines are evolving. Static keywords are dead. Learn how high-frequency content updates signal authority to Google's new core algorithm.",
        date: "Oct 12, 2025",
        category: "Strategy"
    },
    {
        title: "Scaling to Series B: A CMO's Playbook",
        snippet: "The exact growth loops and acquisition channels we used to take Fintech giant 'Novus' from $1M to $10M ARR in 8 months.",
        date: "Sep 28, 2025",
        category: "Growth"
    },
    {
        title: "Conversion Rate Optimization is a Myth",
        snippet: "Why tweaking button colors is a waste of time compared to fundamental offer restructuring. Data from 500+ A/B tests.",
        date: "Sep 15, 2025",
        category: "Analytics"
    }
];

const Blog = () => {
    return (
        <section className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-20 border-b-4 border-black pb-8">
                    <h1 className="text-6xl md:text-9xl font-black text-black uppercase tracking-tighter mb-4">
                        Intel
                    </h1>
                    <p className="text-xl font-bold text-gray-500 uppercase tracking-widest">
                        Insights from the <span className="text-primary">Front Lines</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {articles.map((article, index) => (
                        <Link
                            to={`/blog/${article.title.toLowerCase().replace(/ /g, '-').replace(/:/g, '')}`}
                            key={index}
                            className="group cursor-pointer block"
                        >
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                                    <span className="text-primary">{article.category}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-black mb-4 uppercase leading-tight group-hover:text-primary transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-lg text-gray-600 font-medium mb-6 line-clamp-3">
                                    {article.snippet}
                                </p>
                                <div className="flex items-center gap-2 text-black font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                                    Read Article <ArrowRight size={20} />
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
