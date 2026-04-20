'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const WhatsAppButton = () => {

      const questions = [
            "What is your name?",
            "What is your email?",
            "What service do you need?",
            "What is your budget?",
            "Project deadline?",
            "Do you have an existing website?",
            "Preferred contact method?",
            "Company name?",
            "Project description?",
            "Any additional notes?"
      ];

      const [isOpen, setIsOpen] = useState(false);
      const [input, setInput] = useState('');
      const [step, setStep] = useState(0);
      const [answers, setAnswers] = useState([]);
      const [isFinished, setIsFinished] = useState(false);

      const [messages, setMessages] = useState([
            { from: 'bot', text: questions[0] }
      ]);

      const chatEndRef = useRef(null);

      useEffect(() => {
            chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

      // ✅ Validation
      const validateInput = (value, step) => {
            if (!value.trim()) return "This field is required";

            if (step === 1) {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!emailRegex.test(value)) return "Enter valid email";
            }

            return null;
      };

      const handleSend = (e) => {
            e.preventDefault();
            if (isFinished) return;

            const error = validateInput(input, step);

            if (error) {
                  setMessages(prev => [...prev, { from: 'bot', text: `⚠️ ${error}` }]);
                  return;
            }

            const newAnswers = [...answers, input];

            setMessages(prev => [...prev, { from: 'user', text: input }]);
            setAnswers(newAnswers);
            setInput('');

            if (step < questions.length - 1) {
                  setTimeout(() => {
                        setMessages(prev => [...prev, { from: 'bot', text: questions[step + 1] }]);
                        setStep(prev => prev + 1);
                  }, 400);
            } else {
                  setIsFinished(true);
                  sendEmail(newAnswers);
            }
      };

      // ✅ EmailJS
      const sendEmail = (data) => {
            const params = {
                  company: "Invertio",
                  from_name: data[0],
                  reply_to: data[1],
                  q1: data[0],
                  q2: data[1],
                  q3: data[2],
                  q4: data[3],
                  q5: data[4],
                  q6: data[5],
                  q7: data[6],
                  q8: data[7],
                  q9: data[8],
                  q10: data[9],
            };

            emailjs.send(
                  "YOUR_SERVICE_ID",
                  "YOUR_TEMPLATE_ID",
                  params,
                  "YOUR_PUBLIC_KEY"
            )
                  .then(() => {
                        setMessages(prev => [
                              ...prev,
                              { from: 'bot', text: "✅ Details sent!" },
                              { from: 'bot', text: "Continue on WhatsApp 👇" }
                        ]);
                  })
                  .catch(() => {
                        setMessages(prev => [
                              ...prev,
                              { from: 'bot', text: "⚠️ Email failed. Use WhatsApp below." }
                        ]);
                  });
      };

      // ✅ WhatsApp
      const handleWhatsAppRedirect = () => {
            const PHONE = "9949443882";

            const summary = questions.map((q, i) =>
                  `*${q}*\n${answers[i]}`
            ).join('\n\n');

            const message = `Hi Invertio 👋\n\n${summary}`;

            window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank');
      };

      return (
            <motion.div
                  drag
                  dragMomentum={false}
                  className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-3 cursor-grab active:cursor-grabbing"
            >

                  {/* CHAT BOX */}
                  <AnimatePresence>
                        {isOpen && (
                              <motion.div
                                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 40, scale: 0.9 }}
                                    className="relative w-[340px] h-[520px] rounded-2xl shadow-2xl overflow-hidden
            bg-[linear-gradient(180deg,#0f172a_0%,#1e293b_100%)]"
                              >

                                    {/* Pattern */}
                                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none 
            bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                                    <div className="relative z-10 flex flex-col h-full">

                                          {/* Header */}
                                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between">
                                                <span>Invertio Support</span>
                                                <button onClick={() => setIsOpen(false)}>✕</button>
                                          </div>

                                          {/* Messages */}
                                          <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                                {messages.map((msg, i) => (
                                                      <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className={`max-w-[75%] px-3 py-2 rounded-xl text-sm ${msg.from === 'user'
                                                                  ? 'bg-blue-600 text-white ml-auto'
                                                                  : 'bg-[#1f2937] text-gray-200 border border-white/5'
                                                                  }`}
                                                      >
                                                            {msg.text}
                                                      </motion.div>
                                                ))}

                                                {isFinished && (
                                                      <button
                                                            onClick={handleWhatsAppRedirect}
                                                            className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold mt-2"
                                                      >
                                                            Continue on WhatsApp
                                                      </button>
                                                )}

                                                <div ref={chatEndRef} />
                                          </div>

                                          {/* Input */}
                                          {!isFinished && (
                                                <form onSubmit={handleSend} className="p-3 bg-white/5 border-t border-white/10 flex gap-2">
                                                      <input
                                                            value={input}
                                                            onChange={(e) => setInput(e.target.value)}
                                                            placeholder={questions[step]}
                                                            className="flex-1 px-3 py-2 rounded-full bg-black/30 text-white text-sm outline-none border border-white/10"
                                                      />
                                                      <button className="bg-blue-600 text-white px-4 rounded-full">
                                                            Send
                                                      </button>
                                                </form>
                                          )}

                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>

                  {/* BUTTON */}
                  <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-14 w-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl"
                  >
                        <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                              alt="wa"
                              width={28}
                              height={28}
                        />
                  </motion.button>

            </motion.div>
      );
};

export default WhatsAppButton;