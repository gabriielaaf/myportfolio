export interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: "smartcampus",
    name: "SmartCampus",
    category: "IoT & Dashboard",
    year: "2026",
    description:
      "An interactive platform for monitoring building conditions in real time and automatically managing lighting, air conditioning and door access based on IoT sensor data.",
    technologies: ["Python", "Streamlit", "MQTT"],
    images: [],
  },
  {
    id: "runova",
    name: "RUNOVA",
    category: "Web Development",
    year: "2026",
    description:
      "An online sports shop designed to make product discovery and shopping simple, accessible and intuitive.",
    technologies: ["Web Development", "PostgreSQL"],
    images: [],
  },
  {
    id: "circleup",
    name: "CircleUP",
    category: "Mobile Development",
    year: "2025",
    description:
      "A mobile application developed as part of a collaborative software engineering project.",
    technologies: ["Flutter", "Firebase"],
    images: [],
  },
  {
    id: "powerpit",
    name: "PowerPIT",
    category: "Web Development",
    year: "2025",
    description:
      "A web application developed using PHP, JavaScript and SQLite as part of a university project.",
    technologies: ["PHP", "JavaScript", "SQLite"],
    images: [],
  },
];