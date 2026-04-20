'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [userInput, setUserInput] = useState('');
      const [showLabel, setShowLabel] = useState(false);

      useEffect(() => {
            const timer = setTimeout(() => setShowLabel(true), 3000);
            return () => clearTimeout(timer);
      }, []);

      const PHONE_NUMBER = "9949443882";

      const handleSendMessage = (e) => {
            e.preventDefault();
            if (!userInput.trim()) return;

            const message = `Hi Invertio Team, ${userInput}`;
            const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank');
            setUserInput('');
            setIsOpen(false);
      };

      return (
            <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end font-sans">

                  {/* On-site Chat Window */}
                  <AnimatePresence>
                        {isOpen && (
                              <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                    className="mb-6 w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                              >
                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-[#0f0f0f] to-[#262626] p-5 border-b border-white/5">
                                          <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                                            <span className="text-emerald-500 font-bold text-xl">I</span>
                                                            <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-[#1a1a1a] bg-emerald-500"></div>
                                                      </div>
                                                      <div>
                                                            <h3 className="text-sm font-semibold text-white uppercase tracking-tight">Invertio Support</h3>
                                                            <p className="text-[10px] uppercase tracking-widest text-emerald-500/80 font-medium">Consultant Online</p>
                                                      </div>
                                                </div>
                                                <button
                                                      onClick={() => setIsOpen(false)}
                                                      className="text-gray-400 hover:text-white transition-colors p-1"
                                                >
                                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M18 6L6 18M6 6l12 12" />
                                                      </svg>
                                                </button>
                                          </div>
                                    </div>

                                    {/* Chat Body */}
                                    <div className="h-40 bg-black/20 p-5 overflow-y-auto">
                                          <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white/5 p-4 text-sm text-gray-300 border border-white/5">
                                                Hello! Looking for AI consulting or enterprise solutions? Type your message below to chat with our team.
                                          </div>
                                    </div>

                                    {/* Input Footer */}
                                    <form onSubmit={handleSendMessage} className="p-4 bg-white/5 backdrop-blur-md flex items-center gap-3">
                                          <input
                                                type="text"
                                                value={userInput}
                                                onChange={(e) => setUserInput(e.target.value)}
                                                placeholder="How can we help?"
                                                className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                          />
                                          <button
                                                type="submit"
                                                className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all"
                                          >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                      <line x1="22" y1="2" x2="11" y2="13"></line>
                                                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                                </svg>
                                          </button>
                                    </form>
                              </motion.div>
                        )}
                  </AnimatePresence>

                  {/* Trigger Button Group */}
                  <div className="flex items-center">
                        {!isOpen && (
                              <div className={`mr-4 transition-all duration-700 ${showLabel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                                    <div className="bg-[#1a1a1a] px-5 py-2.5 rounded-full border border-white/10 shadow-2xl backdrop-blur-md">
                                          <p className="text-[10px] font-bold text-gray-300 tracking-[0.15em] uppercase">Consult an Expert</p>
                                    </div>
                              </div>
                        )}

                        <button
                              onClick={() => setIsOpen(!isOpen)}
                              className={`group relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-500 ${isOpen ? 'bg-white/10 border border-white/20' : 'bg-[#0f0f0f] border border-emerald-500/30'
                                    }`}
                        >
                              {isOpen ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="rotate-0 transition-transform duration-300">
                                          <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                              ) : (
                                    <>
                                          <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-pulse group-hover:bg-emerald-500/20" />
                                          <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                                alt="WhatsApp"
                                                width={32}
                                                height={32}
                                                className="brightness-110"
                                          />
                                    </>
                              )}
                        </button>
                  </div>
            </div>
      );
};

export default WhatsAppButton;