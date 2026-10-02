/**
 * Icons are served from /public/media/icons — generated at 256px by
 * scripts/optimize-images.mjs. Importing the masters instead pulled ~1.9 MB of
 * oversized PNGs into the bundle to render at 36px.
 */
const icon = (name) => `/media/icons/${name}.png`;

export { SITE } from "./site";

/* ------------------------------------------------------------------
   NAVIGATION
   ------------------------------------------------------------------ */
export const navLinks = [
  { id: "about", title: "About" },
  { id: "services", title: "Services" },
  { id: "experience", title: "Experience" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

/* ------------------------------------------------------------------
   HERO — rotating roles
   ------------------------------------------------------------------ */
const roles = [
  "Video Editing",
  "AI Production",
  "VFX & Compositing",
  "3D & CGI",
];

/* ------------------------------------------------------------------
   STATS
   ------------------------------------------------------------------ */
const stats = [
  { value: 1, suffix: "+", label: "Years Crafting Visuals" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "", label: "Tools I work in" },
  { value: Infinity, suffix: "", label: "Creative Possibilities" },
];

/* ------------------------------------------------------------------
   SERVICES
   ------------------------------------------------------------------ */
const services = [
  {
    title: "Post Production",
    icon: icon("animation"),
    blurb:
      "From raw footage to a finished visual story — edited, refined and ready to perform across every platform.",
    points: ["Video Editing & Storytelling", "Colour Grading", "Motion Graphics & Sound Design"],
  },
  {
    title: "AI Production",
    icon: icon("vfx"),
    blurb:
      "AI-powered visuals and content workflows that turn concepts into production-ready creative faster.",
    points: ["AI Video & Image Generation", "AI Product & Brand Visuals", "Creative AI Workflows"],
  },
  {
    title: "Visual Effects",
    icon: icon("led"),
    blurb:
      "Seamless visual effects that blend footage, graphics and digital elements into one believable frame.",
    points: ["VFX & Compositing", "Rotoscoping & Clean-up", "Tracking & Screen Replacement"],
  },
  {
    title: "3D & CGI",
    icon: icon("creator"),
    blurb:
      "High-quality 3D visuals built for products, brands, campaigns and cinematic experiences.",
    points: ["3D Modelling & Texturing", "Product & Brand Animation", "CGI & Motion Design"],
  },
];

/* ------------------------------------------------------------------
   TOOLS
   ------------------------------------------------------------------ */
const technologies = [
  { name: "Unreal Engine", icon: icon("ue") },
  { name: "Blender", icon: icon("blender") },
  { name: "Substance Painter", icon: icon("pt") },
  { name: "After Effects", icon: icon("aftereffect") },
  { name: "DaVinci Resolve", icon: icon("davinci") },
  { name: "Premiere Pro", icon: icon("pp") },
  { name: "Photoshop", icon: icon("ps") },
  { name: "Illustrator", icon: icon("ai") },
];

/* ------------------------------------------------------------------
   EXPERIENCE
   ------------------------------------------------------------------ */
const experiences = [
  {
    title: "Video Editor & Animator",
    company_name: "Kaykee Digital Solution",
    icon: icon("kds"),
    iconBg: "hsl(0, 0%, 0%)",
    date: "May 2025 - July 2026",
    points: [
      "Creating impactful Videos & Animations for YouTube, Instagram, and ad campaigns.",
      "Managing end-to-end production, including animation, editing, sound, and color grading for high-quality results.",
      "Collaborating with clients to bring creative visions to life, ensuring timely delivery aligned with branding and audience needs.",
    ],
  },
  {
    title: "Senior Editor",
    company_name: "Visionary X",
    icon: icon("VX"),
    iconBg: "hsl(0, 0%, 1%)",
    date: "Present",
    points: [
      "Crafted compelling visual stories designed to effectively convert passive audiences into active customers.",
      "Produced animations, corporate videos, digital advertisements, and promotional content",
      "Delivering creative visual stories that boost brand communication and audience engagement.",
    ],
  },
];

/* ------------------------------------------------------------------
   TESTIMONIALS
   Not rendered on the live site — real client quotes go here first.
   ------------------------------------------------------------------ */
const testimonials = [];

/* ------------------------------------------------------------------
   PROJECTS
   `category` drives the filter chips, `videoId` drives the lightbox.
   ------------------------------------------------------------------ */
const projects = [
  {
    name: "Kaykee Digital Solution - Promotion Video",
    category: "3D Animation & CGI",
    year: "2025",
    tags: [
      { name: "Blender", color: "pink-text-gradient" },
      { name: "Premiere Pro", color: "green-text-gradient" },
    ],
    slug: "work-mustang",
    videoId: "W5jWl2eztQg",
    source_code_link: "https://youtu.be/W5jWl2eztQg",
  },
  {
    name: "Digital Advertisment - Sowbaghya",
    category: "AI Production",
    year: "2025",
    tags: [
      { name: "Gemini AI", color: "pink-text-gradient" },
      { name: "After Effects", color: "green-text-gradient" },
    ],
    slug: "work-island",
    videoId: "p3rq5qYlWow",
    source_code_link: "https://youtu.be/p3rq5qYlWow",
  }, 
  {
    name: "Foodie Prabu - Travel & Food Vlog",
    category: "Long Form Content",
    year: "2026",
    tags: [
      { name: "After Effects", color: "pink-text-gradient" },
      { name: "Premiere Pro", color: "green-text-gradient" },
    ],
    slug: "work-mustang",
    videoId: "Cln8I-ZHEzQ",
    source_code_link: "https://youtu.be/Cln8I-ZHEzQ",
  },
  {
    name: "Visionary X - Promotional Reel",
    category: "Reels",
    year: "2026",
    tags: [
      { name: "After Effects", color: "pink-text-gradient" },
      { name: "Premiere Pro", color: "green-text-gradient" },
    ],
    slug: "work-island",
    videoId: "QJN3bjXRUJk",
    source_code_link: "https://youtu.be/QJN3bjXRUJk?si=6g0k1r3J7X8Z2W5A",
  },
  {
    name: "Dubai Infrastructure - IPG",
    category: "Reels",
    year: "2026",
    tags: [
      { name: "After Effects", color: "pink-text-gradient" },
      { name: "Premiere Pro", color: "green-text-gradient" },
    ],
    slug: "work-ganesha",
    videoId: "WWBvL9IqHCA",
    source_code_link: "https://youtube.com/shorts/WWBvL9IqHCA",
  },
  {
    name: "Construction Agreement - Vaishnav Infrastructure",
    category: "Reels",
    year: "2026",
    tags: [
      { name: "After Effects", color: "pink-text-gradient" },
      { name: "Premiere Pro", color: "green-text-gradient" },
    ],
    slug: "work-ganesha",
    videoId: "rOR47O-bdG8",
    source_code_link: "https://youtu.be/rOR47O-bdG8",
  },
  {
    name: "AV for Inscape Projects Group",
    category: "Reels",
    year: "2026",
    tags: [
      { name: "After Effects", color: "pink-text-gradient" },
      { name: "Premiere Pro", color: "green-text-gradient" },
    ],
    slug: "work-airplane",
    videoId: "1J6mY1h90T0",
    source_code_link: "https://youtu.be/1J6mY1h90T0",
  },
  {
    name: "Super Star Title Card Animation",
    category: "Intro Animation",
    year: "2026",
    tags: [
      { name: "Blender", color: "pink-text-gradient" },
      { name: "Premiere Pro", color: "green-text-gradient" },
    ],
    slug: "work-island",
    videoId: "KZiw2AUBofY",
    source_code_link: "https://youtu.be/KZiw2AUBofY",
  },
  {
    name: "Logo Intro Animation for Kaykee Digital Solution",
    category: "Intro Animation",
    year: "2026",
    tags: [
      { name: "After Effects", color: "pink-text-gradient" },
      { name: "Premiere Pro", color: "green-text-gradient" },
    ],
    slug: "work-island",
    videoId: "-9b_oeoMLsA",
    source_code_link: "https://youtu.be/-9b_oeoMLsA",
  },
];

export {
  roles,
  stats,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
