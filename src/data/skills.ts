export interface SkillItem {
  name: string;
  category: string;
  iconName?: string;
  description?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    badge: "Core Syntax",
    description: "Multi-paradigm language proficiency across scientific computing, system architecture, and statistical modeling.",
    skills: [
      { name: "Python", category: "Core", featured: true, description: "Primary language for AI/ML, LangGraph orchestration, and backend APIs." },
      { name: "C", category: "Systems", description: "Low-level memory management and computational logic foundations." },
      { name: "R", category: "Statistics", description: "Statistical data analysis and clinical research modeling." },
      { name: "Julia", category: "Scientific", featured: true, description: "High-performance scientific computing and numerical programming." },
      { name: "JavaScript", category: "Web", description: "Dynamic client-side interactivity and dashboard scripting." }
    ]
  },
  {
    id: "genai-aiml",
    title: "AI, GenAI & Agentic Frameworks",
    badge: "Specialization",
    description: "Autonomous multi-agent orchestration, LLM inference, embedding pipelines, and deep neural models.",
    skills: [
      { name: "LangChain", category: "GenAI", featured: true, description: "Composable chains, prompt templates, and LLM orchestration." },
      { name: "LangGraph", category: "GenAI", featured: true, description: "Stateful multi-agent workflows and cyclical graph architectures." },
      { name: "Hugging Face", category: "GenAI", featured: true, description: "Open-source transformers, model fine-tuning, and tokenizers." },
      { name: "OpenAI API", category: "GenAI", featured: true, description: "GPT-4o integration, function calling, and structured outputs." },
      { name: "Cohere API", category: "GenAI", description: "Rerankers, dense embeddings, and text generation." },
      { name: "Prompt Engineering", category: "GenAI", featured: true, description: "Few-shot prompting, chain-of-thought, ReAct, and system instructions." },
      { name: "FastAPI", category: "Backend", featured: true, description: "Asynchronous high-throughput REST endpoints for AI inference pipelines." },
      { name: "Scikit-learn", category: "ML", featured: true, description: "Classical classification, clustering, regression, and model evaluation." },
      { name: "Pandas", category: "Data", featured: true, description: "Tabular data manipulation, cleaning, and preprocessing." },
      { name: "NumPy", category: "Math", description: "High-performance n-dimensional array tensor operations." },
      { name: "Matplotlib", category: "Data", description: "Scientific visualizations, ROC curves, and loss plotting." },
      { name: "Qiskit & PennyLane", category: "Quantum", featured: true, description: "Quantum circuit creation and hybrid quantum-classical optimization." }
    ]
  },
  {
    id: "core-engineering",
    title: "Core Engineering Skills",
    badge: "Foundations",
    description: "End-to-end engineering principles from problem formulation to production deployment.",
    skills: [
      { name: "Artificial Intelligence", category: "Core", featured: true, description: "Autonomous problem solving and intelligent system design." },
      { name: "Machine Learning", category: "Core", featured: true, description: "Supervised and unsupervised mathematical formulations." },
      { name: "Generative AI", category: "Core", featured: true, description: "RAG architectures, vector embeddings, and agent reasoning." },
      { name: "Data Analysis", category: "Core", featured: true, description: "Exploratory data analysis, hypothesis testing, and statistical rigor." },
      { name: "Web Development", category: "Core", description: "Full-stack web application development and API integration." },
      { name: "Database Management", category: "Core", featured: true, description: "Relational database schema modeling and query optimization." }
    ]
  },
  {
    id: "web-db",
    title: "Web & Databases",
    badge: "Data & UI",
    description: "Responsive web interfaces and relational database storage architectures.",
    skills: [
      { name: "HTML5", category: "Web", description: "Semantic, accessible web layout structures." },
      { name: "CSS3", category: "Web", description: "Modern responsive styling, flexbox, and CSS grid." },
      { name: "MySQL", category: "Database", featured: true, description: "Normalized relational schemas, indexes, and complex SQL queries." },
      { name: "Redis", category: "Database", featured: true, description: "In-memory caching and session context buffers for agent memory." },
      { name: "React", category: "Frontend", featured: true, description: "Component-driven dashboards and reactive state management." }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & BI",
    badge: "DevOps & Viz",
    description: "Distributed version control, collaborative repositories, and business intelligence dashboards.",
    skills: [
      { name: "Git", category: "Tooling", featured: true, description: "Version control, branching workflows, and commit management." },
      { name: "GitHub", category: "DevOps", featured: true, description: "Collaborative repository workflows, pull requests, and CI/CD." },
      { name: "Power BI", category: "BI", featured: true, description: "Executive KPI dashboards and interactive business analytics." },
      { name: "VS Code", category: "Environment", description: "Extensible developer environment and debugging." },
      { name: "Jupyter Notebook", category: "Environment", featured: true, description: "Interactive ML experimentation and exploratory analysis." }
    ]
  },
  {
    id: "soft-skills",
    title: "Professional & Soft Skills",
    badge: "Leadership",
    description: "Collaborative mindset, systematic problem decomposition, and technical communication.",
    skills: [
      { name: "Problem-Solving", category: "Mindset", featured: true, description: "Deconstructing complex technical roadblocks into systematic steps." },
      { name: "Teamwork & Collaboration", category: "Leadership", featured: true, description: "Cross-functional team coordination and hackathon volunteering." },
      { name: "Technical Communication", category: "Leadership", featured: true, description: "Articulating complex AI/ML architectures clearly to technical and non-technical stakeholders." },
      { name: "Analytical Thinking", category: "Mindset", featured: true, description: "Data-backed reasoning, benchmark verification, and algorithmic evaluation." },
      { name: "Adaptability", category: "Mindset", description: "Rapid mastery of emerging AI libraries, models, and paradigms." }
    ]
  }
];
