export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: "/images/counter/manual.svg", // Add new icon for manual applications
        value: "100% Manual Applications",
        description: "Real humans apply on your behalf",
    },
    {
        icon: "/images/counter/skill.svg", // Add new icon for skill-based matching
        value: "Skill-Based Matching",
        description: "Only relevant jobs, no spam",
    },
    {
        icon: "/images/counter/support.svg", // Add new icon for end-to-end support
        value: "Until You’re Hired",
        description: "End-to-end career support",
    },
];

export const Progress = [
    { title: 'Resume Optimization Success', Progress: 95 },
    { title: 'Skill-Based Job Matching Accuracy', Progress: 90 },
    { title: 'Interview Call Improvement', Progress: 85 }
];

export const Servicebox = [
    {
        icon: '/images/services/resume-icon.svg',
        title: 'Resume & Profile Enhancement',
        description: 'We professionally update and optimize your resume based on your skills, experience, and target job roles — recruiter and ATS friendly.',
    },
    {
        icon: '/images/services/manual-applications.svg',
        title: 'Manual Job Applications',
        description: 'We manually apply for relevant jobs on your behalf using your requested skills — no bots, no random roles, only genuine opportunities.',
    },
    {
        icon: '/images/services/interview-support.svg',
        title: 'Interview & Placement Support',
        description: 'We assist with interview preparation, recruiter follow-ups, and continue applying until you receive interview calls and job offers.',
    },
]

export const portfolioinfo = [
    {
        image: '/images/portfolio/cozycasa.png',
        alt: 'Portfolio',
        title: 'Cozycasa',
        slug: 'Cozycasa',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: '/images/portfolio/mars.png',
        alt: 'Portfolio',
        title: 'Mars',
        slug: 'Mars',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: '/images/portfolio/humans.png',
        alt: 'Portfolio',
        title: 'Everyday Humans',
        slug: 'everyday-humans',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: '/images/portfolio/roket-squred.png',
        alt: 'Portfolio',
        title: 'Rocket Squared',
        slug: 'rocket-squared',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: '/images/portfolio/panda-logo.png',
        alt: 'Portfolio',
        title: 'Panda Logo',
        slug: 'panda-logo',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: '/images/portfolio/humans.png',
        alt: 'Portfolio',
        title: 'Fusion Dynamics',
        slug: 'fusion-dynamics',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: '/images/portfolio/cozycasa.png',
        alt: 'Portfolio',
        title: 'InnovateX Ventures',
        slug: 'innovate-x-ventures',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: '/images/portfolio/mars.png',
        alt: 'Portfolio',
        title: 'Nebula Holdings',
        slug: 'nebula-holdings',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: '/images/portfolio/panda-logo.png',
        alt: 'Portfolio',
        title: 'Summit Partners',
        slug: 'summit-partners',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: '/images/portfolio/roket-squred.png',
        alt: 'Portfolio',
        title: 'Apex Strategies',
        slug: 'apex-strategies',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    
]

// export const pricingPlans = [
//     {
//         id: 'basic',
//         title: 'Basic',
//         price: '199',
//         period: '/month',
//         description: '',
//         features: [
//             'Job applications support',
//             'Resume review',
//             'Email updates',
//         ],
//         cta: 'Choose Plan',
//         note: '',
//         highlighted: false,
//     },
//     {
//         id: 'standard',
//         title: 'Standard',
//         price: '299',
//         period: '/month',
//         description: '',
//         features: [
//             'All Starter features',
//             'Interview preparation',
//             'Mock interviews',
//             'Recruiter follow-ups',
//         ],
//         cta: 'Choose Plan',
//         note: '',
//         highlighted: true, // Highlight Standard as most popular
//     },
//     {
//         id: 'premium',
//         title: 'Premium',
//         price: '399',
//         period: '/month',
//         description: '',
//         features: [
//             'End-to-end job assistance',
//             'Daily job applications',
//             'Priority interview support',
//         ],
//         cta: 'Choose Plan',
//         note: '',
//         highlighted: false,
//     },
// ];

export const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    highlighted: false,
    prices: {
      US: { currency: "USD", monthly: 19, yearly: 180 },
      UK: { currency: "GBP", monthly: 15, yearly: 150 },
      IN: { currency: "INR", monthly: 199, yearly: 1999 },
      AU: { currency: "AUD", monthly: 25, yearly: 250 },
      CA: { currency: "CAD", monthly: 22, yearly: 220 },
      DE: { currency: "EUR", monthly: 18, yearly: 180 },
      FR: { currency: "EUR", monthly: 18, yearly: 180 },
      SG: { currency: "SGD", monthly: 28, yearly: 280 },
      AE: { currency: "AED", monthly: 70, yearly: 700 },
    },
    features: ["Job applications support", "Resume review", "Email updates"],
    cta: "Choose Plan",
  },
  {
    id: 2,
    title: "Standard",
    highlighted: true,
    prices: {
      US: { currency: "USD", monthly: 29, yearly: 290 },
      UK: { currency: "GBP", monthly: 25, yearly: 250 },
      IN: { currency: "INR", monthly: 299, yearly: 2999 },
      AU: { currency: "AUD", monthly: 39, yearly: 390 },
      CA: { currency: "CAD", monthly: 35, yearly: 350 },
      DE: { currency: "EUR", monthly: 27, yearly: 270 },
      FR: { currency: "EUR", monthly: 27, yearly: 270 },
      SG: { currency: "SGD", monthly: 40, yearly: 400 },
      AE: { currency: "AED", monthly: 110, yearly: 1100 },
    },
    features: [
      "All Starter features",
      "Interview preparation",
      "Mock interviews",
      "Recruiter follow-ups",
    ],
    cta: "Choose Plan",
  },
  {
    id: 3,
    title: "Premium",
    highlighted: false,
    prices: {
      US: { currency: "USD", monthly: 39, yearly: 390 },
      UK: { currency: "GBP", monthly: 35, yearly: 350 },
      IN: { currency: "INR", monthly: 399, yearly: 3999 },
      AU: { currency: "AUD", monthly: 49, yearly: 490 },
      CA: { currency: "CAD", monthly: 45, yearly: 450 },
      DE: { currency: "EUR", monthly: 37, yearly: 370 },
      FR: { currency: "EUR", monthly: 37, yearly: 370 },
      SG: { currency: "SGD", monthly: 52, yearly: 520 },
      AE: { currency: "AED", monthly: 150, yearly: 1500 },
    },
    features: [
      "End-to-end job assistance",
      "Daily job applications",
      "Priority interview support",
    ],
    cta: "Choose Plan",
  },
];