import React from 'react';
import { Compass, Target, LayoutGrid, Award, Workflow, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Compass size={36} />,
        title: "Growth Strategy",
        description: "For businesses that need clarity before investing more in marketing. Understand what's holding growth back, identify new opportunities, and build a strategy that supports sustainable business growth."
    },
    {
        icon: <Target size={36} />,
        title: "Paid Advertising",
        description: "Launch and optimize Meta and Google campaigns that generate qualified leads, customers, and measurable return on investment."
    },
    {
        icon: <LayoutGrid size={36} />,
        title: "Content Marketing",
        description: "Build authority and trust through strategic content that educates, engages, and supports customer acquisition."
    },
    {
        icon: <Award size={36} />,
        title: "Brand Positioning",
        description: "Clarify your message so customers instantly understand who you are, what you offer, and why they should choose you."
    },
    {
        icon: <Workflow size={36} />,
        title: "Marketing Systems",
        description: "Design marketing systems, funnels, automation, and reporting that make growth more predictable and repeatable."
    },
    {
        icon: <Users size={36} />,
        title: "Growth Partnership",
        description: "Ongoing strategic marketing leadership for businesses that need an experienced growth partner without hiring a full-time marketing executive."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-white border-b border-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b-4 border-black pb-8 gap-6">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-4">
                            How We Help Businesses Grow
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-4">
                            Every business faces different growth challenges. Our services are designed to help you build stronger marketing systems, attract the right customers, and achieve sustainable business growth.
                        </p>
                    </div>
                    <div className="text-right flex-shrink-0 hidden lg:block">
                        <p className="text-xl font-bold text-black uppercase tracking-widest">
                            Built for <span className="bg-primary text-white px-2">Growth</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col justify-between p-8 bg-white border-2 border-black hover:border-primary transition-all duration-300 transform hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,94,0,1)] cursor-pointer"
                        >
                            <div>
                                <div className="mb-6 flex justify-between items-start w-full">
                                    <div className="p-4 bg-black text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black shadow-[4px_4px_0px_0px_rgba(255,94,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        {service.icon}
                                    </div>
                                    <span className="text-4xl font-black text-gray-300 group-hover:text-black transition-colors">0{index + 1}</span>
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-black uppercase tracking-tight group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-black/80 font-medium leading-relaxed mb-6 border-l-2 border-gray-200 pl-4 group-hover:border-primary transition-colors">
                                    {service.description}
                                </p>
                            </div>
                            <Link
                                to={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                                className="text-sm font-bold uppercase tracking-widest text-primary hover:text-black transition-colors flex items-center gap-2 mt-auto pt-4 border-t border-gray-100"
                            >
                                Explore Strategy <span className="text-lg transition-transform group-hover:translate-x-1">&rarr;</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
