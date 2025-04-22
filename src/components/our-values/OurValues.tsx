"use client";
import React from "react";
import { motion } from "motion/react";
import { Lightbulb, Settings, Award, Shield, Users } from "lucide-react";
import Image from "next/image";

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const coreValues: ValueProps[] = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    description:
      "Continuously advancing technology to deliver creative and groundbreaking solutions.",
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Customization",
    description:
      "Ensuring tailored solutions that meet the specific needs and vision of every client.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Quality",
    description:
      "Upholding excellence and precision in all products and services.",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Integrity",
    description:
      "Building trust through transparency, ethical practices, and accountability.",
    color: "bg-green-50 text-green-600 border-green-200",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaboration",
    description:
      "Partnering with clients to achieve mutual success and create lasting impact.",
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
];

const CoreValues: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden" id="values">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive/20 to-transparent"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-slate-50 -z-10"></div>
      <div className="absolute top-40 left-10 w-20 h-20 rotate-45 bg-destructive/5 -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeIn} className="inline-block mb-4">
            <span className="px-3 py-1 text-sm font-medium bg-destructive/10 text-destructive rounded-full">
              What Drives Us
            </span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Core <span className="text-destructive">Values</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="max-w-2xl mx-auto text-lg text-slate-600"
          >
            At Ostendo, our values guide everything we do. They shape our
            approach to technology, our relationships with clients, and our
            vision for the future.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  },
                },
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-slate-100"
            >
              <div className="p-6">
                <div
                  className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 ${value.color}`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-destructive/30 via-destructive to-destructive/30"></div>
            </motion.div>
          ))}
        </div>

        {/* Vision statement with image */}
        <motion.div
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={fadeIn}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/vision.JPG" // Replace with your actual image
                alt="Ostendo Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-destructive">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Our Vision
                </h3>
                <p className="text-slate-700">
                  To be the premier provider of interactive and integrated
                  technology solutions, driving transformation and shaping the
                  future of industries with innovative and customized
                  approaches.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              How Our Values{" "}
              <span className="text-destructive">Drive Results</span>
            </h3>
            <p className="text-lg text-slate-600">
              Our core values aren&apos;t just words on a page—they&apos;re the
              principles that guide our daily operations and long-term strategy.
              By staying true to these values, we deliver exceptional results
              for our clients across diverse industries.
            </p>

            {/* Value in action examples */}
            <div className="space-y-4 pt-4">
              {[
                {
                  title: "Client-Centered Approach",
                  description:
                    "We listen carefully to understand your unique challenges and goals.",
                },
                {
                  title: "Continuous Improvement",
                  description:
                    "We constantly refine our processes and technologies to stay ahead.",
                },
                {
                  title: "Lasting Partnerships",
                  description:
                    "We build relationships that extend beyond project completion.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-1 self-stretch bg-destructive rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
