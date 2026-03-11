'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

/* ================= COUNTER ================= */

function Counter({ target }: { target: number }) {

  const [count, setCount] = useState(0)

  useEffect(() => {

    let start = 0

    const interval = setInterval(() => {

      start += Math.ceil(target / 40)

      if (start >= target) {
        start = target
        clearInterval(interval)
      }

      setCount(start)

    }, 40)

    return () => clearInterval(interval)

  }, [target])

  return <span>{count}+</span>
}

/* ================= HERO ================= */

export default function Hero() {

  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: any) => {

    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    setRotateY(((x - centerX) / centerX) * 8)
    setRotateX(((centerY - y) / centerY) * 8)
  }

  const handleLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (

    <section className="relative md:pt-36 pt-24 pb-20 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-blue-50 to-white"></div>

      {/* Light Blobs */}
      <div className="absolute inset-0 -z-10">

        <motion.div
          animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-blue-400/20 blur-[140px] rounded-full"
        />

        <motion.div
          animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
          transition={{ duration: 24, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-indigo-400/20 blur-[140px] rounded-full"
        />

      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-12 gap-14 items-center">

        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-6 space-y-7 max-w-[560px]"
        >

          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-500 font-medium">
              Career Support Platform
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-[44px] md:text-[58px] font-bold leading-[1.05]"
          >
            Your Job Search,
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Handled Until You Get Hired
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-[18px]"
          >
            We optimize your resume, apply to relevant jobs, track recruiters,
            and support you until you land the job you deserve.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="#"
                className="px-9 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
              >
                Apply Jobs for Me
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="#"
                className="px-9 py-3 rounded-xl backdrop-blur-lg bg-white/70 border border-gray-200 text-blue-600 font-semibold"
              >
                Get Career Support
              </Link>
            </motion.div>

          </motion.div>

          {/* Counters */}
          <div className="flex gap-8 pt-4 text-sm text-gray-600">

            <div>
              <p className="text-xl font-bold text-blue-600">
                <Counter target={1200} />
              </p>
              Candidates Placed
            </div>

            <div>
              <p className="text-xl font-bold text-blue-600">
                <Counter target={5000} />
              </p>
              Interviews Scheduled
            </div>

          </div>

          {/* Trust badges */}
          <motion.div variants={fadeUp} className="flex gap-3 flex-wrap pt-3">

            <span className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow-sm text-sm">
              ✔ Real Human Support
            </span>

            <span className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow-sm text-sm">
              ✔ Placement Focused
            </span>

            <span className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow-sm text-sm">
              ✔ Resume Optimization
            </span>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-6 relative flex justify-center"
        >

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-8 bg-white px-5 py-3 rounded-xl shadow-xl text-sm z-20"
          >
            🎉 Candidate Placed
            <p className="text-xs text-gray-500">
              Software Engineer @ Stripe
            </p>
          </motion.div>

          {/* 3D Parallax Image */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            className="perspective-[1200px]"
          >

            <motion.div
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl max-w-[520px] bg-white"
            >

              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10"></div>

              <Image
                src="/images/hero/upaya-success.png"
                alt="Job placement success"
                width={900}
                height={700}
                priority
                className="w-full h-auto object-cover"
              />

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>

  )
}