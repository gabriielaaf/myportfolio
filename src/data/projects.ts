export interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  images: string[];
  repository?: string;
}

export const projects: Project[] = [
  {
    id: "smartcampus",
    name: "SmartCampus",
    category: "IoT & Dashboard",
    year: "October 2026",
    description:
      "An interactive platform for monitoring building conditions in real time and automatically managing lighting, air conditioning and door access based on IoT sensor data.",
    technologies: ["Python", "Streamlit", "MQTT"],
    images: [],
  },
  {
    id: "weatherprevision",
    name: "WeatherPrevision",
    category: "Machine Learning & Data Science",
    year: "March 2026",
    description:
      "A weather prediction project developed during EBEC Porto 2026, combining data analysis and machine learning to explore meteorological patterns and predict weather conditions.",
    technologies: ["Python", "Machine Learning", "Streamlit"],
    images: [],
    repository: "https://github.com/gabriielaaf/WeatherPrevision_EBEC",
  },
  {
    id: "circleup",
    name: "CircleUP",
    category: "Mobile Development",
    year: "February - June 2026",
    description:
      "A mobile application that encourages healthy and sustainable habits through daily challenges, group activities and friendly competition.",
    technologies: ["Flutter", "Dart", "Firebase"],
    images: [],
  },
  {
    id: "powerpit",
    name: "PowerPIT",
    category: "Web Development",
    year: "February - June 2026",
    description:
      "A gym management website that allows members to book fitness classes, check equipment availability and interact with trainers.",
    technologies: ["PHP", "JavaScript", "SQLite"],
    images: [],
  },
  {
    id: "leagueofminix",
    name: "LeagueOfMinix",
    category: "Game Development",
    year: "February - June 2026",
    description:
      "A League of Legends-inspired game developed as a team project for the Computer Laboratory course at FEUP, combining programming, game design and interactive gameplay.",
    technologies: ["C", "Minix"],
    images: [],
  },
  {
    id: "dcsnap",
    name: "DCSNAP",
    category: "Game Development",
    year: "September 2025 - January 2026",
    description:
      "A Java card game inspired by Marvel Snap, developed as a team project for the Software Design and Testing Laboratory course at FEUP.",
    technologies: ["Java"],
    images: [],
  },
];