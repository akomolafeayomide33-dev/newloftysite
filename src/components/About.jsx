import React from 'react';
import { motion } from 'framer-motion';
import { Award, DollarSign, Users, Globe, Database, ArrowUpRight, Zap, Target } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
    return (
        <section id="agency" className="py-32 bg-surface border-b border-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-start">

                    {/* Content */}
                    <div className="w-full lg:w-5/12">
                        <span className="inline-block py-2 px-4 border-2 border-black font-bold uppercase tracking-widest text-xs mb-8">About The Agency</span>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter mb-8 leading-[0.9]">
                                Relentless <br />
                                <span className="text-primary">Pursuit.</span>
                            </h2>
                            <p className="text-2xl font-bold text-black mb-8 leading-tight border-l-4 border-primary pl-4">
                                We don't just create marketing. We build systems designed to drive growth.
                            </p>
                            <p className="text-text-muted text-lg mb-6 leading-relaxed max-w-lg">
                                Lofty Brands was built on a simple belief. Growth comes from clarity, systems, and disciplined execution, not noise. We partner with startups and established businesses to design marketing strategies that convert attention into measurable outcomes.
                            </p>
                            <p className="text-text-muted text-lg mb-12 leading-relaxed max-w-lg">
                                We combine strategy, automation, and smart execution to help brands grow efficiently and sustainably.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bento Box Grid Visual */}
                    <div className="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-4 h-auto md:h-[600px] auto-rows-fr">

                        {/* Box 1: Strategy First */}
                        <div className="col-span-2 md:col-span-1 bg-white border-2 border-black p-6 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-shadow min-h-[180px]">
                            <Target size={48} className="text-primary" />
                            <div>
                                <div className="text-xl font-black text-black uppercase mb-1">Strategy First</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-600">Clarity before execution.</div>
                            </div>
                        </div>

                        {/* Box 2: ROI Focused */}
                        <div className="bg-white text-black p-6 border-2 border-black flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-shadow min-h-[180px]">
                            <div className="p-3 bg-primary text-white rounded-lg w-fit">
                                <DollarSign size={32} />
                            </div>
                            <div>
                                <div className="font-black uppercase tracking-tight text-xl mb-1">ROI Focused</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-600">Execution tied to business outcomes.</div>
                            </div>
                        </div>

                        {/* Box 3: Systems Driven */}
                        <div className="bg-black text-white p-6 border-2 border-black flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] hover:shadow-none transition-shadow min-h-[180px]">
                            <div className="p-3 bg-primary text-white rounded-lg w-fit">
                                <Database size={32} />
                            </div>
                            <div>
                                <div className="font-black uppercase tracking-tight text-xl text-white mb-1">Systems Driven</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Repeatable systems, funnels, and processes.</div>
                            </div>
                        </div>

                        {/* Box 4: Built for Scale */}
                        <div className="col-span-2 md:col-span-3 bg-gray-900 border-2 border-black p-8 relative overflow-hidden group min-h-[240px] flex flex-col justify-end text-white">
                            {/* Map Background Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589519160732-5796a5987c3c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-60" />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-6">
                                <div>
                                    <h4 className="text-3xl md:text-4xl font-black uppercase mb-2">Built for Scale</h4>
                                    <p className="font-medium text-gray-300 max-w-md">Marketing designed to grow with the business.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(255,94,0,0.8)]" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Live Growth Systems</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
