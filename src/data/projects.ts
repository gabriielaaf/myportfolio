import powerpitClass from "../assets/powerpit_classes.png";
import powerpitHomepage from "../assets/powerpit_homepage.png";
import powerpitWork from "../assets/powerpit_work.png";
import powerpitPerfil from "../assets/powerpit_perfil.png";

import dcsnapHomepage from "../assets/dcsnap_homepage.png";
import dcsnapHowToPlay from "../assets/dcsnap_howtoplay.png";
import dcsnapGame from "../assets/dcsnap_game.png";
import dcsnapWhoWins from "../assets/dcsnap_whowins.png";

import minixBattle from "../assets/minix_battle.png";
import minixShop from "../assets/leagueofminix_shop.png";
import minixHomepage from "../assets/leagueofminix_homepage.png";

import weatherHomepage from "../assets/weather_homepage.png";
import weatherInfo from "../assets/weather_info.png";
import weatherMoreInfo from "../assets/weather_moreinfo.png";

import smartcampusHomepage from "../assets/smartcampus_homepage.png";
import smartcampusInfo from "../assets/smartcampus_info.png";
import smartcampusMoreInfo from "../assets/smartcampus_moreinfo.png";

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
    images: [
      smartcampusHomepage,
      smartcampusInfo,
      smartcampusMoreInfo,
    ],
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
    images: [
      weatherHomepage,
      weatherInfo,
      weatherMoreInfo,
    ],
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
    images: [
      powerpitHomepage,
      powerpitClass,
      powerpitWork,
      powerpitPerfil,
    ],
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
    images: [
      minixHomepage,
      minixBattle,
      minixShop,
    ],
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
    images: [
      dcsnapHomepage,
      dcsnapHowToPlay,
      dcsnapGame,
      dcsnapWhoWins,
    ],
    repository: "https://github.com/gabriielaaf/DCSNAP",
  },
];