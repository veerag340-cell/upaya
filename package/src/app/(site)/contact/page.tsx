"use client";

import React from "react";
import Link from "next/link";
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
      <section className="relative overflow-hidden pt-32 pb-24 text-center bg-gradient-to-b from-[#f8fbff] to-white">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[140px] rounded-full opacity-40"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative container mx-auto max-w-4xl px-4"
        >

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[36px] md:text-[52px] font-semibold leading-tight text-midnight_text"
          >
            Let’s Build Something Amazing <br /> Together
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-DeepOcean max-w-2xl mx-auto"
          >
            Whether you’re exploring new opportunities or need expert guidance,
            our team is here to support you at every step of your journey.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            variants={fadeUp}
            className="mt-10 inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg border border-gray-200"
          >
            <span className="text-DeepOcean">Home</span>
            <span>/</span>
            <span className="font-medium">Contact</span>
          </motion.div>

          {/* ✅ UNDERLINE (correct position) */}
          <motion.div
            variants={fadeUp}
            className="w-20 h-[3px] bg-gradient-to-r from-primary/40 to-primary mx-auto mt-10 rounded-full"
          />

        </motion.div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="py-20 bg-white">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10"
        >
          {[
            {
              title: "We’re Here to Help",
              description:
                "Reach out to our dedicated support team anytime. We provide quick, reliable guidance to resolve your queries and help you move forward with confidence.",
              highlight: "24/7 Support • Fast Response • Reliable Assistance",
            },
            {
              title: "Career Support & Job Assistance",
              description:
                "Struggling with job applications and not getting responses? We simplify the process for you. Our team helps you find the right jobs, applies on your behalf, and guides you through every step until you successfully secure a job.",
              highlight:
                "We Apply for You • Smart Job Search • End-to-End Guidance",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-10 border shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>

              <p className="text-sm font-medium text-blue-600">
                {item.highlight}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8fbff]">
        <div className="container mx-auto max-w-5xl px-4">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-[40px] font-semibold">
              Get in Touch
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4">
              Have questions? Fill out the form and we’ll get back to you.
            </motion.p>
          </motion.div>

          <motion.form
            variants={container}
            initial="hidden"
            whileInView="show"
            className="bg-white rounded-2xl shadow-lg p-10 grid md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeUp} className="flex flex-col">
              <label className="mb-2 font-medium">Full Name</label>
              <input className="border rounded-lg px-4 py-3" />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col">
              <label className="mb-2 font-medium">Email</label>
              <input className="border rounded-lg px-4 py-3" />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col md:col-span-2">
              <label className="mb-2 font-medium">Subject</label>
              <input className="border rounded-lg px-4 py-3" />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col md:col-span-2">
              <label className="mb-2 font-medium">Message</label>
              <textarea rows={5} className="border rounded-lg px-4 py-3" />
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2 text-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg">
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* ================= GLOBAL REACH MAP (YOUR ORIGINAL) ================= */}
      <section className="py-24 bg-gradient-to-b from-[#f8fbff] to-white relative">
        <div className="text-center mb-14">
          <h2 className="text-[42px] font-bold mb-4">Our Global Reach</h2>
          <p>We support job seekers across USA and India.</p>
        </div>

        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative w-fit mx-auto">

            {/* Glow */}
            <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[500px] h-[250px] bg-blue-200/30 blur-[120px] rounded-full"></div>

            {/* Map */}
            <img
              src="/images/map/world-map.png"
              alt="World Map"
              className="w-[600px] md:w-[700px] opacity-90 relative z-10"
            />

            {/* USA Dot */}
            <div className="absolute z-20" style={{ top: "41%", left: "27%" }}>
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative rounded-full h-4 w-4 bg-blue-600"></span>
              </span>
            </div>

            {/* India Dot */}
            <div className="absolute z-20" style={{ top: "56%", left: "69%" }}>
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative rounded-full h-4 w-4 bg-red-600"></span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OFFICES ================= */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-[40px] font-semibold mb-4">Our Offices</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-10">
          <div className="bg-gray-50 p-10 rounded-2xl border">
            <h3 className="text-xl font-semibold mb-2">India Office 🇮🇳</h3>
            <p>Bengaluru, Karnataka, India</p>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl border">
            <h3 className="text-xl font-semibold mb-2">USA Office 🇺🇸</h3>
            <p>San Francisco, CA, USA</p>
          </div>
        </div>
      </section>
    </>
  );
}