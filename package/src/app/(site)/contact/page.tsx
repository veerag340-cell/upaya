"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Page() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-24 text-center bg-gradient-to-b from-[#f8fbff] to-white dark:from-darkmode dark:to-darkmode">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[140px] rounded-full opacity-40"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative container mx-auto max-w-4xl px-4"
        >
          <motion.span
            variants={fadeUp}
            className="text-primary text-xs font-semibold tracking-[0.4em] uppercase"
          >
            Contact Us
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[36px] md:text-[52px] font-semibold"
          >
            Let’s Build Something Amazing Together
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-DeepOcean dark:text-white/60 max-w-2xl mx-auto"
          >
            Whether you’re exploring new opportunities or need expert guidance,
            our global team is here to help you move forward faster.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="py-20 bg-white dark:bg-darkmode">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10"
        >
          {["Email Support", "Career Opportunities"].map((title, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-10 border shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="mb-4">
                Our team will respond quickly and guide you through every step.
              </p>
              <Link href="#" className="text-primary font-medium">
                Learn more →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= GLOBAL REACH MAP ================= */}
      {/* ================= GLOBAL REACH MAP ================= */}
      <section className="py-24 bg-gradient-to-b from-[#f8fbff] to-white relative">
        <div className="text-center mb-14">
          <h2 className="text-[42px] font-bold text-midnight_text mb-4">
            Our Global Reach
          </h2>
          <p className="text-DeepOcean text-lg">
            We support job seekers across USA and India.
          </p>
        </div>

        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative w-fit mx-auto">

            {/* Glow background */}
            <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[500px] h-[250px] bg-blue-200/30 blur-[120px] rounded-full"></div>

            {/* Map */}
            <img
              src="/images/map/world-map.png"
              alt="World Map"
              className="w-[600px] md:w-[700px] opacity-90 relative z-10"
            />

            {/* USA - Correct Position */}
            <div className="absolute z-20" style={{ top: "41%", left: "27%" }}>
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600"></span>
              </span>
            </div>

            {/* India - Hyderabad Correct Position */}
            <div className="absolute z-20" style={{ top: "56%", left: "69%" }}>
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
              </span>
            </div>

          </div>
        </div>
      </section>
      {/* ================= OUR OFFICES ================= */}
      <section className="py-24 bg-white dark:bg-darkmode">
        <div className="text-center mb-14">
          <h2 className="text-[40px] font-semibold">Our Offices</h2>
          <p className="text-DeepOcean dark:text-white/60">
            A global presence to support your journey.
          </p>
        </div>

        <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-2xl p-10 border hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">
              India Head Office 🇮🇳
            </h3>
            <p>Bengaluru, Karnataka, India</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 border hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">USA Office 🇺🇸</h3>
            <p>San Francisco, CA, USA</p>
          </div>
        </div>
      </section>
    </>
  );
}