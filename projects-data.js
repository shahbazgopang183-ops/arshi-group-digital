/* =============================================
   AG Portfolio – Projects Data Layer
   Fetches project data from JSONBin.io CMS
   ============================================= */

const ProjectsCMS = (() => {

  // ─── CONFIGURATION ───────────────────────────────────────
  // INSTRUCTIONS: 
  // 1. Go to https://jsonbin.io and create a FREE account
  // 2. Create a new Bin, paste your projects JSON (see projects-fallback.json for the format)
  // 3. Copy your X-Master-Key from Account → API Keys
  // 4. Copy the Bin ID from the URL of your Bin
  // 5. Paste both below:
  const CONFIG = {
    BIN_ID: '',           // e.g. '60c7XXXXXXXXXXXXXXXXXXXX'
    API_KEY: '',          // e.g. '$2b$10$XXXXXXXXXXXXXXXXXXXXX'
    BASE_URL: 'https://api.jsonbin.io/v3/b',
    CACHE_KEY: 'bwh_projects_cache_v4',
    CACHE_TTL: 5 * 60 * 1000, // 5-minute cache
  };

  // ─── FETCH FROM JSONBIN ──────────────────────────────────
  async function fetchFromAPI() {
    if (!CONFIG.BIN_ID || !CONFIG.API_KEY) {
      console.warn('[ProjectsCMS] No JSONBin credentials configured. Using fallback data.');
      return null;
    }

    try {
      const res = await fetch(`${CONFIG.BASE_URL}/${CONFIG.BIN_ID}/latest`, {
        headers: { 'X-Master-Key': CONFIG.API_KEY }
      });
      if (!res.ok) throw new Error(`API returned ${res.status}`);
      const data = await res.json();
      return data.record?.projects || data.record || null;
    } catch (err) {
      console.error('[ProjectsCMS] API fetch failed:', err.message);
      return null;
    }
  }

  // ─── LOCAL FALLBACK DATA ─────────────────────────────────
  const FALLBACK_DATA = [
  {
    "id": "jobcarrer-job-portal",
    "title": "JobCarrer - Job & Internship Portal",
    "category": "Full-Stack",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/job.png",
    "images": [
      "assets/job.png"
    ],
    "video": "",
    "liveUrl": "",
    "githubUrl": "",
    "client": "JobCarrer",
    "duration": "4 Weeks",
    "year": "2025",
    "description": "A modern and feature-rich job and internship portal designed to connect job seekers, students, companies, and recruiters on a single platform. JobCarrer allows users to discover relevant job opportunities, explore internships, browse companies, view detailed job descriptions, and apply for positions online through a streamlined application process.",
    "features": [
      "Modern Job Portal Interface",
      "Job Search & Discovery",
      "Profile Management",
      "Employer Dashboard"
    ],
    "featured": true
  },
  {
    "id": "novarides-car-rental",
    "title": "NovaRides - Car Rental & Sales Platform",
    "category": "Full-Stack",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/novarides.png",
    "images": [
      "assets/novarides.png"
    ],
    "video": "",
    "liveUrl": "",
    "githubUrl": "",
    "client": "NovaRides",
    "duration": "5 Weeks",
    "year": "2025",
    "description": "A modern full-stack car rental and automotive marketplace platform built to provide a seamless experience for customers looking to rent, buy, or sell vehicles online.",
    "features": [
      "Online Car Rental System",
      "Car Booking & Reservation",
      "Buy & Sell Cars Online",
      "Admin Dashboard"
    ],
    "featured": true
  },
  {
    "id": "al-harmain-travels",
    "title": "Al-Harmain Travels - Travel & Umrah Booking Platform",
    "category": "Full-Stack",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/al-harmian.png",
    "images": [
      "assets/al-harmian.png"
    ],
    "video": "",
    "liveUrl": "",
    "githubUrl": "",
    "client": "Al-Harmain Travels",
    "duration": "4 Weeks",
    "year": "2025",
    "description": "A premium full-stack travel agency website developed for Al-Harmain Travels to showcase Umrah, Hajj, travel, accommodation, and transportation services.",
    "features": [
      "Premium Travel Agency Website",
      "Umrah & Hajj Packages",
      "Flight & Hotel Booking",
      "Direct WhatsApp Contact"
    ],
    "featured": true
  },
  {
    "id": "eduflow-online-learning",
    "title": "EduFlow - Online Course & Learning Platform",
    "category": "Full-Stack",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/eduflow.png",
    "images": [
      "assets/eduflow.png"
    ],
    "video": "",
    "liveUrl": "",
    "githubUrl": "",
    "client": "EduFlow",
    "duration": "6 Weeks",
    "year": "2025",
    "description": "A complete full-stack online learning and course marketplace platform designed for students, instructors, and course creators.",
    "features": [
      "Course Marketplace",
      "Free & Paid Courses",
      "Progress Tracking",
      "Certificate Generation"
    ],
    "featured": true
  },
  {
    "id": "technova-ai-tech-blog",
    "title": "TechNova - AI & Technology Blog",
    "category": "Full-Stack",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/technova.png",
    "images": [
      "assets/technova.png"
    ],
    "video": "",
    "liveUrl": "",
    "githubUrl": "",
    "client": "TechNova",
    "duration": "3 Weeks",
    "year": "2025",
    "description": "A modern full-stack technology blogging platform built for publishing and discovering high-quality content around artificial intelligence, web development, and programming.",
    "features": [
      "Modern Blogging Platform",
      "Topic Categories",
      "Dark Theme / Light Theme",
      "Admin Dashboard"
    ],
    "featured": true
  },
  {
    "id": "uxpeak-uiux-ebooks",
    "title": "UxPeak - UI/UX eBook Marketplace",
    "category": "Full-Stack",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/uxpeal.png",
    "images": [
      "assets/uxpeal.png"
    ],
    "video": "",
    "liveUrl": "",
    "githubUrl": "",
    "client": "UxPeak",
    "duration": "4 Weeks",
    "year": "2025",
    "description": "A premium full-stack digital eBook marketplace designed specifically for UI/UX designers, developers, and creative professionals.",
    "features": [
      "Digital Product Marketplace",
      "Product Preview",
      "Checkout System",
      "Creator Earnings Tracking"
    ],
    "featured": true
  },
  {
    "id": "eetrade-electronics-store",
    "title": "eEtrade - Electronics E-Commerce Platform",
    "category": "Full-Stack",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/etrade.png",
    "images": [
      "assets/etrade.png"
    ],
    "video": "",
    "liveUrl": "",
    "githubUrl": "",
    "client": "eEtrade",
    "duration": "5 Weeks",
    "year": "2025",
    "description": "A modern full-stack electronics e-commerce platform built with Laravel for selling computers, laptops, headphones, accessories, and other consumer electronics online.",
    "features": [
      "Online Electronics Store",
      "Advanced Product Filtering",
      "Wishlist & Cart System",
      "Admin Dashboards"
    ],
    "featured": false
  },
  {
    "id": "streampia-iptv-platform",
    "title": "StreamPia - Streaming Subscription Platform",
    "category": "Full-Stack",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/streampia.png",
    "images": [
      "assets/streampia.png"
    ],
    "video": "",
    "liveUrl": "https://streampia.com",
    "githubUrl": "",
    "client": "StreamPia",
    "duration": "5 Weeks",
    "year": "2025",
    "description": "A modern subscription-based streaming platform designed for providing a professional digital experience for browsing streaming plans and managing customer subscriptions.",
    "features": [
      "Subscription-Based Model",
      "Streaming Service Landing Page",
      "Plan Comparison Section",
      "Customer Subscription Management"
    ],
    "featured": false
  },
  {
    "id": "snacks-3d-ecommerce",
    "title": "Snacks - 3D Food E-Commerce",
    "category": "Frontend",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/snacks-website.png",
    "images": [
      "assets/snacks-website.png"
    ],
    "video": "",
    "liveUrl": "https://snacks-AG.netlify.app/",
    "githubUrl": "",
    "client": "Snacks Co.",
    "duration": "4 Weeks",
    "year": "2023",
    "description": "A full-stack e-commerce website for organic snacks and chips, featuring exotic flavors and health-focused snack options. The platform includes product management, customer favorites, and a secure checkout system built on Laravel.",
    "features": [
      "3D Product Presentation",
      "Shopping Cart System",
      "Order Management",
      "Healthy Snack Listings"
    ],
    "featured": false
  },
  {
    "id": "iptv-digital-services",
    "title": "IPTV Digital - Streaming Provider Platform",
    "category": "Frontend",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/iptv-digitaly.png",
    "images": [
      "assets/iptv-digitaly.png"
    ],
    "video": "",
    "liveUrl": "https://iptv-digital-AG.netlify.app/",
    "githubUrl": "",
    "client": "IPTV Digital",
    "duration": "5 Weeks",
    "year": "2023",
    "description": "A complete subscription-based IPTV streaming service provider platform offering premium streaming plans, a reseller program, and VOD capabilities. Includes backend infrastructure for handling subscriptions, payments, and multi-device access.",
    "features": [
      "Subscription Management",
      "Reseller Dashboard",
      "VOD TV Channels",
      "Payment Gateway Integration"
    ],
    "featured": false
  },
  {
    "id": "beats-headphones-store",
    "title": "Beats - Premium Headphones E-Commerce",
    "category": "Frontend",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/headponse.png",
    "images": [
      "assets/headponse.png"
    ],
    "video": "",
    "liveUrl": "https://headphones-AG.netlify.app/",
    "githubUrl": "",
    "client": "Beats Audio",
    "duration": "3 Weeks",
    "year": "2023",
    "description": "A premium, high-performance e-commerce platform for wireless headphones and audio accessories. Providing customers with immersive product specifications, color variants, cart functionality, and order processing capabilities.",
    "features": [
      "Product Specifications",
      "Color Variants System",
      "Inventory Management",
      "Secure Checkout"
    ],
    "featured": false
  },
  {
    "id": "veta-vr-open-world",
    "title": "VETA - VR Open World Platform",
    "category": "Frontend",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "GSAP"
    ],
    "thumbnail": "assets/veta-vr.png",
    "images": [
      "assets/veta-vr.png"
    ],
    "video": "",
    "liveUrl": "https://veta-ve-AG.netlify.app/",
    "githubUrl": "",
    "client": "VETA VR",
    "duration": "6 Weeks",
    "year": "2023",
    "description": "A fully immersive web platform for a Virtual Reality open world, connecting users via social, gaming, educational, and business experiences. Features user community portals, AR integration, and immersive learning backend systems.",
    "features": [
      "VR World Discovery",
      "Immersive Learning System",
      "AR Integration",
      "Community Portals"
    ],
    "featured": false
  }
];

  async function fetchFallback() {
    return FALLBACK_DATA;
  }

  // ─── SESSION CACHE ───────────────────────────────────────
  function getCache() {
    try {
      const raw = sessionStorage.getItem(CONFIG.CACHE_KEY);
      if (!raw) return null;
      const { data, ts } = JSON.parse(raw);
      if (Date.now() - ts > CONFIG.CACHE_TTL) {
        sessionStorage.removeItem(CONFIG.CACHE_KEY);
        return null;
      }
      return data;
    } catch { return null; }
  }

  function setCache(data) {
    try {
      sessionStorage.setItem(CONFIG.CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
    } catch { /* quota exceeded, ignore */ }
  }

  // ─── PUBLIC: GET ALL PROJECTS ────────────────────────────
  async function getProjects() {
    // 1. Check cache
    const cached = getCache();
    if (cached) return cached;

    // 2. Try API
    let projects = await fetchFromAPI();

    // 3. Fallback
    if (!projects || projects.length === 0) {
      projects = await fetchFallback();
    }

    // 4. Cache & return
    if (projects && projects.length > 0) {
      setCache(projects);
    }
    return projects || [];
  }

  // ─── PUBLIC: GET FEATURED PROJECTS ───────────────────────
  async function getFeatured(limit = 4) {
    const all = await getProjects();
    const featured = all.filter(p => p.featured);
    return featured.length > 0 ? featured.slice(0, limit) : all.slice(0, limit);
  }

  // ─── PUBLIC: GET PROJECT BY ID ───────────────────────────
  async function getById(id) {
    const all = await getProjects();
    return all.find(p => p.id === id) || null;
  }

  // ─── PUBLIC: GET CATEGORIES ──────────────────────────────
  async function getCategories() {
    const all = await getProjects();
    const cats = new Set(all.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }

  return { getProjects, getFeatured, getById, getCategories, CONFIG, FALLBACK_DATA };

})();
