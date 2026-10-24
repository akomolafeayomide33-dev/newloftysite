import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Sparkles, 
    Layers, Target, Megaphone, ShieldCheck, TrendingUp, BadgeCheck,
    Play, Pause, Volume2, VolumeX, Eye, ArrowUpRight, Instagram,
    Users, Award, BarChart3, X, Check, Share2, MessageCircle, Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        q: "Is ₦199,000 a monthly retainer?",
        a: "No. This is a one-time fee for a focused 30-day sprint. There are no automatic renewals, surprise charges, or forced contracts. At the end of the 30 days, you decide whether to roll into an ongoing monthly growth plan or take all assets and manage things in-house."
    },
    {
        q: "How many posts and videos will I get?",
        a: "We focus on sales and conversion architecture, not vanity spam. You get 12 strategic feed posts (high-converting videos, educational carousels, and offer spotlights), complete profile optimization, and 3 to 4 distinct direct-response ad campaign variations."
    },
    {
        q: "How much should I spend on ads?",
        a: "Ad spend is completely separate and paid directly to Meta from your own card. For this 30-day sprint, we recommend an initial testing budget between ₦50,000 and ₦150,000. We set strict daily budget limits so every naira is tested efficiently against real buyer inquiries."
    },
    {
        q: "Do I need to be on camera or hire a videographer?",
        a: "Not at all. You can send us simple smartphone clips of your products, behind-the-scenes processes, packaging, or customer reviews. Our team handles the scripting, voiceovers, dynamic editing, and captions. If you do want to be on camera, we write the exact word-for-word scripts for you."
    },
    {
        q: "What if my existing photos or videos aren't good enough?",
        a: "Don't worry. Most clients start with everyday phone clips. In Week 1, we provide a simple 'Shot List' showing the exact 10-second angles to capture using natural light. Our team handles the professional voiceovers, text hooks, editing, and sound design to make your brand look world-class."
    },
    {
        q: "Can your team come to my location to shoot?",
        a: "The sprint is designed to run 100% remotely with minimal effort from you. If your brand requires on-site production, we offer a dedicated half-day studio/location shoot package as an optional add-on within Lagos."
    },
    {
        q: "How will we communicate during the 30 days?",
        a: "You will be placed in a private, dedicated WhatsApp workspace with your lead strategist and creative team for fast, real-time approvals and direct communication. You also receive a weekly Friday recap showing ad spend, leads delivered, and live campaign status."
    },
    {
        q: "What happens after the 30 days are over?",
        a: "On Day 30, we deliver your complete Performance Deck detailing your top-performing ads, acquired leads, and cost metrics. If you want us to keep scaling your campaigns, we can transition into an ongoing monthly partnership. If not, you retain 100% ownership of every creative asset, copy template, and ad account build."
    }
];

function getYouTubeEmbedUrl(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube-nocookie.com/embed/${match[2]}?autoplay=1&rel=0` : null;
}

export default function GrowthSprint() {
    const [openFaq, setOpenFaq] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        businessCategory: 'E-Commerce / Retail',
        marketingGoal: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeProofModal, setActiveProofModal] = useState(null);
    const [activeVideoModal, setActiveVideoModal] = useState(null);
    const videoPlayerRef = useRef(null);

    useEffect(() => {
        if (activeVideoModal?.videoSrc && videoPlayerRef.current) {
            const playPromise = videoPlayerRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    if (videoPlayerRef.current) {
                        videoPlayerRef.current.muted = true;
                        videoPlayerRef.current.play().catch(() => {});
                    }
                });
            }
        }
    }, [activeVideoModal]);

    const scrollToForm = () => {
        const el = document.getElementById('get-started');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const emailSubject = encodeURIComponent(`30-Day Growth Sprint Application: ${formData.businessName || formData.name}`);
        const emailBody = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Business Name: ${formData.businessName}\n` +
            `Work Email: ${formData.email}\n` +
            `WhatsApp/Phone: ${formData.phone}\n` +
            `Business Category: ${formData.businessCategory}\n\n` +
            `Primary Goal For This Month:\n${formData.marketingGoal}\n`
        );

        window.location.href = `mailto:Loftybrands@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 600);
    };

    return (
        <div className="min-h-screen bg-background text-black font-sans selection:bg-primary selection:text-white">
            
            {/* MINIMAL STANDALONE NAVIGATION */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-black">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img 
                            src="/lofty-logo-header.png" 
                            alt="Lofty Brands" 
                            className="h-12 md:h-14 w-auto object-contain" 
                        />
                        <span className="hidden sm:inline text-xs font-black uppercase tracking-widest text-black group-hover:text-primary transition-colors border-l-2 border-black pl-3 py-0.5">
                            Growth Sprint
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-black">
                        <a href="#the-sprint" className="hover:text-primary transition-colors">THE SPRINT</a>
                        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
                    </nav>

                    <button 
                        onClick={scrollToForm}
                        className="px-6 py-3 bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                    >
                        GET STARTED
                    </button>
                </div>
            </header>

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-24 bg-background border-b-2 border-black">
                {/* Background Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 py-2 px-4 bg-black text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-[4px_4px_0px_0px_rgba(255,94,0,1)]">
                                <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                                Only 10 Businesses Taken Per Month
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 text-black tracking-tighter uppercase">
                                FOR 30 DAYS, <br />
                                WE TAKE OVER YOUR <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                                    MARKETING COMPLETELY.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl font-bold text-black/80 max-w-xl mb-8 border-l-4 border-primary pl-5 py-1 leading-relaxed">
                                Stop guessing what to post or wasting money on ads that don't bring sales. For one full month, we plan, create, and run your marketing for you.
                            </p>

                            {/* AUTHENTIC PROOF BADGE (REPLACES PRICE BOX) */}
                            <div className="bg-white border-2 border-black p-4 sm:p-5 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4">
                                <div className="p-3 bg-primary/10 border-2 border-primary text-primary shrink-0">
                                    <BadgeCheck size={26} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-primary mb-0.5">Verified Lofty Track Record</span>
                                    <p className="text-xs md:text-sm font-black text-black uppercase tracking-wider leading-snug">
                                        Trusted by 20+ Growing Brands • Over 3 Million+ Views & Thousands of Real Customer Inquiries Generated
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                                <button 
                                    onClick={scrollToForm}
                                    className="px-9 py-5 bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                >
                                    Book Your 30-Day Sprint →
                                </button>
                                <span className="text-xs text-gray-600 font-bold uppercase tracking-wider text-center sm:text-left">
                                    Ad spend is separate.
                                </span>
                            </div>
                        </div>

                        {/* HERO SPRINT CAMPAIGN STACK UI PREVIEW (REPLACES STOCK PHOTO) */}
                        <div className="lg:col-span-5">
                            <div className="relative">
                                {/* Top Ad Engine Card */}
                                <div className="bg-black text-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] relative z-10">
                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-800">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-black uppercase tracking-wider">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            Meta Ads Engine • Active
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                            30-Day Sprint
                                        </span>
                                    </div>

                                    <div className="mb-6">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">
                                            Peak Campaign Output
                                        </span>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                                                +15.5x
                                            </span>
                                            <span className="text-sm font-black uppercase text-gray-300">
                                                Return on Ad Spend
                                            </span>
                                        </div>
                                    </div>

                                    {/* Subtle Upward Growth Chart Line */}
                                    <div className="border border-gray-800 bg-gray-950/80 p-4 mb-4">
                                        <div className="flex justify-between items-center text-[10px] font-black uppercase text-gray-400 mb-2">
                                            <span>Week 1 Kickoff</span>
                                            <span className="text-primary font-black flex items-center gap-1">
                                                <TrendingUp size={12} /> Week 4 Scale
                                            </span>
                                        </div>
                                        <svg className="w-full h-14" viewBox="0 0 300 60" fill="none" preserveAspectRatio="none">
                                            <path 
                                                d="M0 50 Q 60 48, 100 38 T 190 24 T 300 6" 
                                                stroke="#FF5E00" 
                                                strokeWidth="3.5" 
                                                strokeLinecap="round"
                                            />
                                            <path 
                                                d="M0 50 Q 60 48, 100 38 T 190 24 T 300 6 L 300 60 L 0 60 Z" 
                                                fill="url(#sprintGrad)" 
                                                opacity="0.25"
                                            />
                                            <defs>
                                                <linearGradient id="sprintGrad" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#FF5E00" />
                                                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-[11px] font-black uppercase">
                                        <div className="bg-gray-900 border border-gray-800 p-2.5">
                                            <span className="text-gray-400 block text-[9px]">Verified Leads</span>
                                            <span className="text-white text-xs">1,497 Registrations</span>
                                        </div>
                                        <div className="bg-gray-900 border border-gray-800 p-2.5">
                                            <span className="text-gray-400 block text-[9px]">Lead Cost</span>
                                            <span className="text-primary text-xs">₦47.27 / Inquirer</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Phone Mockup Card */}
                                <div 
                                    onClick={() => setActiveVideoModal({
                                        title: "Pakam Viral Campaign Story",
                                        videoSrc: "/videos/pakam-viral-1.mp4",
                                        poster: "/proof/pakam-tiktok-profile.png",
                                        platform: "TikTok",
                                        url: "https://www.tiktok.com/@pakamnigeria_",
                                        caption: "Over 3 Million+ views generated from authentic, hook-driven UGC storytelling."
                                    })}
                                    className="cursor-pointer -mt-8 ml-6 sm:ml-12 bg-white border-4 border-black p-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,94,0,1)] transition-all relative z-20 group"
                                >
                                    <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-black">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                                            <span className="text-xs font-black uppercase text-black">Live Creative Asset</span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5">
                                            470K+ Views
                                        </span>
                                    </div>

                                    <div className="relative aspect-[16/9] bg-black border-2 border-black overflow-hidden flex items-center justify-center">
                                        <img 
                                            src="/proof/pakam-tiktok-profile.png" 
                                            alt="Campaign preview" 
                                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                            <div className="px-4 py-2 bg-primary text-white border-2 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 group-hover:scale-110 transition-transform">
                                                <Play size={14} className="fill-white" />
                                                Play Campaign Reel
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2 text-[10px] font-black uppercase text-gray-500 flex justify-between items-center">
                                        <span>Click to Watch Preview</span>
                                        <span className="text-primary">Watch Video →</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. THE SPRINT (CONSOLIDATED PROBLEM & WORKFLOW) */}
            <section id="the-sprint" className="py-24 md:py-32 border-b-2 border-black bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="max-w-4xl mb-16">
                        <span className="inline-block py-2 px-4 border-2 border-black font-bold uppercase tracking-widest text-xs mb-6 bg-surface shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            The 30-Day Solution
                        </span>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-black uppercase tracking-tighter leading-[0.95] mb-6">
                            You Have a Great Business. <br className="hidden sm:inline" />
                            <span className="text-primary">You Just Need Marketing That Actually Brings Customers.</span>
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-black/80 border-l-4 border-primary pl-5 py-2 leading-relaxed">
                            Running a business while trying to write captions, edit videos, and figure out ads is exhausting. When marketing is scattered, it stops working. We bring everything together so your marketing runs every single day without you stressing over it.
                        </p>
                    </div>

                    {/* THE 3 EXECUTION PILLARS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* THE PLAN */}
                        <div className="bg-surface border-4 border-black p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,94,0,1)] transition-all">
                            <div>
                                <div className="p-4 bg-black text-primary w-fit mb-6 shadow-[4px_4px_0px_0px_rgba(255,94,0,1)]">
                                    <Target size={32} />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Pillar 01</span>
                                <h3 className="text-2xl font-black uppercase text-black mb-4">The Plan</h3>
                                <p className="text-black/80 font-bold leading-relaxed border-l-2 border-primary pl-4">
                                    We look at your business, your buyers, and what you need to sell right now.
                                </p>
                            </div>
                        </div>

                        {/* THE CREATIVE WORK */}
                        <div className="bg-surface border-4 border-black p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,94,0,1)] transition-all">
                            <div>
                                <div className="p-4 bg-black text-primary w-fit mb-6 shadow-[4px_4px_0px_0px_rgba(255,94,0,1)]">
                                    <Layers size={32} />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Pillar 02</span>
                                <h3 className="text-2xl font-black uppercase text-black mb-4">The Creative Work</h3>
                                <p className="text-black/80 font-bold leading-relaxed border-l-2 border-primary pl-4">
                                    We write, design, and edit the videos, posts, and graphics for your brand.
                                </p>
                            </div>
                        </div>

                        {/* THE PAID ADS */}
                        <div className="bg-surface border-4 border-black p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,94,0,1)] transition-all">
                            <div>
                                <div className="p-4 bg-black text-primary w-fit mb-6 shadow-[4px_4px_0px_0px_rgba(255,94,0,1)]">
                                    <Megaphone size={32} />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Pillar 03</span>
                                <h3 className="text-2xl font-black uppercase text-black mb-4">The Paid Ads</h3>
                                <p className="text-black/80 font-bold leading-relaxed border-l-2 border-primary pl-4 mb-6">
                                    We run targeted ads on Meta (Instagram & Facebook) to put your products in front of people ready to buy.
                                </p>
                            </div>
                            <div className="pt-4 border-t-2 border-black">
                                <span className="text-xs font-black uppercase tracking-widest text-primary block">
                                    Ad spend is separate.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CASE STUDIES / PROOF */}
            <section className="py-24 md:py-32 border-b-2 border-black bg-surface">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-20 border-b-4 border-black pb-8 max-w-3xl">
                        <span className="text-primary font-black tracking-widest uppercase mb-2 block text-xs">Verified Track Record</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tighter">
                            REAL WORK. REAL MARKETING.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* 1. CRAFTSQUARRE */}
                        <div className="bg-white border-4 border-black p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                        Marketplace / Ecommerce
                                    </span>
                                    <span className="text-xs font-black text-primary uppercase tracking-wider">
                                        0 → 100+ Merchants
                                    </span>
                                </div>
                                <h3 className="text-3xl font-black uppercase text-black mb-2 tracking-tight">
                                    CRAFTSQUARRE
                                </h3>
                                <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">
                                    Marketing • Content • Campaigns • Merchant Growth
                                </p>
                                <p className="text-black/80 font-medium leading-relaxed mb-6 border-l-2 border-gray-200 pl-4">
                                    African marketplace for product-based creators and businesses. Built the foundational marketing engine from early-stage product through MVP validation, onboarding over 100 merchant brands and 150 early buyers.
                                </p>
                            </div>
                            <div className="pt-4 border-t-2 border-black flex items-center justify-between text-xs font-black uppercase tracking-wider text-gray-600">
                                <span>150+ Early Buyers</span>
                                <span className="text-black">Merchant Acquisition</span>
                            </div>
                        </div>

                        {/* 2. PAKAM */}
                        <div className="bg-white border-4 border-black p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                        Circular Economy Tech
                                    </span>
                                    <span className="text-xs font-black text-primary uppercase tracking-wider">
                                        3,000 → 35,000+ Users
                                    </span>
                                </div>
                                <h3 className="text-3xl font-black uppercase text-black mb-2 tracking-tight">
                                    PAKAM
                                </h3>
                                <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">
                                    Education • Community • Paid Acquisition • Systems
                                </p>
                                <p className="text-black/80 font-medium leading-relaxed mb-6 border-l-2 border-gray-200 pl-4">
                                    Scaled mobile app acquisition from approximately 3,000 to over 35,000 users. Combined educational content strategy, video storytelling, podcast programming, and the Recycle Together Challenge across 30+ schools.
                                </p>
                            </div>
                            <div className="pt-4 border-t-2 border-black flex items-center justify-between text-xs font-black uppercase tracking-wider text-gray-600">
                                <span>2 Tons Waste Recovered</span>
                                <span className="text-black">30+ Schools Reached</span>
                            </div>
                        </div>

                        {/* 3. MENO HAVEN */}
                        <div className="bg-white border-4 border-black p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                        Community Growth / Lifecycle
                                    </span>
                                    <span className="text-xs font-black text-primary uppercase tracking-wider">
                                        0 → 700+ Community
                                    </span>
                                </div>
                                <h3 className="text-3xl font-black uppercase text-black mb-2 tracking-tight">
                                    MENO HAVEN
                                </h3>
                                <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">
                                    Audience Building • Programming • Lifecycle Systems
                                </p>
                                <p className="text-black/80 font-medium leading-relaxed mb-6 border-l-2 border-gray-200 pl-4">
                                    Building the community before building the product. Designed and executed multi-city physical walks, expert wellness webinars, and member lifecycle funnels to establish a high-trust network of 700+ women prior to platform launch.
                                </p>
                            </div>
                            <div className="pt-4 border-t-2 border-black flex items-center justify-between text-xs font-black uppercase tracking-wider text-gray-600">
                                <span>Multi-City March</span>
                                <span className="text-black">High-Trust Ecosystem</span>
                            </div>
                        </div>

                        {/* 4. TOSSE */}
                        <div className="bg-white border-4 border-black p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                        Education / Trade Exhibition
                                    </span>
                                    <span className="text-xs font-black text-primary uppercase tracking-wider">
                                        1,497 Registrations
                                    </span>
                                </div>
                                <h3 className="text-3xl font-black uppercase text-black mb-2 tracking-tight">
                                    TOSSE
                                </h3>
                                <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">
                                    Exhibition Marketing • Stakeholder Acquisition • Campaign Execution
                                </p>
                                <p className="text-black/80 font-medium leading-relaxed mb-6 border-l-2 border-primary pl-4">
                                    Nigeria's premier education trade show and school support exhibition. Executed omnichannel attendee acquisition campaigns generating 1,497 verified registrations at ₦47.27 per lead, backed by 1,100+ viral social reactions.
                                </p>
                            </div>
                            <div className="pt-4 border-t-2 border-black flex items-center justify-between text-xs font-black uppercase tracking-wider text-gray-600">
                                <span>₦47.27 Cost / Lead</span>
                                <span className="text-black font-black">1,292 Inquiries</span>
                            </div>
                        </div>

                    </div>

                    {/* BENTO GRID: 3 RECONSTRUCTED SOCIAL PROOF CARDS */}
                    <div className="mt-20 pt-16 border-t-4 border-black">
                        <div className="mb-12 max-w-3xl">
                            <span className="text-primary font-black tracking-widest uppercase mb-2 block text-xs">
                                Verified Meta Ads Performance
                            </span>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">
                                PROVEN CAMPAIGN METRICS.
                            </h3>
                            <p className="text-gray-600 font-bold text-sm uppercase tracking-wider mt-2">
                                Clean, verified data tables and performance records across high-ticket e-commerce, exhibition registrations, and low-cost lead acquisition.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                            {/* CARD 1: High-Ticket E-commerce Growth - 7 cols on desktop */}
                            <div className="lg:col-span-7 bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-wider">
                                            <BadgeCheck size={14} className="text-primary" /> Verified Meta Ads Data
                                        </div>
                                        <span className="text-xs font-black text-primary uppercase tracking-widest border border-black px-2.5 py-1 bg-surface">
                                            Overseas Sales Campaign
                                        </span>
                                    </div>

                                    <h4 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight mb-1">
                                        High-Ticket E-commerce Scaling
                                    </h4>
                                    <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">
                                        (Overseas Sales Campaign)
                                    </p>

                                    {/* Hero Metric */}
                                    <div className="mb-8 p-6 bg-surface border-2 border-black">
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-5xl sm:text-6xl font-black text-primary tracking-tighter">
                                                15.58x
                                            </span>
                                            <span className="text-sm sm:text-base font-black uppercase tracking-wider text-black">
                                                ROAS (Return on Ad Spend)
                                            </span>
                                        </div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
                                            Direct Purchase Value / Meta Ads Deployment
                                        </p>
                                    </div>

                                    {/* Key Stats Bar */}
                                    <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                                        <div className="p-3 border-2 border-black bg-white">
                                            <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">Total Revenue</span>
                                            <span className="text-sm sm:text-base md:text-lg font-black text-black">$7,793.00</span>
                                        </div>
                                        <div className="p-3 border-2 border-black bg-white">
                                            <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">Total Ad Spend</span>
                                            <span className="text-sm sm:text-base md:text-lg font-black text-black">$824.73</span>
                                        </div>
                                        <div className="p-3 border-2 border-black bg-primary/10">
                                            <span className="text-[10px] font-black uppercase tracking-wider text-primary block">Inventory Status</span>
                                            <span className="text-sm sm:text-base md:text-lg font-black text-primary uppercase">Sold Out</span>
                                        </div>
                                    </div>

                                    {/* Clean Reconstructed Evidence Snippet (Data Table) */}
                                    <div className="border-2 border-black overflow-hidden bg-surface mb-6">
                                        <div className="bg-black text-white px-4 py-2 flex items-center justify-between text-[11px] font-black uppercase tracking-wider">
                                            <span>Campaign Breakdown (Verified Cleaned Data)</span>
                                            <span className="text-primary flex items-center gap-1 font-black">
                                                <TrendingUp size={12} /> Validated Record
                                            </span>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-xs">
                                                <thead className="border-b-2 border-black bg-gray-100 font-black uppercase text-[10px] tracking-wider text-gray-600">
                                                    <tr>
                                                        <th className="p-2.5">Ad Set / Segment</th>
                                                        <th className="p-2.5">Spend</th>
                                                        <th className="p-2.5">Orders</th>
                                                        <th className="p-2.5">Revenue</th>
                                                        <th className="p-2.5 text-right">ROAS</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-300 font-bold">
                                                    <tr className="bg-white hover:bg-orange-50/50 transition-colors">
                                                        <td className="p-2.5 font-black text-black">Console Drop Batch A</td>
                                                        <td className="p-2.5 text-gray-700">$311.00</td>
                                                        <td className="p-2.5 text-gray-700">80 purchases</td>
                                                        <td className="p-2.5 font-black text-black">$4,300.00</td>
                                                        <td className="p-2.5 text-right font-black text-primary">15.58x</td>
                                                    </tr>
                                                    <tr className="bg-surface hover:bg-orange-50/50 transition-colors">
                                                        <td className="p-2.5 font-black text-black">Targeted Retargeting</td>
                                                        <td className="p-2.5 text-gray-700">$513.73</td>
                                                        <td className="p-2.5 text-gray-700">58 purchases</td>
                                                        <td className="p-2.5 font-black text-black">$3,493.00</td>
                                                        <td className="p-2.5 text-right font-black text-black">6.80x</td>
                                                    </tr>
                                                    <tr className="bg-black text-white font-black">
                                                        <td className="p-2.5 uppercase">Combined Total</td>
                                                        <td className="p-2.5 text-gray-300">$824.73</td>
                                                        <td className="p-2.5 text-gray-300">138 purchases</td>
                                                        <td className="p-2.5 text-primary">$7,793.00</td>
                                                        <td className="p-2.5 text-right text-primary">9.45x Net</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t-2 border-black flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <button
                                            onClick={() => setActiveProofModal({
                                                title: "High-Ticket E-commerce 15.58x ROAS Dashboard Proof",
                                                image: "/proof/ecommerce-15x-roas.png",
                                                metric: "15.58x ROAS | $4,300.38 Revenue",
                                                details: "80 website purchases generated from $311 ad spend. Peak ad set achieved 15.58x ROAS on $276.08 spend."
                                            })}
                                            className="text-xs font-black uppercase tracking-wider text-black hover:text-primary flex items-center gap-1.5 transition-colors"
                                        >
                                            <Eye size={14} /> View $4,300 ROAS Report
                                        </button>
                                        <button
                                            onClick={() => setActiveProofModal({
                                                title: "PS5 & XBOX High-Ticket Campaign Performance",
                                                image: "/proof/ps5-xbox-results.png",
                                                metric: "$3,493.00 Revenue | Sold Out",
                                                details: "296 DM inquiries generated from $513.22 ad spend. High demand drove products to complete sold-out status."
                                            })}
                                            className="text-xs font-black uppercase tracking-wider text-primary hover:text-black flex items-center gap-1.5 transition-colors"
                                        >
                                            <Eye size={14} /> View $3,493 PS5 Report
                                        </button>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                                        $7,793 Combined Net
                                    </span>
                                </div>
                            </div>

                            {/* RIGHT STACK: CARD 2 & CARD 3 (5 cols on desktop) */}
                            <div className="lg:col-span-5 flex flex-col gap-8">
                                
                                {/* CARD 2: Event Registration Power (TOSSE 2024) */}
                                <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between flex-1">
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-xs font-black uppercase tracking-wider">
                                                <BadgeCheck size={14} /> TOSSE 2024
                                            </span>
                                            <span className="text-xs font-black text-black uppercase tracking-widest border border-black px-2 py-0.5 bg-surface">
                                                Local Event Registrations
                                            </span>
                                        </div>

                                        <h4 className="text-2xl font-black uppercase text-black tracking-tight mb-1">
                                            Event Growth & Lead Dominance
                                        </h4>
                                        <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">
                                            (Local Event Registrations)
                                        </p>

                                        {/* Hero Metric */}
                                        <div className="mb-6 p-5 bg-surface border-2 border-black">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-4xl sm:text-5xl font-black text-primary tracking-tighter">
                                                    1,497
                                                </span>
                                                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black">
                                                    Qualified Registrations
                                                </span>
                                            </div>
                                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-1">
                                                126 Exhibitor Registrations + 1,371 Visitor Registrations
                                            </p>
                                        </div>

                                        {/* Key Stats Bar */}
                                        <div className="grid grid-cols-2 gap-3 mb-5">
                                            <div className="p-3 border-2 border-black bg-white">
                                                <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">Direct Inquiries</span>
                                                <span className="text-sm sm:text-base font-black text-black">1,292 Conversations</span>
                                            </div>
                                            <div className="p-3 border-2 border-black bg-white">
                                                <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">Acquisition Cost</span>
                                                <span className="text-sm sm:text-base font-black text-primary">₦47.27 / lead</span>
                                            </div>
                                        </div>

                                        {/* Evidence Snippet: Social Proof Breakdown Bar */}
                                        <div className="border-2 border-black p-4 bg-surface mb-5">
                                            <span className="text-[10px] font-black uppercase tracking-wider text-gray-600 block mb-2">
                                                Viral Post Engagement Evidence
                                            </span>
                                            <div className="grid grid-cols-3 gap-2 text-center">
                                                <div className="bg-white border border-black py-2 px-1">
                                                    <span className="text-sm font-black text-black block">747+</span>
                                                    <span className="text-[9px] font-bold uppercase text-gray-500">Reactions</span>
                                                </div>
                                                <div className="bg-white border border-black py-2 px-1">
                                                    <span className="text-sm font-black text-black block">350</span>
                                                    <span className="text-[9px] font-bold uppercase text-gray-500">Comments</span>
                                                </div>
                                                <div className="bg-white border border-black py-2 px-1">
                                                    <span className="text-sm font-black text-black block">34</span>
                                                    <span className="text-[9px] font-bold uppercase text-gray-500">Shares</span>
                                                </div>
                                            </div>
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-2 text-center">
                                                Total Meta Ads Spend: ₦61,078.25 across campaign
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t-2 border-black flex flex-wrap items-center justify-between gap-2">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <button
                                                onClick={() => setActiveProofModal({
                                                    title: "TOSSE 2024 Backend Form Registrations Report",
                                                    image: "/proof/tosse-backend-registrations.png",
                                                    metric: "1,497 Total Registrations",
                                                    details: "Official backend report: 126 Exhibitor registration form entries + 1,371 Visitor registration form entries = 1,497 Total verified registrations."
                                                })}
                                                className="text-xs font-black uppercase tracking-wider text-primary hover:text-black flex items-center gap-1.5 transition-colors font-bold"
                                            >
                                                <Eye size={14} /> View 1,497 Form Backend Report
                                            </button>
                                            <button
                                                onClick={() => setActiveProofModal({
                                                    title: "TOSSE 2024 Campaign Performance & Social Proof",
                                                    image: "/proof/tosse-performance-dashboard.png",
                                                    metric: "1,292 Inquiries | ₦47.27 CPL",
                                                    details: "1,292 direct messaging conversations started from ₦61,078.25 ad spend, with 1,100+ viral reactions and comments."
                                                })}
                                                className="text-xs font-black uppercase tracking-wider text-black hover:text-primary flex items-center gap-1.5 transition-colors"
                                            >
                                                <Eye size={14} /> View Ads Dashboard
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => setActiveProofModal({
                                                title: "TOSSE Ad Creative Social Engagement",
                                                image: "/proof/tosse-engagement-ad.png",
                                                metric: "747 Likes • 350 Comments",
                                                details: "Organic engagement and community discussion generated during the campaign execution."
                                            })}
                                            className="text-xs font-black uppercase tracking-wider text-gray-500 hover:text-black flex items-center gap-1 transition-colors"
                                        >
                                            View Ad Creative <ArrowUpRight size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* CARD 3: Precision Lead Acquisition (YEC Leads) */}
                                <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between flex-1">
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-wider">
                                                <BadgeCheck size={14} className="text-primary" /> YEC Precision Campaign
                                            </span>
                                            <span className="text-xs font-black text-primary uppercase tracking-widest">
                                                Target Exceeded
                                            </span>
                                        </div>

                                        <h4 className="text-2xl font-black uppercase text-black tracking-tight mb-3">
                                            High-Efficiency Lead Generation
                                        </h4>

                                        {/* Hero Metric */}
                                        <div className="mb-6 p-5 bg-surface border-2 border-black">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-4xl sm:text-5xl font-black text-primary tracking-tighter">
                                                    145%
                                                </span>
                                                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black">
                                                    Goal Achievement
                                                </span>
                                            </div>
                                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-1">
                                                Target: 100 Signups → Delivered: 145 Signups (+45% Over Target)
                                            </p>
                                        </div>

                                        {/* Key Stats Bar */}
                                        <div className="grid grid-cols-2 gap-3 mb-5">
                                            <div className="p-3 border-2 border-black bg-white">
                                                <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">Cost Per Lead</span>
                                                <span className="text-sm sm:text-base font-black text-primary">$0.097 / ₦73.14</span>
                                            </div>
                                            <div className="p-3 border-2 border-black bg-white">
                                                <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">Audience Reach</span>
                                                <span className="text-sm sm:text-base font-black text-black">32,063+ Reach</span>
                                            </div>
                                        </div>

                                        {/* Evidence Snippet: Visual Progress Bar Exceeding 100% */}
                                        <div className="border-2 border-black p-4 bg-surface mb-5">
                                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider mb-2">
                                                <span className="text-gray-600">Goal Target (100) vs Delivered (145)</span>
                                                <span className="text-primary font-black">+45% Over Goal</span>
                                            </div>
                                            <div className="relative w-full h-7 bg-white border-2 border-black overflow-hidden">
                                                {/* Target 100% marker */}
                                                <div 
                                                    className="absolute top-0 bottom-0 left-[69%] w-[2px] bg-black z-20 border-r border-dashed border-white"
                                                    title="Target (100%)"
                                                />
                                                {/* Fill bar representing 145% */}
                                                <div 
                                                    className="h-full bg-primary flex items-center justify-end pr-2 text-[10px] font-black text-white" 
                                                    style={{ width: '100%' }}
                                                >
                                                    145 DELIVERED
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-[9px] font-bold uppercase text-gray-500 mt-1">
                                                <span>0 Leads</span>
                                                <span>Target: 100 Leads</span>
                                                <span className="text-primary font-black">Delivered: 145</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t-2 border-black flex flex-wrap items-center justify-between gap-2 text-xs font-black uppercase tracking-wider text-gray-600">
                                        <button
                                            onClick={() => setActiveProofModal({
                                                title: "YEC Leads Campaign Results Report",
                                                image: "/proof/yec-leads-results.png",
                                                metric: "145 Signups | ₦73.14 ($0.097) CPL",
                                                details: "Goal: 100 Signups → Achieved: 145 Signups (+45% over target) with 32,063 audience reach on ₦2,000 daily budget."
                                            })}
                                            className="text-xs font-black uppercase tracking-wider text-black hover:text-primary flex items-center gap-1.5 transition-colors"
                                        >
                                            <Eye size={14} /> View Verified YEC Report
                                        </button>
                                        <span className="text-primary font-bold">₦73.14 CPL Verified</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* INTERMEDIATE CTA BANNER */}
                        <div className="mt-12 bg-black text-white border-4 border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <span className="text-xs font-black uppercase tracking-widest text-primary block mb-1">
                                    Data-Backed Growth
                                </span>
                                <h4 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                                    Want Results Like This For Your Business?
                                </h4>
                            </div>
                            <button
                                onClick={scrollToForm}
                                className="px-8 py-4 bg-primary text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none shrink-0"
                            >
                                Book Your Sprint →
                            </button>
                        </div>
                    </div>

                    {/* CREATIVE & CHANNELS SHOWCASE: THREE CLIENT PAGES & IN-PAGE VIDEO MODALS */}
                    <div className="mt-20 pt-16 border-t-4 border-black">
                        <div className="mb-12 max-w-3xl">
                            <span className="text-primary font-black tracking-widest uppercase mb-2 block text-xs">
                                Creative & Channel Execution
                            </span>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">
                                WATCH THE CAMPAIGNS IN ACTION.
                            </h3>
                            <p className="text-gray-600 font-bold text-sm uppercase tracking-wider mt-2">
                                High-converting marketing requires disciplined media buying and compelling creative. Here is how we build active community traction, viral video storytelling, and cohesive feed architecture.
                            </p>
                        </div>

                        {/* 3 CLIENT SOCIAL PROOF CARDS ONLY (PAKAM, MENO HAVEN, CRAFTSQUARRE) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            
                            {/* 1. PAKAM */}
                            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-black">
                                        <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2.5 py-1">
                                            TikTok Movement
                                        </span>
                                        <a 
                                            href="https://www.tiktok.com/@pakamnigeria_" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-xs font-black text-primary hover:text-black transition-colors uppercase flex items-center gap-1"
                                            title="View full TikTok page"
                                        >
                                            @pakamnigeria_ <ArrowUpRight size={13} />
                                        </a>
                                    </div>

                                    {/* Image Preview with Modal Zoom */}
                                    <div 
                                        className="relative aspect-[9/16] bg-black border-2 border-black overflow-hidden mb-5 group cursor-pointer"
                                        onClick={() => setActiveProofModal({
                                            title: "Pakam Nigeria TikTok Profile & Viral Engagement",
                                            image: "/proof/pakam-tiktok-profile.png",
                                            metric: "11.4K Followers • 47.4K Likes • 473.7K Top Views",
                                            details: "User-generated storytelling and educational campaign taking recycling into the viral mainstream.",
                                            platform: "TikTok",
                                            platformUrl: "https://www.tiktok.com/@pakamnigeria_"
                                        })}
                                    >
                                        <img 
                                            src="/proof/pakam-tiktok-profile.png" 
                                            alt="Pakam Nigeria TikTok Profile" 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                            <span className="px-3 py-1.5 bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
                                                <Eye size={14} /> Inspect Page Screenshot
                                            </span>
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-black uppercase text-black mb-2">
                                        Pakam TikTok Movement
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-0.5 bg-surface border border-black text-[10px] font-black uppercase">
                                            11.4K Followers
                                        </span>
                                        <span className="px-2 py-0.5 bg-surface border border-black text-[10px] font-black uppercase">
                                            47.4K Likes
                                        </span>
                                        <span className="px-2 py-0.5 bg-primary/10 border border-primary text-[10px] font-black text-primary uppercase">
                                            473.7K Top Views
                                        </span>
                                    </div>
                                    <p className="text-xs font-bold text-black/80 leading-relaxed mb-6">
                                        Short, engaging videos that brought 470,000+ views and turned everyday people into active app users.
                                    </p>
                                </div>

                                <div className="pt-4 border-t-2 border-black space-y-2">
                                    <button
                                        onClick={() => setActiveVideoModal({
                                            title: "Pakam Viral Campaign Story 1",
                                            videoSrc: "/videos/pakam-viral-1.mp4",
                                            poster: "/proof/pakam-tiktok-profile.png",
                                            platform: "TikTok",
                                            url: "https://www.tiktok.com/@pakamnigeria_",
                                            caption: "Short, engaging videos that brought 470,000+ views and turned everyday people into active app users."
                                        })}
                                        className="w-full py-2.5 px-3 bg-primary text-white text-xs font-black uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                                    >
                                        <Play size={14} className="fill-white" /> Watch Viral Video 1
                                    </button>
                                    <button
                                        onClick={() => setActiveVideoModal({
                                            title: "Pakam Campaign Story 2",
                                            videoSrc: "/videos/pakam-viral-2.mp4",
                                            poster: "/proof/pakam-tiktok-profile.png",
                                            platform: "TikTok",
                                            url: "https://www.tiktok.com/@pakamnigeria_",
                                            caption: "Community recycling journey and viral app customer adoption."
                                        })}
                                        className="w-full py-2 px-3 bg-white border-2 border-black text-black text-xs font-black uppercase tracking-wider hover:bg-surface transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Play size={14} /> Watch Story 2
                                    </button>
                                </div>
                            </div>

                            {/* 2. MENO HAVEN */}
                            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-black">
                                        <span className="text-[10px] font-black uppercase tracking-widest bg-primary text-white px-2.5 py-1">
                                            Health Community
                                        </span>
                                        <a 
                                            href="https://www.instagram.com/menohavenng/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-xs font-black text-black hover:text-primary transition-colors uppercase flex items-center gap-1"
                                            title="View full Instagram page"
                                        >
                                            @menohavenng <ArrowUpRight size={13} />
                                        </a>
                                    </div>

                                    {/* Image Preview with Modal Zoom */}
                                    <div 
                                        className="relative aspect-[9/16] bg-black border-2 border-black overflow-hidden mb-5 group cursor-pointer"
                                        onClick={() => setActiveProofModal({
                                            title: "Meno Haven Instagram Feed Architecture",
                                            image: "/proof/menohaven-instagram-feed.jpg",
                                            metric: "700+ Community • Health Specialist Programming",
                                            details: "High-trust educational carousel architecture, webinars, and multi-city street walks for women's health.",
                                            platform: "Instagram",
                                            platformUrl: "https://www.instagram.com/menohavenng/"
                                        })}
                                    >
                                        <img 
                                            src="/proof/menohaven-instagram-feed.jpg" 
                                            alt="Meno Haven Instagram Feed" 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                            <span className="px-3 py-1.5 bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
                                                <Eye size={14} /> Inspect Page Screenshot
                                            </span>
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-black uppercase text-black mb-2">
                                        Meno Haven Feed Architecture
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-0.5 bg-surface border border-black text-[10px] font-black uppercase">
                                            700+ Members
                                        </span>
                                        <span className="px-2 py-0.5 bg-surface border border-black text-[10px] font-black uppercase">
                                            Medical Experts
                                        </span>
                                        <span className="px-2 py-0.5 bg-primary/10 border border-primary text-[10px] font-black text-primary uppercase">
                                            Street Walkathons
                                        </span>
                                    </div>
                                    <p className="text-xs font-bold text-black/80 leading-relaxed mb-6">
                                        Clean, professional page design and community posts that gathered over 700 active members before launch.
                                    </p>
                                </div>

                                <div className="pt-4 border-t-2 border-black space-y-2">
                                    <button
                                        onClick={() => setActiveVideoModal({
                                            title: "Meno Haven Community Walkathon Video",
                                            videoSrc: "/videos/menohaven-walkathon.mp4",
                                            poster: "/proof/menohaven-instagram-feed.jpg",
                                            platform: "Instagram",
                                            url: "https://www.instagram.com/menohavenng/",
                                            caption: "Real walkathon video clips & participant reels driving 18,000+ views and 450+ attendees."
                                        })}
                                        className="w-full py-2.5 px-3 bg-black text-white text-xs font-black uppercase tracking-wider hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                                    >
                                        <Play size={14} className="fill-white" /> Watch Walkathon Video 1
                                    </button>
                                    <button
                                        onClick={() => setActiveVideoModal({
                                            title: "Meno Haven x Shea Radiance Partnership Reel",
                                            videoSrc: "/videos/menohaven-shea-radiance.mp4",
                                            poster: "/proof/menohaven-instagram-feed.jpg",
                                            platform: "Instagram",
                                            url: "https://www.instagram.com/menohavenng/",
                                            caption: "Glow Up Lagos brand partnership campaign showcasing natural skincare and community engagement."
                                        })}
                                        className="w-full py-2 px-3 bg-white border-2 border-black text-black text-xs font-black uppercase tracking-wider hover:bg-surface transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Play size={14} /> Watch Shea Radiance Reel 2
                                    </button>
                                </div>
                            </div>

                            {/* 3. CRAFTSQUARRE */}
                            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-black">
                                        <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2.5 py-1">
                                            Merchant Commerce
                                        </span>
                                        <a 
                                            href="https://www.instagram.com/craftsquarre/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-xs font-black text-primary hover:text-black transition-colors uppercase flex items-center gap-1"
                                            title="View full Instagram page"
                                        >
                                            @craftsquarre <ArrowUpRight size={13} />
                                        </a>
                                    </div>

                                    {/* Image Preview with Modal Zoom */}
                                    <div 
                                        className="relative aspect-[9/16] bg-black border-2 border-black overflow-hidden mb-5 group cursor-pointer"
                                        onClick={() => setActiveProofModal({
                                            title: "Craftsquarre Merchant Growth Reels Feed",
                                            image: "/proof/craftsquarre-instagram-feed.png",
                                            metric: "16.4K+ Reel Views • 100+ Merchants Onboarded",
                                            details: "Product styling reels, merchant ₦100K sales celebrations, and creator marketplace launch storytelling.",
                                            platform: "Instagram",
                                            platformUrl: "https://www.instagram.com/craftsquarre/"
                                        })}
                                    >
                                        <img 
                                            src="/proof/craftsquarre-instagram-feed.png" 
                                            alt="Craftsquarre Instagram Reels Feed" 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                            <span className="px-3 py-1.5 bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
                                                <Eye size={14} /> Inspect Page Screenshot
                                            </span>
                                        </div>
                                    </div>

                                    <h4 className="text-lg font-black uppercase text-black mb-2">
                                        Craftsquarre Creator Reels
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-0.5 bg-surface border border-black text-[10px] font-black uppercase">
                                            16.4K Top Views
                                        </span>
                                        <span className="px-2 py-0.5 bg-surface border border-black text-[10px] font-black uppercase">
                                            100+ Merchants
                                        </span>
                                        <span className="px-2 py-0.5 bg-primary/10 border border-primary text-[10px] font-black text-primary uppercase">
                                            ₦100K Milestones
                                        </span>
                                    </div>
                                    <p className="text-xs font-bold text-black/80 leading-relaxed mb-6">
                                        High-energy videos showcasing real sellers, helping over 100 business owners make consistent sales.
                                    </p>
                                </div>

                                <div className="pt-4 border-t-2 border-black space-y-2">
                                    <button
                                        onClick={() => setActiveVideoModal({
                                            title: "Craftsquarre Merchant Spotlight Reel",
                                            videoSrc: "/videos/craftsquarre-reel.mp4",
                                            poster: "/proof/craftsquarre-instagram-feed.png",
                                            platform: "Instagram",
                                            url: "https://www.instagram.com/craftsquarre/",
                                            caption: "High-energy videos showcasing real sellers, helping over 100 business owners make consistent sales."
                                        })}
                                        className="w-full py-2.5 px-3 bg-primary text-white text-xs font-black uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                                    >
                                        <Play size={14} className="fill-white" /> Watch Merchant Reel 1
                                    </button>
                                    <button
                                        onClick={() => setActiveVideoModal({
                                            title: "Craftsquarre Town Kilishi Showcase",
                                            videoSrc: "/videos/craftsquarre-reel2.mp4",
                                            poster: "/proof/craftsquarre-instagram-feed.png",
                                            platform: "Instagram",
                                            url: "https://www.instagram.com/craftsquarre/",
                                            caption: "Town Kilishi creator spotlight: authentic product demonstration driving direct customer sales."
                                        })}
                                        className="w-full py-2 px-3 bg-white border-2 border-black text-black text-xs font-black uppercase tracking-wider hover:bg-surface transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Play size={14} /> Watch Marketplace Reel 2
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 7. WHO THIS IS FOR */}
            <section className="py-24 md:py-32 border-b-2 border-black bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="inline-block py-2 px-4 border-2 border-black font-bold uppercase tracking-widest text-xs mb-6 bg-surface">
                        Ideal Fit
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-12 leading-[0.95]">
                        THIS IS FOR BUSINESS OWNERS WHO ARE READY TO GET THEIR MARKETING MOVING.
                    </h2>

                    <div className="bg-surface border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6">
                        {[
                            "You already have a product or service to sell.",
                            "You need more structure around your marketing.",
                            "You have been doing the marketing yourself.",
                            "You have been posting without a clear strategy.",
                            "You need a team to take the marketing work off your plate.",
                            "You want strategy and execution working together."
                        ].map((point, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="p-2 bg-primary text-white border border-black shrink-0">
                                    <CheckCircle2 size={18} strokeWidth={3} />
                                </div>
                                <p className="text-lg md:text-xl font-bold text-black uppercase">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. HOW IT WORKS */}
            <section className="py-24 md:py-32 border-b-2 border-black bg-surface">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-20 border-b-4 border-black pb-8 max-w-3xl">
                        <span className="text-primary font-black tracking-widest uppercase mb-2 block text-xs">Framework</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tighter">
                            30 DAYS. THREE STEPS.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <div className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-4xl font-black text-primary block mb-4">01</span>
                            <h3 className="text-xl font-black uppercase text-black mb-3">Week 1: We Set Up The Plan</h3>
                            <p className="text-black/80 font-bold leading-relaxed">
                                We learn about your products, check what has worked for you in the past, and prepare the exact posts and ads we will run for the month.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-4xl font-black text-black block mb-4">02</span>
                            <h3 className="text-xl font-black uppercase text-black mb-3">Weeks 2–4: We Create and Launch</h3>
                            <p className="text-black/80 font-bold leading-relaxed">
                                We produce the videos and graphics, write the copy, set up your ads, and launch everything. You just focus on serving your customers.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-4xl font-black text-primary block mb-4">03</span>
                            <h3 className="text-xl font-black uppercase text-black mb-3">Day 30: We Review Your Results</h3>
                            <p className="text-black/80 font-bold leading-relaxed">
                                We sit down with you, show you how many sales, leads, and messages came in, and help you decide the best next move.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 9. FOUNDER TIME COMMITMENT */}
            <section className="py-24 md:py-32 border-b-2 border-black bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="inline-block py-2 px-4 border-2 border-black font-bold uppercase tracking-widest text-xs mb-6 bg-surface">
                        Collaboration
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-6 leading-[0.95]">
                        YOUR TIME NEEDED: LESS THAN 2 HOURS A WEEK.
                    </h2>
                    <p className="text-lg md:text-xl font-bold text-gray-700 max-w-2xl mb-12 border-l-4 border-primary pl-4">
                        We eliminate 95% of your marketing overhead. All we need from you is:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Basic details about your products or services",
                            "Your logos, photos, or existing videos",
                            "Access to your social media and ad account",
                            "Quick feedback when we send you drafts for approval"
                        ].map((item, idx) => (
                            <div key={idx} className="bg-surface border-2 border-black p-5 flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <span className="w-2.5 h-2.5 bg-primary rounded-full shrink-0" />
                                <span className="text-base font-black uppercase text-black">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. FAQ */}
            <section id="faq" className="py-24 md:py-32 border-b-2 border-black bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="inline-block py-2 px-4 border-2 border-black font-bold uppercase tracking-widest text-xs mb-6 bg-surface">
                            Answers
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tighter">
                            FREQUENTLY ASKED QUESTIONS
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div 
                                    key={index}
                                    className="bg-surface border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all"
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-lg font-black uppercase text-black tracking-tight">
                                            {faq.q}
                                        </span>
                                        <span className="text-primary shrink-0">
                                            {isOpen ? <ChevronUp size={24} strokeWidth={3} /> : <ChevronDown size={24} strokeWidth={3} />}
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <div className="px-6 pb-6 pt-2 text-black/80 font-bold text-base leading-relaxed border-t-2 border-gray-200">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 12. FINAL FORM / CTA */}
            <section id="get-started" className="py-24 md:py-32 bg-primary text-white relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    
                    <div className="text-center mb-10">
                        <div className="inline-block py-2 px-4 bg-black text-white text-xs font-black uppercase tracking-widest mb-4">
                            30-Day Growth Sprint • ₦199,000
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">
                            READY TO GET STARTED?
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-black max-w-lg mx-auto">
                            Fill out your details below. We vet your business and get in touch within 24 hours.
                        </p>
                    </div>

                    {/* 3-STEP MICRO-TIMELINE */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                        <div className="bg-black text-white border-2 border-black p-3.5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[10px] font-black uppercase text-primary block">Step 01</span>
                            <span className="text-xs font-black uppercase text-white block">01. REVIEW</span>
                            <span className="text-[10px] text-gray-300 font-bold block">(24h Brand Audit)</span>
                        </div>
                        <div className="bg-black text-white border-2 border-black p-3.5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[10px] font-black uppercase text-primary block">Step 02</span>
                            <span className="text-xs font-black uppercase text-white block">02. CONNECT</span>
                            <span className="text-[10px] text-gray-300 font-bold block">(15-Min Alignment via WhatsApp)</span>
                        </div>
                        <div className="bg-black text-white border-2 border-black p-3.5 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[10px] font-black uppercase text-primary block">Step 03</span>
                            <span className="text-xs font-black uppercase text-white block">03. KICKOFF</span>
                            <span className="text-[10px] text-gray-300 font-bold block">(Week 1 Production)</span>
                        </div>
                    </div>

                    <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-black">
                        {submitted ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center mx-auto mb-4 border-2 border-black">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-3xl font-black uppercase text-black">Application Received!</h3>
                                <p className="text-lg font-bold text-black/80 max-w-md mx-auto">
                                    Thank you! Your details have been submitted to Loftybrands@gmail.com. We are reviewing your brand and will reach out via WhatsApp/Email within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 px-8 py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors"
                                >
                                    Submit Another Application
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                            Your Name
                                        </label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="YOUR NAME"
                                            className="w-full bg-gray-100 border-2 border-black p-4 text-black font-bold focus:outline-none focus:bg-white transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                            Business Name
                                        </label>
                                        <input 
                                            type="text" 
                                            name="businessName"
                                            required
                                            value={formData.businessName}
                                            onChange={handleInputChange}
                                            placeholder="YOUR BRAND / COMPANY"
                                            className="w-full bg-gray-100 border-2 border-black p-4 text-black font-bold focus:outline-none focus:bg-white transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                            Work Email
                                        </label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="YOU@COMPANY.COM"
                                            className="w-full bg-gray-100 border-2 border-black p-4 text-black font-bold focus:outline-none focus:bg-white transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                            WhatsApp / Phone
                                        </label>
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+234 800 000 0000"
                                            className="w-full bg-gray-100 border-2 border-black p-4 text-black font-bold focus:outline-none focus:bg-white transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                        Business Category
                                    </label>
                                    <select
                                        name="businessCategory"
                                        value={formData.businessCategory}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 border-2 border-black p-4 text-black font-bold focus:outline-none focus:bg-white transition-colors uppercase text-sm"
                                    >
                                        <option value="E-Commerce / Retail">E-Commerce / Retail</option>
                                        <option value="Services / B2B">Services / B2B</option>
                                        <option value="Health / Wellness & Beauty">Health / Wellness & Beauty</option>
                                        <option value="Tech / Mobile App">Tech / Mobile App</option>
                                        <option value="Education & Events">Education & Events</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                        Primary Goal For This Month
                                    </label>
                                    <input 
                                        type="text" 
                                        name="marketingGoal"
                                        required
                                        value={formData.marketingGoal}
                                        onChange={handleInputChange}
                                        placeholder="E.G. SCALE DIRECT ONLINE SALES, LAUNCH PRODUCT, GENERATE 100+ LEADS"
                                        className="w-full bg-gray-100 border-2 border-black p-4 text-black font-bold focus:outline-none focus:bg-white transition-colors"
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-black text-white font-black text-base md:text-lg uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,94,0,1)] hover:shadow-none"
                                >
                                    {isSubmitting ? "PROCESSING APPLICATION..." : "Submit Application For Review →"}
                                </button>

                                <div className="text-center pt-2">
                                    <p className="text-xs font-black uppercase tracking-wider text-gray-600">
                                        🔒 Zero spam. We vet your brand and reach out via WhatsApp/Email within 24 hours.
                                    </p>
                                </div>

                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* STICKY BOTTOM BAR (MOBILE ONLY) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-black p-3 px-6 flex items-center justify-between shadow-lg">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block">Sprint</span>
                    <span className="text-base font-black text-black">₦199,000</span>
                </div>
                <button
                    onClick={scrollToForm}
                    className="px-6 py-2.5 bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-colors"
                >
                    GET STARTED
                </button>
            </div>

            {/* MINIMAL FOOTER */}
            <footer className="py-16 bg-black text-white border-t border-gray-900">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 pb-10 border-b border-gray-800">
                        <div>
                            <Link to="/" className="inline-block mb-3">
                                <img 
                                    src="/lofty-logo-footer.png" 
                                    alt="Lofty Brands" 
                                    className="h-12 w-auto object-contain" 
                                    />
                            </Link>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                                Product Marketing • Growth Strategy • Campaigns
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-wider">
                            <Link to="/" className="hover:text-primary transition-colors">Website</Link>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                            <a href="mailto:Loftybrands@gmail.com" className="text-primary hover:text-white transition-colors">Loftybrands@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500 gap-4">
                        <span>&copy; {new Date().getFullYear()} Lofty Brands. All rights reserved.</span>
                        <span>30-Day Growth Sprint Dedicated Offer</span>
                    </div>
                </div>
            </footer>

            {/* EVIDENCE MODAL LIGHTBOX */}
            {activeProofModal && (
                <div 
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setActiveProofModal(null)}
                >
                    <div 
                        className="bg-white border-4 border-black max-w-4xl w-full p-6 shadow-[12px_12px_0px_0px_rgba(255,94,0,1)] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-black">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary block">
                                    Verified Campaign Dashboard
                                </span>
                                <h3 className="text-lg sm:text-2xl font-black uppercase text-black tracking-tight">
                                    {activeProofModal.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setActiveProofModal(null)}
                                className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                                aria-label="Close dialog"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="bg-black border-2 border-black overflow-hidden mb-4 max-h-[65vh] flex items-center justify-center">
                            <img 
                                src={activeProofModal.image} 
                                alt={activeProofModal.title}
                                className="max-h-[64vh] w-auto object-contain"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t-2 border-black text-xs font-bold">
                            <div>
                                <span className="text-primary font-black uppercase block text-sm">
                                    {activeProofModal.metric}
                                </span>
                                <span className="text-gray-600">
                                    {activeProofModal.details}
                                </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                {activeProofModal.platformUrl && (
                                    <a 
                                        href={activeProofModal.platformUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2.5 bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-colors flex items-center gap-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                                    >
                                        {activeProofModal.platform ? `Visit ${activeProofModal.platform} Page` : 'Visit Platform Page'} <ArrowUpRight size={14} />
                                    </a>
                                )}
                                <button
                                    onClick={() => setActiveProofModal(null)}
                                    className="px-5 py-2.5 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors shrink-0"
                                >
                                    Close Evidence
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* IN-PAGE VIDEO MODAL LIGHTBOX */}
            {activeVideoModal && (
                <div 
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setActiveVideoModal(null)}
                >
                    {(() => {
                        const youtubeEmbed = getYouTubeEmbedUrl(activeVideoModal.youtubeUrl || activeVideoModal.url || activeVideoModal.videoSrc);
                        const isLandscape = activeVideoModal.aspect === '16/9' || !!youtubeEmbed;

                        return (
                            <div 
                                className={`bg-white border-4 border-black w-full p-6 shadow-[12px_12px_0px_0px_rgba(255,94,0,1)] relative ${isLandscape ? 'max-w-3xl' : 'max-w-lg'}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-black">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary block">
                                            Campaign Video Preview
                                        </span>
                                        <h3 className="text-lg sm:text-xl font-black uppercase text-black tracking-tight">
                                            {activeVideoModal.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setActiveVideoModal(null)}
                                        className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                                        aria-label="Close dialog"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className={`relative mx-auto bg-black border-2 border-black overflow-hidden flex items-center justify-center ${isLandscape ? 'aspect-video max-h-[70vh]' : 'aspect-[9/16] max-h-[62vh]'}`}>
                                    {youtubeEmbed ? (
                                        <iframe
                                            src={youtubeEmbed}
                                            title={activeVideoModal.title}
                                            className="w-full h-full border-0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    ) : activeVideoModal.videoSrc ? (
                                        <video 
                                            ref={videoPlayerRef}
                                            key={activeVideoModal.videoSrc}
                                            src={activeVideoModal.videoSrc}
                                            poster={activeVideoModal.poster}
                                            controls
                                            autoPlay
                                            playsInline
                                            preload="auto"
                                            className="w-full h-full object-contain bg-black"
                                        >
                                            <source src={activeVideoModal.videoSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <div className="p-6 text-center text-white">
                                            <div className="w-16 h-16 bg-primary text-white border-2 border-white flex items-center justify-center mx-auto mb-4">
                                                <Play size={28} className="translate-x-0.5 fill-white" />
                                            </div>
                                            <p className="text-sm font-black uppercase mb-4">{activeVideoModal.title}</p>
                                            {activeVideoModal.url && (
                                                <a 
                                                    href={activeVideoModal.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white font-black text-xs uppercase tracking-wider border border-white hover:bg-white hover:text-black transition-colors"
                                                >
                                                    {activeVideoModal.platform ? `Visit ${activeVideoModal.platform} Page` : 'Visit Platform Page'} <ArrowUpRight size={14} />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-4 pt-3 border-t-2 border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-bold">
                                    <span className="text-gray-700">{activeVideoModal.caption}</span>
                                    {activeVideoModal.url && (
                                        <a 
                                            href={activeVideoModal.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-black flex items-center gap-1 font-black uppercase shrink-0"
                                        >
                                            {activeVideoModal.platform ? `Visit ${activeVideoModal.platform} Page` : 'Platform Link'} <ArrowUpRight size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })()}
                </div>
            )}

        </div>
    );
}

