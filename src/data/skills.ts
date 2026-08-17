export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: ["C++", "C", "Python", "SQL"],
  },
  {
    title: "WEB DEVELOPMENT",
    skills: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    title: "DATABASES",
    skills: ["MySQL", "MongoDB Atlas"],
  },
  {
    title: "AI / MACHINE LEARNING",
    skills: [
      "TensorFlow",
      "MobileNetV2",
      "OpenCV",
      "Gemini Vision API",
      "Google Colab",
    ],
  },
  {
    title: "CORE COMPUTER SCIENCE",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
    ],
  },
  {
    title: "TOOLS",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "OpenStreetMap",
      "Leaflet",
    ],
  },
];
