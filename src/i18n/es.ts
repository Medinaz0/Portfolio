import type { Dict } from "./dictionaries";

export const dict: Dict = {
  nav: {
    overview: "Resumen",
    about: "Sobre Mí",
    skills: "Habilidades",
  },
  home: {
    role: "Estudiante de Ingeniería Informática",
    heading:
      "Entusiasta de la Ciberseguridad\nconstruyendo un mundo digital más seguro.",
    subtitle:
      "Exploro vulnerabilidades y construyo entornos cloud seguros y escalables. Con experiencia práctica en AWS, Azure y Linux, me especializo en análisis de vulnerabilidades, seguridad en redes y despliegue de infraestructura en la nube.",
    cta_skills: "./ver_habilidades.sh",
    cta_about: "cat sobre_mi.md",
    cards: {
      linux: {
        heading: "Linux y Sistemas",
        text: "Experiencia práctica con administración de Linux, configuración SSH, análisis de redes y despliegue de VMs en entornos cloud.",
      },
      version_control: {
        heading: "Control de Versiones y Colaboración",
        text: "Flujos de trabajo declarativos usando Git y metodologías Scrum, asegurando un desarrollo limpio, trazable y colaborativo.",
      },
      security: {
        heading: "Seguridad y Análisis de Vulnerabilidades",
        text: "Identificar debilidades antes de que se conviertan en amenazas. Experiencia práctica analizando tráfico de red, escaneando vulnerabilidades y configurando entornos seguros en infraestructura cloud y local.",
      },
    },
  },
  about: {
    title: "Sobre Mi Enfoque",
    subtitle:
      "Estoy en constante expansión de mis conocimientos en ciberseguridad mientras aplico las mejores prácticas de seguridad en cada entorno con el que trabajo.",
    sections: {
      security: {
        number: "01.",
        heading: "La seguridad no es una característica, es una mentalidad.",
        text: "Analizar sistemas, identificar debilidades y entender cómo funcionan los ataques son los cimientos para construir entornos que sean realmente difíciles de vulnerar.",
        quote: '"No puedes defender lo que no entiendes."',
      },
      cloud: {
        number: "02.",
        heading: "Infraestructura Cloud como Base",
        text: "Los sistemas seguros comienzan con una infraestructura bien configurada. Trabajar con AWS y Azure — desplegando VMs, configurando grupos de seguridad, gestionando bases de datos y almacenamiento — me ha enseñado que cada decisión de configuración es también una decisión de seguridad.",
      },
      learning: {
        number: "03.",
        heading: "Aprendizaje Continuo, Mejora Continua",
        text: "La ciberseguridad es un campo que nunca deja de evolucionar, y yo tampoco. Desde estudiar ingeniería informática en la Universidad de Caldas hasta aplicar herramientas reales de ciberseguridad, Linux y plataformas cloud, cada proyecto es una oportunidad para crecer y aplicar nuevos conocimientos.",
      },
    },
  },
  skills: {
    technical_title: "Habilidades Técnicas",
    technical_subtitle:
      "Las principales tecnologías que uso en mi día a día para mejorar como ingeniero informático y construir proyectos increíbles. Siempre con ganas de aprender nuevas herramientas y tecnologías.",
    soft_title: "Habilidades Blandas",
    soft_subtitle:
      "Las habilidades interpersonales que complementan mi experiencia técnica e impulsan una colaboración efectiva.",
  },
  footer: {
    github: "GitHub",
  },
  contact: {
    title: "contacto",
    email: "correo",
    location: "ubicación",
    github: "github",
    linkedin: "linkedin",
    aria_open: "Abrir contacto",
    aria_close: "Cerrar contacto",
  },
};
