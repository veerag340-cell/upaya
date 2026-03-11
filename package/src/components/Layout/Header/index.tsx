'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import Signin from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'
import { Icon } from '@iconify/react'

const Header: React.FC = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname()

  useEffect(() => {

    const handleScroll = () => {
      setSticky(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  const handleClickOutside = (event: MouseEvent) => {

    if (signInRef.current && !signInRef.current.contains(event.target as Node)) {
      setIsSignInOpen(false)
    }

    if (signUpRef.current && !signUpRef.current.contains(event.target as Node)) {
      setIsSignUpOpen(false)
    }

  }

  useEffect(() => {

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }

  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300
        ${sticky
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
            : 'bg-white/60 backdrop-blur-md'
          }`}
      >

        <div className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-4">

          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            {headerData.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="relative group"
              >

                <HeaderLink item={item} />

                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                  ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />

              </motion.div>

            ))}

          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Sign In */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block border border-blue-600 text-blue-600 px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition"
              onClick={() => setIsSignInOpen(true)}
            >
              Sign In
            </motion.button>

            {/* Sign Up */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block bg-blue-600 text-white px-5 py-2 rounded-xl shadow-lg hover:shadow-xl transition"
              onClick={() => setIsSignUpOpen(true)}
            >
              Sign Up
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden relative w-8 h-8"
            >

              <motion.span
                animate={navbarOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-black mb-1"
              />

              <motion.span
                animate={navbarOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[2px] bg-black mb-1"
              />

              <motion.span
                animate={navbarOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-black"
              />

            </button>

          </div>

        </div>

        {/* Mobile Navigation */}
        {navbarOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white shadow-lg border-t border-gray-100"
          >

            <nav className="flex flex-col gap-4 p-6">

              {headerData.map((item, index) => (

                <MobileHeaderLink
                  key={index}
                  item={item}
                  closeMenu={() => setNavbarOpen(false)}
                />

              ))}

              <button
                className="border border-blue-600 text-blue-600 py-2 rounded-lg"
                onClick={() => {
                  setIsSignInOpen(true)
                  setNavbarOpen(false)
                }}
              >
                Sign In
              </button>

              <button
                className="bg-blue-600 text-white py-2 rounded-lg"
                onClick={() => {
                  setIsSignUpOpen(true)
                  setNavbarOpen(false)
                }}
              >
                Sign Up
              </button>

            </nav>

          </motion.div>

        )}

      </header>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center px-4">
          <div
            ref={signInRef}
            className="relative w-[90%] max-w-[420px] bg-white px-8 py-12 rounded-2xl shadow-2xl"
          >

            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <Icon icon="ic:round-close" width="24" />
            </button>

            <Signin signInOpen={(v: boolean) => setIsSignInOpen(v)} />

          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div className="fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center px-4">
          <div
            ref={signUpRef}
            className="relative w-[90%] max-w-[420px] bg-white px-8 py-12 rounded-2xl shadow-2xl"
          >

            <button
              onClick={() => setIsSignUpOpen(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <Icon icon="ic:round-close" width="24" />
            </button>

            <SignUp signUpOpen={(v: boolean) => setIsSignUpOpen(v)} />

          </div>
        </div>
      )}

    </>
  )
}

export default Header