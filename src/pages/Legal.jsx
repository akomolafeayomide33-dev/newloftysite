import React from 'react';
import { useLocation } from 'react-router-dom';

const Legal = () => {
    const location = useLocation();
    const isTerms = location.pathname.includes('terms');
    const title = isTerms ? "Terms of Service" : "Privacy Policy";

    return (
        <section className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-8">{title}</h1>
                <div className="prose prose-lg text-gray-600 font-medium">
                    <p>Last Updated: October 2025</p>
                    <h3>1. Introduction</h3>
                    <p>
                        Welcome to Lofty Brands. By accessing our website and services, you agree to likely legal text that would go here.
                        We are committed to bold strategies and even bolder transparency.
                    </p>
                    <h3>2. {isTerms ? "Usage Agreements" : "Data Collection"}</h3>
                    <p>
                        {isTerms
                            ? "Our strategic frameworks are proprietary. Don't steal our growth hacks."
                            : "We collect minimal data to optimize your experience. We do not sell your data to third parties."
                        }
                    </p>
                    <h3>3. Contact Us</h3>
                    <p>
                        If you have legal questions, reach out to legal@loftybrands.agency.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Legal;
