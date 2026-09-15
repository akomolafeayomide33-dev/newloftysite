import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "Craftsquarre",
        slug: "craftsquarre",
        category: "Marketplace / Ecommerce",
        image: "/craftsquarre/craftsquarre-desktop-hero-full.png",
        metric: "100+ Merchants • 150+ Buyers",
        description: "Helping creativity get discovered by building the brand, marketing system, and growth foundation behind a marketplace for Nigerian creators.",
        highlight: true
    },
    {
        title: "Pakam",
        slug: "pakam",
        category: "Circular Economy Technology",
        image: "/pakam/pakam-workshop-presenter.jpg",
        metric: "3,000 → 35,000+ Users",
        description: "From product to market movement through education, storytelling, and community-driven campaigns.",
        highlight: true
    },
    {
        title: "Meno Haven",
        slug: "meno-haven",
        category: "Community Growth / Lifecycle Marketing",
        image: "/meno-haven/meno-haven-group-terrace.jpg",
        metric: "0 → 700+ Community Members",
        description: "Building the community before building the product. Lofty Brands helped build the audience, engagement system, expert programming, and community infrastructure needed to give the platform somewhere to grow.",
        highlight: true
    }
];

const Portfolio = () => {
    return (
        <section id="work" className="py-32 bg-black text-white relative border-b border-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div>
                        <span className="text-primary font-bold tracking-[0.2em] uppercase mb-2 block">Proven Results</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter">
                            Proven <span className="text-stroke-white text-transparent">Execution</span>
                        </h2>
                    </div>
                    <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="hidden md:flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-primary transition-colors">
                        View Full Archive <ArrowUpRight />
                    </button>
                </div>

                <div className="flex flex-col gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-gray-800 pt-16 hover:border-primary transition-colors"
                        >
                            <div className="order-2 lg:order-1">
                                <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">{project.category}</span>
                                <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <div className="inline-block bg-white text-black px-6 py-3 font-black text-xl uppercase tracking-wider mb-8 transform -skew-x-12">
                                    <span className="block skew-x-12">{project.metric}</span>
                                </div>
                                <p className="text-gray-400 max-w-md mb-8 text-lg font-medium">
                                    {project.description}
                                </p>
                                <Link to={`/work/${project.slug}`} className="text-white font-bold uppercase tracking-widest border-b-2 border-primary pb-1 group-hover:text-primary transition-colors">
                                    Read Case Study
                                </Link>
                            </div>

                            <div className="order-1 lg:order-2 overflow-hidden border-2 border-gray-800 group-hover:border-primary transition-all relative">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full aspect-video object-cover object-top filter contrast-105 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-24 md:hidden">
                    <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest w-full">
                        View Full Archive
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
