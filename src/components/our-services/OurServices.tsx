"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Monitor,
  Code,
  Box,
  Layers,
  ChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

interface ServiceProps {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  image: string;
}

const services: ServiceProps[] = [
  {
    id: 1,
    title: "Customized Interactive Solutions",
    description:
      "Personalized systems designed to enhance collaboration and captivate audiences.",
    benefits: [
      "Tailored functionalities to meet your unique requirements",
      "Improved user engagement and operational efficiency",
    ],
    icon: <Monitor className="h-6 w-6" />,
    image: "/customized-interactive-solutions.png",
  },
  {
    id: 2,
    title: "Software Solutions",
    description:
      "Advanced software developed to complement and optimize your technology ecosystem.",
    benefits: [
      "Streamlined processes and increased productivity",
      "User-friendly interfaces for effortless adoption",
    ],
    icon: <Code className="h-6 w-6" />,
    image: "/software.png",
  },
  {
    id: 3,
    title: "Screen Lifting Mechanisms",
    description:
      "Innovative designs for flexible and sophisticated display setups.",
    benefits: [
      "Space-saving solutions with smooth, ergonomic functionality",
      "Adaptable to various environments and applications",
    ],
    icon: <Layers className="h-6 w-6" />,
    image: "/screen-lifting.JPG",
  },
  {
    id: 4,
    title: "Display Kiosks and Podiums",
    description:
      "Customized structures that blend form and function for professional presentations.",
    benefits: [
      "Visually appealing designs to represent your brand effectively",
      "Durable and user-friendly for seamless interaction and display",
    ],
    icon: <Box className="h-6 w-6" />,
    image: "/Kiosks.png",
  },
];

const OurServices: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative py-20 bg-slate-50 overflow-hidden"
      id="services"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/80 via-destructive/20 to-destructive/80"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-white/50 -z-10"></div>
      <div className="absolute top-40 left-20 w-40 h-40 rotate-45 bg-destructive/5 -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeIn} className="inline-block mb-4">
            <span className="px-3 py-1 text-sm font-medium bg-destructive/10 text-destructive rounded-full">
              Our Expertise
            </span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Key Products and{" "}
            <span className="text-destructive">Services</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="max-w-2xl mx-auto text-lg text-slate-600"
          >
            We deliver cutting-edge, customized technology solutions that
            inspire innovation, enhance efficiency, and empower businesses
            across diverse industries.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service selection sidebar */}
          <motion.div
            className="lg:col-span-4 space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className={`relative p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-white shadow-md border-l-4 border-destructive"
                    : "bg-white/50 hover:bg-white hover:shadow-sm"
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      activeService === service.id
                        ? "bg-destructive/10 text-destructive"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-medium ${
                        activeService === service.id
                          ? "text-destructive"
                          : "text-slate-800"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 mt-1 ${
                      activeService === service.id
                        ? "text-destructive"
                        : "text-slate-300"
                    }`}
                  />
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeIn} className="pt-4">
              <Button
                variant="outline"
                className="w-full group border-slate-300"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Service detail display */}
          <motion.div
            className="lg:col-span-8 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className={`${
                  activeService === service.id ? "block" : "hidden"
                }`}
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-white/90 max-w-lg">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-medium text-slate-900 mb-4">
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="p-1 bg-destructive/10 rounded-full mt-0.5">
                          <ChevronRight className="h-4 w-4 text-destructive" />
                        </div>
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="mt-6 flex justify-end">
                    <Button variant="destructive" size="sm" className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Industries we serve */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={fadeIn}
            className="text-xl font-bold text-slate-900 mb-6"
          >
            Industries We Serve
          </motion.h3>

          <motion.div
            variants={fadeIn}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { name: "Corporate Sector", icon: "🏢" },
              { name: "Educational Institutions", icon: "🎓" },
              { name: "Retail Businesses", icon: "🛍️" },
              { name: "Hospitality & Entertainment", icon: "🎭" },
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow-sm border border-slate-100"
              >
                <div className="text-2xl mb-2">{industry.icon}</div>
                <h4 className="font-medium text-slate-800">{industry.name}</h4>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
