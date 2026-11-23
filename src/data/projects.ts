export interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  highlight: string;
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
    highlight: "A real-time digital twin of a campus building.",
    description:
      "Developed during SciTeCh Porto 2026 (3rd place), it uses MQTT and Coreflux to monitor six classrooms and control lighting, air conditioning, doors, and alarms through an interactive dashboard.",
    technologies: ["Python", "Streamlit", "MQTT", "Coreflux"],
    images: [],
    repository: "https://github.com/gabriielaaf/SmartCampus_SciTeCh",
  },
  {
    id: "weatherprevision",
    name: "WeatherPrevision",
    category: "Machine Learning & Data Science",
    year: "March 2026",
    highlight: "Turning weather data into predictions.",
    description:
      "Developed during EBEC Porto 2026 (2nd place), this machine learning project tackled rainfall, temperature, snowfall, and next-day weather forecasting, bringing the results together in an interactive Streamlit dashboard.",
    technologies: ["Python", "Machine Learning", "Streamlit"],
    images: [],
    repository: "https://github.com/gabriielaaf/WeatherPrevision_EBEC",
  },
  {
    id: "circleup",
    name: "CircleUP",
    category: "Mobile Development",
    year: "February - June 2026",
    highlight: "Making healthy habits a team effort.",
    description:
      "A mobile app where users join groups, complete challenges, and share their achievements. Community validation, points, and leaderboards make personal progress more social and motivating.",
    technologies: ["Flutter", "Dart", "Firebase"],
    images: [],
    repository: "https://github.com/gabriielaaf/CircleUP",
  },
  {
    id: "powerpit",
    name: "PowerPIT",
    category: "Web Development",
    year: "February - June 2026",
    highlight: "A complete gym management platform.",
    description:
      "Members can book classes and check equipment availability, while trainers manage their schedules and administrators oversee gym operations.",
    technologies: ["PHP", "JavaScript", "SQLite"],
    images: [],
    repository: "https://github.com/gabriielaaf/PowerPit",
  },
  {
    id: "leagueofminix",
    name: "LeagueOfMinix",
    category: "Game Development",
    year: "February - June 2026",
    highlight: "A 2D multiplayer game built from scratch in C for MINIX.",
    description:
      "Inspired by League of Legends, players compete in real-time battles, defeat enemies, upgrade their abilities, and race to destroy the opponent's tower.",
    technologies: ["C", "Minix"],
    images: [],
    repository: "https://github.com/gabriielaaf/LeagueOfMinix",
  },
  {
    id: "dcsnap",
    name: "DCSNAP",
    category: "Game Development",
    year: "September 2025 - January 2026",
    highlight: "A strategic Java card game inspired by Marvel Snap.",
    description:
      "Players choose their decks and compete through card-based battles, combining interactive gameplay with object-oriented design and software development principles.",
    technologies: ["Java"],
    images: [],
    repository: "https://github.com/gabriielaaf/DCSNAP",
  },
];