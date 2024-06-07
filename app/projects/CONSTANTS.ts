export interface ProjectInfo {
  path: string
  coverImg: string
  alt: string
  title: string
  desc: string
  timeline: string
}
export const PROJECTS: Array<ProjectInfo> = [
  {
    path: "/projects/mic-drop",
    coverImg: "/mic-drop.png",
    alt: "Mic Drop Cover Image",
    title: "Mic Drop",
    desc: "Open Mic Event Dashboard for Comedians in NYC",
    timeline: "In Development - MVP to be deployed June 2024",
  },
  {
    path: "/projects/mock-mobile-site",
    coverImg: "/karamozov.png",
    alt: "Mock College Website for Short Film",
    title: "Mock Mobile Website",
    desc: "Mock Mobile College Website for Short Film",
    timeline: "Deployed May 2024",
  },
  {
    path: "/projects/admin-tool",
    coverImg: "/admin-staff.png",
    alt: "Admin Tool and Staff Portal Cover Image",
    title: "Admin Dashboard & Staff Portal",
    desc: "Admin Dashboard and Staff Portal for Culinary Services",
    timeline: "Deployed April 2024",
  },
  {
    path: "/projects/sourcing-tool",
    coverImg: "/sourcing-tool.png",
    alt: "Sourcing Tool Cover Image",
    title: "Material Sourcing Tool",
    desc: "Monday Integration to source stones for a Bespoke Jewelry Designer",
    timeline: "Deployed January 2024",
  },
  {
    path: "/projects/internal-database",
    coverImg: "/prideworks-backboard.png",
    alt: "Internal Database Tool Cover Image",
    title: "Internal Database",
    desc: "Internal Database Tool for Non-Profits",
    timeline: "Deployed September 2023",
  },
  {
    path: "/projects/symptom-food-tracker",
    coverImg: "/seed.png",
    alt: "Symptom and Food Tracker Cover Image",
    title: "Food and Symptom Tracker",
    desc: "Demo Application for Food and Symptom Tracker",
    timeline: "Deployed April 2023",
  },
]

export const BACKGROUNDCOLOR = [
  { path: "/projects", color: "#66005E" },
  { path: "/blog", color: "#02007A" },
  { path: "/about", color: "#5700A4" },
  { path: "/contact", color: "#8F0083" },
]
