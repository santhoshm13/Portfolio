export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  period: string;
  cgpa?: string;
  statusText?: string;
}

export const educationList: EducationItem[] = [
  {
    degree: "BACHELOR OF ENGINEERING",
    major: "Computer Science Engineering",
    institution: "Chennai Institute of Technology",
    period: "2025 — 2029",
    cgpa: "9.08",
    statusText: "PURSUING",
  },
  {
    degree: "DIPLOMA IN COMPUTER APPLICATIONS (DCA)",
    major: "Computer Applications",
    institution: "Sysoft Institution, Tirupattur",
    period: "6 MONTHS DURATION",
    statusText: "COMPLETED",
  },
];
