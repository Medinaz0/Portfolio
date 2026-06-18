export type Dict = {
  nav: {
    overview: string;
    about: string;
    skills: string;
    writeups: string;
  };
  home: {
    role: string;
    heading: string;
    subtitle: string;
    cta_skills: string;
    cta_about: string;
    cards: {
      linux: { heading: string; text: string };
      version_control: { heading: string; text: string };
      security: { heading: string; text: string };
    };
  };
  about: {
    title: string;
    subtitle: string;
    sections: {
      security: {
        number: string;
        heading: string;
        text: string;
        quote: string;
      };
      cloud: { number: string; heading: string; text: string };
      learning: { number: string; heading: string; text: string };
    };
  };
  skills: {
    technical_title: string;
    technical_subtitle: string;
    soft_title: string;
    soft_subtitle: string;
    soft_items: {
      teamwork: string;
      problem_solving: string;
      communication: string;
      critical_thinking: string;
      adaptability: string;
      time_management: string;
      creativity: string;
    };
    hover: {
      proficiency: string;
      years: string;
      years_format: string;
      related: string;
    };
    technical_descriptions: {
      python: string;
      bash: string;
      java: string;
      spring_boot: string;
      postgresql: string;
      aws: string;
      azure: string;
      vm: string;
      docker: string;
      jenkins: string;
      git: string;
      github: string;
      api: string;
      cybersecurity: string;
      scrum: string;
      reporting: string;
    };
  };
  footer: {
    github: string;
  };
  contact: {
    title: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
    aria_open: string;
    aria_close: string;
  };
};

export function resolvePath(dict: Dict, path: string): string {
  const keys = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = dict;
  for (const key of keys) {
    if (value == null || typeof value !== "object") return path;
    value = value[key];
  }
  return typeof value === "string" ? value : path;
}
