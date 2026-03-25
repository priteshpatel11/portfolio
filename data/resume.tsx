import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pritesh Patel",
  initials: "BP",
  url: "https://www.bhaveshpatel.xyz/",
  location: "Vadodara, India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
"Web3 Developer - building, learning, and sharing on X.",
  summary:
"I’m a Web3-focused Full Stack Developer, passionate about building high-performance applications that bridge the gap between Web2 and Web3. With a deep understanding of core web technologies and blockchain architecture, I specialize in creating scalable, user-centric solutions—whether that’s engineering complex frontend systems from scratch or developing secure smart contracts on Solana."  ,
avatarUrl: "/pfp.png",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "C++",
    "Rust",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS"
  ],
  services: [
    {
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern frameworks. React, Next.js, TypeScript, Node.js, and cloud deployment.",
      icon: "⚡",
    },
    {
      title: "SaaS Development",
      description: "Scalable SaaS applications with modern architecture. From MVP to production with performance optimization.",
      icon: "🚀",
    },
  ],
  availability: {
    status: "Available",
    message: "Open to new freelance projects and collaborations",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pritesh1122004@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/priteshpatel11",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/priteshpatel11/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/priteshpatel11",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
         
  ],
  education: [
    {
      school: "Parul University, Vadodara",
      href: "https://paruluniversity.ac.in/",
      degree: "Master of Technology in Computer Engineering",
      logoUrl: "https://paruluniversity.ac.in/wp-content/uploads/2025/09/Variant9.svg",
      start: "2025",
      end: "2027",
    },
    {
      school: "Parul University, Vadodara",
      href: "https://paruluniversity.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "https://paruluniversity.ac.in/wp-content/uploads/2025/09/Variant9.svg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "GeoGrade",
      href: "https://github.com/priteshpatel11/geograde",
      dates: "2025",
      active: true,
      description:
        "GeoGrade A location analysis engine that quantifies the livability of any given area. I engineered a system to fetch and cross-reference data across 20+ distinct categories, ranging from environmental metrics (pollution, water quality) to civic amenities (airports, stations). The platform processes this data to generate detailed comparative reports, enabling users to visualize hidden location factors that standard property listings often overlook.",
      technologies: ["Next.js", "TypeScript", "Python", "Tailwind"],
      links: [
        {
          type: "Source",
          href: "https://github.com/priteshpatel11/geograde",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/geograde.png", // Add screenshot: "/snapchain.png" (place in /public folder) or use external URL
      video: "", // Optional: Add demo video URL
    },
    {
      title: "Alchemy Landing Page",
      href: "https://github.com/priteshpatel11/alchemy-landing-page",
      dates: "2025",
      active: true,
      description:
        "A clean, responsive clone of the Alchemy website built using Next.js and Tailwind CSS. This project replicates the precise layout and structure of the original site, focusing exclusively on a polished light theme. It features a fully mobile-friendly design and demonstrates the ability to build professional-looking web pages with accurate spacing, typography, and component alignment.",
      technologies: ["Next.js", "TypeScript", "Python", "Tailwind"],
      links: [
        {
          type: "Source",
          href: "https://github.com/priteshpatel11/alchemy-landing-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/alchemy.png", // Add screenshot: "/snapchain.png" (place in /public folder) or use external URL
      video: "", // Optional: Add demo video URL
    },
    
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
