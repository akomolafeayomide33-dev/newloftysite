import React, { useState } from 'react';
import { Check, Calendar, Users, Zap, ArrowRight, BookOpen, Target, BarChart, Layers, PartyPopper } from 'lucide-react';

const Fellowship = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <div className="bg-background pt-20">
            {/* Hero Section */}
            <section className="py-20 md:py-32 px-6 border-b border-black">
                <div className="container mx-auto max-w-5xl">
                    <span className="inline-block py-2 px-4 border-2 border-black font-bold uppercase tracking-widest text-xs mb-8 bg-primary text-white">
                        Cohort 1 Applications Open
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        Lofty Growth Systems <br />
                        <span className="text-primary">Fellowship.</span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-black mb-12 max-w-3xl leading-tight">
                        Learn to think in structured growth systems and level up your digital marketing skills.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6">
                        <a
                            href="#apply"
                            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-black uppercase tracking-widest hover:bg-primary transition-colors text-lg"
                        >
                            Apply Now – Limited Seats
                            <ArrowRight className="ml-2" size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Section 1: Why This Fellowship */}
            <section className="py-20 md:py-32 px-6 border-b border-black bg-surface">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-8">
                                Why This <span className="text-stroke-black">Fellowship?</span>
                            </h2>
                            <p className="text-lg text-text-muted leading-relaxed font-medium">
                                Most digital marketing programs teach tactics. This fellowship teaches <span className="text-black font-bold">how to design growth systems that acquire, convert, and retain customers.</span>
                            </p>
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            {[
                                "Apply structured growth thinking to real brands",
                                "Learn from experienced marketers with proven results",
                                "Hands-on weekly assignments for practical experience"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="p-2 bg-primary text-white rounded-none border border-black shrink-0">
                                        <Check size={20} />
                                    </div>
                                    <p className="text-xl font-bold text-black uppercase">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Program Details */}
            <section className="py-20 px-6 border-b border-black">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Calendar, title: "Duration", desc: "6 Weeks, 1 session/week" },
                            { icon: Users, title: "Cohort Size", desc: "8–15 participants (Selective)" },
                            { icon: Layers, title: "Format", desc: "Live Sessions + Assignments" },
                            { icon: Zap, title: "Cost", desc: "Free Pilot Program" }
                        ].map((item, index) => (
                            <div key={index} className="border-2 border-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all bg-white">
                                <item.icon size={40} className="text-primary mb-6" />
                                <h3 className="text-2xl font-black uppercase mb-2">{item.title}</h3>
                                <p className="text-text-muted font-bold">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Weekly Curriculum */}
            <section className="py-20 md:py-32 px-6 border-b border-black bg-black text-white">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center text-white">
                        Weekly <span className="text-primary">Curriculum</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {[
                            { week: "01", title: "Growth Systems Thinking", desc: "Understanding the foundations of sustainable growth." },
                            { week: "02", title: "Acquisition Architecture", desc: "Designing scalable channels to acquire users." },
                            { week: "03", title: "Conversion & Revenue Mechanics", desc: "Optimizing the funnel for maximum value." },
                            { week: "04", title: "Retention & Community Loops", desc: "Keeping users engaged and building loyalty." },
                            { week: "05", title: "Metrics & Growth Discipline", desc: "Measuring what matters and ignoring the noise." },
                            { week: "06", title: "Capstone Project", desc: "Apply a complete growth system to a real scenario." }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-6 items-start border-b border-gray-800 pb-8">
                                <span className="text-4xl font-black text-primary opacity-50">{item.week}</span>
                                <div>
                                    <h3 className="text-2xl font-black uppercase mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Who Should Apply */}
            <section className="py-20 md:py-32 px-6 border-b border-black bg-surface">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
                        Who Should <span className="text-primary">Apply?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            "Aspiring digital marketers & recent graduates",
                            "Curious about growth beyond just ads & content",
                            "Willing to commit to 6 weeks of structured learning"
                        ].map((item, index) => (
                            <div key={index} className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <Target size={32} className="text-primary mb-4" />
                                <p className="font-bold text-lg uppercase leading-tight">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Application Form */}
            <section id="apply" className="py-20 md:py-32 px-6 bg-white">
                <div className="container mx-auto max-w-3xl">
                    {!isSubmitted ? (
                        <>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                                    Secure Your <span className="text-primary">Spot.</span>
                                </h2>
                                <p className="text-xl font-bold text-gray-600">
                                    Applications are open for Cohort 1. Only 15 spots available.
                                </p>
                            </div>

                            <form
                                className="space-y-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setIsSubmitting(true);
                                    const form = e.target;
                                    const data = new FormData(form);
                                    fetch("https://formspree.io/f/mvzwqjvl", {
                                        method: "POST",
                                        body: data,
                                        headers: {
                                            'Accept': 'application/json'
                                        }
                                    }).then(response => {
                                        setIsSubmitting(false);
                                        if (response.ok) {
                                            setIsSubmitted(true);
                                            form.reset();
                                        } else {
                                            alert("Oops! There was a problem submitting your application. Please try again.");
                                        }
                                    }).catch(error => {
                                        setIsSubmitting(false);
                                        alert("Oops! There was a problem submitting your application. Please try again.");
                                    });
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-black uppercase tracking-widest">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="Name"
                                            required
                                            className="w-full bg-surface border-2 border-black p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-black uppercase tracking-widest">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="Email"
                                            required
                                            className="w-full bg-surface border-2 border-black p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold"
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="reason" className="text-sm font-black uppercase tracking-widest">Why do you want to join?</label>
                                    <textarea
                                        id="reason"
                                        name="Reason for Joining"
                                        required
                                        rows={4}
                                        className="w-full bg-surface border-2 border-black p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium resize-none"
                                        placeholder="Tell us about your goals and what you hope to learn..."
                                    />
                                </div>

                                <div className="flex items-start gap-3 pt-2">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        name="Consent to Attendance"
                                        required
                                        className="mt-1 w-5 h-5 border-2 border-black rounded-none text-primary focus:ring-primary"
                                    />
                                    <label htmlFor="consent" className="text-sm font-bold text-gray-700">
                                        I commit to attending the weekly live sessions and completing the assignments.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-5 bg-black text-white font-black uppercase tracking-widest text-lg transition-colors mt-8 flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary'}`}
                                >
                                    {isSubmitting ? 'Processing...' : (
                                        <>
                                            Submit Application
                                            <ArrowRight size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-20 px-8 border-4 border-black bg-surface shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-white rounded-none border-2 border-black mb-8">
                                <PartyPopper size={40} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-6">
                                Application <span className="text-primary">Sent.</span>
                            </h2>
                            <p className="text-xl font-bold text-gray-700 mb-8 leading-tight">
                                We've received your application. Keep an eye on your inbox for the next steps!
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="px-8 py-4 bg-black text-white font-black uppercase tracking-widest hover:bg-primary transition-colors inline-block"
                            >
                                Back to Form
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Fellowship;
