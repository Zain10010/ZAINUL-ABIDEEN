import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Sparkles, Cpu, Layers, Activity } from 'lucide-react';

export const QuantumVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const steps = [
    {
      name: "Classical Input",
      qubitState: "|000⟩",
      desc: "Normalized RNA gene expression vector x = [x1, x2, x3]",
      gate: "Input",
      hilbertDim: "2³ = 8 Dim State Space"
    },
    {
      name: "Feature Encoding",
      qubitState: "U(x)|0⟩",
      desc: "Hadamard & Pauli-Z rotations map data into Quantum Hilbert space",
      gate: "H + Rz(x)",
      hilbertDim: "Entangled Superposition"
    },
    {
      name: "Variational Ansatz",
      qubitState: "|ψ(θ,x)⟩",
      desc: "Parameterized Ry(θ) gates + CNOT entangling layers",
      gate: "VQC (θ)",
      hilbertDim: "Tunable Parameter Weights"
    },
    {
      name: "Measurement",
      qubitState: "⟨Z₁Z₂Z₃⟩",
      desc: "Expectation value evaluation across output registers",
      gate: "Measure",
      hilbertDim: "Hermitian Observable Matrix"
    },
    {
      name: "Classical Feedback",
      qubitState: "Loss < ε",
      desc: "Classical optimizer (COBYLA/Adam) updates parameter vector θ",
      gate: "Optimizer",
      hilbertDim: "Binary Classification: Responder / Non-Responder"
    }
  ];

  const handleSimulate = () => {
    setIsSimulating(true);
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= steps.length) {
        clearInterval(interval);
        setIsSimulating(false);
      } else {
        setActiveStep(current);
      }
    }, 1100);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsSimulating(false);
  };

  return (
    <div className="bento-card p-6 sm:p-8 bg-gradient-to-b from-[#151926] to-[#0D1017] border border-[#6285FF]/30">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00F0FF] flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#6285FF]" />
            Interactive Quantum Circuit Simulator
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
            Hybrid Quantum-Classical Workflow
          </h4>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#6285FF] hover:bg-[#4F73EB] disabled:opacity-50 text-xs font-semibold text-white transition-all shadow-electric-sm active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isSimulating ? "Simulating..." : "Run Pipeline"}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-xl bg-[#151820] hover:bg-[#1B202D] border border-white/10 text-xs text-[#A1A1AA] hover:text-white transition-all"
            title="Reset to initial state"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Step Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {steps.map((s, idx) => (
          <button
            key={s.name}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeStep === idx
                ? "bg-[#6285FF]/20 border-[#6285FF] text-white shadow-electric-sm"
                : "bg-[#101218] border-white/[0.06] text-[#A1A1AA] hover:border-white/20"
            }`}
          >
            <span className="text-[10px] font-mono font-semibold block text-[#8CA6FF]">
              STAGE 0{idx + 1}
            </span>
            <span className="text-xs font-bold block truncate text-white mt-0.5">
              {s.name}
            </span>
          </button>
        ))}
      </div>

      {/* Circuit Wire Diagram */}
      <div className="p-6 rounded-2xl bg-[#08090D] border border-white/10 space-y-5 overflow-x-auto">
        {/* Qubit 0 wire */}
        <div className="flex items-center gap-3 min-w-[550px]">
          <span className="font-mono text-xs text-[#00F0FF] w-12 shrink-0">q₀ |0⟩ ─</span>
          <div className="flex-1 h-0.5 bg-white/20 relative flex items-center justify-between">
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 1 ? 'bg-[#6285FF] text-white border-white/40 shadow-electric-sm' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              H
            </div>
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 1 ? 'bg-[#00F0FF] text-black font-bold border-white/40' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              Rz(x₀)
            </div>
            <div className={`w-3 h-3 rounded-full transition-all ${activeStep >= 2 ? 'bg-[#6285FF] ring-4 ring-[#6285FF]/30' : 'bg-white/20'}`} />
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 2 ? 'bg-[#8CA6FF] text-black font-bold border-white/40' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              Ry(θ₀)
            </div>
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 3 ? 'bg-emerald-400 text-black font-bold shadow-electric-sm' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              M
            </div>
          </div>
        </div>

        {/* Qubit 1 wire */}
        <div className="flex items-center gap-3 min-w-[550px]">
          <span className="font-mono text-xs text-[#00F0FF] w-12 shrink-0">q₁ |0⟩ ─</span>
          <div className="flex-1 h-0.5 bg-white/20 relative flex items-center justify-between">
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 1 ? 'bg-[#6285FF] text-white border-white/40 shadow-electric-sm' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              H
            </div>
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 1 ? 'bg-[#00F0FF] text-black font-bold border-white/40' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              Rz(x₁)
            </div>
            <div className={`w-5 h-5 rounded-full border border-white flex items-center justify-center text-[10px] transition-all ${activeStep >= 2 ? 'bg-[#6285FF] text-white ring-4 ring-[#6285FF]/30' : 'bg-[#151820] text-[#71717A]'}`}>
              ⊕
            </div>
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 2 ? 'bg-[#8CA6FF] text-black font-bold border-white/40' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              Ry(θ₁)
            </div>
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 3 ? 'bg-emerald-400 text-black font-bold shadow-electric-sm' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              M
            </div>
          </div>
        </div>

        {/* Qubit 2 wire */}
        <div className="flex items-center gap-3 min-w-[550px]">
          <span className="font-mono text-xs text-[#00F0FF] w-12 shrink-0">q₂ |0⟩ ─</span>
          <div className="flex-1 h-0.5 bg-white/20 relative flex items-center justify-between">
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 1 ? 'bg-[#6285FF] text-white border-white/40 shadow-electric-sm' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              H
            </div>
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 1 ? 'bg-[#00F0FF] text-black font-bold border-white/40' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              Rz(x₂)
            </div>
            <div className={`w-3 h-3 rounded-full transition-all ${activeStep >= 2 ? 'bg-[#6285FF] ring-4 ring-[#6285FF]/30' : 'bg-white/20'}`} />
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 2 ? 'bg-[#8CA6FF] text-black font-bold border-white/40' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              Ry(θ₂)
            </div>
            <div className={`px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${activeStep >= 3 ? 'bg-emerald-400 text-black font-bold shadow-electric-sm' : 'bg-[#151820] text-[#71717A] border-white/10'}`}>
              M
            </div>
          </div>
        </div>
      </div>

      {/* Active Stage Detail Box */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 p-4 rounded-xl bg-[#101218] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <span className="text-[10px] font-mono text-[#6285FF] uppercase font-bold">
            State Representation
          </span>
          <p className="text-base font-bold text-white font-mono mt-0.5">
            {steps[activeStep].qubitState} &bull; {steps[activeStep].name}
          </p>
          <p className="text-xs text-[#A1A1AA] mt-1">
            {steps[activeStep].desc}
          </p>
        </div>

        <div className="shrink-0 px-3 py-1.5 rounded-lg bg-[#151820] border border-white/10 text-right">
          <span className="text-[10px] font-mono text-[#71717A] block">Space Complexity</span>
          <span className="text-xs font-mono font-semibold text-[#00F0FF]">
            {steps[activeStep].hilbertDim}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

