// Centralized Portfolio Data
// This file contains all the data used across the portfolio components

export const personalInfo = {
  name: "Hrudaya Ragini L",
  title: "Software Developer",
  description: "Motivated Java developer with strong OOP and software development skills, eager to contribute in collaborative team environments",
  contact: {
    phone: "+91-9381360833",
    email: "hrudayaragini2000@gmail.com",
    location: "Hyderabad"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/lam-hrudaya-ragini-8878a3251/",
    github: "https://github.com/HrudayaRagini/",
    portfolio: "https://portfolio-two-blond-ziw6ajubod.vercel.app/"
  },
  profileImage: "/profile-photo.jpeg"
};

export const education = {
  title: 'Education',
  icon: '🎓',
  items: [
    {
      degree: "Masters, MSc, Computer Science",
      institution: "RBVRR WOMEN'S COLLEGE",
      location: "Hyderabad",
      date: "Jun 2021 — Jul 2023",
      description: "GPA: 9.7 - Advanced studies in Computer Science with focus on machine learning and software development"
    },
    {
      degree: "Bachelor's, Computer Science",
      institution: "Avanthi degrees and PG college",
      location: "Hyderabad",
      date: "Jun 2018 — Apr 2021",
      description: "GPA: 9.1 - Comprehensive foundation in computer science and programming"
    }
  ]
};

export const skills = {
  title: 'Technical Skills',
  icon: '💻',
  categories: [
    {
      title: "Web Development",
      color: "blue",
      items: ["HTML", "CSS", "Node.js", "JavaScript", "React.js", "Website Builder", "RESTful APIs"]
    },
    {
      title: "Technical Skills",
      color: "cyan",
      items: ["MySQL", "Basics of DevOps", "Software Development", "SDLC Methodologies", "DBMS"]
    },
    {
      title: "Office Productivity",
      color: "green",
      items: ["Word", "PowerPoint", "Microsoft Excel", "Documentation", "Reporting Technologies"]
    },
    {
      title: "Project Support",
      color: "purple",
      items: ["Time Management", "Organizational Skills", "Multi-tasking", "Process Improvement"]
    },
    {
      title: "Communication",
      color: "orange",
      items: ["Verbal & Written Communication", "Presentational Skills", "Soft Skills", "Team Collaboration"]
    },
    {
      title: "Analytical & Interpersonal",
      color: "red",
      items: ["Research & Analytical Skills", "Problem Solving", "Collaboration", "Adaptability", "Decision Making", "Leadership Skills"]
    }
  ]
};

export const experience = {
  title: 'Work Experience',
  icon: '💼',
  items: [
    {
      position: "Executive - Data Researcher",
      company: "International Educational Gateway Pvt Ltd",
      location: "Hyderabad, India",
      duration: "Apr 2024 — Mar 2025",
      description: "As an Executive Frontend Developer at International Educational Gateway Private Limited, I played a key role in the research, development, and enhancement of the Alumni Management System.",
      responsibilities: [
        "Conducted in-depth data research and implemented backend updates to optimize system performance and storage on AWS",
        "Received comprehensive training as a Frontend Developer, further strengthening technical skill set",
        "Played a key role in the research, development, and enhancement of the Alumni Management System",
        "Applied both technical and soft skills to deliver effective, user-focused solutions"
      ]
    }
  ]
};

export const certifications = {
  title: 'Certifications',
  icon: '🏆',
  items: [
    {
      name: "Java Full-Stack Developer",
      description: "Comprehensive training in Java development and full-stack technologies",
      provider: "ExcelR",
      date: "May 2024"
    },
    {
      name: "Full Stack Developer",
      description: "Advanced full-stack development skills and modern web technologies",
      provider: "Ai Varient",
      date: "Sep 2024"
    }
  ]
};

export const projects = {
  title: 'Projects',
  icon: '🚀',
  items: [
    {
      name: "Smart Farming CASE-STUDY",
      description: "This project aims to enhance the agricultural sector by applying Machine Learning and Deep Learning techniques, providing farmers with data-driven insights to support better crop selection and improved yield.",
      technologies: ["Machine Learning", "Deep Learning", "Python", "Data Analysis"],
      features: [
        "Crop yield prediction using machine learning algorithms",
        "Data-driven insights for better crop selection",
        "Agricultural productivity forecasting",
        "Farmer decision support system"
      ],
      links: {
        live: "#",
        github: "#"
      },
      image: "/project1.jpg",
      duration: "Mar 2023 — May 2023",
      organization: "RBVRR (Major Project)"
    },
    {
      name: "Online Hotel Management System & Insurance",
      description: "Developed an online Hotel Management System using React.js, focused on creating a user-friendly interface for efficiently managing hotel details, bookings, and associated data.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS"],
      features: [
        "User-friendly interface for hotel management",
        "Efficient hotel details and booking management",
        "Insurance integration features",
        "Responsive design for multiple devices"
      ],
      links: {
        live: "#",
        github: "#"
      },
      image: "/project2.jpg",
      duration: "Apr 2024 — Jun 2024",
      organization: "ExcelR"
    },
    {
      name: "Todo List",
      description: "The primary purpose of a to-do list is to help you remember tasks, manage time efficiently, and reduce stress by organizing and prioritizing responsibilities.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      features: [
        "Task management and organization",
        "Time management and efficiency tools",
        "Priority-based task sorting",
        "Stress reduction through organization"
      ],
      links: {
        live: "#",
        github: "#"
      },
      image: "/project3.jpg",
      duration: "Aug 2024 — Oct 2024",
      organization: "Univariety"
    },
    {
      name: "Weather Forecast App",
      description: "Our weather app, built with React and JavaScript, offers a dynamic and user-friendly platform for accessing real-time weather forecasts.",
      technologies: ["React", "JavaScript", "Weather API", "HTML", "CSS"],
      features: [
        "Real-time weather data",
        "Dynamic and user-friendly interface",
        "Location-based weather forecasts",
        "Interactive weather display"
      ],
      links: {
        live: "#",
        github: "#"
      },
      image: "/project4.jpg",
      duration: "Nov 2024 — Nov 2024",
      organization: "Ai Varient"
    }
  ]
};

export const awards = {
  title: 'Awards',
  icon: '🏅',
  items: [
    {
      name: "Best Presentation Award",
      organization: "Mala Reddy Institute of Engineering and Technology",
      date: "Jun 2023",
      description: "Paper Presentation on Crop yield prediction using machine learning (ML) involves leveraging algorithms to forecast agricultural productivity, helping farmers and stakeholders make informed decisions."
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
