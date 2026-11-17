export interface Experience {
  role: string;
  organization: string;
  companyUrl?: string;
  location?: string;
  period: string;
  duration?: string;
  isCurrent?: boolean;
  domain: string;
  technologies: string[];
  description: string;
}

export const experiences: Experience[] = [
  {
    role: "FULL STACK DEVELOPMENT INTERN",
    organization: "Cloudstier Solutions Pvt. Ltd.",
    companyUrl: "https://www.cloudstier.com/",
    location: "Tirupattur, Tamil Nadu, India",
    period: "Present",
    isCurrent: true,
    domain: "Full Stack Development",
    technologies: [
      "Frontend Development",
      "Backend Development",
      "Web Applications",
      "Software Workflows",
    ],
    description:
      "Currently working as a Full Stack Development Intern at Cloudstier Solutions, gaining practical industry experience in frontend and backend development, building web applications, and understanding real-world software development workflows.",
  },
];
