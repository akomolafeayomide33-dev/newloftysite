import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Hero = () => {
    const { openModal } = useModal();
    return (
        <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-background border-b border-black">

            {/* Grid Background - Made slightly more prominent for depth */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 py-2 px-4 bg-black text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Growth Consultancy
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 text-black tracking-tighter uppercase relative z-20">
                                Marketing That <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Drives Growth.</span>
                            </h1>

                            <p className="text-lg md:text-xl font-bold text-black/80 max-w-xl mb-8 border-l-4 border-primary pl-5 py-1 leading-relaxed">
                                We help ambitious businesses grow through strategy, campaigns, paid advertising, and marketing systems designed to generate measurable results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
                                <button onClick={openModal} className="px-8 py-4 bg-primary text-white font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 text-base transform hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                                    BOOK A GROWTH AUDIT
                                    <ArrowRight size={20} strokeWidth={3} />
                                </button>
                                <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-gray-50 transition-all border-2 border-black flex items-center justify-center gap-3 text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                                    VIEW CASE STUDIES
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Side - Neo-Brutalist Floating Card */}
                    <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px] perspective-1000">

                        {/* Abstract shapes / Velocity Trails Background Layer */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-primary/20 rounded-full z-0 dashed-circle"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-black/10 rounded-full z-0"
                        />

                        {/* Floating Image Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative z-10 w-full h-[480px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-2 border-black/10"
                        >
                            <img
                                src="/hero-strategy.png"
                                alt="African Growth Consultancy Executive Team"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            {/* Overlay Text in Image */}
                            <div className="absolute bottom-6 left-6">
                                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest mb-1 text-xs">
                                    <Zap size={14} fill="currentColor" />
                                    Strategy
                                </div>
                                <h3 className="text-white text-xl font-black uppercase">Growth <br />Execution</h3>
                            </div>
                        </motion.div>

                        {/* Floating Verifiable Client Outcome Proof Badge */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="absolute -bottom-8 -left-8 z-20 bg-white/10 backdrop-blur-xl border border-white/40 p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] w-64 text-black"
                        >
                            <div className="flex justify-between items-center mb-1">
                                <TrendingUp size={24} className="text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-widest bg-primary/20 text-primary px-2 py-0.5 rounded-full">PAKAM</span>
                            </div>
                            <div className="text-3xl font-black text-black tracking-tight mb-0.5">+1,000%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-800">USER GROWTH</div>

                            {/* Mini growth bar indicator */}
                            <div className="w-full h-1 bg-gray-200 mt-3 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "92%" }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
