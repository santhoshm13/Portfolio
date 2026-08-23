export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  statusText?: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "COGNIVUE",
    category: "AI / LLM • PRODUCT DATA ENRICHMENT PLATFORM",
    description:
      "Cognivue is an AI-powered product data enrichment platform designed to transform raw product catalog data into structured, validated, and enriched product information.",
    highlights: [
      "Automates product classification, brand and manufacturer matching, attribute extraction, and LOV/UOM validation.",
      "Calculates data confidence scoring, generates AI marketing copy, and exports standardized 252-column CSV/Excel catalog datasets.",
      "Built with a high-performance FastAPI/Python backend, Supabase PostgreSQL database, and reactive React + TypeScript frontend.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Supabase",
      "AI/LLM Services",
      "Tailwind CSS",
    ],
    liveUrl: "https://cognivue-1.onrender.com/",
    githubUrl: "https://github.com/santhoshm13/cognivue",
    accentColor: "#a855f7",
  },
  {
    number: "02",
    title: "QUEUE CURE '26",
    category: "HEALTHCARE • REAL-TIME SYSTEM",
    description:
      "A real-time hospital OPD queue management system designed to make patient waiting more organized, transparent, and accessible.",
    highlights: [
      "Built a real-time OPD queue system using React, Node.js, Express.js, MySQL, and Socket.io.",
      "Added multilingual voice announcements in 10 regional Indian languages with railway-style sequential PA announcements.",
      "Implemented dynamic wait-time estimation, password-protected reception management, live patient lobby display, session-based daily queue reset, and permanent history tracking.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Socket.io"],
    liveUrl: "https://queue-cure-26-123900670640.asia-southeast1.run.app/",
    githubUrl: "https://github.com/santhoshm13/QUEUE-CURE",
    accentColor: "#38bdf8",
  },
  {
    number: "03",
    title: "CIVICONNECT",
    category: "CIVIC TECH • AI",
    description:
      "An AI-powered civic issue management platform connecting citizens, infrastructure problems, and government stakeholders.",
    highlights: [
      "Developed a full-stack platform for reporting and tracking potholes, garbage, water leakage, and streetlight failures.",
      "Integrated Gemini Vision API for automatic image-based issue classification.",
      "Added OpenStreetMap-based geolocation mapping and role-based dashboards for Collectors, Mayors, and MLAs with district- and constituency-wise tracking.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Gemini Vision API",
      "OpenStreetMap",
      "Leaflet",
      "Tailwind CSS",
      "REST APIs",
      "Git/GitHub",
    ],
    liveUrl: "https://civiconnect-123900670640.asia-southeast1.run.app/",
    githubUrl: "https://github.com/santhoshm13/CIVICONNECT",
    accentColor: "#34d399",
  },
  {
    number: "04",
    title: "SAKHI",
    category: "WOMEN'S HEALTH • AGENTIC AI",
    description:
      "An agentic AI healthcare companion dedicated to women's menstrual healthcare and pregnancy care. Built on Gemini function-calling to proactively track cycles, monitor pregnancy wellness, and provide personalized health guidance.",
    highlights: [
      "Built at the Vibe2Vision hackathon with team FAB4.",
      "Leverages Gemini function-calling for automated cycle tracking, symptom logging, and pregnancy milestone guidance.",
      "Engineered proactive agentic workflows for personalized maternal health alerts, wellness reminders, and health insights.",
    ],
    technologies: [
      "Gemini Function Calling",
      "Agentic AI",
      "React",
      "Python / Node",
      "REST APIs",
      "Vibe2Vision",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/balajisabk32-cmd/FAB4-v2v",
    statusText: "VIBE2VISION • TEAM FAB4",
    accentColor: "#f43f5e",
  },
  {
    number: "05",
    title: "FLEETX",
    category: "LOGISTICS • TRANSPORT OPERATIONS PLATFORM",
    description:
      "FleetX is a full-stack transport management platform designed to simplify fleet operations by bringing vehicle, driver, trip, maintenance, and expense management into one centralized system.",
    highlights: [
      "Engineered a centralized system managing active fleets, driver allocations, live trip dispatches, and maintenance logs.",
      "Built unified modules for real-time expense monitoring, fuel audit logs, and vehicle health metrics.",
      "Designed an intuitive high-contrast dashboard with instant dispatch scheduling and operational reporting.",
    ],
    technologies: [
      "Full-Stack",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Database Management",
      "Logistics Tech",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/balajisabk32-cmd/FleetX",
    accentColor: "#06b6d4",
  },
  {
    number: "06",
    title: "DATAGENIE",
    category: "AI & DATA ANALYTICS • WEB PLATFORM",
    description:
      "An intelligent AI-powered data assistant and analytics application designed to analyze, transform, and extract actionable insights from data seamlessly.",
    highlights: [
      "Built an interactive web platform for automated data exploration and intelligent AI generation.",
      "Integrated responsive UI analytics dashboards, prompt-driven dataset operations, and clean export workflows.",
      "Deployed live on Vercel with high responsiveness, clean UI, and fast asset delivery.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "AI & Data APIs",
      "REST APIs",
    ],
    liveUrl: "https://datagenie-eight.vercel.app/",
    githubUrl: "https://github.com/santhoshm13",
    accentColor: "#818cf8",
  },
  {
    number: "07",
    title: "TN TOURISM",
    category: "TOURISM • JAVA FULL STACK",
    description:
      "A full-stack tourism application designed to help users discover attractions and accommodations across Tamil Nadu.",
    highlights: [
      "Showcases tourist attractions across all districts of Tamil Nadu through district-wise categorization and location-based information.",
      "Includes hotel discovery features for popular hotels and accommodations near tourist destinations.",
      "Uses Java Full Stack technologies to provide responsive interfaces and backend services for data management and user interaction.",
    ],
    technologies: ["Java Full Stack"],
    liveUrl: null,
    githubUrl: null,
    statusText: "COMING SOON",
    accentColor: "#f59e0b",
  },
];
