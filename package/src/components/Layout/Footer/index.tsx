"use client";

import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="relative bg-[#081c3a] text-white overflow-hidden">

      {/* TOP GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent"></div>

      <div className="container mx-auto max-w-6xl px-6 py-16">

        <div className="grid md:grid-cols-12 gap-12">

          {/* ================= ABOUT ================= */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-semibold mb-4">About UpayaInd</h3>

            <p className="text-white/60 leading-relaxed max-w-md">
              UpayaInd helps professionals land their dream jobs faster with
              AI-powered applications, expert interview preparation, and
              smart career tools.
            </p>

            <ul className="mt-6 space-y-2 text-white/50 text-sm">
              <li>✔ AI Job Applications</li>
              <li>✔ Resume Optimization</li>
              <li>✔ Interview Coaching</li>
            </ul>

            <Link
              href="/pricing"
              className="inline-block mt-6 px-7 py-3 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 transition">
              View Plans
            </Link>
          </div>

          {/* ================= SUPPORT ================= */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold mb-6">Support</h3>

            <div className="space-y-4 text-white/60">
              <div>
                <p className="text-white font-medium">Phone</p>
                <Link href="tel:+17247139241" className="hover:text-[#3b82f6]">
                  +1 (724) 713-9241
                </Link>
              </div>

              <div>
                <p className="text-white font-medium">Email</p>
                <Link href="mailto:contact@upayaind.com" className="hover:text-[#3b82f6]">
                  contact@upayaind.com
                </Link>
              </div>
            </div>

            {/* ⭐ NEW SQUARE SOCIAL ICONS (LIKE YOUR SCREENSHOT) */}
            <div className="flex gap-3 mt-8">
              {/* Facebook */}
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#e6edf7] text-[#0f2c5c] rounded-sm hover:bg-[#3b82f6] hover:text-white transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.3v-2.9h2.3V9.4c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.3v1.6h2.5l-.4 2.9h-2.1v7A10 10 0 0022 12z" />
                </svg>
              </Link>

              {/* Twitter */}
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#e6edf7] text-[#0f2c5c] rounded-sm hover:bg-[#3b82f6] hover:text-white transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1A4 4 0 0012 9.5c0 .3 0 .6.1.9-3.3-.2-6.3-1.8-8.3-4.3a4 4 0 001.2 5.3c-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.6 3.3 4-.4.1-.8.2-1.2.2-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8A8 8 0 012 18.6 11.3 11.3 0 008.3 20c7.5 0 11.6-6.3 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2z"/>
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#e6edf7] text-[#0f2c5c] rounded-sm hover:bg-[#3b82f6] hover:text-white transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.4 20.4h-3.6v-5.6c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.1-.1.2-.1.6-.1.9v5.8H9.9s.1-9.4 0-10.4h3.6v1.5c.5-.8 1.3-1.9 3.1-1.9 2.2 0 3.8 1.4 3.8 4.4v6.4zM6.2 8.6c-1.2 0-2-.8-2-1.9s.8-1.9 2-1.9 2 .8 2 1.9-.8 1.9-2 1.9zM8 20.4H4.4V10h3.6v10.4z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* ================= NEWSLETTER ================= */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-semibold mb-4">
              Subscribe to our newsletter
            </h3>

            <p className="text-white/60 mb-6">
              Get product updates, offers, and growth tips straight to your inbox.
            </p>

            <form className="flex w-full rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 px-5 py-4 bg-transparent outline-none text-white placeholder:text-white/40"
              />

              <button
                type="submit"
                className="px-6 py-4 whitespace-nowrap min-w-[140px] flex-shrink-0
                bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 transition">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10 text-center py-8 px-6">
        {/* <ul className="flex justify-center flex-wrap gap-6 mb-4 text-white/60">
          <li><Link href="/" className="hover:text-[#3b82f6]">Home</Link></li>
          <li><Link href="/about" className="hover:text-[#3b82f6]">About</Link></li>
          <li><Link href="/services" className="hover:text-[#3b82f6]">Services</Link></li>
          <li><Link href="/pricing" className="hover:text-[#3b82f6]">Pricing</Link></li>
          <li><Link href="/contact" className="hover:text-[#3b82f6]">Contact</Link></li>
        </ul> */}

        <p className="text-white/40 text-sm">
          © All rights reserved. Made by{" "}
          <span className="text-[#3b82f6]">UpayaInd Team</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;