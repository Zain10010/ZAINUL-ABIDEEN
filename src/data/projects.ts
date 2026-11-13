export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: "Agentic AI" | "Quantum ML" | "GenAI & NLP" | "Full Stack";
  featured: boolean;
  description: string;
  fullOverview: string;
  myContribution: string;
  keyHighlights: string[];
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  hasInteractiveModal?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "nexus-multiagent-framework",
    title: "NEXUS: Networked Expert Unified System — Multi-Agent AI Orchestration Framework",
    subtitle: "Autonomous Multi-Agent Routing, Context Memory & LLM Conflict Arbitration",
    badge: "Flagship Project // Ongoing",
    category: "Agentic AI",
    featured: true,
    description:
      "A cutting-edge multi-agent AI orchestration framework that routes queries to specialist agents, aggregates their outputs, and resolves contradictions through an autonomous judge module, delivering unified, traceable responses.",
    fullOverview:
      "Complex analytical queries often overwhelm monolithic single-agent LLM systems, leading to hallucinations or incomplete synthesis. NEXUS introduces a robust hierarchical multi-agent architecture built on LangGraph and FastAPI. An Orchestrator Agent decomposes incoming requests, evaluates intent, and routes subtasks to four specialized worker agents. Responses pass through a Conflict Resolution Module where an arbitration judge LLM checks factual consistency and source reliability. A two-tier memory manager synchronizes in-memory session buffers with Redis-backed long-term persistence, served to a responsive React dashboard.",
    myContribution:
      "Architected the LangGraph multi-agent cyclical graph, engineered the intent classification and semantic-similarity routing over agent-capability embeddings, implemented the conflict arbitration judge module, and deployed the async FastAPI backend with Redis persistence.",
    keyHighlights: [
      "Orchestrator Agent for intent classification, query decomposition & semantic-similarity routing over agent-capability embeddings",
      "Four LangGraph worker agents: Web Search (Tavily, ReAct), Code Generation, Map-Reduce Summarisation & RAG-based Q&A",
      "Conflict Resolution Module using a Judge LLM to arbitrate factual consistency, source reliability, and confidence metrics",
      "Two-tier Context Memory Manager featuring in-memory session buffers and Redis-backed persistent long-term storage",
      "Asynchronous FastAPI backend streaming execution timelines, routing graphs, and arbitration logs to a React dashboard",
      "Targeting a 20–35% accuracy gain over single-agent baselines on a 200-query benchmark (ROUGE-L, pass@1, F1, citation accuracy)"
    ],
    technologies: [
      "Python",
      "LangGraph",
      "FastAPI",
      "React",
      "Redis",
      "Tavily API",
      "OpenAI API",
      "Cohere API",
      "LLM APIs"
    ],
    image: "/images/projects/nexus-multiagent.svg",
    githubUrl: "https://github.com/Zain10010/",
    liveDemoUrl: "https://github.com/Zain10010/nexus-multiagent-ai",
    hasInteractiveModal: true
  },
  {
    id: "qml-cancer-immunotherapy",
    title: "Quantum Machine Learning for Cancer Immunotherapy Outcome Prediction",
    subtitle: "Hybrid Quantum-Classical Modeling for Biomedical RNA Clinical Prediction",
    badge: "Research Flagship",
    category: "Quantum ML",
    featured: true,
    description:
      "Designed hybrid Quantum Machine Learning models to predict cancer patient response to immunotherapy using biomedical RNA clinical data.",
    fullOverview:
      "Cancer immunotherapy efficacy (e.g., anti-PD-1/CTLA-4 checkpoint inhibitors) is heavily dictated by high-dimensional transcriptomic variations. This project pioneers hybrid quantum-classical algorithms. High-dimensional clinical RNA feature vectors are mapped into quantum Hilbert space via parameterized quantum feature maps (ZZFeatureMap). Both Quantum Support Vector Machines (QSVM) and Variational Quantum Circuits (VQC) with parameterized rotation gates (Ansatz) were engineered and benchmarked against classical machine learning models, achieving improved prediction accuracy.",
    myContribution:
      "Designed the hybrid quantum-classical pipeline using Qiskit and PennyLane, formulated quantum kernel evaluation methods, preprocessed high-dimensional clinical RNA datasets, and conducted rigorous benchmark comparisons with classical models.",
    keyHighlights: [
      "Quantum Support Vector Machine (QSVM) utilizing quantum kernel tricks in Hilbert space",
      "Variational Quantum Circuits (VQC) with parameterized rotation and entangling CNOT gates",
      "Hybrid Quantum-Classical Optimization loop using classical gradient descent (COBYLA/Adam)",
      "High-dimensional biomedical RNA clinical dataset processing and dimensionality reduction",
      "Empirical benchmark comparison verifying improved prediction accuracy over classical baselines"
    ],
    technologies: [
      "Python",
      "PennyLane",
      "Qiskit",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "RNA Clinical Dataset"
    ],
    image: "/images/projects/qml-cancer.svg",
    githubUrl: "https://github.com/Zain10010/quantum-ml-cancer-immunotherapy",
    liveDemoUrl: "#research",
    hasInteractiveModal: true
  },
  {
    id: "legal-ai-platform",
    title: "AI-Powered Legal Assistance Platform",
    subtitle: "Context-Aware Legal Guidance Chatbot Powered by Llama 3.1 & Groq LPUs",
    badge: "GenAI & NLP",
    category: "GenAI & NLP",
    featured: true,
    description:
      "An AI-powered legal assistance platform providing Indian Penal Code (IPC) legal guidance through an intelligent chatbot, NLP capabilities, and multilingual translation.",
    fullOverview:
      "Accessing legal legal guidance under the Indian Penal Code (IPC) can be daunting for citizens. This platform democratizes legal comprehension using state-of-the-art NLP models. By integrating Meta's Llama 3.1 through high-throughput Groq LPUs, the system delivers ultra-low-latency, context-aware answers to complex legal inquiries. The platform features query answering, automated legal text summarization, sentiment analysis, and multilingual translation for diverse linguistic demographics.",
    myContribution:
      "Developed the complete AI pipeline with LangChain and Hugging Face, integrated Llama 3.1 via Groq API, designed the frontend user interface with HTML, CSS, and JavaScript, and deployed the production system on Vercel.",
    keyHighlights: [
      "Context-aware Indian Penal Code (IPC) query answering powered by Llama 3.1 via Groq API",
      "Natural language processing suite: legal text summarization, sentiment analysis & multilingual translation",
      "Sub-second inference responses powered by Groq LPU hardware acceleration",
      "Interactive modern UI with multi-tool legal discovery and document simplification",
      "Production deployment on Vercel enabling scalable, real-time public access"
    ],
    technologies: [
      "Python",
      "Groq API",
      "Llama 3.1",
      "Hugging Face",
      "LangChain",
      "NLP",
      "JavaScript",
      "Vercel"
    ],
    image: "/images/projects/legal-ai.svg",
    githubUrl: "https://github.com/Zain10010/ipc-chatbot",
    liveDemoUrl: "https://ipc-chatbot.vercel.app",
    hasInteractiveModal: true
  },
  {
    id: "alumni-management-system",
    title: "Alumni Information Management System",
    subtitle: "Centralized Enterprise Web Platform for Alumni Engagement & Records",
    badge: "Full Stack",
    category: "Full Stack",
    featured: true,
    description:
      "A web-based information management platform designed to organize alumni records and provide a centralized system for institutional alumni records.",
    fullOverview:
      "Designed to replace manual recordkeeping, this platform delivers an end-to-end information portal for educational institutions. The system features multi-tier role-based access for alumni and administrators, enabling graduated batches to register, update professional milestones, verify contact information, and discover fellow alumni.",
    myContribution:
      "Architected relational database schema in MySQL, implemented server-side logic in PHP, built responsive frontend UI components, and integrated secure session management.",
    keyHighlights: [
      "Centralized relational database storing alumni contact info, employment, and graduation history",
      "Multi-role authentication system for administrators, faculty coordinators, and alumni",
      "Dynamic search and filtering by batch year, engineering department, company, and location",
      "Automated record export and reporting dashboards for accreditation documentation",
      "Responsive and clean web interface designed for rapid desktop and mobile record lookups"
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Apache"
    ],
    image: "/images/projects/alumni-portal.svg",
    githubUrl: "https://github.com/Zain10010/ALUMNI5",
    liveDemoUrl: "https://alumni-five-gules.vercel.app",
    hasInteractiveModal: true
  }
];
