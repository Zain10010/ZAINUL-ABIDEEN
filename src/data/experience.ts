export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  category: "Hackathon Volunteer" | "Event Leadership";
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skillsGained: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "matrix-fusion-volunteer",
    role: "Volunteer — Matrix Fusion 4.0 National Level Hackathon",
    organization: "Yenepoya Institute of Technology",
    category: "Hackathon Volunteer",
    period: "2026",
    location: "Mangalore, India",
    description:
      "Active volunteer for Matrix Fusion 4.0, a premier national-level hackathon bringing together engineering innovators and developers from across India.",
    highlights: [
      "Facilitated hackathon track operations, participant check-in, mentor synchronization, and evaluation logistics",
      "Provided on-ground technical coordination for competing development teams during continuous multi-hour hackathon sprints",
      "Exercised structured problem-solving and rapid team communication in a high-intensity hackathon atmosphere"
    ],
    skillsGained: ["Hackathon Logistics", "Volunteer Leadership", "Team Coordination", "Rapid Problem-Solving"]
  },
  {
    id: "pinnacle-coordinator",
    role: "Event Coordinator – PINNACLE",
    organization: "Department of Artificial Intelligence & Machine Learning, YIT",
    category: "Event Leadership",
    period: "2026",
    location: "Yenepoya Institute of Technology",
    description:
      "Served as student coordinator for PINNACLE and main coordinator for the tech fest UNSCRAMBLE 5.0, the international technical symposium hosted by the AIML Department.",
    highlights: [
      "Managed multi-track technical events, including Ideathon competitions, technical paper presentations, and AI project exhibitions",
      "Coordinated with faculty, guest speakers, and student delegates from diverse engineering institutions",
      "Handled venue logistics, schedule execution, and participant hospitality"
    ],
    skillsGained: ["Event Leadership", "Cross-Functional Teamwork", "Technical Communication", "Crisis Management"]
  },
  {
    id: "yensplash-coordinator",
    role: "Finance Lead – Yensplash",
    organization: "Yenepoya Institute of Technology",
    category: "Event Leadership",
    period: "2026",
    location: "Mangalore, India",
    description:
      "Coordinated institutional cultural and technical fest activities, managing multi-tier logistics, scheduling, and participant engagement by taking the role as the Finance lead.",
    highlights: [
      "Orchestrated cross-departmental volunteer teams ensuring flawless stage execution and time management",
      "Managed participant communications, hospitality, and event scheduling for inter-college delegates",
      "Demonstrated problem-solving, rapid adaptability, and high-energy leadership throughout the multi-day festival"
    ],
    skillsGained: ["Team Coordination", "Event Logistics", "Leadership", "Communication"]
  }
];
