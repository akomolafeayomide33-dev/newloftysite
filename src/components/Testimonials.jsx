import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: "They helped us clarify our growth strategy and significantly improve conversion across our campaigns.",
        author: "Growth Lead",
        role: "Technology Startup",
        company: "Tech Startup"
    },
    {
        quote: "Their structured approach to growth and automation reduced wasted spend and improved efficiency.",
        author: "Founder",
        role: "Digital Business",
        company: "Digital Business"
    },
    {
        quote: "A disciplined growth partner that understands systems, not shortcuts.",
        author: "Product Lead",
        role: "SaaS Company",
        company: "SaaS Company"
    }
];

const Testimonials = () => {
    return (
        <section className="py-32 bg-background border-b border-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-4">
                        Client <span className="text-primary">Intel.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="border-2 border-black p-8 bg-gray-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] transition-all">
                            <div className="flex gap-1 mb-6 text-primary">
                                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} fill="#FF5E00" />)}
                            </div>
                            <p className="text-xl font-bold text-black mb-8 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div>
                                <p className="font-black text-black uppercase tracking-wider">{t.author}</p>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
