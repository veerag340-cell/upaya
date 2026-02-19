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
      {/* ================= ULTRA PREMIUM HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-24 text-center bg-gradient-to-b from-[#f8fbff] to-white dark:from-darkmode dark:to-darkmode">
        
        {/* SOFT GLOW BACKGROUND */}
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
            className="mt-6 text-[36px] md:text-[52px] font-semibold leading-tight text-midnight_text dark:text-white"
          >
            Let’s Build Something <br /> Amazing Together
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-DeepOcean dark:text-white/60 max-w-2xl mx-auto"
          >
            Whether you’re exploring new opportunities or need expert guidance,
            our global team is here to help you move forward faster.
          </motion.p>

          {/* PREMIUM BREADCRUMB */}
          <motion.div
            variants={fadeUp}
            className="mt-10 inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl dark:bg-darklight px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-dark_border"
          >
            <span className="text-DeepOcean dark:text-white/60">Home</span>
            <span>/</span>
            <span className="font-medium">Contact</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= GLASS CONTACT CARDS ================= */}
      <section className="py-20 bg-white dark:bg-darkmode">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10"
        >
          {["Email Support", "Career Opportunities"].map((title, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white/60 backdrop-blur-xl dark:bg-darklight rounded-2xl p-10 border border-gray-200 dark:border-dark_border shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-DeepOcean dark:text-white/60 mb-4">
                Our team will respond quickly and guide you through every step.
              </p>
              <Link href="#" className="text-primary font-medium">
                Learn more →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= FLOATING CONSULTATION FORM ================= */}
      <section className="py-24 bg-gray-50 dark:bg-darkmode">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl px-4 grid md:grid-cols-12 gap-16 items-center"
        >
          <motion.div
            variants={fadeUp}
            className="col-span-6 bg-white dark:bg-darklight rounded-3xl shadow-xl p-10"
          >
            <h2 className="text-[36px] font-semibold mb-8">
              Get Online Consultation
            </h2>

            <form className="grid grid-cols-2 gap-5">
              <input className="inputUltra" placeholder="First Name*" />
              <input className="inputUltra" placeholder="Last Name*" />
              <input className="inputUltra col-span-2" placeholder="Email*" />

              <select className="inputUltra col-span-2">
                <option>Choose a specialist</option>
                <option>Consulting</option>
                <option>Development</option>
              </select>

              <input type="date" className="inputUltra" />
              <input type="time" className="inputUltra" />

              <button className="col-span-2 bg-primary text-white py-4 rounded-xl hover:scale-[1.02] transition">
                Make an appointment
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="col-span-6"
          >
            <Image
              src="/images/contact-page/contact.jpg"
              alt="contact"
              width={1200}
              height={800}
              className="rounded-3xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= GLOBAL OFFICES ================= */}
      <section className="py-24 bg-white dark:bg-darkmode">
        <div className="text-center mb-14">
          <h2 className="text-[40px] font-semibold">Our Offices</h2>
          <p className="text-DeepOcean dark:text-white/60">
            A global presence to support your journey.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10"
        >
          {[
            {
              title: "India Head Office 🇮🇳",
              address:
                "Upaya Technologies Pvt Ltd, Bengaluru, Karnataka 560025",
            },
            {
              title: "USA Office 🇺🇸",
              address: "548 Market Street, San Francisco, CA 94104",
            },
          ].map((office, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-gray-50 dark:bg-darklight rounded-2xl p-10 border border-gray-200 dark:border-dark_border hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{office.title}</h3>
              <p className="text-DeepOcean dark:text-white/60">
                {office.address}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* INPUT STYLE */}
      <style jsx>{`
        .inputUltra {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          background: transparent;
        }
      `}</style>
    </>
  );
}
