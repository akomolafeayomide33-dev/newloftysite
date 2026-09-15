import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (id) => {
        if (location.pathname === '/') {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(`/#${id}`);
        }
    };

    return (
        <footer className="bg-black text-white py-20 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    <div className="max-w-md">
                        <Link to="/" className="mb-6 block">
                            <img src="/lofty-logo-footer.png" alt="Lofty Brands" className="h-16 md:h-20 w-auto object-contain object-left max-w-[320px]" />
                        </Link>
                        <p className="text-gray-400 text-base font-bold uppercase tracking-widest mb-4">
                            Growth Consultancy & Systems Design
                        </p>
                        <div className="space-y-2 text-sm font-bold text-gray-300">
                            <p>
                                Email: <a href="mailto:loftybrands@gmail.com" className="text-white hover:text-primary transition-colors">loftybrands@gmail.com</a>
                            </p>
                            <p>
                                Phone / WhatsApp: <a href="https://wa.me/2348160735987" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">+234 816 073 5987</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-16">
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-gray-500 mb-6 text-sm">Navigation</h4>
                            <ul className="space-y-4 font-bold">
                                <li><button onClick={() => handleScroll('agency')} className="hover:text-primary transition-colors uppercase">Agency</button></li>
                                <li><button onClick={() => handleScroll('services')} className="hover:text-primary transition-colors uppercase">Services</button></li>
                                <li><button onClick={() => handleScroll('work')} className="hover:text-primary transition-colors uppercase">Work</button></li>
                                <li><Link to="/fellowship" className="hover:text-primary transition-colors uppercase">Fellowship</Link></li>
                                <li><button onClick={() => handleScroll('contact')} className="hover:text-primary transition-colors uppercase">Contact</button></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-gray-500 mb-6 text-sm">Legal</h4>
                            <ul className="space-y-4 font-bold">
                                <li><Link to="/privacy" className="hover:text-primary transition-colors uppercase">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="hover:text-primary transition-colors uppercase">Terms of Service</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-gray-500 mb-6 text-sm">Connect</h4>
                            <div className="flex gap-4">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full hover:bg-primary hover:text-white transition-all"><Linkedin size={18} /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-gray-900 text-center text-gray-500 font-bold uppercase text-xs tracking-widest">
                    &copy; 2026 Lofty Brands. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
