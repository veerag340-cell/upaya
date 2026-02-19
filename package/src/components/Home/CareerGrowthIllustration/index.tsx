import React from 'react'

const CareerGrowthIllustration = () => {
  return (
    <svg
      viewBox="0 0 400 500"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Background */}
      <rect width="400" height="500" fill="#f8fafc" rx="20" />
      
      {/* Resume Card */}
      <rect x="30" y="40" width="140" height="180" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="10" />
      <circle cx="60" cy="70" r="15" fill="#4f46e5" opacity="0.2" />
      <line x1="50" y1="100" x2="120" y2="100" stroke="#4f46e5" strokeWidth="2" />
      <line x1="50" y1="115" x2="120" y2="115" stroke="#cbd5e1" strokeWidth="1.5" />
      <line x1="50" y1="130" x2="120" y2="130" stroke="#cbd5e1" strokeWidth="1.5" />
      <line x1="50" y1="145" x2="100" y2="145" stroke="#cbd5e1" strokeWidth="1.5" />
      <text x="100" y="195" fontSize="12" fill="#4f46e5" fontWeight="bold" textAnchor="middle">Resume</text>

      {/* Job Applications */}
      <rect x="230" y="40" width="140" height="180" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="10" />
      <circle cx="290" cy="100" r="12" fill="#10b981" />
      <path
        d="M 285 100 L 295 110 L 310 85"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="300" y="140" fontSize="13" fill="#1f2937" fontWeight="500" textAnchor="middle">Applications</text>
      <text x="300" y="158" fontSize="12" fill="#6b7280" textAnchor="middle">Sent: 10</text>
      <text x="300" y="210" fontSize="12" fill="#10b981" fontWeight="bold" textAnchor="middle">Applied ✓</text>

      {/* Interview Call Notification */}
      <rect x="130" y="260" width="140" height="170" fill="#4f46e5" rx="10" />
      <circle cx="200" cy="290" r="20" fill="white" opacity="0.2" />
      <path
        d="M 195 280 Q 200 285 205 280"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line x1="190" y1="295" x2="210" y2="295" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="190" y1="310" x2="210" y2="310" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <text x="200" y="340" fontSize="13" fill="white" fontWeight="bold" textAnchor="middle">Interview Call!</text>
      <text x="200" y="360" fontSize="11" fill="white" opacity="0.9" textAnchor="middle">Monday 2:00 PM</text>
      <text x="200" y="410" fontSize="12" fill="white" fontWeight="bold" textAnchor="middle">🎉 Success!</text>

      {/* Arrow pointing up (career growth) */}
      <path
        d="M 200 430 L 200 400 M 190 410 L 200 400 L 210 410"
        fill="none"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="200" y="470" fontSize="14" fill="#10b981" fontWeight="bold" textAnchor="middle">Career Growth</text>
    </svg>
  )
}

export default CareerGrowthIllustration
