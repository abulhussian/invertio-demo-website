'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const WhatsAppButton = () => {
      const [showLabel, setShowLabel] = useState(false);

      const phoneNumber = "6302122429";
      const message = "Hello! I'm visiting Invertio and have a question.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      useEffect(() => {
            // Show the label after a 2-second delay
            const timer = setTimeout(() => {
                  setShowLabel(true);
            }, 2000);
            return () => clearTimeout(timer);
      }, []);

      return (
            <div className="fixed bottom-6 right-6 z-[1000] flex items-center">
                  {/* Text Label Container */}
                  <div
                        className={`mr-3 transform transition-all duration-500 ease-out ${showLabel ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0 pointer-events-none"
                              }`}
                  >
                        <div className="bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100 relative">
                              <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                                    Need help? Chat with us
                              </p>
                              {/* Small Arrow/Triangle pointing to the icon */}
                              <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
                        </div>
                  </div>

                  {/* The Floating Button */}
                  <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-16 sm:w-16"
                        aria-label="Chat on WhatsApp"
                  >
                        {/* Pulse effect to draw attention */}
                        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />

                        <Image
                              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                              alt="WhatsApp"
                              width={36}
                              height={36}
                              className="relative z-10 h-8 w-8 sm:h-9 sm:w-9"
                              priority
                        />
                  </a>
            </div>
      );
};

export default WhatsAppButton;