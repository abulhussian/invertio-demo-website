// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function ContactSection() {
//       const [selectedService, setSelectedService] = useState("Data & Analytics");

//       const services = [
//             "Data & Analytics",
//             "Cybersecurity",
//             "IT Consulting",
//             "Cloud Services",
//             "Software Development",
//       ];

//       return (
//             <section className="w-full py-16">
//                   <div className="grid lg:grid-cols-2 gap-16">

//                         {/* LEFT SIDE */}
//                         <div className="flex flex-col gap-8">

//                               {/* Heading */}
//                               <div>
//                                     <p className="text-purple-600 font-semibold mb-3 text-sm tracking-wide uppercase">
//                                           Get In Touch
//                                     </p>

//                                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
//                                           We’d Love to Hear From You
//                                     </h2>

//                                     <p className="text-gray-600 text-base sm:text-lg max-w-md">
//                                           Have a question, project idea, or partnership opportunity?
//                                           Reach out to us — our team will respond promptly to help you
//                                           move forward with confidence.
//                                     </p>
//                               </div>

//                               {/* Contact Cards */}
//                               <div className="flex flex-col gap-4">

//                                     {/* Email */}
//                                     <div className="border border-gray-100 bg-white rounded-2xl p-5 shadow-sm flex items-center gap-5">
//                                           <div className="w-11 h-11 bg-purple-50 rounded-xl flex items-center justify-center">
//                                                 <Image src="/contact/email.png" alt="Email Icon" width={20} height={20} />
//                                           </div>
//                                           <div>
//                                                 <p className="font-semibold text-[#0F172A] text-base">Email Us</p>
//                                                 <p className="text-gray-500 text-sm">
//                                                       info@invertiosolutions.com
//                                                 </p>
//                                           </div>
//                                     </div>

//                                     {/* Phone */}
//                                     <div className="border border-gray-100 bg-white rounded-2xl p-5 shadow-sm flex items-center gap-5">
//                                           <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
//                                                 <Image src="/contact/telephone.png" alt="Phone Icon" width={20} height={20} />
//                                           </div>
//                                           <div>
//                                                 <p className="font-semibold text-[#0F172A] text-base">Call Us</p>
//                                                 <p className="text-gray-500 text-sm">
//                                                       +91 81219 10307
//                                                 </p>
//                                           </div>
//                                     </div>

//                                     {/* Address */}
//                                     <div className="border border-gray-100 bg-white rounded-2xl p-5 shadow-sm flex items-center gap-5">
//                                           <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center">
//                                                 <Image src="/contact/email.png" alt="Location Icon" width={20} height={20} />
//                                           </div>
//                                           <div>
//                                                 <p className="font-semibold text-[#0F172A] text-base">Office Address</p>
//                                                 <p className="text-gray-500 text-sm leading-relaxed">
//                                                       8-1-332-3/B/L, 7 Tombs Rd, JPB Colony, Aravind Nagar Colony,
//                                                       Shaikpet, Hyderabad, Telangana 500008
//                                                 </p>
//                                           </div>
//                                     </div>

//                               </div>
//                         </div>

//                         {/* RIGHT SIDE FORM */}
//                         <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">

//                               <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
//                                     Send Us a Message
//                               </h3>

//                               <p className="text-gray-500 mb-6">
//                                     Fill out the form below and our specialists will get back to you shortly.
//                               </p>

//                               <form className="space-y-5">

//                                     <div className="grid md:grid-cols-2 gap-5">
//                                           <Input label="Full Name *" placeholder="Enter Your Full Name" className="rounded-xs" />
//                                           <Input label="Company Name *" placeholder="Enter Company Name" className="rounded-xs" />
//                                     </div>

//                                     <div className="grid md:grid-cols-2 gap-5">
//                                           <Input label="Email *" placeholder="example@gmail.com" className="rounded-xs" />
//                                           <Input label="Contact Number *" placeholder="+91 Enter 10 Digit Mobile Number" className="rounded-xs" />
//                                     </div>

//                                     {/* Service Selection */}
//                                     <div>
//                                           <p className="text-sm font-medium text-[#0F172A] mb-3">
//                                                 Service Interested In *
//                                           </p>

//                                           <div className="flex flex-wrap gap-3">
//                                                 {services.map((service) => (
//                                                       <button
//                                                             type="button"
//                                                             key={service}
//                                                             onClick={() => setSelectedService(service)}
//                                                             className={`px-4 py-2 rounded-full border text-sm transition
//                       ${selectedService === service
//                                                                         ? "bg-orange-500 text-white border-orange-500"
//                                                                         : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
//                                                                   }`}
//                                                       >
//                                                             {service}
//                                                       </button>
//                                                 ))}
//                                           </div>
//                                     </div>

//                                     {/* Message */}
//                                     <div>
//                                           <label className="text-sm font-medium text-[#0F172A] mb-2 block">
//                                                 Message *
//                                           </label>
//                                           <textarea
//                                                 rows="4"
//                                                 className="w-full border border-gray-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
//                                                 placeholder="Message..."
//                                           />
//                                     </div>

//                                     {/* Submit */}
//                                     <div>
//                                           <button
//                                                 type="submit"
//                                                 className="w-full md:w-auto bg-[#0F172A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#1E293B] transition"
//                                           >
//                                                 Send Message
//                                           </button>
//                                     </div>

//                               </form>
//                         </div>

//                   </div>
//             </section>

//       );
// }

// function Input({ label, placeholder }) {
//       return (
//             <div>
//                   <label className="text-sm font-medium text-[#0F172A] mb-2 block">
//                         {label}
//                   </label>
//                   <input
//                         type="text"
//                         placeholder={placeholder}
//                         className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                   />
//             </div>
//       );
// }

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
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
            });

            // clear error while typing
            setErrors({
                  ...errors,
                  [e.target.name]: ""
            });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            let newErrors = {};

            if (!formData.name.trim()) newErrors.name = "Required";
            if (!formData.company.trim()) newErrors.company = "Required";
            if (!formData.email.trim()) newErrors.email = "Required";
            if (!formData.phone.trim()) newErrors.phone = "Required";
            if (!formData.message.trim()) newErrors.message = "Required";

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
                                          <Input name="name" value={formData.name} onChange={handleChange} label="Full Name *" placeholder="Enter Your Full Name" error={errors.name} />
                                          <Input name="company" value={formData.company} onChange={handleChange} label="Company Name *" placeholder="Enter Company Name" error={errors.company} />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                          <Input name="email" value={formData.email} onChange={handleChange} label="Email *" placeholder="example@gmail.com" error={errors.email} />
                                          <Input name="phone" value={formData.phone} onChange={handleChange} label="Contact Number *" placeholder="+91 Enter 10 Digit Mobile Number" error={errors.phone} />
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
                                                className={`w-full border rounded-md p-4 focus:outline-none focus:ring-2 resize-none
                  ${errors.message
                                                            ? "border-red-500 focus:ring-red-500"
                                                            : "border-gray-200 focus:ring-orange-500"
                                                      }`}
                                                placeholder="Message..."
                                          />

                                          {errors.message && (
                                                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                          )}
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