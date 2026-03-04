
"use client";
import { useRouter } from "next/navigation";
import React from "react";

const FeatureSection = ({
    tag,
    title,
    description,
    buttonText = "Read More",
    image,
    imagePosition = "right", // "left" | "right"
    slug = "feature-details",
}) => {
    const router = useRouter();
    return (
        <section className="w-full py-5 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div
                        className={`space-y-3 ${imagePosition === "left" ? "md:order-2" : "md:order-1"
                            }`}
                    > 
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            {tag}
                        </p>

                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
                            {title}
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            {description}
                        </p>

                        <button
                            onClick={() => router.push(`/services/${slug}`)}
                            className={`inline-flex items-center px-5 py-2.5 text-white rounded-full text-sm font-medium transition
                            ${imagePosition === "left"
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-black hover:bg-gray-800"
                                }`}
                        >
                            {buttonText}
                            <span className="ml-2">
                                <img src="/services/Vector.svg" alt="arrow" />
                            </span>
                        </button>
                    </div>

                    {/* Image */}
                    <div
                        className={`relative w-full ${imagePosition === "left" ? "md:order-1" : "md:order-2"
                            }`}
                    >                        {/* Outer Container with Border */}
                        <div className="relative p-2 overflow-hidden bg-white">

                            {/* Image */}
                            <img
                                src={image}
                                alt="feature"
                                className="w-full h-full object-cover rounded-[28px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;