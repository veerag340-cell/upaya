import React from 'react'
import Link from 'next/link'

const Testimonial = () => {
  return (
    <>
    {/* ================= HOME PRICING SECTION (ADDED BELOW) ================= */}
      <section className="py-24 bg-section">
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

            {/* BASIC */}
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

            {/* STANDARD */}
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

            {/* PREMIUM */}
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
      </section>
      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className='scroll-mt-24 bg-section dark:bg-darklight border-none py-16' id='testimonials'>
        <div className='container mx-auto max-w-4xl px-4'>
          <div className='bg-white dark:bg-darkmode rounded-2xl shadow-lg p-8 md:p-12 text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-midnight_text dark:text-white mb-6'>
              Stop Struggling With Job Applications. Start Getting Interview Calls.
            </h2>

            <p className='text-base md:text-lg text-secondary dark:text-white/80 mb-8'>
              Applying to jobs every day, tracking applications, and preparing alone is exhausting — and often doesn’t work.
            </p>

            <p className='text-base md:text-lg text-secondary dark:text-white/80 mb-8'>
              We take care of the entire job search process for you. Our team manually applies to jobs on your behalf,
              matches roles to your skills, and prepares you for interviews so you can focus on what truly matters — getting hired.
            </p>

            <h3 className='text-xl font-semibold text-midnight_text dark:text-white mb-4'>
              What We Do for You
            </h3>

            <ul className='text-left inline-block mx-auto mb-8 space-y-3'>
              <li className='flex items-start gap-2'><span className='text-green-500 text-lg mt-1'>✔</span> 100% manual job applications</li>
              <li className='flex items-start gap-2'><span className='text-green-500 text-lg mt-1'>✔</span> Skill-based role matching</li>
              <li className='flex items-start gap-2'><span className='text-green-500 text-lg mt-1'>✔</span> Interview preparation & mock interviews</li>
              <li className='flex items-start gap-2'><span className='text-green-500 text-lg mt-1'>✔</span> End-to-end support until hired</li>
            </ul>

            <div className='text-base md:text-lg text-midnight_text dark:text-white font-medium'>
              Human support. No bots. No mass spam.
            </div>
          </div>
        </div>
      </section>


  

    </>
  )
}

export default Testimonial
