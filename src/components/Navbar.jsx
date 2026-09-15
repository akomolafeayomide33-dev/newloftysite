import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { useModal } from '../context/ModalContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { openModal } = useModal();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check for hash on mount to scroll
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const isHome = location.pathname === '/';

    const scrollToSection = (id) => {
        setIsOpen(false);
        if (isHome) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(`/#${id}`);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white py-4 border-b border-black' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="block flex-shrink-0 py-1">
                    <img src="/lofty-logo-header.png" alt="Lofty Brands" className="h-14 md:h-16 w-auto object-contain object-left max-w-[280px]" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {isHome ? (
                        <>
                            {['Expertise', 'Work', 'Agency', 'Contact'].map((item) => (
                                <button key={item} onClick={() => scrollToSection(item === 'Expertise' ? 'services' : item.toLowerCase())} className="text-black hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
                                    {item}
                                </button>
                            ))}
                        </>
                    ) : (
                        <Link to="/" className="text-black hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
                            Back to Home
                        </Link>
                    )}

                    <Link to="/blog" className="text-black hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
                        Insights
                    </Link>
                    <Link to="/fellowship" className="text-black hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">
                        Fellowship
                    </Link>
                    <button onClick={openModal} className="px-6 py-3 bg-primary text-white font-black uppercase tracking-widest hover:bg-black transition-colors text-xs shadow-md">
                        BOOK A GROWTH AUDIT
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white absolute w-full top-full left-0 border-b-4 border-primary shadow-xl">
                    <div className="flex flex-col p-8 space-y-6">
                        <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase text-black hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link to="/blog" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase text-black hover:text-primary transition-colors">
                            Insights
                        </Link>
                        <Link to="/fellowship" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase text-black hover:text-primary transition-colors">
                            Fellowship
                        </Link>
                        <button onClick={() => { setIsOpen(false); openModal(); }} className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest text-sm">
                            BOOK A GROWTH AUDIT
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

