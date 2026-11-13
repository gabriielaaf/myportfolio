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
}

export const experiences: Experience[] = [

  {
    id: "scitech-2026",
    title: "SciTeCh Porto '26",
    organization: "BEST Porto · Coreflux",
    category: "Hackathon",
    period: "October 2026",
    achievement: "3rd Place",
    description:
      "Developed SmartCampus during a 7-hour hackathon, building an IoT-based platform for real-time monitoring and automated control of lighting, air conditioning and door access.",
    technologies: [
      "Python",
      "Streamlit",
      "MQTT",
      "IoT",
    ],
  },
  {
    id: "ebec-2026",
    title: "EBEC Porto '26",
    organization: "BEST Porto",
    category: "Hackathon",
    period: "March 2026",
    achievement: "2nd Place",
    description:
      "Achieved second place in a 24-hour Machine Learning and Data Science challenge, tackling weather-related problems through data analysis, predictive models and an interactive interface.",
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Streamlit",
    ],
  },
];