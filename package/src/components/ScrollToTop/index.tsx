'use client'
import { useEffect, useState } from "react";

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-24 right-4 sm:right-8 z-50">

      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="
            w-10 h-10
            rounded-full
            bg-white
            text-[#0f2e4a]
            shadow-md
            border border-gray-200
            flex items-center justify-center
            hover:shadow-lg
            transition
          "
        >
          {/* SIMPLE CLEAN ARROW ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </button>
      )}

    </div>
  );
}
