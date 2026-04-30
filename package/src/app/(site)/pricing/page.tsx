"use client";

import React, { useEffect, useState } from "react";
import { pricingPlans } from "../../api/data";
import { motion } from "framer-motion";

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

/* ================= TYPES ================= */

type Country = {
  code: string;
  name: string;
  flag: string;
};

/* ================= COUNTRY LIST ================= */

const countries: Country[] = [
  { code: "US", name: "United States (USD)", flag: "🇺🇸" },
  { code: "UK", name: "United Kingdom (GBP)", flag: "🇬🇧" },
  { code: "IN", name: "India (INR)", flag: "🇮🇳" },
  { code: "AU", name: "Australia (AUD)", flag: "🇦🇺" },
  { code: "CA", name: "Canada (CAD)", flag: "🇨🇦" },
  { code: "DE", name: "Germany (EUR)", flag: "🇩🇪" },
  { code: "FR", name: "France (EUR)", flag: "🇫🇷" },
  { code: "SG", name: "Singapore (SGD)", flag: "🇸🇬" },
  { code: "AE", name: "UAE (AED)", flag: "🇦🇪" },
];

export default function PricingPage() {

  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [country, setCountry] = useState<Country>(countries[0]);
  const [open, setOpen] = useState(false);

  /* ================= AUTO COUNTRY DETECT ================= */

  useEffect(() => {
    const locale = navigator.language || "";

    if (locale.includes("en-IN"))
      setCountry(countries.find((c) => c.code === "IN")!);
    else if (locale.includes("en-GB"))
      setCountry(countries.find((c) => c.code === "UK")!);
    else if (locale.includes("en-AU"))
      setCountry(countries.find((c) => c.code === "AU")!);
    else setCountry(countries.find((c) => c.code === "US")!);
  }, []);

  const formatPrice = (value: number, currency: string) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <>
      {/* ================= HERO (MATCH CONTACT PAGE) ================= */}

      <section className="relative overflow-hidden pt-32 pb-24 text-center bg-gradient-to-b from-[#f8fbff] to-white">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[140px] rounded-full opacity-40"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative container mx-auto max-w-4xl px-4"
        >


          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[36px] md:text-[52px] font-semibold leading-tight text-midnight_text"
          >
            Simple Pricing Designed <br /> For Your Career Growth
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-DeepOcean max-w-2xl mx-auto"
          >
            Choose a plan that fits your job search goals.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg border border-gray-200"
          >
            <span className="text-DeepOcean">Home</span>
            <span>/</span>
            <span className="font-medium">Pricing</span>
          </motion.div>

          {/* ✅ UNDERLINE (add here) */}
          <motion.div
            variants={fadeUp}
            className="w-20 h-[3px] bg-gradient-to-r from-primary/40 to-primary mx-auto mt-10 rounded-full"
          />

        </motion.div>
      </section>

      {/* ================= PRICING SECTION ================= */}

      <section className="relative py-24 bg-section">

        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* COUNTRY SELECTOR */}

          <div className="relative flex justify-center mt-2 mb-6">

            <div className="relative">

              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-border shadow-sm hover:shadow-md transition"
              >
                <span className="text-lg">{country.flag}</span>
                <span className="text-sm text-midnight_text font-medium">
                  {country.name}
                </span>
                <span className="ml-2 text-grey">▼</span>
              </button>

              {open && (
                <div className="absolute mt-3 w-[300px] bg-white border border-border rounded-xl shadow-lg max-h-60 overflow-auto z-20">
                  {countries.map((c) => (
                    <div
                      key={c.code}
                      onClick={() => {
                        setCountry(c);
                        setOpen(false);
                      }}
                      className="px-4 py-3 cursor-pointer hover:bg-SkyBlueMist flex items-center gap-3"
                    >
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>

          {/* BILLING TOGGLE */}

          <div className="flex justify-center items-center gap-4 mt-6 mb-14">

            <span className={billing === "monthly" ? "font-semibold" : "text-grey"}>
              Monthly
            </span>

            <button
              className={`relative w-16 h-9 flex items-center rounded-full px-1 ${billing === "yearly" ? "bg-primary/70" : "bg-border"
                }`}
              onClick={() =>
                setBilling(billing === "monthly" ? "yearly" : "monthly")
              }
            >
              <span
                className={`absolute w-7 h-7 bg-white rounded-full shadow transition ${billing === "yearly" ? "translate-x-7" : "translate-x-0"
                  }`}
              />
            </button>

            <span className={billing === "yearly" ? "font-semibold" : "text-grey"}>
              Yearly
            </span>

          </div>

          {/* PRICING CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {pricingPlans.map((plan: any) => {

              const priceData =
                plan.prices[country.code] || plan.prices["US"];

              return (

                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-10 border transition-all hover:-translate-y-3 hover:shadow-2xl ${plan.highlighted
                    ? "border-primary bg-white shadow-xl scale-[1.03]"
                    : "border-border bg-white"
                    } flex flex-col items-center`}
                >

                  {plan.highlighted && (
                    <span className="absolute -top-4 right-6 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-xl font-semibold text-midnight_text">
                    {plan.title}
                  </h3>

                  <div className="flex items-end justify-center gap-1 mt-4">

                    <span className="text-4xl font-semibold text-midnight_text">
                      {formatPrice(
                        billing === "monthly"
                          ? priceData.monthly
                          : priceData.yearly,
                        priceData.currency
                      )}
                    </span>

                    <span className="text-sm text-grey mb-1">
                      /{billing === "monthly" ? "month" : "year"}
                    </span>

                  </div>

                  <ul className="mt-8 mb-10 space-y-4 text-grey text-left w-full">
                    {plan.features.map((f: string, i: number) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary">✔</span>{f}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl font-semibold ${plan.highlighted
                      ? "bg-primary text-white"
                      : "bg-SkyBlueMist text-primary hover:bg-primary hover:text-white"
                      }`}
                  >
                    {plan.cta}
                  </button>

                </div>

              );
            })}

          </div>

        </div>

      </section>
    </>
  );
}