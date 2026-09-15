import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowUpRight, BarChart2, Target, Zap } from 'lucide-react';
import PakamCaseStudy from './PakamCaseStudy';
import CraftsquarreCaseStudy from './CraftsquarreCaseStudy';
import MenoHavenCaseStudy from './MenoHavenCaseStudy';

const caseStudies = {};

const CaseStudyDetail = () => {
    const { slug } = useParams();
    if (slug === 'pakam') return <PakamCaseStudy />;
    if (slug === 'craftsquarre') return <CraftsquarreCaseStudy />;
    if (slug === 'meno-haven') return <MenoHavenCaseStudy />;

    const study = caseStudies[slug] || {
        title: 'Case Study Not Found',
        tags: [],
        metrics: [],
        problem: "Content not found.",
        solution: [],
        result: "",
        testimonial: { quote: "", author: "" }
    };

    const getIcon = (name) => {
        switch (name) {
            case 'TrendingUp': return <TrendingUp size={32} />;
            case 'Target': return <Target size={32} />;
            case 'Zap': return <Zap size={32} />;
            default: return <BarChart2 size={32} />;
        }
    };

    if (!caseStudies[slug]) {
        return (
            <section className="pt-32 pb-24 bg-white min-h-screen">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-black uppercase">Case Study Not Found</h1>
                </div>
            </section>
        );
    }

    return (
        <section className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="border-b border-black pb-12 mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Case Study</span>
                    <h1 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        {study.title}
                    </h1>
                    <div className="flex flex-wrap gap-4">
                        {study.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 border-2 border-black font-bold uppercase text-xs hover:bg-black hover:text-white transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {study.metrics.map((stat, i) => (
                        <div key={i} className="p-8 bg-surface border-l-4 border-primary">
                            <div className="text-primary mb-4">{getIcon(stat.icon)}</div>
                            <div className="text-5xl font-black text-black mb-2">{stat.value}</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 prose prose-xl prose-headings:font-black prose-headings:uppercase prose-p:font-medium text-gray-800">
                        <h3>The Problem</h3>
                        <p>{study.problem}</p>

                        <h3>The Solution</h3>
                        <p>We implemented a strategic overhaul including:</p>
                        <ul>
                            {study.solution instanceof Array ? study.solution.map((item, i) => <li key={i}>{item}</li>) : <li>{study.solution}</li>}
                        </ul>

                        <h3>The Result</h3>
                        <p>{study.result}</p>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-black p-8 text-white">
                            <h4 className="text-xl font-bold uppercase mb-4">Client feedback</h4>
                            <p className="italic text-gray-300 mb-6">"{study.testimonial.quote}"</p>
                            <p className="font-bold text-primary uppercase text-sm">- {study.testimonial.author}</p>
                        </div>

                        <div className="border-2 border-black p-8 text-center">
                            <h4 className="text-xl font-black uppercase mb-4">See Previous</h4>
                            <a href="/#work" className="inline-flex items-center gap-2 font-bold hover:text-primary transition-colors">
                                View Project <ArrowUpRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Start: Helper component for icon (fix missing dependency in snippet)
const TrendingUp = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);
// End Helper

export default CaseStudyDetail;
