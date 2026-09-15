import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';

const blogPosts = {
    'the-death-of-traditional-seo-why-velocity-matters': {
        title: "The Death of Traditional SEO: Why Velocity Matters",
        date: "Oct 12, 2025",
        category: "Strategy",
        content: `
            <p class="lead font-bold text-2xl text-black">Most agencies play it safe. They optimize for "best practices" that were outdated three years ago. At Lofty, we optimize for velocity.</p>
            <p>The old SEO playbook was about static keywords and backlinks. The new playbook is about content velocity and authority signals. Google's core updates now favor brands that publish high-quality, relevant content at scale.</p>
            <h3>Volume is a Quality Signal</h3>
            <p>If you post once a month, you are invisible. High-growth brands behave like media companies. They dominate the search results by covering every angle of their niche.</p>
            <blockquote>"If you aren't embarrassing yourself with your first version launch, you launched too late." – Reid Hoffman</blockquote>
            <p>We've seen clients double their organic traffic simply by increasing their publishing cadence from weekly to daily. It's not magic; it's math.</p>
        `
    },
    'scaling-to-series-b-a-cmos-playbook': {
        title: "Scaling to Series B: A CMO's Playbook",
        date: "Sep 28, 2025",
        category: "Growth",
        content: `
            <p class="lead font-bold text-2xl text-black">Crossing the chasm from Series A to Series B is where most startups die. Here is how to survive.</p>
            <p>We took Fintech giant 'Novus' from $1M to $10M ARR in 8 months. The secret wasn't a viral hack. It was a disciplined execution of three core growth loops.</p>
            <h3>1. The Paid Acquisition Loop</h3>
            <p>We stopped optimizing for cheap clicks and started optimizing for LTV. This meant higher CAC, but much higher retention.</p>
            <h3>2. The Referral Loop</h3>
            <p>We built viral mechanics directly into the product onboarding workflow, turning every new user into a promoter.</p>
            <p>Scale requires systems, not just sparks.</p>
        `
    },
    'conversion-rate-optimization-is-a-myth': {
        title: "Conversion Rate Optimization is a Myth",
        date: "Sep 15, 2025",
        category: "Analytics",
        content: `
            <p class="lead font-bold text-2xl text-black">Stop tweaking button colors. It doesn't matter.</p>
            <p>We ran 500+ A/B tests last year. Do you know what had the biggest impact? It wasn't the color of the CTA. It was the Offer.</p>
            <h3>The Offer is King</h3>
            <p>If your conversion rate is low, your offer is likely weak. No amount of design tweaking can fix a bad product-market fit or a confusing value proposition.</p>
            <p>Focus on making your offer irresistible. Verify your positioning. Then, and only then, worry about the button color.</p>
        `
    }
};

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts[slug];

    if (!post) {
        return (
            <section className="pt-32 pb-24 bg-white min-h-screen">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Link to="/blog" className="text-primary font-bold mb-4 block">Back to Intel</Link>
                    <h1 className="text-4xl font-black">Article Not Found</h1>
                </div>
            </section>
        );
    }

    return (
        <section className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link to="/blog" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-gray-500 mb-8 hover:text-primary transition-colors">
                    <ArrowLeft size={16} /> Back to Intel
                </Link>

                <div className="mb-12">
                    <div className="flex items-center gap-6 mb-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                        <span className="flex items-center gap-2"><User size={16} className="text-primary" /> Strategy Team</span>
                        <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-8 leading-tight">
                        {post.title}
                    </h1>
                </div>

                <div className="prose prose-xl prose-headings:font-black prose-headings:uppercase prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary prose-img:rounded-xl" dangerouslySetInnerHTML={{ __html: post.content }} />

                <div className="mt-16 pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="font-bold uppercase tracking-widest">Share this intel</span>
                    <div className="flex gap-4">
                        <button
                            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                            className="p-3 border-2 border-black hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1"
                            title="Share on LinkedIn"
                        >
                            <Linkedin size={20} />
                        </button>
                        <button
                            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`, '_blank')}
                            className="p-3 border-2 border-black hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white transition-all transform hover:-translate-y-1"
                            title="Share on Twitter"
                        >
                            <Twitter size={20} />
                        </button>
                        <button
                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                            className="p-3 border-2 border-black hover:bg-[#4267B2] hover:border-[#4267B2] hover:text-white transition-all transform hover:-translate-y-1"
                            title="Share on Facebook"
                        >
                            <Facebook size={20} />
                        </button>
                        <button
                            onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, '_blank')}
                            className="p-3 border-2 border-black hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all transform hover:-translate-y-1"
                            title="Share on WhatsApp"
                        >
                            <WhatsAppIcon size={20} />
                        </button>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert('Link copied to clipboard!');
                            }}
                            className="p-3 border-2 border-black hover:bg-black hover:text-white transition-all transform hover:-translate-y-1"
                            title="Copy Link"
                        >
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhatsAppIcon = ({ size = 20 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 1h4a.5.5 0 0 0 1-1V9a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v1z" stroke="none" />
        {/* The above path is generic, let's use a proper brand path if possible, or stick to a clean phone-like path */}
        {/* Actually, let's use a standard path for WhatsApp logo */}
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.694.249-1.289.173-1.418-.074-.125-.272-.2-.572-.35z" fill="currentColor" stroke="none" />
    </svg>
);

export default BlogPost;
