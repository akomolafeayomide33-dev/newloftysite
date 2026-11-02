import React, { useState, useRef, useEffect } from 'react';
import { 
    ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
    Layers, Target, Megaphone, ShieldCheck, 
    Play, Eye, ArrowUpRight, Check, XCircle, X
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ==========================================
// CONFIGURATION CONSTANTS
// ==========================================
export const WHATSAPP_NUMBER = '2348160735987';
export const META_PIXEL_ID = ''; // Enter Meta Pixel ID here when ready (e.g. '1234567890')
export const FORMSPREE_FORM_ID = 'mqppggkg'; // Formspree Form ID: https://formspree.io/f/mqppggkg

const WHATSAPP_PREFILLED_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Lofty Brands, I'd like to book the 30-Day Growth Sprint.")}`;

// Meta Pixel tracking helper
const trackPixelEvent = (event, params = {}) => {
    if (typeof window !== 'undefined' && window.fbq && META_PIXEL_ID) {
        window.fbq('track', event, params);
    }
};

const faqs = [
    {
        q: "Is ₦199,000 a monthly retainer?",
        a: "No. This is a one-time fee for a focused 30-day sprint. There are no automatic renewals, surprise charges, or forced contracts. At the end of the 30 days, you decide whether to roll into an ongoing monthly growth plan or take all assets and manage things in-house."
    },
    {
        q: "How many posts and videos will I get?",
        a: "You get 8 content pieces: 3 short-form videos, 3 educational carousels, and 2 offer-focused posts. You also get profile optimisation and a Meta ad campaign with 3 to 4 tested creatives, set up and managed on Instagram and Facebook. Retargeting is added for larger budgets. Everything is built to bring buyers to your business."
    },
    {
        q: "How much should I spend on ads?",
        a: "Ad spend is separate and paid directly to Meta from your own card. For this 30-day sprint, we recommend a testing budget between ₦50,000 and ₦150,000. We set strict daily limits so every naira is tested against real buyer inquiries."
    },
    {
        q: "Do I need to be on camera or hire a videographer?",
        a: "No. You send raw footage and photos (simple smartphone clips of your products, behind-the-scenes work, packaging, or customer reviews), and we edit and design everything. Includes 2 rounds of revisions per piece. If you want to be on camera, we write word-for-word scripts for you."
    },
    {
        q: "What if my existing photos or videos aren't good enough?",
        a: "Most clients start with everyday phone clips. In Week 1, we send a simple shot list with the exact 10-second angles to capture in natural light. We handle text hooks, editing, and sound design to make your brand look polished."
    },
    {
        q: "Can your team come to my location to shoot?",
        a: "The sprint runs 100% remotely. If your brand needs on-site production, we offer a half-day location shoot as an optional add-on within Lagos. Ask us for the rate."
    },
    {
        q: "How will we communicate during the 30 days?",
        a: "You join a private WhatsApp group with your lead strategist and creative team for fast approvals and direct communication. Every Friday you get a recap of ad spend, leads, tracked sales, and live campaign status."
    },
    {
        q: "What happens after the 30 days are over?",
        a: "On Day 30, we deliver your performance review: what we executed, how your ads performed, what worked, what needs improvement, and our recommended next steps. If you want us to keep scaling, we can move into an ongoing monthly partnership. Otherwise you keep all final creative assets, copy templates, and ad account builds."
    },
    {
        q: "Do you guarantee sales?",
        a: "We guarantee delivery of the 8 content pieces, the tested ad campaign, weekly reports, and a clear plan for what comes next. Sales depend on your offer, your budget, and your market, and your report shows exactly what each ad produced."
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
    const [showMoreResults, setShowMoreResults] = useState(false);
    const [showSticky, setShowSticky] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        businessCategory: '',
        marketingGoal: '',
        adBudget: ''
    });
    const [honeypot, setHoneypot] = useState('');
    const [utmParams, setUtmParams] = useState({
        utm_source: '',
        utm_medium: '',
        utm_campaign: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const [activeProofModal, setActiveProofModal] = useState(null);
    const [activeVideoModal, setActiveVideoModal] = useState(null);
    const videoPlayerRef = useRef(null);

    // Set page title & capture UTM parameters
    useEffect(() => {
        document.title = "30-Day Growth Sprint | Lofty Brands";
        
        // Capture UTM parameters from URL
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            setUtmParams({
                utm_source: params.get('utm_source') || '',
                utm_medium: params.get('utm_medium') || '',
                utm_campaign: params.get('utm_campaign') || ''
            });
        }
    }, []);

    // Meta Pixel loader
    useEffect(() => {
        if (!META_PIXEL_ID || typeof window === 'undefined') return;

        if (!window.fbq) {
            (function(f,b,e,v,n,t,s) {
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s);
            })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

            window.fbq('init', META_PIXEL_ID);
        }
        window.fbq('track', 'PageView');
    }, []);

    // Scroll listener for sticky bar:
    // Only shows after scrolling past the hero button, and hides when near the final form
    useEffect(() => {
        const handleScroll = () => {
            const sprintEl = document.getElementById('the-sprint');
            const formEl = document.getElementById('get-started');
            
            if (sprintEl) {
                const sprintRect = sprintEl.getBoundingClientRect();
                const pastHero = sprintRect.top <= 120;
                
                let nearForm = false;
                if (formEl) {
                    const formRect = formEl.getBoundingClientRect();
                    nearForm = formRect.top <= window.innerHeight - 80;
                }
                
                setShowSticky(pastHero && !nearForm);
            } else {
                setShowSticky(window.scrollY > 750);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-play videos in modal
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

    const handleWhatsAppClick = () => {
        trackPixelEvent('Contact', { channel: 'WhatsApp' });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (submitError) setSubmitError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Spam honeypot detection
        if (honeypot) {
            setSubmitted(true);
            return;
        }

        // Phone validation (+234 friendly)
        const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
        if (cleanPhone.length < 10) {
            setSubmitError('Please enter a valid phone number (at least 10 digits).');
            return;
        }

        if (!formData.businessCategory) {
            setSubmitError('Please select a business category.');
            return;
        }

        if (!formData.adBudget) {
            setSubmitError('Please select your planned ad budget.');
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');

        const payload = {
            name: formData.name,
            businessName: formData.businessName,
            email: formData.email,
            phone: formData.phone,
            businessCategory: formData.businessCategory,
            marketingGoal: formData.marketingGoal,
            adBudget: formData.adBudget,
            utm_source: utmParams.utm_source,
            utm_medium: utmParams.utm_medium,
            utm_campaign: utmParams.utm_campaign,
            submittedAt: new Date().toISOString()
        };

        try {
            // Submit to Formspree endpoint if configured
            if (FORMSPREE_FORM_ID && FORMSPREE_FORM_ID !== 'YOUR_FORM_ID') {
                const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    trackPixelEvent('Lead', {
                        currency: 'NGN',
                        value: 199000,
                        content_name: '30-Day Growth Sprint'
                    });
                    setSubmitted(true);
                } else {
                    const data = await response.json().catch(() => ({}));
                    throw new Error(data.error || 'Submission failed. Please try again or chat with us on WhatsApp.');
                }
            } else {
                // If form key is not set, simulate successful intake and open mailto as fallback
                const emailSubject = encodeURIComponent(`30-Day Growth Sprint Application: ${formData.businessName || formData.name}`);
                const emailBody = encodeURIComponent(
                    `Name: ${formData.name}\n` +
                    `Business Name: ${formData.businessName}\n` +
                    `Email: ${formData.email}\n` +
                    `WhatsApp / Phone: ${formData.phone}\n` +
                    `Business Category: ${formData.businessCategory}\n` +
                    `Ad Budget: ${formData.adBudget}\n\n` +
                    `Primary Goal For This Month:\n${formData.marketingGoal}\n\n` +
                    `UTM Source: ${utmParams.utm_source || 'direct'}\n` +
                    `UTM Medium: ${utmParams.utm_medium || 'none'}\n` +
                    `UTM Campaign: ${utmParams.utm_campaign || 'none'}`
                );
                window.location.href = `mailto:loftybrands@gmail.com?subject=${emailSubject}&body=${emailBody}`;

                trackPixelEvent('Lead', {
                    currency: 'NGN',
                    value: 199000,
                    content_name: '30-Day Growth Sprint'
                });
                setSubmitted(true);
            }
        } catch (err) {
            setSubmitError(err.message || 'There was an issue sending your details. Please try again or chat with us on WhatsApp.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const userFirstName = formData.name.trim().split(' ')[0] || 'there';

    return (
        <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-background text-black font-sans selection:bg-primary selection:text-white pb-28 md:pb-0">
            
            {/* MINIMAL STANDALONE NAVIGATION */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-black">
                <div className="container mx-auto px-5 sm:px-6 h-20 flex items-center justify-between">
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
                        className="px-4 sm:px-6 py-2.5 sm:py-3 min-h-[48px] bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-all border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] shrink-0"
                    >
                        Book your sprint
                    </button>
                </div>
            </header>

            {/* 2. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-24 bg-background border-b-2 border-black">
                {/* Background Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

                <div className="container mx-auto px-5 sm:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
                        
                        <div className="lg:col-span-7 flex flex-col items-start">
                            {/* Scarcity badge: Static text, no number */}
                            <div className="inline-flex items-center py-2 px-3 sm:px-4 bg-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest mb-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,94,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(255,94,0,1)]">
                                ONLY 10 BUSINESSES TAKEN PER MONTH
                            </div>

                            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] sm:leading-[0.95] mb-6 text-black tracking-tight sm:tracking-tighter uppercase break-words">
                                FOR 30 DAYS, <br />
                                WE TAKE CHARGE OF YOUR <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                                    MARKETING.
                                </span>
                            </h1>

                            {/* Supporting line */}
                            <p className="text-base sm:text-lg text-black/85 max-w-xl mb-6 border-l-4 border-primary pl-4 sm:pl-5 py-1 leading-[1.6]">
                                We plan, create, and run your marketing for 30 days. You focus on your business.
                            </p>

                            {/* Hero proof box: Clean spacing without overlap or clipping */}
                            <div className="w-full max-w-xl bg-white border-2 border-black p-4 sm:p-5 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-start sm:items-center gap-3 sm:gap-4">
                                <div className="p-2.5 sm:p-3 bg-primary/10 border-2 border-primary text-primary shrink-0">
                                    <ShieldCheck size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-primary mb-0.5">
                                        CLIENT RESULTS
                                    </span>
                                    <p className="text-base font-medium text-black leading-[1.6]">
                                        Marketing led for 10+ brands. 3 million+ views generated.
                                    </p>
                                </div>
                            </div>

                            {/* Hero Button: Only the button, no ad spend or fill-form text */}
                            <div>
                                <button 
                                    onClick={scrollToForm}
                                    className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                >
                                    Book your sprint <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* HERO SPRINT CARDS COLUMN - CLEAN VERTICAL STACKING, NO OVERLAP */}
                        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                            
                            {/* Black Card: Results from real client campaigns */}
                            <div className="bg-black text-white border-2 border-black p-5 sm:p-6 md:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-gray-800">
                                    <span className="text-xs font-black uppercase tracking-wider text-gray-300">
                                        Results from real client campaigns
                                    </span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 shrink-0">
                                        30-day sprint
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">
                                        Best result: Tech Month sales campaign
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                                            9.45x
                                        </span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-300 mt-1">
                                        Every $1 spent on ads brought back $9.45 in sales
                                    </p>
                                    <span className="text-[11px] font-medium text-gray-400 block mt-0.5">
                                        Two campaigns combined
                                    </span>
                                </div>

                                {/* Two small boxes */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-black uppercase">
                                    <div className="bg-gray-900 border border-gray-800 p-3 flex flex-col justify-between">
                                        <div>
                                            <span className="text-primary text-[9px] tracking-wider block mb-1">TOSSE CAMPAIGN</span>
                                            <span className="text-white text-xs sm:text-sm block font-black leading-tight">
                                                1,497 event registrations
                                            </span>
                                        </div>
                                        <span className="text-[11px] text-gray-400 block mt-2 font-normal lowercase">
                                            ₦40.80 each
                                        </span>
                                    </div>

                                    <div className="bg-gray-900 border border-gray-800 p-3 flex flex-col justify-between">
                                        <div>
                                            <span className="text-primary text-[9px] tracking-wider block mb-1">TOSSE CAMPAIGN</span>
                                            <span className="text-white text-xs sm:text-sm block font-black leading-tight">
                                                1,292 conversations
                                            </span>
                                        </div>
                                        <span className="text-[11px] text-gray-400 block mt-2 font-normal lowercase">
                                            ₦47.27 each
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* White Card: A video from our work: Pakam */}
                            <div 
                                onClick={() => setActiveVideoModal({
                                    title: "Pakam Story Reel",
                                    videoSrc: "/videos/pakam-campaign-1.mp4",
                                    poster: "/proof/pakam-tiktok-profile.png",
                                    platform: "TikTok",
                                    url: "https://www.tiktok.com/@pakamnigeria_",
                                    caption: "3 million+ views generated from authentic, hook-driven storytelling."
                                })}
                                className="cursor-pointer bg-white border-2 border-black p-4 sm:p-5 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group"
                            >
                                <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
                                    <span className="text-xs font-black uppercase text-black">
                                        A video from our work: Pakam
                                    </span>
                                    <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 shrink-0">
                                        470K+ views
                                    </span>
                                </div>

                                <div className="relative aspect-[16/9] bg-black border border-gray-200 overflow-hidden flex items-center justify-center">
                                    <img 
                                        src="/proof/pakam-tiktok-profile.png" 
                                        alt="Pakam campaign video preview" 
                                        loading="eager"
                                        className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                                        <div className="px-3 sm:px-4 py-2 bg-primary text-white border-2 border-black font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 group-hover:scale-105 transition-transform min-h-[44px]">
                                            <Play size={14} className="fill-white shrink-0" />
                                            Play Video
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-3 text-[11px] font-black uppercase flex justify-end items-center">
                                    <span className="text-primary font-bold hover:underline">Watch video →</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 3. THE SPRINT (PROBLEM & PILLARS) */}
            <section id="the-sprint" className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-white">
                <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
                    <div className="max-w-4xl mb-12 sm:mb-16">
                        <span className="inline-block py-2 px-4 border border-gray-200 font-bold uppercase tracking-widest text-xs mb-6 bg-surface">
                            The 30-Day Solution
                        </span>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight sm:tracking-tighter leading-[1.05] sm:leading-[0.95] mb-6">
                            YOU HAVE A GREAT BUSINESS. <br className="hidden sm:inline" />
                            <span className="text-primary">YOU JUST NEED MARKETING THAT ACTUALLY BRINGS CUSTOMERS.</span>
                        </h2>
                        <p className="text-base sm:text-lg text-black/80 border-l-4 border-primary pl-4 sm:pl-5 py-2 leading-[1.6] mb-8">
                            Running a business while writing captions, editing videos, and figuring out ads is exhausting. Scattered marketing stalls. We bring planning, content, and ads together so your marketing keeps moving all month.
                        </p>
                        <p className="text-base sm:text-lg font-bold text-black uppercase tracking-wide">
                            One plan. One creative team. One ad budget, working together.
                        </p>
                    </div>

                    {/* THE 3 EXECUTION PILLARS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* PILLAR 1 */}
                        <div className="bg-white border border-gray-200 p-6 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="p-4 bg-black text-primary w-fit mb-6">
                                    <Target size={32} />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Pillar 01</span>
                                <h3 className="text-2xl font-black uppercase text-black mb-4">THE PLAN</h3>
                                <p className="text-base text-gray-700 leading-[1.6] border-l-2 border-primary pl-4">
                                    We study your business, your buyers, and what you need to sell right now, then map out the month's posts and ads.
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
                                <h3 className="text-2xl font-black uppercase text-black mb-4">THE CREATIVE WORK</h3>
                                <p className="text-base text-gray-700 leading-[1.6] border-l-2 border-primary pl-4">
                                    We write, design, and edit the videos, posts, and graphics from your plan, using the footage and photos you send.
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
                                <h3 className="text-2xl font-black uppercase text-black mb-4">THE PAID ADS</h3>
                                <p className="text-base text-gray-700 leading-[1.6] border-l-2 border-primary pl-4 mb-6">
                                    We run Meta ads on Instagram and Facebook that put your products and services in front of the right buyers, using the creative we built.
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

            {/* 4. RESULTS SECTION */}
            <section id="results" className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-surface">
                <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
                    <div className="mb-12 sm:mb-16 border-b-2 border-black pb-8 max-w-3xl">
                        <span className="text-primary font-black tracking-widest uppercase mb-2 block text-xs">
                            CLIENT RESULTS
                        </span>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-black uppercase tracking-tight sm:tracking-tighter">
                            REAL WORK. REAL MARKETING.
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 font-medium mt-4 leading-[1.6]">
                            Real campaigns. Real numbers. From brands we have worked with.
                        </p>
                    </div>

                    {/* MAIN 3 CARDS: PS5, PAKAM, TOSSE */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        
                        {/* CARD 1: TECH MONTH SALES CAMPAIGN */}
                        <div className="bg-white border border-gray-200 p-5 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col gap-1.5 mb-6">
                                    <span className="self-start text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                        ECOMMERCE
                                    </span>
                                    <h3 className="text-2xl font-black uppercase text-black tracking-tight mt-1">
                                        TECH MONTH SALES CAMPAIGN
                                    </h3>
                                    <span className="text-xs font-bold text-gray-500 uppercase">
                                        Overseas e-commerce brand
                                    </span>
                                </div>

                                {/* Measurable Result */}
                                <div className="mb-6 p-4 sm:p-5 bg-surface border border-gray-200">
                                    <span className="text-4xl sm:text-5xl font-black text-primary tracking-tighter block">
                                        9.45x
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-black block mt-1">
                                        Return on ad spend (ROAS)
                                    </span>
                                    <span className="text-xs text-gray-600 font-medium block mt-1">
                                        Two campaigns combined: $7,793 in sales from $824.73 ad spend
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <p className="text-base text-gray-700 leading-[1.6]">
                                        During Tech Month, we ran two Meta ad campaigns for an e-commerce brand: one across different tech items (80 orders) and one for the PS5 (58 orders).
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200 space-y-3">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <button
                                        onClick={() => setActiveProofModal({
                                            title: "Tech Month & PS5 Campaigns Dashboard",
                                            image: "/proof/ecommerce-15x-roas.png",
                                            metric: "9.45x Overall ROAS | $7,793.00 Combined Revenue",
                                            details: "138 total purchases generated across Tech Month ($4,300.00) and PS5 sales ($3,493.00) campaigns."
                                        })}
                                        className="min-h-[44px] py-2 text-xs font-black uppercase tracking-wider text-primary hover:text-black inline-flex items-center gap-1.5 transition-colors"
                                    >
                                        <Eye size={14} /> View report →
                                    </button>
                                    <button
                                        onClick={() => setShowCampaignBreakdown(!showCampaignBreakdown)}
                                        className="min-h-[44px] py-2 text-xs font-bold text-gray-600 hover:text-black inline-flex items-center gap-1 transition-colors"
                                    >
                                        {showCampaignBreakdown ? 'Hide breakdown' : 'See breakdown'} {showCampaignBreakdown ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                    </button>
                                </div>

                                {/* Expandable breakdown panel with "Figures in US dollars" */}
                                {showCampaignBreakdown && (
                                    <div className="border border-gray-200 overflow-hidden bg-surface mt-3">
                                        <div className="bg-black text-white px-3 py-2 text-[10px] font-black uppercase tracking-wider flex justify-between items-center">
                                            <span>Campaign Breakdown</span>
                                            <span className="text-gray-400 font-normal">Figures in US dollars</span>
                                        </div>

                                        {/* Mobile Stacked View (< 480px) to prevent table clipping & overlap */}
                                        <div className="block sm:hidden p-2.5 space-y-2.5 bg-white">
                                            <div className="p-3 bg-gray-50 border border-gray-200 text-xs">
                                                <span className="font-bold text-black block mb-2 leading-snug">
                                                    Tech Month campaign (various tech items)
                                                </span>
                                                <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600">
                                                    <div>Spend: <span className="font-bold text-black">$311.00</span></div>
                                                    <div>Orders: <span className="font-bold text-black">80</span></div>
                                                    <div>Revenue: <span className="font-bold text-black">$4,300.00</span></div>
                                                    <div>ROAS: <span className="font-black text-primary">13.8x</span></div>
                                                </div>
                                            </div>

                                            <div className="p-3 bg-gray-50 border border-gray-200 text-xs">
                                                <span className="font-bold text-black block mb-2 leading-snug">
                                                    PS5 sales campaign
                                                </span>
                                                <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600">
                                                    <div>Spend: <span className="font-bold text-black">$513.73</span></div>
                                                    <div>Orders: <span className="font-bold text-black">58</span></div>
                                                    <div>Revenue: <span className="font-bold text-black">$3,493.00</span></div>
                                                    <div>ROAS: <span className="font-black text-black">6.8x</span></div>
                                                </div>
                                            </div>

                                            <div className="p-3 bg-black text-white border border-black text-xs">
                                                <div className="flex justify-between items-center mb-2 pb-1 border-b border-gray-800">
                                                    <span className="font-black uppercase tracking-wider text-xs">Combined</span>
                                                    <span className="font-black text-primary text-sm">9.45x ROAS</span>
                                                </div>
                                                <div className="grid grid-cols-3 gap-1 text-[11px]">
                                                    <div>
                                                        <span className="text-gray-400 block text-[9px] uppercase">Spend</span>
                                                        <span className="text-gray-200 font-bold">$824.73</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-400 block text-[9px] uppercase">Orders</span>
                                                        <span className="text-gray-200 font-bold">138</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-400 block text-[9px] uppercase">Revenue</span>
                                                        <span className="text-primary font-black">$7,793.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop / Tablet Table View (>= 480px) */}
                                        <div className="hidden sm:block overflow-x-auto">
                                            <table className="w-full text-left text-xs bg-white">
                                                <thead className="border-b border-gray-200 bg-gray-50 font-bold uppercase text-[9px] text-gray-600">
                                                    <tr>
                                                        <th className="p-2">Campaign</th>
                                                        <th className="p-2">Spend</th>
                                                        <th className="p-2">Orders</th>
                                                        <th className="p-2">Revenue</th>
                                                        <th className="p-2 text-right">ROAS</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 font-medium">
                                                    <tr className="bg-white">
                                                        <td className="p-2 font-bold text-black">Tech Month campaign (various tech items)</td>
                                                        <td className="p-2 text-gray-600">$311.00</td>
                                                        <td className="p-2 text-gray-600">80</td>
                                                        <td className="p-2 font-bold text-black">$4,300.00</td>
                                                        <td className="p-2 text-right font-bold text-primary">13.8x</td>
                                                    </tr>
                                                    <tr className="bg-surface">
                                                        <td className="p-2 font-bold text-black">PS5 sales campaign</td>
                                                        <td className="p-2 text-gray-600">$513.73</td>
                                                        <td className="p-2 text-gray-600">58</td>
                                                        <td className="p-2 font-bold text-black">$3,493.00</td>
                                                        <td className="p-2 text-right font-bold text-black">6.8x</td>
                                                    </tr>
                                                    <tr className="bg-black text-white font-bold text-[11px]">
                                                        <td className="p-2 uppercase">Combined</td>
                                                        <td className="p-2 text-gray-300">$824.73</td>
                                                        <td className="p-2 text-gray-300">138</td>
                                                        <td className="p-2 text-primary">$7,793.00</td>
                                                        <td className="p-2 text-right text-primary">9.45x</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Report links */}
                                        <div className="p-2.5 bg-gray-100 border-t border-gray-200 flex flex-wrap items-center gap-4 text-[11px] font-bold">
                                            <button
                                                onClick={() => setActiveProofModal({
                                                    title: "Tech Month Campaign Ad Report",
                                                    image: "/proof/ecommerce-15x-roas.png",
                                                    metric: "13.8x ROAS | $4,300 Revenue",
                                                    details: "Tech Month campaign segment: 80 orders across various tech items on $311 ad spend."
                                                })}
                                                className="text-primary hover:text-black transition-colors min-h-[36px] flex items-center"
                                            >
                                                View Tech Month report →
                                            </button>
                                            <button
                                                onClick={() => setActiveProofModal({
                                                    title: "PS5 Sales Campaign Ad Report",
                                                    image: "/proof/ps5-xbox-results.png",
                                                    metric: "6.8x ROAS | $3,493 Revenue",
                                                    details: "PS5 sales campaign segment: 58 orders on $513.73 ad spend."
                                                })}
                                                className="text-primary hover:text-black transition-colors min-h-[36px] flex items-center"
                                            >
                                                View PS5 report →
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* CARD 2: PAKAM (MOVED UP FROM CASE STUDIES) */}
                        <div className="bg-white border border-gray-200 p-5 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col gap-1.5 mb-6">
                                    <span className="self-start text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                        CIRCULAR ECONOMY TECH
                                    </span>
                                    <h3 className="text-2xl font-black uppercase text-black tracking-tight mt-1">
                                        PAKAM
                                    </h3>
                                </div>

                                {/* Measurable Result */}
                                <div className="mb-6 p-4 sm:p-5 bg-surface border border-gray-200">
                                    <span className="text-4xl sm:text-5xl font-black text-black tracking-tighter block">
                                        35,000+
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary block mt-1">
                                        Users, up from 3,000
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <p className="text-base text-gray-700 leading-[1.6]">
                                        We grew Pakam's user base through educational content, video storytelling, podcast programming, and recycling challenges across 30+ schools. Led by our founder as Pakam's marketing manager, later as consultant.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <Link
                                    to="/work/pakam"
                                    className="min-h-[44px] py-2 text-xs font-black uppercase tracking-wider text-primary hover:text-black inline-flex items-center gap-1.5 transition-colors"
                                >
                                    <Eye size={14} /> View Pakam case study →
                                </Link>
                            </div>
                        </div>

                        {/* CARD 3: TOSSE 2024 */}
                        <div className="bg-white border border-gray-200 p-5 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col gap-1.5 mb-6">
                                    <span className="self-start text-[10px] font-black uppercase tracking-widest bg-primary text-white px-3 py-1">
                                        EDUCATION EXHIBITION
                                    </span>
                                    <h3 className="text-2xl font-black uppercase text-black tracking-tight mt-1">
                                        TOSSE 2024
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-gray-500 uppercase">
                                            Total School Support Seminar/Exhibition
                                        </span>
                                        <a 
                                            href="https://tosse.ng/" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-0.5"
                                        >
                                            tosse.ng <ArrowUpRight size={12} />
                                        </a>
                                    </div>
                                </div>

                                {/* Measurable Result */}
                                <div className="mb-6 p-4 sm:p-5 bg-surface border border-gray-200">
                                    <span className="text-4xl sm:text-5xl font-black text-black tracking-tighter block">
                                        1,497
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary block mt-1">
                                        Event registrations
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium block mt-1">
                                        ₦40.80 each · 1,292 conversations
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <p className="text-base text-gray-700 leading-[1.6]">
                                        We ran the ads and social content that got 1,497 people to register for the event, at ₦40.80 each. The posts earned 1,100+ reactions, comments, and shares.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <button
                                    onClick={() => setActiveProofModal({
                                        title: "TOSSE 2024 Backend Form Registrations Report",
                                        image: "/proof/tosse-backend-registrations.png",
                                        metric: "1,497 Total Registrations",
                                        details: "Official backend report: 126 Exhibitor registration form entries + 1,371 Visitor registration form entries = 1,497 Total registrations."
                                    })}
                                    className="min-h-[44px] py-2 text-xs font-black uppercase tracking-wider text-primary hover:text-black inline-flex items-center gap-1.5 transition-colors"
                                >
                                    <Eye size={14} /> View report →
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* SEE MORE RESULTS TOGGLE (COLLAPSED BY DEFAULT) */}
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowMoreResults(!showMoreResults)}
                            className="w-full sm:w-auto px-8 py-3.5 min-h-[48px] bg-white border border-black text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all inline-flex items-center justify-center gap-2"
                        >
                            {showMoreResults ? "Hide more results" : "See more results"} 
                            {showMoreResults ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                    </div>

                    {showMoreResults && (
                        <div className="mt-12 pt-12 border-t border-gray-200 space-y-16">
                            
                            {/* YEC & MENO HAVEN CARDS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                
                                {/* YEC CARD */}
                                <div className="bg-white border border-gray-200 p-5 sm:p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-col gap-1.5 mb-6">
                                            <span className="self-start text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                                LEAD GENERATION
                                            </span>
                                            <h3 className="text-2xl font-black uppercase text-black tracking-tight mt-1">
                                                YEC: YOUNG AND EXCELLENT CLUB
                                            </h3>
                                        </div>

                                        <div className="mb-6 p-4 sm:p-5 bg-surface border border-gray-200">
                                            <span className="text-4xl sm:text-5xl font-black text-primary tracking-tighter block">
                                                145 sign-ups
                                            </span>
                                            <span className="text-xs font-bold uppercase tracking-wider text-black block mt-1">
                                                Target was 100
                                            </span>
                                            <span className="text-xs text-gray-500 font-medium block mt-1">
                                                ₦73.14 per sign-up
                                            </span>
                                        </div>

                                        <p className="text-base text-gray-700 leading-[1.6] mb-6">
                                            We built the ads, picked the audience, and adjusted spend daily to beat the sign-up target.
                                        </p>

                                        {/* Progress bar without clipping or duplicate texts */}
                                        <div className="border border-gray-200 p-3 bg-surface mb-6">
                                            <div className="relative w-full h-7 bg-white border border-black overflow-hidden flex items-center">
                                                <div 
                                                    className="h-full bg-primary flex items-center justify-end px-3 text-[10px] font-black text-white whitespace-nowrap" 
                                                    style={{ width: '100%' }}
                                                >
                                                    145 SIGN-UPS
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-[10px] font-bold uppercase text-gray-600 mt-2 px-1">
                                                <span>0</span>
                                                <span>Target: 100</span>
                                                <span className="text-primary font-black">145</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200">
                                        <button
                                            onClick={() => setActiveProofModal({
                                                title: "YEC Leads Campaign Results Report",
                                                image: "/proof/yec-leads-results.png",
                                                metric: "145 Sign-ups | ₦73.14 per sign-up",
                                                details: "Target: 100 Sign-ups. Achieved: 145 Sign-ups with 32,063 reach on ₦2,000 daily budget."
                                            })}
                                            className="min-h-[44px] py-2 text-xs font-black uppercase tracking-wider text-primary hover:text-black inline-flex items-center gap-1.5 transition-colors"
                                        >
                                            <Eye size={14} /> View report →
                                        </button>
                                    </div>
                                </div>

                                {/* MENO HAVEN CARD */}
                                <div className="bg-white border border-gray-200 p-5 sm:p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-col gap-1.5 mb-6">
                                            <span className="self-start text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                                                HEALTH COMMUNITY
                                            </span>
                                            <h3 className="text-2xl font-black uppercase text-black tracking-tight mt-1">
                                                MENO HAVEN
                                            </h3>
                                        </div>

                                        <div className="mb-6 p-4 sm:p-5 bg-surface border border-gray-200">
                                            <span className="text-4xl sm:text-5xl font-black text-black tracking-tighter block">
                                                700+
                                            </span>
                                            <span className="text-xs font-bold uppercase tracking-wider text-primary block mt-1">
                                                Women members before launch
                                            </span>
                                        </div>

                                        <p className="text-base text-gray-700 leading-[1.6] mb-6">
                                            We built the community before launch through walkathons in multiple cities, webinars with medical experts, and social content.
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200">
                                        <Link
                                            to="/work/meno-haven"
                                            className="min-h-[44px] py-2 text-xs font-black uppercase tracking-wider text-primary hover:text-black inline-flex items-center gap-1.5 transition-colors"
                                        >
                                            <Eye size={14} /> View Meno Haven case study →
                                        </Link>
                                    </div>
                                </div>

                            </div>

                            {/* CREATIVE & VIDEO EXECUTION CARDS */}
                            <div>
                                <h3 className="text-2xl font-black uppercase text-black tracking-tight mb-8">
                                    Creative & video execution
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                    {/* Video Card 1: Pakam */}
                                    <div className="bg-white border border-gray-200 p-5 sm:p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                                                <span className="text-[10px] font-bold uppercase text-gray-500">TikTok</span>
                                                <a 
                                                    href="https://www.tiktok.com/@pakamnigeria_" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-xs font-bold text-primary flex items-center gap-1"
                                                >
                                                    @pakamnigeria_ <ArrowUpRight size={12} />
                                                </a>
                                            </div>
                                            <div 
                                                className="relative aspect-[9/16] bg-black border border-gray-200 overflow-hidden mb-4 cursor-pointer group"
                                                onClick={() => setActiveVideoModal({
                                                    title: "Pakam Merchant Experience",
                                                    videoSrc: "/videos/pakam-campaign-1.mp4",
                                                    poster: "/proof/pakam-tiktok-profile.png",
                                                    platform: "TikTok",
                                                    url: "https://www.tiktok.com/@pakamnigeria_",
                                                    caption: "Short videos that showed people how to turn waste into income."
                                                })}
                                            >
                                                <img 
                                                    src="/proof/pakam-tiktok-profile.png" 
                                                    alt="Pakam TikTok video preview" 
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                                        <Play size={18} className="fill-white translate-x-0.5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-base text-gray-700 leading-[1.6] mb-4">
                                                Short videos that showed people how to turn waste into income. Our top video reached 473.7K views.
                                            </p>
                                        </div>
                                        <div className="space-y-3 pt-2 border-t border-gray-200">
                                            <button
                                                onClick={() => setActiveVideoModal({
                                                    title: "How A Merchant Gets Paid",
                                                    videoSrc: "/videos/pakam-campaign-1.mp4",
                                                    poster: "/proof/pakam-tiktok-profile.png",
                                                    platform: "TikTok",
                                                    url: "https://www.tiktok.com/@pakamnigeria_",
                                                    caption: "User experience video showing how waste turns into cash."
                                                })}
                                                className="w-full py-3 min-h-[48px] bg-primary text-white text-xs font-black uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center"
                                            >
                                                WATCH: HOW A MERCHANT GETS PAID
                                            </button>
                                            <button
                                                onClick={() => setActiveVideoModal({
                                                    title: "Pakam Sign-Up Video",
                                                    videoSrc: "/videos/pakam-campaign-2.mp4",
                                                    poster: "/proof/pakam-tiktok-profile.png",
                                                    platform: "TikTok",
                                                    url: "https://www.tiktok.com/@pakamnigeria_",
                                                    caption: "User acquisition video showing the app registration process."
                                                })}
                                                className="w-full py-3 min-h-[48px] bg-gray-100 text-black text-xs font-black uppercase tracking-wider hover:bg-gray-200 transition-colors flex items-center justify-center"
                                            >
                                                WATCH: PAKAM SIGN-UP VIDEO
                                            </button>
                                        </div>
                                    </div>

                                    {/* Video Card 2: Meno Haven */}
                                    <div className="bg-white border border-gray-200 p-5 sm:p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                                                <span className="text-[10px] font-bold uppercase text-gray-500">Instagram</span>
                                                <a 
                                                    href="https://www.instagram.com/menohavenng/" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-xs font-bold text-primary flex items-center gap-1"
                                                >
                                                    @menohavenng <ArrowUpRight size={12} />
                                                </a>
                                            </div>
                                            <div 
                                                className="relative aspect-[9/16] bg-black border border-gray-200 overflow-hidden mb-4 cursor-pointer group"
                                                onClick={() => setActiveVideoModal({
                                                    title: "Meno Haven Walkathon Highlights",
                                                    videoSrc: "/videos/menohaven-walkathon.mp4",
                                                    poster: "/proof/menohaven-instagram-feed.jpg",
                                                    platform: "Instagram",
                                                    url: "https://www.instagram.com/menohavenng/",
                                                    caption: "Walkathon coverage and partnership content that kept the community engaged."
                                                })}
                                            >
                                                <img 
                                                    src="/proof/menohaven-instagram-feed.jpg" 
                                                    alt="Meno Haven Instagram video preview" 
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                                                        <Play size={18} className="fill-white translate-x-0.5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-base text-gray-700 leading-[1.6] mb-4">
                                                Walkathon coverage and partnership content that kept the community engaged.
                                            </p>
                                        </div>
                                        <div className="space-y-3 pt-2 border-t border-gray-200">
                                            <button
                                                onClick={() => setActiveVideoModal({
                                                    title: "Walkathon Highlights",
                                                    videoSrc: "/videos/menohaven-walkathon.mp4",
                                                    poster: "/proof/menohaven-instagram-feed.jpg",
                                                    platform: "Instagram",
                                                    url: "https://www.instagram.com/menohavenng/",
                                                    caption: "Event highlights building high-trust community engagement."
                                                })}
                                                className="w-full py-3 min-h-[48px] bg-primary text-white text-xs font-black uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center"
                                            >
                                                WATCH: WALKATHON HIGHLIGHTS
                                            </button>
                                            <button
                                                onClick={() => setActiveVideoModal({
                                                    title: "Partnership Video",
                                                    videoSrc: "/videos/menohaven-shea-radiance.mp4",
                                                    poster: "/proof/menohaven-instagram-feed.jpg",
                                                    platform: "Instagram",
                                                    url: "https://www.instagram.com/menohavenng/",
                                                    caption: "Brand collaboration reel showcasing natural skincare."
                                                })}
                                                className="w-full py-3 min-h-[48px] bg-gray-100 text-black text-xs font-black uppercase tracking-wider hover:bg-gray-200 transition-colors flex items-center justify-center"
                                            >
                                                WATCH: PARTNERSHIP VIDEO
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </section>

            {/* 5. IDEAL FIT */}
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
                                WHO THIS IS FOR
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "You have a product or service ready to sell",
                                    "You have been doing your marketing yourself and want it off your plate",
                                    "You have been posting without a clear strategy",
                                    "You want strategy and execution from one team"
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
                                NOT THE RIGHT TIME IF
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "You have no product or service to sell yet",
                                    "You are not ready to put money into ads",
                                    "You want results with no input from you",
                                    "You want a guaranteed sales number"
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

            {/* 6. THREE STEPS */}
            <section className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-surface">
                <div className="container mx-auto px-5 sm:px-6 max-w-5xl">
                    <div className="mb-12 sm:mb-16 border-b-2 border-black pb-8 max-w-3xl">
                        <span className="text-primary font-black tracking-widest uppercase mb-2 block text-xs">
                            FRAMEWORK
                        </span>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-black uppercase tracking-tight sm:tracking-tighter">
                            30 DAYS. THREE STEPS.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        
                        <div className="bg-white border border-gray-200 p-6 sm:p-8">
                            <span className="text-3xl font-black text-primary block mb-3">01</span>
                            <h3 className="text-xl font-black uppercase text-black mb-3">
                                WEEK 1: WE SET UP THE PLAN
                            </h3>
                            <p className="text-base text-gray-700 leading-[1.6]">
                                We learn about your products, review what has worked for you before, and prepare the exact posts and ads for the month. You receive a simple shot list for your raw footage.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 sm:p-8">
                            <span className="text-3xl font-black text-black block mb-3">02</span>
                            <h3 className="text-xl font-black uppercase text-black mb-3">
                                WEEKS 2 TO 4: WE CREATE AND LAUNCH
                            </h3>
                            <p className="text-base text-gray-700 leading-[1.6]">
                                We produce the videos and graphics, write the copy, set up your ads, and launch. Ads go live in Week 2. You approve drafts and keep serving your customers.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 sm:p-8">
                            <span className="text-3xl font-black text-primary block mb-3">03</span>
                            <h3 className="text-xl font-black uppercase text-black mb-3">
                                DAY 30: WE REVIEW YOUR RESULTS
                            </h3>
                            <p className="text-base text-gray-700 leading-[1.6]">
                                We sit down with you, show you the leads, messages, and tracked sales that came in, and agree your best next move.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 7. WHAT THE SPRINT INCLUDES */}
            <section id="pricing" className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-white">
                <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
                    <div className="border border-gray-200 p-6 sm:p-8 md:p-12 bg-surface">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-300">
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
                                    ONE-TIME · 30-DAY SPRINT
                                </span>
                            </div>
                        </div>

                        {/* Salary comparison line */}
                        <p className="text-xs sm:text-sm text-gray-600 font-medium py-4 border-b border-gray-200 leading-normal">
                            Hiring a social media manager, copywriter, video editor, and ads specialist in Lagos typically costs at least ₦150,000 each and at least ₦600,000 cumulatively a month in salaries alone.
                        </p>

                        {/* Checklist */}
                        <div className="py-8 space-y-4">
                            {[
                                "8 content pieces: 3 short-form videos, 3 educational carousels, and 2 offer-focused posts",
                                "Profile optimisation so your page is ready to convert",
                                "Meta ads managed end to end: setup, 3 to 4 tested creatives, and ongoing optimisation. Retargeting added for larger budgets.",
                                "Weekly reports on spend, leads, and tracked sales",
                                "30-day performance review with insights and recommended next steps",
                                "WhatsApp group for feedback and fast approvals",
                                "You keep every asset we create"
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
                        <p className="text-base font-medium text-gray-700 leading-[1.6] mb-6">
                            Includes 2 rounds of revisions per piece. You provide raw footage and photos, and we edit and design.
                        </p>

                        {/* Ad spend note */}
                        <div className="p-4 bg-white border border-gray-300 mb-4">
                            <p className="text-base font-bold text-black leading-[1.6]">
                                Ad spend is separate. Most clients start with ₦50,000 to ₦150,000.
                            </p>
                        </div>

                        {/* Delivery guarantee card */}
                        <div className="p-4 bg-white border-2 border-black mb-8">
                            <p className="text-base font-medium text-black leading-[1.6]">
                                <span className="font-bold">Delivery guarantee:</span> if we miss the delivery schedule we agree in Week 1, your sprint extends at no extra cost until all 8 content pieces and your ad setup are live.
                            </p>
                        </div>

                        {/* CTA button */}
                        <div>
                            <button 
                                onClick={scrollToForm}
                                className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            >
                                Book your sprint →
                            </button>
                            <span className="block text-xs text-gray-500 font-medium mt-3">
                                Takes 2 minutes. We reply within 24 hours.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. TIME NEEDED */}
            <section className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-surface">
                <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
                    <span className="inline-block py-2 px-4 border border-gray-200 font-bold uppercase tracking-widest text-xs mb-6 bg-white">
                        Collaboration
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight sm:tracking-tighter mb-6 leading-[1.05] sm:leading-[0.95]">
                        YOUR TIME NEEDED: ABOUT 2-3 HOURS A WEEK.
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 max-w-2xl mb-8 border-l-4 border-primary pl-4 leading-[1.6]">
                        You stay involved where it matters. We handle the rest. All we need from you:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Basic details about your products or services",
                            "Your logos, raw footage, and photos",
                            "Partner access to your social and ad accounts. We never ask for your passwords.",
                            "Quick feedback when we send drafts for approval"
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-4 sm:p-5 flex items-start gap-3">
                                <span className="w-2.5 h-2.5 bg-primary rounded-full shrink-0 mt-2" />
                                <span className="text-base font-medium text-black leading-[1.6]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FAQ */}
            <section id="faq" className="py-12 sm:py-16 md:py-24 border-b-2 border-black bg-white">
                <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-block py-2 px-4 border border-gray-200 font-bold uppercase tracking-widest text-xs mb-6 bg-surface">
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

            {/* 10. FINAL CTA AND FORM */}
            <section id="get-started" className="py-12 sm:py-16 md:py-24 bg-primary text-white relative scroll-mt-20">
                <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
                    
                    <div className="text-center mb-10">
                        <div className="inline-block py-2 px-4 bg-black text-white text-xs font-black uppercase tracking-widest mb-4">
                            30-DAY GROWTH SPRINT · ₦199,000
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight sm:tracking-tighter leading-[1.05] sm:leading-[0.95] mb-4">
                            Ready for marketing that brings customers?
                        </h2>
                        <p className="text-base sm:text-lg text-black font-medium max-w-lg mx-auto">
                            Fill out your details below. We review your business and reply within 24 hours.
                        </p>
                    </div>

                    {/* 3-STEP TILES */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                        <div className="bg-black text-white border-2 border-black p-3.5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[10px] font-black uppercase text-primary block">Step 01</span>
                            <span className="text-xs font-black uppercase text-white block">01 REVIEW</span>
                            <span className="text-[10px] text-gray-300 font-bold block">(we reply within 24 hours)</span>
                        </div>
                        <div className="bg-black text-white border-2 border-black p-3.5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[10px] font-black uppercase text-primary block">Step 02</span>
                            <span className="text-xs font-black uppercase text-white block">02 CONNECT</span>
                            <span className="text-[10px] text-gray-300 font-bold block">(free 15-minute fit chat on WhatsApp)</span>
                        </div>
                        <div className="bg-black text-white border-2 border-black p-3.5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-[10px] font-black uppercase text-primary block">Step 03</span>
                            <span className="text-xs font-black uppercase text-white block">03 KICKOFF</span>
                            <span className="text-[10px] text-gray-300 font-bold block">(Week 1 planning)</span>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-black p-5 sm:p-8 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-black">
                        {submitted ? (
                            <div className="text-center py-12 space-y-6">
                                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center mx-auto mb-4 border-2 border-black">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                                    Application Received!
                                </h3>
                                <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto leading-[1.6]">
                                    Thanks, {userFirstName}. We have your details and will reply within 24 hours on WhatsApp or email.
                                </p>
                                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href={WHATSAPP_PREFILLED_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={handleWhatsAppClick}
                                        className="w-full sm:w-auto px-6 py-4 min-h-[48px] bg-green-600 text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                                    >
                                        Chat with us on WhatsApp
                                    </a>
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({
                                                name: '',
                                                businessName: '',
                                                email: '',
                                                phone: '',
                                                businessCategory: '',
                                                marketingGoal: '',
                                                adBudget: ''
                                            });
                                        }}
                                        className="w-full sm:w-auto px-6 py-4 min-h-[48px] bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center"
                                    >
                                        Submit another response
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                                
                                {/* Honeypot spam prevention (hidden from real users) */}
                                <input 
                                    type="text" 
                                    name="_gotcha" 
                                    tabIndex={-1} 
                                    autoComplete="off"
                                    value={honeypot} 
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    style={{ display: 'none' }}
                                    aria-hidden="true"
                                />

                                {submitError && (
                                    <div className="p-4 bg-red-50 border-2 border-red-500 text-red-700 text-sm font-bold flex items-start gap-2">
                                        <XCircle size={18} className="shrink-0 mt-0.5" />
                                        <span>{submitError}</span>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                            Your Name <span className="text-primary">*</span>
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
                                            Business Name <span className="text-primary">*</span>
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
                                            Email <span className="text-primary">*</span>
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
                                            WhatsApp / Phone <span className="text-primary">*</span>
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

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                            Business Category <span className="text-primary">*</span>
                                        </label>
                                        <select
                                            name="businessCategory"
                                            required
                                            value={formData.businessCategory}
                                            onChange={handleInputChange}
                                            className="w-full min-h-[48px] bg-gray-50 border border-gray-300 p-3.5 sm:p-4 text-black font-medium focus:outline-none focus:border-black transition-colors text-base"
                                        >
                                            <option value="" disabled>Select category</option>
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
                                            Ad Budget <span className="text-primary">*</span>
                                        </label>
                                        <select
                                            name="adBudget"
                                            required
                                            value={formData.adBudget}
                                            onChange={handleInputChange}
                                            className="w-full min-h-[48px] bg-gray-50 border border-gray-300 p-3.5 sm:p-4 text-black font-medium focus:outline-none focus:border-black transition-colors text-base"
                                        >
                                            <option value="" disabled>Select ad budget</option>
                                            <option value="₦50,000 to ₦100,000">₦50,000 to ₦100,000</option>
                                            <option value="₦100,000 to ₦150,000">₦100,000 to ₦150,000</option>
                                            <option value="Above ₦150,000">Above ₦150,000</option>
                                            <option value="Not sure yet">Not sure yet</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">
                                        Primary Goal For This Month <span className="text-primary">*</span>
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
                                        className="w-full min-h-[52px] py-4 bg-black text-white font-black text-base md:text-lg uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,94,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "PROCESSING..." : "Book your sprint →"}
                                    </button>
                                    <span className="block text-center text-xs text-gray-500 font-medium mt-3">
                                        Takes 2 minutes. We reply within 24 hours.
                                    </span>
                                </div>

                                <div className="text-center pt-2">
                                    <p className="text-xs text-gray-500 font-medium">
                                        We never share your details.
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-gray-200 text-center">
                                    <a
                                        href={WHATSAPP_PREFILLED_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={handleWhatsAppClick}
                                        className="w-full min-h-[48px] py-3 px-4 bg-gray-100 hover:bg-gray-200 text-black text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 border border-gray-300"
                                    >
                                        Prefer WhatsApp? Chat with us
                                    </a>
                                </div>

                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* STICKY BOTTOM BAR (MOBILE ONLY) */}
            {showSticky && (
                <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-black p-3 px-4 sm:px-6 flex items-center justify-between shadow-lg">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary block leading-none mb-0.5">
                            30-day sprint
                        </span>
                        <span className="text-sm sm:text-base font-black text-black leading-tight block">
                            ₦199,000 · 30-day sprint
                        </span>
                    </div>
                    <button
                        onClick={scrollToForm}
                        className="px-4 sm:px-5 py-2.5 min-h-[48px] bg-primary text-white text-xs font-black uppercase tracking-widest hover:bg-black transition-colors border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0 flex items-center justify-center"
                    >
                        Book your sprint
                    </button>
                </div>
            )}

            {/* MINIMAL FOOTER */}
            <footer className="py-12 sm:py-16 pb-28 sm:pb-32 md:pb-16 bg-black text-white border-t border-gray-900">
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
                                Product Marketing · Growth Strategy · Campaigns
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-wider">
                            <Link to="/" className="hover:text-primary transition-colors">Website</Link>
                            <a 
                                href="https://www.instagram.com/loftybrandsng/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-primary transition-colors"
                            >
                                Instagram
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/lofty-brands/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-primary transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a 
                                href={WHATSAPP_PREFILLED_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleWhatsAppClick}
                                className="hover:text-primary transition-colors"
                            >
                                WhatsApp
                            </a>
                            <a 
                                href="mailto:loftybrands@gmail.com" 
                                className="text-primary hover:text-white transition-colors"
                            >
                                loftybrands@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500 gap-4">
                        <span>&copy; {new Date().getFullYear()} Lofty Brands. All rights reserved.</span>
                        <span>30-Day Growth Sprint</span>
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
                                    Campaign Report
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
                                    Close
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
