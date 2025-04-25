// "use client";
import React from "react";
// import { motion } from "motion/react";
import {
  // Mail,
  // Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  //   const fadeIn = {
  //     hidden: { opacity: 0, y: 20 },
  //     visible: {
  //       opacity: 1,
  //       y: 0,
  //       transition: { duration: 0.6, ease: "easeOut" },
  //     },
  //   };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/80 via-destructive to-destructive/80"></div>

      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-destructive/5 blur-3xl -z-10"></div>
      <div className="absolute top-40 left-20 w-40 h-40 rounded-full bg-blue-500/5 blur-2xl -z-10"></div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center">
              {/* Replace with your actual logo */}
              <Link
                href="/"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <Image
                  src="/Logo-dark.png"
                  alt="Pons"
                  width={200}
                  height={90}
                  priority
                  className="object-contain"
                />
                <span className="sr-only">IBC</span>
              </Link>
            </div>

            <p className="text-slate-400">
              Transforming ideas into reality through cutting-edge, customized
              technology solutions that inspire innovation and enhance
              efficiency.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "#" },
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#" },
                { icon: <Instagram className="h-5 w-5" />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-destructive/20 transition-colors"
                  aria-label={`Social media link ${i + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },

                { name: "Our Values", href: "#values" },
                { name: "Contact", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:underline transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                {
                  name: "Interactive Solutions",
                  href: "#services",
                },
                { name: "Software Development", href: "#services" },
                {
                  name: "Screen Lifting Mechanisms",
                  href: "#services",
                },
                { name: "Display Kiosks", href: "#services" },

                { name: "Custom Integration", href: "#services" },
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-white hover:underline transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {[
                // {
                //   icon: <Phone className="h-5 w-5" />,
                //   content: "+201029933691",
                //   href: "tel:+201029933691",
                // },
                // {
                //   icon: <Mail className="h-5 w-5" />,
                //   content: "info@ostendo.com",
                //   href: "mailto:info@ostendo.com",
                // },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  content: "Maddi Cairo, Egypt",
                  href: "https://maps.google.com",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="text-destructive mr-3 mt-1">{item.icon}</div>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.content}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {currentYear} Ostendo. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
