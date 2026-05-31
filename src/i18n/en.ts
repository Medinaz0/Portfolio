import type { Dict } from "./dictionaries";

export const dict: Dict = {
  nav: {
    overview: "Overview",
    about: "About",
    skills: "Skills",
  },
  home: {
    role: "Computer Engineering Student",
    heading:
      "Cybersecurity enthusiast\nengineering a safer digital world.",
    subtitle:
      "I explore vulnerabilities and build secure, scalable cloud environments. With hands-on experience in AWS, Azure and Linux, I specialize in vulnerability analysis, network security and cloud infrastructure deployment.",
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
        heading: "Security & Vulnerability Analysis",
        text: "Identifying weaknesses before they become threats. Hands-on experience analyzing network traffic, scanning for vulnerabilities and configuring secure environments across cloud and local infrastructure.",
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
        quote:
          '"You can\'t defend what you don\'t understand."',
      },
      cloud: {
        number: "02.",
        heading: "Cloud Infrastructure as a Foundation",
        text: "Secure systems start with a well-configured infrastructure. Working with AWS and Azure — deploying VMs, configuring security groups, managing databases and storage — has taught me that every configuration decision is also a security decision.",
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
  },
  footer: {
    github: "GitHub",
  },
  contact: {
    title: "contact",
    email: "email",
    location: "location",
    github: "github",
    aria_open: "Abrir contacto",
    aria_close: "Cerrar contacto",
  },
};
