import React from 'react'
import { count } from '@/app/api/data'
import Image from 'next/image'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={` ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-[0.875rem]'
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>
              <img
                src={item.icon}
                alt='icon'
                width={40}
                height={40}
                style={{ display: 'block' }}
              />
              <span className='text-xl font-semibold text-midnight_text dark:text-white mb-2 text-center'>
                {item.value}
              </span>
              <p className='text-base font-medium text-secondary text-center max-w-[17.8125rem] w-full dark:text-white/80 mt-1'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
