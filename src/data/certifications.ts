export interface Certification {
  title: string;
  issuer: string;
  category?: string;
  date?: string;
  recipient?: string;
}

export const certifications: Certification[] = [
  {
    title: "Introduction to Generative AI – Art of the Possible",
    issuer: "AWS Training & Certification",
    category: "GENERATIVE AI • AWS",
    date: "August 23, 2026",
    recipient: "Santhosh M",
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Simplilearn (Powered by Google Cloud)",
    category: "GENERATIVE AI",
    recipient: "Santhosh M",
  },
  {
    title: "Gen AI Powered Data Analytics Job Simulation",
    issuer: "Job Simulation & Analytics Program",
    category: "AI & DATA ANALYTICS",
    recipient: "Santhosh M",
  },
  {
    title: "All Programming Languages Course",
    issuer: "Sysoft Institution, Tirupattur",
    category: "PROGRAMMING",
    recipient: "Santhosh M",
  },
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    category: "FOUNDATIONS",
    recipient: "Santhosh M",
  },
  {
    title: "National Cadet Corps (NCC)",
    issuer: "National Cadet Corps (School Time)",
    category: "LEADERSHIP & DISCIPLINE",
    recipient: "Santhosh M",
  },
];
