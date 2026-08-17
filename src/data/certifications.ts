export interface Certification {
  title: string;
  issuer: string;
  category?: string;
}

export const certifications: Certification[] = [
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Simplilearn (Powered by Google Cloud)",
    category: "GENERATIVE AI",
  },
  {
    title: "Gen AI Powered Data Analytics Job Simulation",
    issuer: "Job Simulation & Analytics Program",
    category: "AI & DATA ANALYTICS",
  },
  {
    title: "All Programming Languages Course",
    issuer: "Sysoft Institution, Tirupattur",
    category: "PROGRAMMING",
  },
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    category: "FOUNDATIONS",
  },
  {
    title: "National Cadet Corps (NCC)",
    issuer: "National Cadet Corps (School Time)",
    category: "LEADERSHIP & DISCIPLINE",
  },
];
