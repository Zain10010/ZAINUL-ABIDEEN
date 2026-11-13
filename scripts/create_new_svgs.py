import os

nexus_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="nexusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6285FF" />
      <stop offset="50%" stop-color="#8CA6FF" />
      <stop offset="100%" stop-color="#00F0FF" />
    </linearGradient>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6285FF" stop-opacity="0.2" />
      <stop offset="100%" stop-color="transparent" />
    </radialGradient>
  </defs>
  <rect width="800" height="500" rx="16" fill="#0D1017" />
  <rect width="800" height="500" fill="url(#bgGlow)" />
  
  <g opacity="0.3" stroke="#6285FF" stroke-width="1.5">
    <line x1="400" y1="160" x2="180" y2="320" />
    <line x1="400" y1="160" x2="320" y2="320" />
    <line x1="400" y1="160" x2="480" y2="320" />
    <line x1="400" y1="160" x2="620" y2="320" />
    <line x1="180" y1="320" x2="400" y2="420" />
    <line x1="320" y1="320" x2="400" y2="420" />
    <line x1="480" y1="320" x2="400" y2="420" />
    <line x1="620" y1="320" x2="400" y2="420" />
  </g>

  <g transform="translate(400, 150)">
    <circle cx="0" cy="0" r="42" fill="#151820" stroke="url(#nexusGrad)" stroke-width="3" />
    <text x="0" y="-6" font-family="sans-serif" font-size="11" font-weight="bold" fill="#00F0FF" text-anchor="middle">ORCHESTRATOR</text>
    <text x="0" y="12" font-family="sans-serif" font-size="10" fill="#A1A1AA" text-anchor="middle">LangGraph</text>
  </g>

  <g transform="translate(180, 320)">
    <circle cx="0" cy="0" r="32" fill="#151820" stroke="#6285FF" stroke-width="2" />
    <text x="0" y="-2" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFF" text-anchor="middle">Web Search</text>
    <text x="0" y="12" font-family="sans-serif" font-size="8" fill="#8CA6FF" text-anchor="middle">Tavily ReAct</text>
  </g>

  <g transform="translate(320, 320)">
    <circle cx="0" cy="0" r="32" fill="#151820" stroke="#6285FF" stroke-width="2" />
    <text x="0" y="-2" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFF" text-anchor="middle">Code Gen</text>
    <text x="0" y="12" font-family="sans-serif" font-size="8" fill="#8CA6FF" text-anchor="middle">Worker</text>
  </g>

  <g transform="translate(480, 320)">
    <circle cx="0" cy="0" r="32" fill="#151820" stroke="#6285FF" stroke-width="2" />
    <text x="0" y="-2" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFF" text-anchor="middle">Summarize</text>
    <text x="0" y="12" font-family="sans-serif" font-size="8" fill="#8CA6FF" text-anchor="middle">Map-Reduce</text>
  </g>

  <g transform="translate(620, 320)">
    <circle cx="0" cy="0" r="32" fill="#151820" stroke="#6285FF" stroke-width="2" />
    <text x="0" y="-2" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFF" text-anchor="middle">RAG Q&amp;A</text>
    <text x="0" y="12" font-family="sans-serif" font-size="8" fill="#8CA6FF" text-anchor="middle">Worker</text>
  </g>

  <g transform="translate(400, 420)">
    <rect x="-100" y="-18" width="200" height="36" rx="10" fill="#151820" stroke="#10B981" stroke-width="2" />
    <text x="0" y="4" font-family="sans-serif" font-size="11" font-weight="bold" fill="#10B981" text-anchor="middle">JUDGE LLM // CONFLICT ARBITER</text>
  </g>

  <rect x="30" y="30" width="280" height="36" rx="8" fill="#151820" stroke="rgba(255,255,255,0.1)" />
  <text x="45" y="53" font-family="sans-serif" font-size="12" font-weight="bold" fill="#00F0FF">NEXUS // MULTI-AGENT AI</text>
</svg>"""

with open('public/images/projects/nexus-multiagent.svg', 'w', encoding='utf-8') as f:
    f.write(nexus_svg)

legal_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="legalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#6285FF" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="16" fill="#0D1017" />

  <g transform="translate(80, 50)">
    <rect width="640" height="400" rx="14" fill="#151820" stroke="url(#legalGrad)" stroke-width="1.5" />
    <rect width="640" height="40" rx="14" fill="#1C202C" />
    <circle cx="24" cy="20" r="5" fill="#EF4444" />
    <circle cx="42" cy="20" r="5" fill="#F59E0B" />
    <circle cx="60" cy="20" r="5" fill="#10B981" />
    <text x="100" y="25" font-family="monospace" font-size="11" fill="#A1A1AA">legal-ai.vercel.app // IPC Legal Assistance Platform</text>
    
    <rect x="30" y="65" width="580" height="120" rx="10" fill="#0D1017" stroke="rgba(255,255,255,0.06)" />
    <text x="50" y="95" font-family="sans-serif" font-size="13" font-weight="bold" fill="#A78BFA">Citizen Query:</text>
    <text x="50" y="120" font-family="sans-serif" font-size="12" fill="#D4D4D8">Explain Section 420 IPC and penalties under Indian Law...</text>
    <text x="50" y="155" font-family="sans-serif" font-size="11" fill="#71717A">Llama 3.1 &bull; Groq LPUs &bull; Fast Inference</text>

    <rect x="30" y="200" width="580" height="170" rx="10" fill="#11141D" stroke="rgba(139,92,246,0.3)" />
    <text x="50" y="230" font-family="sans-serif" font-size="13" font-weight="bold" fill="#00F0FF">AI Legal Assistant (IPC Advisor):</text>
    <text x="50" y="260" font-family="sans-serif" font-size="12" fill="#F5F5F5">Section 420 deals with Cheating and dishonestly inducing delivery of property.</text>
    <text x="50" y="285" font-family="sans-serif" font-size="12" fill="#A1A1AA">Cognizable, non-bailable offense triable by a Magistrate of the first class.</text>
    <rect x="50" y="310" width="160" height="28" rx="6" fill="#6285FF" />
    <text x="130" y="328" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFF" text-anchor="middle">Multilingual Translation</text>
  </g>
</svg>"""

with open('public/images/projects/legal-ai.svg', 'w', encoding='utf-8') as f:
    f.write(legal_svg)

print('Generated SVGs successfully')

