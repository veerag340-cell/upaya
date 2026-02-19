import React from 'react'

const JobSuccessIllustration = () => {
  return (
    <svg
      viewBox="0 0 450 550"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#e0f2fe', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f0f9ff', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="450" height="550" fill="url(#bgGradient)" />
      
      {/* Job Offer Card - Left */}
      <rect x="40" y="80" width="180" height="260" fill="white" stroke="#e2e8f0" strokeWidth="2.5" rx="16" />
      
      {/* Card header - Blue */}
      <rect x="40" y="80" width="180" height="60" fill="#5b5bff" rx="16" />
      <text x="130" y="125" fontSize="18" fill="white" fontWeight="bold" textAnchor="middle">Job Offer</text>
      
      {/* Letter lines */}
      <line x1="60" y1="160" x2="200" y2="160" stroke="#e5e7eb" strokeWidth="2" />
      <line x1="60" y1="185" x2="200" y2="185" stroke="#e5e7eb" strokeWidth="2" />
      <line x1="60" y1="210" x2="190" y2="210" stroke="#e5e7eb" strokeWidth="2" />
      <line x1="60" y1="235" x2="180" y2="235" stroke="#e5e7eb" strokeWidth="2" />
      
      {/* Congratulations text - Green */}
      <text x="130" y="310" fontSize="16" fill="#16a34a" fontWeight="bold" textAnchor="middle">Congratulations! ✓</text>
      
      {/* Success Checkmark Circle - Right */}
      <circle cx="300" cy="160" r="65" fill="#d1fae5" opacity="0.5" />
      <circle cx="300" cy="160" r="65" fill="none" stroke="#14b8a6" strokeWidth="3" />
      
      {/* Large checkmark */}
      <path
        d="M 270 160 L 290 185 L 335 130"
        fill="none"
        stroke="#14b8a6"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Confetti dots - Colorful celebration elements */}
      <circle cx="350" cy="100" r="5" fill="#f59e0b" />
      <circle cx="370" cy="125" r="4" fill="#ec4899" />
      <circle cx="330" cy="85" r="4" fill="#3b82f6" />
      <circle cx="385" cy="150" r="5" fill="#a855f7" />
      <circle cx="310" cy="220" r="4" fill="#10b981" />
      <circle cx="360" cy="210" r="4.5" fill="#ef4444" />
      
      {/* Career Growth Trajectory - Bottom */}
      <circle cx="110" cy="430" r="8" fill="#5b5bff" />
      <circle cx="225" cy="370" r="8" fill="#5b5bff" />
      <circle cx="340" cy="310" r="8" fill="#5b5bff" />
      
      <path
        d="M 110 430 Q 167 400 225 370 Q 282 340 340 310"
        fill="none"
        stroke="#5b5bff"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      
      {/* Your New Role - Briefcase Card */}
      <rect x="210" y="380" width="180" height="120" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="12" />
      
      {/* Briefcase icon - Purple */}
      <rect x="240" y="395" width="120" height="65" fill="#5b5bff" rx="8" />
      <rect x="240" y="387" width="120" height="14" fill="#5b5bff" rx="3" />
      
      {/* Briefcase handles */}
      <circle cx="275" cy="393" r="3.5" fill="white" />
      <circle cx="345" cy="393" r="3.5" fill="white" />
      
      {/* Text below briefcase */}
      <text x="300" y="485" fontSize="14" fill="#1f2937" fontWeight="bold" textAnchor="middle">Your New Role</text>
      <text x="300" y="505" fontSize="12" fill="#6b7280" textAnchor="middle">Position Confirmed</text>
      
      {/* Decorative wave at bottom */}
      <path
        d="M 0 530 Q 112 520 225 530 T 450 530"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  )
}

export default JobSuccessIllustration
