"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
      const router = useRouter();

      return (
            <section className="px-6 md:px-14 lg:px-20 py-16 max-w-5xl mx-auto">

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-8">
                        <button
                              onClick={() => router.back()}
                              className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition"
                        >
                              <ArrowLeft size={18} />
                        </button>

                        <h1 className="text-3xl md:text-4xl font-semibold text-[#0F172A]">
                              Privacy Policy
                        </h1>
                  </div>

                  {/* Last Updated */}
                  <p className="text-gray-500 mb-6">
                        <strong>Last Updated:</strong> March 13, 2026
                  </p>

                  {/* Content */}
                  <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">

                        <p>
                              Invertio (“we”, “our”, or “us”) values your privacy and is committed to
                              protecting your personal information. This Privacy Policy explains how
                              we collect, use, and safeguard the information you provide when you
                              visit or use our website and services.
                        </p>

                        <div>
                              <h2 className="font-semibold text-[#0F172A] mb-2">
                                    1. Information We Collect
                              </h2>
                              <p>
                                    <strong>Personal Information:</strong> Name, email, phone, company
                                    details, and other info you provide.
                              </p>
                              <p>
                                    <strong>Non-Personal Information:</strong> Browser type, device info,
                                    IP address, pages visited, and usage patterns collected via cookies
                                    and analytics.
                              </p>
                        </div>

                        <div>
                              <h2 className="font-semibold text-[#0F172A] mb-2">
                                    2. How We Use Your Information
                              </h2>
                              <ul className="list-disc pl-6 space-y-1">
                                    <li>Providing and improving our services.</li>
                                    <li>Responding to inquiries and support requests.</li>
                                    <li>
                                          Sending updates, newsletters, or promotional content (with your
                                          consent).
                                    </li>
                                    <li>Analyzing website usage and improving user experience.</li>
                                    <li>Complying with legal obligations.</li>
                              </ul>
                        </div>

                        <div>
                              <h2 className="font-semibold text-[#0F172A] mb-2">
                                    3. Cookies and Tracking
                              </h2>
                              <p>
                                    We use cookies and similar technologies to enhance your experience,
                                    analyze traffic, and customize content. You can disable cookies in
                                    your browser settings, though some features may not function
                                    properly.
                              </p>
                        </div>

                        <div>
                              <h2 className="font-semibold text-[#0F172A] mb-2">
                                    4. Sharing Your Information
                              </h2>
                              <p>
                                    We do not sell or rent your personal information. We may share
                                    information with trusted service providers, to comply with legal
                                    requirements, or to protect our rights and safety.
                              </p>
                        </div>

                        <div>
                              <h2 className="font-semibold text-[#0F172A] mb-2">
                                    5. Data Security
                              </h2>
                              <p>
                                    We implement reasonable security measures to protect your personal
                                    information. However, no method of transmission or storage is 100%
                                    secure.
                              </p>
                        </div>

                        <div>
                              <h2 className="font-semibold text-[#0F172A] mb-2">
                                    6. Your Rights
                              </h2>
                              <ul className="list-disc pl-6 space-y-1">
                                    <li>Access and request a copy of your personal information.</li>
                                    <li>Request correction or deletion of your personal information.</li>
                                    <li>Withdraw consent for marketing communications at any time.</li>
                              </ul>

                              <p className="mt-2">
                                    Contact us at{" "}
                                    <a
                                          href="mailto:info@invertiosolutions.com"
                                          className="text-blue-600 hover:underline"
                                    >
                                          info@invertiosolutions.com
                                    </a>{" "}
                                    to exercise your rights.
                              </p>
                        </div>

                        <div>
                              <h2 className="font-semibold text-[#0F172A] mb-2">
                                    7. Third-Party Links
                              </h2>
                              <p>
                                    Our website may contain links to third-party websites. We are not
                                    responsible for their privacy practices. Review their privacy
                                    policies for details.
                              </p>
                        </div>

                        <div>
                              <h2 className="font-semibold text-[#0F172A] mb-2">
                                    8. Changes to This Privacy Policy
                              </h2>
                              <p>
                                    We may update this Privacy Policy from time to time. Updated versions
                                    will be posted on this page with the revised “Last Updated” date.
                              </p>
                        </div>

                        <div>
                              <h2 className="font-semibold text-[#0F172A] mb-2">
                                    9. Contact Us
                              </h2>

                              <p>If you have any questions regarding this Privacy Policy:</p>

                              <p>
                                    Email:{" "}
                                    <a
                                          href="mailto:info@invertiosolutions.com"
                                          className="text-blue-600 hover:underline"
                                    >
                                          info@invertiosolutions.com
                                    </a>
                              </p>

                              <p>
                                    Website:{" "}
                                    <a
                                          href="https://www.invertio.in"
                                          className="text-blue-600 hover:underline"
                                    >
                                          www.invertio.in
                                    </a>
                              </p>
                        </div>

                  </div>
            </section>
      );
}