
"use client";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function ContactSection() {

      const [selectedService, setSelectedService] = useState("Data & Analytics");

      const [formData, setFormData] = useState({
            name: "",
            company: "",
            email: "",
            phone: "",
            message: ""
      });

      const [errors, setErrors] = useState({});
      const [loading, setLoading] = useState(false);

      const services = [
            "Data & Analytics",
            "Cybersecurity",
            "IT Consulting",
            "Cloud Services",
            "Software Development",
      ];

      const handleChange = (e) => {
            const { name, value } = e.target;

            // phone restriction
            if (name === "phone") {
                  const onlyNumbers = value.replace(/\D/g, "");
                  setFormData({
                        ...formData,
                        phone: onlyNumbers,
                  });

                  setErrors({
                        ...errors,
                        phone: "",
                  });

                  return;
            }

            // normal fields
            setFormData({
                  ...formData,
                  [name]: value,
            });

            setErrors({
                  ...errors,
                  [name]: "",
            });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            let newErrors = {};

            const name = formData.name.trim();
            const company = formData.company.trim();
            const email = formData.email.trim();
            const phone = formData.phone.trim();
            const message = formData.message.trim();


            // ✅ Required
            if (!name) newErrors.name = "Name is required";
            if (!company) newErrors.company = "Company is required";
            if (!email) newErrors.email = "Email is required";
            if (!phone) newErrors.phone = "Phone is required";
            if (!message) newErrors.message = "Message is required";

            // ✅ Name validation
            const nameRegex = /^[A-Za-z\s]+$/;
            if (name && name.length < 3) {
                  newErrors.name = "Name must be at least 3 characters";
            }
            if (name && !nameRegex.test(name)) {
                  newErrors.name = "Only letters allowed";
            }

            // ✅ Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email)) {
                  newErrors.email = "Enter a valid email";
            }
            if (email && email.length > 50) {
                  newErrors.email = "Email is too long";
            }

            // ✅ Phone validation (10 digits only)
            const phoneRegex = /^[0-9]{10}$/;
            if (phone && !phoneRegex.test(phone)) {
                  newErrors.phone = "Enter valid 10 digit number";
            }
            if (phone && phone.startsWith("0")) {
                  newErrors.phone = "Invalid phone number";
            }

            // ✅ Message validation
            if (message && message.length < 10) {
                  newErrors.message = "Message must be at least 10 characters";
            }
            if (message && message.length > 500) {
                  newErrors.message = "Message too long";
            }

            // ✅ Toast (keep your logic same)
            if (Object.keys(newErrors).length > 0) {
                  toast.error(Object.values(newErrors)[0]);
            }

            setErrors(newErrors);

            if (Object.keys(newErrors).length > 0) return;

            setLoading(true);

            const data = new FormData();
            data.append("name", formData.name);
            data.append("company", formData.company);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("service", selectedService);
            data.append("message", formData.message);

            try {
                  const res = await fetch("https://invertiosolutions.com/contact.php", {
                        method: "POST",
                        body: data
                  });

                  const result = await res.json();

                  if (result.status === "success") {
                        toast.success(result.message);

                        setFormData({
                              name: "",
                              company: "",
                              email: "",
                              phone: "",
                              message: ""
                        });

                        setSelectedService("Data & Analytics");
                        setErrors({});
                  } else {
                        toast.error(result.message);
                  }

            } catch (err) {
                  console.error(err);
                  toast.error("Server error. Try again.");
            }

            setLoading(false);
      };

      return (
            <section className="w-full py-16">
                  <div className="grid lg:grid-cols-2 gap-16">

                        {/* LEFT SIDE */}
                        <div className="flex flex-col gap-8">

                              <div>
                                    <p className="text-purple-600 font-semibold mb-3 text-sm tracking-wide uppercase">
                                          Get In Touch
                                    </p>

                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
                                          We’d Love to Hear From You
                                    </h2>

                                    <p className="text-gray-600 text-base sm:text-lg max-w-md">
                                          Have a question, project idea, or partnership opportunity?
                                          Reach out to us — our team will respond promptly to help you
                                          move forward with confidence.
                                    </p>
                              </div>

                              <div className="flex flex-col gap-4">

                                    <div className="border border-gray-100 bg-white rounded-2xl p-5 shadow-sm flex items-center gap-5">
                                          <div className="w-11 h-11 bg-purple-50 rounded-xl flex items-center justify-center">
                                                <Image src="/contact/email.png" alt="Email Icon" width={20} height={20} />
                                          </div>
                                          <div>
                                                <p className="font-semibold text-[#0F172A] text-base">Email Us</p>
                                                <p className="text-gray-500 text-sm">
                                                      info@invertiosolutions.com
                                                </p>
                                          </div>
                                    </div>

                                    <div className="border border-gray-100 bg-white rounded-2xl p-5 shadow-sm flex items-center gap-5">
                                          <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
                                                <Image src="/contact/telephone.png" alt="Phone Icon" width={20} height={20} />
                                          </div>
                                          <div>
                                                <p className="font-semibold text-[#0F172A] text-base">Call Us</p>
                                                <p className="text-gray-500 text-sm">
                                                      +91 81219 10307
                                                </p>
                                          </div>
                                    </div>

                                    <div className="border border-gray-100 bg-white rounded-2xl p-5 shadow-sm flex items-center gap-5">
                                          <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center">
                                                <Image src="/contact/email.png" alt="Location Icon" width={20} height={20} />
                                          </div>
                                          <div>
                                                <p className="font-semibold text-[#0F172A] text-base">Office Address</p>
                                                <p className="text-gray-500 text-sm leading-relaxed">
                                                      8-1-332-3/B/L, 7 Tombs Rd, JPB Colony, Aravind Nagar Colony,
                                                      Shaikpet, Hyderabad, Telangana 500008
                                                </p>
                                          </div>
                                    </div>

                              </div>
                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">

                              <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
                                    Send Us a Message
                              </h3>

                              <p className="text-gray-500 mb-6">
                                    Fill out the form below and our specialists will get back to you shortly.
                              </p>

                              <form className="space-y-5" onSubmit={handleSubmit}>

                                    <div className="grid md:grid-cols-2 gap-5">
                                          <Input name="name" value={formData.name} onChange={handleChange} label="Full Name *" placeholder="Enter Your Full Name" />
                                          <Input name="company" value={formData.company} onChange={handleChange} label="Company Name *" placeholder="Enter Company Name" />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                          <Input name="email" value={formData.email} onChange={handleChange} label="Email *" placeholder="example@gmail.com" />
                                          <Input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                label="Contact Number *"
                                                placeholder="+91 Enter 10 Digit Mobile Number"
                                                maxLength={10}
                                          />
                                    </div>

                                    {/* Service */}
                                    <div>
                                          <p className="text-sm font-medium text-[#0F172A] mb-3">
                                                Service Interested In *
                                          </p>

                                          <div className="flex flex-wrap gap-3">
                                                {services.map((service) => (
                                                      <button
                                                            type="button"
                                                            key={service}
                                                            onClick={() => setSelectedService(service)}
                                                            className={`px-4 py-2 rounded-full border text-sm transition
                      ${selectedService === service
                                                                        ? "bg-orange-500 text-white border-orange-500"
                                                                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                                                                  }`}
                                                      >
                                                            {service}
                                                      </button>
                                                ))}
                                          </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                          <label className="text-sm font-medium text-[#0F172A] mb-2 block">
                                                Message *
                                          </label>

                                          <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                className={`w-full border border-gray-300 rounded-md p-4 focus:outline-orange-500 focus:ring-amber-300 resize-none `}
                                                placeholder="Message..."
                                          />


                                    </div>

                                    {/* Submit */}
                                    <div>
                                          <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full md:w-auto bg-[#0F172A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#1E293B] transition"
                                          >
                                                {loading ? "Sending..." : "Send Message"}
                                          </button>
                                    </div>

                              </form>
                        </div>

                  </div>
            </section>
      );
}

function Input({ label, placeholder, name, value, onChange, error }) {
      return (
            <div>
                  <label className="text-sm font-medium text-[#0F172A] mb-2 block">
                        {label}
                  </label>

                  <input
                        type="text"
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2
          ${error
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-200 focus:ring-orange-500"
                              }`}
                  />

                  {error && (
                        <p className="text-red-500 text-xs mt-1">{error}</p>
                  )}
            </div>
      );
}