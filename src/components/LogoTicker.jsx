import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    { name: "Pakam", logo: "/logos/pakam.png" },
    { name: "Meno Haven", logo: "/logos/meno-haven.png" },
    { name: "WealthQuarters", logo: "/logos/wealth-quarters.jpg" },
    { name: "CraftsQuarre", logo: "/logos/craftsquarre.png" },
    { name: "Total School Support", logo: "/logos/total-school-support.jpg" },
    { name: "Recycle Together", logo: "/logos/recycle-together.png" }
];

const LogoTicker = () => {
    return (
        <section className="py-16 bg-white border-b border-black overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">TRUSTED BY GROWING BRANDS</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Brands and growth initiatives we've helped build.</p>
            </div>

            <div className="flex overflow-hidden relative">
                <motion.div
                    className="flex gap-20 items-center min-w-max px-8"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...brands, ...brands, ...brands].map((brand, index) => (
                        <img
                            key={index}
                            src={brand.logo}
                            alt={brand.name}
                            className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LogoTicker;

