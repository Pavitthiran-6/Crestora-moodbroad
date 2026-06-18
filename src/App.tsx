import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(Flip, ScrollTrigger)

interface PackageTier {
  name: string
  badge?: string
  price: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  highlighted?: boolean
}

interface Project {
  id: number
  title: string
  year: string
  image: string
  description: string
  features: string[]
  timeline: string
  scope: string
  customSolutionDesc: string
  customQuote: string
  idealClients: string[]
  note?: {
    additional: string[]
    footer: string
  }
  packages: PackageTier[]
}

// Project data with minimalist titles and detailed specifications
const projects: Project[] = [
  {
    id: 1,
    title: "Website Development",
    year: "FROM ₹25,000",
    image: "/images/websites.png",
    description: "Custom websites designed for businesses, startups, and brands looking to establish a professional online presence.",
    features: [
      "Custom Website Development",
      "Responsive Design",
      "Modern UI/UX Design",
      "Up To 5 Core Pages",
      "Contact & Inquiry Forms",
      "Mobile Optimization",
      "Performance Optimization",
      "Basic Security Setup",
      "WhatsApp Integration",
      "Google Maps Integration",
      "Social Media Integration",
      "SEO-Friendly Structure",
      "Cross-Browser Compatibility",
      "Deployment Support",
      "2 Revisions"
    ],
    timeline: "2–4 WEEKS",
    scope: "Professional business websites with clean design, responsive layouts, mobile optimization, basic SEO setup, and deployment support.",
    customSolutionDesc: "Every project is unique. Projects requiring additional pages, advanced animations, custom integrations, premium functionality, complex workflows, or special requirements will be quoted separately.",
    customQuote: "For brands seeking an unrivaled digital flagship that delivers exceptional user experience and flawless performance.",
    idealClients: ["Startups", "Growing Businesses", "Agencies", "Established Brands"],
    note: {
      additional: [
        "The displayed price is a starting price only.",
        "Final pricing depends on project scope, number of pages, custom features, integrations, content requirements, revisions, animations, business requirements, and overall project complexity.",
        "Additional requirements may increase the final project cost.",
        "A detailed quotation will be provided after reviewing project requirements."
      ],
      footer: ""
    },
    packages: [
      {
        name: "Starter",
        price: "₹25,000+",
        features: [
          "Custom Website Development",
          "Responsive Design",
          "Modern UI/UX Design",
          "Up To 10 Pages",
          "Contact Forms",
          "Deployment Support",
          "2 Revisions"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Starter Package: Website Development"
      },
      {
        name: "Business",
        badge: "MOST POPULAR",
        price: "₹45,000+",
        highlighted: true,
        features: [
          "Custom Website Development",
          "Advanced UI/UX Design",
          "Up To 15 Pages",
          "Performance Optimization",
          "Blog Integration",
          "Premium Animations",
          "Basic SEO Setup",
          "3 Revisions"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Business Package: Website Development"
      },
      {
        name: "Custom",
        price: "Custom Quote",
        features: [
          "Unlimited Pages",
          "Advanced Integrations",
          "Enterprise Workflows",
          "Custom Dashboards",
          "Scalable Architecture",
          "Dedicated Consultation"
        ],
        ctaLabel: "INQUIRE NOW",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Custom Package: Website Development"
      }
    ]
  },
  {
    id: 2,
    title: "Mobile App Development",
    year: "FROM ₹30,000",
    image: "/images/apps.png",
    description: "Mobile applications built for businesses requiring reliable, modern, and user-friendly digital experiences.",
    features: [
      "Custom Mobile Application",
      "Android App Development",
      "Modern UI/UX Design",
      "User Authentication",
      "API Integration",
      "Push Notifications",
      "Mobile Optimization",
      "Performance Optimization",
      "Secure Data Handling",
      "App Navigation System",
      "Contact & Support Section",
      "Play Store Deployment Support",
      "Testing & Bug Fixes",
      "Deployment Assistance",
      "2 Revisions"
    ],
    timeline: "4–8 WEEKS",
    scope: "Mobile applications developed with modern technologies, user-friendly interfaces, secure authentication, API integrations, and deployment assistance.",
    customSolutionDesc: "Every project is unique. Projects requiring additional pages, advanced animations, custom integrations, premium functionality, complex workflows, or special requirements will be quoted separately.",
    customQuote: "For companies aiming to offer an essential daily utility with a native-grade, fluid, and delightful mobile experience.",
    idealClients: ["Startups", "Growing Businesses", "Agencies", "Established Brands"],
    note: {
      additional: [
        "The displayed price is a starting price only.",
        "Final pricing depends on project scope, number of pages, custom features, integrations, content requirements, revisions, animations, business requirements, and overall project complexity.",
        "Additional requirements may increase the final project cost.",
        "A detailed quotation will be provided after reviewing project requirements."
      ],
      footer: ""
    },
    packages: [
      {
        name: "Starter",
        price: "₹30,000+",
        features: [
          "Custom Mobile Application",
          "Android App Development",
          "Modern UI/UX Design",
          "User Authentication",
          "API Integration",
          "2 Revisions"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Starter Package: Mobile App Development"
      },
      {
        name: "Business",
        badge: "MOST POPULAR",
        price: "₹55,000+",
        highlighted: true,
        features: [
          "Custom Mobile Application",
          "Android App Development",
          "Advanced UI/UX Design",
          "User Authentication",
          "API Integration",
          "Basic Admin Panel",
          "Play Store Deployment",
          "3 Revisions"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Business Package: Mobile App Development"
      },
      {
        name: "Custom",
        price: "Custom Quote",
        features: [
          "Cross-Platform App",
          "Custom Integrations",
          "Enterprise Architecture",
          "Advanced Analytics",
          "Dedicated Support",
          "Scalable Backend"
        ],
        ctaLabel: "INQUIRE NOW",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Custom Package: Mobile App Development"
      }
    ]
  },
  {
    id: 3,
    title: "SEO Optimization",
    year: "FROM ₹8,000",
    image: "/images/seo.png",
    description: "Technical search engine optimization audits, strategy, keyword mapping, on-page edits, and performance enhancements to rank your brand on page one.",
    features: [
      "Website SEO Audit",
      "Keyword Research",
      "Competitor Analysis",
      "On-Page SEO Optimization",
      "Meta Title Optimization",
      "Meta Description Optimization",
      "Image Optimization",
      "URL Structure Optimization",
      "Internal Linking Optimization",
      "Technical SEO Review",
      "Sitemap Setup",
      "Search Console Setup",
      "Performance Recommendations",
      "SEO Reporting",
      "Consultation Support"
    ],
    timeline: "2-3 Weeks",
    scope: "Comprehensive crawl analysis, keyword indexing map, on-page content alignment, core web vitals optimization, speed improvements, and search rankings monitoring.",
    customSolutionDesc: "High-competition organic growth strategies focusing on search intent optimization, editorial content structuring, authority building, and local dominance.",
    customQuote: "For brands seeking sustainable organic traffic and page-one rankings without relying on paid advertising.",
    idealClients: ["E-commerce sites", "B2B SaaS platforms", "Content publishers"],
    note: {
      additional: [
        "The displayed price is a starting price only.",
        "Final pricing depends on project scope, number of pages, custom features, integrations, content requirements, revisions, animations, business requirements, and overall project complexity.",
        "Additional requirements may increase the final project cost.",
        "A detailed quotation will be provided after reviewing project requirements."
      ],
      footer: ""
    },
    packages: [
      {
        name: "Basic",
        price: "₹8,000+",
        features: [
          "Website SEO Audit",
          "Keyword Research",
          "On-Page Optimization",
          "Meta Tag Optimization",
          "SEO Report"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Basic Package: SEO Optimization"
      },
      {
        name: "Growth",
        badge: "RECOMMENDED",
        price: "₹15,000+",
        highlighted: true,
        features: [
          "Website SEO Audit",
          "Advanced Keyword Research",
          "On-Page Optimization",
          "Technical SEO Fixes",
          "Competitor Analysis",
          "Performance Recommendations",
          "Monthly Report"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Growth Package: SEO Optimization"
      },
      {
        name: "Authority",
        price: "Custom Quote",
        features: [
          "Full Technical SEO",
          "Link Building Strategy",
          "Content SEO Planning",
          "Local SEO Domination",
          "Dedicated Reporting",
          "Ongoing Consultation"
        ],
        ctaLabel: "INQUIRE NOW",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Authority Package: SEO Optimization"
      }
    ]
  },
  {
    id: 4,
    title: "Digital Marketing",
    year: "FROM ₹10,000",
    image: "/images/marketing.png",
    description: "Data-driven digital marketing campaigns across social media, search platforms, and display networks to build brand presence and accelerate lead generation.",
    features: [
      "Marketing Strategy Planning",
      "Social Media Marketing",
      "Campaign Setup",
      "Audience Targeting",
      "Content Planning",
      "Creative Guidance",
      "Brand Promotion",
      "Lead Generation Support",
      "Ad Campaign Management",
      "Performance Monitoring",
      "Monthly Reporting",
      "Competitor Research",
      "Engagement Optimization",
      "Consultation Support",
      "Strategy Review"
    ],
    timeline: "Monthly Retainer",
    scope: "Audience targeting profiles, creative ad copy design, budget management, conversion tracking integrations, pixel setups, and weekly analytics reviews.",
    customSolutionDesc: "Omni-channel marketing campaigns tailored for brand launch, lead generation scaling, and direct response optimization.",
    customQuote: "For businesses wanting to scale sales, establish clear brand positioning, and acquire customers profitably.",
    idealClients: ["D2C e-commerce brands", "Professional service providers", "Local businesses looking to scale"],
    note: {
      additional: [
        "The displayed price is a starting price only.",
        "Final pricing depends on project scope, number of pages, custom features, integrations, content requirements, revisions, animations, business requirements, and overall project complexity.",
        "Additional requirements may increase the final project cost.",
        "A detailed quotation will be provided after reviewing project requirements."
      ],
      footer: ""
    },
    packages: [
      {
        name: "Starter",
        price: "₹10,000/mo",
        features: [
          "Campaign Setup",
          "Social Media Marketing",
          "Audience Targeting",
          "Ad Creative Guidance",
          "Monthly Report"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Starter Package: Digital Marketing"
      },
      {
        name: "Scale",
        badge: "MOST POPULAR",
        price: "₹20,000/mo",
        highlighted: true,
        features: [
          "Full Campaign Management",
          "Google & Meta Ads",
          "Advanced Audience Targeting",
          "Lead Generation Funnels",
          "Pixel & Analytics Setup",
          "Weekly Performance Report",
          "Strategy Consultation"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Scale Package: Digital Marketing"
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        features: [
          "Omni-Channel Campaigns",
          "Influencer Partnerships",
          "Brand Identity Campaigns",
          "Custom Analytics Dashboards",
          "Dedicated Account Manager",
          "Full Funnel Optimization"
        ],
        ctaLabel: "INQUIRE NOW",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Enterprise Package: Digital Marketing"
      }
    ]
  },
  {
    id: 5,
    title: "Logo Design",
    year: "FROM ₹3,000",
    image: "/images/brand.png",
    description: "Distinct, premium visual identities, marks, and brand symbols designed to capture the core essence of your business.",
    features: [
      "Custom Logo Design",
      "Multiple Logo Concepts",
      "Brand Color Selection",
      "Typography Selection",
      "Logo Variations",
      "Icon Version",
      "Monogram Version",
      "High Resolution Files",
      "PNG Files",
      "JPG Files",
      "Transparent Files",
      "Vector Files",
      "Social Media Ready Assets",
      "Revision Support",
      "Final Brand Assets Delivery"
    ],
    timeline: "2 Weeks",
    scope: "Concept sketch explorations, grid system refinement, typography pairings, color palette theory, responsive scaling mockups, and final vector file sets.",
    customSolutionDesc: "Bespoke visual marks, symbols, and identities designed to scale across print, packaging, digital screens, and physical architecture.",
    customQuote: "For new ventures and rebranding projects that demand an iconic, timeless, and immediately recognizable mark.",
    idealClients: ["Boutique hospitality brands", "Premium retail companies", "Independent creators and founders"],
    note: {
      additional: [
        "The displayed price is a starting price only.",
        "Final pricing depends on project scope, number of pages, custom features, integrations, content requirements, revisions, animations, business requirements, and overall project complexity.",
        "Additional requirements may increase the final project cost.",
        "A detailed quotation will be provided after reviewing project requirements."
      ],
      footer: ""
    },
    packages: [
      {
        name: "Essential",
        price: "₹3,000+",
        features: [
          "Custom Logo Design",
          "2 Logo Concepts",
          "3 Revisions",
          "PNG & JPG Files",
          "Transparent Background"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Essential Package: Logo Design"
      },
      {
        name: "Brand",
        badge: "RECOMMENDED",
        price: "₹8,000+",
        highlighted: true,
        features: [
          "Custom Logo Design",
          "3 Logo Concepts",
          "5 Revisions",
          "Vector Files",
          "PNG & JPG Files",
          "Brand Color Suggestions",
          "Typography Pairing"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Brand Package: Logo Design"
      },
      {
        name: "Identity",
        price: "Custom Quote",
        features: [
          "Full Brand Identity System",
          "Logo Variations",
          "Brand Guidelines",
          "Stationery Design",
          "Social Media Kit",
          "Dedicated Consultation"
        ],
        ctaLabel: "INQUIRE NOW",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Identity Package: Logo Design"
      }
    ]
  },
  {
    id: 6,
    title: "Poster Design",
    year: "FROM ₹1,000",
    image: "/images/portrait.png",
    description: "Custom high-impact poster artwork and visual materials designed for print and digital channels, featuring bold typography and shapes.",
    features: [
      "Custom Poster Design",
      "Print Ready Design",
      "Digital Version",
      "Social Media Adaptation",
      "Marketing Layout Design",
      "High Resolution Files",
      "Multiple Export Formats",
      "Brand Consistency",
      "Typography Design",
      "Creative Visual Composition",
      "Image Optimization",
      "Color Correction",
      "Revision Support",
      "Final Source Files",
      "Delivery Support"
    ],
    timeline: "1 Week",
    scope: "Layout composition structuring, bold typography styling, custom illustration design, high-resolution color space checks, and print-ready preparation.",
    customSolutionDesc: "Exhibition, concert, campaign, or event poster layouts utilizing experimental design techniques and premium typography formats.",
    customQuote: "For organizations looking to make a massive visual statement in physical spaces or digital campaigns.",
    idealClients: ["Event organizers", "Art galleries", "Cultural institutions"],
    note: {
      additional: [
        "The displayed price is a starting price only.",
        "Final pricing depends on project scope, number of pages, custom features, integrations, content requirements, revisions, animations, business requirements, and overall project complexity.",
        "Additional requirements may increase the final project cost.",
        "A detailed quotation will be provided after reviewing project requirements."
      ],
      footer: ""
    },
    packages: [
      {
        name: "Single",
        price: "₹1,000+",
        features: [
          "Custom Poster Design",
          "Social Media Format",
          "High Resolution Files",
          "2 Revisions",
          "PNG Export"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Single Package: Poster Design"
      },
      {
        name: "Campaign",
        badge: "BEST VALUE",
        price: "₹3,500+",
        highlighted: true,
        features: [
          "3 Custom Poster Designs",
          "Print & Digital Formats",
          "High Resolution Files",
          "Multiple Export Formats",
          "3 Revisions Each",
          "Brand Consistency"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Campaign Package: Poster Design"
      },
      {
        name: "Premium",
        price: "Custom Quote",
        features: [
          "Unlimited Poster Designs",
          "Custom Illustrations",
          "Print Ready Files",
          "Billboard Formats",
          "Brand Integration",
          "Dedicated Designer"
        ],
        ctaLabel: "INQUIRE NOW",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Premium Package: Poster Design"
      }
    ]
  },
  {
    id: 7,
    title: "Video Editing",
    year: "FROM ₹2,500",
    image: "/images/video.png",
    description: "Premium video editing, color correction, and pacing services for ads, promos, and commercial brand assets.",
    features: [
      "Professional Video Editing",
      "Video Trimming",
      "Scene Transitions",
      "Audio Enhancement",
      "Background Music Integration",
      "Text Animations",
      "Motion Titles",
      "Color Correction",
      "Video Optimization",
      "Social Media Formatting",
      "Platform-Specific Export",
      "Thumbnail Guidance",
      "Revision Support",
      "Final Export Delivery",
      "Delivery Assistance"
    ],
    timeline: "2 Weeks",
    scope: "Footage organization, visual storytelling pacing, audio synchronization, background noise reduction, color grading, and export optimization.",
    customSolutionDesc: "High-end commercial edits, social ads, brand documentaries, or narrative clips needing custom visual styling and tight editing.",
    customQuote: "For creators and brands seeking cinematic storytelling that commands attention and holds viewers' focus.",
    idealClients: ["Content creators", "Marketing agencies", "Commercial product brands"],
    note: {
      additional: [
        "The displayed price is a starting price only.",
        "Final pricing depends on project scope, number of pages, custom features, integrations, content requirements, revisions, animations, business requirements, and overall project complexity.",
        "Additional requirements may increase the final project cost.",
        "A detailed quotation will be provided after reviewing project requirements."
      ],
      footer: ""
    },
    packages: [
      {
        name: "Basic",
        price: "₹2,500+",
        features: [
          "Professional Video Editing",
          "Smooth Transitions",
          "Audio Enhancement",
          "Social Media Format",
          "2 Revisions"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Basic Package: Video Editing"
      },
      {
        name: "Pro",
        badge: "MOST POPULAR",
        price: "₹6,000+",
        highlighted: true,
        features: [
          "Professional Video Editing",
          "Cinematic Color Grading",
          "Text Animations",
          "Audio Enhancement",
          "Social Media Formats",
          "Thumbnail Design",
          "3 Revisions"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Pro Package: Video Editing"
      },
      {
        name: "Cinematic",
        price: "Custom Quote",
        features: [
          "Premium Video Production",
          "Advanced Color Science",
          "Custom Motion Graphics",
          "Voiceover Integration",
          "Brand Storytelling",
          "Unlimited Revisions"
        ],
        ctaLabel: "INQUIRE NOW",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Cinematic Package: Video Editing"
      }
    ]
  },
  {
    id: 8,
    title: "Motion Graphics",
    year: "FROM ₹5,000",
    image: "/images/motion.png",
    description: "Interactive motion graphics, title sequences, animated UI mockups, and dynamic video assets to elevate your brand content.",
    features: [
      "Motion Graphics",
      "Typography Animation",
      "Logo Animation",
      "Explainer Videos",
      "Social Media Motion Assets",
      "Promotional Motion Content",
      "2D Animated Advertisements",
      "3D Animated Advertisements",
      "Product Advertisement Videos",
      "Marketing Motion Graphics",
      "Brand Animation Assets",
      "Final Rendering & Export"
    ],
    timeline: "2-3 Weeks",
    scope: "Storyboarding, vector asset design, keyframe animation, fluid transitions, rendering, and Lottie format exports for web use.",
    customSolutionDesc: "Animated interface mockups, interactive web micro-animations, or dynamic title sequences for videos.",
    customQuote: "For digital products and brands seeking to explain complex concepts through beautiful, fluid animated storytelling.",
    idealClients: ["SaaS startups", "Product design teams", "Digital publishers"],
    note: {
      additional: [
        "The displayed price is a starting price only.",
        "Final pricing depends on project scope, number of pages, custom features, integrations, content requirements, revisions, animations, business requirements, and overall project complexity.",
        "Additional requirements may increase the final project cost.",
        "A detailed quotation will be provided after reviewing project requirements."
      ],
      footer: ""
    },
    packages: [
      {
        name: "Starter",
        price: "₹5,000+",
        features: [
          "Motion Design",
          "Typography Animation",
          "Social Media Assets",
          "Sound Synchronization",
          "2 Revisions"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Starter Package: Motion Graphics"
      },
      {
        name: "Brand",
        badge: "RECOMMENDED",
        price: "₹12,000+",
        highlighted: true,
        features: [
          "Motion Design",
          "Explainer Video",
          "Brand Animations",
          "Typography Animation",
          "Social Media Motion",
          "Sound Synchronization",
          "3 Revisions"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Brand Package: Motion Graphics"
      },
      {
        name: "Premium",
        price: "Custom Quote",
        features: [
          "Full Motion Identity",
          "UI Animation System",
          "Custom Lottie Files",
          "Broadcast Quality",
          "Brand Storytelling",
          "Dedicated Consultation"
        ],
        ctaLabel: "INQUIRE NOW",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Premium Package: Motion Graphics"
      }
    ]
  },
  {
    id: 9,
    title: "Website & App Maintenance",
    year: "FROM ₹5,000 / MONTH",
    image: "/images/automotive.png",
    description: "Ongoing maintenance, updates, monitoring, optimization, security improvements, bug fixes, and technical support for websites and mobile applications.",
    features: [
      "Website Maintenance",
      "Mobile App Maintenance",
      "Bug Fixes",
      "Security Updates",
      "Performance Monitoring",
      "Content Updates",
      "Backup Management",
      "Technical Support",
      "Feature Enhancements",
      "Monthly Maintenance Reports"
    ],
    timeline: "Ongoing",
    scope: "Continuous service monitoring, monthly feature updates, technical bug resolution, regular backups, and active security maintenance.",
    customSolutionDesc: "SLA-based service level agreements, dedicated developer retainers, and priority 24/7 critical issue resolution support.",
    customQuote: "For companies requiring guaranteed platform uptime, immediate critical bug fixes, and structured code updates.",
    idealClients: ["E-commerce businesses", "SaaS platform operators", "Established digital services"],
    note: {
      additional: [
        "The displayed price is a starting price only.",
        "Final pricing depends on project scope, number of pages, custom features, integrations, content requirements, revisions, animations, business requirements, and overall project complexity.",
        "Additional requirements may increase the final project cost.",
        "A detailed quotation will be provided after reviewing project requirements."
      ],
      footer: ""
    },
    packages: [
      {
        name: "Starter",
        price: "₹5,000 / mo",
        features: [
          "Website Maintenance",
          "Bug Fixes",
          "Security Updates",
          "Backup Management",
          "Technical Support"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Starter Package: Website & App Maintenance"
      },
      {
        name: "Pro",
        badge: "MOST POPULAR",
        price: "₹12,000 / mo",
        highlighted: true,
        features: [
          "Website & App Maintenance",
          "Performance Monitoring",
          "Content Updates",
          "Bug Fixes",
          "Monthly Reports"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Pro Package: Website & App Maintenance"
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        features: [
          "Custom Maintenance SLA",
          "Feature Enhancements",
          "Dedicated Support",
          "Priority Response",
          "Technical Consultation"
        ],
        ctaLabel: "INQUIRE NOW",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Enterprise Package: Website & App Maintenance"
      }
    ]
  },
  {
    id: 10,
    title: "3D Animations",
    year: "FROM ₹10,000",
    image: "/images/architecture.png",
    description: "Immersive 3D animation scenes, architectural flythroughs, and structural visualization layouts for presentations and sites.",
    features: [
      "3D Scene Animation",
      "Structural Wireframe Modeling",
      "Isometric Lighting Setups",
      "Camera Flythroughs",
      "Perspective Grid Animation",
      "Render Composition",
      "Environment Design",
      "Physics-based Dynamics",
      "High Resolution Rendering",
      "Social Media Motion Assets",
      "Explainer Scene Visuals",
      "Texture & Material Setup",
      "Rendering Optimization",
      "Revision Support",
      "Final Rendering Delivery"
    ],
    timeline: "3 Weeks",
    scope: "Isometric scene layout modeling, architectural lighting configuration, path animation rendering, and video compositing.",
    customSolutionDesc: "Architectural flythroughs, structural wireframe designs, or isometric space layouts representing industrial or real estate plans.",
    customQuote: "For architects, developers, and visualizers who need to explain complex structural or spatial concepts in a single, cinematic view.",
    idealClients: ["Architectural firms", "Real estate developers", "Industrial design houses"],
    note: {
      additional: [
        "The displayed price is a starting price only.",
        "Final pricing depends on project scope, number of pages, custom features, integrations, content requirements, revisions, animations, business requirements, and overall project complexity.",
        "Additional requirements may increase the final project cost.",
        "A detailed quotation will be provided after reviewing project requirements."
      ],
      footer: ""
    },
    packages: [
      {
        name: "Visualization",
        price: "₹10,000+",
        features: [
          "Structural Wireframe Modeling",
          "Isometric Lighting",
          "Static Renders",
          "High Resolution Output",
          "2 Revisions"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Visualization Package: 3D Animations"
      },
      {
        name: "Flythrough",
        badge: "RECOMMENDED",
        price: "₹25,000+",
        highlighted: true,
        features: [
          "Structural Modeling",
          "Camera Flythroughs",
          "Isometric Lighting",
          "Perspective Animation",
          "Render Composition",
          "Video Export",
          "3 Revisions"
        ],
        ctaLabel: "GET STARTED",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Flythrough Package: 3D Animations"
      },
      {
        name: "Cinematic",
        price: "Custom Quote",
        features: [
          "Full Scene Animation",
          "Photorealistic Lighting",
          "Environment Design",
          "Dynamic Camera Work",
          "Sound Design",
          "Broadcast Quality Output"
        ],
        ctaLabel: "INQUIRE NOW",
        ctaHref: "mailto:creastorastudios@gmail.com?subject=Cinematic Package: 3D Animations"
      }
    ]
  }
]

interface HomePackage {
  title: string
  price: string
  services: string[]
  ctaHref: string
  gradient: string
}

const homePackages: HomePackage[] = [
  {
    title: "Digital Presence Package",
    price: "FROM ₹35,000+",
    services: [
      "Professional Website Development",
      "Responsive UI/UX Design",
      "Logo Design",
      "Contact & Lead Forms",
      "WhatsApp Integration",
      "Google Maps Integration",
      "Mobile Optimization",
      "Deployment Support",
      "Basic Brand Assets"
    ],
    ctaHref: "mailto:creastorastudios@gmail.com?subject=Inquiry: Digital Presence Package",
    gradient: "linear-gradient(135deg, #1a1917 0%, #2a2825 100%)"
  },
  {
    title: "Business Growth Package",
    price: "FROM ₹75,000+",
    services: [
      "Professional Website",
      "Mobile Application",
      "User Authentication",
      "API Integration",
      "SEO Optimization",
      "Analytics Setup",
      "Performance Optimization",
      "Website & App Maintenance",
      "Deployment Support"
    ],
    ctaHref: "mailto:creastorastudios@gmail.com?subject=Inquiry: Business Growth Package",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
  },
  {
    title: "Brand Identity Package",
    price: "FROM ₹25,000+",
    services: [
      "Logo Design",
      "Brand Identity System",
      "Brand Colors & Typography",
      "Poster Design",
      "Social Media Creatives",
      "Marketing Assets",
      "Brand Guidelines",
      "High Resolution Source Files"
    ],
    ctaHref: "mailto:creastorastudios@gmail.com?subject=Inquiry: Brand Identity Package",
    gradient: "linear-gradient(135deg, #180828 0%, #2d124d 100%)"
  },
  {
    title: "Content & Advertising Package",
    price: "FROM ₹40,000+",
    services: [
      "Video Editing",
      "Motion Graphics",
      "2D Animated Ads",
      "3D Animated Ads",
      "Promotional Videos",
      "Social Media Content",
      "Campaign Creatives",
      "Ad Visuals"
    ],
    ctaHref: "mailto:creastorastudios@gmail.com?subject=Inquiry: Content & Advertising Package",
    gradient: "linear-gradient(135deg, #062828 0%, #0c4d4d 100%)"
  },
  {
    title: "Creastora Business Ecosystem",
    price: "FROM ₹1,50,000+",
    services: [
      "Website Development",
      "Mobile App Development",
      "Website & App Maintenance",
      "SEO Optimization",
      "Digital Marketing",
      "Logo & Brand Identity",
      "Poster Design",
      "Video Editing",
      "Motion Graphics",
      "2D Animated Advertisements",
      "3D Animated Advertisements",
      "Marketing Campaign Assets",
      "Business Consultation",
      "Priority Support"
    ],
    ctaHref: "mailto:creastorastudios@gmail.com?subject=Inquiry: Creastora Business Ecosystem",
    gradient: "linear-gradient(135deg, #28061e 0%, #4c0c39 100%)"
  }
]

function App() {
  const [view, setView] = useState<'list' | 'grid'>(() => {
    const saved = localStorage.getItem('crestora-view')
    return (saved === 'list' || saved === 'grid') ? saved : 'list'
  })
  const [isTransitioningToList, setIsTransitioningToList] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(() => {
    const savedId = localStorage.getItem('crestora-active-project')
    if (savedId) {
      const found = projects.find((p) => p.id === parseInt(savedId))
      return found || null
    }
    return null
  })
  const [activePackageProject, setActivePackageProject] = useState<Project | null>(() => {
    const savedId = localStorage.getItem('crestora-active-package-project')
    if (savedId) {
      const found = projects.find((p) => p.id === parseInt(savedId))
      return found || null
    }
    return null
  })
  const [pkgIndex, setPkgIndex] = useState(() => {
    const saved = localStorage.getItem('crestora-pkg-index')
    return saved ? parseInt(saved) : 1
  })
  const [pkgDirection, setPkgDirection] = useState<1 | -1>(1)

  const wrap = (n: number, max: number) => (n + max) % max

  // Synchronize active project states to localStorage
  useEffect(() => {
    if (activeProject) {
      localStorage.setItem('crestora-active-project', activeProject.id.toString())
    } else {
      localStorage.removeItem('crestora-active-project')
    }
  }, [activeProject])

  useEffect(() => {
    if (activePackageProject) {
      localStorage.setItem('crestora-active-package-project', activePackageProject.id.toString())
    } else {
      localStorage.removeItem('crestora-active-package-project')
    }
  }, [activePackageProject])

  useEffect(() => {
    localStorage.setItem('crestora-pkg-index', pkgIndex.toString())
  }, [pkgIndex])

  const containerRef = useRef<HTMLDivElement>(null)
  const detailPanelRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const detailImageRef = useRef<HTMLImageElement>(null)
  const detailLeftRef = useRef<HTMLDivElement>(null)
  const flipStateRef = useRef<any>(null)
  const packageOverlayRef = useRef<HTMLDivElement>(null)
  const pkgOpenTlRef = useRef<gsap.core.Timeline | null>(null)

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenis.on('scroll', ScrollTrigger.update)

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    // Force preloading images to prevent jumpiness
    projects.forEach((proj) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.src = proj.image
    })

    return () => {
      lenis.destroy()
      gsap.ticker.remove(updateTicker)
    }
  }, [])

  // Setup ScrollTrigger animations on mount
  useEffect(() => {
    // Project items initial mount entry
    gsap.set('.project-item', { opacity: 0, y: 30 })
    gsap.to('.project-item', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: { each: 0.08, from: 'start' }
    })

    // Header logo animation
    const headerLogoPaths = document.querySelectorAll('.header-logo .logo-path')
    gsap.to('.header-logo', {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
    gsap.set(headerLogoPaths, {
      clipPath: 'inset(100% 0 0 0)',
      opacity: 1
    })

    const triggerHeaderLogo = ScrollTrigger.create({
      trigger: '.header-logo',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => {
        gsap.killTweensOf(headerLogoPaths)
        gsap.set(headerLogoPaths, { clipPath: 'inset(100% 0 0 0)' })
        gsap.to(headerLogoPaths, {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.15
        })
      },
      onEnterBack: () => {
        gsap.killTweensOf(headerLogoPaths)
        gsap.set(headerLogoPaths, { clipPath: 'inset(100% 0 0 0)' })
        gsap.to(headerLogoPaths, {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.15
        })
      },
      onLeave: () => {
        gsap.set(headerLogoPaths, { clipPath: 'inset(100% 0 0 0)' })
      },
      onLeaveBack: () => {
        gsap.set(headerLogoPaths, { clipPath: 'inset(100% 0 0 0)' })
      }
    })

    // Footer logo entrance scroll trigger
    const footerLogoPaths = document.querySelectorAll('.footer-logo .logo-path')
    gsap.set(footerLogoPaths, {
      clipPath: 'inset(100% 0 0 0)',
      opacity: 1
    })

    const triggerFooterLogo = ScrollTrigger.create({
      trigger: '.footer-logo',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => {
        gsap.killTweensOf(footerLogoPaths)
        gsap.set(footerLogoPaths, { clipPath: 'inset(100% 0 0 0)' })
        gsap.to(footerLogoPaths, {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.15
        })
      },
      onEnterBack: () => {
        gsap.killTweensOf(footerLogoPaths)
        gsap.set(footerLogoPaths, { clipPath: 'inset(100% 0 0 0)' })
        gsap.to(footerLogoPaths, {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.15
        })
      },
      onLeave: () => {
        gsap.set(footerLogoPaths, { clipPath: 'inset(100% 0 0 0)' })
      },
      onLeaveBack: () => {
        gsap.set(footerLogoPaths, { clipPath: 'inset(100% 0 0 0)' })
      }
    })

    // Footer header text
    const triggerHeader = ScrollTrigger.create({
      trigger: '.footer-header',
      start: 'top 85%',
      onEnter: () => {
        gsap.set(['.light-text', '.bold-text'], { opacity: 0, y: 20 })
        gsap.to('.light-text', {
          opacity: 0.7,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform'
        })
        gsap.to('.bold-text', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          clearProps: 'transform'
        })
      },
      once: true
    })

    return () => {
      triggerHeaderLogo.kill()
      triggerFooterLogo.kill()
      triggerHeader.kill()
    }
  }, [])

  // Handle FLIP View-toggle transition
  useLayoutEffect(() => {
    if (!flipStateRef.current || !containerRef.current) return

    const images = containerRef.current.querySelectorAll('.project-image')

    if (view === 'grid') {
      gsap.set(images, { clipPath: 'inset(100% 0% 0% 0%)' })
    }

    Flip.from(flipStateRef.current, {
      duration: 1,
      ease: 'power2.out',
      absolute: true,
      nested: true,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power2.out' }
        ),
      onLeave: (elements) =>
        gsap.to(elements, { opacity: 0, duration: 0.5, ease: 'power2.out' }),
      onComplete: () => {
        if (view === 'grid') {
          gsap.to(images, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1,
            ease: 'power2.out',
            stagger: 0.06
          })
        } else {
          gsap.to(images, {
            clipPath: 'inset(0% 0% 100% 0%)',
            duration: 1,
            ease: 'power2.out',
            stagger: 0.06,
            onComplete: () => {
              setIsTransitioningToList(false)
            }
          })
        }
      }
    })

    flipStateRef.current = null
  }, [view])

  // Handle opening GSAP animations for activeProject detail panel
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'

      gsap.killTweensOf(['.detail-bg-image-wrapper', '.detail-bg-image', '.left-side-content > *', '.detail-feature-item'])

      gsap.set(imageWrapperRef.current, { opacity: 0 })
      gsap.set(detailImageRef.current, { scale: 1.15, x: 0, y: 0 })
      gsap.set('.left-side-content > *', { opacity: 0, y: 30 })
      gsap.set('.detail-feature-item', { opacity: 0, x: -20 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to(imageWrapperRef.current, {
        opacity: 1,
        duration: 1,
      })
      .to(detailImageRef.current, {
        scale: 1,
        duration: 1.5,
      }, '<')
      .to('.left-side-content > *', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
      }, '-=0.6')
      .to('.detail-feature-item', {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.06,
      }, '-=0.4')
    } else {
      document.body.style.overflow = ''
    }
  }, [activeProject])

  // Mouse-based subtle parallax on the detail image
  useEffect(() => {
    if (!activeProject || !detailPanelRef.current || !detailImageRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xNorm = (clientX / innerWidth) * 2 - 1
      const yNorm = (clientY / innerHeight) * 2 - 1

      gsap.to(detailImageRef.current, {
        x: -xNorm * 20,
        y: -yNorm * 20,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      })
    }

    const panel = detailPanelRef.current
    panel.addEventListener('mousemove', handleMouseMove)
    return () => {
      panel.removeEventListener('mousemove', handleMouseMove)
    }
  }, [activeProject])

  // Keyboard Escape listener to trigger back navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activePackageProject || activeProject) {
          window.history.back()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject, activePackageProject])

  const toggleView = (targetView: 'list' | 'grid') => {
    if (view === targetView) return
    const items = containerRef.current?.querySelectorAll(
      '.project-item, .project-title, .project-year, .project-image-container'
    )
    if (!items) return

    setActiveProject(null)

    if (targetView === 'list') {
      setIsTransitioningToList(true)
    }

    flipStateRef.current = Flip.getState(Array.from(items))
    setView(targetView)
    localStorage.setItem('crestora-view', targetView)
  }

  const handleItemClick = (project: Project) => {
    setActiveProject(project)
    window.history.pushState({ activeProjectId: project.id }, '')
  }

  const closeDetailPanel = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setActiveProject(null)
        gsap.set('#service-detail-panel', { clearProps: 'all' })
      }
    })

    tl.to('.left-side-content > *', {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
      stagger: 0.04
    })
    .to(imageWrapperRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power3.inOut'
    }, '-=0.2')
    .to('#service-detail-panel', {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut'
    }, '<')
  }

  const handlePrev = () => {
    setPkgDirection(-1)
    setPkgIndex((prev) => wrap(prev - 1, 3))
  }

  const handleNext = () => {
    setPkgDirection(1)
    setPkgIndex((prev) => wrap(prev + 1, 3))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const inner = card.querySelector('.slide__inner') as HTMLElement
    if (!inner) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ox = (x - card.clientWidth * 0.5) / (Math.PI * 3)
    const oy = -(y - card.clientHeight * 0.5) / (Math.PI * 4)

    inner.style.setProperty('--rotX', `${oy.toFixed(2)}deg`)
    inner.style.setProperty('--rotY', `${ox.toFixed(2)}deg`)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const inner = card.querySelector('.slide__inner') as HTMLElement
    if (!inner) return

    inner.style.setProperty('--rotX', '0deg')
    inner.style.setProperty('--rotY', '0deg')
  }

  const openPackageOverlay = (project: Project) => {
    setPkgIndex(1)
    setPkgDirection(1)
    setActivePackageProject(project)
    window.history.pushState({ activeProjectId: project.id, showPackages: true }, '')
  }

  // Animate package overlay open after state update
  useEffect(() => {
    if (!activePackageProject || !packageOverlayRef.current) return

    const overlay = packageOverlayRef.current
    const cards = overlay.querySelectorAll('.pkg-card')
    const introItems = overlay.querySelectorAll('.pkg-overlay-intro > *')
    const closeBtn = document.querySelector('.pkg-overlay-close')

    gsap.killTweensOf([overlay, cards, introItems, closeBtn])
    gsap.set(overlay, { opacity: 0, scale: 0.97, filter: 'blur(12px)' })
    gsap.set(cards, { opacity: 0, y: 70 })
    gsap.set(introItems, { opacity: 0, y: 20 })
    gsap.set(closeBtn, { opacity: 0 })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    pkgOpenTlRef.current = tl

    tl.to(overlay, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 0.55,
    })
    .to(introItems, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
    }, '-=0.3')
    .to(closeBtn, {
      opacity: 0.5,
      duration: 0.4,
    }, '-=0.4')
    .to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.13,
    }, '-=0.5')
  }, [activePackageProject])

  const closePackageOverlay = () => {
    if (!packageOverlayRef.current) return
    const overlay = packageOverlayRef.current
    const cards = overlay.querySelectorAll('.pkg-card')
    const introItems = overlay.querySelectorAll('.pkg-overlay-intro > *')
    const closeBtn = document.querySelector('.pkg-overlay-close')

    if (pkgOpenTlRef.current) pkgOpenTlRef.current.kill()

    const tl = gsap.timeline({
      defaults: { ease: 'power2.in' },
      onComplete: () => {
        setActivePackageProject(null)
        gsap.set(overlay, { clearProps: 'all' })
      }
    })

    tl.to(cards, {
      opacity: 0,
      y: -30,
      duration: 0.3,
      stagger: 0.06,
    })
    .to([introItems, closeBtn], {
      opacity: 0,
      y: -15,
      duration: 0.25,
    }, '-=0.15')
    .to(overlay, {
      opacity: 0,
      scale: 0.97,
      filter: 'blur(8px)',
      duration: 0.4,
    }, '-=0.1')
  }

  // Synchronize history state on mount and popstate events
  const hasInitializedHistory = useRef(false)
  useEffect(() => {
    if (hasInitializedHistory.current) return
    hasInitializedHistory.current = true

    const savedActiveProject = localStorage.getItem('crestora-active-project')
    const savedActivePackage = localStorage.getItem('crestora-active-package-project')

    if (!window.history.state) {
      if (!savedActiveProject) {
        window.history.replaceState({ home: true }, '')
      } else {
        window.history.replaceState({ home: true }, '')
        window.history.pushState({ activeProjectId: parseInt(savedActiveProject) }, '')
        if (savedActivePackage) {
          window.history.pushState({ activeProjectId: parseInt(savedActiveProject), showPackages: true }, '')
        }
      }
    }
  }, [])

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const state = e.state
      if (!state || state.home) {
        if (activePackageProject) {
          closePackageOverlay()
        }
        if (activeProject) {
          closeDetailPanel()
        }
      } else {
        const { activeProjectId, showPackages } = state
        if (activeProjectId) {
          const proj = projects.find((p) => p.id === activeProjectId) || null
          if (proj) {
            if (!activeProject || activeProject.id !== proj.id) {
              setActiveProject(proj)
            }
            if (showPackages) {
              if (!activePackageProject || activePackageProject.id !== proj.id) {
                setPkgIndex(1)
                setPkgDirection(1)
                setActivePackageProject(proj)
              }
            } else {
              if (activePackageProject) {
                closePackageOverlay()
              }
            }
          }
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [activeProject, activePackageProject])

  return (
    <>
      {/* Header and Navigation */}
      <header className="site-header">
        <div className="grid-container">
          {/* Logo with custom hexagon C brand mark */}
          <div className="logo-container">
            <img src="/logo.png" alt="Crestora Logo" className="logo-img" />
          </div>

          <nav className="main-nav">
            <ul style={{ color: 'var(--warm-off-white)', fontSize: '1.4rem' }}>
              <li>
                <span>DESIGN</span>
              </li>
              <li>
                <span style={{ opacity: 0.5 }}>•</span>
              </li>
              <li>
                <span>DEVELOPMENT</span>
              </li>
              <li>
                <span style={{ opacity: 0.5 }}>•</span>
              </li>
              <li>
                <span>GROWTH</span>
              </li>
            </ul>
          </nav>

          <div className="contact-link">
            <a href="https://w2c-studios.onrender.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2.2rem' }}>+STUDIO</a>
          </div>
        </div>
      </header>

      <div className="site-container">
        <div className="grid-container" ref={containerRef}>
          {/* Header Logo */}
          <div className="header-logo select-none flex justify-center text-[18vw] font-bold leading-none tracking-[-0.08em] text-[var(--warm-off-white)]">
            <span className="logo-path">C</span>
            <span className="logo-path">R</span>
            <span className="logo-path">E</span>
            <span className="logo-path">S</span>
            <span className="logo-path">T</span>
            <span className="logo-path">O</span>
            <span className="logo-path">R</span>
            <span className="logo-path">A</span>
          </div>

          <section className="srv-scanner">
            <div className="scanner-section-header">
              <h2 className="scanner-section-title">
                INTEGRATED PACKAGES<sup>5</sup>
              </h2>
              <p className="scanner-section-subtitle">
                Explore our production pricing tiers and services built to scale.
              </p>
            </div>

            <div className="packages-grid">
              {homePackages.map((pkg, i) => (
                <div key={i} className={`normal-pkg-card${(i === 0 || i === 4) ? ' dark' : ''}`}>
                  <div className="pkg-card-header">
                    <span className="pkg-card-badge">INTEGRATED TIER</span>
                    <h3 className="pkg-card-title">{pkg.title}</h3>
                  </div>
                  <div className="pkg-card-price">{pkg.price}</div>
                  <div className="pkg-card-divider"></div>
                  <ul className="pkg-card-features">
                    {pkg.services.map((svc, si) => (
                      <li key={si} className="pkg-card-feature-item">
                        <span className="pkg-card-check">✓</span>
                        {svc}
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </section>

          <div className="header">
            <div className="header-title">
              <h1>
                SELECTED SERVICES<sup>10</sup>
              </h1>
            </div>
            <div className="view-toggle">
              <button
                className={`toggle-btn ${view === 'list' ? 'active' : ''}`}
                onClick={() => toggleView('list')}
              >
                List
              </button>
              <button
                className={`toggle-btn ${view === 'grid' ? 'active' : ''}`}
                onClick={() => toggleView('grid')}
              >
                Grid
              </button>
            </div>
          </div>

          <div
            id="projects-container"
            className={`projects-container ${
              view === 'list' ? 'list-view' : 'grid-view'
            }`}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-item"
                data-id={project.id}
                onClick={() => handleItemClick(project)}
              >
                <div
                  className={`project-image-container ${
                    isTransitioningToList ? 'transitioning-to-list' : ''
                  }`}
                >
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.title}
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="project-title">{project.title}</div>
                <div className="project-year">{project.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Full-screen Service Detail Panel */}
      <div
        id="service-detail-panel"
        className={activeProject ? 'visible' : ''}
        ref={detailPanelRef}
        data-lenis-prevent
      >
        {activeProject && (
          <>
            {/* Cinematic Background Image with Overlay */}
            <div className="detail-bg-image-wrapper" ref={imageWrapperRef}>
              <img
                ref={detailImageRef}
                className="detail-bg-image"
                src={activeProject.image}
                alt=""
                crossOrigin="anonymous"
              />
              <div className="detail-bg-overlay"></div>
            </div>

            <button className="detail-close-btn" onClick={() => window.history.back()}>
              <span>✕</span> CLOSE
            </button>

            {/* Single full-width content layout */}
            <div className="detail-panel-single" ref={detailLeftRef}>
              <div className="left-side-content">
                <h2 className="detail-title">{activeProject.title}</h2>
                <p className="detail-desc">{activeProject.description}</p>

                {/* Price + Packages button row */}
                <div className="detail-price-row">
                  <div className="detail-price-badge">
                    {activeProject.year}
                  </div>
                  <button
                    className="packages-btn"
                    onClick={() => openPackageOverlay(activeProject)}
                  >
                    <span className="packages-btn-icon">▤</span>
                    PACKAGES
                  </button>
                </div>

                <div className="detail-grid-info">
                  <div className="detail-features-section">
                    <h3>KEY DELIVERABLES</h3>
                    <ul className="detail-features-list">
                      {activeProject.features?.map((feature, i) => (
                        <li key={i} className="detail-feature-item">
                          <span className="bullet-dash">—</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-meta-group">
                    <div className="meta-item">
                      <h3>PROJECT TIMELINE</h3>
                      <p>{activeProject.timeline}</p>
                    </div>
                    <div className="meta-item mt-8">
                      <h3>PROJECT SCOPE</h3>
                      <p className="text-normal font-normal opacity-70 text-[1.5rem] leading-[1.6] normal-case">{activeProject.scope}</p>
                    </div>
                    {activeProject.note && (
                      <div className="pkg-pricing-notice">
                        <h3 className="pkg-pricing-notice-title">IMPORTANT PRICING NOTICE</h3>
                        <div className="pkg-pricing-notice-text-wrapper">
                          {activeProject.note.additional?.map((item, i) => (
                            <p key={i} className="pkg-pricing-notice-item" style={{ opacity: i === 0 ? 1 : 0.85 }}>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Fullscreen Package Overlay */}
      {activePackageProject && (
        <div
          id="package-overlay"
          ref={packageOverlayRef}
          className="pkg-overlay"
          data-lenis-prevent
        >
          {/* Subtle background pattern */}
          <div className="pkg-overlay-bg"></div>

          {/* Floating close button */}
          <button className="pkg-overlay-close" onClick={() => window.history.back()}>
            <span>✕</span> CLOSE
          </button>

          {/* Editorial title section */}
          <div className="pkg-overlay-intro">
            <span className="pkg-overlay-label">PACKAGES</span>
            <h2 className="pkg-overlay-title">{activePackageProject.title}</h2>
          </div>

          {/* Slider Container */}
          <div className="pkg-slider-container">
            <div className="slider">
              <button className="slider--btn slider--btn__prev" onClick={handlePrev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <div className="slides__wrapper">
                <div className="slides">
                  {activePackageProject.packages.map((pkg, i) => {
                    let status: 'current' | 'next' | 'previous' = 'current'
                    if (i === pkgIndex) {
                      status = 'current'
                    } else if (i === wrap(pkgIndex + 1, 3)) {
                      status = 'next'
                    } else {
                      status = 'previous'
                    }

                    let zIndex = 10
                    if (status === 'current') {
                      zIndex = 20
                    } else if (status === 'previous') {
                      zIndex = pkgDirection === 1 ? 30 : 10
                    } else if (status === 'next') {
                      zIndex = pkgDirection === -1 ? 30 : 10
                    }

                    return (
                      <div
                        key={i}
                        className="slide"
                        data-current={status === 'current' ? '' : undefined}
                        data-next={status === 'next' ? '' : undefined}
                        data-previous={status === 'previous' ? '' : undefined}
                        style={{ zIndex }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="slide__inner">
                          <div className={`pkg-card ${pkg.highlighted ? 'pkg-card--highlighted' : ''}`}>
                            {pkg.badge && (
                              <span className="pkg-badge">{pkg.badge}</span>
                            )}
                            {!pkg.badge && (
                              <span className="pkg-badge pkg-badge--invisible">·</span>
                            )}
                            <div className="pkg-name">{pkg.name}</div>
                            <div className="pkg-price">{pkg.price}</div>
                            <div className="pkg-divider"></div>
                            <ul className="pkg-features">
                              {pkg.features.map((feat, fi) => (
                                <li key={fi} className="pkg-feature-item">
                                  <span className="pkg-check">✓</span>
                                  {feat}
                                </li>
                              ))}
                            </ul>
                            {pkg.ctaLabel === 'INQUIRE NOW' && (
                              <a href={pkg.ctaHref} className="pkg-cta">
                                {pkg.ctaLabel}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <button className="slider--btn slider--btn__next" onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom note */}
          <div className="pkg-overlay-note">
            All prices are starting prices. Final cost varies based on project scope and requirements.
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-header">
            <h2>
              <span className="light-text" style={{ color: 'var(--warm-off-black)' }}>Creating digital experiences</span>
              <span className="bold-text" style={{ color: '#757471' }}>that help brands grow and stand out.</span>
            </h2>
          </div>

          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-section">
                <h3 style={{ color: 'var(--warm-off-black)' }}>Contact</h3>
                <p>creastorastudios@gmail.com</p>
                <p>Chennai, Tamil Nadu</p>
                <p>Available Worldwide</p>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer-section">
                <h3 style={{ color: 'var(--warm-off-black)' }}>Services</h3>
                <p>Websites</p>
                <p>Applications</p>
                <p>Marketing</p>
                <p>Design</p>
                <p>Development</p>
                <p>Growth</p>
                <p>3D Animation</p>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer-section">
                <h3 style={{ color: 'var(--warm-off-black)' }}>Collaboration</h3>
                <p>Let's Collaborate</p>
                <p className="mt-8 opacity-60 normal-case italic">"Turning ideas into digital success."</p>
                <p className="mt-2 opacity-40 text-[1.2rem] tracking-wider uppercase">Design. Development. Marketing.</p>
              </div>
            </div>
          </div>

          {/* Footer Logo */}
          <div className="footer-logo select-none flex justify-center text-[18vw] font-bold leading-none tracking-[-0.08em] text-[var(--warm-off-black)] mb-8">
            <span className="logo-path">C</span>
            <span className="logo-path">R</span>
            <span className="logo-path">E</span>
            <span className="logo-path">S</span>
            <span className="logo-path">T</span>
            <span className="logo-path">O</span>
            <span className="logo-path">R</span>
            <span className="logo-path">A</span>
          </div>

          {/* Bottom Text */}
          <div className="text-center text-[1.2rem] opacity-40 uppercase tracking-widest font-normal text-[var(--warm-off-black)] select-none">
            © 2026 Creastora. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
