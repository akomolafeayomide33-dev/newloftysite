import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const Contact = () => {
    const { openModal } = useModal();
    return (
        <section id="contact" className="py-32 bg-primary text-white relative overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Info Side */}
                    <div>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
                            Let's <br />
                            <span className="text-black">Build Momentum.</span>
                        </h2>
                        <p className="text-black text-2xl font-bold mb-12 max-w-md leading-tight">
                            Ready to grow with clarity, speed, and control?
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 mb-16">
                            <button onClick={openModal} className="px-8 py-4 bg-black text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                BOOK A GROWTH AUDIT
                            </button>
                            <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-transparent border-2 border-black text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                                View Case Studies
                            </button>
                        </div>

                        <div className="space-y-8">
                            <a href="mailto:loftybrands@gmail.com" className="flex items-start gap-6 group cursor-pointer">
                                <div className="p-4 bg-black text-white group-hover:bg-white group-hover:text-primary transition-colors">
                                    <Mail size={32} />
                                </div>
                                <div>
                                    <h4 className="text-black font-black uppercase tracking-widest text-sm mb-1">Inquiries</h4>
                                    <p className="text-black text-2xl md:text-3xl font-black tracking-tight hover:text-white transition-colors">loftybrands@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://wa.me/2348160735987" target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group cursor-pointer">
                                <div className="p-4 bg-black text-white group-hover:bg-white group-hover:text-primary transition-colors">
                                    <Phone size={32} />
                                </div>
                                <div>
                                    <h4 className="text-black font-black uppercase tracking-widest text-sm mb-1">Phone / WhatsApp</h4>
                                    <p className="text-black text-2xl md:text-3xl font-black tracking-tight hover:text-white transition-colors">+234 816 073 5987</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white p-8 md:p-12 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-black">
                        <h3 className="text-2xl md:text-3xl font-black text-black uppercase mb-8">REQUEST AUDIT</h3>
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); openModal(); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Name</label>
                                    <input type="text" className="w-full bg-gray-100 border-2 border-black p-4 text-black font-bold focus:outline-none focus:bg-white transition-colors" placeholder="YOUR NAME" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Company</label>
                                    <input type="text" className="w-full bg-gray-100 border-2 border-black p-4 text-black font-bold focus:outline-none focus:bg-white transition-colors" placeholder="YOUR BRAND" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Email</label>
                                <input type="email" className="w-full bg-gray-100 border-2 border-black p-4 text-black font-bold focus:outline-none focus:bg-white transition-colors" placeholder="YOU@COMPANY.COM" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Growth Goals</label>
                                <textarea rows="3" className="w-full bg-gray-100 border-2 border-black p-4 text-black font-bold focus:outline-none focus:bg-white transition-colors resize-none" placeholder="WHAT ARE YOUR GROWTH OBJECTIVES?" />
                            </div>

                            <button type="submit" className="w-full py-5 bg-black text-white font-black uppercase tracking-widest hover:bg-primary transition-all flex justify-center items-center gap-2 text-lg shadow-[4px_4px_0px_0px_rgba(255,94,0,1)] hover:shadow-none">
                                REQUEST AUDIT
                                <ArrowRight size={20} strokeWidth={3} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
