import { PortfolioData } from '../types/portfolio';

/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Easily edit all your personal information, projects, skills, 
 * education, and contact links right here in this single file!
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: "Debangan",
    taglineLabel: "STUDENT • BEGINNER PROGRAMMER",
    greeting: "Hi, I'm Debangan.",
    role: "Student • Beginner Programmer • Aspiring Developer",
    headline: "Learning. Building. Becoming a Developer.",
    location: "West Bengal, India",
    availabilityStatus: "Learning & Open to Collaborate",
    heroPhotoUrl: "/images/debangan-1.jpg",
    aboutPhotoUrl: "/images/debangan-1.jpg",
    aboutBio: [
      "I am a student who is currently learning programming and exploring software development.",
      "I enjoy building small projects, learning new concepts and improving my coding skills step by step.",
      "I am at the beginning of my developer journey and want the portfolio to show growth, curiosity and real work rather than pretending to be an experienced professional."
    ],
    email: "debangan2007@gmail.com",
    github: "https://github.com/debangan-dev",
    linkedin: "https://linkedin.com/in/debangan-dev",
    resumeUrl: "#contact",
  },

  learningValues: [
    {
      title: "Core Fundamentals",
      icon: "Code2",
      description: "Mastering the foundational principles of programming, logical thinking, and clean syntax."
    },
    {
      title: "Java & OOP",
      icon: "Coffee",
      description: "Building strong object-oriented programming concepts, classes, and algorithmic problem solving."
    },
    {
      title: "Step-by-Step Practice",
      icon: "Sparkles",
      description: "Writing code daily, testing small ideas, and turning theoretical knowledge into real working programs."
    },
    {
      title: "Version Control",
      icon: "GitBranch",
      description: "Learning Git and GitHub workflows to maintain code history and track learning progress."
    }
  ],

  honestPillars: [
    {
      id: "projects-count",
      title: "2+ Completed Projects",
      subtitle: "Hands-on Builds",
      description: "Small, authentic projects built from scratch to practice coding concepts.",
      iconName: "FolderGit2",
      tag: "Real Work"
    },
    {
      id: "main-language",
      title: "1 Main Language (Java)",
      subtitle: "Core Focus",
      description: "Dedicated to mastering Java fundamentals and object-oriented programming.",
      iconName: "Coffee",
      tag: "Focus"
    },
    {
      id: "learning-mindset",
      title: "Always Learning",
      subtitle: "Growth Mindset",
      description: "Constantly learning new concepts and improving coding skills every day.",
      iconName: "BookOpen",
      tag: "Dedication"
    },
    {
      id: "journey-stage",
      title: "Curiosity Driven",
      subtitle: "Aspiring Developer",
      description: "Exploring the software world with passion, discipline, and honest curiosity.",
      iconName: "Sparkles",
      tag: "Journey"
    }
  ],

  skills: [
    {
      name: "Java",
      category: "core",
      status: "Main Focus",
      iconName: "Coffee",
      color: "#f59e0b",
      description: "Core Java programming, Object-Oriented concepts (OOP), classes, objects, and modular methods.",
      topics: [
        "Object-Oriented Programming (OOP)",
        "Classes, Objects & Methods",
        "Control Flow (If-Else & Loops)",
        "Basic Data Structures & Arrays",
        "Exception Handling Basics",
        "Input / Output & Console UI"
      ]
    },
    {
      name: "Programming Fundamentals",
      category: "fundamentals",
      status: "Foundational",
      iconName: "Terminal",
      color: "#3b82f6",
      description: "Core computer science fundamentals, algorithm logic, step-by-step problem decomposition, and dry runs.",
      topics: [
        "Variables & Data Types",
        "Conditional Logic & Branching",
        "Loops & Iterative Logic",
        "Modular Functions & Scope",
        "Code Tracing & Debugging",
        "Clean Variable Naming"
      ]
    },
    {
      name: "Problem Solving",
      category: "fundamentals",
      status: "Active Practice",
      iconName: "BrainCircuit",
      color: "#10b981",
      description: "Solving logical coding questions, array manipulations, pattern problems, and mathematical algorithms.",
      topics: [
        "Array Traversals & Searches",
        "Number & Math Logic Puzzles",
        "Pattern Printing Programs",
        "String Manipulation Basics",
        "Algorithm Optimization Practice"
      ]
    },
    {
      name: "Git & GitHub",
      category: "tools",
      status: "Version Control",
      iconName: "GitBranch",
      color: "#8b5cf6",
      description: "Using Git for local version control and GitHub for storing repositories, tracking commits, and sharing code.",
      topics: [
        "git init, add & commit",
        "git push & pull",
        "GitHub Repositories",
        "Commit History Tracking",
        "README & Documentation"
      ]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "[PROJECT 1 NAME]",
      subtitle: "Java Application",
      description: "[PROJECT 1 DESCRIPTION] — A completed core Java project built to practice object-oriented programming, class structure, and logic.",
      fullDescription: "A completed Java application developed as part of hands-on programming practice. Demonstrates object-oriented programming principles, modular code organization, and user interaction handling. Easily replace this description with your actual project details.",
      technologies: ["Java"],
      status: "Completed",
      featured: true,
      githubUrl: "https://github.com/debangan-dev/[project-1-repo]",
      liveUrl: undefined,
      imageUrl: "/images/debangan-1.jpg",
      highlights: [
        "Built using Core Java with Object-Oriented design principles",
        "Features structured modular methods and user input validation",
        "Console interface with clear error handling and menus",
        "Fully editable placeholder ready for your real project details"
      ],
      visualStyle: {
        accentColor: "amber",
        gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
        tagline: "Core Java • Object-Oriented Design",
        codeSnippet: `// Project 1: Java Application
public class ProjectOne {
    public static void main(String[] args) {
        System.out.println("Running [PROJECT 1 NAME]...");
        // Core application logic
    }
}`
      }
    },
    {
      id: "project-2",
      title: "[PROJECT 2 NAME]",
      subtitle: "Java Problem Solving & Utilities",
      description: "[PROJECT 2 DESCRIPTION] — A completed Java program focusing on algorithms, conditional flow, and data management.",
      fullDescription: "A completed Java utility program created to strengthen algorithmic problem-solving skills, array manipulation, and step-by-step logic. Easily replace this description with your actual project details.",
      technologies: ["Java"],
      status: "Completed",
      featured: true,
      githubUrl: "https://github.com/debangan-dev/[project-2-repo]",
      liveUrl: undefined,
      imageUrl: "/images/debangan-2.jpg",
      highlights: [
        "Implemented algorithm logic and iterative calculations in Java",
        "Structured data management with arrays and conditional branching",
        "Focused on readable code, descriptive names, and comments",
        "Fully editable placeholder ready for your real project details"
      ],
      visualStyle: {
        accentColor: "blue",
        gradient: "from-blue-500/20 via-indigo-600/10 to-transparent",
        tagline: "Core Java • Algorithms & Logic",
        codeSnippet: `// Project 2: Algorithm & Utility
public class ProjectTwo {
    public static void processData() {
        // Problem solving and calculation logic
    }
}`
      }
    },
    {
      id: "project-3",
      title: "[PROJECT 3 NAME]",
      subtitle: "Practice & Exploration Project",
      description: "[PROJECT 3 DESCRIPTION] — An optional Java project currently in progress or recently completed to practice new concepts.",
      fullDescription: "An ongoing or completed Java project exploring new programming concepts, data structure practice, or utility features. Easily replace this description with your actual project details.",
      technologies: ["Java"],
      status: "Ongoing",
      featured: true,
      githubUrl: "https://github.com/debangan-dev/[project-3-repo]",
      liveUrl: undefined,
      highlights: [
        "Hands-on experimentation with new Java language features",
        "Step-by-step development and continuous code improvements",
        "Clean documentation and version-controlled on GitHub",
        "Optional project slot for your third project"
      ],
      visualStyle: {
        accentColor: "emerald",
        gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
        tagline: "Java • Active Learning & Practice",
        codeSnippet: `// Project 3: Practice & Exploration
public class ProjectThree {
    // Continuous learning in progress
}`
      }
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "[Course / Stream]",
      field: "[Field of Study / Computer Science]",
      institution: "[School / College Name]",
      location: "West Bengal, India",
      period: "[Year / e.g. 2024 — Present]",
      status: "In Progress",
      highlights: [
        "[Additional Details: Learning Programming in Java and Computer Fundamentals]",
        "[Additional Details: Practicing problem solving and analytical thinking]",
        "[Additional Details: Easily edit this section with your school/college info]"
      ]
    },
    {
      id: "edu-2",
      degree: "[Previous School / Course Name]",
      field: "[Stream / Subject Group]",
      institution: "[School / Institution Name]",
      location: "West Bengal, India",
      period: "[Year / e.g. Completed]",
      status: "Completed",
      highlights: [
        "[Additional Details: Foundational academic milestones]",
        "[Additional Details: Mathematics, science, and analytical reasoning]",
        "[Additional Details: Easily edit this section with your school info]"
      ]
    }
  ],

  certificates: [
    // Leave empty or add verified certificates when completed.
    // The Certificates component will display an honest notice:
    // "Certificates will be added as I continue learning."
  ]
};

