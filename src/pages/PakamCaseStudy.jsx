import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
    ArrowRight, ArrowLeft, Shield, BookOpen, Eye, Users, Zap,
    TrendingUp, Recycle, Lightbulb, Target, Award, CheckCircle
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

const principles = [
    { icon: <Shield size={28} />, title: 'Build Trust', desc: 'Establish credibility before demanding action.' },
    { icon: <BookOpen size={28} />, title: 'Educate the Market', desc: 'Help people understand the problem and the opportunity.' },
    { icon: <Eye size={28} />, title: 'Demonstrate Real Value', desc: 'Show results, not promises.' },
    { icon: <Users size={28} />, title: 'Activate Communities', desc: 'Make customers advocates and ambassadors.' },
    { icon: <Zap size={28} />, title: 'Scale Awareness', desc: 'Amplify what works through the right channels.' },
];

const results = [
    { value: 35000, suffix: '+', label: 'Platform Users', sub: 'Platform growth through strategic customer acquisition.' },
    { staticVal: '1 Million+', label: 'People Reached', sub: 'Campaign reach across digital marketing initiatives.' },
    { value: 250000, suffix: '+', unit: 'KG', label: 'Waste Recovered', sub: 'Environmental impact supported during the engagement.' },
    { value: 30, suffix: '', label: 'Schools Engaged', sub: 'Environmental education campaigns.' },
    { value: 1000, suffix: '+', label: 'Students Educated', sub: 'Creating awareness around recycling and sustainability.' },
    { staticVal: '2 Tons', label: 'Waste Collected', sub: 'Recovered through the Recycle Together Challenge.' },
];

const insights = [
    { icon: <Shield size={22} />, title: 'Trust comes before growth.', desc: 'Customers adopt products they believe in.' },
    { icon: <BookOpen size={22} />, title: 'Education creates demand.', desc: 'Helping people understand the problem often matters more than selling the solution.' },
    { icon: <Eye size={22} />, title: "Show, don't tell.", desc: 'Real stories outperform promotional messages.' },
    { icon: <Target size={22} />, title: 'Channel alignment matters.', desc: 'Marketing works best when every channel supports the same business objective.' },
    { icon: <Lightbulb size={22} />, title: 'Growth can expose operational challenges.', desc: 'Successful marketing should be matched with operational readiness.' },
];

const phases = [
    {
        num: '01',
        title: 'Building Trust',
        reverse: false,
        img: '/pakam/pakam-tiktok-growth.jpg',
        body: 'Strengthened credibility by improving Google Business Profile reviews, App Store reviews, website messaging, search visibility, and digital trust signals. We scaled Pakam’s TikTok presence from 5 followers to over 13,200 engaged followers.',
        suggested: 'TikTok profile growth & digital trust building'
    },
    {
        num: '02',
        title: 'Educating the Market',
        reverse: true,
        img: '/pakam/pakam-school-classroom.jpg',
        body: 'Developed an education-first content strategy focused on sustainability, recycling, environmental awareness, product education, and climate conversations. Marketing channels included Blog, Social Media, Email, In-App Communication, Podcast, and Educational Workshops in schools. Education became the foundation for customer acquisition.',
        suggested: 'School workshops & educational sessions'
    },
    {
        num: '03',
        title: 'Demonstrating Value',
        reverse: false,
        img: '/pakam/pakam-app-interface.png',
        body: "Instead of simply telling people they could earn money from recycling, we showed them. A simple user-generated style campaign followed a real person's recycling journey from home to payment. The campaign went viral, generated over 1.7 million impressions, 49,000 likes, and became the turning point for Pakam's awareness.",
        suggested: 'Pakam Household App UI & User Journey'
    },
    {
        num: '04',
        title: 'Community Activation — Eco Chat',
        reverse: true,
        img: '/pakam/pakam-eco-chat.jpg',
        body: "Created Eco Chat, an educational podcast bringing together experts to discuss sustainability, recycling, climate issues, and environmental responsibility. The objective was to position Pakam as more than a recycling app — becoming an educational voice within the circular economy.",
        suggested: 'Eco Chat Podcast Graphic & Discussion Series'
    },
    {
        num: '05',
        title: 'Recycle Together Challenge',
        reverse: false,
        img: '/pakam/pakam-workshop-presenter.jpg',
        body: "Designed and executed one of Pakam's most impactful community initiatives. The campaign educated students on recycling while encouraging practical participation through friendly competition. Schools competed to collect recyclable waste, tracked their progress through leaderboards, and received recognition for outstanding performance.",
        suggested: 'Recycle Together School Workshop & Exhibition',
        highlights: ['30 Schools Engaged', '1,000+ Students Educated', '2 Tons of Waste Collected']
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function PakamCaseStudy() {
    const { openModal } = useModal();
    return (
        <div className="bg-white text-black font-sans">

            {/* HERO SECTION */}
            <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-black">
                <img src="/pakam/pakam-school-placards.jpg" alt="Pakam Eco Education & School Community Impact" className="absolute inset-0 w-full h-full object-cover opacity-45 filter contrast-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />
                <div className="relative z-10 container mx-auto px-6 pb-20 pt-40">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <div className="inline-flex items-center gap-3 py-2 px-4 bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
                            <img src="/logos/pakam.png" alt="Pakam Official Logo" className="h-6 w-auto object-contain bg-white rounded p-0.5" />
                            <span className="border-l border-white/30 pl-3">PAKAM CASE STUDY</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.9] text-white tracking-tighter uppercase mb-6 max-w-5xl">
                            From Product to<br /><span className="text-primary">Market Movement</span>
                        </h1>
                        <p className="text-lg md:text-2xl font-bold text-gray-200 max-w-3xl leading-relaxed mb-10 border-l-4 border-primary pl-5 bg-black/40 backdrop-blur-sm py-2">
                            How strategic marketing helped Pakam grow from approximately 3,000 users to over 35,000 users by combining education, product marketing, storytelling, and community-driven campaigns.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={openModal} className="px-8 py-4 bg-primary text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 text-sm shadow-xl transform hover:-translate-y-1">
                                Book a Growth Strategy Session <ArrowRight size={18} strokeWidth={3} />
                            </button>
                            <Link to="/#work" className="px-8 py-4 bg-transparent text-white font-black uppercase tracking-widest border-2 border-white/40 hover:border-white transition-all flex items-center justify-center gap-3 text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none">
                                <ArrowLeft size={18} strokeWidth={2} /> Explore More Growth Stories
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section className="py-20 bg-black text-white border-b border-gray-800">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4">
                            <div className="inline-block py-1 px-3 bg-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-4">Executive Summary</div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">The Engagement at a Glance</h2>
                            <p className="text-gray-400 font-medium leading-relaxed">A strategic growth marketing engagement that transformed Pakam from a promising recycling app into an established market leader within Nigeria's circular economy.</p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-gray-950 border border-gray-800 p-5 hover:border-primary transition-colors">
                                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Client</p>
                                    <p className="text-white font-bold text-lg">Pakam</p>
                                </div>
                                <div className="bg-gray-950 border border-gray-800 p-5 hover:border-primary transition-colors">
                                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Industry</p>
                                    <p className="text-white font-bold text-sm leading-snug">Circular Economy Technology</p>
                                </div>
                                <div className="bg-gray-950 border border-gray-800 p-5 hover:border-primary transition-colors">
                                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Engagement</p>
                                    <p className="text-white font-bold text-base">Marketing Lead</p>
                                </div>
                                <div className="bg-gray-950 border border-gray-800 p-5 hover:border-primary transition-colors">
                                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Duration</p>
                                    <p className="text-white font-bold text-base">2023 to 2025</p>
                                </div>
                            </div>
                            <div className="bg-gray-950 border border-gray-800 p-6 hover:border-primary transition-colors mb-6">
                                <p className="text-xs font-black uppercase tracking-widest text-primary mb-3">Business Outcome</p>
                                <p className="text-white font-bold text-xl leading-relaxed">
                                    Scaled platform growth from approximately <span className="text-primary font-black">3,000 users to over 35,000 users</span> while building market awareness and increasing product adoption.
                                </p>
                            </div>
                            <div className="bg-gray-950 border border-gray-800 p-6 hover:border-primary transition-colors">
                                <p className="text-xs font-black uppercase tracking-widest text-primary mb-4">Services Delivered</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Growth Marketing', 'Product Marketing', 'Marketing Strategy', 'Customer Acquisition', 'Community Growth', 'Content Strategy', 'Campaign Development', 'Partnership Marketing', 'Brand Awareness'].map((s) => (
                                        <span key={s} className="py-1.5 px-3 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/30">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ABOUT PAKAM */}
            <section className="py-24 bg-white border-b border-black/10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <div className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-6">About Pakam</div>
                        <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter mb-8">Pakam</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <p className="text-black/80 font-bold leading-relaxed text-lg border-l-4 border-primary pl-5">
                                Pakam is a Nigerian circular economy platform that connects households, businesses, and waste collectors through technology, making recycling more accessible while rewarding users for responsible waste disposal.
                            </p>
                            <p className="text-black/70 font-medium leading-relaxed text-lg">
                                Beyond helping people earn from recyclable materials, Pakam exists to promote environmental sustainability and reduce waste ending up in landfills.
                            </p>
                        </div>

                        {/* Product Interface Showcase */}
                        <div className="mt-8 p-6 bg-gray-50 border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-5 flex justify-center">
                                <img
                                    src="/pakam/pakam-app-interface.png"
                                    alt="Pakam Household App Mobile Interface"
                                    className="w-full max-w-[280px] h-auto rounded-3xl border-4 border-black shadow-2xl"
                                />
                            </div>
                            <div className="md:col-span-7 space-y-4">
                                <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary/20 inline-block">
                                    Product UX & Feature Discovery
                                </span>
                                <h3 className="text-2xl md:text-4xl font-black uppercase text-black tracking-tight">
                                    The Pakam Household App
                                </h3>
                                <p className="text-gray-700 font-medium leading-relaxed text-base">
                                    Connecting households directly to nearby recycling hubs (e.g. Golden Garbage Maryland, Pretty Planet Limited), enabling users to track earnings in <strong className="text-black">My Savings</strong> and measure their environmental impact in <strong className="text-black">My Impact</strong>.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2 text-xs font-bold uppercase text-black">
                                    <span className="px-3 py-1 bg-white border border-black">Nearby Recycling Hubs</span>
                                    <span className="px-3 py-1 bg-white border border-black">Recycling Savings Wallet</span>
                                    <span className="px-3 py-1 bg-primary text-white">Impact Analytics</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* THE CHALLENGE */}
            <section className="py-24 bg-black text-white border-b border-gray-900">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <div className="inline-block py-1 px-3 bg-primary text-white text-xs font-black uppercase tracking-widest mb-6">The Challenge</div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                            Nobody Was Seeing<br /><span className="text-primary">What They Had Built</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            "Pakam had developed an innovative recycling platform, but innovation alone wasn't enough.",
                            "Very few people understood that they could earn money from recycling, awareness was limited, and the platform struggled to attract enough users to validate its market potential.",
                            "The challenge wasn't the product. The challenge was helping people understand its value.",
                            "The business needed visibility, trust, and rapid customer acquisition within a limited marketing budget."
                        ].map((text, i) => (
                            <motion.p key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-gray-300 font-bold text-lg leading-relaxed border-l-2 border-primary/40 pl-5">
                                {text}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR THINKING */}
            <section className="py-24 bg-white border-b border-black/10">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-3xl mb-16">
                        <div className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-6">Our Thinking</div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.95]">Changing Behaviour <span className="text-primary">Before</span> Driving Downloads</h2>
                        <p className="text-black/80 font-bold text-lg leading-relaxed border-l-4 border-primary pl-5">
                            Rather than leading with advertising, we focused on changing how people thought about recycling. People first needed to understand the opportunity, trust the platform, and see themselves benefiting from it before asking them to download the app.
                        </p>
                    </motion.div>
                    <p className="text-xs font-black uppercase tracking-widest text-black/40 mb-8">Every marketing decision followed five principles</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {principles.map((p, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="group p-6 border-2 border-black hover:border-primary bg-white hover:bg-black transition-all duration-300 transform hover:-translate-y-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] cursor-default">
                                <div className="text-primary mb-4">{p.icon}</div>
                                <h3 className="font-black uppercase tracking-tight text-black group-hover:text-white text-base mb-2 transition-colors">{p.title}</h3>
                                <p className="text-black/60 group-hover:text-gray-400 font-medium text-sm leading-relaxed transition-colors">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STRATEGY & EXECUTION */}
            <section className="py-20 bg-gray-50 border-b border-black/10">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-20">
                        <div className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-4">Strategy & Execution</div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">How We Executed</h2>
                    </motion.div>
                    <div className="space-y-28">
                        {phases.map((phase, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className={`relative overflow-hidden ${phase.reverse ? 'lg:order-2' : ''}`}>
                                    <img src={phase.img} alt={phase.title} className="w-full h-80 lg:h-[420px] object-cover border-2 border-black/10 shadow-2xl" />
                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1">{phase.num}</div>
                                </div>
                                <div className={phase.reverse ? 'lg:order-1' : ''}>
                                    <span className="text-6xl font-black text-black/5 leading-none">{phase.num}</span>
                                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black mb-4 -mt-4">{phase.title}</h3>
                                    <p className="text-black/70 font-bold text-lg leading-relaxed mb-6 border-l-4 border-primary pl-4">{phase.body}</p>
                                    {phase.highlights && (
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                                            {phase.highlights.map((h, j) => (
                                                <div key={j} className="p-4 bg-black text-white border-l-4 border-primary">
                                                    <p className="font-black text-sm uppercase tracking-tight leading-snug">{h}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RESULTS */}
            <section className="py-28 bg-black text-white border-b border-gray-900">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-20">
                        <div className="inline-block py-1 px-3 bg-primary text-white text-xs font-black uppercase tracking-widest mb-4">The Results</div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">Impact in <span className="text-primary">Numbers</span></h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {results.map((r, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="group bg-gray-950 border-2 border-gray-800 hover:border-primary p-8 transition-all duration-300 transform hover:-translate-y-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,94,0,1)]">
                                <div className="flex justify-between items-start mb-6">
                                    <TrendingUp size={28} className="text-primary" />
                                    <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary/20">Result</span>
                                </div>
                                <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-primary transition-colors tracking-tight mb-2">
                                    {r.staticVal ? r.staticVal : (
                                        r.unit
                                            ? <><AnimatedNumber value={r.value} suffix={r.suffix} /> {r.unit}</>
                                            : <AnimatedNumber value={r.value} suffix={r.suffix} />
                                    )}
                                </div>
                                <h4 className="text-lg font-black uppercase tracking-wider text-gray-200 mb-3">{r.label}</h4>
                                <p className="text-gray-500 font-medium leading-relaxed border-l-2 border-gray-800 group-hover:border-primary pl-4 transition-colors text-sm">{r.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Analytics Proof Showcase Grid */}
                    <div className="mt-16 pt-16 border-t border-gray-800">
                        <div className="text-center mb-12">
                            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 border border-primary/30 inline-block mb-3">
                                Empirical Analytics Proof
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">Verified Growth Reports</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-gray-950 border-2 border-gray-800 p-4 hover:border-primary transition-colors">
                                <div className="mb-3 px-2 flex justify-between items-center">
                                    <span className="text-xs font-black uppercase text-primary tracking-widest">Google Analytics Dashboard</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">26K Active Users (+368.1%)</span>
                                </div>
                                <img
                                    src="/pakam/pakam-analytics.png"
                                    alt="Google Analytics Active Users Growth Graph"
                                    className="w-full h-auto object-contain border border-gray-800"
                                />
                            </div>

                            <div className="bg-gray-950 border-2 border-gray-800 p-4 hover:border-primary transition-colors">
                                <div className="mb-3 px-2 flex justify-between items-center">
                                    <span className="text-xs font-black uppercase text-primary tracking-widest">Audience & Channel Breakdown</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Lagos 22K (+395%) • Organic 11K</span>
                                </div>
                                <img
                                    src="/pakam/pakam-analytics-cities.png"
                                    alt="Google Analytics Audience Cities and Acquisition Channels"
                                    className="w-full h-auto object-contain border border-gray-800"
                                />
                            </div>

                            <div className="bg-gray-950 border-2 border-gray-800 p-4 hover:border-primary transition-colors">
                                <div className="mb-3 px-2 flex justify-between items-center">
                                    <span className="text-xs font-black uppercase text-primary tracking-widest">Acquisition Trend Overview</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">23K Users (+313.2%)</span>
                                </div>
                                <img
                                    src="/pakam/pakam-acquisition-overview.png"
                                    alt="Acquisition Trend Overview"
                                    className="w-full h-auto object-contain border border-gray-800"
                                />
                            </div>

                            <div className="bg-gray-950 border-2 border-gray-800 p-4 hover:border-primary transition-colors">
                                <div className="mb-3 px-2 flex justify-between items-center">
                                    <span className="text-xs font-black uppercase text-primary tracking-widest">TikTok Viral Analytics</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">1.7M Views • 13.2K Followers</span>
                                </div>
                                <img
                                    src="/pakam/pakam-tiktok-analytics.png"
                                    alt="TikTok Analytics Performance Dashboard"
                                    className="w-full h-auto object-contain border border-gray-800"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY TAKEAWAYS */}
            <section className="py-24 bg-white border-b border-black/10">
                <div className="container mx-auto px-6">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mb-16">
                        <div className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-4">Key Takeaways</div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">What Businesses Can Learn</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {insights.map((ins, i) => (
                            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="group p-8 border-2 border-black hover:border-primary bg-white transition-all duration-300 transform hover:-translate-y-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] cursor-default">
                                <div className="p-3 bg-black text-primary group-hover:bg-primary group-hover:text-black transition-colors inline-block mb-4">{ins.icon}</div>
                                <h3 className="text-base font-black uppercase tracking-tight text-black group-hover:text-primary transition-colors mb-2">{ins.title}</h3>
                                <p className="text-black/60 font-medium leading-relaxed text-sm border-l-2 border-gray-200 group-hover:border-primary pl-4 transition-colors">{ins.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL REFLECTION */}
            <section className="py-24 bg-gray-50 border-b border-black/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <div className="inline-block py-1 px-3 bg-black text-white text-xs font-black uppercase tracking-widest mb-6">Final Reflection</div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">Growth Starts With <span className="text-primary">Clarity</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <p className="text-black/80 font-bold text-xl leading-relaxed border-l-4 border-primary pl-5">
                                Pakam's growth wasn't driven by bigger advertising budgets. It was driven by strategic thinking, consistent execution, education, storytelling, and helping people clearly understand the value of the product.
                            </p>
                            <p className="text-black/80 font-bold text-xl leading-relaxed border-l-4 border-primary pl-5">
                                The result wasn't simply more downloads. It was a business that gained market validation, stronger visibility, and confidence in the potential of its product.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="py-28 bg-black text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <div className="inline-block py-1 px-3 bg-primary text-white text-xs font-black uppercase tracking-widest mb-6">Work With Us</div>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                            Ready to Write Your Own<br /><span className="text-primary">Growth Story?</span>
                        </h2>
                        <p className="text-gray-400 font-bold text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                            Every business has untapped growth potential. Let's identify the opportunities holding your business back and build a strategy that delivers measurable results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={openModal} className="px-10 py-5 bg-primary text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 text-base shadow-[6px_6px_0px_0px_rgba(255,94,0,0.4)] hover:shadow-none">
                                Book a Growth Strategy Session <ArrowRight size={20} strokeWidth={3} />
                            </button>
                            <Link to="/#services" className="px-10 py-5 bg-transparent text-white font-black uppercase tracking-widest border-2 border-gray-700 hover:border-white transition-all flex items-center justify-center gap-3 text-base">
                                View Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
