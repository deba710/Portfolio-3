import { PortfolioData } from '../types/portfolio';

/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * You can easily edit all your personal information, projects, skills, 
 * education, certificates, and contact links right here in this single file!
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: "Debangan",
    greeting: "Hi, I'm Debangan",
    role: "Student / Aspiring Software Developer",
    headline: "Aspiring Developer & Creative Problem Solver",
    location: "West Bengal, India",
    availabilityStatus: "Open for Opportunities & Collaborations",
    email: "debangan2007@gmail.com",
    github: "https://github.com/debangan-dev",
    linkedin: "https://linkedin.com/in/debangan-dev",
    resumeUrl: "#contact", // Can be linked to a PDF resume
    aboutBio: [
      "I am a passionate student deeply interested in programming, web development, and modern technology.",
      "I enjoy learning new technologies, building hands-on projects, and continuously improving my coding and problem-solving skills.",
      "With a strong foundation in Java, modern JavaScript, and React, I love translating creative ideas into responsive, accessible, and high-performance digital experiences."
    ],
  },

  interests: [
    {
      name: "Java",
      icon: "Coffee",
      description: "Object-oriented programming, data structures, and backend concepts."
    },
    {
      name: "Web Development",
      icon: "Globe",
      description: "Creating modern, responsive, and intuitive web applications."
    },
    {
      name: "Programming",
      icon: "Code2",
      description: "Algorithmic thinking, problem-solving, and clean code architecture."
    },
    {
      name: "UI Design",
      icon: "Palette",
      description: "Designing sleek interfaces, typography pairings, and micro-interactions."
    },
    {
      name: "Technology",
      icon: "Cpu",
      description: "Exploring software ecosystems, developer tooling, and modern tech trends."
    },
    {
      name: "Learning New Tech",
      icon: "Sparkles",
      description: "Continuously adopting new frameworks, libraries, and best practices."
    }
  ],

  stats: [
    {
      id: "projects",
      label: "Projects & Builds",
      value: "15+",
      numericValue: 15,
      suffix: "+",
      description: "Hands-on projects completed & deployed"
    },
    {
      id: "technologies",
      label: "Technologies",
      value: "8+",
      numericValue: 8,
      suffix: "+",
      description: "Languages, libraries & core developer tools"
    },
    {
      id: "learning",
      label: "Learning & Practice",
      value: "500+",
      numericValue: 500,
      suffix: "+ hrs",
      description: "Dedicated hours of coding & study"
    },
    {
      id: "dedication",
      label: "Commitment",
      value: "100%",
      numericValue: 100,
      suffix: "%",
      description: "Passion for learning & writing clean code"
    }
  ],

  skills: [
    {
      name: "Java",
      category: "languages",
      proficiency: 82,
      level: "Intermediate",
      iconName: "Coffee",
      color: "#f59e0b",
      description: "Core Java, OOP principles, collections framework, and algorithmic problem solving."
    },
    {
      name: "JavaScript (ES6+)",
      category: "languages",
      proficiency: 85,
      level: "Proficient",
      iconName: "FileCode",
      color: "#eab308",
      description: "Modern JavaScript, asynchronous programming, DOM manipulation, and ES modules."
    },
    {
      name: "React",
      category: "frontend",
      proficiency: 80,
      level: "Intermediate",
      iconName: "Atom",
      color: "#06b6d4",
      description: "Functional components, custom hooks, state management, and modern component architecture."
    },
    {
      name: "HTML5",
      category: "frontend",
      proficiency: 92,
      level: "Advanced",
      iconName: "FileCode2",
      color: "#f97316",
      description: "Semantic markup, web accessibility (a11y), SEO optimization, and clean page structuring."
    },
    {
      name: "CSS3",
      category: "frontend",
      proficiency: 88,
      level: "Advanced",
      iconName: "Layout",
      color: "#3b82f6",
      description: "Flexbox, CSS Grid, custom properties, animations, and modern responsive layouts."
    },
    {
      name: "Responsive Web Design",
      category: "frontend",
      proficiency: 90,
      level: "Advanced",
      iconName: "Smartphone",
      color: "#10b981",
      description: "Mobile-first layouts, fluid media queries, touch-friendly UI, and cross-browser support."
    },
    {
      name: "Git",
      category: "tools",
      proficiency: 78,
      level: "Intermediate",
      iconName: "GitBranch",
      color: "#ef4444",
      description: "Version control, branching workflows, commits, merging, and repository management."
    },
    {
      name: "GitHub",
      category: "tools",
      proficiency: 82,
      level: "Intermediate",
      iconName: "Github",
      color: "#8b5cf6",
      description: "Remote code hosting, pull requests, collaboration, GitHub Pages, and issue tracking."
    }
  ],

  projects: [
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      subtitle: "Flagship Developer Portfolio",
      description: "A modern, high-performance responsive personal portfolio website built to showcase projects, skills, education, and credentials with smooth animations and dark aesthetics.",
      fullDescription: "A crafted personal developer portfolio engineered with React, TypeScript, and modern styling. Features interactive project showcases, skill radar bars, responsive navigation, contact utilities with clipboard integration, and accessible dark theme styling.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      category: "web",
      featured: true,
      githubUrl: "https://github.com/debangan-dev/portfolio-website",
      liveUrl: "#",
      highlights: [
        "Fully responsive layout across mobile, tablet, and ultra-wide screens",
        "Dark developer theme with subtle ambient glowing effects",
        "Single configuration file for effortless updates and maintenance",
        "Smooth section transitions and accessible keyboard navigation"
      ],
      visualStyle: {
        accentColor: "cyan",
        gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
        tagline: "React + TypeScript + Tailwind",
        codeSnippet: `// Debangan's Portfolio
export const developer = {
  name: "Debangan",
  focus: ["Java", "React", "Web Dev"],
  status: "Ready to build impactful projects"
};`
      }
    },
    {
      id: "java-projects",
      title: "Java Projects & Algorithms",
      subtitle: "Core Programming & Data Structures",
      description: "A curated collection of Java programming projects and utility applications created while mastering object-oriented design and algorithm fundamentals.",
      fullDescription: "A collection of practical Java applications and algorithmic exercises. Includes console-based management systems, object-oriented simulations, data structure implementations, and mathematical problem-solving modules.",
      technologies: ["Java", "OOP", "Data Structures", "Algorithms"],
      category: "java",
      featured: true,
      githubUrl: "https://github.com/debangan-dev/java-projects-collection",
      liveUrl: "https://github.com/debangan-dev/java-projects-collection",
      highlights: [
        "Object-Oriented Programming (Encapsulation, Inheritance, Polymorphism)",
        "Collections framework implementations (Lists, Sets, Maps)",
        "Console UI utilities with robust exception handling and input validation",
        "Well-documented code structure with modular classes"
      ],
      visualStyle: {
        accentColor: "amber",
        gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
        tagline: "Java OOP & Problem Solving",
        codeSnippet: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        Developer debangan = new Developer("Java");
        debangan.solveProblems();
    }
}`
      }
    },
    {
      id: "web-projects",
      title: "Creative Web Projects Suite",
      subtitle: "Interactive Frontend Experiments",
      description: "Experimental and creative web development projects showcasing interactive DOM manipulation, responsive UI components, and utility web tools.",
      fullDescription: "A dynamic showcase of creative web mini-applications including interactive calculators, task management tools, dynamic landing pages, and interactive CSS experiment canvases built with HTML, CSS, and modern JavaScript.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "DOM API"],
      category: "web",
      featured: true,
      githubUrl: "https://github.com/debangan-dev/web-experiments",
      liveUrl: "#",
      highlights: [
        "Clean, semantic HTML markup and modern CSS styling",
        "Pure JavaScript DOM manipulation and event-driven interactivity",
        "Responsive design supporting fluid screen sizes",
        "Lightweight, dependency-free performant client-side scripts"
      ],
      visualStyle: {
        accentColor: "emerald",
        gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
        tagline: "Interactive HTML / CSS / JS",
        codeSnippet: `const interactiveApp = {
  init() {
    this.bindEvents();
    this.renderUI();
  }
};`
      }
    }
  ],

  education: [
    {
      id: "undergraduate",
      degree: "Bachelor of Technology / Computer Science & Engineering",
      field: "Computer Science / Information Technology",
      institution: "College / University (Placeholder - Editable)",
      location: "West Bengal, India",
      period: "2024 — Present",
      status: "In Progress",
      grade: "Academic Excellence",
      highlights: [
        "Focus on Core Computer Science: Programming in Java, Data Structures, and Algorithms",
        "Hands-on coursework in Web Technologies, Software Engineering, and Database Concepts",
        "Active member of student coding communities and tech exploration groups"
      ]
    },
    {
      id: "higher-secondary",
      degree: "Higher Secondary Education (10+2)",
      field: "Science Stream (Physics, Chemistry, Mathematics & Computer Science)",
      institution: "Higher Secondary School (Placeholder - Editable)",
      location: "West Bengal, India",
      period: "Completed",
      status: "Completed",
      highlights: [
        "Strong foundation in Mathematics, Analytical Reasoning, and Science",
        "Initiated programming journey with fundamental problem solving and basic algorithms"
      ]
    }
  ],

  certificates: [
    {
      id: "cert-java",
      title: "Java Programming Fundamentals",
      issuer: "Online Learning Platform / Academic Institution",
      issueDate: "2024",
      credentialId: "JAVA-DEV-2024-01",
      credentialUrl: "#",
      skills: ["Java", "OOP", "Data Structures", "Exception Handling"],
      status: "Verified Credential",
      iconColor: "#f59e0b"
    },
    {
      id: "cert-web-dev",
      title: "Modern Frontend Web Development",
      issuer: "Web Development Course / Academy",
      issueDate: "2024",
      credentialId: "WEB-DEV-2024-02",
      credentialUrl: "#",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
      status: "Verified Credential",
      iconColor: "#06b6d4"
    },
    {
      id: "cert-git-github",
      title: "Version Control with Git & GitHub",
      issuer: "Developer Training / Open Source Academy",
      issueDate: "2024",
      credentialId: "GIT-VCS-2024-03",
      credentialUrl: "#",
      skills: ["Git", "GitHub", "Branching", "Collaborative Workflows"],
      status: "Verified Credential",
      iconColor: "#8b5cf6"
    }
  ]
};
