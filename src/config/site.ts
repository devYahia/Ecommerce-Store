export const siteConfig = {
  name: "Lancer3D",
  description: "Egypt's Premier 3D Printer Store - FDM & Resin Printers, Filaments, Parts & Services",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://lancer3d.com",
  ogImage: "/og-image.jpg",
  
  // Contact Information
  contact: {
    email: "info@lancer3d.com",
    phone: "+20 1014292919",
    whatsapp: "201014292919",
    addresses: [
      {
        name: "Main Store",
        address: "13 AL Sandoubi Street, Shoubra Masr, Cairo, Egypt",
        mapUrl: "https://maps.app.goo.gl/RiQDdN1CGCLkV1m88",
      },
      {
        name: "Al-Batal Tower",
        address: "63A Al-Maqsi, Rod El Farag Metro Station, Shubra Square, Cairo",
        mapUrl: "https://maps.app.goo.gl/MLeY2cd1FSGvdysSA",
      },
    ],
  },
  
  // Social Links
  social: {
    facebook: "https://www.facebook.com/Lancer3d.eg",
    instagram: "https://www.instagram.com/lancer3d_printer/",
    twitter: "https://x.com/Lancer3DEG",
    youtube: "https://www.youtube.com/channel/UChhRKmTEEkHimR3o_tqs-zA",
    linkedin: "https://www.linkedin.com/company/lancer3d/",
    tiktok: "https://www.tiktok.com/@lancer.3d",
    telegram: "https://t.me/joinchat/fDiSwehaKuZkOTFk",
  },
  
  // Navigation
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/shop" },
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ],
  
  // Categories (main ones for navigation)
  categories: [
    { name: "FDM 3D Printers", slug: "fdm-3d-printers", icon: "printer" },
    { name: "Resin 3D Printers", slug: "resin-3d-printers", icon: "droplet" },
    { name: "Filament", slug: "filament", icon: "cylinder" },
    { name: "Resin", slug: "resin", icon: "flask" },
    { name: "Spare Parts", slug: "spare-parts-tools", icon: "wrench" },
    { name: "Electrical Parts", slug: "3d-printer-electrical-parts", icon: "zap" },
    { name: "Mechanical Parts", slug: "3d-printer-mechanical-parts", icon: "cog" },
    { name: "Arduino & Sensors", slug: "arduino-sensors", icon: "cpu" },
  ],
  
  // Top Brands
  brands: [
    { name: "Creality", slug: "creality", logo: "/brands/creality.png" },
    { name: "Anycubic", slug: "anycubic", logo: "/brands/anycubic.png" },
    { name: "Elegoo", slug: "elegoo", logo: "/brands/elegoo.png" },
    { name: "Bambu Lab", slug: "bambu-lab", logo: "/brands/bambu-lab.png" },
    { name: "eSUN", slug: "esun", logo: "/brands/esun.png" },
    { name: "Phrozen", slug: "phrozen", logo: "/brands/phrozen.png" },
  ],
  
  // Currency
  currency: {
    code: "EGP",
    symbol: "EGP",
    locale: "en-EG",
  },
  
  // Shipping
  shipping: {
    freeShippingThreshold: 0, // Free shipping on all printers
    defaultRate: 50, // Default shipping cost in EGP
  },
  
  // Rewards
  rewards: {
    pointsPerEgp: 1, // 1 point per EGP spent
    pointValue: 0.01, // 1 point = 0.01 EGP
    minRedemption: 100, // Minimum points to redeem
  },
};

export type SiteConfig = typeof siteConfig;

