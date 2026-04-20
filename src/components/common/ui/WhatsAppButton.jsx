'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const WhatsAppButton = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [stepIndex, setStepIndex] = useState(0);
      const [input, setInput] = useState('');
      const [answers, setAnswers] = useState({});
      const [messages, setMessages] = useState([]);

      const steps = [
            { type: "input", key: "name", question: "Let’s start — what’s your name?" },
            { type: "input", key: "phone", question: "What’s your contact number so our team can reach you?" },
            { type: "input", key: "email", question: "Your email address? (type 'skip' to continue)" },
            {
                  type: "options",
                  key: "service",
                  question: "What service are you looking for?",
                  options: ["Website Development", "Mobile App Development", "UI/UX Design", "Digital Marketing", "Branding"]
            },
            {
                  type: "options",
                  key: "budget",
                  question: "What’s your approximate budget?",
                  options: ["Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000+"]
            },
            {
                  type: "options",
                  key: "timeline",
                  question: "What timeline are you targeting?",
                  options: ["Immediately", "Within 1 month", "1–3 months", "Flexible"]
            },
            {
                  type: "options",
                  key: "type",
                  question: "Who is this project for?",
                  options: ["Startup", "Small Business", "Enterprise", "Personal"]
            },
            {
                  type: "options",
                  key: "industry",
                  question: "Which industry are you in?",
                  options: ["E-commerce", "Healthcare", "Education", "Real Estate", "Finance", "Other"]
            },
            { type: "input", key: "details", question: "Tell us briefly about your project" }
      ];

      const chatEndRef = useRef(null);

      useEffect(() => {
            if (isOpen && messages.length === 0) {
                  setMessages([
                        {
                              from: 'bot',
                              text: `Welcome to Invertio 👋  
Trusted by 500+ businesses.

I'll ask a few quick questions. It takes less than 2 minutes.`
                        },
                        { from: 'bot', text: steps[0].question }
                  ]);
            }
      }, [isOpen]);

      useEffect(() => {
            chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

      // ✅ EMAIL FUNCTION
      const sendEmail = async (data) => {
            const params = {
                  company: "Invertio",
                  from_name: data.name,
                  reply_to: data.email,
                  phone: data.phone,
                  service: data.service,
                  budget: data.budget,
                  timeline: data.timeline,
                  type: data.type,
                  industry: data.industry,
                  details: data.details,
            };

            try {
                  await emailjs.send(
                        "YOUR_SERVICE_ID",
                        "YOUR_TEMPLATE_ID",
                        params,
                        "YOUR_PUBLIC_KEY"
                  );
                  return true;
            } catch (err) {
                  console.log("Email error:", err);
                  return false;
            }
      };

      const nextStep = (value) => {
            const step = steps[stepIndex];
            const updatedAnswers = { ...answers, [step.key]: value };

            setAnswers(updatedAnswers);
            setMessages(prev => [...prev, { from: 'user', text: value }]);

            const next = stepIndex + 1;

            if (next < steps.length) {
                  setTimeout(() => {
                        setMessages(prev => [
                              ...prev,
                              { from: 'bot', text: steps[next].question }
                        ]);
                        setStepIndex(next);
                  }, 400);
            } else {
                  setTimeout(async () => {

                        const success = await sendEmail(updatedAnswers);

                        setMessages(prev => [
                              ...prev,
                              {
                                    from: 'bot',
                                    text: success
                                          ? "✅ Details sent successfully! Our team will contact you soon."
                                          : "⚠️ Something went wrong, but you can continue via WhatsApp."
                              }
                        ]);

                        setStepIndex(steps.length);

                  }, 400);
            }

            setInput('');
      };

      const handleSend = (e) => {
            e.preventDefault();
            if (!input.trim()) return;

            if (steps[stepIndex].key === "email" && input.toLowerCase() === "skip") {
                  nextStep("Skipped");
                  return;
            }

            nextStep(input);
      };

      const handleOptionClick = (option) => {
            nextStep(option);
      };

      const handleWhatsApp = () => {
            const PHONE = "8121910307";
            const message = Object.entries(answers)
                  .map(([k, v]) => `*${k.toUpperCase()}*: ${v}`)
                  .join('\n');

            window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`);
      };

      const currentStep = steps[stepIndex];

      return (
            <div className="fixed bottom-4 right-4 z-[9999] font-sans">

                  <AnimatePresence>
                        {isOpen && (
                              <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="w-[350px] h-[550px] bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 flex flex-col overflow-hidden mb-4"
                              >

                                    {/* HEADER */}
                                    <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-md text-white p-5 flex justify-between items-center border-b border-white/10">
                                          <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                                <span className="font-semibold tracking-tight">Invertio Support</span>
                                          </div>
                                          <button onClick={() => setIsOpen(false)}>✕</button>
                                    </div>

                                    {/* CHAT */}
                                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                                          {messages.map((msg, i) => (
                                                <motion.div
                                                      key={i}
                                                      initial={{ opacity: 0, x: msg.from === 'user' ? 10 : -10 }}
                                                      animate={{ opacity: 1, x: 0 }}
                                                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] ${msg.from === 'user'
                                                            ? 'bg-blue-600 text-white ml-auto'
                                                            : 'bg-white/10 text-white border border-white/10'
                                                            }`}
                                                >
                                                      {msg.text}
                                                </motion.div>
                                          ))}

                                          {/* OPTIONS */}
                                          {currentStep?.type === "options" && (
                                                <div className="flex flex-col gap-2">
                                                      {currentStep.options.map((opt, i) => (
                                                            <button
                                                                  key={i}
                                                                  onClick={() => handleOptionClick(opt)}
                                                                  className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-xl text-left"
                                                            >
                                                                  {opt}
                                                            </button>
                                                      ))}
                                                </div>
                                          )}

                                          {/* FINAL BUTTON */}
                                          {stepIndex >= steps.length && (
                                                <button
                                                      onClick={handleWhatsApp}
                                                      className="w-full bg-emerald-500 text-white py-3 rounded-xl"
                                                >
                                                      Continue on WhatsApp
                                                </button>
                                          )}

                                          <div ref={chatEndRef} />
                                    </div>

                                    {/* INPUT */}
                                    {currentStep?.type === "input" && stepIndex < steps.length && (
                                          <form onSubmit={handleSend} className="p-4 flex gap-2">
                                                <input
                                                      value={input}
                                                      onChange={(e) => setInput(e.target.value)}
                                                      placeholder="Type a message..."
                                                      className="flex-1 px-3 py-2 rounded-xl"
                                                />
                                                <button className="bg-blue-600 text-white px-4 rounded-xl">
                                                      Send
                                                </button>
                                          </form>
                                    )}

                              </motion.div>
                        )}
                  </AnimatePresence>

                  {/* FLOAT BUTTON */}
                  <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-16 w-16 bg-emerald-500 rounded-full flex items-center justify-center"
                  >
                        <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                              alt="WhatsApp"
                              width={32}
                              height={32}
                        />
                  </button>

            </div>
      );
};

export default WhatsAppButton;