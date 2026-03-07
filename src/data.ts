export const PERSONAL_INFO = {
  name: "Dharmendra Pradhan",
  title: "Physics Honours Student | Rank 1 | Tech Enthusiast & Developer",
  email: "dharmendra.p2023bph@srisriuniversity.edu.in",
  phone: "+91-8917390336",
  linkedin: "https://www.linkedin.com/in/dharmendrapradhan2026",
  github: "https://github.com/Dharmendra-05",
  youtube: "#", // Placeholder
  about: "I am a 6th-semester B.Sc. Physics Honours student at Sri Sri University, currently holding the Rank 1 position in my class. My passion lies at the intersection of the physical sciences, software development, and hardware prototyping. Whether I am analyzing gamma-ray spectroscopy data or configuring a Linux virtual machine, I love building systems that solve complex problems.",
};

export const EDUCATION = [
  {
    degree: "B.Sc. (Hons.) Physics",
    institution: "Sri Sri University",
    period: "2023 - 2026",
    details: [
      "Current CGPA: 8.47 / 10.0",
      "Rank: 1st in Class (6th Semester)"
    ]
  }
];

export const EXPERIENCE = [
  {
    role: "Research Intern",
    company: "Variable Energy Cyclotron Centre (VECC), Kolkata",
    period: "May 2025 - July 2025",
    description: "Project: Characterisation of Detectors for Gamma-Ray Spectroscopy",
    achievements: [
      "Analyzed the nuclear energy level structure of Indium-116 using thermal neutron capture data.",
      "Automated the energy calibration of HPGe and Scintillation detectors by writing custom Python scripts for quadratic fitting.",
      "Utilized RadWare and BINDAS software to generate Gamma-Gamma coincidence matrices, successfully identifying discrete energy states."
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Conway's Game of Life – Terminal Renderer",
    date: "2026",
    description: "C++ implementation of Conway's Game of Life with live ANSI terminal rendering, generation tracking, and multiple seed patterns (random, glider, pulsar). Features toroidal grid, configurable size and speed.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    tags: ["C++17", "ANSI escape codes", "Terminal"],
    demoUrl: "https://github.com/Dharmendra-05/game-of-life",
    githubUrl: "https://github.com/Dharmendra-05/game-of-life"
  },
  {
    id: 2,
    title: "N-Body Gravitational Simulator",
    date: "2026",
    description: "C++ simulation of gravitational attraction between multiple point masses, modeling the inner Solar System (Sun, Mercury, Venus, Earth, Mars) using Newton's Law of Universal Gravitation and symplectic Euler integration. Tracks energy conservation.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1000",
    tags: ["C++17", "3D vector math", "Physics Simulation"],
    demoUrl: "https://github.com/Dharmendra-05/nbody-simulator",
    githubUrl: "https://github.com/Dharmendra-05/nbody-simulator"
  },
  {
    id: 3,
    title: "Telegram Bot with OpenClaw on Kali Linux",
    date: "2026",
    description: "A comprehensive guide and setup for creating a personal AI agent using OpenClaw on Kali Linux (VirtualBox) to power a Telegram bot. Includes API integration (Gemini), Docker, and bot pairing.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000",
    tags: ["Node.js", "Docker", "Gemini API", "Telegram Bot API", "Kali Linux"],
    demoUrl: "https://github.com/Dharmendra-05/openclaw-telegram-bot",
    githubUrl: "https://github.com/Dharmendra-05/openclaw-telegram-bot"
  },
  {
    id: 4,
    title: "Quantum-CLI Toolkit",
    date: "2026",
    description: "A terminal-first computational physics engine with an AI natural language parser. Simulates the 1D Quantum Harmonic Oscillator (exact eigenstates) and computes the KSS viscosity bound in QCD. Generates publication-ready plots and LaTeX exports.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "NumPy", "SciPy", "SymPy", "Matplotlib", "Rich"],
    demoUrl: "https://github.com/Dharmendra-05/quantum-cli-toolkit",
    githubUrl: "https://github.com/Dharmendra-05/quantum-cli-toolkit"
  },
  {
    id: 5,
    title: "Computational Physics Toolbox – QHO Visualizer",
    date: "2026",
    description: "A modular Python suite for visualizing quantum systems. The first module solves and plots the 1D Quantum Harmonic Oscillator eigenstates with classical turning points and probability densities. Auto-saves figures in a publication-ready format.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "NumPy", "SciPy", "Matplotlib"],
    demoUrl: "https://github.com/Dharmendra-05/qho-visualizer",
    githubUrl: "https://github.com/Dharmendra-05/qho-visualizer"
  }
];

export const SKILLS = {
  hard: [
    "Languages: Python, C/C++ (Arduino IDE), C++",
    "Environments & OS: Kali Linux, Ubuntu, Windows, VirtualBox, Rufus, Ventoy",
    "Tools & Frameworks: Docker, XAMPP, Git/GitHub",
    "Academic & Publishing: LaTeX",
    "Lab: Gamma Spectroscopy, HPGe Detectors, Nuclear Electronics"
  ],
  soft: [
    "Public Speaking",
    "Project Management",
    "Documentation & Reporting",
    "Problem Solving",
    "Financial Awareness"
  ],
  languages: ["English", "Hindi", "Odia"]
};

export const AWARDS = [
  {
    title: "2nd Place, Seminar Presentation",
    organization: "Dr. Priyatama Deo Memorial Competition",
    date: "2023",
    description: "Awarded for excellence in presenting complex physics concepts to an inter-college audience. Researched and delivered a comprehensive seminar on the Quantum Harmonic Oscillator."
  },
  {
    title: "Techniques for Future Energy Materials",
    organization: "O.P. Jindal University",
    date: "Feb 2025",
    description: "One-week workshop on material characterization and energy applications."
  }
];

export const CURRENT_WORK = [
  {
    title: "Open Source & Automation",
    description: "Documenting and deploying Telegram bots using OpenClaw on Kali Linux via Docker and the Gemini API."
  },
  {
    title: "Hardware Prototyping",
    description: "Experimenting with electronics, including light-activated LED strip configurations using Arduino components."
  },
  {
    title: "Web Development",
    description: "Managing a personal project journal using WordPress on a local XAMPP server."
  }
];
