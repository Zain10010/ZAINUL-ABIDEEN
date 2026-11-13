import os

os.makedirs('public/images/projects', exist_ok=True)
os.makedirs('public/images/achievements', exist_ok=True)
os.makedirs('public/images/certifications', exist_ok=True)

# 1. QML Cancer Immunotherapy Flagship
qml_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="qmlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6285FF" />
      <stop offset="50%" stop-color="#8CA6FF" />
      <stop offset="100%" stop-color="#00F0FF" />
    </linearGradient>
    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6285FF" stop-opacity="0.35" />
      <stop offset="100%" stop-color="transparent" />
    </radialGradient>
  </defs>
  <rect width="800" height="500" rx="16" fill="#0D1017" />
  <rect x="0" y="0" width="800" height="500" fill="url(#coreGlow)" />
  
  <g opacity="0.25" stroke="#6285FF" stroke-width="1.5" fill="none">
    <path d="M50 100 H250 L300 150 H500 L550 100 H750" />
    <path d="M50 400 H200 L260 340 H540 L600 400 H750" />
    <path d="M150 50 V450 M650 50 V450" stroke-dasharray="4 8" />
  </g>

  <g transform="translate(400, 240)">
    <ellipse cx="0" cy="0" rx="180" ry="65" fill="none" stroke="url(#qmlGrad)" stroke-width="2.5" opacity="0.8" transform="rotate(-20)" />
    <ellipse cx="0" cy="0" rx="180" ry="65" fill="none" stroke="#00F0FF" stroke-width="2" opacity="0.7" transform="rotate(40)" />
    <ellipse cx="0" cy="0" rx="180" ry="65" fill="none" stroke="#8CA6FF" stroke-width="2" opacity="0.6" transform="rotate(95)" />
    
    <circle cx="0" cy="0" r="38" fill="#151820" stroke="url(#qmlGrad)" stroke-width="3" />
    <circle cx="0" cy="0" r="18" fill="#6285FF" opacity="0.9" />
    <text x="0" y="6" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">|ψ⟩</text>
    
    <circle cx="-140" cy="-40" r="12" fill="#00F0FF" opacity="0.8" />
    <circle cx="150" cy="30" r="10" fill="#6285FF" opacity="0.8" />
    <circle cx="30" cy="-110" r="11" fill="#8CA6FF" opacity="0.8" />
    <circle cx="-40" cy="120" r="9" fill="#00F0FF" opacity="0.8" />
  </g>

  <rect x="30" y="30" width="280" height="36" rx="8" fill="#151820" stroke="rgba(255,255,255,0.1)" />
  <text x="45" y="53" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600" fill="#00F0FF">RESEARCH // FLAGSHIP PROJECT</text>
  <text x="45" y="450" font-family="'Inter', sans-serif" font-size="20" font-weight="700" fill="#FFFFFF">Quantum Machine Learning (QSVM + VQC)</text>
  <text x="45" y="475" font-family="'Inter', sans-serif" font-size="13" fill="#A1A1AA">Biomedical RNA Clinical Prediction // Qiskit &amp; PennyLane</text>
</svg>"""

with open('public/images/projects/qml-cancer.svg', 'w', encoding='utf-8') as f:
    f.write(qml_svg)

# 2. Alumni Information Management System
alumni_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="alumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5" />
      <stop offset="100%" stop-color="#6285FF" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="16" fill="#0D1017" />
  
  <g transform="translate(50, 60)">
    <rect width="700" height="380" rx="12" fill="#151820" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
    <rect width="700" height="38" rx="12" fill="#1C212D" />
    <circle cx="24" cy="19" r="5" fill="#EF4444" />
    <circle cx="42" cy="19" r="5" fill="#F59E0B" />
    <circle cx="60" cy="19" r="5" fill="#10B981" />
    <rect x="100" y="10" width="320" height="18" rx="9" fill="#0D1017" />
    <text x="120" y="23" font-family="'JetBrains Mono', monospace" font-size="10" fill="#71717A">alumni-portal.local/dashboard</text>
    
    <rect x="15" y="50" width="130" height="315" rx="8" fill="#12151D" />
    <rect x="28" y="70" width="80" height="10" rx="4" fill="#6285FF" />
    <rect x="28" y="100" width="100" height="8" rx="4" fill="#2A3245" />
    <rect x="28" y="125" width="90" height="8" rx="4" fill="#2A3245" />
    <rect x="28" y="150" width="95" height="8" rx="4" fill="#2A3245" />

    <rect x="160" y="50" width="160" height="90" rx="8" fill="#1C212D" stroke="rgba(255,255,255,0.05)" />
    <text x="175" y="80" font-family="sans-serif" font-size="24" font-weight="bold" fill="#FFFFFF">1,420+</text>
    <text x="175" y="105" font-family="sans-serif" font-size="12" fill="#A1A1AA">Registered Alumni</text>

    <rect x="335" y="50" width="160" height="90" rx="8" fill="#1C212D" stroke="rgba(255,255,255,0.05)" />
    <text x="350" y="80" font-family="sans-serif" font-size="24" font-weight="bold" fill="#6285FF">28</text>
    <text x="350" y="105" font-family="sans-serif" font-size="12" fill="#A1A1AA">Active Chapters</text>

    <rect x="510" y="50" width="175" height="90" rx="8" fill="#1C212D" stroke="rgba(255,255,255,0.05)" />
    <text x="525" y="80" font-family="sans-serif" font-size="24" font-weight="bold" fill="#10B981">99.8%</text>
    <text x="525" y="105" font-family="sans-serif" font-size="12" fill="#A1A1AA">System Uptime</text>

    <rect x="160" y="155" width="525" height="210" rx="8" fill="#12151D" stroke="rgba(255,255,255,0.05)" />
    <rect x="180" y="175" width="485" height="24" rx="4" fill="#1C212D" />
    <rect x="180" y="210" width="485" height="20" rx="4" fill="#171B26" />
    <rect x="180" y="240" width="485" height="20" rx="4" fill="#171B26" />
    <rect x="180" y="270" width="485" height="20" rx="4" fill="#171B26" />
    <rect x="180" y="300" width="485" height="20" rx="4" fill="#171B26" />
  </g>
</svg>"""

with open('public/images/projects/alumni-portal.svg', 'w', encoding='utf-8') as f:
    f.write(alumni_svg)

# 3. Citizen AI
citizen_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="citGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="100%" stop-color="#6285FF" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="16" fill="#0D1017" />
  
  <g opacity="0.2" stroke="#00F0FF" stroke-width="1">
    <circle cx="400" cy="250" r="200" fill="none" stroke-dasharray="6 6" />
    <circle cx="400" cy="250" r="130" fill="none" />
    <line x1="200" y1="100" x2="600" y2="400" />
    <line x1="600" y1="100" x2="200" y2="400" />
  </g>

  <g transform="translate(150, 90)">
    <rect width="500" height="320" rx="16" fill="#151820" stroke="url(#citGrad)" stroke-width="1.5" />
    <rect x="25" y="25" width="120" height="12" rx="6" fill="#6285FF" />
    <text x="25" y="70" font-family="sans-serif" font-size="24" font-weight="bold" fill="#FFFFFF">Citizen AI Interface</text>
    <text x="25" y="95" font-family="sans-serif" font-size="14" fill="#A1A1AA">Collaborative Frontend Architecture with React &amp; TypeScript</text>
    
    <rect x="25" y="130" width="450" height="120" rx="10" fill="#0D1017" stroke="rgba(255,255,255,0.08)" />
    <circle cx="55" cy="160" r="14" fill="#6285FF" />
    <text x="55" y="164" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFF" text-anchor="middle">AI</text>
    <rect x="85" y="152" width="280" height="12" rx="6" fill="#222838" />
    <rect x="85" y="172" width="210" height="10" rx="5" fill="#1A2030" />
    
    <rect x="25" y="265" width="450" height="40" rx="8" fill="#1B202D" stroke="#6285FF" stroke-width="1" />
    <text x="45" y="290" font-family="sans-serif" font-size="13" fill="#F5F5F5">Ask Citizen AI anything about civic services...</text>
    <rect x="410" y="272" width="55" height="26" rx="6" fill="#6285FF" />
    <text x="437" y="289" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFF" text-anchor="middle">SEND</text>
  </g>
</svg>"""

with open('public/images/projects/citizen-ai.svg', 'w', encoding='utf-8') as f:
    f.write(citizen_svg)

# 4. SGPA Calculator
sgpa_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="sgpaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#6285FF" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="16" fill="#0D1017" />

  <g transform="translate(180, 50)">
    <rect width="440" height="400" rx="16" fill="#151820" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
    
    <rect x="25" y="25" width="390" height="100" rx="12" fill="#0D1017" stroke="rgba(98,133,255,0.3)" />
    <text x="45" y="55" font-family="sans-serif" font-size="12" fill="#A1A1AA">VTU GRADING SYSTEM // RESULT</text>
    <text x="45" y="105" font-family="sans-serif" font-size="42" font-weight="bold" fill="#10B981">9.42</text>
    <text x="165" y="102" font-family="sans-serif" font-size="18" font-weight="600" fill="#A1A1AA">SGPA // First Class Distinction</text>

    <g transform="translate(25, 145)">
      <rect width="390" height="44" rx="8" fill="#1C212D" />
      <text x="20" y="27" font-family="sans-serif" font-size="13" fill="#FFF">21AI41 - Design &amp; Analysis of Algorithms</text>
      <rect x="330" y="10" width="45" height="24" rx="4" fill="#10B981" opacity="0.2" />
      <text x="352" y="26" font-family="sans-serif" font-size="12" font-weight="bold" fill="#10B981" text-anchor="middle">O</text>
    </g>

    <g transform="translate(25, 200)">
      <rect width="390" height="44" rx="8" fill="#1C212D" />
      <text x="20" y="27" font-family="sans-serif" font-size="13" fill="#FFF">21AI42 - Machine Learning Foundations</text>
      <rect x="330" y="10" width="45" height="24" rx="4" fill="#6285FF" opacity="0.2" />
      <text x="352" y="26" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6285FF" text-anchor="middle">A+</text>
    </g>

    <g transform="translate(25, 255)">
      <rect width="390" height="44" rx="8" fill="#1C212D" />
      <text x="20" y="27" font-family="sans-serif" font-size="13" fill="#FFF">21AI43 - Operating Systems &amp; Kernels</text>
      <rect x="330" y="10" width="45" height="24" rx="4" fill="#6285FF" opacity="0.2" />
      <text x="352" y="26" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6285FF" text-anchor="middle">A+</text>
    </g>

    <rect x="25" y="325" width="390" height="48" rx="10" fill="url(#sgpaGrad)" />
    <text x="220" y="355" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFF" text-anchor="middle">Recalculate SGPA &amp; CGPA</text>
  </g>
</svg>"""

with open('public/images/projects/sgpa-calc.svg', 'w', encoding='utf-8') as f:
    f.write(sgpa_svg)

# 5. Conference AIHC 2025 NIT Calicut
aihc_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="confGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6285FF" />
      <stop offset="100%" stop-color="#8B5CF6" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="16" fill="#0D1017" />
  
  <g transform="translate(80, 60)">
    <rect width="640" height="380" rx="16" fill="#151820" stroke="url(#confGrad)" stroke-width="2" />
    
    <rect x="40" y="40" width="220" height="32" rx="16" fill="rgba(98,133,255,0.2)" stroke="#6285FF" stroke-width="1" />
    <text x="150" y="61" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="bold" fill="#6285FF" text-anchor="middle">INTERNATIONAL CONFERENCE</text>
    
    <text x="40" y="120" font-family="'Inter', sans-serif" font-size="28" font-weight="800" fill="#FFFFFF">AIHC 2025</text>
    <text x="40" y="150" font-family="'Inter', sans-serif" font-size="18" font-weight="600" fill="#6285FF">International Conference on Artificial Intelligence for Healthcare</text>
    
    <g transform="translate(40, 190)">
      <text x="0" y="20" font-family="sans-serif" font-size="15" fill="#F5F5F5">Venue: National Institute of Technology (NIT) Calicut, Kerala</text>
      <text x="0" y="55" font-family="sans-serif" font-size="15" fill="#F5F5F5">Date: 10 - 12 December 2025</text>
      <text x="0" y="90" font-family="sans-serif" font-size="15" fill="#F5F5F5">Focus: Quantum Computing, Predictive Healthcare &amp; Clinical AI</text>
    </g>

    <rect x="40" y="310" width="560" height="44" rx="8" fill="#1B2130" stroke="rgba(255,255,255,0.08)" />
    <text x="320" y="338" font-family="sans-serif" font-size="13" fill="#A1A1AA" text-anchor="middle">Academic &amp; Technical Participation // Peer Collaboration</text>
  </g>
</svg>"""

with open('public/images/achievements/aihc-2025.svg', 'w', encoding='utf-8') as f:
    f.write(aihc_svg)

print('SVG assets written successfully')

