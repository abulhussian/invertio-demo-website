'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [stepIndex, setStepIndex] = useState(0);
      const [input, setInput] = useState('');
      const [answers, setAnswers] = useState({});
      const [showHint, setShowHint] = useState(true);
      const [messages, setMessages] = useState([]);

      const inputRef = useRef(null);
      const chatEndRef = useRef(null);

      const steps = [
            { type: "input", key: "name", question: "Let's start what's your name?", placeholder: "Enter your name..." },
            { type: "input", key: "phone", question: "What's your contact number?", placeholder: "Enter your phone..." },
            { type: "input", key: "email", question: "Your email? (type 'skip' to bypass)", placeholder: "Enter your email..." },
            {
                  type: "options",
                  key: "service",
                  question: "What service do you need?",
                  options: ["Website Development", "Mobile App", "UI/UX Design", "Marketing"]
            },
            { type: "input", key: "details", question: "Tell us a bit about your project", placeholder: "Enter project details..." }
      ];

      const progress = Math.round((stepIndex / steps.length) * 100);

      useEffect(() => {
            const timer = setTimeout(() => {
                  setShowHint(false);
            }, 5000);

            return () => clearTimeout(timer);
      }, []);

      useEffect(() => {
            if (isOpen && messages.length === 0) {
                  setMessages([
                        {
                              from: 'bot',
                              text: `Welcome to Nakshatra Namaha Creations trusted by 565+ businesses across 4 countries.\n\nI'll ask you a few quick questions to understand your project. It takes less than 2 minutes.`
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

                  formData.append("name", data.name);
                  formData.append("email", data.email);
                  formData.append("phone", data.phone);
                  formData.append("service", data.service);

                  formData.append(
                        "message",
                        `
Details:
${data.details}
      `
                  );

                  const res = await fetch("https://invertio.in/contact.php", {
                        method: "POST",
                        body: formData,
                  });

                  const result = await res.json();
                  console.log("PHP Response:", result);

            } catch (err) {
                  console.error("API Error:", err);
            }
      };

      const nextStep = (value) => {
            const step = steps[stepIndex];
            setAnswers(prev => ({ ...prev, [step.key]: value }));
            setMessages(prev => [...prev, { from: 'user', text: value }]);

            const next = stepIndex + 1;
            if (next < steps.length) {
                  setTimeout(() => {
                        setMessages(prev => [...prev, { from: 'bot', text: steps[next].question }]);
                        setStepIndex(next);
                        inputRef.current?.focus();
                  }, 600);
            } else {
                  setTimeout(async () => {

                        // ✅ CALL API HERE
                        await sendToPHP({
                              ...answers,
                              [step.key]: value
                        });

                        setMessages(prev => [
                              ...prev,
                              { from: 'bot', text: "✅ Done! Click below to finish on WhatsApp." }
                        ]);

                        setStepIndex(steps.length);

                  }, 600);
            }
            setInput('');
      };

      const handleSend = (e) => {
            e.preventDefault();
            if (!input.trim()) return;
            nextStep(input);
      };
      const currentStep = steps[stepIndex];

      return (
            <div className="fixed bottom-4 right-6 z-[9999] font-sans flex flex-col items-end">
                  <AnimatePresence>
                        {isOpen && (
                              <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                    className="w-[380px] bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col border border-gray-100"
                              >
                                    {/* HEADER - DARK BLUE SECTION */}
                                    <div className="bg-[#0a2357] p-6 text-white relative">
                                          <div className="flex justify-between items-center mb-6">
                                                <div className="flex items-center gap-3">
                                                      <div className="w-12 h-10 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                                                            <div className="text-[#0a2357] font-bold text-2xl">M</div>
                                                      </div>
                                                      <div>
                                                            <h3 className="text-xl font-bold leading-tight">Invertio</h3>
                                                            <p className="text-xs text-blue-200 flex items-center gap-1">
                                                                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> Online 24/7
                                                            </p>
                                                      </div>
                                                </div>
                                                <button onClick={() => setIsOpen(false)} className="bg-white/10 p-2 rounded-xl hover:bg-white/20">
                                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                                </button>
                                          </div>

                                          {/* PROGRESS BAR */}
                                          <div className="mb-3">
                                                <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider mb-2 text-blue-200">
                                                      <span>Getting Started</span>
                                                      <span>{progress}%</span>
                                                </div>
                                                <div className="h-[3px] bg-white/10 rounded-full w-full">
                                                      <motion.div
                                                            className="h-full bg-green-500 rounded-full"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${progress}%` }}
                                                      />
                                                </div>
                                          </div>

                                          {/* HEADER STATS */}
                                          <div className="grid grid-cols-4 gap-2 text-center border-t border-white/10 pt-4">
                                                <div><p className="font-black text-sm">565+</p><p className="text-[9px] uppercase text-blue-200">Projects</p></div>
                                                <div className="border-l border-white/10"><p className="font-black text-sm">4.9★</p><p className="text-[9px] uppercase text-blue-200">Google</p></div>
                                                <div className="border-l border-white/10"><p className="font-black text-sm">4</p><p className="text-[9px] uppercase text-blue-200">Countries</p></div>
                                                <div className="border-l border-white/10"><p className="font-black text-sm">8+</p><p className="text-[9px] uppercase text-blue-200">Years</p></div>
                                          </div>
                                    </div>

                                    {/* CHAT BODY */}
                                    <div className="h-[260px] overflow-y-auto p-4 bg-[#f4f7f9] space-y-4">
                                          {messages.map((msg, i) => (
                                                <div key={i} className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
                                                      {msg.from === 'bot' && i % 2 === 0 && (
                                                            <p className="text-[10px] font-bold text-gray-400 mb-1 ml-2 flex items-center gap-1">
                                                                  <span className="w-5 h-5 bg-[#0a2357] rounded flex items-center justify-center text-[8px] text-white">I</span>
                                                                  Invertio Assistant
                                                            </p>
                                                      )}
                                                      <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${msg.from === 'user' ? 'bg-[#0a2357] text-white rounded-tr-none' : 'bg-white text-gray-700 rounded-tl-none'
                                                            }`}>
                                                            {msg.text}
                                                      </div>
                                                </div>
                                          ))}

                                          {currentStep?.type === "options" && (
                                                <div className="flex flex-col gap-2 mt-2">
                                                      {currentStep.options.map((opt, i) => (
                                                            <button key={i} onClick={() => nextStep(opt)} className="bg-white border border-gray-200 p-3 rounded-xl text-left text-sm hover:border-blue-500 transition-all">
                                                                  {opt}
                                                            </button>
                                                      ))}
                                                </div>
                                          )}
                                          <div ref={chatEndRef} />
                                    </div>

                                    {/* INPUT FOOTER */}
                                    <div className="p-5 bg-white border-t border-gray-100">
                                          {stepIndex < steps.length ? (
                                                <form onSubmit={handleSend} className="relative flex items-center">
                                                      <input
                                                            ref={inputRef}
                                                            value={input}
                                                            onChange={(e) => setInput(e.target.value)}
                                                            placeholder={currentStep?.placeholder}
                                                            className="w-full bg-[#f0f4f7] py-4 px-6 rounded-2xl outline-none text-sm pr-16 text-gray-700"
                                                      />
                                                      <button type="submit" className="absolute right-2 bg-[#0a2357] text-white p-3 rounded-xl shadow-lg hover:scale-105 transition-transform">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45)"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                                                      </button>
                                                </form>
                                          ) : (
                                                <button onClick={() => window.open('https://wa.me/918121910307')} className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold shadow-lg">
                                                      Continue on WhatsApp
                                                </button>
                                          )}

                                          <p className="text-[10px] text-center mt-4 font-medium tracking-wide text-black">
                                                • Hyderabad
                                          </p>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
                  <AnimatePresence>
                        {showHint && !isOpen && (
                              <motion.div
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 20, transition: { duration: 0.6, delay: 0.3 } }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white px-4 py-2 rounded-xl shadow-md text-xs text-gray-700 whitespace-nowrap"
                              >
                                    Chat with us 👋
                              </motion.div>
                        )}
                  </AnimatePresence>


                  {/* TOGGLE TRIGGER */}
                  <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`h-16 w-16 rounded-[22px] flex items-center justify-center shadow-2xl transition-all ${isOpen ? 'bg-green-500 text-white' : 'bg-green-500 text-white'
                              }`}
                  >
                        {isOpen ? (
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        ) : (
                              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width={32} height={32} />
                        )}
                  </motion.button>
            </div>
      );
};

export default WhatsAppButton;