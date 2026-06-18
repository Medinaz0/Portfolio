import type { Dict } from "./dictionaries";

export const dict: Dict = {
  nav: {
    overview: "Resumen",
    about: "Sobre Mí",
    skills: "Habilidades",
    writeups: "Write-Ups",
  },
  home: {
    role: "Estudiante de Ingeniería Informática",
    heading:
      "Apasionado de la Ciberseguridad\nconstruyendo un mundo digital más seguro.",
    subtitle:
      "Estudiante de ingeniería informática. Con experiencia práctica en AWS, Azure y Linux, me especializo en análisis de vulnerabilidades, seguridad en redes y despliegue de infraestructura en la nube.",
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
        heading: "Pensamiento Crítico y Analítico",
        text: "Capacidad para descomponer problemas complejos, identificar patrones y tomar decisiones fundamentadas. Aplico un enfoque analítico tanto en seguridad como en desarrollo de software.",
      },
    },
  },
  about: {
    title: "Mi Enfoque",
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
        text: "Los sistemas seguros comienzan con una infraestructura bien configurada. Trabajar con AWS y Azure desplegando VMs, configurando grupos de seguridad, gestionando bases de datos y almacenamiento me ha enseñado que cada decisión de configuración es también una decisión de seguridad.",
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
    soft_items: {
      teamwork: "Trabajo en Equipo",
      problem_solving: "Resolución de Problemas",
      communication: "Comunicación",
      critical_thinking: "Pensamiento Crítico",
      adaptability: "Adaptabilidad",
      time_management: "Gestión del Tiempo",
      creativity: "Creatividad",
    },
    hover: {
      proficiency: "Nivel",
      years: "Experiencia",
      years_format: "{years} años",
      related: "Relacionadas",
    },
    technical_descriptions: {
      python:
        "Dominio en Python para scripting, y desarrollo backend. Experiencia con FastAPI para construir servicios REST y con Pandas para análisis, procesamiento y visualización de datos.",
      bash: "Sólidas habilidades de terminal de comandos para administración de Linux, scripts de automatización y gestión de configuración del sistema.",
      java: "Base sólida en Java con experiencia construyendo aplicaciones usando Spring Boot y patrones de diseño orientados a objetos.",
      spring_boot:
        "Experiencia desarrollando APIs REST y microservicios con Spring Boot, incluyendo configuración de seguridad.",
      postgresql:
        "Experiencia trabajando con PostgreSQL para modelado de datos, consultas SQL y administración de bases de datos.",
      aws: "Experiencia práctica con servicios core de AWS incluyendo EC2, S3, IAM y Security Groups para despliegue seguro de infraestructura cloud.",
      azure:
        "Conocimiento práctico de servicios cloud de Azure incluyendo máquinas virtuales y configuraciones de seguridad.",
      vm: "Experiencia con tecnologías de virtualización para desplegar entornos aislados y probar configuraciones de infraestructura.",
      docker:
        "Despliegue de laboratorios de ciberseguridad locales con Docker y Docker Compose para prácticas de pentesting y análisis de vulnerabilidades.",
      jenkins:
        "Familiarizado con configuración de pipelines CI/CD usando Jenkins para flujos automatizados de build, test y deploy.",
      git: "Buenas prácticas de control de versiones usando Git para desarrollo colaborativo con ramas de funcionalidad y historial de commits limpio.",
      github:
        "Experiencia con GitHub para alojamiento de código, pull request, GitHub Actions.",
      api: "Experiencia diseñando y consumiendo APIs REST con manejo adecuado de errores, autenticación y documentación.",
      cybersecurity:
        "Conocimiento en evaluación de vulnerabilidades, análisis de seguridad en redes y pruebas de penetración usando herramientas estándar de la industria.",
      scrum:
        "Metodología Scrum aplicada en proyectos académicos, con planificación de sprints y ceremonias ágiles.",
      reporting:
        "Experiencia creando reportes y dashboards para seguimiento y soporte a la toma de decisiones basada en datos.",
    },
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
