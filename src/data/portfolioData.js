export const personalData = {
  name: "Abdul Rehman",
  monogram: "AR",
  role: "MERN Stack Developer & Creative Web Developer",
  shortBio: "Building high-performance, interactive, and aesthetically striking web applications with modern MERN Stack architectures.",
  fullBio: `I am a dedicated MERN Stack Developer and Creative Web Developer specialized in architecting scalable, responsive, and visually immersive web applications. My approach merges engineering rigor with cutting-edge UI/UX design, crafting robust backends and reactive interfaces that deliver seamless digital experiences.`,
  location: "Pakistan",
  availability: "Available for MERN Stack & Frontend Roles",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    email: "abdulrehman.dev@gmail.com",
    whatsapp: "+92 310 4568021",
    whatsappNumber: "923104568021",
  },
  stats: [
    { label: "Core Stack", value: "MERN", detail: "MongoDB, Express, React, Node.js" },
    { label: "Modern Web Tech", value: "15+", detail: "React 19, Three.js, GSAP, Tailwind" },
    { label: "Responsive Design", value: "100%", detail: "Pixel-perfect on all screen sizes" },
    { label: "Performance", value: "99+", detail: "Optimized Core Web Vitals" },
  ],
};

export const skillsData = [
  {
    category: "Frontend",
    description: "Building reactive, high-performance user interfaces and immersive 3D experiences.",
    items: [
      { name: "React.js", level: "Advanced", icon: "Code2", tag: "UI Core" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Sparkles", tag: "Logic" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Layout", tag: "Styling" },
      { name: "Three.js / R3F", level: "Intermediate", icon: "Box", tag: "3D Graphics" },
      { name: "GSAP & Motion", level: "Advanced", icon: "Zap", tag: "Animations" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "Globe", tag: "Foundation" },
    ],
  },
  {
    category: "Backend",
    description: "Architecting resilient RESTful APIs, authentication workflows, and server systems.",
    items: [
      { name: "Node.js", level: "Advanced", icon: "Server", tag: "Runtime" },
      { name: "Express.js", level: "Advanced", icon: "Cpu", tag: "Framework" },
      { name: "RESTful APIs", level: "Advanced", icon: "Network", tag: "Architecture" },
      { name: "JWT Auth & Security", level: "Advanced", icon: "ShieldCheck", tag: "Security" },
      { name: "WebSockets", level: "Intermediate", icon: "Radio", tag: "Real-time" },
      { name: "Middleware Design", level: "Advanced", icon: "Layers", tag: "API Core" },
    ],
  },
  {
    category: "Database",
    description: "Designing schema models, optimized queries, and scalable data persistence layers.",
    items: [
      { name: "MongoDB", level: "Advanced", icon: "Database", tag: "NoSQL" },
      { name: "Mongoose ODM", level: "Advanced", icon: "FileCode", tag: "Data Modeling" },
      { name: "Database Indexing", level: "Intermediate", icon: "HardDrive", tag: "Optimization" },
      { name: "Aggregation Pipelines", level: "Advanced", icon: "GitMerge", tag: "Analytics" },
    ],
  },
  {
    category: "Workflow & Tools",
    description: "Modern developer tooling, version control, testing, and cloud deployment.",
    items: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", tag: "Version Control" },
      { name: "Vite & Tooling", level: "Advanced", icon: "Terminal", tag: "Build Engine" },
      { name: "Postman", level: "Advanced", icon: "Send", tag: "API Testing" },
      { name: "Cloud Deployment", level: "Advanced", icon: "Cloud", tag: "Deployment" },
      { name: "Responsive UI", level: "Expert", icon: "Smartphone", tag: "Cross-Device" },
    ],
  },
];

export const projectsData = [
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    category: "Full Stack MERN E-Commerce",
    image: "/project1.svg",
    description: "A complete modern e-commerce platform with a professional shopping experience, product browsing, cart, checkout, authentication and order management.",
    longDescription: "A complete modern e-commerce platform with a professional shopping experience, product browsing, cart, checkout, authentication and order management. Engineered with the MERN stack featuring scalable RESTful APIs, JWT-secured authentication workflows, dynamic product filtering, cart persistence, and a seamless checkout experience.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST API"
    ],
    gradient: "from-rose-600/25 via-red-900/20 to-transparent",
    borderGlow: "rgba(225, 29, 72, 0.45)",
    highlights: [
      "Product browsing with dynamic category & multi-criteria filtering",
      "Shopping cart state management and secure checkout pipeline",
      "JWT-based user authentication and protected account management",
      "Order tracking workflows and admin inventory management"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "blogging-platform",
    title: "Blogging Platform",
    category: "Full Stack MERN Blogging Website",
    image: "/project2.svg",
    description: "A modern blogging platform where users can explore, create and manage blog content through a clean and responsive interface.",
    longDescription: "A modern blogging platform where users can explore, create and manage blog content through a clean and responsive interface. Features rich text authoring, category taxonomies, user profiles, engagement metrics, and high-performance server-side data fetching.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST API"
    ],
    gradient: "from-red-600/25 via-burgundy-900/20 to-transparent",
    borderGlow: "rgba(244, 63, 94, 0.45)",
    highlights: [
      "Clean, responsive reading interface with modern typography",
      "Content creation and post management with rich formatting",
      "Categorized articles, tag filtering, and fast keyword search",
      "RESTful API architecture with MongoDB persistence"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export const servicesData = [
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    description: "End-to-end web application engineering from database architecture to responsive user interfaces.",
    icon: "Layers",
    points: [
      "Custom React.js frontends with modular components",
      "Node.js & Express.js REST API architectures",
      "MongoDB schema design, modeling, and indexing",
      "Secure authentication & authorization workflows",
    ],
  },
  {
    id: "frontend-ui",
    title: "Frontend Development",
    description: "Translating complex design concepts into pixel-perfect, accessible, and high-performance web interfaces.",
    icon: "Layout",
    points: [
      "React 19, modern hooks, and state management",
      "Tailwind CSS with responsive glassmorphic design",
      "GSAP & Framer Motion micro-interactions",
      "Cross-browser testing & mobile-first development",
    ],
  },
  {
    id: "backend-api",
    title: "Backend Development & REST APIs",
    description: "Building scalable, well-documented, and secure server-side logic and database persistence.",
    icon: "Server",
    points: [
      "Robust API routing with error handling middleware",
      "JWT token validation & password hashing",
      "CRUD operations with input validation & sanitization",
      "Integration with third-party webhooks & services",
    ],
  },
  {
    id: "responsive-web",
    title: "Responsive Web Development",
    description: "Guaranteeing seamless performance, typography scaling, and touch ergonomics on all screens.",
    icon: "Smartphone",
    points: [
      "Fluid scaling from 320px mobile to 4K displays",
      "Touch-friendly gestures & navigation drawers",
      "Core Web Vitals optimization (LCP, CLS, INP)",
      "Zero horizontal overflow & layout shifts",
    ],
  },
  {
    id: "ecommerce-dev",
    title: "E-Commerce Development",
    description: "Architecting custom digital storefronts with catalog filters, shopping carts, and checkout flows.",
    icon: "Box",
    points: [
      "Dynamic catalog browsing and multi-filter queries",
      "Shopping cart state persistence and checkout pipelines",
      "Product management & inventory dashboards",
      "Payment gateway integration architectures",
    ],
  },
  {
    id: "dashboard-dev",
    title: "Interactive UI & Dashboard Development",
    description: "Creating analytical dashboards, real-time metrics, and creative interactive web applications.",
    icon: "Cpu",
    points: [
      "Analytics dashboards with real-time charts",
      "Interactive 3D WebGL scenes & scroll animations",
      "Role-based access control interfaces",
      "Clean architecture with zero technical debt",
    ],
  },
];

export const testimonialsData = [
  {
    id: "testimonial-1",
    name: "Alexander Wright",
    role: "VP of Engineering",
    company: "CloudScale Systems",
    avatar: "AW",
    rating: 5,
    quote: "Abdul delivered our MERN Stack enterprise dashboard ahead of schedule with zero architectural compromises. His mastery of the MERN stack and real-time state management is top-tier.",
  },
  {
    id: "testimonial-2",
    name: "Elena Rostova",
    role: "Lead Creative Director",
    company: "Vanguard Studio",
    avatar: "ER",
    rating: 5,
    quote: "Working with Abdul was transformative. He brought our WebGL and 3D concepts to life with silky smooth 60fps animations and flawless responsive ergonomics.",
  },
  {
    id: "testimonial-3",
    name: "Marcus Chen",
    role: "Founder & CTO",
    company: "Aura Commerce",
    avatar: "MC",
    rating: 5,
    quote: "The multi-vendor e-commerce platform Abdul engineered handled our peak traffic effortlessly. Robust JWT security, clean REST APIs, and blazing fast performance.",
  },
  {
    id: "testimonial-4",
    name: "Sophia Martinez",
    role: "Product Manager",
    company: "Synthetix Labs",
    avatar: "SM",
    rating: 5,
    quote: "Exceptional attention to detail, proactive communication, and high-quality clean code. Abdul is our go-to developer for high-stakes MERN Stack applications.",
  },
];

