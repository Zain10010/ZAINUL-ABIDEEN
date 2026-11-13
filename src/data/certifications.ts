export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerLogoBadge: string;
  badgeColor: string;
  description: string;
  skillsCovered: string[];
  credentialStatus: "Verified" | "Completed";
  verifyUrl?: string;
  year: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "gen-ai-camp",
    title: "GEN AI CAMP",
    issuer: "AlgoUniversity",
    issuerLogoBadge: "ALGO",
    badgeColor: "from-purple-600 to-indigo-600",
    description: "Intensive training in generative artificial intelligence architectures, LLM orchestration, prompt optimization, and agentic workflows.",
    skillsCovered: ["Generative AI", "LLM Orchestration", "Prompt Engineering", "Agentic Systems"],
    credentialStatus: "Completed",
    year: "2026"
  },
  {
    id: "azure-fundamentals",
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    issuerLogoBadge: "MS",
    badgeColor: "from-blue-600 to-cyan-500",
    description: "Fundamental knowledge of cloud concepts, core Azure services, security, privacy, compliance, and cloud computing architecture.",
    skillsCovered: ["Cloud Computing", "Azure Architecture", "Cloud Security", "Virtual Machines"],
    credentialStatus: "Completed",
    year: "2025"
  },
  {
    id: "linux-training-iitb",
    title: "Linux Training",
    issuer: "IIT Bombay",
    issuerLogoBadge: "IITB",
    badgeColor: "from-emerald-600 to-teal-500",
    description: "Command-line mastery, shell scripting, process management, and Unix system administration essentials.",
    skillsCovered: ["Linux CLI", "Shell Scripting", "Process Management", "File Permissions"],
    credentialStatus: "Completed",
    year: "2025"
  },
  {
    id: "git-training-iitb",
    title: "Git Training",
    issuer: "IIT Bombay",
    issuerLogoBadge: "IITB",
    badgeColor: "from-emerald-600 to-cyan-600",
    description: "Distributed version control fundamentals, repository workflows, branching, merging, and collaborative git paradigms.",
    skillsCovered: ["Git Version Control", "Branching Strategies", "Merge Conflicts", "Collaboration"],
    credentialStatus: "Completed",
    year: "2025"
  },
  {
    id: "intro-gen-ai-google",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud (Coursera)",
    issuerLogoBadge: "GCP",
    badgeColor: "from-amber-500 to-red-500",
    description: "Core principles of generative AI, large language models, transformer mechanisms, and ethical AI deployment on Google Cloud.",
    skillsCovered: ["Generative AI", "Transformer Models", "Large Language Models", "Responsible AI"],
    credentialStatus: "Completed",
    year: "2025"
  },
  {
    id: "webinar-super-intelligence",
    title: "Webinar on Artificial Super Intelligence",
    issuer: "YIT Moodbidri",
    issuerLogoBadge: "YIT",
    badgeColor: "from-sky-600 to-blue-700",
    description: "Academic exploration of the frontiers of artificial superintelligence, cognitive architectures, and emergent reasoning capabilities.",
    skillsCovered: ["Artificial General Intelligence", "Super Intelligence", "Cognitive AI", "Future Paradigms"],
    credentialStatus: "Completed",
    year: "2025"
  },
  {
    id: "rapid-dev-ai-ibm",
    title: "Rapid Development for AI Services",
    issuer: "IBM Developer Skills Network",
    issuerLogoBadge: "IBM",
    badgeColor: "from-blue-700 to-indigo-600",
    description: "Rapid prototyping and deployment of cognitive AI microservices, REST inference endpoints, and automated pipeline integration.",
    skillsCovered: ["IBM AI Services", "API Prototyping", "Cognitive Systems", "Microservices"],
    credentialStatus: "Completed",
    year: "2024"
  },
  {
    id: "r-training-iitb",
    title: "R Training",
    issuer: "IIT Bombay",
    issuerLogoBadge: "IITB",
    badgeColor: "from-teal-600 to-emerald-500",
    description: "Statistical data processing, exploratory data analytics, regression modeling, and data visualization using R.",
    skillsCovered: ["R Programming", "Statistical Analysis", "Data Visualization", "Hypothesis Testing"],
    credentialStatus: "Completed",
    year: "2024"
  }
];
