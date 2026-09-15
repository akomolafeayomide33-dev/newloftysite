import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, ArrowLeft, Shield, BookOpen, Eye, Users, Zap,
    TrendingUp, ExternalLink, Play, CheckCircle, Sparkles, Store,
    ShoppingBag, Layers, Compass, Target, Award, Heart, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function CraftsquarreCaseStudy() {
    const { openModal } = useModal();
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <div className="bg-white text-black font-sans selection:bg-primary selection:text-white">

            {/* ── 1. HERO SECTION ── */}
            <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black text-white pt-32 pb-20 border-b border-black">
                {/* Subtle dark ambient background grid */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Left: Headline & Copy */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
                            
                            {/* Official HD Logo Badge */}
                            <div className="inline-flex items-center gap-3 py-2.5 px-5 bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                                <img src="/craftsquarre/craftsquarre-logo-white-orange.png" alt="Craftsquarre Official Logo" className="h-7 w-auto object-contain" />
                                <span className="border-l border-white/30 pl-3">CASE STUDY</span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] text-white tracking-tighter uppercase mb-6">
                                Helping Creativity <br />
                                <span className="text-primary">Get Discovered</span>
                            </h1>

                            {/* Supporting copy */}
                            <p className="text-lg md:text-xl font-bold text-gray-200 leading-relaxed mb-8 border-l-4 border-primary pl-5 bg-white/5 py-3 pr-4">
                                Building the brand, marketing system, and growth foundation behind a new marketplace for Nigerian creativity.
                            </p>

                            {/* Metadata row */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-white/5 border border-white/10 p-5 backdrop-blur-md">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">Industry</span>
                                    <span className="text-xs font-bold text-white uppercase">Marketplace / Ecommerce</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">Engagement</span>
                                    <span className="text-xs font-bold text-white uppercase">Brand & Growth Marketing</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">Stage</span>
                                    <span className="text-xs font-bold text-white uppercase">Early-Stage / Bootstrapping</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">Focus</span>
                                    <span className="text-xs font-bold text-white uppercase">Brand, GTM, Merchant Growth</span>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={openModal}
                                    className="px-8 py-4 bg-primary text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 text-sm shadow-2xl transform hover:-translate-y-1"
                                >
                                    Book a Growth Strategy Session
                                    <ArrowRight size={18} strokeWidth={3} />
                                </button>
                                <Link
                                    to="/#work"
                                    className="px-8 py-4 bg-transparent text-white font-black uppercase tracking-widest border-2 border-white/40 hover:border-white transition-all flex items-center justify-center gap-3 text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none"
                                >
                                    <ArrowLeft size={16} />
                                    View More Case Studies
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right: Visual Feature Composition (Official Desktop Site + Mobile App + Team Strategy Session) */}
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5 relative space-y-4">
                            
                            {/* Primary Card: Official Craftsquarre Desktop Website Hero */}
                            <div className="relative border-4 border-white/20 bg-gray-950 shadow-[12px_12px_0px_0px_rgba(255,94,0,1)] overflow-hidden group">
                                <img
                                    src="/craftsquarre/craftsquarre-desktop-hero.png"
                                    alt="Craftsquarre Desktop Website Interface - Special items made with love"
                                    className="w-full h-64 object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-3 left-3 bg-black/90 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-primary/40">
                                    Live Website Interface
                                </div>
                                <div className="absolute bottom-3 right-3 bg-primary text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg">
                                    40+ Featured Merchants
                                </div>
                            </div>

                            {/* Secondary Split Row: Mobile App Home + Team Strategy Review */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative border-2 border-white/20 bg-gray-950 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden group">
                                    <img
                                        src="/craftsquarre/craftsquarre-app-home.png"
                                        alt="Craftsquarre Mobile App Experience"
                                        className="w-full h-44 object-cover object-top"
                                    />
                                    <div className="absolute bottom-1 left-1 bg-black/90 text-white text-[9px] font-black uppercase px-2 py-0.5">
                                        Mobile App UI
                                    </div>
                                </div>

                                <div className="relative border-2 border-white/20 bg-gray-950 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden group">
                                    <img
                                        src="/craftsquarre/craftsquarre-team-review.jpg"
                                        alt="Lofty Brands Strategy Review Session"
                                        className="w-full h-44 object-cover object-center"
                                    />
                                    <div className="absolute bottom-1 left-1 bg-black/90 text-white text-[9px] font-black uppercase px-2 py-0.5">
                                        Strategy Review
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>
            </section>


            {/* ── 2. THE OPPORTUNITY (INTRODUCTION) ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-6">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Introduction</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-8 leading-[0.95]">
                                The Opportunity
                            </h2>
                            <div className="space-y-6 text-black/80 font-bold text-lg md:text-xl leading-relaxed border-l-4 border-primary pl-6">
                                <p>
                                    Craftsquarre was created from a simple observation:
                                </p>
                                <p className="text-black font-black text-2xl">
                                    There are talented creators producing exceptional work, but many of them remain invisible.
                                </p>
                                <p className="text-gray-700 text-lg font-medium">
                                    The opportunity was bigger than simply creating another marketplace. It was to build a platform where creativity could be discovered, creators could be supported, and their stories could become part of how their products were marketed.
                                </p>
                            </div>

                            {/* External Links preview */}
                            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                                <span>Live Marketplace:</span>
                                <a href="https://craftsquarre.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary transition-colors inline-flex items-center gap-1">
                                    craftsquarre.com <ExternalLink size={14} />
                                </a>
                                <span>•</span>
                                <a href="https://www.instagram.com/craftsquarre/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-primary transition-colors inline-flex items-center gap-1">
                                    @craftsquarre <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-6">
                            <div className="relative group overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-black">
                                <img
                                    src="/craftsquarre/craftsquarre-categories.jpg"
                                    alt="Craftsquarre Curated Category Showcase"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/90 text-white p-4 border border-white/20 backdrop-blur-md">
                                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Curated Category Showcase</p>
                                    <p className="text-sm font-bold">Clothing • Bags & Purses • Handcrafted Footwear • Lifestyle</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ── 3. THE STARTING POINT ── */}
            <section className="py-28 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Engagement Scope</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            From Idea to Marketplace
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            Craftsquarre was already moving beyond the idea stage when the engagement began. The product UI was being developed, and the initial request was to establish the brand identity. But the work quickly expanded beyond the logo into defining how the brand would look, communicate, position itself, acquire merchants, and eventually grow.
                        </p>
                    </motion.div>

                    {/* Timeline / Progression */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        {[
                            { step: "01", title: "Brand Foundation", desc: "Identity, positioning, messaging architecture." },
                            { step: "02", title: "Product", desc: "UI alignment, store layout & merchant presentation." },
                            { step: "03", title: "Launch", desc: "Go-to-market rollout & launch campaign framework." },
                            { step: "04", title: "Marketing System", desc: "Merchant storytelling & repeatable content engine." },
                            { step: "05", title: "Marketplace Growth", desc: "Merchant acquisition loop & buyer discovery." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-3xl font-black text-primary mb-2 block">{item.step}</span>
                                    <h3 className="text-lg font-black uppercase tracking-tight text-black mb-2">{item.title}</h3>
                                    <p className="text-xs font-medium text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                                {index < 4 && (
                                    <div className="hidden md:block text-right text-gray-300 font-black text-xl mt-4">&rarr;</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── 4. THE BRAND FOUNDATION ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-7">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Positioning Evolution</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6 leading-[0.95]">
                                Building the Brand Before Building the Growth Engine
                            </h2>
                            <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed mb-6 border-l-4 border-primary pl-5">
                                The first task was creating a brand strong enough to carry the marketplace. This included logo & visual identity, typography, brand direction, messaging, positioning, and brand personality.
                            </p>
                            <p className="text-gray-600 font-medium text-base leading-relaxed">
                                Craftsquarre initially focused on handmade products but evolved toward a broader idea of <strong className="text-black">curated creativity</strong>, allowing the platform to celebrate creativity rather than limiting itself strictly to products made entirely by hand.
                            </p>
                        </motion.div>

                        {/* Before/After Concept Box */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-5">
                            <div className="bg-black text-white p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(255,94,0,1)]">
                                <span className="text-xs font-black uppercase tracking-widest text-primary block mb-4">Strategic Positioning Shift</span>
                                <div className="flex items-center justify-between gap-4 mb-6 bg-gray-900 p-4 border border-gray-800">
                                    <div>
                                        <span className="text-[10px] font-black uppercase text-gray-400 block">Initial Focus</span>
                                        <span className="text-xl font-black text-gray-400 line-through">HANDMADE</span>
                                    </div>
                                    <span className="text-2xl font-black text-primary">&rarr;</span>
                                    <div>
                                        <span className="text-[10px] font-black uppercase text-primary block">Evolved Position</span>
                                        <span className="text-xl font-black text-white">CURATED CREATIVITY</span>
                                    </div>
                                </div>
                                <p className="text-xs font-medium text-gray-400 leading-relaxed">
                                    This strategic evolution expanded the addressable market while maintaining high standards of quality and artistic authenticity across categories.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Brand Products Showcase Asset */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <img
                            src="/craftsquarre/craftsquarre-leather-menswear.jpg"
                            alt="Craftsquarre Curated Leather Products and Fashion Items"
                            className="w-full h-auto object-cover max-h-[550px]"
                        />
                        <div className="bg-black text-white p-6 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                                <h4 className="text-lg font-black uppercase tracking-tight text-white">Curated Product Presentation</h4>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Personalized leather accessories, wallets, belts, and bespoke menswear</p>
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest bg-primary text-white px-4 py-2">Craftsquarre Brand Standard</span>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ── 5. THE MARKETPLACE CHALLENGE ── */}
            <section className="py-28 bg-black text-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Two-Sided Dynamics</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            A Marketplace Needs More Than Listings
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-300 leading-relaxed border-l-4 border-primary pl-5">
                            The challenge wasn't simply getting people to list products. Craftsquarre needed to build trust with both sides of the marketplace. Merchants needed a reason to join. Buyers needed a reason to trust the platform. And the brand needed to communicate enough value to make both sides want to participate.
                        </p>
                    </motion.div>

                    {/* Marketplace Diagram & Supporting Needs */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5 bg-gray-950 p-8 border-2 border-gray-800">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-6">Marketplace Flow</span>
                            <div className="flex flex-col items-center gap-6 text-center">
                                <div className="w-full bg-white text-black p-4 font-black uppercase tracking-wider border-2 border-primary text-lg">
                                    MERCHANTS
                                </div>
                                <div className="text-primary font-black text-2xl animate-bounce">&darr;</div>
                                <div className="w-full bg-primary text-white p-5 font-black uppercase tracking-widest text-xl shadow-xl">
                                    CRAFTSQUARRE
                                </div>
                                <div className="text-primary font-black text-2xl animate-bounce">&darr;</div>
                                <div className="w-full bg-white text-black p-4 font-black uppercase tracking-wider border-2 border-primary text-lg">
                                    BUYERS
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-gray-950 p-8 border-2 border-gray-800 hover:border-primary transition-colors">
                                <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">Side 01: Merchants</span>
                                <h3 className="text-2xl font-black text-white uppercase mb-4">Merchant Needs</h3>
                                <ul className="space-y-3 font-bold text-gray-300 text-sm">
                                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Visibility for their brand</li>
                                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Active marketing support</li>
                                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Sustainable sales growth</li>
                                </ul>
                            </div>

                            <div className="bg-gray-950 p-8 border-2 border-gray-800 hover:border-primary transition-colors">
                                <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">Side 02: Buyers</span>
                                <h3 className="text-2xl font-black text-white uppercase mb-4">Buyer Needs</h3>
                                <ul className="space-y-3 font-bold text-gray-300 text-sm">
                                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Discovery of unique products</li>
                                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Payment & seller trust</li>
                                    <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Guaranteed product quality</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── 6. STRATEGIC SHIFT ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 block">Core Strategic Premise</span>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8 leading-[0.95]">
                            We Didn't Want to Just List Products. <br />
                            <span className="text-primary">We Wanted to Tell Their Stories.</span>
                        </h2>

                        {/* Highlighted Banner Statement */}
                        <div className="my-10 p-8 bg-black text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,94,0,1)] transform hover:-translate-y-1 transition-transform">
                            <p className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                                "Products get attention. Stories create connection."
                            </p>
                        </div>

                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed max-w-3xl mx-auto border-l-4 border-primary pl-6 text-left">
                            Most marketplaces can give a merchant a place to upload products. Craftsquarre goes further. The strategy was to make the people behind the products visible. Instead of only promoting what a merchant sells, we created opportunities for people to discover who made it, why they made it, and the story behind the work.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* ── 7. THE MERCHANT SPOTLIGHT SYSTEM ── */}
            <section className="py-28 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Content System</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            Turning Merchants Into Stories
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            Craftsquarre invites merchants to participate in interviews where they bring their products, talk about their work, explain why they started, and share their journey. Those stories are then transformed into multiple pieces of content across platforms.
                        </p>
                    </motion.div>

                    {/* Content Ecosystem Diagrams */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                        <div className="lg:col-span-6 space-y-6">
                            <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Content Ecosystem Flow</h4>
                                <div className="flex flex-wrap items-center gap-2 font-bold text-xs uppercase text-black">
                                    <span className="bg-black text-white px-3 py-2">Merchant Interview</span> &rarr;
                                    <span className="bg-gray-100 border border-black px-3 py-2">Long-Form Story</span> &rarr;
                                    <span className="bg-gray-100 border border-black px-3 py-2">Video Snippets</span> &rarr;
                                    <span className="bg-primary text-white px-3 py-2">Instagram & YouTube</span> &rarr;
                                    <span className="bg-black text-white px-3 py-2">Paid Promotion</span> &rarr;
                                    <span className="bg-primary text-white px-3 py-2">Merchant Discovery</span>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Growth Loop Strategy</h4>
                                <div className="flex flex-wrap items-center gap-2 font-bold text-xs uppercase text-black">
                                    <span className="bg-gray-100 border border-black px-3 py-2">Merchant Story</span> &rarr;
                                    <span className="bg-gray-100 border border-black px-3 py-2">Product Discovery</span> &rarr;
                                    <span className="bg-primary text-white px-3 py-2">Platform Awareness</span> &rarr;
                                    <span className="bg-black text-white px-3 py-2">Merchant Acquisition</span>
                                </div>
                            </div>
                        </div>

                        {/* Merchant Interview & Content Production Visual Assets */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                
                                {/* Real Merchant Video Reel Still */}
                                <a
                                    href="https://www.instagram.com/p/DbGR5u0IGvW/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-black block"
                                >
                                    <img
                                        src="/craftsquarre/craftsquarre-merchant-speaker.png"
                                        alt="Authentic Craftsquarre Merchant Interview Speaker Reel"
                                        className="w-full h-72 object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center group-hover:bg-black/20 transition-colors">
                                        <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform mb-2">
                                            <Play size={24} fill="currentColor" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white bg-black/80 px-2 py-1 border border-primary/40">Watch Reel</span>
                                    </div>
                                    <div className="absolute bottom-0 inset-x-0 bg-black/90 text-white p-3 border-t border-white/20">
                                        <p className="text-[10px] font-black uppercase text-primary">Merchant Spotlight Reel</p>
                                        <p className="text-xs font-bold">Creator Interview Series</p>
                                    </div>
                                </a>

                                {/* Behind-The-Scenes Studio Photoshoot (Clean Photo, No Play Button) */}
                                <div className="relative group overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-black">
                                    <img
                                        src="/craftsquarre/craftsquarre-studio-photoshoot.jpg"
                                        alt="Behind-the-scenes Craftsquarre Studio Photography Shoot"
                                        className="w-full h-72 object-cover object-center filter contrast-105"
                                    />
                                    <div className="absolute bottom-0 inset-x-0 bg-black/90 text-white p-3 border-t border-white/20 flex justify-between items-center">
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-primary">Content Production</p>
                                            <p className="text-xs font-bold">In-Studio Shoot</p>
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest bg-primary text-white px-2 py-1">BTS Photo</span>
                                    </div>
                                </div>

                            </div>

                            {/* Instagram Merchant Spotlight Feature Bar */}
                            <div className="bg-gray-50 border-2 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-3">Verified Merchant Spotlight Series</span>
                                <div className="grid grid-cols-3 gap-2">
                                    <a
                                        href="https://www.instagram.com/p/DbGR5u0IGvW/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black text-white hover:bg-primary transition-colors p-3 text-center border border-black flex flex-col items-center justify-center gap-1 group"
                                    >
                                        <ExternalLink size={16} className="text-primary group-hover:text-white" />
                                        <span className="text-[10px] font-black uppercase tracking-wider">Spotlight Reel #1</span>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/p/DaXmQN6oQ_D/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black text-white hover:bg-primary transition-colors p-3 text-center border border-black flex flex-col items-center justify-center gap-1 group"
                                    >
                                        <ExternalLink size={16} className="text-primary group-hover:text-white" />
                                        <span className="text-[10px] font-black uppercase tracking-wider">Spotlight Reel #2</span>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/p/DcAuSMUIzkM/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black text-white hover:bg-primary transition-colors p-3 text-center border border-black flex flex-col items-center justify-center gap-1 group"
                                    >
                                        <ExternalLink size={16} className="text-primary group-hover:text-white" />
                                        <span className="text-[10px] font-black uppercase tracking-wider">Spotlight Reel #3</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── 8. CONTENT ENGINE ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Structured Execution</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            From Random Content to a Repeatable System
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            The marketing team developed a repeatable content structure instead of relying on random social media posts, organizing content into four clear strategic categories.
                        </p>
                    </motion.div>

                    {/* 4 Content Categories Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                num: "01",
                                title: "Merchant Spotlight",
                                desc: "Merchant stories, introductions, reviews, interviews, and behind-the-scenes content highlighting the craftsmanship behind products."
                            },
                            {
                                num: "02",
                                title: "Buyer Acquisition",
                                desc: "Content designed to help potential buyers discover curated products and understand why they should shop on Craftsquarre."
                            },
                            {
                                num: "03",
                                title: "Platform Education",
                                desc: "Content explaining Craftsquarre, its features, benefits, buyer protection, and how the marketplace platform operates."
                            },
                            {
                                num: "04",
                                title: "Merchant Success",
                                desc: "Content showing how merchants use the platform, onboard their inventory, and how Craftsquarre actively supports their business."
                            }
                        ].map((cat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white border-2 border-black p-8 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,94,0,1)] flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-3xl font-black text-primary mb-4 block">{cat.num}</span>
                                    <h3 className="text-xl font-black uppercase tracking-tight text-black mb-3 group-hover:text-primary transition-colors">{cat.title}</h3>
                                    <p className="text-sm font-medium text-gray-700 leading-relaxed border-l-2 border-gray-200 group-hover:border-primary pl-3 transition-colors">{cat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── 9. MERCHANT SUCCESS STORIES (TESTIMONIALS) ── */}
            <section className="py-28 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Authentic Advocacy</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            Letting Merchants Sell the Platform
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            One of the strongest forms of marketing became the merchants themselves. We created content that allowed merchants to explain how Craftsquarre had helped them, giving potential merchants a genuine reason to believe the platform could work for them.
                        </p>
                    </motion.div>

                    {/* Authentic Creator Storefronts & Handcrafted Product Selection */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white p-4">
                        <img
                            src="/craftsquarre/craftsquarre-creator-bags-grid.png"
                            alt="Authentic Craftsquarre Creator Storefronts and Handcrafted Woven Bags"
                            className="w-full h-auto object-cover"
                        />
                        <div className="mt-4 pt-4 border-t-2 border-black flex flex-col sm:flex-row justify-between items-center gap-4 bg-black text-white p-4">
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest text-primary">Creator Storefronts & Handcrafted Selections</p>
                                <p className="text-sm font-bold">Curated listings by independent artisans including Kaliyen, Oresi Luxe, and local leather crafters.</p>
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest border border-white/40 px-3 py-1">Authentic Creator Listings</span>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ── 10. THE EXPERIENCE BEHIND THE MARKETING ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Operational Alignment</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            Marketing Doesn't End at Acquisition
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            The marketing team's communication had to be reinforced by the experience merchants received. Craftsquarre's customer support and founder involvement helped create that experience, supported by quality control across merchant presentation, store banners, and onboarding resources.
                        </p>
                    </motion.div>

                    {/* Merchant Journey Flow */}
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
                        {[
                            "DISCOVER", "JOIN", "ONBOARD", "GET SUPPORTED", "GET PROMOTED", "REFER"
                        ].map((step, idx) => (
                            <div key={idx} className="bg-black text-white p-4 font-black uppercase tracking-wider text-xs border-2 border-primary">
                                <span className="text-primary block text-[10px] mb-1">STEP 0{idx + 1}</span>
                                {step}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── 11. REFERRAL EFFECT ── */}
            <section className="py-28 bg-black text-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Organic Growth Engine</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            When Good Experiences Become Marketing
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-300 leading-relaxed border-l-4 border-primary pl-5">
                            A significant number of merchants came through referrals. Merchants who experienced the support and attention provided by the platform recommended Craftsquarre to others, creating a powerful growth loop.
                        </p>
                    </motion.div>

                    {/* Visual Growth Loop */}
                    <div className="bg-gray-950 border-2 border-gray-800 p-8 max-w-5xl mx-auto shadow-[10px_10px_0px_0px_rgba(255,94,0,1)]">
                        <span className="text-xs font-black uppercase tracking-widest text-primary block mb-6 text-center">Merchant Acquisition Growth Loop</span>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-center font-black text-xs uppercase text-white">
                            <span className="bg-white text-black px-4 py-3 border-2 border-primary">Good Experience</span> &rarr;
                            <span className="bg-white text-black px-4 py-3 border-2 border-primary">Merchant Satisfaction</span> &rarr;
                            <span className="bg-primary text-white px-4 py-3">Referral</span> &rarr;
                            <span className="bg-white text-black px-4 py-3 border-2 border-primary">New Merchant</span> &rarr;
                            <span className="bg-primary text-white px-4 py-3">More Marketplace Supply</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── 12. MY ROLE ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Leadership & Strategy</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            What I Led
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            Ayomide and the marketing team led and coordinated the core marketing functions across brand, go-to-market, growth, content, and digital execution as the platform developed.
                        </p>
                    </motion.div>

                    {/* Clean Role Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Brand", desc: "Brand identity, positioning, messaging, and overall brand direction." },
                            { title: "Go-to-Market", desc: "Launch planning and initial market entry strategy." },
                            { title: "Growth", desc: "Merchant acquisition, buyer acquisition strategy, and paid advertising." },
                            { title: "Content", desc: "Content strategy, video production strategy, and content systems." },
                            { title: "Product Marketing", desc: "Platform messaging, feature communication, and merchant education." },
                            { title: "Digital", desc: "Landing pages, SEO, website messaging, and digital acquisition." },
                            { title: "Team", desc: "Led and coordinated the marketing function as the team grew." }
                        ].map((role, idx) => (
                            <div key={idx} className="bg-gray-50 border-2 border-black p-6 hover:border-primary transition-colors">
                                <span className="text-xs font-black uppercase tracking-widest text-primary mb-2 block">{role.title}</span>
                                <p className="text-xs font-bold text-black leading-relaxed">{role.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── 13. GROWTH MILESTONES (EARLY TRACTION) ── */}
            <section className="py-28 bg-black text-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Verified Milestones</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            Early Traction
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-300 leading-relaxed border-l-4 border-primary pl-5">
                            Early marketplace traction demonstrating that the brand, content engine, and merchant acquisition foundation are beginning to work.
                        </p>
                    </motion.div>

                    {/* Stat Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-gray-950 border-2 border-gray-800 p-8 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-primary block mb-2">100+</span>
                            <span className="text-sm font-black uppercase tracking-widest text-white block">Merchants</span>
                        </div>
                        <div className="bg-gray-950 border-2 border-gray-800 p-8 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-primary block mb-2">150+</span>
                            <span className="text-sm font-black uppercase tracking-widest text-white block">Buyers</span>
                        </div>
                        <div className="bg-gray-950 border-2 border-gray-800 p-8 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-primary block mb-2">₦700K+</span>
                            <span className="text-sm font-black uppercase tracking-widest text-white block">Marketplace Sales</span>
                        </div>
                        <div className="bg-gray-950 border-2 border-gray-800 p-8 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-primary block mb-2">300+</span>
                            <span className="text-sm font-black uppercase tracking-widest text-white block">Instagram Followers</span>
                        </div>
                    </div>

                    <p className="text-xs font-medium text-gray-400 italic">
                        * Supporting note: Instagram growth from zero, without influencer marketing, supported by consistent content and limited paid promotion.
                    </p>
                </div>
            </section>


            {/* ── 14. WHAT CHANGED ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Strategic Transformation</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            From Idea to a Working Growth System
                        </h2>
                    </motion.div>

                    {/* 5 Visual Transformation Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                            { title: "Clearer Positioning", desc: "Craftsquarre developed a clearer understanding of what it represents and who it serves." },
                            { title: "Stronger Brand", desc: "A complete brand identity and consistent communication system were established." },
                            { title: "Repeatable Content", desc: "The team developed a content engine that could consistently tell merchant and platform stories." },
                            { title: "Merchant Growth", desc: "A repeatable acquisition system began bringing merchants onto the platform." },
                            { title: "Early Traction", desc: "The platform reached 100+ merchants, 150+ buyers, and over ₦700K in sales." }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <span className="text-2xl font-black text-primary mb-3 block">0{idx + 1}</span>
                                <h3 className="text-base font-black uppercase tracking-tight text-black mb-2">{card.title}</h3>
                                <p className="text-xs font-medium text-gray-700 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── 15. THE BUSINESS MODEL INSIGHT ── */}
            <section className="py-28 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Marketplace Economics</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            The Marketplace Has Two Customers
                        </h2>
                    </motion.div>

                    {/* Side by Side Comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">Customer 01</span>
                            <h3 className="text-2xl font-black text-black uppercase mb-4">MERCHANT NEEDS</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Visibility", "Sales opportunities", "Support", "Credibility", "Marketing"].map(item => (
                                    <span key={item} className="px-3 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider">{item}</span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">Customer 02</span>
                            <h3 className="text-2xl font-black text-black uppercase mb-4">BUYER NEEDS</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Discovery", "Trust", "Quality", "Variety", "Convenience"].map(item => (
                                    <span key={item} className="px-3 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white p-8 border-4 border-black">
                        <p className="text-lg font-bold leading-relaxed">
                            Craftsquarre's marketing strategy had to create value for both sides simultaneously: <strong className="text-primary">More merchants create more products &rarr; More products create better buyer choice &rarr; More buyers create more value for merchants.</strong>
                        </p>
                    </div>
                </div>
            </section>


            {/* ── 16. WHAT WE WOULD DO NEXT (ROADMAP) ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Future Strategy</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            The Next Growth Phase
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            Strategic recommendations for the next phase of marketplace expansion:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                            { num: "01", title: "Amplify the Brand", desc: "Work with carefully selected creators and influencers to increase awareness and merchant acquisition." },
                            { num: "02", title: "Scale Merchant Acquisition", desc: "Use existing content and merchant storytelling as foundation for larger acquisition campaigns." },
                            { num: "03", title: "Launch the Merchant App", desc: "Use the app launch as a major communication and acquisition moment." },
                            { num: "04", title: "Accelerate Buyer Acquisition", desc: "Introduce campaigns designed specifically to bring more buyers onto the platform." },
                            { num: "05", title: "Build Demand Around Local Creativity", desc: "Explore campaigns around discovering quality Nigerian-made products at accessible price points." }
                        ].map((next, idx) => (
                            <div key={idx} className="bg-gray-50 border-2 border-black p-6 hover:border-primary transition-colors flex flex-col justify-between">
                                <div>
                                    <span className="text-2xl font-black text-primary mb-3 block">{next.num}</span>
                                    <h3 className="text-sm font-black uppercase tracking-tight text-black mb-2">{next.title}</h3>
                                    <p className="text-xs font-medium text-gray-600 leading-relaxed">{next.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── 17. LESSONS ── */}
            <section className="py-28 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Strategic Takeaways</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            What This Project Reinforced
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                num: "01",
                                title: "A marketplace is a trust business.",
                                desc: "People need confidence before they buy or sell."
                            },
                            {
                                num: "02",
                                title: "Stories can become acquisition channels.",
                                desc: "When customers and merchants become part of the brand story, content can drive discovery and referrals."
                            },
                            {
                                num: "03",
                                title: "Early-stage growth requires systems, not just campaigns.",
                                desc: "The objective was to create a repeatable marketing engine that could continue working as the platform grew."
                            }
                        ].map((lesson, idx) => (
                            <div key={idx} className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:border-primary transition-colors">
                                <span className="text-3xl font-black text-primary mb-4 block">{lesson.num}</span>
                                <h3 className="text-xl font-black uppercase tracking-tight text-black mb-3">{lesson.title}</h3>
                                <p className="text-sm font-medium text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-3">{lesson.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── 18. FINAL CASE STUDY STATEMENT ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Conclusion</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-8">
                            Build the Foundation. <span className="text-primary">Then Scale It.</span>
                        </h2>
                        <div className="space-y-6 text-black/80 font-bold text-lg md:text-xl leading-relaxed border-l-4 border-primary pl-6">
                            <p>
                                Craftsquarre is still growing. But the foundation is clearer.
                            </p>
                            <p>
                                The brand has a stronger position, merchants have a reason to participate, stories give the marketplace a human voice, and the marketing team now has a repeatable system for driving discovery.
                            </p>
                            <p className="text-black font-black text-2xl">
                                The next phase is not about starting again. It's about amplifying what already works.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ── 19. FINAL CALL TO ACTION ── */}
            <section className="py-32 bg-black text-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 block">Work With Lofty Brands</span>
                        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                            Building Something With <br />
                            <span className="text-primary">Growth Potential?</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Whether you're launching, repositioning, or trying to turn scattered marketing into a growth system, Lofty Brands helps you find the strategy behind the next stage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <button
                                onClick={openModal}
                                className="px-10 py-5 bg-primary text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 text-base shadow-[6px_6px_0px_0px_rgba(255,94,0,0.4)] hover:shadow-none transform hover:-translate-y-1"
                            >
                                Book a Growth Strategy Session
                                <ArrowRight size={20} strokeWidth={3} />
                            </button>
                            <Link
                                to="/#services"
                                className="px-10 py-5 bg-transparent text-white font-black uppercase tracking-widest border-2 border-gray-700 hover:border-white transition-all flex items-center justify-center gap-3 text-base shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none"
                            >
                                Explore Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
