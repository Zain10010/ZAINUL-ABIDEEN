export interface ResearchTopic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  equation?: string;
}

export interface ArchitectureStage {
  step: string;
  title: string;
  domain: "Classical" | "Quantum" | "Hybrid";
  description: string;
  tools: string[];
}

export const researchData = {
  sectionHeading: "Exploring Beyond Conventional Computing.",
  sectionSubtitle: "Bridging NISQ-Era Quantum Algorithms with High-Dimensional Biomedical Intelligence",
  featuredTitle: "Integrating Quantum Machine Learning with Biomedical Data for Cancer Immunotherapy Outcome Prediction",
  interests: [
    "Quantum Computing",
    "Biomedical AI",
    "Predictive Modeling",
    "Intelligent Systems",
    "Variational Algorithms",
    "Kernel Methods"
  ],
  motivation: {
    title: "Why Quantum Machine Learning in Biomedical Prediction?",
    summary:
      "Cancer immunotherapy efficacy (e.g. checkpoint inhibitors targeting PD-1/CTLA-4) is deeply individualized, dictated by subtle, high-dimensional gene interactions and transcriptomic variability. Classical algorithms often suffer from the curse of dimensionality or overfit on small clinical cohorts.",
    quantumAdvantage:
      "Quantum circuits map classical biomedical feature vectors into exponentially vast Hilbert spaces through non-linear quantum feature maps (|x⟩ = U(x)|0⟩). In this quantum state space, complex patient phenotypes that are inseparable in classical Euclidean space can become linearly separable, revealing critical therapeutic indicators."
  },
  keyConcepts: [
    {
      title: "Quantum Support Vector Machine (QSVM)",
      badge: "Kernel Methods",
      description:
        "Computes an inner-product quantum kernel matrix K(x_i, x_j) = |⟨ψ(x_i)|ψ(x_j)⟩|^2 using quantum interference. The resulting kernel is fed into an optimal hyperplane classifier, leveraging quantum state overlaps without explicit classical coordinate expansion."
    },
    {
      title: "Variational Quantum Circuits (VQC)",
      badge: "Parameterized Ansätze",
      description:
        "Employs parameterized single-qubit rotations R_y(θ), R_z(θ) and two-qubit entangling gates (CNOT / CZ). Cost function gradients are evaluated via parameter-shift rules and fed back into classical optimizers (COBYLA, Adam) in a closed loop."
    },
    {
      title: "Hybrid Quantum-Classical Architecture",
      badge: "NISQ-Ready Pipeline",
      description:
        "Harnesses classical hardware for data preprocessing, normalization, and parameter gradient updates, while offloading high-dimensional Hilbert space transformations and quantum state evaluations to quantum simulators or processors."
    },
    {
      title: "Classical Benchmarking & Comparative Rigor",
      badge: "Empirical Validation",
      description:
        "Every quantum model is systematically evaluated against baseline Classical Support Vector Machines (RBF & Linear kernels), Random Forest classifiers, and XGBoost using ROC-AUC, Precision-Recall curves, and balanced accuracy metrics."
    }
  ],
  workflowStages: [
    {
      step: "01",
      title: "Clinical Data Ingestion & Preprocessing",
      domain: "Classical",
      description: "RNA-seq gene expression profiling, clinical biomarker normalization, and PCA dimensionality reduction.",
      tools: ["Pandas", "Scikit-learn", "NumPy"]
    },
    {
      step: "02",
      title: "Quantum Feature Mapping (Hilbert Embedding)",
      domain: "Quantum",
      description: "Encoding normalized gene vectors into quantum states |ψ(x)⟩ using ZZFeatureMap and Pauli expansion circuits.",
      tools: ["Qiskit", "PennyLane"]
    },
    {
      step: "03",
      title: "Parameterized Quantum Circuit (VQC Ansatz)",
      domain: "Quantum",
      description: "Applying entangling gates and tunable parameter layers U(θ) across multi-qubit register to discover bio-patterns.",
      tools: ["Variational Ansatz", "CNOT Entanglement"]
    },
    {
      step: "04",
      title: "Hermitian Measurement & Expectation Value",
      domain: "Quantum",
      description: "Measuring Pauli observables ⟨Z⟩ across output qubits to extract expectation values representing decision states.",
      tools: ["Statevector Simulator", "Shot-noise Evaluator"]
    },
    {
      step: "05",
      title: "Classical Optimization & Loss Convergence",
      domain: "Hybrid",
      description: "Classical optimizer (COBYLA/SPSA) updates parameters θ iteratively until convergence on training loss.",
      tools: ["Classical Gradient Descent", "Loss Min"]
    },
    {
      step: "06",
      title: "Predictive Classification & Biomarker Evaluation",
      domain: "Classical",
      description: "Final outcome inference (Responder vs. Non-Responder) with ROC-AUC analysis and comparative benchmarking.",
      tools: ["Matplotlib", "ROC-AUC", "Confusion Matrix"]
    }
  ]
};

