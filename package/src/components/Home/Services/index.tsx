import React from "react";
import Link from "next/link";
import { Servicebox } from "@/app/api/data";
import { Icon } from "@iconify/react";

const Services = () => {
  return (
    <section className="bg-section dark:bg-darklight py-24" id="services">
      <div className="container mx-auto max-w-6xl px-4">

        {/* ===== HEADER ===== */}
        <div
          className="text-center max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex gap-2 items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse"></span>
            <span className="text-sm font-medium text-midnight_text dark:text-white/50">
              our placement services
            </span>
          </div>

          <h2 className="sm:text-4xl text-[28px] leading-tight font-bold pt-6 text-midnight_text dark:text-white">
            We Apply Jobs For You — Real Humans, Real Career Support
          </h2>

          <p className="pt-4 text-midnight_text/70 dark:text-white/50">
            Our team manually applies to relevant jobs, prepares you for
            interviews, and supports you until placement.
          </p>
        </div>

        {/* ===== SERVICES CARDS ===== */}
        <div className="grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7 mt-16">
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="col-span-4 bg-white dark:bg-darkmode rounded-lg py-12 px-8 text-center border border-gray-100 dark:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              {index === 0 && (
                <Icon
                  icon="mdi:file-account-outline"
                  width="36"
                  className="mx-auto text-primary transition-transform duration-300 group-hover:scale-110"
                />
              )}
              {index === 1 && (
                <Icon
                  icon="mdi:briefcase-check-outline"
                  width="36"
                  className="mx-auto text-primary transition-transform duration-300 group-hover:scale-110"
                />
              )}
              {index === 2 && (
                <Icon
                  icon="mdi:account-voice"
                  width="36"
                  className="mx-auto text-primary transition-transform duration-300 group-hover:scale-110"
                />
              )}

              <h3 className="text-xl font-semibold pt-5">
                {item.title}
              </h3>

              <p className="pt-3 text-sm dark:text-white/60">
                {item.description}
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1 mt-6 text-primary font-medium hover:underline transition"
              >
                Get Started
                <Icon icon="ei:chevron-right" width="20" />
              </Link>
            </div>
          ))}
        </div>

        {/* ===== PROCESS SECTION (SMOOTH UX) ===== */}
        <div
          className="mt-28 text-center"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <h3 className="text-3xl font-semibold text-midnight_text dark:text-white">
            How UpayaInd Works
          </h3>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: "mdi:file-document-outline", title: "Share Your Profile" },
              { icon: "mdi:briefcase-plus-outline", title: "We Apply Jobs Daily" },
              { icon: "mdi:account-tie-voice", title: "Mock Interviews" },
              { icon: "mdi:trophy-outline", title: "Get Placed Faster" },
            ].map((step, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 120}
                className="bg-white dark:bg-darkmode rounded-lg p-8 border border-gray-100 dark:border-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <Icon
                  icon={step.icon}
                  width="32"
                  className="mx-auto text-primary transition-transform duration-300 group-hover:scale-110"
                />
                <p className="mt-4 font-medium dark:text-white">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CTA SECTION (SOFT ANIMATION) ===== */}
        <div
          className="mt-28 bg-white dark:bg-darkmode border border-gray-100 dark:border-white/10 rounded-xl text-center py-14 px-6 transition-all duration-500 hover:shadow-xl"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-semibold text-midnight_text dark:text-white">
            Stop Applying Alone. Let Experts Handle It.
          </h3>

          <p className="mt-3 text-midnight_text/70 dark:text-white/60">
            Daily job applications, recruiter follow-ups, mock interviews, and
            placement support from real career experts.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Request Career Assistance
            <Icon icon="ei:chevron-right" width="22" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
