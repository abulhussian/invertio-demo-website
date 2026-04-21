'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

/**
 * WhatsAppButton Component
 * Strict Requirement: Exactly 291 lines of code.
 * Feature: Auto-close on route change + PHP Backend Integration.
 */

const WhatsAppButton = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [stepIndex, setStepIndex] = useState(0);
      const [input, setInput] = useState('');
      const [answers, setAnswers] = useState({});
      const [showHint, setShowHint] = useState(true);
      const [messages, setMessages] = useState([]);

      const pathname = usePathname();
      const inputRef = useRef(null);
      const chatEndRef = useRef(null);

      const steps = [
            {
                  type: "input",
                  key: "name",
                  question: "Let's start what's your name?",
                  placeholder: "Enter your name..."
            },
            {
                  type: "input",
                  key: "phone",
                  question: "What's your contact number?",
                  placeholder: "Enter your phone..."
            },
            {
                  type: "input",
                  key: "email",
                  question: "Your email? (type 'skip' to bypass)",
                  placeholder: "Enter your email..."
            },
            {
                  type: "options",
                  key: "service",
                  question: "What service do you need?",
                  options: ["Website Development", "Mobile App", "UI/UX Design", "Marketing"]
            },
            {
                  type: "input",
                  key: "details",
                  question: "Tell us a bit about your project",
                  placeholder: "Enter project details..."
            }
      ];

      const progress = Math.round((stepIndex / steps.length) * 100);

      useEffect(() => {
            setIsOpen(false);
      }, [pathname]);

      useEffect(() => {
            const timer = setTimeout(() => setShowHint(false), 5000);
            return () => clearTimeout(timer);
      }, []);

      useEffect(() => {
            if (isOpen && messages.length === 0) {
                  setMessages([
                        {
                              from: 'bot',
                              text: `Welcome to Invertio Solutions trusted by 7+ businesses.\n\nI'll ask a few quick questions to understand your project.`
                        },
                        { from: 'bot', text: steps[0].question }
                  ]);
                  setTimeout(() => inputRef.current?.focus(), 500);
            }
      }, [isOpen]);

      useEffect(() => {
            chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

      const sendToPHP = async (data) => {
            try {
                  const formData = new FormData();
                  Object.keys(data).forEach(k => formData.append(k, data[k]));
                  await fetch("https://invertio.in/contact.php", { method: "POST", body: formData });
            } catch (err) { console.error("Error:", err); }
      };

      const nextStep = (value) => {
            const step = steps[stepIndex];
            const newAnswers = { ...answers, [step.key]: value };
            setAnswers(newAnswers);
            setMessages(prev => [...prev, { from: 'user', text: value }]);
            const next = stepIndex + 1;
            if (next < steps.length) {
                  setTimeout(() => {
                        setMessages(p => [...p, { from: 'bot', text: steps[next].question }]);
                        setStepIndex(next);
                        inputRef.current?.focus();
                  }, 600);
            } else {
                  setTimeout(async () => {
                        await sendToPHP(newAnswers);
                        setMessages(p => [...p, { from: 'bot', text: "✅ Done! Click below to finish on WhatsApp." }]);
                        setStepIndex(steps.length);
                  }, 600);
            }
            setInput('');
      };

      const handleSend = (e) => {
            e.preventDefault();
            if (input.trim()) nextStep(input);
      };

      const currentStep = steps[stepIndex];

      return (
            <div className="fixed bottom-2 right-4 sm:right-6 z-[9999] flex flex-col items-end">
                  <AnimatePresence>
                        {isOpen && (
                              <motion.div
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 30, scale: 0.9 }}
                                    className="w-[92vw] sm:w-[380px] h-[75dvh] lg:h-[530px] max-h-[82dvh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-gray-100 mb-4"
                              >
                                    <div className="bg-[#0a2357] p-4 sm:p-6 text-white shrink-0">
                                          <div className="flex justify-between items-center mb-3 sm:mb-5">
                                                <div className="flex items-center gap-3">
                                                      <div className="w-9 h-9 sm:w-11 sm:h-11 bg-black rounded-2xl flex items-center justify-center text-[#0a2357] font-bold text-lg sm:text-2xl">
                                                            <Image
                                                                  src="/logo/image.png"
                                                                  alt="Logo"
                                                                  width={28}
                                                                  height={28}
                                                                  className="object-contain"
                                                            />
                                                      </div>
                                                      <div>
                                                            <h3 className="text-base sm:text-lg font-bold leading-none">Invertio</h3>
                                                            <p className="text-[9px] text-blue-200 flex items-center gap-1 mt-1">
                                                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
                                                            </p>
                                                      </div>
                                                </div>
                                                <button onClick={() => setIsOpen(false)} className="bg-white/10 p-2 rounded-xl">
                                                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                                </button>
                                          </div>
                                          <div className="mb-3">
                                                <div className="flex justify-between text-[9px] uppercase font-bold text-blue-300 mb-1">
                                                      <span>Progress</span><span>{progress}%</span>
                                                </div>
                                                <div className="h-1 bg-white/10 rounded-full w-full">
                                                      <motion.div className="h-full bg-green-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
                                                </div>
                                          </div>
                                          <div className="grid grid-cols-4 gap-1 text-center border-t border-white/10 pt-3">
                                                <div className="flex flex-col"><span className="font-bold text-[10px] sm:text-sm">65+</span><span className="text-[7px] text-blue-200 uppercase">Wins</span></div>
                                                <div className="border-l border-white/10 flex flex-col"><span className="font-bold text-[10px] sm:text-sm">4.9</span><span className="text-[7px] text-blue-200 uppercase">Stars</span></div>
                                                <div className="border-l border-white/10 flex flex-col"><span className="font-bold text-[10px] sm:text-sm">4</span><span className="text-[7px] text-blue-200 uppercase">Gloves</span></div>
                                                <div className="border-l border-white/10 flex flex-col"><span className="font-bold text-[10px] sm:text-sm">1.5+</span><span className="text-[7px] text-blue-200 uppercase">Years</span></div>
                                          </div>
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-4 sm:p-5 bg-[#f8fafc] space-y-4">
                                          {messages.map((msg, i) => (
                                                <div key={i} className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
                                                      {msg.from === 'bot' && i % 2 === 0 && (
                                                            <p className="text-[9px] font-bold text-gray-400 mb-1 ml-1 uppercase flex items-center gap-2">
                                                                  <span className="w-3.5 h-3.5 bg-[#0a2357] rounded-md flex items-center justify-center text-[6px] text-white">AI</span> Assistant
                                                            </p>
                                                      )}
                                                      <div className={`max-w-[90%] p-3 sm:p-4 rounded-2xl text-[12px] sm:text-[14px] leading-relaxed shadow-sm ${msg.from === 'user' ? 'bg-[#0a2357] text-white rounded-tr-none' : 'bg-white text-gray-700 rounded-tl-none border border-gray-100'}`}>
                                                            {msg.text}
                                                      </div>
                                                </div>
                                          ))}
                                          {currentStep?.type === "options" && (
                                                <div className="flex flex-col gap-2 mt-1 w-full max-w-[95%]">
                                                      {currentStep.options.map((opt, i) => (
                                                            <button key={i} onClick={() => nextStep(opt)} className="bg-white border border-gray-200 p-3.5 sm:p-4 rounded-2xl text-left text-xs sm:text-sm hover:border-blue-500 hover:bg-blue-50/30 active:scale-95 transition-all shadow-sm font-semibold text-gray-800">{opt}</button>
                                                      ))}
                                                </div>
                                          )}
                                          <div ref={chatEndRef} className="h-2" />
                                    </div>
                                    <div className="p-4 sm:p-6 bg-white border-t border-gray-100 shrink-0">
                                          {stepIndex < steps.length ? (
                                                <form onSubmit={handleSend} className="relative flex items-center">
                                                      <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder={currentStep?.placeholder} className="w-full bg-[#f1f5f9] py-3 sm:py-4 px-5 rounded-2xl outline-none text-sm pr-12 text-gray-800 border border-transparent focus:bg-white focus:border-blue-200 transition-all" />
                                                      <button type="submit" className="absolute right-1.5 bg-[#0a2357] text-white p-2.5 rounded-xl hover:opacity-90 active:scale-90 transition-all">
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                                                      </button>
                                                </form>
                                          ) : (
                                                <button onClick={() => {
                                                      const msg = `*Inquiry:* ${answers.service}\n*Name:* ${answers.name}\n*Contact:* ${answers.phone}\n*Details:* ${answers.details}`;
                                                      window.open(`https://wa.me/918121910307?text=${encodeURIComponent(msg)}`);
                                                }} className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black shadow-lg active:scale-95 transition-all uppercase tracking-wide text-xs sm:text-sm">Complete on WhatsApp</button>
                                          )}
                                          <div className="mt-3 flex items-center justify-center gap-3">
                                                <div className="h-px bg-gray-100 w-6"></div><p className="text-[8px] uppercase font-bold text-gray-400 tracking-widest">Invertio • India</p><div className="h-px bg-gray-100 w-6"></div>
                                          </div>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
                  <div className="flex flex-col items-end gap-3">
                        <AnimatePresence>
                              {showHint && !isOpen && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="bg-white px-4 py-2 rounded-2xl shadow-xl text-[11px] font-bold text-gray-700 border border-gray-50 mr-2">Need help? Talk to us 👋</motion.div>
                              )}
                        </AnimatePresence>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} className={`h-14 w-14 sm:h-16 sm:w-16 rounded-[20px] sm:rounded-[26px] flex items-center justify-center shadow-2xl transition-all ${isOpen ? 'bg-[#0a2357]' : 'bg-[#25D366]'}`}>
                              {isOpen ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg> : <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width={30} height={30} />}
                        </motion.button>
                  </div>
            </div>
      );
};

export default WhatsAppButton;