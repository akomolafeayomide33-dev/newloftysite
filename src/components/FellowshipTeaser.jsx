import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

const FellowshipTeaser = () => {
    return (
        <section className="py-20 bg-black text-white border-b border-gray-900">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto border-2 border-gray-800 p-8 md:p-12 bg-gray-950 shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 py-1 px-3 bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4 border border-primary/30">
                            <BookOpen size={12} /> LOFTY GROWTH SYSTEMS FELLOWSHIP
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4 leading-snug">
                            Learn to think in structured growth systems and level up your digital marketing skills.
                        </h3>
                        <div className="flex flex-wrap gap-3 text-xs font-bold text-gray-300">
                            <span className="py-1 px-3 bg-gray-900 border border-gray-800 uppercase tracking-wider">6 Weeks</span>
                            <span className="py-1 px-3 bg-gray-900 border border-gray-800 uppercase tracking-wider">Selective Cohort</span>
                            <span className="py-1 px-3 bg-gray-900 border border-gray-800 uppercase tracking-wider">Live Sessions + Assignments</span>
                            <span className="py-1 px-3 bg-primary/10 text-primary border border-primary/30 uppercase tracking-wider">Free Pilot Program</span>
                        </div>
                    </div>

                    <Link
                        to="/fellowship"
                        className="flex-shrink-0 px-6 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 border-2 border-primary"
                    >
                        EXPLORE THE FELLOWSHIP
                        <ArrowRight size={16} strokeWidth={3} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FellowshipTeaser;
