"use client";

import React from "react";
import { motion } from "framer-motion";
import Services from "@/components/Home/Services";

/* ================= ANIMATION ================= */

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

const page = () => {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-white via-[#f8fafc] to-white">

        {/* BACKGROUND GLOW */}
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-indigo-100/50 rounded-full blur-3xl"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="container mx-auto max-w-4xl px-4 text-center relative z-10"
        >


          {/* TITLE */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[38px] md:text-[46px] font-semibold tracking-tight leading-[1.15] bg-gradient-to-r from-midnight_text to-slate-500 bg-clip-text text-transparent"
          >
            End-to-End Job Placement Support
            <br className="hidden md:block" />
            Built Around Your Career Success
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-grey text-[17px] leading-relaxed max-w-2xl mx-auto"
          >
            We help busy professionals get hired faster by manually applying to
            skill-matched jobs, optimising resumes, preparing for interviews,
            and supporting you until placement — real humans, real career support.
          </motion.p>

          {/* BREADCRUMB */}
          <motion.div
            variants={fadeUp}
            className="mt-10 inline-flex items-center gap-3 backdrop-blur-md bg-white/60 px-6 py-3 rounded-full shadow-md border border-white/40 text-sm"
          >
            <a href="/" className="hover:text-primary transition">
              Home
            </a>
            <span className="opacity-40">/</span>
            <span className="text-midnight_text font-medium">
              Services
            </span>
          </motion.div>

          {/* UNDERLINE */}
          <motion.div
            variants={fadeUp}
            className="w-20 h-[3px] bg-gradient-to-r from-primary/40 to-primary mx-auto mt-10 rounded-full"
          />

        </motion.div>

      </section>

      <Services />
    </>
  );
};

export default page;