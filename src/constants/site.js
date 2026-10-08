/**
 * Single source of truth for identity, SEO and contact data.
 *
 * ─────────────────────────────────────────────────────────────
 * DEPLOYING TO A DIFFERENT DOMAIN?
 * Change SITE.url here, then run:  npm run seo:sync
 * That rewrites the domain across index.html, robots.txt,
 * sitemap.xml and llms.txt in one pass.
 * ─────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: "Ajith S",
  shortName: "Ajith S",
  logo: "/logo.png",
  url: "https://ajith.nexverrtech.com",
  role: "· Video Editor · Animator · VFX Artist ",
  tagline: "Every frame tells a story, every motion sparks emotion.",
  description:
    "Ajith S — Crafting polished visuals through editing, VFX, 3D, AI, compositing, and finishing for brands, films, digital campaigns, and visual content worldwide.",

  location: {
    city: "Dharmapuri",
    region: "Tamil Nadu",
    regionCode: "IN-TN",
    country: "India",
    countryCode: "IN",
    lat: 12.1211,
    lng: 78.1582,
    label: "Dharmapuri, Tamil Nadu · Working worldwide",
    timezone: "IST (UTC+5:30)",
  },

  contact: {
    phoneDisplay: "+91 63848 21366",
    whatsapp: "https://wa.me/916374961884",
    responseTime: "Usually replies within one working day",
  },

  socials: [
    { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/916374961884" },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/_ajithsankar_?igsh=MTZrcDFoOHd6YWtz&utm_source=qr",
    },
    {
      id: "youtube",
      label: "YouTube",
      href: "https://youtube.com/@ajith_sankar?si=JRVjyzQDTY7PiXGX",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ajith-s-357385325",
    },
  ],

  // EmailJS credentials — public by design (client-side SDK).
  email: {
    serviceId: "service_4ol3bz6",
    templateId: "template_k6xmjea",
    publicKey: "ucsodDXArpm-bq-82",
  },
};

export default SITE;
