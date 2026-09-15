import React from 'react';
import { motion } from 'framer-motion';
import { Users, Recycle, Heart, Briefcase, ShoppingBag, BookOpen } from 'lucide-react';

const metrics = [
    {
        icon: <Users size={36} />,
        value: "35,000+",
        label: "Pakam users",
        client: "Pakam",
        description: "Platform user growth achieved through strategic customer acquisition and education campaigns."
    },
    {
        icon: <Briefcase size={36} />,
        value: "100+",
        label: "Craftsquarre merchants",
        client: "Craftsquarre",
        description: "Creator and merchant onboarding for the marketplace platform."
    },
    {
        icon: <ShoppingBag size={36} />,
        value: "150+",
        label: "Craftsquarre buyers",
        client: "Craftsquarre",
        description: "Early buyer acquisition and market validation for creator products."
    },
    {
        icon: <Recycle size={36} />,
        value: "2 TONS",
        label: "Waste recovered",
        client: "Pakam Challenge",
        description: "Recyclable waste collected through Pakam's Recycle Together Challenge."
    },
    {
        icon: <BookOpen size={36} />,
        value: "30+",
        label: "Schools reached",
        client: "Pakam Challenge",
        description: "Educational institutions engaged in sustainability initiatives."
    },
    {
        icon: <Heart size={36} />,
        value: "700+",
        label: "Meno Haven community",
        client: "Meno Haven",
        description: "Women reached across the wider community ecosystem before product launch."
    }
];

const MotionMetrics = () => {
    return (
        <section className="py-28 bg-black text-white border-b border-gray-900 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white">
                        Growth in <span className="text-primary">Numbers</span>
                    </h2>
                    <p className="text-lg md:text-xl font-bold text-gray-400 leading-relaxed border-l-4 border-primary pl-4 text-left md:text-center md:border-l-0 md:pl-0">
                        Every number represents real businesses, real communities, and measurable growth achieved through strategy, execution, and consistent marketing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-gray-950 p-8 border-2 border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between text-left shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,94,0,1)] cursor-pointer"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="p-3 bg-black text-primary group-hover:bg-primary group-hover:text-black transition-colors rounded">
                                        {metric.icon}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary/20">
                                        {metric.client || 'Project Result'}
                                    </span>
                                </div>

                                <h3 className="text-4xl sm:text-5xl font-black mb-2 text-white group-hover:text-primary transition-colors tracking-tight">
                                    {metric.value}
                                </h3>

                                <h4 className="text-lg font-bold uppercase tracking-wider text-gray-300 mb-3">
                                    {metric.label}
                                </h4>

                                {metric.tagline && (
                                    <div className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
                                        {metric.tagline}
                                    </div>
                                )}

                                <p className="text-gray-400 font-medium leading-relaxed border-l-2 border-gray-800 group-hover:border-primary transition-colors pl-4">
                                    {metric.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MotionMetrics;
