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

    return (
        <div className="bg-white text-black font-sans selection:bg-primary selection:text-white">

            {/* ── 1. CASE STUDY INTRODUCTION & SUMMARY METADATA ── */}
            <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black text-white pt-32 pb-20 border-b border-black">
                {/* Subtle dark ambient background grid */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left: Headline & Metadata */}
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

                        {/* Right: Visual Feature Composition */}
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
                                    Curated Marketplace
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
                                        Mobile Experience
                                    </div>
                                </div>

                                <div className="relative border-2 border-white/20 bg-gray-950 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden group">
                                    <img
                                        src="/craftsquarre/craftsquarre-team-review.jpg"
                                        alt="Lofty Brands Strategy Review Session"
                                        className="w-full h-44 object-cover object-center"
                                    />
                                    <div className="absolute bottom-1 left-1 bg-black/90 text-white text-[9px] font-black uppercase px-2 py-0.5">
                                        Strategy Session
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>
            </section>


            {/* ── 2. THE OPPORTUNITY ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-6">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Market Context</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-8 leading-[0.95]">
                                The Opportunity
                            </h2>
                            <div className="space-y-6 text-black/80 font-bold text-lg md:text-xl leading-relaxed border-l-4 border-primary pl-6">
                                <p>
                                    Craftsquarre was founded to address a systemic problem in the African creative economy:
                                </p>
                                <p className="text-black font-black text-2xl">
                                    Exceptional independent artisans produce distinctive products, yet most remain invisible in a fragmented digital landscape.
                                </p>
                                <p className="text-gray-700 text-lg font-medium">
                                    The strategic opportunity was not simply to create another listing platform. It was to build a curated destination where creativity could be discovered, independent makers could find active marketing support, and authentic artisan stories could drive sustainable consumer adoption.
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


            {/* ── 3. THE BUSINESS CHALLENGE ── */}
            <section className="py-28 bg-black text-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Marketplace Economics</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            The Business Challenge
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-300 leading-relaxed border-l-4 border-primary pl-5">
                            Like any two-sided marketplace, Craftsquarre encountered the classic cold-start dilemma: merchants require established buyer traffic before committing inventory, while buyers expect a diverse, curated catalog before exploring a new platform. Solving this required establishing trust on both sides simultaneously.
                        </p>
                    </motion.div>

                    {/* Two-Sided Value Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-950 p-8 border-2 border-gray-800 hover:border-primary transition-colors">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">Demand Side</span>
                            <h3 className="text-2xl font-black text-white uppercase mb-4">Merchant Considerations</h3>
                            <p className="text-sm font-medium text-gray-400 mb-6 leading-relaxed">
                                Independent creators need confidence that listing on a new platform is worth their effort and will deliver real commercial exposure:
                            </p>
                            <ul className="space-y-3 font-bold text-gray-300 text-sm">
                                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Credible visibility and brand exposure</li>
                                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Active marketing support beyond basic hosting</li>
                                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Sustainable commercial visibility and customer access for artisan crafts</li>
                            </ul>
                        </div>

                        <div className="bg-gray-950 p-8 border-2 border-gray-800 hover:border-primary transition-colors">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">Supply Side</span>
                            <h3 className="text-2xl font-black text-white uppercase mb-4">Buyer Considerations</h3>
                            <p className="text-sm font-medium text-gray-400 mb-6 leading-relaxed">
                                Conscious consumers need assurance that products are authentic, well-crafted, and protected by reliable transaction infrastructure:
                            </p>
                            <ul className="space-y-3 font-bold text-gray-300 text-sm">
                                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Discovery of unique, high-quality local products</li>
                                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Payment protection and dependable seller standards</li>
                                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /> Consistent product presentation and transparent information</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── 4. AYOMIDE'S ROLE & RESPONSIBILITIES ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Leadership & Coordination</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            Ayomide's Role & Responsibilities
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            Ayomide led and coordinated the marketing function, working collaboratively with the founding and cross-functional teams to shape Craftsquarre's brand positioning, go-to-market rollout, and initial traction.
                        </p>
                    </motion.div>

                    {/* 7 Responsibility Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Brand Identity & Positioning",
                                desc: "Defined visual identity guidelines, core messaging architecture, and market positioning to establish a distinct presence."
                            },
                            {
                                title: "Go-to-Market Planning",
                                desc: "Formulated the launch rollout framework and coordinated early market entry touchpoints across digital channels."
                            },
                            {
                                title: "Product Marketing",
                                desc: "Structured platform feature communication, buyer value propositions, and merchant onboarding communication."
                            },
                            {
                                title: "Content Strategy & Production",
                                desc: "Designed repeatable storytelling pillars and coordinated multimedia production, including photo and video shoots."
                            },
                            {
                                title: "Acquisition Initiatives",
                                desc: "Coordinated targeted outreach and digital campaigns to attract initial merchant cohorts and curious buyers."
                            },
                            {
                                title: "Paid Advertising & Digital",
                                desc: "Executed initial paid discovery tests, search engine presence, and campaign landing page communication."
                            },
                            {
                                title: "Marketing Team Coordination",
                                desc: "Guided day-to-day marketing operations, asset delivery, and collaboration with the wider development and leadership team."
                            }
                        ].map((role, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-gray-50 border-2 border-black p-6 hover:border-primary transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,94,0,1)] flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-xs font-black uppercase tracking-widest text-primary mb-2 block">{role.title}</span>
                                    <p className="text-xs font-bold text-gray-800 leading-relaxed">{role.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── 5. BRAND POSITIONING & IDENTITY DEVELOPMENT ── */}
            <section className="py-28 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-7">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Strategic Positioning</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6 leading-[0.95]">
                                From "Handmade" to Curated Creativity
                            </h2>
                            <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed mb-6 border-l-4 border-primary pl-5">
                                Establishing a differentiated identity was the necessary prerequisite before launching acquisition efforts. The visual system, brand voice, and positioning required coherence to communicate both artisanal authenticity and modern commerce.
                            </p>
                            <p className="text-gray-600 font-medium text-base leading-relaxed">
                                Craftsquarre initially focused on handmade goods, but the strategic positioning was broadened toward <strong className="text-black">curated creativity</strong>. This evolution significantly enlarged the addressable market, allowing the platform to feature design-forward lifestyle products, leathercraft, and bespoke fashion while upholding artisan standards.
                            </p>
                        </motion.div>

                        {/* Strategic Shift Concept Box */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-5">
                            <div className="bg-black text-white p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(255,94,0,1)]">
                                <span className="text-xs font-black uppercase tracking-widest text-primary block mb-4">Strategic Evolution</span>
                                <div className="flex items-center justify-between gap-4 mb-6 bg-gray-900 p-4 border border-gray-800">
                                    <div>
                                        <span className="text-[10px] font-black uppercase text-gray-400 block">Initial Positioning</span>
                                        <span className="text-xl font-black text-gray-400 line-through">HANDMADE</span>
                                    </div>
                                    <span className="text-2xl font-black text-primary">&rarr;</span>
                                    <div>
                                        <span className="text-[10px] font-black uppercase text-primary block">Expanded Positioning</span>
                                        <span className="text-xl font-black text-white">CURATED CREATIVITY</span>
                                    </div>
                                </div>
                                <p className="text-xs font-medium text-gray-400 leading-relaxed">
                                    This strategic shift enabled Craftsquarre to celebrate modern African craft in its full scope, broadening category appeal while preserving quality benchmarks.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Brand Showcase Visual Asset */}
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
                            <span className="text-xs font-black uppercase tracking-widest bg-primary text-white px-4 py-2">Brand Presentation Standard</span>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ── 6. CONNECTING PRODUCT VALUE WITH MERCHANT & BUYER NEEDS ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Product Marketing</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            Connecting Product Value with User Needs
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            Effective marketplace marketing extends beyond external campaigns into how product features are communicated and experienced. Clear platform guidance and visual standards ensured both merchants and buyers encountered a professional, reliable environment.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">Merchant Experience</span>
                            <h3 className="text-2xl font-black text-black uppercase mb-4">Supporting Independent Sellers</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed mb-6">
                                Craftsquarre provided makers with professional storefront layouts, catalog presentation standards, and promotional support designed to help their craftsmanship shine.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Storefront Guidelines", "Photography Standards", "Promotional Support", "Onboarding Guidance"].map((item) => (
                                    <span key={item} className="px-3 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider">{item}</span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">Buyer Experience</span>
                            <h3 className="text-2xl font-black text-black uppercase mb-4">Inspiring Confident Discovery</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed mb-6">
                                The platform emphasized creator background, product origins, and trustworthy transaction mechanisms to give buyers complete confidence in every purchase.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Artisan Profiles", "Curated Collections", "Payment Protection", "Direct Delivery Support"].map((item) => (
                                    <span key={item} className="px-3 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white p-8 border-4 border-black">
                        <p className="text-lg font-bold leading-relaxed">
                            Aligning marketing promises with product reality established authentic trust: <strong className="text-primary">merchants received dedicated visibility for their work, while buyers discovered verified artisan creations with confidence.</strong>
                        </p>
                    </div>
                </div>
            </section>


            {/* ── 7. MARKETING STRATEGY TRANSLATED INTO EXECUTION & SELECTED WORK ── */}
            <section className="py-28 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Content System</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            From Random Posts to a Content Engine
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            Rather than relying on isolated promotional announcements, the marketing strategy centered on creator storytelling. Giving visibility to the makers behind the products turned artisanal craftsmanship into an authentic discovery channel.
                        </p>
                    </motion.div>

                    {/* 4 Content Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            {
                                num: "01",
                                title: "Merchant Spotlight",
                                desc: "Creator interviews, studio profiles, and behind-the-scenes features highlighting the craftsmanship and dedication behind each collection."
                            },
                            {
                                num: "02",
                                title: "Buyer Discovery",
                                desc: "Curated gift recommendations, styling ideas, and thematic collections that introduce shoppers to distinctive Nigerian-made products."
                            },
                            {
                                num: "03",
                                title: "Platform Education",
                                desc: "Informative content explaining marketplace features, escrow and buyer protection, and how simple it is to explore and order."
                            },
                            {
                                num: "04",
                                title: "Merchant Enablement",
                                desc: "Practical guidance showing makers how Craftsquarre supports their business, helps optimize storefronts, and promotes their craft."
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

                    {/* Selected Work & Visual Evidence Assets */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
                        <div className="lg:col-span-6 space-y-4">
                            <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">Authentic Multimedia Storytelling</h3>
                            <p className="text-sm font-medium text-gray-700 leading-relaxed mb-4">
                                Content production centered on genuine artisan interviews and in-studio photography, providing rich visual assets for organic channels and paid discovery.
                            </p>

                            {/* Verified Merchant Spotlight Links Bar */}
                            <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-3">Merchant Spotlight Reels Series</span>
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

                        {/* Visual Asset Pair */}
                        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Merchant Spotlight Video Reel Still */}
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

                            {/* In-Studio Photoshoot BTS */}
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
                    </div>

                    {/* Creator Storefront Showcase */}
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


            {/* ── 8. EARLY PROGRESS & APPROVED METRICS ── */}
            <section className="py-28 bg-black text-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Strategic & Creative Delivery</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            Marketing Delivery & Early Traction
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-300 leading-relaxed border-l-4 border-primary pl-5">
                            Initial operational and marketing milestones achieved during the rollout, validating the brand positioning, creative direction, content systems, and collaborative merchant onboarding.
                        </p>
                    </motion.div>

                    {/* Stat Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-gray-950 border-2 border-gray-800 p-8 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-primary block mb-2">100+</span>
                            <span className="text-sm font-black uppercase tracking-widest text-white block">Merchants</span>
                            <span className="text-xs text-gray-400 mt-1 block">Platform Onboarding Cohort</span>
                        </div>
                        <div className="bg-gray-950 border-2 border-gray-800 p-8 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-primary block mb-2">150+</span>
                            <span className="text-sm font-black uppercase tracking-widest text-white block">Registered Buyers</span>
                            <span className="text-xs text-gray-400 mt-1 block">Early Platform Discovery</span>
                        </div>
                        <div className="bg-gray-950 border-2 border-gray-800 p-8 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-primary block mb-2">300+</span>
                            <span className="text-sm font-black uppercase tracking-widest text-white block">Community</span>
                            <span className="text-xs text-gray-400 mt-1 block">Organic Social Audience</span>
                        </div>
                        <div className="bg-gray-950 border-2 border-gray-800 p-8 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-primary block mb-2">5</span>
                            <span className="text-sm font-black uppercase tracking-widest text-white block">Core Systems</span>
                            <span className="text-xs text-gray-400 mt-1 block">Strategy & Creative Pillars</span>
                        </div>
                    </div>

                    <p className="text-xs font-medium text-gray-400 italic">
                        * Note: Early platform adoption milestones reflect collective progress achieved collaboratively alongside Craftsquarre's founding and technical teams, supported by Lofty Brands' marketing strategy, creative direction, and merchant acquisition initiatives.
                    </p>
                </div>
            </section>


            {/* ── 9. WHAT THE ENGAGEMENT ESTABLISHED ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Strategic Deliverables</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            What the Engagement Established
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary pl-5">
                            Beyond early traction, the engagement equipped Craftsquarre with a durable strategic, creative, and operational marketing foundation.
                        </p>
                    </motion.div>

                    {/* 5 Transformation Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                            {
                                title: "Brand Identity & Positioning",
                                desc: "Complete visual identity, typography standards, logo assets, and strategic positioning in 'Curated Creativity' for clear market distinction."
                            },
                            {
                                title: "Content Strategy & Direction",
                                desc: "Creative direction and visual standards across studio photography, artisan video shoots, and campaign collateral."
                            },
                            {
                                title: "Product Marketing & Acquisition",
                                desc: "Storefront guidelines, buyer value communication, and merchant onboarding materials supporting initial platform adoption."
                            },
                            {
                                title: "Campaigns & Launch Planning",
                                desc: "Structured go-to-market rollout framework, channel messaging, and digital campaign planning connecting makers with early buyers."
                            },
                            {
                                title: "Content Systems & Execution",
                                desc: "Repeatable four-pillar content engine enabling continuous merchant spotlights, category education, and independent execution."
                            }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
                            >
                                <span className="text-2xl font-black text-primary mb-3 block">0{idx + 1}</span>
                                <h3 className="text-base font-black uppercase tracking-tight text-black mb-2">{card.title}</h3>
                                <p className="text-xs font-medium text-gray-700 leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── 10. STRATEGIC TAKEAWAYS & CONCLUSION ── */}
            <section className="py-28 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Strategic Takeaways</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                            Key Principles Reinforced
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                num: "01",
                                title: "Marketplaces are trust businesses.",
                                desc: "Before buyers purchase or merchants commit inventory, both sides must have confidence in platform credibility, payment security, and fulfillment standards."
                            },
                            {
                                num: "02",
                                title: "Stories drive authentic discovery.",
                                desc: "Celebrating the makers and artisan craft behind products connects emotionally with audiences far more effectively than generic product listings."
                            },
                            {
                                num: "03",
                                title: "Early growth demands connected systems.",
                                desc: "Sporadic campaigns provide temporary spikes; sustainable traction requires positioning, product marketing, and content working in unison."
                            }
                        ].map((lesson, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:border-primary transition-colors"
                            >
                                <span className="text-3xl font-black text-primary mb-4 block">{lesson.num}</span>
                                <h3 className="text-xl font-black uppercase tracking-tight text-black mb-3">{lesson.title}</h3>
                                <p className="text-sm font-medium text-gray-700 leading-relaxed border-l-2 border-gray-200 pl-3">{lesson.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Editorial Conclusion */}
                    <div className="max-w-4xl bg-white border-4 border-black p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3 block">Conclusion</span>
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-6">
                            Build the Foundation. <span className="text-primary">Then Scale It.</span>
                        </h3>
                        <div className="space-y-6 text-black/80 font-bold text-lg md:text-xl leading-relaxed border-l-4 border-primary pl-6">
                            <p>
                                Craftsquarre represents the potential of Nigerian creativity brought together on a dedicated platform.
                            </p>
                            <p>
                                By establishing a clear brand identity, an expanded positioning in curated creativity, and an authentic content storytelling engine, the engagement delivered a cohesive system that connects creators with buyers.
                            </p>
                            <p className="text-black font-black text-2xl">
                                With a clear brand foundation in place, the platform is prepared to continue its mission of helping local creativity get discovered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── 11. CALL TO ACTION & SITE NAVIGATION ── */}
            <section className="py-32 bg-black text-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 block">Work With Lofty Brands</span>
                        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                            Building Something With <br />
                            <span className="text-primary">Growth Potential?</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Whether you're launching a new venture, repositioning an existing product, or turning disconnected marketing into a repeatable system, Lofty Brands helps ambitious businesses build the strategy behind sustainable growth.
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
