import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[linear-gradient(98.95deg,#2A1F3F_0%,#1E2238_50.02%,#0F2236_75.03%,#0A0F1C_100.04%)] px-30 pt-16 pb-8 flex flex-col gap-8">
      <Image
        src="/navbar/logo.svg"
        alt="Logo"
        width={308}
        height={96}
        priority
      />

      <hr className="border-t border-[#101323]" />

      {/* links */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        {footerData.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <h3 className="font-semibold font-jakarta text-white text-sm">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-1 text-sm text-gray-300">
              {section.links.map((link) => (
                <li key={link.href} className="p-1">
                  <Link
                    href={link.href}
                    className="hover:text-white transition w-full text-sm  hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Section (different structure so separate) */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold font-jakarta text-white text-sm">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-300  w-fit">
            <li className="flex gap-2 items-center">
              <Image
                src="/footer/phone.svg"
                alt="phone"
                width={40}
                height={40}
                priority
              />
              +91 81219 10307
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src="/footer/email.svg"
                alt="phone"
                width={40}
                height={40}
                priority
              />
              info@invertiosolutions.com
            </li>
            <li className="flex gap-2 items-start ">
              <Image
                src="/footer/location.svg"
                alt="phone"
                width={40}
                height={40}
                priority
              />
              8-1-332-3/B/L, 7 Tombs Rd, Aravind Nagar Colony, Shaikpet,
              Hyderabad
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-[#101323]" />

      {/* social media logos */}
      <div className="flex gap-3 items-center w-full justify-center">
        <Image
          src="/footer/facebook.svg"
          alt="facebook"
          width={40}
          height={40}
        />
        <Image
          src="/footer/instagram.svg"
          alt="instagram"
          width={40}
          height={40}
        />
        <Image src="/footer/x.svg" alt="x" width={40} height={40} />
        <Image
          src="/footer/linkedin.svg"
          alt="linkedin"
          width={40}
          height={40}
        />
      </div>

      <hr className="border-t border-[#101323]" />

      {/* STAY UPDATED */}
      <div className="w-full flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Left Content */}
          <div className="flex flex-col gap-3 max-w-xl">
            <h2 className="text-white font-jakarta text-3xl font-semibold">
              Stay Updated
            </h2>
            <p className="text-gray-300 text-xs">
              Subscribe to receive the latest insights, technology updates, and
              innovation trends directly in your inbox.
            </p>
          </div>

          {/* Email Subscription Box */}
          <div className="w-fit bg-white rounded-xl flex items-center p-2 overflow-hidden">
            {/* Input + Icon */}
            <div className="flex items-center gap-3 px-3 flex-1">
              <Image
                src="/footer/email2.svg"
                alt="email"
                width={20}
                height={20}
              />
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-transparent outline-none text-sm text-black placeholder:text-gray-500"
              />
            </div>

            {/* Button */}
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-sm font-semibold px-6 py-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#101323]" />

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-300">
        <p>© {new Date().getFullYear()} Invertio. All rights reserved.</p>

        <div className="flex flex-wrap gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="hover:text-white transition"
          >
            Terms & Conditions
          </Link>
          <Link href="/disclaimer" className="hover:text-white transition">
            Disclaimer
          </Link>
          <Link href="/cookie-policy" className="hover:text-white transition">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const footerData = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Our Work", href: "/our-work" },
      { label: "News & Insights", href: "/news-insights" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Our Services",
    links: [
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
      },
      { label: "Cloud Services", href: "/services/cloud-services" },
      {
        label: "Software Development",
        href: "/services/software-development",
      },
    ],
  },
  {
    title: "Our Solutions",
    links: [
      { label: "Data & Analytics", href: "/solutions/data-analytics" },
      { label: "Cybersecurity", href: "/solutions/cybersecurity" },
      { label: "IT Consulting", href: "/solutions/it-consulting" },
    ],
  },
  {
    title: "Our Industries",
    links: [
      { label: "Education", href: "/industries/education" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Finance", href: "/industries/finance" },
      { label: "Healthcare", href: "/industries/healthcare" },
      {
        label: "Information Service",
        href: "/industries/information-service",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Our Work", href: "/our-work" },
      { label: "White Papers", href: "/white-papers" },
    ],
  },
];
