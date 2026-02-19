import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Venus",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  return (
    <>
      {/* ⭐ HERO SUB HEADER */}
      {/* <HeroSub
        title="About Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      /> */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-white via-[#f8fafc] to-white">

        {/* 🌟 SIGNATURE BACKGROUND GLOW */}
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-indigo-100/50 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">

          {/* ⭐ SMALL LABEL */}
          <span className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
            About Us
          </span>

          {/* ⭐ SIGNATURE GRADIENT TITLE */}
          <h1 className="mt-6 text-[38px] md:text-[46px] font-semibold tracking-tight leading-[1.15] bg-gradient-to-r from-midnight_text to-slate-500 bg-clip-text text-transparent">
            Designing smarter digital experiences
            <br className="hidden md:block" />
            for modern businesses.
          </h1>

          {/* ⭐ DESCRIPTION */}
          <p className="mt-6 text-grey text-[17px] leading-relaxed max-w-2xl mx-auto">
            We help brands grow with powerful design, scalable technology, and
            user-focused solutions that deliver real impact.
          </p>

          {/* ⭐ GLASSMORPHISM BREADCRUMB (SIGNATURE STYLE) */}
          <div className="mt-10 inline-flex items-center gap-3 backdrop-blur-md bg-white/60 px-6 py-3 rounded-full shadow-md border border-white/40 text-sm">
            <a href="/" className="hover:text-primary transition">Home</a>
            <span className="opacity-40">/</span>
            <span className="text-midnight_text font-medium">About</span>
          </div>

          {/* ⭐ SIGNATURE UNDERLINE */}
          <div className="w-20 h-[3px] bg-gradient-to-r from-primary/40 to-primary mx-auto mt-10 rounded-full"></div>

        </div>
      </section>



      {/* 🔥 HERO SECTION — DESIGN FIXED */}
      <section className="bg-[#f8fafc]">
        <div className="container mx-auto max-w-6xl px-4 pt-12 pb-20 flex flex-col md:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="md:w-1/2 md:pl-4 flex flex-col gap-6">
            <h1 className="text-midnight_text dark:text-white text-4xl md:text-[44px] font-bold leading-[1.2]">
              Millions of jobs. <br /> Find the one that's right for you.
            </h1>

            <p className="text-grey dark:text-white/70 text-base leading-relaxed max-w-md">
              Search all the open positions on the web. Get your own personalized salary estimate.
              Read reviews on over 30000+ companies worldwide.
            </p>

            <ul className="space-y-3">
              {[
                "Digital Marketing Solutions for Tomorrow",
                "Our Talented & Experienced Marketing Agency",
                "Create your own skin to match your brand",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-grey dark:text-white/70">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" stroke="#2563eb" strokeWidth="2" fill="white" />
                    <path d="M6.5 10.5l2 2 4-4" stroke="#2563eb" strokeWidth="2" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="inline-flex w-fit px-6 py-3 bg-primary text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Contact us
            </a>
          </div>

          {/* RIGHT VIDEO */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <video
                controls
                poster="/images/hero/about-us-image-top.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/videos/about-hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </section>

      {/* 🔥 FEATURES SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-midnight_text">
            Here's why you'll love it Jobstack
          </h2>

          <p className="text-center text-grey mb-12">
            Search all the open positions on the web. Get your own personalized salary estimate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "24/7 Support", icon: "M3 5h18M5 3v18" },
              { title: "Tech & Startup Jobs", icon: "M12 6v6l4 2" },
              { title: "Quick & Easy", icon: "M4 12h16" },
              { title: "Save Time", icon: "M12 8v4l3 3" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 flex flex-col items-center shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#eef2f7]">
                  <svg width="24" height="24" fill="none" stroke="#3b82f6" strokeWidth="1.8">
                    <path d={item.icon} strokeLinecap="round" />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-midnight_text mb-2">
                  {item.title}
                </h3>

                <p className="text-grey text-center text-sm">
                  Many desktop publishing now use and a search for job.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 VIDEO + CONTENT SECTION */}
      <section className="py-24 container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-1/2">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/yba7hPeTSjk"
                title="YouTube video"
                allowFullScreen
              />
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-midnight_text">
              Get the job of your dreams quickly.
            </h2>

            <p className="text-grey leading-relaxed">
              Search all the open positions on the web. Get your own personalized salary estimate.
            </p>

            <ul className="space-y-3">
              {[
                "Digital Marketing Solutions for Tomorrow",
                "Our Talented & Experienced Marketing Agency",
                "Create your own skin to match your brand",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-grey">
                  <svg width="18" height="18">
                    <circle cx="9" cy="9" r="8" stroke="#2563eb" strokeWidth="2" fill="white" />
                    <path d="M5.5 9l2 2 4-4" stroke="#2563eb" strokeWidth="2" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ⭐ FAQ SECTION */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-100">
        <div className="container mx-auto max-w-6xl px-4">

          <h2 className="text-4xl font-bold text-center text-midnight_text">
            Questions & Answers
          </h2>

          <p className="text-center text-grey mt-3">
            Search all the open positions on the web. Get your own personalized salary estimate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-16">
            {[
              "How our Jobnova work ?",
              "How to make unlimited data entry ?",
              "What is the main process open account ?",
              "Is Jobnova safer to use with my account ?",
            ].map((title, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" fill="#f8fbff" />
                    <path d="M12 16h.01M12 13a2.5 2.5 0 10-2.5-2.5" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-midnight_text">
                    {title}
                  </h3>

                  <p className="text-grey mt-2 leading-relaxed text-[15px]">
                    Due to its widespread use as filler text for layouts, non-readability is of great importance.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ⭐ CTA */}
          <div className="mt-12 flex justify-center">
            <div className="bg-lightmode rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-md w-full md:w-auto">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0f0f0f" }}>
                  Explore a job now!
                </h3>
                <p className="text-darkmode/80 mb-4">
                  Search all the open positions on the web. Get your own personalized salary estimate.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="/apply" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-darkmode transition">
                  Apply Now
                </a>
                <a href="/learn-more" className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                  Learn More
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default page;
