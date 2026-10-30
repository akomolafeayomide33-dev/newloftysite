import React, { useState, useRef, useEffect } from 'react';
import { 
    ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Sparkles, 
    Layers, Target, Megaphone, ShieldCheck, TrendingUp, BadgeCheck,
    Play, Eye, ArrowUpRight, Instagram, Users, Award, BarChart3, 
    X, Check, XCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        q: "Is ₦199,000 a monthly retainer?",
        a: "No. This is a one-time fee for a focused 30-day sprint. There are no automatic renewals, surprise charges, or forced contracts. At the end of the 30 days, you decide whether to roll into an ongoing monthly growth plan or take all assets and manage things in-house."
    },
    {
        q: "How many posts and videos will I get?",
        a: "We build for sales and conversion, and every post and ad is designed to bring buyers. You get 8 strategic feed posts: 3 high-converting videos, 3 educational carousels, and 2 offer spotlights, complete profile optimization, and a Meta ad campaign with 3 to 4 tested ad creatives, set up and managed on Instagram and Facebook. Retargeting added for larger budgets."
    },
    {
        q: "How much should I spend on ads?",
        a: "Ad spend is completely separate and paid directly to Meta from your own card. For this 30-day sprint, we recommend an initial testing budget between ₦50,000 and ₦150,000. We set strict daily budget limits so every naira is tested efficiently against real buyer inquiries."
    },
    {
        q: "Do I need to be on camera or hire a videographer?",
        a: "Not at all. You provide raw footage and photos (simple smartphone clips of your products, behind-the-scenes processes, packaging, or customer reviews), and we edit and design everything. Includes 2 rounds of revisions per piece. If you do want to be on camera, we write the exact word-for-word scripts for you."
    },
    {
        q: "What if my existing photos or videos aren't good enough?",
        a: "Don't worry. Most clients start with everyday phone clips. In Week 1, we provide a simple shot list showing the exact 10-second angles to capture using natural light. Our team handles the professional voiceovers, text hooks, editing, and sound design to make your brand look world-class."
    },
    {
        q: "Can your team come to my location to shoot?",
        a: "The sprint is designed to run 100% remotely with minimal effort from you. If your brand requires on-site production, we offer a dedicated half-day studio or location shoot package as an optional add-on within Lagos."
    },
    {
        q: "How will we communicate during the 30 days?",
        a: "You will be placed in a private, dedicated WhatsApp workspace with your lead strategist and creative team for fast, real-time approvals and direct communication. You also receive a weekly Friday recap showing ad spend, leads delivered, and live campaign status."
    },
    {
        q: "What happens after the 30 days are over?",
        a: "On Day 30, we deliver your 30-day performance review deck detailing your top-performing ads, acquired leads, and cost metrics. If you want us to keep scaling your campaigns, we can transition into an ongoing monthly partnership. If not, you retain all final creative assets, copy templates, and ad account builds."
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
    const [showCampaignBreakdown, setShowCampaignBreakdown] = useState(false);
    const [showMoreWork, setShowMoreWork] = useState(false);
    const [showSticky, setShowSticky] = useState(false);

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

    // Scroll listener for sticky bar so it never covers hero on first load or interferes with form
    useEffect(() => {
        const handleScroll = () => {
            const sprintEl = document.getElementById('the-sprint');
            const formEl = document.getElementById('get-started');
            
            if (sprintEl) {
                const sprintRect = sprintEl.getBoundingClientRect();
                const pastHero = sprintRect.top <= 100;
                
                // Hide sticky bar when form is already in view to avoid redundancy & keyboard conflicts
                let nearForm = false;
                if (formEl) {
                    const formRect = formEl.getBoundingClientRect();
                    nearForm = formRect.top <= window.innerHeight - 80;
                }
                
                setShowSticky(pastHero && !nearForm);
            } else {
                setShowSticky(window.scrollY > 800);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-background text-black font-sans selection:bg-primary selection:text-white pb-20 md:pb-0">
            
            {/* MINIMAL STANDALONE NAVIGATION */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-black">
                <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img 
                            src="/lofty-logo-header.png" 
                            alt="Lofty Brands" 
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain" 
                        />
                        <span className="hidden sm:inline text-xs font-black uppercase tracking-widest text-black group-hover:text-primary transition-colors border-l-2 border-black pl-3 py-0.5">
                            Growth Sprint
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-black">
                        <a href="#the-sprint" className="hover:text-primary transition-colors">THE SPRINT</a>
                        <a href="#results" className="hover:text-primary transition-colors">RESULTS</a>
                        <a href="#pricing" className="hover:text-primary transition-colors">PRICING</a>
                        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
                    </nav>

                    <button 
                        onClick={scrollToForm}
                        className="px-4 sm:px-6 py-2.5 sm:py-3 min-h-[44px] sm:min-h-[48px] bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-all border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] shrink-0"
                    >
                        Book your sprint
                    </button>
                </div>
            </header>

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-24 bg-background border-b-2 border-black">
                {/* Background Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

                <div className="container mx-auto px-5 sm:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
                        
                        <div className="lg:col-span-7">
                            {/* Scarcity badge */}
                            <div className="inline-flex items-center gap-2 py-2 px-3 sm:px-4 bg-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest mb-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,94,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(255,94,0,1)]">
                                <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                                5 spots left for November
                            </div>

                            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] sm:leading-[0.95] mb-6 text-black tracking-tight sm:tracking-tighter uppercase break-words">
                                FOR 30 DAYS, <br />
                                WE TAKE CHARGE OF YOUR <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                                    MARKETING.
                                </span>
                            </h1>

                            {/* Shortened two-line paragraph, sentence case, min 16px, line-height 1.6 */}
                            <p className="text-base sm:text-lg text-black/85 max-w-xl mb-8 border-l-4 border-primary pl-4 sm:pl-5 py-1 leading-[1.6]">
                                We plan, create, and run your marketing for 30 days. You focus on your business.
                            </p>

                            {/* AUTHENTIC PROOF BADGE (Hero proof box with thick border & offset shadow) */}
                            <div className="bg-white border-2 border-black p-4 sm:p-5 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-start sm:items-center gap-3 sm:gap-4">
                                <div className="p-2.5 sm:p-3 bg-primary/10 border-2 border-primary text-primary shrink-0">
                                    <BadgeCheck size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-primary mb-0.5">Verified results</span>
                                    <p className="text-base font-medium text-black leading-[1.6]">
                                        Trusted by 20+ growing brands • 3 million+ views & thousands of real customer inquiries generated.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-2">
                                <button 
                                    onClick={scrollToForm}
                                    className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                >
                                    Book your sprint <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* HERO SPRINT CAMPAIGN DASHBOARD - SPACING FIXED (NO OVERLAP) */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            {/* Top Ad Engine Card */}
                            <div className="bg-black text-white border-2 border-black p-5 sm:p-6 md:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-gray-800">
                                    <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-400 text-[11px] sm:text-xs font-black uppercase tracking-wider shrink-0">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                                        Campaign Snapshot
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 shrink-0">
                                        30-Day Sprint
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">
                                        Peak Campaign Output
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                                            9.45x
                                        </span>
                                        <span className="text-xs sm:text-sm font-black uppercase text-gray-300">
                                            Return on Ad Spend
                                        </span>
                                    </div>
                                </div>

                                {/* Upward Growth Chart Line */}
                                <div className="border border-gray-800 bg-gray-950/80 p-3 sm:p-4 mb-4">
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

                                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-[11px] font-black uppercase">
                                    <div className="bg-gray-900 border border-gray-800 p-2 sm:p-2.5">
                                        <span className="text-gray-400 block text-[9px]">Verified Leads</span>
                                        <span className="text-white text-[11px] sm:text-xs block font-black leading-tight">1,497 Registrations</span>
                                        <span className="text-[9px] text-gray-400 block mt-0.5 font-normal">₦40.80 / reg</span>
                                    </div>
                                    <div className="bg-gray-900 border border-gray-800 p-2 sm:p-2.5">
                                        <span className="text-gray-400 block text-[9px]">Lead Cost</span>
                                        <span className="text-primary text-[11px] sm:text-xs block font-black leading-tight">₦47.27</span>
                                        <span className="text-[9px] text-gray-400 block mt-0.5 font-normal">per conversation</span>
                                    </div>
                                </div>
                            </div>

                            {/* Creative Preview Card - Clean layout below stats with no overlap */}
                            <div 
                                onClick={() => setActiveVideoModal({
                                    title: "Pakam Viral Campaign Story",
                                    videoSrc: "/videos/pakam-viral-1.mp4",
                                    poster: "/proof/pakam-tiktok-profile.png",
                                    platform: "TikTok",
                                    url: "https://www.tiktok.com/@pakamnigeria_",
                                    caption: "3 million+ views generated from authentic, hook-driven storytelling."
                                })}
                                className="cursor-pointer bg-white border border-gray-200 p-4 transition-all hover:border-black group"
                            >
                                <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                                        <span className="text-xs font-black uppercase text-black">Live Creative Asset</span>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 shrink-0">
                                        470K+ Views
                                    </span>
                                </div>

                                <div className="relative aspect-[16/9] bg-black border border-gray-200 overflow-hidden flex items-center justify-center">
                                    <img 
                                        src="/proof/pakam-tiktok-profile.png" 
                                        alt="Campaign preview" 
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <div className="px-3 sm:px-4 py-2 bg-primary text-white border-2 border-black font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 group-hover:scale-105 transition-transform min-h-[44px]">
                                            <Play size={14} className="fill-white shrink-0" />
                                            Play Campaign Reel
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2 text-[10px] font-black uppercase text-gray-500 flex justify-between items-center">
                                    <span>Click to Watch Preview</span>
                                    <span className="text-primary font-bold">Watch Video →</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. THE SPRINT (PROBLEM & WORKFLOW) */}
            <section id="the-sprint" className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-white">
                <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
                    <div className="max-w-4xl mb-12 sm:mb-16">
                        <span className="inline-block py-2 px-4 border border-gray-200 font-bold uppercase tracking-widest text-xs mb-6 bg-surface">
                            The 30-Day Solution
                        </span>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight sm:tracking-tighter leading-[1.05] sm:leading-[0.95] mb-6">
                            You Have a Great Business. <br className="hidden sm:inline" />
                            <span className="text-primary">You Just Need Marketing That Actually Brings Customers.</span>
                        </h2>
                        <p className="text-base sm:text-lg text-black/80 border-l-4 border-primary pl-4 sm:pl-5 py-2 leading-[1.6]">
                            Running a business while trying to write captions, edit videos, and figure out ads is exhausting. When marketing is scattered, it stops working. We bring everything together so your marketing runs every single day without you stressing over it.
                        </p>
                    </div>

                    {/* THE 3 EXECUTION PILLARS - 1px light grey border, white bg, no shadow */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* PILLAR 1 */}
                        <div className="bg-white border border-gray-200 p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="p-4 bg-black text-primary w-fit mb-6">
                                    <Target size={32} />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Pillar 01</span>
                                <h3 className="text-2xl font-black uppercase text-black mb-4">The Plan</h3>
                                <p className="text-base text-gray-700 leading-[1.6] border-l-2 border-primary pl-4">
                                    We look at your business, your buyers, and what you need to sell right now.
                                </p>
                            </div>
                        </div>

                        {/* PILLAR 2 */}
                        <div className="bg-white border border-gray-200 p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="p-4 bg-black text-primary w-fit mb-6">
                                    <Layers size={32} />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Pillar 02</span>
                                <h3 className="text-2xl font-black uppercase text-black mb-4">The Creative Work</h3>
                                <p className="text-base text-gray-700 leading-[1.6] border-l-2 border-primary pl-4">
                                    We write, design, and edit the videos, posts, and graphics for your brand.
                                </p>
                            </div>
                        </div>

                        {/* PILLAR 3 */}
                        <div className="bg-white border border-gray-200 p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="p-4 bg-black text-primary w-fit mb-6">
                                    <Megaphone size={32} />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Pillar 03</span>
                                <h3 className="text-2xl font-black uppercase text-black mb-4">The Paid Ads</h3>
                                <p className="text-base text-gray-700 leading-[1.6] border-l-2 border-primary pl-4 mb-6">
                                    We run targeted ads on Meta (Instagram & Facebook) to put your products in front of people ready to buy.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-gray-200">
                                <span className="text-xs font-bold text-gray-500 block">
                                    Ad spend is separate.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CASE STUDIES / VERIFIED RESULTS */}
            <section id="results" className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-surface">
                <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
                    <div className="mb-12 sm:mb-16 border-b-2 border-black pb-8 max-w-3xl">
                        <span className="text-primary font-black tracking-widest uppercase mb-2 block text-xs">
                            Verified results
                        </span>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tight sm:tracking-tighter">
                            REAL WORK. REAL MARKETING.
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 font-medium mt-4 leading-[1.6]">
                            We don't just talk about growth. Here's a look at the marketing work we've done and the results we've helped businesses achieve.
                        </p>
                    </div>

                    {/* 3 CORE CASE STUDIES IN FULL - 1 large number, 1 line context, 1 view report link */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        
                        {/* 1. CRAFTSQUARRE CARD */}
                        <div className="bg-white border border-gray-200 p-5 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col gap-2 mb-6">
                                    <span className="self-start text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                        Marketplace / Ecommerce
                                    </span>
                                    <h3 className="text-2xl font-black uppercase text-black tracking-tight mt-1">
                                        Craftsquarre
                                    </h3>
                                </div>

                                {/* Prominent Measurable Result */}
                                <div className="mb-6 p-4 sm:p-5 bg-surface border border-gray-200">
                                    <span className="text-4xl sm:text-5xl font-black text-black tracking-tighter block">
                                        100+
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary block mt-1">
                                        Merchants Onboarded
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium block mt-1">
                                        100+ sellers & 150+ early buyers validated
                                    </span>
                                </div>

                                {/* Marketing Work Lofty Brands Delivered */}
                                <div className="mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-1">
                                        Work Delivered
                                    </span>
                                    <p className="text-base text-gray-700 leading-[1.6]">
                                        Built brand positioning, creator content systems, and merchant acquisition campaigns to launch the MVP marketplace.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <Link
                                    to="/work/craftsquarre"
                                    className="min-h-[44px] py-2 text-xs font-black uppercase tracking-wider text-primary hover:text-black inline-flex items-center gap-1.5 transition-colors"
                                >
                                    <Eye size={14} /> View case study →
                                </Link>
                            </div>
                        </div>

                        {/* 2. OVERSEAS SALES CAMPAIGN (ROAS) CARD */}
                        <div className="bg-white border border-gray-200 p-5 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col gap-2 mb-6">
                                    <span className="self-start text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                        High-Ticket Ecommerce
                                    </span>
                                    <h3 className="text-2xl font-black uppercase text-black tracking-tight mt-1">
                                        Overseas Sales Campaign
                                    </h3>
                                </div>

                                {/* Prominent Measurable Result */}
                                <div className="mb-6 p-4 sm:p-5 bg-surface border border-gray-200">
                                    <span className="text-4xl sm:text-5xl font-black text-primary tracking-tighter block">
                                        9.45x
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-black block mt-1">
                                        Return on Ad Spend (ROAS)
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium block mt-1">
                                        $7,793.00 revenue on $824.73 ad spend
                                    </span>
                                </div>

                                {/* Marketing Work Lofty Brands Delivered */}
                                <div className="mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-1">
                                        Work Delivered
                                    </span>
                                    <p className="text-base text-gray-700 leading-[1.6]">
                                        Structured targeted Meta ad campaigns, high-converting offer creatives, and retargeting funnels driving inventory to sold-out status.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200 space-y-3">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <button
                                        onClick={() => setActiveProofModal({
                                            title: "High-Ticket E-commerce Campaign Dashboard",
                                            image: "/proof/ecommerce-15x-roas.png",
                                            metric: "9.45x Overall ROAS | $7,793.00 Combined Revenue",
                                            details: "138 total purchases generated across targeted console drops and retargeting campaigns."
                                        })}
                                        className="min-h-[44px] py-2 text-xs font-black uppercase tracking-wider text-primary hover:text-black inline-flex items-center gap-1.5 transition-colors"
                                    >
                                        <Eye size={14} /> View report
                                    </button>
                                    <button
                                        onClick={() => setShowCampaignBreakdown(!showCampaignBreakdown)}
                                        className="min-h-[44px] py-2 text-xs font-bold text-gray-600 hover:text-black inline-flex items-center gap-1 transition-colors"
                                    >
                                        {showCampaignBreakdown ? 'Hide breakdown' : 'See breakdown'} {showCampaignBreakdown ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                    </button>
                                </div>

                                {/* Expandable breakdown table */}
                                {showCampaignBreakdown && (
                                    <div className="border border-gray-200 overflow-hidden bg-surface mt-3">
                                        <div className="bg-black text-white px-3 py-2 text-[10px] font-black uppercase tracking-wider">
                                            Campaign Breakdown
                                        </div>
                                        <div className="overflow-x-auto -mx-1 sm:mx-0">
                                            <table className="min-w-[340px] w-full text-left text-xs">
                                                <thead className="border-b border-gray-200 bg-gray-50 font-bold uppercase text-[9px] text-gray-600">
                                                    <tr>
                                                        <th className="p-2">Segment</th>
                                                        <th className="p-2">Spend</th>
                                                        <th className="p-2">Orders</th>
                                                        <th className="p-2">Revenue</th>
                                                        <th className="p-2 text-right">ROAS</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 font-medium">
                                                    <tr className="bg-white">
                                                        <td className="p-2 font-bold text-black">Console Drop Batch A</td>
                                                        <td className="p-2 text-gray-600">$311.00</td>
                                                        <td className="p-2 text-gray-600">80</td>
                                                        <td className="p-2 font-bold text-black">$4,300.00</td>
                                                        <td className="p-2 text-right font-bold text-primary">13.82x</td>
                                                    </tr>
                                                    <tr className="bg-surface">
                                                        <td className="p-2 font-bold text-black">Targeted Retargeting</td>
                                                        <td className="p-2 text-gray-600">$513.73</td>
                                                        <td className="p-2 text-gray-600">58</td>
                                                        <td className="p-2 font-bold text-black">$3,493.00</td>
                                                        <td className="p-2 text-right font-bold text-black">6.80x</td>
                                                    </tr>
                                                    <tr className="bg-black text-white font-bold text-[11px]">
                                                        <td className="p-2 uppercase">Combined Revenue</td>
                                                        <td className="p-2 text-gray-300">$824.73</td>
                                                        <td className="p-2 text-gray-300">138</td>
                                                        <td className="p-2 text-primary">$7,793.00</td>
                                                        <td className="p-2 text-right text-primary">9.45x</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 3. YEC PRECISION CAMPAIGN CARD */}
                        <div className="bg-white border border-gray-200 p-5 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col gap-2 mb-6">
                                    <span className="self-start text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                        Precision Lead Generation
                                    </span>
                                    <h3 className="text-2xl font-black uppercase text-black tracking-tight mt-1">
                                        YEC Leads Campaign
                                    </h3>
                                </div>

                                {/* Prominent Measurable Result */}
                                <div className="mb-6 p-4 sm:p-5 bg-surface border border-gray-200">
                                    <span className="text-4xl sm:text-5xl font-black text-primary tracking-tighter block">
                                        145%
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-black block mt-1">
                                        Goal Achievement
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium block mt-1">
                                        145 signups delivered (target: 100) at ₦73.14 CPL
                                    </span>
                                </div>

                                {/* Marketing Work Lofty Brands Delivered */}
                                <div className="mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-1">
                                        Work Delivered
                                    </span>
                                    <p className="text-base text-gray-700 leading-[1.6]">
                                        Designed direct-response ad creative, managed audience targeting, and optimized daily ad delivery on Meta to surpass registration goals.
                                    </p>
                                </div>

                                {/* Fixed Progress Bar */}
                                <div className="border border-gray-200 p-3 bg-surface mb-6">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase text-gray-600 mb-2">
                                        <span>Target (100) vs Delivered</span>
                                        <span className="text-primary font-black">+45% Over Goal</span>
                                    </div>
                                    <div className="relative w-full h-8 bg-white border border-black overflow-hidden flex items-center">
                                        <div 
                                            className="h-full bg-primary flex items-center justify-end px-3 text-[10px] font-black text-white whitespace-nowrap min-w-[120px]" 
                                            style={{ width: '100%' }}
                                        >
                                            145 DELIVERED
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-[9px] font-bold uppercase text-gray-500 mt-2 px-0.5">
                                        <span>0 Leads</span>
                                        <span>Target: 100</span>
                                        <span className="text-primary font-black">145 Leads</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <button
                                    onClick={() => setActiveProofModal({
                                        title: "YEC Leads Campaign Results Report",
                                        image: "/proof/yec-leads-results.png",
                                        metric: "145 Signups | ₦73.14 ($0.097) CPL",
                                        details: "Goal: 100 Signups → Achieved: 145 Signups with 32,063 audience reach on ₦2,000 daily budget."
                                    })}
                                    className="min-h-[44px] py-2 text-xs font-black uppercase tracking-wider text-primary hover:text-black inline-flex items-center gap-1.5 transition-colors"
                                >
                                    <Eye size={14} /> View report
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* MORE WORK COLLAPSIBLE SECTION */}
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowMoreWork(!showMoreWork)}
                            className="w-full sm:w-auto px-8 py-3.5 min-h-[48px] bg-white border border-black text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all inline-flex items-center justify-center gap-2"
                        >
                            {showMoreWork ? "Hide additional work" : "See more results"} 
                            {showMoreWork ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                    </div>

                    {showMoreWork && (
                        <div className="mt-12 pt-12 border-t border-gray-200 space-y-16">
                            
                            {/* TOSSE, PAKAM, MENO HAVEN CARDS */}
                            <div>
                                <h3 className="text-2xl font-black uppercase text-black tracking-tight mb-8">
                                    More Client Case Studies
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                                    {/* TOSSE CARD - Lead cost labeled per conversation, registrations with cost per reg */}
                                    <div className="bg-white border border-gray-200 p-5 sm:p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex flex-col gap-1 mb-4">
                                                <span className="self-start text-[10px] font-black uppercase tracking-widest bg-primary text-white px-2.5 py-0.5">
                                                    TOSSE 2024
                                                </span>
                                                <span className="text-xs font-bold text-gray-500 uppercase">
                                                    Education Trade Exhibition
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-black uppercase text-black mb-3">TOSSE Exhibition</h4>
                                            
                                            <div className="space-y-3 mb-6 bg-surface p-4 border border-gray-200">
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase text-gray-500 block">Registrations</span>
                                                    <span className="text-2xl font-black text-black">1,497</span>
                                                    <span className="text-xs font-bold text-primary block">₦40.80 per registration</span>
                                                </div>
                                                <div className="pt-2 border-t border-gray-200">
                                                    <span className="text-[10px] font-bold uppercase text-gray-500 block">Direct Inquiries</span>
                                                    <span className="text-lg font-black text-black">1,292 conversations</span>
                                                    <span className="text-xs font-bold text-primary block">₦47.27 per conversation</span>
                                                </div>
                                            </div>

                                            <p className="text-base text-gray-700 leading-[1.6] mb-6">
                                                Executed omnichannel attendee acquisition generating 1,497 verified registrations backed by 1,100+ viral social reactions.
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => setActiveProofModal({
                                                title: "TOSSE 2024 Backend Form Registrations Report",
                                                image: "/proof/tosse-backend-registrations.png",
                                                metric: "1,497 Total Registrations",
                                                details: "Official backend report: 126 Exhibitor registration form entries + 1,371 Visitor registration form entries = 1,497 Total verified registrations."
                                            })}
                                            className="min-h-[44px] py-2 text-xs font-bold uppercase text-primary hover:text-black inline-flex items-center gap-1 transition-colors"
                                        >
                                            <Eye size={14} /> View TOSSE report
                                        </button>
                                    </div>

                                    {/* PAKAM CARD */}
                                    <div className="bg-white border border-gray-200 p-5 sm:p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex flex-col gap-1 mb-4">
                                                <span className="self-start text-[10px] font-black uppercase tracking-widest bg-black text-white px-2.5 py-0.5">
                                                    Circular Economy Tech
                                                </span>
                                                <span className="text-xs font-bold text-primary uppercase">
                                                    3,000 → 35,000+ Users
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-black uppercase text-black mb-3">Pakam</h4>
                                            
                                            <div className="mb-6 bg-surface p-4 border border-gray-200">
                                                <span className="text-2xl font-black text-black block">35,000+</span>
                                                <span className="text-xs font-bold text-gray-500 block mt-1">Platform Users Scaled</span>
                                            </div>

                                            <p className="text-base text-gray-700 leading-[1.6] mb-6">
                                                Combined educational content strategy, video storytelling, podcast programming, and school recycling challenges across 30+ schools.
                                            </p>
                                        </div>

                                        <Link
                                            to="/work/pakam"
                                            className="min-h-[44px] py-2 text-xs font-bold uppercase text-primary hover:text-black inline-flex items-center gap-1 transition-colors"
                                        >
                                            <Eye size={14} /> View Pakam case study →
                                        </Link>
                                    </div>

                                    {/* MENO HAVEN CARD */}
                                    <div className="bg-white border border-gray-200 p-5 sm:p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex flex-col gap-1 mb-4">
                                                <span className="self-start text-[10px] font-black uppercase tracking-widest bg-black text-white px-2.5 py-0.5">
                                                    Health Community
                                                </span>
                                                <span className="text-xs font-bold text-primary uppercase">
                                                    0 → 700+ Community
                                                </span>
                                            </div>
                                            <h4 className="text-xl font-black uppercase text-black mb-3">Meno Haven</h4>
                                            
                                            <div className="mb-6 bg-surface p-4 border border-gray-200">
                                                <span className="text-2xl font-black text-black block">700+</span>
                                                <span className="text-xs font-bold text-gray-500 block mt-1">Active Women Members</span>
                                            </div>

                                            <p className="text-base text-gray-700 leading-[1.6] mb-6">
                                                Built an engaged pre-launch community through multi-city physical walks, medical expert webinars, and high-trust social content.
                                            </p>
                                        </div>

                                        <Link
                                            to="/work/meno-haven"
                                            className="min-h-[44px] py-2 text-xs font-bold uppercase text-primary hover:text-black inline-flex items-center gap-1 transition-colors"
                                        >
                                            <Eye size={14} /> View Meno Haven case study →
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* CREATIVE CHANNELS & VIDEOS SHOWCASE */}
                            <div>
                                <h3 className="text-2xl font-black uppercase text-black tracking-tight mb-8">
                                    Creative & Video Execution
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                                    {/* Video Card 1: Pakam */}
                                    <div className="bg-white border border-gray-200 p-5 sm:p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                                                <span className="text-[10px] font-bold uppercase text-gray-500">TikTok Movement</span>
                                                <a href="https://www.tiktok.com/@pakamnigeria_" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-primary flex items-center gap-1">
                                                    @pakamnigeria_ <ArrowUpRight size={12} />
                                                </a>
                                            </div>
                                            <div 
                                                className="relative aspect-[9/16] bg-black border border-gray-200 overflow-hidden mb-4 cursor-pointer group"
                                                onClick={() => setActiveVideoModal({
                                                    title: "Pakam Viral Campaign Story 1",
                                                    videoSrc: "/videos/pakam-viral-1.mp4",
                                                    poster: "/proof/pakam-tiktok-profile.png",
                                                    platform: "TikTok",
                                                    url: "https://www.tiktok.com/@pakamnigeria_",
                                                    caption: "Short, engaging videos that brought 470,000+ views."
                                                })}
                                            >
                                                <img 
                                                    src="/proof/pakam-tiktok-profile.png" 
                                                    alt="Pakam" 
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                                        <Play size={18} className="fill-white translate-x-0.5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h5 className="font-bold text-base text-black mb-1">Pakam Viral Storytelling</h5>
                                            <p className="text-sm sm:text-base text-gray-600 leading-[1.6] mb-4">
                                                Short, engaging videos that turned everyday people into active app users.
                                            </p>
                                        </div>
                                        <div className="space-y-3 pt-2 border-t border-gray-200">
                                            <button
                                                onClick={() => setActiveVideoModal({
                                                    title: "Pakam Viral Campaign Story 1",
                                                    videoSrc: "/videos/pakam-viral-1.mp4",
                                                    poster: "/proof/pakam-tiktok-profile.png",
                                                    platform: "TikTok",
                                                    url: "https://www.tiktok.com/@pakamnigeria_",
                                                    caption: "Short, engaging videos that brought 470,000+ views."
                                                })}
                                                className="w-full py-3 min-h-[48px] bg-primary text-white text-xs font-bold uppercase hover:bg-black transition-colors flex items-center justify-center"
                                            >
                                                Watch Video 1
                                            </button>
                                            <button
                                                onClick={() => setActiveVideoModal({
                                                    title: "Pakam Campaign Story 2",
                                                    videoSrc: "/videos/pakam-viral-2.mp4",
                                                    poster: "/proof/pakam-tiktok-profile.png",
                                                    platform: "TikTok",
                                                    url: "https://www.tiktok.com/@pakamnigeria_",
                                                    caption: "Community recycling journey and viral app adoption."
                                                })}
                                                className="w-full py-3 min-h-[48px] bg-gray-100 text-black text-xs font-bold uppercase hover:bg-gray-200 transition-colors flex items-center justify-center"
                                            >
                                                Watch Video 2
                                            </button>
                                        </div>
                                    </div>

                                    {/* Video Card 2: Meno Haven */}
                                    <div className="bg-white border border-gray-200 p-5 sm:p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                                                <span className="text-[10px] font-bold uppercase text-gray-500">Instagram Community</span>
                                                <a href="https://www.instagram.com/menohavenng/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-primary flex items-center gap-1">
                                                    @menohavenng <ArrowUpRight size={12} />
                                                </a>
                                            </div>
                                            <div 
                                                className="relative aspect-[9/16] bg-black border border-gray-200 overflow-hidden mb-4 cursor-pointer group"
                                                onClick={() => setActiveVideoModal({
                                                    title: "Meno Haven Community Walkathon Video",
                                                    videoSrc: "/videos/menohaven-walkathon.mp4",
                                                    poster: "/proof/menohaven-instagram-feed.jpg",
                                                    platform: "Instagram",
                                                    url: "https://www.instagram.com/menohavenng/",
                                                    caption: "Real walkathon video clips & participant reels driving 18,000+ views."
                                                })}
                                            >
                                                <img 
                                                    src="/proof/menohaven-instagram-feed.jpg" 
                                                    alt="Meno Haven" 
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                                        <Play size={18} className="fill-white translate-x-0.5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h5 className="font-bold text-base text-black mb-1">Meno Haven Walkathon</h5>
                                            <p className="text-sm sm:text-base text-gray-600 leading-[1.6] mb-4">
                                                Community event coverage and partnership content building high-trust engagement.
                                            </p>
                                        </div>
                                        <div className="space-y-3 pt-2 border-t border-gray-200">
                                            <button
                                                onClick={() => setActiveVideoModal({
                                                    title: "Meno Haven Community Walkathon Video",
                                                    videoSrc: "/videos/menohaven-walkathon.mp4",
                                                    poster: "/proof/menohaven-instagram-feed.jpg",
                                                    platform: "Instagram",
                                                    url: "https://www.instagram.com/menohavenng/",
                                                    caption: "Real walkathon video clips & participant reels driving 18,000+ views."
                                                })}
                                                className="w-full py-3 min-h-[48px] bg-primary text-white text-xs font-bold uppercase hover:bg-black transition-colors flex items-center justify-center"
                                            >
                                                Watch Walkathon Video
                                            </button>
                                            <button
                                                onClick={() => setActiveVideoModal({
                                                    title: "Meno Haven x Shea Radiance Partnership Reel",
                                                    videoSrc: "/videos/menohaven-shea-radiance.mp4",
                                                    poster: "/proof/menohaven-instagram-feed.jpg",
                                                    platform: "Instagram",
                                                    url: "https://www.instagram.com/menohavenng/",
                                                    caption: "Glow Up Lagos brand partnership campaign showcasing natural skincare."
                                                })}
                                                className="w-full py-3 min-h-[48px] bg-gray-100 text-black text-xs font-bold uppercase hover:bg-gray-200 transition-colors flex items-center justify-center"
                                            >
                                                Watch Partnership Video
                                            </button>
                                        </div>
                                    </div>

                                    {/* Video Card 3: Craftsquarre Feed */}
                                    <div className="bg-white border border-gray-200 p-5 sm:p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                                                <span className="text-[10px] font-bold uppercase text-gray-500">Instagram Reels</span>
                                                <a href="https://www.instagram.com/craftsquarre/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-primary flex items-center gap-1">
                                                    @craftsquarre <ArrowUpRight size={12} />
                                                </a>
                                            </div>
                                            <div 
                                                className="relative aspect-[9/16] bg-black border border-gray-200 overflow-hidden mb-4 cursor-pointer group"
                                                onClick={() => setActiveVideoModal({
                                                    title: "Craftsquarre Merchant Spotlight Reel",
                                                    videoSrc: "/videos/craftsquarre-reel.mp4",
                                                    poster: "/proof/craftsquarre-instagram-feed.png",
                                                    platform: "Instagram",
                                                    url: "https://www.instagram.com/craftsquarre/",
                                                    caption: "High-energy videos showcasing real sellers and merchant milestones."
                                                })}
                                            >
                                                <img 
                                                    src="/proof/craftsquarre-instagram-feed.png" 
                                                    alt="Craftsquarre" 
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                                        <Play size={18} className="fill-white translate-x-0.5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h5 className="font-bold text-base text-black mb-1">Craftsquarre Merchant Reels</h5>
                                            <p className="text-sm sm:text-base text-gray-600 leading-[1.6] mb-4">
                                                Creator spotlights and product styling reels driving direct marketplace sales.
                                            </p>
                                        </div>
                                        <div className="space-y-3 pt-2 border-t border-gray-200">
                                            <button
                                                onClick={() => setActiveVideoModal({
                                                    title: "Craftsquarre Merchant Spotlight Reel",
                                                    videoSrc: "/videos/craftsquarre-reel.mp4",
                                                    poster: "/proof/craftsquarre-instagram-feed.png",
                                                    platform: "Instagram",
                                                    url: "https://www.instagram.com/craftsquarre/",
                                                    caption: "High-energy videos showcasing real sellers."
                                                })}
                                                className="w-full py-3 min-h-[48px] bg-primary text-white text-xs font-bold uppercase hover:bg-black transition-colors flex items-center justify-center"
                                            >
                                                Watch Spotlight Reel
                                            </button>
                                            <button
                                                onClick={() => setActiveVideoModal({
                                                    title: "Craftsquarre Town Kilishi Showcase",
                                                    videoSrc: "/videos/craftsquarre-reel2.mp4",
                                                    poster: "/proof/craftsquarre-instagram-feed.png",
                                                    platform: "Instagram",
                                                    url: "https://www.instagram.com/craftsquarre/",
                                                    caption: "Product demonstration driving customer purchases."
                                                })}
                                                className="w-full py-3 min-h-[48px] bg-gray-100 text-black text-xs font-bold uppercase hover:bg-gray-200 transition-colors flex items-center justify-center"
                                            >
                                                Watch Product Reel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </section>

            {/* 4. IDEAL FIT & NOT THE RIGHT TIME IF */}
            <section className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-white">
                <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
                    <div className="max-w-3xl mb-10 sm:mb-12">
                        <span className="inline-block py-2 px-4 border border-gray-200 font-bold uppercase tracking-widest text-xs mb-6 bg-surface">
                            Ideal Fit
                        </span>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight sm:tracking-tighter leading-[1.05] sm:leading-[0.95] mb-4">
                            Is the 30-Day Growth Sprint right for you?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
                        {/* WHO THIS IS FOR */}
                        <div className="bg-white border border-gray-200 p-6 sm:p-8">
                            <h3 className="text-xl font-black uppercase text-black mb-6 flex items-center gap-2">
                                <CheckCircle2 className="text-primary" size={22} />
                                Who this is for
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "You already have a product or service to sell.",
                                    "You need more structure around your marketing.",
                                    "You have been doing the marketing yourself.",
                                    "You have been posting without a clear strategy.",
                                    "You need a team to take the marketing work off your plate.",
                                    "You want strategy and execution working together."
                                ].map((point, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <Check size={18} className="text-primary mt-1 shrink-0" strokeWidth={2.5} />
                                        <p className="text-base text-gray-700 leading-[1.6]">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* NOT THE RIGHT TIME IF */}
                        <div className="bg-white border border-gray-200 p-6 sm:p-8">
                            <h3 className="text-xl font-black uppercase text-black mb-6 flex items-center gap-2">
                                <XCircle className="text-gray-400" size={22} />
                                Not the right time if
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "You have no product or service to sell yet",
                                    "You are not ready to put money into ads",
                                    "You want results with no input from you"
                                ].map((point, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <X size={18} className="text-red-500 mt-1 shrink-0" strokeWidth={2.5} />
                                        <p className="text-base text-gray-700 leading-[1.6]">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. HOW IT WORKS */}
            <section className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-surface">
                <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
                    <div className="mb-12 sm:mb-16 border-b-2 border-black pb-8 max-w-3xl">
                        <span className="text-primary font-black tracking-widest uppercase mb-2 block text-xs">Framework</span>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-black uppercase tracking-tight sm:tracking-tighter">
                            30 DAYS. THREE STEPS.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        
                        <div className="bg-white border border-gray-200 p-6 sm:p-8">
                            <span className="text-3xl font-black text-primary block mb-3">01</span>
                            <h3 className="text-xl font-black uppercase text-black mb-3">Week 1: We Set Up The Plan</h3>
                            <p className="text-base text-gray-700 leading-[1.6]">
                                We learn about your products, check what has worked for you in the past, and prepare the exact posts and ads we will run for the month.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 sm:p-8">
                            <span className="text-3xl font-black text-black block mb-3">02</span>
                            <h3 className="text-xl font-black uppercase text-black mb-3">Weeks 2–4: We Create and Launch</h3>
                            <p className="text-base text-gray-700 leading-[1.6]">
                                We produce the videos and graphics, write the copy, set up your ads, and launch everything. You just focus on serving your customers.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 sm:p-8">
                            <span className="text-3xl font-black text-primary block mb-3">03</span>
                            <h3 className="text-xl font-black uppercase text-black mb-3">Day 30: We Review Your Results</h3>
                            <p className="text-base text-gray-700 leading-[1.6]">
                                We sit down with you, show you how many sales, leads, and messages came in, and help you decide the best next move.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. WHAT THE SPRINT INCLUDES (PRICE SECTION) */}
            <section id="pricing" className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-white">
                <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
                    <div className="border border-gray-200 p-6 sm:p-8 md:p-12 bg-surface">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-300">
                            <div>
                                <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">
                                    Complete 30-Day Solution
                                </span>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-black tracking-tight">
                                    What the sprint includes
                                </h3>
                            </div>
                            <div className="text-left md:text-right">
                                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-black block tracking-tight">
                                    ₦199,000
                                </span>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                                    One-time · 30-day sprint
                                </span>
                            </div>
                        </div>

                        {/* Checklist */}
                        <div className="py-8 space-y-4">
                            {[
                                "8 strategic feed posts: 3 high-converting videos, 3 educational carousels, and 2 offer spotlights",
                                "Complete profile optimization",
                                "Meta ad campaign with 3 to 4 tested ad creatives, set up and managed on Instagram and Facebook. Retargeting added for larger budgets.",
                                "Weekly performance report showing spend, leads, and sales metrics",
                                "Dedicated WhatsApp workspace for fast approvals, plus a 30-day performance review deck"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" strokeWidth={2.5} />
                                    <p className="text-base text-gray-800 leading-[1.6]">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Revisions & Footage Line */}
                        <p className="text-base font-medium text-gray-700 leading-[1.6] mb-8">
                            Includes 2 rounds of revisions per piece. You provide raw footage and photos, and we edit and design.
                        </p>

                        {/* Ad spend note */}
                        <div className="p-4 bg-white border border-gray-300 mb-8">
                            <p className="text-base font-bold text-black leading-[1.6]">
                                Ad spend is separate. Most clients start with ₦50,000 – ₦150,000.
                            </p>
                        </div>

                        {/* CTA button */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="w-full sm:w-auto">
                                <button 
                                    onClick={scrollToForm}
                                    className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                >
                                    Book your sprint <ArrowRight size={16} />
                                </button>
                                <span className="block text-xs text-gray-500 font-medium mt-2">
                                    Fill a 2-minute form. We reply within 24 hours.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TIME COMMITMENT */}
            <section className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-surface">
                <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
                    <span className="inline-block py-2 px-4 border border-gray-200 font-bold uppercase tracking-widest text-xs mb-6 bg-white">
                        Collaboration
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight sm:tracking-tighter mb-6 leading-[1.05] sm:leading-[0.95]">
                        YOUR TIME NEEDED: ABOUT 2-3 HOURS A WEEK.
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 max-w-2xl mb-8 border-l-4 border-primary pl-4 leading-[1.6]">
                        You stay involved where it matters. We handle the rest. All we need from you is:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Basic details about your products or services",
                            "Your logos, photos, or existing videos",
                            "Access to your social media and ad account",
                            "Quick feedback when we send you drafts for approval"
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-4 sm:p-5 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-primary rounded-full shrink-0" />
                                <span className="text-base font-medium text-black leading-[1.6]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FAQ */}
            <section id="faq" className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-surface">
                <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-block py-2 px-4 border border-gray-200 font-bold uppercase tracking-widest text-xs mb-6 bg-white">
                            Answers
                        </span>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-black uppercase tracking-tight sm:tracking-tighter break-words">
                            FREQUENTLY ASKED QUESTIONS
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div 
                                    key={index}
                                    className="bg-white border border-gray-200 overflow-hidden transition-all"
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors min-h-[48px]"
                                    >
                                        <span className="text-base sm:text-lg font-black uppercase text-black tracking-tight leading-snug">
                                            {faq.q}
                                        </span>
                                        <span className="text-primary shrink-0">
                                            {isOpen ? <ChevronUp size={24} strokeWidth={3} /> : <ChevronDown size={24} strokeWidth={3} />}
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 sm:px-6 pb-6 pt-2 text-gray-700 text-base leading-[1.6] border-t border-gray-100">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA BLOCK */}
            <section id="get-started" className="py-12 sm:py-16 md:py-24 bg-primary text-white relative scroll-mt-20">
                <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
                    
                    <div className="text-center mb-10">
                        <div className="inline-block py-2 px-4 bg-black text-white text-xs font-black uppercase tracking-widest mb-4">
                            30-Day Growth Sprint • ₦199,000
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight sm:tracking-tighter leading-[1.05] sm:leading-[0.95] mb-4">
                            Ready for marketing that brings customers?
                        </h2>
                        <p className="text-base sm:text-lg text-black font-medium max-w-lg mx-auto">
                            Fill out your details below. We vet your business and get in touch within 24 hours.
                        </p>
                    </div>

                    {/* 3-STEP MICRO-TIMELINE */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                        <div className="bg-black text-white border-2 border-black p-3.5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[10px] font-black uppercase text-primary block">Step 01</span>
                            <span className="text-xs font-black uppercase text-white block">01. REVIEW</span>
                            <span className="text-[10px] text-gray-300 font-bold block">(24h Brand Audit)</span>
                        </div>
                        <div className="bg-black text-white border-2 border-black p-3.5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[10px] font-black uppercase text-primary block">Step 02</span>
                            <span className="text-xs font-black uppercase text-white block">02. CONNECT</span>
                            <span className="text-[10px] text-gray-300 font-bold block">(15-Min Alignment via WhatsApp)</span>
                        </div>
                        <div className="bg-black text-white border-2 border-black p-3.5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[10px] font-black uppercase text-primary block">Step 03</span>
                            <span className="text-xs font-black uppercase text-white block">03. KICKOFF</span>
                            <span className="text-[10px] text-gray-300 font-bold block">(Week 1 Production)</span>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-black p-5 sm:p-8 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-black">
                        {submitted ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center mx-auto mb-4 border-2 border-black">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">Application Received!</h3>
                                <p className="text-base text-gray-700 max-w-md mx-auto leading-[1.6]">
                                    Thank you! Your details have been submitted. We are reviewing your brand and will reach out via WhatsApp or email within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 px-8 py-4 min-h-[48px] bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors"
                                >
                                    Submit Another Application
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                            Your Name
                                        </label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            required
                                            autoComplete="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name"
                                            className="w-full min-h-[48px] bg-gray-50 border border-gray-300 p-3.5 sm:p-4 text-black text-base font-medium focus:outline-none focus:border-black transition-colors"
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
                                            autoComplete="organization"
                                            value={formData.businessName}
                                            onChange={handleInputChange}
                                            placeholder="Your Brand / Company"
                                            className="w-full min-h-[48px] bg-gray-50 border border-gray-300 p-3.5 sm:p-4 text-black text-base font-medium focus:outline-none focus:border-black transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                            Work Email
                                        </label>
                                        <input 
                                            type="email" 
                                            inputMode="email"
                                            autoComplete="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="you@company.com"
                                            className="w-full min-h-[48px] bg-gray-50 border border-gray-300 p-3.5 sm:p-4 text-black text-base font-medium focus:outline-none focus:border-black transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                            WhatsApp / Phone
                                        </label>
                                        <input 
                                            type="tel" 
                                            inputMode="tel"
                                            autoComplete="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+234 800 000 0000"
                                            className="w-full min-h-[48px] bg-gray-50 border border-gray-300 p-3.5 sm:p-4 text-black text-base font-medium focus:outline-none focus:border-black transition-colors"
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
                                        className="w-full min-h-[48px] bg-gray-50 border border-gray-300 p-3.5 sm:p-4 text-black font-medium focus:outline-none focus:border-black transition-colors text-base"
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
                                        placeholder="e.g. Scale direct online sales, launch product, generate 100+ inquiries"
                                        className="w-full min-h-[48px] bg-gray-50 border border-gray-300 p-3.5 sm:p-4 text-black text-base font-medium focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>

                                <div>
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full min-h-[52px] py-4 bg-black text-white font-black text-base md:text-lg uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,94,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                    >
                                        {isSubmitting ? "PROCESSING..." : "Book your sprint →"}
                                    </button>
                                    <span className="block text-center text-xs text-gray-500 font-medium mt-3">
                                        Fill a 2-minute form. We reply within 24 hours.
                                    </span>
                                </div>

                                <div className="text-center pt-2">
                                    <p className="text-xs text-gray-500">
                                        🔒 Zero spam. We vet your brand and reach out via WhatsApp/Email within 24 hours.
                                    </p>
                                </div>

                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* STICKY BOTTOM BAR (MOBILE ONLY - NEVER COVERS HERO ON FIRST LOAD) */}
            {showSticky && (
                <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-black p-3 px-4 sm:px-6 flex items-center justify-between shadow-lg">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary block leading-none mb-0.5">30-Day Sprint</span>
                        <span className="text-sm sm:text-base font-black text-black leading-tight block">₦199,000</span>
                    </div>
                    <button
                        onClick={scrollToForm}
                        className="px-4 sm:px-5 py-2.5 min-h-[44px] bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-colors border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0 flex items-center justify-center"
                    >
                        Book your sprint
                    </button>
                </div>
            )}

            {/* MINIMAL FOOTER */}
            <footer className="py-12 sm:py-16 pb-24 sm:pb-28 md:pb-16 bg-black text-white border-t border-gray-900">
                <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 pb-10 border-b border-gray-800">
                        <div>
                            <Link to="/" className="inline-block mb-3">
                                <img 
                                    src="/lofty-logo-footer.png" 
                                    alt="Lofty Brands" 
                                    loading="lazy"
                                    className="h-10 sm:h-12 w-auto object-contain" 
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
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
                    onClick={() => setActiveProofModal(null)}
                >
                    <div 
                        className="bg-white border-4 border-black max-w-4xl w-full p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(255,94,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] md:shadow-[12px_12px_0px_0px_rgba(255,94,0,1)] relative my-auto max-h-[92vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 border-b-2 border-black">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary block">
                                    Verified Campaign Dashboard
                                </span>
                                <h3 className="text-base sm:text-2xl font-black uppercase text-black tracking-tight">
                                    {activeProofModal.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setActiveProofModal(null)}
                                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors shrink-0"
                                aria-label="Close dialog"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="bg-black border-2 border-black overflow-hidden mb-4 max-h-[60vh] flex items-center justify-center">
                            <img 
                                src={activeProofModal.image} 
                                alt={activeProofModal.title}
                                loading="lazy"
                                className="max-h-[58vh] w-auto object-contain"
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
                                        className="px-4 sm:px-5 py-2.5 min-h-[44px] bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-colors flex items-center gap-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                                    >
                                        {activeProofModal.platform ? `Visit ${activeProofModal.platform} Page` : 'Visit Platform Page'} <ArrowUpRight size={14} />
                                    </a>
                                )}
                                <button
                                    onClick={() => setActiveProofModal(null)}
                                    className="px-4 sm:px-5 py-2.5 min-h-[44px] bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors shrink-0 flex items-center justify-center"
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
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
                    onClick={() => setActiveVideoModal(null)}
                >
                    {(() => {
                        const youtubeEmbed = getYouTubeEmbedUrl(activeVideoModal.youtubeUrl || activeVideoModal.url || activeVideoModal.videoSrc);
                        const isLandscape = activeVideoModal.aspect === '16/9' || !!youtubeEmbed;

                        return (
                            <div 
                                className={`bg-white border-4 border-black w-full p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(255,94,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(255,94,0,1)] md:shadow-[12px_12px_0px_0px_rgba(255,94,0,1)] relative my-auto max-h-[92vh] overflow-y-auto ${isLandscape ? 'max-w-3xl' : 'max-w-lg'}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 border-b-2 border-black">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary block">
                                            Campaign Video Preview
                                        </span>
                                        <h3 className="text-base sm:text-xl font-black uppercase text-black tracking-tight">
                                            {activeVideoModal.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setActiveVideoModal(null)}
                                        className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors shrink-0"
                                        aria-label="Close dialog"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className={`relative mx-auto bg-black border-2 border-black overflow-hidden flex items-center justify-center ${isLandscape ? 'aspect-video max-h-[65vh]' : 'aspect-[9/16] max-h-[58vh]'}`}>
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
                                            preload="metadata"
                                            className="w-full h-full object-contain bg-black"
                                        >
                                            <source src={activeVideoModal.videoSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <div className="p-6 text-center text-white">
                                            <div className="w-14 h-14 bg-primary text-white border-2 border-white flex items-center justify-center mx-auto mb-4">
                                                <Play size={26} className="translate-x-0.5 fill-white" />
                                            </div>
                                            <p className="text-sm font-black uppercase mb-4">{activeVideoModal.title}</p>
                                            {activeVideoModal.url && (
                                                <a 
                                                    href={activeVideoModal.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-3 min-h-[48px] bg-primary text-white font-black text-xs uppercase tracking-wider border border-white hover:bg-white hover:text-black transition-colors"
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
                                            className="text-primary hover:text-black flex items-center gap-1 font-black uppercase shrink-0 min-h-[44px]"
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
