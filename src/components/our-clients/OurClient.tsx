"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const clientLogos = [
  // { name: "Saib", logo: "/Clients/client1.jpg" },
  { name: "ATI", logo: "/Clients/client2.png" },
  // { name: "Carina", logo: "/Clients/client3.png" },
  // { name: "Audio", logo: "/Clients/client4.png" },
  // { name: "dentsu", logo: "/Clients/client5.png" },
  // { name: "e&", logo: "/Clients/client6.png" },
  // { name: "FabMisr", logo: "/Clients/client7.png" },
  { name: "المتحف الكبير", logo: "/Clients/client8.png" },
  // { name: "GET group", logo: "/Clients/client9.png" },
  // { name: "Gulfmed", logo: "/Clients/client10.png" },
  // { name: "Helwan cement", logo: "/Clients/client11.png" },
  // { name: "EGMED", logo: "/Clients/client12.png" },
  // { name: "inside desgin", logo: "/Clients/client13.png" },
  // { name: "isobar", logo: "/Clients/client14.png" },
  // { name: "Jrm", logo: "/Clients/client15.png" },
  { name: "Logica", logo: "/Clients/client16.png" },
  // { name: "mercedes", logo: "/Clients/client17.png" },
  { name: "وزارة الاستثمار", logo: "/Clients/client18.png" },
  // { name: "وزارة الدخلية", logo: "/Clients/client19.png" },
  // { name: "Misr Cement group", logo: "/Clients/client20.png" },
  { name: "misr pharmacies", logo: "/Clients/client21.png" },
  { name: "Newcity", logo: "/Clients/client22.png" },
  // { name: "palm hills", logo: "/Clients/client23.svg" },
  // { name: "Egyptpost", logo: "/Clients/client24.png" },
  // { name: "Riadco", logo: "/Clients/client25.png" },
  { name: "صيديلية رشدي", logo: "/Clients/client26.jpg" },
  // { name: "Saudi Embassy", logo: "/Clients/client27.png" },
  { name: "Sodic", logo: "/Clients/client28.svg" },
  // {
  //   name: "international relations and cooperation",
  //   logo: "/Clients/client29.png",
  // },
  // { name: "suez cement", logo: "/Clients/client30.png" },
  // { name: "ta telecom", logo: "/Clients/client31.png" },
  { name: "takween", logo: "/Clients/client32.jpg" },
  { name: "teleperformance", logo: "/Clients/client33.png" },
  // { name: "vfs.global", logo: "/Clients/client34.png" },
  { name: "vodafone", logo: "/Clients/client35.png" },
  // { name: "Smoha", logo: "/Clients/client36.png" },
  // { name: "Manara", logo: "/Clients/client37.png" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b ">
      <div className="container mx-auto px-6 relative z-10">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-black">
              A selection of our clients
            </h3>
            <motion.h3
              variants={fadeIn}
              className="text-xl font-bold text-slate-900 mb-6"
            >
              Trusted by Leading Organizations Across Industries
            </motion.h3>
            <div className="h-1 w-24 bg-gradient-to-r from-destructive to-[#7CB9E8] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/100 backdrop-blur-xl rounded-xl border border-destructive/20 p-6 flex items-center justify-center h-24 shadow-lg shadow-destructive-900/10 hover:shadow-destructive-500/20 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={120}
                  className="max-h-15 w-full object-contain  opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
