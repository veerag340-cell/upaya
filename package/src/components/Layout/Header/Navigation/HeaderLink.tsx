"use client"

import { useState } from "react"
import Link from "next/link"
import { HeaderItem } from "../../../../types/menu"
import { usePathname } from "next/navigation"

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {

  const [submenuOpen, setSubmenuOpen] = useState(false)
  const pathname = usePathname()

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true)
    }
  }

  const handleMouseLeave = () => {
    setSubmenuOpen(false)
  }

  /* Always scroll to top when clicking nav */

  const handleClick = () => {

    setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })

    }, 50)

  }

  const isActive = pathname === item.href

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <Link
        href={item.href}
        onClick={handleClick}
        className={`flex items-center gap-1 py-2 text-base font-medium transition
        ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"}
        `}
      >

        {item.label}

        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}

      </Link>

      {/* Submenu */}

      {submenuOpen && item.submenu && (

        <div className="absolute left-0 top-8 w-60 rounded-lg bg-white shadow-lg py-2">

          {item.submenu.map((subItem, index) => (

            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-sm transition
              ${pathname === subItem.href
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {subItem.label}
            </Link>

          ))}

        </div>

      )}

    </div>
  )
}

export default HeaderLink