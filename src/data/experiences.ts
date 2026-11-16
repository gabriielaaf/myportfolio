export type ExperienceCategory =
  | "Professional"
  | "Hackathon"
  | "Achievement"
  | "Academic";

export interface Experience {
  id: string;
  title: string;
  organization: string;
  category: ExperienceCategory;
  period: string;
  description: string;
  achievement?: string;
  technologies?: string[];
  repository?: string;
}

export const experiences: Experience[] = [

  {
    id: "scitech-2026",
    repository: "https://github.com/gabriielaaf/SmartCampus_SciTeCh.git",
    title: "SciTeCh Porto '26",
    organization: "BEST Porto · Coreflux",
    category: "Hackathon",
    period: "October 2026",
    achievement: "3rd Place",
    description:
      "Designed and developed SmartCampus, a smart building management platform that combines real-time IoT monitoring with automated control of lighting, air conditioning and door access, transforming sensor data into intelligent, energy-efficient actions.",
    technologies: [
      "Python",
      "Streamlit",
      "MQTT",
      "IoT",
    ],
  },
  {
    id: "ebec-2026",
    repository: "https://github.com/gabriielaaf/WeatherPrevision_EBEC.git",
    title: "EBEC Porto '26",
    organization: "BEST Porto",
    category: "Hackathon",
    period: "March 2026",
    achievement: "2nd Place",
    description:
      "Applied machine learning and data analysis to solve a series of complex, real-world challenges under a 24-hour deadline, developing predictive models and an interactive dashboard to turn raw data into meaningful insights.",
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Streamlit",
    ],
  },
];