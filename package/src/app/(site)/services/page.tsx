
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";
export const metadata: Metadata = {
  title: "Services | Upaya",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-white via-[#f8fafc] to-white">

        {/* 🌟 SIGNATURE BACKGROUND GLOW */}
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-indigo-100/50 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">

          {/* ⭐ SMALL LABEL */}
          <span className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
            Our Services
          </span>

          {/* ⭐ UPDATED BUSINESS TITLE */}
          <h1 className="mt-6 text-[38px] md:text-[46px] font-semibold tracking-tight leading-[1.15] bg-gradient-to-r from-midnight_text to-slate-500 bg-clip-text text-transparent">
            End-to-End Job Placement Support
            <br className="hidden md:block" />
            Built Around Your Career Success
          </h1>

          {/* ⭐ UPDATED DESCRIPTION */}
          <p className="mt-6 text-grey text-[17px] leading-relaxed max-w-2xl mx-auto">
            We help busy professionals get hired faster by manually applying to
            skill-matched jobs, optimising resumes, preparing for interviews, and
            supporting you until placement — real humans, real career support.
          </p>

          {/* ⭐ GLASSMORPHISM BREADCRUMB */}
          <div className="mt-10 inline-flex items-center gap-3 backdrop-blur-md bg-white/60 px-6 py-3 rounded-full shadow-md border border-white/40 text-sm">
            <a href="/" className="hover:text-primary transition">Home</a>
            <span className="opacity-40">/</span>
            <span className="text-midnight_text font-medium">Services</span>
          </div>

          {/* ⭐ SIGNATURE UNDERLINE */}
          <div className="w-20 h-[3px] bg-gradient-to-r from-primary/40 to-primary mx-auto mt-10 rounded-full"></div>

        </div>
      </section>

      <Services />
    </>
  );
};

export default page;
