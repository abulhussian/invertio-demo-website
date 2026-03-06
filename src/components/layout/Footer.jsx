import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[linear-gradient(98.95deg,#2A1F3F_0%,#1E2238_50.02%,#0F2236_75.03%,#0A0F1C_100.04%)] p-7 lg:px-30 lg:pt-16 lg:pb-8 flex flex-col gap-8">
      <Image src="/logo/logo.svg" alt="Logo" width={308} height={96} priority />

      <hr className="border-t border-[#101323]" />

      {/* links */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12">
        {footerData.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <h3 className="font-semibold font-jakarta text-white text-sm">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-300 w-full">
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
              <a
                href="tel:+918121910307"
                className="flex gap-2 items-center hover:underline"
              >
                <Image
                  src="/footer/phone.svg"
                  alt="phone"
                  width={40}
                  height={40}
                  priority
                />
                +91 81219 10307
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src="/footer/email.svg"
                alt="email"
                width={40}
                height={40}
                priority
              />

              <a
                href="mailto:info@invertiosolutions.com"
                className="hover:underline"
              >
                info@invertiosolutions.com
              </a>
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
      <div className="flex gap-4 items-center w-full justify-center py-4">

        <a
          href="https://www.facebook.com/profile.php?id=61554332513059"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/footer/facebook.svg"
            alt="facebook"
            width={40}
            height={40}
          />
        </a>

        <a
          href="https://www.instagram.com/invertiotechsolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/footer/instagram.svg"
            alt="instagram"
            width={40}
            height={40}
          />
        </a>

        <a
          href="https://x.com/Invertio_s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/footer/x.svg"
            alt="x"
            width={40}
            height={40}
          />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/footer/linkedin.svg"
            alt="linkedin"
            width={40}
            height={40}
          />
        </a>

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
          <div className="w-full lg:w-fit bg-white rounded-xl flex items-center p-2 overflow-hidden">
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

        <div className="flex flex-wrap items-center justify-center gap-6">
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
      { label: "Retail", href: "/industries/retail-ecommerce" },
      { label: "Finance", href: "/industries/finance-banking" },
      { label: "Healthcare", href: "/industries/healthcare" },
      {
        label: "Information Service",
        href: "/industries/information",
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
