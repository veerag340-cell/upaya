import React from "react";
import Image from "next/image";

const Contactform = () => {
  return (
    <section className="relative overflow-x-hidden bg-[#081c3a]">
      <div className="container mx-auto max-w-6xl px-4 py-24">
        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-14 gap-10 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="md:col-span-6 text-white">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-white/80">
                Career Support
              </span>
            </div>

            <h2 className="text-4xl leading-tight font-bold py-10">
              Let’s Help You Get Interview Calls
            </h2>

            <div className="grid grid-cols-2 gap-y-8 pb-10 border-b border-white/10">
              <div>
                <p className="text-white/50 text-sm">Phone</p>
                <p className="text-lg font-medium">
                  +1 (724) 713-9241
                </p>
              </div>

              <div>
                <p className="text-white/50 text-sm">Email</p>
                <p className="text-lg font-medium">
                  sagar@upaya.com
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-white/50 text-sm">Location</p>
                <p className="text-lg font-medium">
                  Mark Avenue, Dallas Road, New York
                </p>
              </div>
            </div>

            {/* TRUSTED LOGOS */}
            <div className="pt-10">
              <p className="text-white/50 mb-5">Trusted by</p>

              <div className="flex flex-wrap gap-10 items-center opacity-70">
                <Image src="/images/contact/google-pay.png" alt="" width={90} height={20}/>
                <Image src="/images/contact/play-juction.png" alt="" width={90} height={20}/>
                <Image src="/images/contact/stripe.png" alt="" width={70} height={20}/>
                <Image src="/images/contact/wise.png" alt="" width={70} height={20}/>
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="md:col-span-6 relative">

            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-10">

              <h2 className="text-3xl font-semibold text-[#0f2c5c] mb-6">
                Start Your Job Search With Us
              </h2>

              <form className="flex flex-wrap gap-4">

                {/* NAME ROW */}
                <div className="flex gap-4 w-full">
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                    type="text"
                    placeholder="First name"
                  />
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                    type="text"
                    placeholder="Last name"
                  />
                </div>

                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                  placeholder="youremail@website.com"
                />

                <input
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                  type="text"
                  placeholder="Country"
                />

                <textarea
                  className="h-36 w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                  placeholder="I have read and acknowledge"
                />

                {/* CHECKBOX */}
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="mt-1 accent-[#2563eb]" />
                  <p>
                    I have read and acknowledge the{" "}
                    <span className="text-[#2563eb] font-medium cursor-pointer">
                      Terms and Conditions
                    </span>
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  className="w-full mt-2 py-4 rounded-xl text-white font-semibold
                  bg-gradient-to-r from-[#3b82f6] to-[#2563eb]
                  hover:shadow-xl hover:-translate-y-[2px]
                  transition-all duration-300"
                  type="submit">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;