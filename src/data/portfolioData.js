// Centralized Portfolio Data
// This file contains all the data used across the portfolio components

export const personalInfo = {
  name: "Malipireddy Avinash",
  title: "Software Developer",
  description: "Motivated Java developer with strong OOP and software development skills, eager to contribute in collaborative team environments.",
  contact: {
    phone: "8978326207 ",
    email: "avinashece.2025@gmail.com"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/veera-venkata-avinash-malipireddy-0aa34026b/",
    github: "https://github.com/Avinash-M2003",
    portfolio: "https://portfolio-two-blond-ziw6ajubod.vercel.app/"
  },
  profileImage: "/profile-photo.jpeg"
};

export const education = {
  title: 'Education',
  icon: '🎓',
  items: [
    {
      degree: "Bachelor of Electronics and Communication Engineering",
      institution: "Krishna University College of Engineering and Technology",
      location: "Machilipatnam",
      date: "04/2024",
      description: "Specialized in Electronics and Communication Engineering with focus on software development and programming"
    }
  ]
};

export const skills = {
  title: 'Technical Skills',
  icon: '💻',
  categories: [
    {
      title: "Programming Languages",
      color: "blue",
      items: ["Java", "JavaScript", "TypeScript", "Python", "C"]
    },
    {
      title: "Web Technologies",
      color: "cyan",
      items: ["React JS", "Next JS", "Express.js", "HTML5/CSS3", "Bootstrap"]
    },
    {
      title: "Technology Stacks",
      color: "green",
      items: ["T3 Stack", "MERN Stack", "PERN Stack", "Java Stack"]
    },
    {
      title: "Cloud & Databases",
      color: "purple",
      items: ["AWS", "Azure", "MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Frameworks & Tools",
      color: "orange",
      items: ["Spring Boot", "Hibernate", "Docker", "Kubernetes", "Git"]
    },
    {
      title: "Development Tools",
      color: "red",
      items: ["VS Code", "IntelliJ", "Cursor", "Postman", "Maven"]
    }
  ]
};

export const experience = {
  title: 'Work Experience',
  icon: '💼',
  items: [
    {
      position: "Entry-Level Developer",
      company: "Software Development",
      duration: "Recent",
      description: "Collaborated with cross-functional teams during innovation, bootstrapping, pilot, and production phases",
      responsibilities: [
        "Collaborated with cross-functional teams during innovation, bootstrapping, pilot, and production phases",
        "Worked with tools across the full software delivery lifecycle, including IDEs, source control, CI tools, defect management, and analytics",
        "Contributed to microservices development and RESTful API creation with test-driven development",
        "Developed scalable software designs with high-quality performance and accuracy"
      ]
    }
  ]
};

export const certifications = {
  title: 'Certifications',
  icon: '🏆',
  items: [
    {
      name: "Full Stack Java Developer",
      description: "Comprehensive training in Java development and full-stack technologies",
      provider: "Excelr"
    },
    {
      name: "Web Frontend Development",
      description: "Advanced frontend development skills and modern web technologies",
      provider: "Krify Software Technologies Private Limited"
    },
    {
      name: "Python Programming",
      description: "Python development and programming fundamentals",
      provider: "Pantech E Learning"
    },
    {
      name: "C Language Programming",
      description: "C programming fundamentals and system programming",
      provider: "99 Computers"
    }
  ]
};

export const projects = {
  title: 'Projects',
  icon: '🚀',
  items: [
    {
      name: "Trunkie EduTech Platform",
      description: "A comprehensive educational technology platform built with modern full-stack technologies",
      technologies: ["TypeScript", "Next JS", "tRPC", "BetterAuth", "Drizzle ORM", "Bun"],
      features: [
        "Developed full-stack monorepo architecture using Turborepo",
        "Implemented modular authentication flows with protected routes",
        "Built reusable UI components and custom React hooks",
        "Integrated Drizzle ORM for type-safe database interactions"
      ],
      links: {
        live: "#",
        github: "#"
      },
      image: "/project1.jpg"
    },
    {
      name: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with secure backend and responsive frontend",
      technologies: ["Spring Boot", "React", "Tailwind CSS"],
      features: [
        "Developed secure backend with Spring Boot for product browsing and order tracking",
        "Implemented shopping cart and order processing with transaction management",
        "Integrated RESTful services for seamless data exchange",
        "Designed responsive UI with React Router for smooth navigation"
      ],
      links: {
        live: "#",
        github: "#"
      },
      image: "/project2.jpg"
    },
    {
      name: "Hotel Management System",
      description: "Java & Spring Boot application for hotel bookings, billing, and room management.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      features: [
        "Room booking management",
        "Customer billing",
        "Admin dashboard"
      ],
      links: {
        live: "#",
        github: "#"
      },
      image: "/project3.jpg"
    },
    {
      name: "Task Management App",
      description: "Modern task management application with real-time collaboration.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      features: [
        "Real-time updates",
        "Team collaboration",
        "Advanced filtering"
      ],
      links: {
        live: "#",
        github: "#"
      },
      image: "/project4.jpg"
    },
    {
      name: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
      features: [
        "Real-time data",
        "Interactive charts",
        "Location forecasts"
      ],
      links: {
        live: "#",
        github: "#"
      },
      image: "/project5.jpg"
    },
    {
      name: "Social Media Analytics",
      description: "Analytics platform for social media metrics tracking, engagement analysis, and content performance insights.",
      technologies: ["Python", "Django", "PostgreSQL", "Chart.js", "Bootstrap"],
      features: [
        "Social media metrics tracking and analysis",
        "Engagement rate calculations and insights",
        "Content performance analytics dashboard"
      ],
      links: {
        live: "#",
        github: "#"
      },
      image: "/project6.avif"
    }
  ]
};

// Animation configurations
export const animations = {
  sections: [
    'animate__bounceInLeft',
    'animate__fadeInRight', 
    'animate__fadeInTopRight',
    'animate__flip',
    'animate__zoomInDown'
  ],
  hero: {
    profile: 'animate__fadeInLeft',
    name: 'animate__bounceInLeft',
    title: 'animate__fadeInRight',
    description: 'animate__fadeInTopRight',
    contact: 'animate__zoomInDown'
  }
};

// Color configurations for skill categories
export const skillColors = {
  blue: {
    bg: "bg-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400"
  },
  cyan: {
    bg: "bg-cyan-500/20",
    border: "border-cyan-500/30",
    text: "text-cyan-400"
  },
  green: {
    bg: "bg-green-500/20",
    border: "border-green-500/30",
    text: "text-green-400"
  },
  purple: {
    bg: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400"
  },
  orange: {
    bg: "bg-orange-500/20",
    border: "border-orange-500/30",
    text: "text-orange-400"
  },
  red: {
    bg: "bg-red-500/20",
    border: "border-red-500/30",
    text: "text-red-400"
  }
};
