export const resumeData = {
  personalInfo: {
    name: "Md Sumon Islam",
    location: "Dhaka, Bangladesh",
    email: "contact@sumonislam.com",
    phone: "+8801751255968",
    title: "| Django, Laravel, FastAPI, Linux, Security",
    titleShort: "Full-Stack Developer",

    links: {
      portfolio: "https://sumonislam.com",
      github: "https://github.com/msicse",
      linkedin: "https://linkedin.com/in/sumonislam-dev",
      resume: "/files/md_sumon_islam.pdf",
    },
  },

  summary:
    "Full-Stack Developer with experience integrating software development, infrastructure management, and security operations. Skilled in Python (Django, FastAPI), PHP (Laravel), and Linux server administration, with hands-on expertise in developing, deploying, and maintaining scalable web applications and secure production environments. Adept at automation, performance optimization, and delivering high-availability solutions aligned with business objectives.",

  skills: {
    languages: ["Python", "PHP", "JavaScript", "SQL"],
    frameworks: [
      "Laravel (Advanced)",
      "Django",
      "FastAPI",
      "React",
      "Inertia.js",
      "Tailwind CSS",
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "Relational Design",
      "Query Optimization",
    ],
    systemAdmin: [
      "Linux (Red Hat/Ubuntu)",
      "Windows Server",
      "VMware vSphere",
      "Apache",
      "Nginx",
      "CI/CD",
    ],
    tools: [
      "Docker",
      "Git",
      "GitHub",
      "Composer",
      "RESTful APIs",
      "Bootstrap",
      "jQuery",
      "LAN Troubleshooting",
    ],
    soft: [
      "Analytical Mindset",
      "Problem Solving",
      "Cross-Team Collaboration",
      "Continuous Learning",
    ],
  },

  coreTechnicalProficiencies: [
    { name: "Python (Django/FastAPI)", value: 90 },
    { name: "PHP/Laravel", value: 88 },
    { name: "Linux Server Admin + Docker", value: 85 },
    { name: "MySQL/PostgreSQL + Query Design", value: 84 },
    { name: "Security Operations (SIEM/Hardening/Patching)", value: 80 },
  ],

  experience: [
    {
      title: "DevOps Engineer",
      company: "RMG Sustainability Council",
      location: "Dhaka, Bangladesh",
      period: "Jun 2020 - Present",
      highlights: [
        "Design, develop, and maintain web applications and APIs using PHP (Laravel), Python (Django, FastAPI), and React.",
        "Build and manage CI/CD pipelines to automate build, testing, and deployment workflows.",
        "Administer and optimize Linux and Windows servers to ensure high availability and performance.",
        "Configure and manage Nginx and Apache web servers, Docker containers, and VMware virtualized infrastructure.",
        "Manage MySQL and PostgreSQL databases including performance tuning, backup, and recovery.",
        "Implement monitoring, logging, security hardening, patch management, and disaster recovery strategies.",
      ],
    },
    {
      title: "Junior IT Officer",
      company: "Stichting Bangladesh Accord Foundation",
      location: "Dhaka, Bangladesh",
      period: "Jul 2017 - May 2020",
      highlights: [
        "Maintained and troubleshot computer hardware, software, and operating systems for daily business operations.",
        "Provided support for network systems and internet services to ensure stable connectivity.",
        "Maintained CCTV, IP cameras, access control systems, conference equipment, UPS, and printers.",
        "Supported scheduled backups for servers and camera systems and ensured software/antivirus updates.",
        "Developed and maintained web applications using Laravel and MySQL.",
      ],
    },
  ],

  projects: [
    {
      title: "News Aggregation",
      technologies: ["Python", "API Integration", "Database", "Scheduler"],
      description:
        "Backend application that fetches news from multiple APIs, stores structured data, and serves it through API endpoints with scheduled updates.",
      github: "https://github.com/msicse/news-aggregator",
      features: [
        "Multi-source ingestion",
        "Automated scheduled updates",
        "Centralized API delivery",
      ],
      tech: ["Python", "REST APIs", "Database", "Cron/Scheduler"],
    },
    {
      title: "Inventory Management System",
      technologies: ["Laravel", "MySQL"],
      description:
        "Laravel-based system for requisition, stock tracking, procurement workflows, vendor management, and reporting.",
      github: "https://github.com/msicse/inventory-management",
      features: [
        "Product requisition",
        "Stock tracking",
        "Vendor management",
        "Role-based access",
      ],
      tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    },
    {
      title: "Visitor Management System",
      technologies: ["Laravel", "MySQL", "JavaScript"],
      description:
        "Web application for visitor registration, image capture, check-in/check-out tracking, and host notifications.",
      features: ["Visitor registration", "Check-in/out tracking", "Reporting"],
      tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
      github: "https://github.com/msicse/visitor-management",
    },
    {
      title: "Project Management System",
      technologies: ["Laravel", "React", "Inertia.js", "MySQL"],
      description:
        "Project and task tracking platform built with Laravel 11, Inertia.js, and React for monitoring progress and workflows.",
      features: ["Task tracking", "Progress monitoring", "Role-aware access"],
      tech: ["Laravel 11", "Inertia.js", "React", "MySQL", "Tailwind CSS"],
      github: "https://github.com/msicse/project-management",
    },
    {
      title: "Online Admission System",
      technologies: ["Laravel", "MySQL", "PHP"],
      description:
        "University admission system enabling student registration, online application, result publishing, and admin management.",
      tech: ["Laravel 5.7", "MySQL", "PHP", "Bootstrap"],
      github: "https://github.com/msicse/online-admission",
      features: [
        "Student sign-up/login",
        "Application workflow",
        "Admin panel",
      ],
    },
    {
      title: "Public Blog System",
      technologies: ["Laravel", "MySQL", "PHP"],
      description:
        "Public blog platform with user authentication, post management, and commenting features.",
      tech: ["Laravel 5.6", "MySQL", "PHP", "Bootstrap"],
      github: "https://github.com/msicse/blog",
      features: ["User authentication", "Post CRUD", "Comment system"],
    },
  ],

  education: [
    {
      degree: "BSc in CSE",
      institution: "European University of Bangladesh, Dhaka",
      year: "2019",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Rajshahi Polytechnic Institute, Rajshahi",
      year: "2015",
    },
    {
      degree: "SSC",
      institution: "Rahabal High School, Bogura",
      year: "2010",
    },
  ],

  certifications: [
    {
      title: "Workshop: Job Hunt Like a Hacker - 2026 Edition",
      provider: "Antisyphon Training (Powered by BHIS)",
      year: "2026",
    },
    {
      title: "Blue Team Junior Analyst",
      provider: "Security Blue Team",
      year: "2025",
    },
    {
      title: "VMware vSphere: Install, Configure, Manage [V8]",
      provider: "CSL Training",
      year: "2025",
    },
    {
      title: "Splunk: A SIEM Tool",
      provider: "Thinkcloudly",
      year: "2025",
    },
    {
      title: "Practical Help Desk",
      provider: "TCM Security",
      year: "2025",
    },
    {
      title: "Practical Security Fundamentals",
      provider: "TCM Security",
      year: "2025",
    },
    {
      title: "Crash Course on Python",
      provider: "Google (via Coursera)",
      year: "2024",
    },
    {
      title: "Fundamentals of Red Hat Enterprise Linux",
      provider: "Red Hat (via Coursera)",
      year: "2024",
    },
    {
      title: "Human Rights & Environmental Due Diligence (HREDD)",
      provider: "GIZ GmbH",
      year: "2024",
    },
    {
      title: "Professional English Communication Skills",
      provider: "WSDA New Zealand",
      year: "2023",
    },
    {
      title: "Server Administration (Including Windows Server Management)",
      provider: "UY LAB (supported by SEIP)",
      year: "2023",
    },
    {
      title: "Smart Emailing for Successful Correspondence",
      provider: "Bdjobs.com Ltd.",
      year: "2022",
    },
    {
      title: "Become a HTML & CSS Developer - Build a Responsive Site",
      provider: "Udemy",
      year: "2021",
    },
  ],

  strengths: [
    {
      title: "Full-Stack + DevOps Delivery",
      description:
        "Builds and runs production web applications end-to-end, from API design to deployment and support.",
    },
    {
      title: "Infrastructure & Reliability",
      description:
        "Manages Linux and Windows servers, virtualization, web servers, and operational uptime practices.",
    },
    {
      title: "Security Mindset",
      description:
        "Applies SIEM, hardening, patching, and vulnerability management to secure production environments.",
    },
    {
      title: "Business-Aligned Problem Solving",
      description:
        "Focuses on scalable, secure, and maintainable solutions that improve operational efficiency.",
    },
  ],
};
