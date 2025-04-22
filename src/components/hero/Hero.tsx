"use client";
import React, { useCallback } from "react";
import { motion } from "motion/react";
import { ArrowRight, Monitor, Code, Box, Layers } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero: React.FC = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-destructive"></div>

      {/* Geometric background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full border-8 border-destructive/5 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-blue-500/5 -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 rotate-45 bg-destructive/5 -z-10"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 min-h-[80vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Transforming Ideas Into{" "}
              <span className="text-destructive">Reality</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg text-slate-600 max-w-lg"
            >
              Ostendo delivers cutting-edge interactive solutions, advanced
              software, and professional display systems that empower businesses
              to redefine functionality and engagement.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                variant="destructive"
                className="group"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-slate-300"
              >
                Contact Us
              </Button>
            </motion.div>

            {/* Core services with icons */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              {[
                {
                  icon: <Monitor className="h-5 w-5" />,
                  label: "Interactive Solutions",
                },
                {
                  icon: <Code className="h-5 w-5" />,
                  label: "Software Development",
                },
                { icon: <Box className="h-5 w-5" />, label: "Display Kiosks" },
                {
                  icon: <Layers className="h-5 w-5" />,
                  label: "Screen Mechanisms",
                },
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                    {service.icon}
                  </div>
                  <span className="text-sm font-medium">{service.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced media side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main image with enhanced presentation */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-lg overflow-hidden shadow-xl border border-slate-200"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/Hero-image.png"
                  alt="Ostendo Integration Solutions"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent"></div>
              </div>
            </motion.div>

            {/* Floating industry cards */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg border border-slate-100 max-w-[180px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-xs text-slate-500 mb-1">Trusted by</div>
              <div className="text-sm font-medium">
                Corporate, Education, Retail & Events
              </div>
            </motion.div>

            {/* Stats floating card */}
            <motion.div
              className="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-lg border border-slate-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-destructive">10+</div>
                  <div className="text-xs text-slate-500">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-destructive">200+</div>
                  <div className="text-xs text-slate-500">Projects</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 border-8 border-dashed border-destructive/10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
