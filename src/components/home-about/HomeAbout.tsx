"use client";
import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  // , ArrowRight
} from "lucide-react";
// import { Button } from "../ui/button";
import Image from "next/image";

const HomeAbout: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden" id="about">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-slate-50 -z-10"></div>
      <div className="absolute top-20 left-10 w-20 h-20 rotate-45 bg-destructive/5 -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Image side */}
          <motion.div variants={fadeIn} className="relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-slate-100">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/team.jpg" // Replace with your actual image
                  alt="Ostendo team and workspace"
                  fill
                  className="object-cover"
                />

                {/* Red accent element */}
                <div className="absolute left-0 top-0 h-full w-1 bg-destructive"></div>
              </div>
            </div>

            {/* Floating mission card */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg border border-slate-100 max-w-[260px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-destructive mb-2">
                Our Mission
              </h4>
              <p className="text-sm text-slate-600">
                To deliver cutting-edge, customized technology solutions that
                inspire innovation, enhance efficiency, and empower businesses
                to succeed.
              </p>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 border-8 border-dashed border-destructive/10 rounded-full"></div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div variants={fadeIn}>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-destructive/10 text-destructive rounded-full">
                About Ostendo
              </span>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-slate-900"
            >
              At the Forefront of{" "}
              <span className="text-destructive">Technological Innovation</span>
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg text-slate-600">
              Ostendo stands at the forefront of technological innovation,
              offering exceptional system integration solutions tailored to meet
              the needs of diverse industries. We empower businesses to redefine
              functionality and engagement through our expertise in customized
              interactive solutions.
            </motion.p>

            {/* Core values */}
            <motion.div variants={fadeIn} className="space-y-3 pt-2">
              {[
                "Innovation: Continuously advancing technology for groundbreaking solutions",
                "Customization: Ensuring tailored solutions for every client's vision",
                "Quality: Upholding excellence and precision in all products and services",
                "Integrity: Building trust through transparency and accountability",
              ].map((value, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-destructive" />
                  <p className="text-slate-700">{value}</p>
                </div>
              ))}
            </motion.div>

            {/* <motion.div variants={fadeIn} className="pt-4">
              <Button variant="outline" className="group border-slate-300">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
