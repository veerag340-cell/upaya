"use client";

import React, { useState } from "react";
import { pricingPlans } from "../../api/data";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="relative py-24 bg-section overflow-hidden">
      {/* ===== SOFT BACKGROUND GLOW ===== */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-100/40 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-indigo-100/40 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* ===== HEADER ===== */}
        <span className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
          Pricing Plans
        </span>

        <h2 className="mt-5 text-[32px] md:text-[38px] font-semibold leading-[1.25] tracking-tight text-midnight_text">
          Simple Pricing Designed For Your Career Growth
        </h2>

        <p className="text-grey text-[16px] mt-4 max-w-xl mx-auto leading-relaxed">
          Choose a plan that fits your job search goals. Our team applies,
          prepares, and supports you until you get placed.
        </p>
      {/* ⭐ GLASSMORPHISM BREADCRUMB */}
          <div className="mt-10 inline-flex items-center gap-3 backdrop-blur-md bg-white/60 px-6 py-3 rounded-full shadow-md border border-white/40 text-sm">
            <a href="/" className="hover:text-primary transition">Home</a>
            <span className="opacity-40">/</span>
            <span className="text-midnight_text font-medium">Pricing</span>
          </div>

          {/* ⭐ SIGNATURE UNDERLINE */}
          <div className="w-20 h-[3px] bg-gradient-to-r from-primary/40 to-primary mx-auto mt-10 rounded-full"></div>
        {/* <div className="w-24 h-[3px] bg-gradient-to-r from-primary/40 to-primary mx-auto mt-8 rounded-full"></div> */}

        {/* ===== BILLING TOGGLE ===== */}
        <div className="flex justify-center items-center gap-4 mt-14 mb-14">
          <span className={billing === "monthly" ? "font-semibold text-midnight_text" : "text-grey"}>
            Monthly
          </span>

          <button
            className={`relative w-16 h-9 flex items-center rounded-full px-1 transition-all duration-300 ${
              billing === "yearly" ? "bg-primary/70" : "bg-border"
            }`}
            onClick={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
          >
            <span
              className={`absolute w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-300 ${
                billing === "yearly" ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>

          <span className={billing === "yearly" ? "font-semibold text-midnight_text" : "text-grey"}>
            Yearly
          </span>
        </div>

        {/* ===== PRICING CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-10 border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                plan.highlighted
                  ? "border-primary bg-white shadow-xl scale-[1.03]"
                  : "border-border bg-white hover:border-primary/40"
              } flex flex-col items-center`}
            >
              {/* POPULAR BADGE */}
              {plan.highlighted && (
                <span className="absolute -top-4 right-6 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                  Most Popular
                </span>
              )}

              {/* PLAN TITLE */}
              <h3 className="text-xl font-semibold text-midnight_text">
                {plan.title}
              </h3>

              {/* ===== CLASSIC PRICE STYLE ===== */}
              <div className="flex items-end justify-center gap-1 mt-4">
                <span className="text-xl font-medium text-grey">₹</span>

                <span className="text-4xl font-semibold text-midnight_text tracking-tight">
                  {plan.price}
                </span>

                <span className="text-sm text-grey mb-1">
                  {plan.period}
                </span>
              </div>

              {/* FEATURES */}
              <ul className="mt-8 mb-10 space-y-4 text-grey text-base w-full text-left">
                {plan.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-primary text-lg">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-white hover:scale-[1.04] hover:shadow-lg"
                    : "bg-SkyBlueMist text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
