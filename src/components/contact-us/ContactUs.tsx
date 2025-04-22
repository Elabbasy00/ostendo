"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    fetch("/api/contact/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(formState),
    })
      .then(() => {
        setFormStatus("success");

        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setTimeout(() => setFormStatus("idle"), 5000);
      })
      .catch((e) => {
        console.log(e);
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      });
  };

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
      id="contact"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/80 via-destructive/20 to-destructive/80"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-destructive/5 -z-10"></div>
      <div className="absolute top-20 right-10 w-20 h-20 rotate-45 bg-blue-500/5 -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeIn} className="inline-block mb-4">
            <span className="px-3 py-1 text-sm font-medium bg-destructive/10 text-destructive rounded-full">
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Let&apos;s Discuss Your{" "}
            <span className="text-destructive">Project</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="max-w-2xl mx-auto text-lg text-slate-600"
          >
            Ready to transform your ideas into reality? Contact us today to
            discuss how Ostendo&apos;s customized technology solutions can help
            your business thrive.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact information */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: <Phone className="h-5 w-5" />,
                    title: "Phone",
                    content: "+201029933691",
                    action: "tel:+201029933691",
                  },
                  {
                    icon: <Mail className="h-5 w-5" />,
                    title: "Email",
                    content: "info@ostendo.com",
                    action: "mailto:info@ostendo.com",
                  },
                  {
                    icon: <MapPin className="h-5 w-5" />,
                    title: "Address",
                    content: "Maddi Cairo, Egypt",
                    action: "https://maps.google.com",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "Business Hours",
                    content: "Monday - Friday: 9:00 AM - 6:00 PM",
                    action: null,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-destructive/10 text-destructive rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-700">
                        {item.title}
                      </h4>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-destructive hover:underline"
                          target={
                            item.action.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.action.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-slate-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-700"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-slate-300 focus:border-destructive focus:ring-destructive/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border-slate-300 focus:border-destructive focus:ring-destructive/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-slate-700"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="border-slate-300 focus:border-destructive focus:ring-destructive/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-slate-700"
                    >
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="border-slate-300 focus:border-destructive focus:ring-destructive/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and requirements..."
                    required
                    rows={5}
                    className="border-slate-300 focus:border-destructive focus:ring-destructive/10"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-sm text-slate-500">
                    <span className="text-destructive">*</span> Required fields
                  </p>

                  <Button
                    type="submit"
                    variant="destructive"
                    className="px-6"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>

                {/* Form status messages */}
                {formStatus === "success" && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <p>
                      Your message has been sent successfully. We&apos;ll get
                      back to you soon!
                    </p>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p>
                      There was an error sending your message. Please try again
                      later.
                    </p>
                  </div>
                )}
              </form>
            </div>
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
            Trusted by Leading Organizations Across Industries
          </motion.h3>

          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-8 opacity-70"
          >
            {/* Replace with actual client logos */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center"
              >
                <span className="text-slate-400 font-medium">LOGO {i + 1}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
