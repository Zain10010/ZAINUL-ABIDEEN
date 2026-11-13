export interface ProfileData {
  fullName: string;
  displayName: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  location: string;
  roles: string[];
  headline: {
    line1: string;
    line2: string;
  };
  heroIntroduction: string;
  careerObjective: string;
  aboutText: string[];
  educationHighlights: {
    number: string;
    title: string;
    description: string;
    detail: string;
  }[];
  educationTimeline: {
    period: string;
    degree: string;
    major: string;
    institution: string;
    university?: string;
    location?: string;
    status: string;
    score: string;
    highlights: string[];
  }[];
}

export const profileData: ProfileData = {
  fullName: "Zainul Abideen N K P",
  displayName: "Zain",
  email: "zain05@gmail.com",
  phone: "+91 9074567918",
  linkedIn: "https://www.linkedin.com/in/zainulabideen05",
  github: "https://github.com/Zain10010",
  location: "Kannur, Kerala",
  roles: [
    "AI/ML Engineer",
    "Generative AI & LLM Orchestrator",
    "Python Developer",
    "Quantum ML Researcher"
  ],
  headline: {
    line1: "Engineering Intelligence.",
    line2: "Building What's Next."
  },
  heroIntroduction:
    "An Artificial Intelligence and Machine Learning undergraduate with hands-on experience in Machine Learning, Generative AI, and software engineering — building scalable intelligent solutions from concept to production.",
  careerObjective:
    "Motivated Artificial Intelligence and Machine Learning undergraduate with hands-on experience in Machine Learning, Generative AI, and web development. Seeking an opportunity to apply my technical skills in AI, data analysis, and software development to build innovative solutions while continuously learning and contributing to organizational growth.",
  aboutText: [
    "I'm currently pursuing my Bachelor's degree in Artificial Intelligence and Machine Learning at Yenepoya Institute of Technology, Mangalore (CGPA: 8.43).",
    "I am passionate about understanding how intelligent systems work and how technology can solve real-world challenges.",
    "My technical journey includes architecting multi-agent AI frameworks (LangGraph, FastAPI, Redis), quantum machine learning models (Qiskit, PennyLane), and full-stack intelligent web applications.",
    "Beyond academics, I enjoy collaborating on projects, participating in technical events, coordinating activities, and continuously improving my technical and professional skills.",
    "I believe in learning by building, experimenting, and improving."
  ],
  educationHighlights: [
    {
      number: "01",
      title: "Education",
      description: "B.E. Artificial Intelligence & Machine Learning",
      detail: "Yenepoya Institute of Technology, Mangalore | Graduation Year: 2027 | CGPA: 8.43"
    },
    {
      number: "02",
      title: "Technical Focus",
      description: "AI, Machine Learning, GenAI, Multi-Agent Systems & Python",
      detail: "LangGraph, RAG pipelines, FastAPI backends, Quantum ML models, and predictive analytics"
    },
    {
      number: "03",
      title: "Mindset",
      description: "Curiosity, Quick Learning, Problem Solving & Continuous Learning",
      detail: "Driven by experimentation, building practical software solutions, and peer leadership"
    }
  ],
  educationTimeline: [
    {
      period: "2023 – 2027",
      degree: "Bachelor of Engineering (B.E.)",
      major: "Artificial Intelligence and Machine Learning",
      institution: "Yenepoya Institute of Technology",
      university: "Visvesvaraya Technological University (VTU)",
      location: "Mangalore, Karnataka",
      status: "Currently Pursuing (Graduation: 2027)",
      score: "CGPA: 8.43",
      highlights: [
        "Current CGPA: 8.43 in core AI & ML engineering curriculum",
        "Developing NEXUS: Multi-Agent AI Orchestration Framework with LangGraph, Redis, and FastAPI",
        "Undergraduate Research in Quantum Machine Learning for Cancer Immunotherapy with Qiskit and PennyLane",
        "Departmental Coordinator for PINNACLE International Technical Fest & Volunteer for Matrix Fusion 4.0 Hackathon"
      ]
    },
    {
      period: "2021 – 2023",
      degree: "Class 12th (Higher Secondary / Pre-University)",
      major: "Science Stream (PCMB)",
      institution: "MASS GHSS Ettikulam",
      location: "Payyanur, Kerala",
      status: "Graduation Year: 2023",
      score: "Percentage: 88.98%",
      highlights: [
        "Achieved 88.98% distinction across core Mathematics, Physics, Chemistry, and Biology",
        "Strong foundation in quantitative problem solving and scientific reasoning"
      ]
    },
    {
      period: "2021",
      degree: "Class 10th (Secondary School Leaving Certificate)",
      major: "General Academic Curriculum",
      institution: "MASS GHSS Ettikulam",
      location: "Payyanur, Kerala",
      status: "Graduation Year: 2021",
      score: "Percentage: 93.85%",
      highlights: [
        "Achieved outstanding 93.85% distinction in state board examinations",
        "Active participation in science exhibitions, academic competitions, and leadership activities"
      ]
    }
  ]
};
