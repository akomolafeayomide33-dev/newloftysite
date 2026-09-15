import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
    ArrowRight, ArrowLeft, Shield, BookOpen, Eye, Users, Zap,
    TrendingUp, Lightbulb, Target, CheckCircle, ExternalLink, MessageCircle,
    Calendar, Heart, Sparkles, MapPin, Video, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

function AnimatedNumber({ value, suffix = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const motionVal = useMotionValue(0);
    const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });
    const [display, setDisplay] = React.useState(0);
    const numeric = parseFloat(String(value).replace(/[^0-9.]/g, ''));
    useEffect(() => { if (inView) motionVal.set(numeric); }, [inView, numeric, motionVal]);
    useEffect(() => spring.on('change', (v) => setDisplay(Math.round(v))), [spring]);
    return <span ref={ref}>{inView ? display.toLocaleString() : 0}{suffix}</span>;
}

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const progressionSteps = [
    { num: '01', title: 'Build the Audience', desc: 'Identify and reach women experiencing menopause and midlife wellness transitions.' },
    { num: '02', title: 'Create Trust', desc: 'Deliver authoritative expert-led education before asking for commitment.' },
    { num: '03', title: 'Deliver Consistent Value', desc: 'Sustain weekly webinars, practical advice, and open discussions.' },
    { num: '04', title: 'Build Engagement', desc: 'Foster active daily peer support, expert Q&A, and community interaction.' },
    { num: '05', title: 'Ecosystem Pathways', desc: 'Guide community members into events, physical activations, and the broader platform.' },
];

const expertCategories = [
    { name: 'Nutrition', desc: 'Dietary protocols for hormonal balance & energy' },
    { name: 'Skincare', desc: 'Midlife dermatological health & collagen support' },
    { name: 'Fitness', desc: 'Strength & bone density conditioning' },
    { name: 'Pharmacy', desc: 'Medication guidance & supplement education' },
    { name: 'Physiotherapy', desc: 'Pelvic health & joint mobility' },
    { name: 'Sexual Wellness', desc: 'Intimate health & relationship discussions' },
    { name: 'Mental Wellness', desc: 'Emotional health & anxiety management' },
    { name: "Women's Wellness", desc: 'Holistic midlife lifestyle strategy' },
];

const locations = [
    { city: 'Lagos', role: 'State Captains & Event Activation' },
    { city: 'Abuja', role: 'Community Meetups & Walkathons' },
    { city: 'Port Harcourt', role: 'Regional Member Gatherings' },
    { city: 'Jos', role: 'Local Support & Education Sessions' },
];

const loftyDeliverables = [
    {
        title: 'Strategic Direction',
        desc: 'Community growth strategy, engagement architecture, programming, and growth planning.'
    },
    {
        title: 'Creative Direction',
        desc: 'Campaign concepts, visual direction, social content, video direction, and creative production oversight.'
    },
    {
        title: 'Community System',
        desc: 'Daily engagement structure, onboarding pathways, webinar-to-community journeys, and ongoing community experience.'
    },
    {
        title: 'Campaigns',
        desc: 'Campaign planning and coordination, including World Menopause Day.'
    },
    {
        title: 'Content',
        desc: 'Expert content, social content, video repurposing, educational content, and community communication.'
    },
    {
        title: 'Partnerships',
        desc: 'Expert and partner coordination across community initiatives and campaigns.'
    },
];

export default function MenoHavenCaseStudy() {
    const { openModal } = useModal();

    return (
        <div className="bg-white text-black font-sans selection:bg-primary selection:text-white">

            {/* ── 1. HERO SECTION ── */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black text-white pt-36 pb-24 border-b border-black">
                {/* Ambient dark grid background */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Column: Eyebrow, Headline & Copy */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
                            
                            {/* Eyebrow Badge */}
                            <div className="inline-flex items-center gap-3 py-2 px-4 bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                                <span>MENO HAVEN × LOFTY BRANDS</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] text-white tracking-tighter uppercase mb-6">
                                Before Building The Product, <br />
                                <span className="text-primary">We Built The Community.</span>
                            </h1>

                            {/* Supporting Copy */}
                            <p className="text-lg md:text-xl font-bold text-gray-300 leading-relaxed mb-8 border-l-4 border-primary pl-5 bg-white/5 py-4 pr-4">
                                Meno Haven had an ambitious product vision, but there was one important thing missing: an audience. Before investing further in product development, Lofty Brands helped the brand build the community that would eventually give the platform somewhere to grow.
                            </p>

                            {/* Metadata Pill Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 bg-white/5 border border-white/10 p-5 backdrop-blur-md">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">Client</span>
                                    <span className="text-xs font-bold text-white uppercase">Meno Haven</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">Category</span>
                                    <span className="text-xs font-bold text-white uppercase">Community Growth</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">Our Role</span>
                                    <span className="text-xs font-bold text-white uppercase">Strategic Lead</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">Reach</span>
                                    <span className="text-xs font-bold text-white uppercase">0 → 700+ Women</span>
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
                                    className="px-8 py-4 bg-transparent text-white font-black uppercase tracking-widest border-2 border-white/40 hover:border-white transition-all flex items-center justify-center gap-3 text-sm"
                                >
                                    <ArrowLeft size={16} />
                                    View All Case Studies
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Column: Hero Visual Feature Box */}
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5 relative space-y-4">
                            <div className="relative border-4 border-white/20 bg-gray-950 shadow-[12px_12px_0px_0px_rgba(255,94,0,1)] overflow-hidden group">
                                <img
                                    src="/meno-haven/meno-haven-group-terrace.jpg"
                                    alt="Meno Haven Outdoor Community Gathering on Palm Terrace"
                                    className="w-full h-80 object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-3 left-3 bg-black/90 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-primary/40">
                                    Community Gathering
                                </div>
                                <div className="absolute bottom-3 right-3 bg-primary text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg">
                                    700+ Women Ecosystem
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-5 backdrop-blur-md flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src="/logos/meno-haven.png" alt="Meno Haven Logo" className="h-8 w-auto object-contain bg-white rounded p-1" />
                                    <div>
                                        <p className="text-xs font-black text-white uppercase tracking-wider">Meno Haven Community</p>
                                        <p className="text-[10px] text-gray-400">Lifecycle Growth & Engagement</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest bg-primary text-white px-2.5 py-1">400+ Core</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── 2. EXECUTIVE SUMMARY & AT A GLANCE ── */}
            <section className="py-20 bg-black text-white border-b border-gray-800">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4">
                            <span className="inline-block py-1 px-3 bg-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-4">Executive Summary</span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Strategic Overview</h2>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                A comprehensive community growth and lifecycle engagement system built from scratch to validate audience demand and create an ecosystem before product release.
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="bg-gray-950 border border-gray-800 p-6 hover:border-primary transition-colors">
                                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">Total Reach</p>
                                    <p className="text-2xl font-black text-white">700+ Women</p>
                                    <p className="text-[10px] text-gray-400 mt-1">Wider ecosystem</p>
                                </div>
                                <div className="bg-gray-950 border border-gray-800 p-6 hover:border-primary transition-colors">
                                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">Core Group</p>
                                    <p className="text-2xl font-black text-white">400+ Women</p>
                                    <p className="text-[10px] text-gray-400 mt-1">Core community</p>
                                </div>
                                <div className="bg-gray-950 border border-gray-800 p-6 hover:border-primary transition-colors">
                                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">Experts</p>
                                    <p className="text-2xl font-black text-white">8+ Specialists</p>
                                    <p className="text-[10px] text-gray-400 mt-1">Cross-discipline</p>
                                </div>
                                <div className="bg-gray-950 border border-gray-800 p-6 hover:border-primary transition-colors">
                                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">Engagement</p>
                                    <p className="text-2xl font-black text-white">30–40%</p>
                                    <p className="text-[10px] text-gray-400 mt-1">Weekly peak rates</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 3. THE CHALLENGE SECTION ── */}
            <section className="py-24 bg-white border-b border-black">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <span className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-6">The Challenge</span>
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-8 leading-[0.95]">
                            The Product Wasn't <br /><span className="text-primary">The First Problem</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <p className="text-black/80 font-bold text-lg leading-relaxed border-l-4 border-primary pl-5">
                                When Lofty Brands came into Meno Haven, there was no community. The app concept was already being designed and development was approaching, but there was no established audience waiting to use it.
                            </p>
                            <p className="text-black/70 font-medium text-lg leading-relaxed border-l-4 border-black pl-5">
                                Our recommendation was simple: <span className="font-black text-black">Build the community first.</span> A product without an audience creates a customer acquisition bottleneck. A community creates the foundation for content, education, events, and future commerce.
                            </p>
                        </div>

                        {/* Visual Paradigm Shift Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                            {/* Old Approach */}
                            <div className="p-8 border-2 border-red-200 bg-red-50/50 relative">
                                <span className="text-xs font-black uppercase tracking-widest text-red-600 block mb-4">Old Conventional Model</span>
                                <div className="flex items-center gap-3 font-black text-xl text-gray-800">
                                    <span className="px-4 py-2 bg-white border border-gray-300">Product</span>
                                    <span className="text-red-500 font-bold">&rarr;</span>
                                    <span className="px-4 py-2 bg-white border border-gray-300 opacity-60">Audience?</span>
                                </div>
                                <p className="text-xs font-bold text-red-700/70 mt-4">High capital risk, unvalidated demand, cold acquisition struggle.</p>
                            </div>

                            {/* Lofty Brands Strategic Model */}
                            <div className="p-8 border-2 border-primary bg-primary/5 relative shadow-[6px_6px_0px_0px_rgba(255,94,0,1)]">
                                <span className="text-xs font-black uppercase tracking-widest text-primary block mb-4">Lofty Brands Growth Model</span>
                                <div className="flex flex-wrap items-center gap-2 font-black text-sm text-black uppercase">
                                    <span className="px-3 py-2 bg-black text-white">Community</span>
                                    <span className="text-primary font-bold">&rarr;</span>
                                    <span className="px-3 py-2 bg-primary text-white">Trust</span>
                                    <span className="text-primary font-bold">&rarr;</span>
                                    <span className="px-3 py-2 bg-black text-white">Product</span>
                                </div>
                                <p className="text-xs font-bold text-black/70 mt-4">Low risk, pre-validated audience, high organic adoption.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 4. THE STRATEGIC SHIFT ── */}
            <section className="py-24 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-4">The Strategic Shift</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
                            We Changed The <span className="text-primary">Order of Growth</span>
                        </h2>
                        <p className="text-black/80 font-bold text-lg mt-6 leading-relaxed border-l-4 border-primary pl-5">
                            Instead of rushing into product development, we focused on creating a community of women who had a reason to stay, participate, learn, and eventually engage with the wider Meno Haven platform.
                        </p>
                    </motion.div>

                    {/* 5-Step Progression Horizontal List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {progressionSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-white border-2 border-black hover:border-primary transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] group"
                            >
                                <span className="text-4xl font-black text-primary block mb-3">{step.num}</span>
                                <h3 className="font-black text-base uppercase tracking-tight text-black group-hover:text-primary transition-colors mb-2">{step.title}</h3>
                                <p className="text-xs font-medium text-black/70 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. BUILDING THE COMMUNITY (NUMBERS) ── */}
            <section className="py-28 bg-black text-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-widest text-primary mb-3 block">Community Architecture</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                            From Zero To A Structured Community
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-300 leading-relaxed mt-6 border-l-4 border-primary pl-5">
                            The community started with one person. Then two. Then 100. Then 200. Then 300. And continued growing into a community ecosystem of more than 700 women. Today, the core community has more than 400 women, with additional groups supporting special sessions and programmes.
                        </p>
                    </motion.div>

                    {/* Metric Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-8 bg-gray-950 border-2 border-gray-800 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-gray-500 block mb-2">0</span>
                            <h4 className="text-sm font-black uppercase text-white tracking-wider mb-2">Community at Start</h4>
                            <p className="text-xs text-gray-400 font-medium">Zero audience foundation prior to engagement.</p>
                        </div>
                        <div className="p-8 bg-gray-950 border-2 border-gray-800 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-primary block mb-2"><AnimatedNumber value={700} suffix="+" /></span>
                            <h4 className="text-sm font-black uppercase text-white tracking-wider mb-2">Wider Ecosystem</h4>
                            <p className="text-xs text-gray-400 font-medium">Total women reached across broader community network.</p>
                        </div>
                        <div className="p-8 bg-gray-950 border-2 border-gray-800 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-white block mb-2"><AnimatedNumber value={400} suffix="+" /></span>
                            <h4 className="text-sm font-black uppercase text-white tracking-wider mb-2">Core Community</h4>
                            <p className="text-xs text-gray-400 font-medium">Active women in the central WhatsApp core group.</p>
                        </div>
                        <div className="p-8 bg-gray-950 border-2 border-gray-800 hover:border-primary transition-colors">
                            <span className="text-5xl font-black text-primary block mb-2"><AnimatedNumber value={300} suffix="+" /></span>
                            <h4 className="text-sm font-black uppercase text-white tracking-wider mb-2">Special-Session Groups</h4>
                            <p className="text-xs text-gray-400 font-medium">Additional women in related special programme groups.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. THE ACQUISITION ENGINE (FUNNEL) ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-4">Acquisition Strategy</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
                            Expert Education Became <br /><span className="text-primary">The Growth Engine</span>
                        </h2>
                        <p className="text-black/80 font-bold text-lg mt-6 leading-relaxed border-l-4 border-primary pl-5">
                            Webinars became one of the first major acquisition channels. Rather than simply promoting Meno Haven, we created useful conversations around issues women were actively experiencing.
                        </p>
                    </motion.div>

                    {/* Topics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-16">
                        {['Menopause & Medication', 'Menopause & Skincare', 'Menopause & Nutrition', 'Wellness & Lifestyle', 'Navigating Midlife'].map((topic, i) => (
                            <div key={i} className="p-4 bg-gray-50 border-2 border-black text-center font-black text-xs uppercase tracking-wider">
                                {topic}
                            </div>
                        ))}
                    </div>

                    {/* Funnel Flow Visual */}
                    <div className="bg-black text-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(255,94,0,1)]">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 text-center">Webinar-to-Community Funnel Architecture</h4>
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center">
                            <div className="w-full lg:w-1/6 bg-gray-900 border border-gray-700 p-4 font-black text-xs uppercase">
                                <Video size={20} className="text-primary mx-auto mb-2" />
                                Expert Speaker
                            </div>
                            <div className="text-primary font-bold text-xl">&rarr;</div>
                            <div className="w-full lg:w-1/6 bg-primary text-white p-4 font-black text-xs uppercase shadow-lg">
                                Educational Webinar
                            </div>
                            <div className="text-primary font-bold text-xl">&rarr;</div>
                            <div className="w-full lg:w-1/6 bg-gray-900 border border-gray-700 p-4 font-black text-xs uppercase">
                                Waiting Group
                            </div>
                            <div className="text-primary font-bold text-xl">&rarr;</div>
                            <div className="w-full lg:w-1/6 bg-primary text-white p-4 font-black text-xs uppercase shadow-lg">
                                Core Community
                            </div>
                            <div className="text-primary font-bold text-xl">&rarr;</div>
                            <div className="w-full lg:w-1/6 bg-white text-black p-4 font-black text-xs uppercase">
                                Events & Ecosystem
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 7. THE WAITING GROUP & CONTENT ENGINE ── */}
            <section className="py-24 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                        {/* Waiting Group Box */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                            <div>
                                <span className="inline-block py-1 px-3 bg-primary text-white text-[10px] font-black uppercase tracking-widest mb-4">Frictionless Pathway</span>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">The Waiting Group Strategy</h3>
                                <p className="text-black/80 font-bold text-sm leading-relaxed mb-6">
                                    Webinar participants were first placed into a dedicated waiting group. This gave women the freedom to attend the session without being forced into a long-term community commitment. After the session, women who wanted continued access to information, conversations, and support could join the main community.
                                </p>
                            </div>
                            <div className="p-4 bg-black text-white text-xs font-black uppercase tracking-wider flex items-center justify-between">
                                <span>Interest</span> &rarr; <span>Experience</span> &rarr; <span>Trust</span> &rarr; <span className="text-primary">Community</span>
                            </div>
                        </motion.div>

                        {/* Content Repurposing Box */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-8 bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] flex flex-col justify-between">
                            <div>
                                <span className="inline-block py-1 px-3 bg-primary text-white text-[10px] font-black uppercase tracking-widest mb-4">Content Multiplier</span>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4">Every Conversation Became Content</h3>
                                <p className="text-gray-300 font-medium text-sm leading-relaxed mb-6">
                                    Expert sessions didn't end when the webinar ended. Sessions were repurposed into YouTube replays, short-form videos, educational social content, community conversations, and follow-up discussions. This created a continuous content loop.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase">
                                {['Expert Session', 'Full Replay', 'Short Clips', 'Social Content', 'Community Discovery', 'New Members'].map((item, i) => (
                                    <span key={i} className="py-1 px-2.5 bg-gray-900 border border-gray-700 text-primary">{item}</span>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── 8. COMMUNITY EXPERIENCE & ENGAGEMENT ── */}
            <section className="py-24 bg-white border-b border-black">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-7">
                            <span className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-4">Retention & Programming</span>
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.95]">
                                Growth Was Not Just About <br /><span className="text-primary">Getting Women In</span>
                            </h2>
                            <p className="text-black/80 font-bold text-base leading-relaxed mb-6">
                                Once women joined, the focus shifted to giving them reasons to stay. Lofty Brands created the structure for ongoing community engagement, including daily conversations, educational content, expert sessions, special activities, and community experiences.
                            </p>
                            <p className="text-black/70 font-medium text-sm leading-relaxed border-l-4 border-primary pl-4">
                                The goal was to make Meno Haven feel like a place women could consistently return to, not another group they joined and forgot about.
                            </p>
                        </div>

                        <div className="md:col-span-5 bg-black text-white p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(255,94,0,1)] text-center">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">Peak Weekly Engagement</span>
                            <div className="text-6xl font-black text-white tracking-tight mb-2">30–40%</div>
                            <p className="text-xs font-bold text-gray-400 border-t border-gray-800 pt-4 mt-2">
                                Note: Engagement varied based on members' schedules, session topics, and activity levels.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 9. EXPERT NETWORK & DISCIPLINARY CATEGORIES ── */}
            <section className="py-28 bg-gray-50 border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-4">Credible Voices</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
                            The Community Grew Around <span className="text-primary">Trusted Voices</span>
                        </h2>
                        <p className="text-black/80 font-bold text-lg mt-6 leading-relaxed border-l-4 border-primary pl-5">
                            The expert network expanded over time, giving members access to credible perspectives across 8+ specialized midlife wellness disciplines.
                        </p>
                    </motion.div>

                    {/* Expert Disciplines Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertCategories.map((cat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-6 bg-white border-2 border-black hover:border-primary transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,94,0,1)]"
                            >
                                <div className="w-8 h-8 bg-black text-primary font-black flex items-center justify-center mb-4 text-xs">
                                    0{i + 1}
                                </div>
                                <h4 className="font-black text-base uppercase text-black mb-2">{cat.name}</h4>
                                <p className="text-xs font-medium text-black/70 leading-relaxed">{cat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 10. FROM DIGITAL TO REAL LIFE (WORLD MENOPAUSE DAY CAMPAIGN & MULTI-CITY MOBILIZATION) ── */}
            <section className="py-28 bg-black text-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="text-xs font-black uppercase tracking-widest text-primary mb-3 block">Campaign Strategy & Mobilization</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95]">
                            World Menopause Day: <br /><span className="text-primary">Turning A Community Into A Movement</span>
                        </h2>
                        <p className="text-lg font-bold text-gray-300 mt-6 leading-relaxed border-l-4 border-primary pl-5">
                            For World Menopause Day 2025 ("Steps That Break the Silence"), Lofty Brands helped coordinate a multi-city campaign that brought women together across Lagos, Abuja, Port Harcourt, and Jos — taking the conversation around menopause beyond digital screens into public spaces, street walkathons, and physical engagements.
                        </p>
                    </motion.div>

                    {/* World Menopause Day 2025 Main Campaign Feature Showcase */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
                        {/* Main Street Walkathon Campaign March with Banner & Security Officers */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-6 relative border-4 border-white/20 bg-gray-950 overflow-hidden shadow-[12px_12px_0px_0px_rgba(255,94,0,1)] flex flex-col justify-between">
                            <div className="bg-black/90 p-4 border-b border-white/10 flex justify-between items-center">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">On-Ground Main Street Walkathon</span>
                                <span className="text-[10px] font-bold text-gray-400">Oct 18, 2025</span>
                            </div>
                            <div className="bg-black flex items-center justify-center">
                                <img
                                    src="/meno-haven/meno-haven-main-walkathon.jpg"
                                    alt="Steps That Break the Silence - World Menopause Day Main Street March with Banner and Security Escort"
                                    className="w-full h-auto max-h-[380px] object-cover object-center filter contrast-105"
                                />
                            </div>
                            <div className="p-4 bg-black border-t border-white/20">
                                <h4 className="text-base font-black text-white uppercase">Steps That Break The Silence — Main Street March</h4>
                                <p className="text-xs text-gray-400 mt-1">On-ground walkathon march led by community members, state captains, and traffic security officers.</p>
                            </div>
                        </motion.div>

                        {/* World Menopause Day 2025 Official Backdrop Wall */}
                        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-6 relative border-4 border-white/20 bg-gray-950 overflow-hidden shadow-[12px_12px_0px_0px_rgba(255,255,255,0.15)] flex flex-col justify-between">
                            <div className="bg-black/90 p-4 border-b border-white/10 flex justify-between items-center">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Official Campaign Wall</span>
                                <span className="text-[10px] font-bold text-gray-400">Partner Ecosystem</span>
                            </div>
                            <div className="bg-black flex items-center justify-center p-2">
                                <img
                                    src="/meno-haven/meno-haven-world-menopause-backdrop.jpg"
                                    alt="World Menopause Day 2025 Steps That Break the Silence Official Backdrop Wall"
                                    className="w-full h-auto max-h-[380px] object-contain bg-black filter contrast-105"
                                />
                            </div>
                            <div className="p-4 bg-black border-t border-white/20">
                                <h4 className="text-base font-black text-white uppercase">World Menopause Day 2025 Partner Wall</h4>
                                <p className="text-xs text-gray-400 mt-1">Featuring partners: Carib Health, Travel Right, Shea Radiance, Herstory, Delina, Chuuse.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── MULTI-CITY ENGAGEMENTS SECTION (JOS, ABUJA, LAGOS, PORT HARCOURT) ── */}
                    <div className="mb-20">
                        <div className="mb-10">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">City Mobilization</span>
                            <h3 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tighter">
                                Multi-City Physical Engagements & Walkathons
                            </h3>
                        </div>

                        {/* City Grid: 4 Dedicated City Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* ABUJA ACTIVATION CARD */}
                            <div className="bg-gray-950 border-2 border-white/20 overflow-hidden flex flex-col justify-between">
                                <div className="p-6 border-b border-white/10 bg-black">
                                    <div className="flex items-center gap-2 text-primary font-black uppercase text-xs mb-1">
                                        <MapPin size={16} /> Abuja Activation
                                    </div>
                                    <h4 className="text-xl font-black text-white uppercase">Abuja — Community Placards & Advocacy</h4>
                                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                                        Meno Haven women in Abuja holding advocacy placards: <em>"#BreaktheMenoSilence — Menopause doesn't pause our power"</em> and <em>"Support women through the change"</em>.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-2 p-2 bg-black">
                                    <img
                                        src="/meno-haven/meno-haven-abuja-placard1.jpg"
                                        alt="Abuja Meno Haven Placard - Menopause doesn't pause our power"
                                        className="w-full h-52 object-contain bg-gray-900 border border-white/10"
                                    />
                                    <img
                                        src="/meno-haven/meno-haven-abuja-placard2.jpg"
                                        alt="Abuja Meno Haven Placard - Support women through the change"
                                        className="w-full h-52 object-contain bg-gray-900 border border-white/10"
                                    />
                                </div>
                            </div>

                            {/* JOS ACTIVATION CARD */}
                            <div className="bg-gray-950 border-2 border-white/20 overflow-hidden flex flex-col justify-between">
                                <div className="p-6 border-b border-white/10 bg-black">
                                    <div className="flex items-center gap-2 text-primary font-black uppercase text-xs mb-1">
                                        <MapPin size={16} /> Jos Activation
                                    </div>
                                    <h4 className="text-xl font-black text-white uppercase">Jos — Afizere Ancestral Hike & Palace Visit</h4>
                                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                                        Meno Haven women in Jos engaged in physical outdoor activities including the ancestral rock hike at Afizere Settlement ("I LOVE JOS") and cultural visits to Agwom Afizere Palace.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-2 p-2 bg-black">
                                    <img
                                        src="/meno-haven/meno-haven-jos-hiking.jpg"
                                        alt="Jos Hiking Activation - I Love Jos Afizere Ancestral Settlement"
                                        className="w-full h-52 object-contain bg-gray-900 border border-white/10"
                                    />
                                    <img
                                        src="/meno-haven/meno-haven-jos-palace.jpg"
                                        alt="Agwom Afizere Palace Community Engagement in Jos"
                                        className="w-full h-52 object-contain bg-gray-900 border border-white/10"
                                    />
                                </div>
                            </div>

                            {/* LAGOS ACTIVATION CARD */}
                            <div className="bg-gray-950 border-2 border-white/20 overflow-hidden flex flex-col justify-between">
                                <div className="p-6 border-b border-white/10 bg-black">
                                    <div className="flex items-center gap-2 text-primary font-black uppercase text-xs mb-1">
                                        <MapPin size={16} /> Lagos Activation
                                    </div>
                                    <h4 className="text-xl font-black text-white uppercase">Lagos — Outdoor Movement & Wellness Gathering</h4>
                                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                                        Hosted interactive physical movement sessions, outdoor wellness workouts on lawn terraces, member spotlights, and live expert interactions.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-2 p-2 bg-black">
                                    <img
                                        src="/meno-haven/meno-haven-fitness-session.jpg"
                                        alt="Lagos Outdoor Movement & Fitness Session"
                                        className="w-full h-52 object-cover object-center border border-white/10"
                                    />
                                    <img
                                        src="/meno-haven/meno-haven-wellness-member.jpg"
                                        alt="Lagos Strong Women Bold Steps Member Spotlight"
                                        className="w-full h-52 object-contain bg-gray-900 border border-white/10"
                                    />
                                </div>
                            </div>

                            {/* PORT HARCOURT ACTIVATION CARD */}
                            <div className="bg-gray-950 border-2 border-white/20 overflow-hidden flex flex-col justify-between">
                                <div className="p-6 border-b border-white/10 bg-black">
                                    <div className="flex items-center gap-2 text-primary font-black uppercase text-xs mb-1">
                                        <MapPin size={16} /> Port Harcourt Activation
                                    </div>
                                    <h4 className="text-xl font-black text-white uppercase">Port Harcourt — Street Walkathon & Peer Mobilization</h4>
                                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                                        Local community members and walkathon participants mobilized across Port Harcourt for street walkathons and peer support engagements.
                                    </p>
                                </div>
                                <div className="p-2 bg-black flex items-center justify-center">
                                    <img
                                        src="/meno-haven/meno-haven-portharcourt-walk.png"
                                        alt="Port Harcourt Street Walkathon March Banner"
                                        className="w-full h-52 object-contain bg-gray-900 border border-white/10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── WORKSHOPS, DETOX & PRODUCT ACTIVATIONS SHOWCASE ── */}
                    <div>
                        <div className="mb-8">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-1">Interactive Experiences</span>
                            <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter">
                                Expert Workshops & Product Activations
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {/* Skincare Workshop */}
                            <div className="bg-gray-950 border-2 border-white/20 overflow-hidden flex flex-col justify-between">
                                <img
                                    src="/meno-haven/meno-haven-skincare-workshop.jpg"
                                    alt="Interactive Skincare Workshop Session"
                                    className="w-full h-56 object-contain bg-black p-2 border-b border-white/10"
                                />
                                <div className="p-4 bg-black">
                                    <span className="text-[9px] font-black text-primary uppercase">Expert Workshop</span>
                                    <h5 className="text-sm font-black text-white uppercase">Interactive Skincare & Wellness Session</h5>
                                </div>
                            </div>

                            {/* Carib Health Partner Detox */}
                            <div className="bg-gray-950 border-2 border-white/20 overflow-hidden flex flex-col justify-between">
                                <img
                                    src="/meno-haven/meno-haven-partner-activation.jpg"
                                    alt="Carib Health Detox Partner Activation"
                                    className="w-full h-56 object-contain bg-black p-2 border-b border-white/10"
                                />
                                <div className="p-4 bg-black">
                                    <span className="text-[9px] font-black text-primary uppercase">Ecosystem Partner</span>
                                    <h5 className="text-sm font-black text-white uppercase">Carib Health Detox & Nutrition Booth</h5>
                                </div>
                            </div>

                            {/* Shea Radiance Product Display */}
                            <div className="bg-gray-950 border-2 border-white/20 overflow-hidden flex flex-col justify-between">
                                <img
                                    src="/meno-haven/meno-haven-product-display.jpg"
                                    alt="Shea Radiance Skincare Product Table Display"
                                    className="w-full h-56 object-contain bg-black p-2 border-b border-white/10"
                                />
                                <div className="p-4 bg-black">
                                    <span className="text-[9px] font-black text-primary uppercase">Brand Sponsor</span>
                                    <h5 className="text-sm font-black text-white uppercase">Shea Radiance Product Showcase</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 11. WHAT LOFTY BRANDS DID (BEHIND THE SCENES) ── */}
            <section className="py-28 bg-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mb-16">
                        <span className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-4">Strategic Scope</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
                            Strategy Behind <span className="text-primary">The Scenes</span>
                        </h2>
                    </motion.div>

                    {/* Deliverables Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loftyDeliverables.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-8 border-2 border-black bg-white hover:border-primary transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,94,0,1)]"
                            >
                                <h3 className="text-lg font-black uppercase tracking-tight text-black mb-3">{item.title}</h3>
                                <p className="text-sm font-medium text-black/70 leading-relaxed border-l-2 border-primary pl-4">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 12. THE RESULT SECTION ── */}
            <section className="py-28 bg-black text-white border-b border-black">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-black uppercase tracking-widest text-primary mb-3 block">Measurable Outcomes</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                            The Result Was Bigger Than <br /><span className="text-primary">A WhatsApp Group</span>
                        </h2>
                        <p className="text-gray-300 font-bold text-base mt-6 leading-relaxed">
                            Meno Haven moved from having no established community to having a growing ecosystem of women, experts, conversations, experiences, and content.
                        </p>
                    </motion.div>

                    {/* Visual Separated Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="bg-gray-950 border-2 border-gray-800 p-6 text-center hover:border-primary transition-colors">
                            <p className="text-3xl font-black text-primary mb-1">0 → 700+</p>
                            <p className="text-xs font-black uppercase tracking-wider text-white">Wider Ecosystem</p>
                            <p className="text-[10px] text-gray-400 mt-1">Women reached</p>
                        </div>
                        <div className="bg-gray-950 border-2 border-gray-800 p-6 text-center hover:border-primary transition-colors">
                            <p className="text-3xl font-black text-white mb-1">400+</p>
                            <p className="text-xs font-black uppercase tracking-wider text-white">Core Community</p>
                            <p className="text-[10px] text-gray-400 mt-1">Active members</p>
                        </div>
                        <div className="bg-gray-950 border-2 border-gray-800 p-6 text-center hover:border-primary transition-colors">
                            <p className="text-3xl font-black text-primary mb-1">8+</p>
                            <p className="text-xs font-black uppercase tracking-wider text-white">Experts Engaged</p>
                            <p className="text-[10px] text-gray-400 mt-1">Cross-discipline</p>
                        </div>
                        <div className="bg-gray-950 border-2 border-gray-800 p-6 text-center hover:border-primary transition-colors">
                            <p className="text-3xl font-black text-white mb-1">30–40%</p>
                            <p className="text-xs font-black uppercase tracking-wider text-white">Weekly Engagement</p>
                            <p className="text-[10px] text-gray-400 mt-1">Peak active periods</p>
                        </div>
                        <div className="bg-gray-950 border-2 border-gray-800 p-6 text-center hover:border-primary transition-colors">
                            <p className="text-3xl font-black text-primary mb-1">59 → ~100</p>
                            <p className="text-xs font-black uppercase tracking-wider text-white">Webinar Growth</p>
                            <p className="text-[10px] text-gray-400 mt-1">Session attendance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 13. THE BIGGEST LESSON ── */}
            <section className="py-24 bg-white border-b border-black">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <span className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-6">Core Strategic Takeaway</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">
                            Sometimes The Product Isn't <br /><span className="text-primary">The First Thing You Need To Build</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <p className="text-black/80 font-bold text-xl leading-relaxed border-l-4 border-primary pl-5">
                                Meno Haven reinforced an important growth principle: Build the audience before asking the audience to buy the product.
                            </p>
                            <p className="text-black/80 font-bold text-xl leading-relaxed border-l-4 border-black pl-5">
                                By building trust, creating consistent value, and developing a community around the problem first, Meno Haven had something much more valuable than an unfinished product. It had people who cared.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── 14. FINAL CTA & OFFICIAL LINKS ── */}
            <section className="py-28 bg-black text-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <span className="inline-block py-1 px-3 bg-primary text-white text-xs font-black uppercase tracking-widest mb-6">Work With Us</span>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                            Your Next Stage Of Growth Starts With <br /><span className="text-primary">Understanding What Comes First</span>
                        </h2>
                        <p className="text-gray-400 font-bold text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                            Lofty Brands helps ambitious businesses build the strategy, systems, and marketing needed to move from where they are to where they want to be.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <button
                                onClick={openModal}
                                className="px-10 py-5 bg-primary text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 text-base shadow-[6px_6px_0px_0px_rgba(255,94,0,0.4)] hover:shadow-none"
                            >
                                Start A Conversation
                                <ArrowRight size={20} strokeWidth={3} />
                            </button>
                            <Link
                                to="/#work"
                                className="px-10 py-5 bg-transparent text-white font-black uppercase tracking-widest border-2 border-gray-700 hover:border-white transition-all flex items-center justify-center gap-3 text-base"
                            >
                                View All Case Studies
                            </Link>
                        </div>

                        {/* Meno Haven Official Ecosystem Links */}
                        <div className="pt-10 border-t border-gray-900 flex flex-wrap justify-center items-center gap-6">
                            <a
                                href="https://themenohaven.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-300 hover:text-primary transition-colors bg-gray-950 px-4 py-2 border border-gray-800"
                            >
                                Official Website <ExternalLink size={14} />
                            </a>
                            <a
                                href="https://menohaven1.bumpa.shop/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-300 hover:text-primary transition-colors bg-gray-950 px-4 py-2 border border-gray-800"
                            >
                                Official Shop <ExternalLink size={14} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
