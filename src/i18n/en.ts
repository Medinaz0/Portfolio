import type { Dict } from "./dictionaries";

export const dict: Dict = {
  nav: {
    overview: "Overview",
    about: "About",
    skills: "Skills",
    writeups: "Write-Ups",
  },
  home: {
    role: "Computer Engineering Student",
    heading: "Cybersecurity enthusiast\nengineering a safer digital world.",
    subtitle:
      "Computer Engineering Student. With hands-on experience in AWS, Azure and Linux, I specialize in vulnerability analysis, network security and cloud infrastructure deployment.",
    cta_skills: "./view_skills.sh",
    cta_about: "cat about.md",
    cards: {
      linux: {
        heading: "Linux & Systems",
        text: "Hands-on experience with Linux administration, SSH configuration, network analysis and VM deployment on cloud environments.",
      },
      version_control: {
        heading: "Version Control & Collaboration",
        text: "Declarative workflows using Git and Scrum methodologies, ensuring clean, trackable and collaborative development.",
      },
      security: {
        heading: "Critical & Analytical Thinking",
        text: "Ability to break down complex problems, identify patterns and make informed decisions. I apply an analytical approach to both security and software development.",
      },
    },
  },
  about: {
    title: "About My Approach",
    subtitle:
      "I am constantly expanding my knowledge in cybersecurity while applying security best practices in every environment I work with.",
    sections: {
      security: {
        number: "01.",
        heading: "Security is not a feature, it is a mindset.",
        text: "Analyzing systems, identifying weaknesses and understanding how attacks work are the foundations of building environments that are truly hard to break.",
        quote: "\"You can't defend what you don't understand.\"",
      },
      cloud: {
        number: "02.",
        heading: "Cloud Infrastructure as a Foundation",
        text: "Secure systems start with a well-configured infrastructure. Working with AWS and Azure deploying VMs, configuring security groups, managing databases and storage has taught me that every configuration decision is also a security decision.",
      },
      learning: {
        number: "03.",
        heading: "Continuous Learning, Continuous Improving",
        text: "Cybersecurity is a field that never stops evolving, and neither do I. From studying computer engineering at Universidad de Caldas to applying real-world cybersecurity tools, Linux and cloud platforms, every project is an opportunity to grow and apply new knowledge.",
      },
    },
  },
  skills: {
    technical_title: "Technical Skills",
    technical_subtitle:
      "The main technologies I use in my day-to-day work to improve as a computer engineer and build awesome projects. Always eager to learn new tools and technologies.",
    soft_title: "Soft Skills",
    soft_subtitle:
      "The interpersonal skills that complement my technical expertise and drive effective collaboration.",
    soft_items: {
      teamwork: "Teamwork",
      problem_solving: "Problem Solving",
      communication: "Communication",
      critical_thinking: "Critical Thinking",
      adaptability: "Adaptability",
      time_management: "Time Management",
      creativity: "Creativity",
    },
    hover: {
      proficiency: "Proficiency",
      years: "Experience",
      years_format: "{years} years",
      related: "Related",
    },
    technical_descriptions: {
      python:
        "Proficient in Python for scripting and backend development. Experienced with FastAPI for building RESTful services and with Pandas for data analysis, processing, and visualization.",
      bash: "Strong command-line skills for Linux administration, automation scripts, and system configuration management.",
      java: "Solid foundation in Java with experience building applications using Spring Boot and object-oriented design patterns.",
      spring_boot:
        "Experience developing REST APIs and microservices with Spring Boot, including security configuration.",
      postgresql:
        "Experience working with PostgreSQL for data modeling, SQL queries, and database administration.",
      aws: "Hands-on experience with AWS core services including EC2, S3, IAM, and Security Groups for secure cloud infrastructure deployment.",
      azure:
        "Working knowledge of Azure cloud services including virtual machines and security configurations.",
      vm: "Experience with virtualization technologies for deploying isolated environments and testing infrastructure configurations.",
      docker:
        "Deploying local cybersecurity labs with Docker and Docker Compose for pentesting practice and vulnerability analysis.",
      jenkins:
        "Familiar with CI/CD pipeline configuration using Jenkins for automated build, test, and deployment workflows.",
      git: "Strong version control practices using Git for collaborative development with feature branches and clean commit history.",
      github:
        "Experience with GitHub for code hosting, pull requests, and GitHub Actions.",
      api: "Experience designing and consuming RESTful APIs with proper error handling, authentication, and documentation.",
      cybersecurity:
        "Knowledgeable in vulnerability assessment, network security analysis, and penetration testing methodologies using industry-standard tools.",
      scrum:
        "Scrum methodology applied in academic projects, with sprint planning and agile ceremonies.",
      reporting:
        "Experience creating reports and dashboards for tracking and supporting data-driven decision making.",
    },
  },
  footer: {
    github: "GitHub",
  },
  contact: {
    title: "contact",
    email: "email",
    location: "location",
    github: "github",
    linkedin: "linkedin",
    aria_open: "Abrir contacto",
    aria_close: "Cerrar contacto",
  },
};
