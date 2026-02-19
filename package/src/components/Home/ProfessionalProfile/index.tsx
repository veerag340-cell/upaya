import React from 'react'
import ProfessionalIllustration from '@/components/Home/ProfessionalIllustration'

const ProfessionalProfile = () => {
  return (
    <section className='md:py-24 py-16 dark:bg-darkmode'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-0'>
          {/* Left Content */}
          <div className='md:col-span-6 col-span-12 flex flex-col justify-center'>
            <div
              className='flex gap-2 items-center'
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                professional growth
              </span>
            </div>

            <h2
              className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text pt-6 pb-4 dark:text-white'
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              Unveiling Your Career Potential: Land Your Dream Role
            </h2>

            <p
              className='text-grey text-base pb-8 dark:text-white/60'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              We understand your professional journey. Our dedicated team works with you to build a compelling resume, secure interviews with top companies, and guide you through every step until you land your ideal role.
            </p>

            <div
              className='flex gap-4 items-center'
              data-aos='fade-up'
              data-aos-delay='300'
              data-aos-duration='1000'
            >
              <button className='bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300'>
                Get Started
              </button>
              <button className='border border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-midnight_text'>
                Learn More
              </button>
            </div>

            {/* Info Box */}
            <div
              className='mt-10 p-6 bg-light_bg dark:bg-dark_bg rounded-lg border border-light_border dark:border-dark_border'
              data-aos='fade-up'
              data-aos-delay='400'
              data-aos-duration='1000'
            >
              <h3 className='font-semibold text-midnight_text dark:text-white mb-3'>
                What We Provide
              </h3>
              <ul className='space-y-2 text-sm text-grey dark:text-white/60'>
                <li className='flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Professional resume optimization
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Targeted job applications
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Interview coaching & support
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-primary'></span>
                  Recruiter follow-ups & negotiation
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Illustration */}
          <div
            className='md:col-span-6 col-span-12 flex items-center justify-center'
            data-aos='fade-up'
            data-aos-delay='300'
            data-aos-duration='1000'
          >
            <div className='w-full max-w-md'>
              <ProfessionalIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalProfile
