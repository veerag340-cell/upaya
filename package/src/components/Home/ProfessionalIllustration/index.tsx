import React from 'react'

const ProfessionalIllustration = () => {
  return (
    <svg
      viewBox="0 0 450 550"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Background gradient - Office/Professional theme */}
      <defs>
        <linearGradient id="officeBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f8f9fa', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#e9ecef', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#dbb699', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c9a878', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="450" height="550" fill="url(#officeBg)" />

      {/* Office Chair - Dark gray */}
      <g id="chair">
        {/* Chair back */}
        <rect x="80" y="320" width="60" height="140" fill="#4a4a4a" rx="8" />
        {/* Chair seat */}
        <ellipse cx="120" cy="340" rx="35" ry="20" fill="#5a5a5a" />
        {/* Chair base */}
        <circle cx="120" cy="480" r="25" fill="#3a3a3a" />
      </g>

      {/* Wood desk/table */}
      <rect x="60" y="430" width="280" height="80" fill="#8b6f47" rx="4" />
      <line x1="60" y1="450" x2="340" y2="450" stroke="#7a5f37" strokeWidth="1" opacity="0.5" />

      {/* Person - Sitting with laptop */}
      {/* Head */}
      <circle cx="180" cy="220" r="28" fill="url(#skinTone)" />
      
      {/* Hair - Dark brown */}
      <path
        d="M 152 220 Q 152 190 180 180 Q 208 190 208 220 L 208 260 Q 208 270 180 275 Q 152 270 152 260 Z"
        fill="#3d2817"
      />

      {/* Face details */}
      {/* Eyes */}
      <circle cx="170" cy="210" r="3" fill="#2d1810" />
      <circle cx="190" cy="210" r="3" fill="#2d1810" />
      
      {/* Nose */}
      <line x1="180" y1="215" x2="180" y2="230" stroke="#c9a878" strokeWidth="1.5" />
      
      {/* Mouth */}
      <path
        d="M 170 240 Q 180 245 190 240"
        fill="none"
        stroke="#b59668"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Neck */}
      <rect x="172" y="248" width="16" height="15" fill="url(#skinTone)" />

      {/* Body - Dark blue shirt/jacket */}
      <path
        d="M 150 265 L 120 350 L 240 350 L 210 265 Z"
        fill="#2c3e50"
      />

      {/* Shirt collar */}
      <path
        d="M 175 265 L 170 280 L 190 280 Z"
        fill="#1a252f"
      />

      {/* Left arm */}
      <g id="leftArm">
        <path
          d="M 150 280 Q 130 300 120 340"
          stroke="#2c3e50"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        />
        {/* Hand */}
        <circle cx="115" cy="350" r="12" fill="url(#skinTone)" />
      </g>

      {/* Right arm holding laptop */}
      <g id="rightArm">
        <path
          d="M 210 285 Q 250 290 290 280"
          stroke="#2c3e50"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        />
        {/* Hand on laptop */}
        <circle cx="305" cy="275" r="11" fill="url(#skinTone)" />
      </g>

      {/* Laptop - Modern design */}
      <g id="laptop">
        {/* Screen back */}
        <rect x="260" y="200" width="140" height="90" fill="#34495e" rx="6" />
        
        {/* Screen display - Light blue glow */}
        <rect x="268" y="210" width="124" height="74" fill="#ecf0f1" rx="3" />
        
        {/* Code/content lines on screen */}
        <line x1="278" y1="225" x2="376" y2="225" stroke="#95a5a6" strokeWidth="1.5" />
        <line x1="278" y1="235" x2="376" y2="235" stroke="#95a5a6" strokeWidth="1.5" />
        <line x1="278" y1="245" x2="340" y2="245" stroke="#95a5a6" strokeWidth="1.5" />
        <line x1="278" y1="260" x2="376" y2="260" stroke="#95a5a6" strokeWidth="1.5" />
        <line x1="278" y1="270" x2="376" y2="270" stroke="#95a5a6" strokeWidth="1.5" />
        
        {/* Keyboard */}
        <rect x="260" y="288" width="140" height="35" fill="#2c3e50" rx="2" />
        
        {/* Keyboard keys pattern */}
        <g opacity="0.4">
          <rect x="270" y="295" width="5" height="5" fill="#ecf0f1" />
          <rect x="280" y="295" width="5" height="5" fill="#ecf0f1" />
          <rect x="290" y="295" width="5" height="5" fill="#ecf0f1" />
          <rect x="300" y="295" width="5" height="5" fill="#ecf0f1" />
          <rect x="310" y="295" width="5" height="5" fill="#ecf0f1" />
          <rect x="270" y="308" width="5" height="5" fill="#ecf0f1" />
          <rect x="280" y="308" width="5" height="5" fill="#ecf0f1" />
          <rect x="290" y="308" width="5" height="5" fill="#ecf0f1" />
          <rect x="300" y="308" width="5" height="5" fill="#ecf0f1" />
        </g>
      </g>

      {/* Plant decoration - Left side */}
      <g id="plant">
        {/* Pot */}
        <path
          d="M 70 420 L 80 450 L 100 450 L 110 420 Z"
          fill="#c19a6b"
        />
        
        {/* Plant leaves */}
        <ellipse cx="85" cy="395" rx="8" ry="25" fill="#27ae60" transform="rotate(-25 85 395)" />
        <ellipse cx="95" cy="390" rx="8" ry="25" fill="#2ecc71" transform="rotate(25 95 390)" />
        <ellipse cx="90" cy="370" rx="8" ry="22" fill="#27ae60" transform="rotate(-5 90 370)" />
      </g>

      {/* Window decoration - Top right */}
      <g id="window">
        {/* Window frame */}
        <rect x="340" y="80" width="90" height="80" fill="#b0c4de" rx="4" />
        {/* Window dividers */}
        <line x1="385" y1="80" x2="385" y2="160" stroke="#8db3d9" strokeWidth="2" />
        <line x1="340" y1="120" x2="430" y2="120" stroke="#8db3d9" strokeWidth="2" />
        {/* Window light glow */}
        <rect x="342" y="82" width="43" height="36" fill="#fff9e6" opacity="0.6" />
        <rect x="387" y="82" width="41" height="36" fill="#fff9e6" opacity="0.6" />
      </g>

      {/* Decorative wave at bottom */}
      <path
        d="M 0 500 Q 112 490 225 500 T 450 500"
        fill="none"
        stroke="#5b5bff"
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Success indicator - Small badge at corner */}
      <g id="badge">
        <circle cx="390" cy="120" r="20" fill="#5b5bff" opacity="0.9" />
        <text x="390" y="128" fontSize="12" fill="white" fontWeight="bold" textAnchor="middle">✓</text>
      </g>
    </svg>
  )
}

export default ProfessionalIllustration
