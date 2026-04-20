'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
      const [showLabel, setShowLabel] = useState(false);
      const [isDragging, setIsDragging] = useState(false);

      useEffect(() => {
            const timer = setTimeout(() => setShowLabel(true), 2000);
            return () => clearTimeout(timer);
      }, []);

      const PHONE_NUMBER = "9949443882";

      const message =
            "Hi, I'm interested in opportunities at Invertio. Could you please share more details?";

      const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

      return (
            <motion.div
                  drag
                  dragElastic={0.2}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={() => setIsDragging(false)}
                  whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                  className="fixed bottom-6 right-6 z-[1000] flex items-center touch-none"
            >
                  {/* Label */}
                  <div
                        className={`mr-3 transition-all duration-500 ${showLabel && !isDragging ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                              }`}
                  >
                        <div className="bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100 relative">
                              <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                                    Need help?
                              </p>
                              <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
                        </div>
                  </div>

                  {/* WhatsApp Button */}
                  <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-200"
                  >
                        {/* Ping Animation */}
                        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />

                        {/* Icon */}
                        <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                              alt="WhatsApp"
                              width={36}
                              height={36}
                              priority
                        />
                  </a>
            </motion.div>
      );
};

export default WhatsAppButton;