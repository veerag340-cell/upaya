'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className='relative md:pt-44 pt-28 bg-white dark:bg-darklight bg-cover text-white'>
        <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
          
          {/* LEFT CONTENT */}
          <div
            className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
            data-aos='fade-right'
          >
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                career support
              </span>
            </div>

            <h1 className='text-midnight_text font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]'>
              Your Job Search, Handled Until You Get Hired
            </h1>

            <p className='text-grey dark:text-white/70 text-xl font-semibold'>
              We update your resume, manually apply for relevant jobs based on your skills,
              follow up with recruiters, and support you until placement.
            </p>

            <div className='flex gap-3 flex-wrap'>
              <a className='py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
                Apply Jobs for Me
              </a>

              <a className='py-3 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition duration-300 px-8 font-medium'>
                Get Career Support
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:col-span-6 col-span-12 relative">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/images/hero/hero-image.png"
                alt="Professional at work"
                width={900}
                height={900}
                quality={100}
                priority
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOME PRICING SECTION ================= */}
      {/* <section className="py-24 bg-section">
        <div className="container mx-auto max-w-6xl px-4 text-center">

          <span className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
            Pricing
          </span>

          <h2 className="mt-4 text-[30px] md:text-[36px] font-semibold text-midnight_text">
            Simple Plans For Your Job Search
          </h2>

          <p className="text-grey mt-4 max-w-xl mx-auto">
            Choose a plan that helps you get hired faster with real human support.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            
            <div className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-midnight_text">Basic</h3>

              <div className="flex items-end justify-center gap-1 mt-4">
                <span className="text-lg text-grey">₹</span>
                <span className="text-3xl font-semibold text-midnight_text">199</span>
                <span className="text-sm text-grey mb-1">/month</span>
              </div>

              <p className="text-grey mt-4 text-sm">
                Job application support & resume review.
              </p>
            </div>

             
            <div className="bg-white border-2 border-primary rounded-2xl p-8 shadow-xl scale-[1.03]">
              <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">
                Most Popular
              </span>

              <h3 className="text-xl font-semibold text-midnight_text mt-3">
                Standard
              </h3>

              <div className="flex items-end justify-center gap-1 mt-4">
                <span className="text-lg text-grey">₹</span>
                <span className="text-3xl font-semibold text-midnight_text">299</span>
                <span className="text-sm text-grey mb-1">/month</span>
              </div>

              <p className="text-grey mt-4 text-sm">
                Interview prep & recruiter follow-ups.
              </p>
            </div>

             
            <div className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-midnight_text">Premium</h3>

              <div className="flex items-end justify-center gap-1 mt-4">
                <span className="text-lg text-grey">₹</span>
                <span className="text-3xl font-semibold text-midnight_text">399</span>
                <span className="text-sm text-grey mb-1">/month</span>
              </div>

              <p className="text-grey mt-4 text-sm">
                End-to-end job placement assistance.
              </p>
            </div>

          </div>

          <Link
            href="/pricing"
            className="inline-block mt-12 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-[1.03] transition"
          >
            View Full Pricing
          </Link>

        </div>
      </section> */}
    </>
  )
}

export default Hero
