export interface HackathonItem {
  name: string;
  type: 'HACKATHON' | 'CHALLENGE' | 'SYMPOSIUM';
  tag?: string;
}

export const hackathonsList: HackathonItem[] = [
  { name: 'SAMSUNG SOLVE FOR TOMORROW', type: 'CHALLENGE', tag: 'INNOVATION' },
  { name: 'SBI HACKATHON @GFF 2026', type: 'HACKATHON', tag: 'FINTECH' },
  { name: 'FLIPKART GRID 8.0', type: 'HACKATHON', tag: 'ENGINEERING' },
  { name: 'ADOBE UNIVERSITY HACKATHON', type: 'HACKATHON', tag: 'PRODUCT' },
  { name: 'QUEUE CURE', type: 'HACKATHON', tag: 'HEALTHCARE' },
  { name: 'DATATHON', type: 'HACKATHON', tag: 'DATA & ML' },
  { name: 'MADE IN INDIA 2026', type: 'HACKATHON', tag: 'NATIONAL' },
  { name: 'VIBE 2 SHIP', type: 'HACKATHON', tag: 'DEV SPRINT' },
  { name: 'VIBE2VISION', type: 'HACKATHON', tag: 'VISION TECH' },
  { name: 'XR INNOVATION CHALLENGE', type: 'CHALLENGE', tag: 'XR TECH' },
  { name: 'TALLY CODEBREWERS', type: 'HACKATHON', tag: 'ALGORITHMS' },
  { name: 'AEROTHON', type: 'HACKATHON', tag: 'AEROSPACE & TECH' },
  { name: 'ODOO HACKATHON', type: 'HACKATHON', tag: 'ERP & DEV' },
  { name: 'XPLOIT X', type: 'HACKATHON', tag: 'CYBER TECH' },
  { name: 'CHATGPT CODEX HACKATHON', type: 'HACKATHON', tag: 'GENERATIVE AI' },
  { name: 'ZERO TO ONE HACKATHON', type: 'HACKATHON', tag: 'BUILD SPRINT' },
  { name: 'HACK NEXUS', type: 'HACKATHON', tag: 'COLLABORATION' },
  { name: 'LT HACKFEST 2026', type: 'HACKATHON', tag: 'ENTERPRISE TECH' },
  { name: 'RAJASTHANI LANGUAGE MODEL', type: 'HACKATHON', tag: 'NLP & AI' },
  { name: 'NATIONAL LEVEL SYMPOSIUM', type: 'SYMPOSIUM', tag: 'LOYOLA ICAM COLLEGE' },
];
