import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const serviceContent = {
    'growth-strategy': {
        title: 'Growth Strategy',
        intro: 'For businesses that need clarity before investing more in marketing.',
        method: 'We conduct an in-depth audit of your current channels, messaging, and funnel metrics to uncover growth bottlenecks and untapped opportunities.',
        practice: 'We build an actionable roadmap defining target customer segments, channel priorities, messaging angles, and budget allocation to ensure sustainable business growth.',
        deliverables: ['Growth Systems Audit', 'Channel Prioritization', 'Strategic Roadmap', 'Budget & Impact Plan']
    },
    'paid-advertising': {
        title: 'Paid Advertising',
        intro: 'Launch and optimize Meta and Google campaigns that generate qualified leads and ROI.',
        method: 'We design high-converting ad creatives, copy variants, and audience targeting strategies tailored for Meta, Google, and LinkedIn.',
        practice: 'We continuously test and optimize campaign performance to lower customer acquisition costs (CAC) and maximize return on ad spend (ROAS).',
        deliverables: ['Campaign Setup & Structure', 'Ad Creative & Copywriting', 'Audience Targeting', 'ROAS & CAC Optimization']
    },
    'content-marketing': {
        title: 'Content Marketing',
        intro: 'Build authority and trust through strategic content that educates and converts.',
        method: 'We map out a strategic content architecture based on customer intent, search demand, and industry authority.',
        practice: 'We produce and distribute high-impact content assets across social, blog, and owned platforms to build brand equity and drive organic customer acquisition.',
        deliverables: ['Content Strategy Architecture', 'Editorial Calendar', 'Authority Asset Creation', 'Distribution & Engagement']
    },
    'brand-positioning': {
        title: 'Brand Positioning',
        intro: 'Clarify your message so customers instantly understand your value proposition.',
        method: 'We evaluate market competitors and customer perceptions to articulate your unique differentiator.',
        practice: 'We craft clear value propositions, messaging frameworks, and brand guidelines that resonate with high-value prospects across all touchpoints.',
        deliverables: ['Competitive Positioning', 'Value Proposition Framework', 'Messaging Playbook', 'Brand Story & Voice']
    },
    'marketing-systems': {
        title: 'Marketing Systems',
        intro: 'Design marketing systems, funnels, and automation that make growth predictable.',
        method: 'We map your end-to-end customer journey from initial discovery to conversion and retention.',
        practice: 'We implement automated CRM workflows, conversion-focused landing pages, lead scoring, and analytics dashboards for consistent, repeatable growth.',
        deliverables: ['Funnel Architecture', 'CRM & Marketing Automation', 'Conversion Optimization', 'Performance Analytics Dashboard']
    },
    'growth-partnership': {
        title: 'Growth Partnership',
        intro: 'Ongoing strategic marketing leadership for ambitious businesses.',
        method: 'We integrate with your leadership team as an embedded executive growth partner.',
        practice: 'We lead marketing strategy, oversee execution teams, analyze weekly performance data, and continuously steer tactics to achieve revenue targets.',
        deliverables: ['Fractional CMO Leadership', 'Weekly Growth Sprints', 'Execution Team Oversight', 'Executive Quarterly Review']
    }
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const { openModal } = useModal();

    const service = serviceContent[slug] || {
        title: 'Service Not Found',
        intro: 'The requested service could not be found.',
        method: '',
        practice: '',
        deliverables: []
    };

    return (
        <section className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <div className="inline-block py-2 px-4 bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs mb-6">
                        Service Deep Dive
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter mb-8 break-words">
                        {service.title}
                    </h1>
                    <p className="text-2xl font-bold text-gray-500 max-w-3xl leading-tight">
                        {service.intro}
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8">

                        {/* THE METHOD */}
                        <div className="mb-12">
                            <h3 className="text-3xl font-black text-black uppercase mb-6">The Method</h3>
                            <div className="prose prose-lg text-gray-600 font-medium">
                                <p>{service.method}</p>
                            </div>
                        </div>

                        {/* PRACTICE */}
                        <div className="mb-12">
                            <h3 className="text-3xl font-black text-black uppercase mb-6">How This Looks in Practice</h3>
                            <div className="prose prose-lg text-gray-600 font-medium">
                                <p>{service.practice}</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 border-l-4 border-primary mb-12">
                            <h4 className="text-xl font-black text-black uppercase mb-4">Key Deliverables</h4>
                            <ul className="space-y-3">
                                {service.deliverables.map(item => (
                                    <li key={item} className="flex items-center gap-3 font-bold text-black">
                                        <CheckCircle size={20} className="text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="bg-black text-white p-8 sticky top-32 shadow-[12px_12px_0px_0px_rgba(255,94,0,1)]">
                            <h4 className="text-2xl font-black uppercase mb-6">Ready to Scale?</h4>
                            <p className="text-gray-400 mb-8 font-medium">
                                Slots for our {service.title} engagement are limited. Book your strategy session today.
                            </p>
                            <button onClick={openModal} className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2">
                                Book Strategy Session <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;
