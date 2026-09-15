import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const LeadModal = () => {
    const { isOpen, closeModal } = useModal();

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative bg-white w-full max-w-lg p-8 md:p-12 border-4 border-primary shadow-2xl"
                    >
                        <button onClick={closeModal} className="absolute top-4 right-4 text-black hover:text-primary transition-colors">
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter mb-2">
                            BOOK A GROWTH AUDIT
                        </h2>
                        <p className="text-gray-600 font-bold mb-8">
                            Fill out the form below to secure your audit slot.
                        </p>

                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
                            <div>
                                <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Name</label>
                                <input type="text" className="w-full bg-gray-50 border-2 border-black p-3 font-bold focus:outline-none focus:bg-white focus:border-primary transition-colors text-black" placeholder="YOUR NAME" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Company</label>
                                <input type="text" className="w-full bg-gray-50 border-2 border-black p-3 font-bold focus:outline-none focus:bg-white focus:border-primary transition-colors text-black" placeholder="YOUR COMPANY" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Primary Goal</label>
                                <select className="w-full bg-gray-50 border-2 border-black p-3 font-bold focus:outline-none focus:bg-white focus:border-primary transition-colors text-black">
                                    <option>Growth Strategy</option>
                                    <option>Customer Acquisition</option>
                                    <option>Paid Advertising</option>
                                    <option>Marketing Systems</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest hover:bg-black transition-colors flex justify-center items-center gap-2 mt-4 shadow-md">
                                REQUEST AUDIT <ArrowRight size={20} strokeWidth={3} />
                            </button>
                        </form>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadModal;
