/**
 * MINIMALIST TECH CV & PORTFOLIO ENGINE
 * Candidate: Vuong Quoc Hoa (Applied AI & Full-Stack Systems Engineer)
 * GitHub: https://github.com/VuongQuocHoa
 * Live Portfolio: https://vuongquochoa.github.io/portfolio/
 */

const projectsData = [
  {
    id: "lockheed-dacs",
    title: "Lockheed DACS — 3D Aerospace Missile Interception Simulation (WebGL / Three.js)",
    role: "Lead 3D Simulation & Graphics Engineer",
    category: "simulation",
    metricPill: "Three.js WebGL • 60 FPS • DACS O2 Lateral Divert • Procedural WebAudio",
    shortDesc: "Real-time 3D aerodynamic aerospace simulation featuring modular 6-part missile assembly, Lockheed Martin DACS (Divert and Attitude Control System) high-pressure lateral jet dynamics, Third-Person Shooter (TPS) Pointer Lock controls, and relativistic Bullet-Time slow motion.",
    repoPath: "d:\\PROJECTS\\lockheed-dacs",
    githubUrl: "https://github.com/VuongQuocHoa/lockheed-dacs",
    liveUrl: "https://vuongquochoa.github.io/lockheed-dacs/",
    demoGuide: "Instant WebGL 3D Simulation: https://vuongquochoa.github.io/lockheed-dacs/",
    tags: ["Three.js (r128)", "WebGL", "Pointer Lock API", "WebAudio API", "Proportional Navigation", "Physics Engine", "JavaScript ES6"],
    specs: {
      "Graphics & Rendering": "Three.js r128 (Custom Shaders, PBR Metallic Materials, Particle Thruster Fog)",
      "Guidance Dynamics": "Proportional Navigation Guidance (PNG) targeting mobile supersonic UAVs",
      "DACS Reaction System": "Quad lateral O₂ pulse jets generating orthogonal divert vector without body pitch lag",
      "Camera Viewports": "4 Modes: TPS PUBG/Free Fire tracking, FPV Seeker Radar HUD, Orbit 360°, Chase Cam",
      "Procedural Sound": "Mathematical WebAudio synthesis engine (Zero external MP3 audio asset footprint)"
    },
    diagram: 
`[User Mouse / Keyboard (TPS Pointer Lock / WASD)]
       │ (Pointer Lock API + Bullet-Time 0.2x Time Dilation)
       ▼
[Three.js Simulation Loop (Strict 60 FPS Target)]
       │
       ├──> Modular Assembly Validator (6 Subsystems: Nozzle, Fins, Fuselage, Strakes, DACS, Seeker)
       ├──> Lockheed DACS Lateral Jet Controller (Orthogonal Impulse Divert Force)
       ├──> Proportional Navigation Guidance Law (Mobile Supersonic Intercept Geometry)
       │
       ▼
[FPV AI Seeker Canvas HUD Reticle + WebAudio Procedural Synthesizer]`,
    star: {
      situation: "At hypersonic flight regimes (Mach 3 - Mach 5), conventional mechanical control fins suffer acute aerodynamic control authority degradation due to shock wave detachment, resulting in unacceptable miss distances against agile targets.",
      task: "Accurately simulate 6-DOF flight kinematics and the orthogonal pulse reaction physics of Lockheed Martin's Divert and Attitude Control System (DACS) in a client-side browser engine running at a rock-solid 60 FPS.",
      action: "Built a zero-dependency WebGL simulation in pure Three.js; modeled quad high-pressure orthogonal divert thrusters allowing instantaneous center-of-mass translation; integrated Pointer Lock API for competitive TPS mouse mechanics, procedural WebAudio rocket acoustics, and bullet-time slow-mo (0.2x).",
      result: "Achieved flawless 60 FPS across desktop browsers with zero external plugins or downloads, delivering high-fidelity aerospace simulation and sub-millisecond control responsiveness."
    }
  },
  {
    id: "predict-mass",
    title: "Edge AI Predict Mass — Real-Time 3D Computer Vision Volume & Mass Estimation",
    role: "Lead Computer Vision & Edge AI Engineer",
    category: "vision",
    metricPill: "60 FPS Video Pipeline • INT8 PTQ (-50% RAM) • <17ms End-to-End Latency",
    shortDesc: "Industrial-grade edge computer vision system estimating 3D volume and physical mass in real-time from single-camera feeds, combining optical perspective calibration, contour segmentation, and quantized neural networks.",
    repoPath: "d:\\PROJECTS\\predict-mass",
    githubUrl: "https://github.com/VuongQuocHoa/predict-mass",
    liveUrl: "https://vuongquochoa.github.io/predict-mass/",
    demoGuide: "Interactive 3D CV Simulator: https://vuongquochoa.github.io/predict-mass/",
    tags: ["YOLOv11n-seg", "OpenCV", "ONNX Runtime", "OpenVINO", "PTQ INT8", "Perspective Geometry", "Streamlit", "Python"],
    specs: {
      "Neural Architecture": "YOLOv11n-seg (Nano Segmentation) + 12D MLP Mass Regressor",
      "Optical Metric Calibration": "ArUco Marker PPM (Pixels-Per-Metric) + Perspective tilt compensation cos(θ)",
      "Hardware Acceleration": "OpenVINO Execution Provider (CPU SIMD Vectorization) / TensorRT",
      "Model Quantization": "Post-Training Quantization (FP32 → INT8 PTQ via ONNX Runtime)",
      "Pipeline Architecture": "Decoupled Asynchronous Grabber (60 FPS zero frame-drop guarantee)",
      "Interactive Validation": "Streamlit Cloud Dashboard + Standalone WebGL Simulator"
    },
    diagram: 
`[Industrial Camera Stream (60 FPS)] 
       │
       ├── (Thread 1) Decoupled High-Priority Grabber (Async Queue) ──> Zero-lag feed (<17ms)
       │
       └── (Thread 2) Inference Worker (35+ FPS)
               │
               ├──> ArUco Marker Detector ──────> Pixel-Per-Metric (PPM) & Optical Tilt θ
               ├──> YOLOv11n-seg ─────────────> Polygon Mask & Ellipse Major/Minor Axes
               │
               └──> Feature Vector Assembly [Area, Axes, Aspect Ratio, Solidity, Density]
                       │
                       └──> MLP Regressor (ONNX INT8) ──> Predicted 3D Volume & Mass (±3.2% Error)`,
    star: {
      situation: "Industrial conveyor sorting facilities require continuous real-time mass estimation of irregularly shaped organic produce without halting high-speed conveyors or installing delicate mechanical load cells.",
      task: "Architect an end-to-end edge AI vision pipeline operating at 60 FPS with sub-20ms latency and less than 5% mass estimation error under fluctuating camera heights and perspective angles.",
      action: "Designed a Decoupled Multi-threaded Asynchronous Pipeline separating video acquisition from model inference; integrated ArUco metric scaling with 3D ellipsoid volumetric estimation and MLP regression; applied ONNX Post-Training Quantization (INT8) running on OpenVINO.",
      result: "Eliminated 100% of accumulated latency frame backlog, sustained 60 FPS display throughput, reduced model RAM footprint by 50% (down to 6.2 MB), and accelerated inference speed by 1.8x with a validated mean error under 3.2%."
    }
  },
  {
    id: "detect-face",
    title: "InsightFace FaceID CyberHUD & Microservice (FastAPI + ChromaDB)",
    role: "Computer Vision & Distributed Backend Engineer",
    category: "vision",
    metricPill: "<50ms Identity Verification • ChromaDB Vector Search • Android APK Client",
    shortDesc: "High-throughput biometrics microservice extracting 512D facial embeddings with InsightFace Buffalo_l, indexed and queried via ChromaDB vector storage with Cosine Similarity, coupled with a standalone Android CyberHUD client.",
    repoPath: "d:\\PROJECTS\\detect-face",
    githubUrl: "https://github.com/VuongQuocHoa/detect-face",
    liveUrl: "https://vuongquochoa.github.io/detect-face/",
    demoGuide: "CyberHUD WebRTC Simulator: https://vuongquochoa.github.io/detect-face/",
    tags: ["FastAPI", "InsightFace Buffalo_l", "ChromaDB", "Cosine Similarity", "Android APK", "OpenVINO", "WebRTC"],
    specs: {
      "Detection & Embedding": "InsightFace Buffalo_l (RetinaFace Detector + ResNet 512D Deep Embedding)",
      "Vector Database": "ChromaDB Persistent Collection (Sub-millisecond Cosine Distance Index)",
      "Microservice Protocol": "FastAPI RESTful Endpoints + WebSocket Streaming",
      "Edge Mobile Client": "Standalone Android APK with Auto-Discovery LAN Protocol",
      "Motion Stabilization": "Anti-ghosting temporal filter & Stranger coordinate-pinning tracking"
    },
    diagram:
`[Android APK / WebRTC Camera Client]
       │ (Multipart Frame Stream via HTTP / WebSocket)
       ▼
[FastAPI Gateway (Uvicorn Async Core)]
       │
       ├──> RetinaFace Detector ──────> 5-Point Facial Landmarks & Bounding Box
       │
       ├──> InsightFace Feature Extractor ──> 512D Vector (L2 Normalized)
       │
       └──> ChromaDB Persistent Index ──> Cosine Similarity Search
               │
               ├── Distance < Threshold ──> Verified Identity & Welcome CyberHUD
               └── Distance >= Threshold ─> Auto-Register 'Stranger_ID' & Pin Coordinate`,
    star: {
      situation: "Enterprise biometric attendance and security check-ins suffered from jittery bounding boxes, false positives during rapid subject motion, and heavy database query latency at peak office ingress hours.",
      task: "Develop a microsecond-latency face recognition service with scalable vector indexing, motion-stabilized bounding boxes, and an Android client deployable over local enterprise Wi-Fi.",
      action: "Built asynchronous FastAPI endpoints leveraging InsightFace Buffalo_l with OpenVINO acceleration; backed embeddings with ChromaDB persistent collections; authored an anti-ghosting motion filter and stranger-pinning logic to stabilize live frames.",
      result: "Delivered sub-50ms identification latency per face, zero bounding box flicker during walking motion, and seamless offline-first operation over local networks via the packaged Android APK."
    }
  },
  {
    id: "mobiagri-app",
    title: "MobiAgri — Digital Agritech ERP & VietGAP Traceability Platform",
    role: "Full-Stack Software Engineer",
    category: "fullstack",
    metricPill: "Full-Stack React 18 + Prisma ORM • VietGAP Standards • B2B Supermarket Hub",
    shortDesc: "Comprehensive agricultural ERP platform digitizing farming cooperatives: managing farmer registries, fertilizer and pesticide compliance logs, crop cycle forecasting, and B2B supermarket wholesale procurement contracts.",
    repoPath: "d:\\PROJECTS\\mobiagri-app",
    githubUrl: "https://github.com/VuongQuocHoa/mobiagri-app",
    liveUrl: "https://vuongquochoa.github.io/mobiagri-app/",
    demoGuide: "Live ERP Dashboard: https://vuongquochoa.github.io/mobiagri-app/",
    tags: ["React 18", "Vite", "Node.js", "Express", "Prisma ORM", "SQLite", "REST API", "Responsive CSS"],
    specs: {
      "Frontend Architecture": "React 18, Vite, Single Page Application (SPA), Mobile-First UI",
      "Backend Services": "Node.js Express RESTful API with Role-Based Access Control (RBAC)",
      "ORM & Database Layer": "Prisma ORM with strongly-typed migrations (SQLite / PostgreSQL)",
      "Traceability Standard": "VietGAP (Good Agricultural Practices) automated compliance auditing",
      "Commercial Portal": "B2B Procurement Dashboard connecting agricultural cooperatives to retail chains"
    },
    diagram:
`[Mobile-First React 18 SPA] ──> [Node.js Express REST API] (JWT Authentication & RBAC)
                                           │
                                           ▼ (Prisma ORM Migration Layer)
                             [Relational Database (Farms, Cycles, Logs)]
                                           │
           ┌───────────────────────────────┴───────────────────────────────┐
           ▼                                                               ▼
[VietGAP Automated Audit Engine]                               [B2B Retail Wholesale Portal]
(Zero-Chemical Harvest Validation)                             (Forward Contracts: Co.op, WinMart)`,
    star: {
      situation: "Agricultural cooperatives relied on disorganized paper logs for chemical spray and harvest dates, leading to lost certifications and rejected bulk shipments at supermarket intake hubs.",
      task: "Architect an intuitive, mobile-friendly full-stack ERP system enabling non-technical farmers to record farming activities while providing administrators with audit-ready VietGAP compliance reports.",
      action: "Engineered a React 18 SPA optimized for field mobile usage; built Express.js REST APIs with Prisma ORM; designed automated calculation of harvest safety quarantine intervals and dynamic QR traceability codes.",
      result: "Digitized 100% of seasonal farming logs, cut administrative certification audit prep time by 80%, and secured forward wholesale procurement contracts 2-3 weeks ahead of harvest."
    }
  },
  {
    id: "coze-agent",
    title: "Coze AI Agent — Full-Stack Web Chat & Real-Time SSE Streaming Gateway",
    role: "AI Agent & Full-Stack Systems Engineer",
    category: "agent",
    metricPill: "ByteDance Coze API v3 • SSE Deduplication • Node.js Proxy & Vercel Edge",
    shortDesc: "Complete integration gateway for ByteDance Coze API v3: modern glassmorphic Web SPA, zero-dependency Node.js reverse proxy solving CORS and masking tokens, Vercel Serverless Edge handler, and Python streaming CLI for automated VietGAP diary logging.",
    repoPath: "d:\\PROJECTS\\coze-agent",
    githubUrl: "https://github.com/VuongQuocHoa/coze-agent",
    liveUrl: "https://vuongquochoa.github.io/coze-agent/",
    demoGuide: "Live Web Chat Interface: https://vuongquochoa.github.io/coze-agent/",
    tags: ["Coze API v3", "LLM Streaming SSE", "Node.js", "Python", "Vercel Serverless", "VietGAP Farm Logging"],
    specs: {
      "AI Model Engine": "ByteDance Coze Bot API v3 (Real-Time Streaming Mode)",
      "Proxy Architecture": "Native Node.js HTTP Proxy (Zero external NPM packages, Hot-Reload .env)",
      "Streaming Protocol": "Server-Sent Events (SSE) with proprietary token deduplication algorithm",
      "Client Interfaces": "SPA Web Chat (TailwindCSS, Marked.js, Highlight.js) + Python Terminal Client",
      "Latency Metric": "Sub-150ms Time-To-First-Byte (TTFB) instant typewriter streaming",
      "Domain Workflow": "Automated VietGAP entity extraction (Crops, Plots, Fertilizers, Dosages)"
    },
    diagram:
`[Web Chat SPA / Python CLI] ──> [Node.js Proxy / Vercel Edge] (CORS & Token Masking)
                                                │
                                                ▼ (SSE Stream POST /v3/chat)
                                       [Coze AI Agent Cloud]
                                                │
                    ┌───────────────────────────┴───────────────────────────┐
                    ▼                                                       ▼
        [Deduplication Stream Parser]                          [VietGAP Entity Extraction]
    (Filters duplicate deltas & token noise)                  (Plots, Fertilizers, Dosages, Operators)
                    │                                                       │
                    ▼                                                       ▼
        [Flicker-Free Smooth Typing]                          [Standardized Agricultural Record]`,
    star: {
      situation: "Connecting web clients directly to modern LLM APIs frequently triggers browser CORS errors, exposes confidential API keys in client bundles, and causes stuttering text duplication due to overlapping SSE events.",
      task: "Build a bulletproof, zero-dependency reverse proxy gateway and responsive web client capable of streaming Coze API v3 events cleanly with full conversation memory.",
      action: "Crafted a zero-dependency native Node.js HTTP server and Vercel Edge function handling CORS preflights and token masking; engineered an inline SSE stream parser eliminating delta/completion duplicates; authored a Python CLI client and domain prompt for automated VietGAP diary logging.",
      result: "Reduced Time-To-First-Byte (TTFB) to under 150ms, eliminated 100% of text duplication artifacts, and provided a 1-click deployable serverless solution for production."
    }
  },
  {
    id: "follow-chronos",
    title: "Chronos Pro Life OS — 24-Hour Circular Dynamic Productivity Engine",
    role: "Frontend Architect & Performance Specialist",
    category: "fullstack",
    metricPill: "100/100 Google Lighthouse • 0 External Dependencies • Pure ES6 Modules",
    shortDesc: "High-performance productivity dashboard visualizing 1,440 daily minutes along a continuous 24-hour circular energy dial, utilizing trigonometric Canvas/SVG rendering, native browser sensors, and an internal zero-latency rule engine.",
    repoPath: "d:\\PROJECTS\\follow",
    githubUrl: "https://github.com/VuongQuocHoa/chronos-life-os",
    liveUrl: "https://vuongquochoa.github.io/chronos-life-os/",
    demoGuide: "Live 24-Hour Dial: https://vuongquochoa.github.io/chronos-life-os/",
    tags: ["Vanilla JS (ES6 Modules)", "HTML5 Canvas/SVG", "CSS Glassmorphism", "Browser Sensors", "Rule Engine", "Node.js"],
    specs: {
      "Bundle Size": "< 50 KB Total payload (Zero external runtime dependencies)",
      "Lighthouse Score": "100 / 100 across Performance, Accessibility, Best Practices, and SEO",
      "Rendering Architecture": "Trigonometric polar-to-cartesian coordinate Canvas/SVG vector engine",
      "Hardware Sensors": "Battery API, Ambient Light Sensor, Screen Orientation, Online Status",
      "Local Intelligence": "Native Deterministic Rule-Engine Assistant (Zero network latency, 0ms TTFB)"
    },
    diagram:
`[Trigonometric Geometry Engine (sin/cos polar coordinates)]
                    │
                    ▼
[HTML5 Vector Canvas 24-Hour Dial (Real-Time Energy Curves)]
                    │
                    ├──> Browser Hardware Sensors (Battery Status, Light Sensor, Network Connectivity)
                    ├──> Native Rule Engine Assistant (Context-Aware Instant Schedule Feedback)
                    │
                    ▼
[Zero-Lag Offline-First LocalStorage State Manager]`,
    star: {
      situation: "Existing productivity applications suffer from framework bloat (5MB+ JavaScript bundles), slow initial load times, and linear lists that fail to convey circadian rhythm and energy management across a 24-hour cycle.",
      task: "Engineer a lightweight, zero-dependency circular time management system achieving perfect 100/100 Google Lighthouse scores while delivering fluid 60 FPS animations on low-power devices.",
      action: "Built the entire application in pure Vanilla JavaScript (ES6 Modules); computed time arc sector geometries via custom polar trigonometry; integrated native browser hardware APIs for battery and lighting adaptation; embedded an instant rule-based assistant.",
      result: "Achieved a sub-50KB bundle footprint, a flawless 100/100 Lighthouse benchmark across all audit categories, sub-20ms initial render times, and instantaneous offline responsiveness."
    }
  },
  {
    id: "shopee-deal-sniper",
    title: "Shopee Deal Sniper — High-Frequency Flash Sale Scraper & Arbitrage Engine",
    role: "Automation & Data Scraping Engineer",
    category: "automation",
    metricPill: "High-Frequency Scraper • Arbitrage Scorer • Instant Telegram Alerts (<3s)",
    shortDesc: "Automated multi-threaded pricing intelligence system monitoring e-commerce Flash Sales in real-time, executing an arbitrage evaluation algorithm to identify mispriced goods and dispatching instant Telegram alerts.",
    repoPath: "d:\\PROJECTS\\shopee-deal-sniper",
    githubUrl: "https://github.com/VuongQuocHoa/shopee-deal-sniper",
    liveUrl: "https://vuongquochoa.github.io/shopee-deal-sniper/",
    demoGuide: "Live Arbitrage Radar: https://vuongquochoa.github.io/shopee-deal-sniper/",
    tags: ["Node.js", "Express", "Telegram Bot API", "Web Scraping", "Data Filtering", "Anti Rate-limit"],
    specs: {
      "Scraping Engine": "Node.js asynchronous fetch worker with rotating user-agents and exponential backoff",
      "Arbitrage Scoring": "Proprietary scoring function weighting historical discounts, merchant ratings, and sales velocity",
      "Notification Service": "Telegram Bot API webhook dispatcher delivering enriched push alerts within 3 seconds",
      "Memory Safety": "100-item circular sliding buffer preventing memory leaks during 24/7 continuous runs",
      "Telemetry Dashboard": "TailwindCSS live monitoring dashboard with real-time stats counter"
    },
    diagram:
`[Multi-threaded Scraper Worker] ──> [Exponential Backoff & Header Rotation]
                                              │
                                              ▼
                               [Arbitrage Scoring Function (0-100)]
                               (Discount %, Historical Price, Sales, Rating)
                                              │
                     ┌────────────────────────┴────────────────────────┐
                     ▼                                                 ▼
          [Score >= 80 Threshold]                             [Score < 80 Discarded]
                     │                                        (Saved to Circular Memory Buffer)
                     ▼
          [Telegram Webhook Alert (<3s)]
          (Product Name, Margin, 1-Click Buy Link)`,
    star: {
      situation: "High-discount Flash Sale deals on major e-commerce platforms sell out within seconds. Manual browsing makes it virtually impossible to capture profitable arbitrage margins or high-demand discounted inventory.",
      task: "Develop an automated 24/7 scanning service capable of evaluating thousands of real-time listings, scoring deals according to historical pricing, and alerting subscribers within seconds without triggering IP bans.",
      action: "Built an asynchronous Node.js crawler with intelligent rate-limiting and rotating headers; created an algorithmic scoring pipeline factoring discount depth, store reputation, and sales volume; connected a Telegram webhook bot for immediate mobile delivery.",
      result: "Dispatched validated alerts to user phones within 3 seconds of flash sale release, maintained 24/7 uptime without IP blocks, and achieved an average identified savings of 46.8%."
    }
  },
  {
    id: "fb-ai-bot",
    title: "Facebook Fanpage AI Assistant — Automated Sales & Lead Capture (Gemini 1.5)",
    role: "Conversational AI & Full-Stack Engineer",
    category: "agent",
    metricPill: "Google Gemini 1.5 Flash • Graph API Webhooks • Automated Phone Lead Capture",
    shortDesc: "Intelligent customer service and lead generation system integrated with Facebook Messenger via Meta Graph API, utilizing Google Gemini 1.5 Flash to answer product inquiries, handle customer objections, and capture order phone numbers 24/7.",
    repoPath: "d:\\PROJECTS\\fb-ai-bot",
    githubUrl: "https://github.com/VuongQuocHoa/fb-ai-bot",
    liveUrl: "https://vuongquochoa.github.io/fb-ai-bot/",
    demoGuide: "Interactive Messenger Simulator: https://vuongquochoa.github.io/fb-ai-bot/",
    tags: ["Node.js", "Google Gemini API", "Facebook Graph API", "Webhooks", "Live Logging", "Prompt Engineering"],
    specs: {
      "AI Model Engine": "Google Gemini 1.5 Flash (Optimized for low-latency, high-accuracy conversational turns)",
      "Meta Webhook Gateway": "Express.js endpoint verifying Meta webhook handshakes (GET) and payload events (POST)",
      "Conversational Flow": "Multi-turn sales funnel prompt: Greeting → Product Consultation → Order Intent → Phone Number Capture",
      "Telemetry Console": "Embedded Live Transaction Logger displaying inbound/outbound packets and captured leads",
      "Fault Tolerance": "Graceful fallback responses when upstream third-party APIs encounter intermittent timeouts"
    },
    diagram:
`[Customer Messenger Client] ──> [Meta Graph API Webhook (/webhook)]
                                                │
                                                ▼ (HMAC Signature Verification)
                                [Express.js Gateway Controller]
                                                │
                                                ▼ (System Prompt Funnel)
                                   [Google Gemini 1.5 Flash API]
                                                │
                     ┌──────────────────────────┴──────────────────────────┐
                     ▼                                                     ▼
         [Product Advisory Answer]                             [Phone Number Extracted]
                     │                                                     │
                     ▼                                                     ▼
         [Graph API Outbound Message]                          [Live Transaction Admin Log]`,
    star: {
      situation: "E-commerce fanpages lose over 60% of potential leads when customer inquiries arriving outside business hours or during high-traffic ad campaigns go unanswered for more than 5 minutes.",
      task: "Build an automated 24/7 conversational assistant for Facebook Messenger that comprehends Vietnamese context, provides accurate product answers, and systematically secures customer phone numbers for sales closing.",
      action: "Connected Meta Graph API webhooks to a secure Express.js server; integrated Google Gemini 1.5 Flash with tailored system prompts engineered for sales conversion; developed real-time phone number regex parsing and an administrative Live Transaction Logger.",
      result: "Achieved 100% response rates within 1-2 seconds, successfully captured customer phone numbers without requiring human nighttime shifts, and reduced customer drop-off by over 70%."
    }
  },
  {
    id: "d-fake-agent",
    title: "Autonomous Financial Market News AI Agent (LangChain + Telegram)",
    role: "AI Agent & Data Engineering Specialist",
    category: "agent",
    metricPill: "LangChain Summarization • RSS Automated Scraping • APScheduler Dispatcher",
    shortDesc: "Autonomous financial intelligence agent crawling market news from global RSS feeds, using LangChain and OpenAI models to extract market catalysts and sentiment, automatically dispatching structured morning briefings to Telegram.",
    repoPath: "d:\\PROJECTS\\d-fake",
    githubUrl: "https://github.com/VuongQuocHoa/ai-market-agent",
    liveUrl: "https://vuongquochoa.github.io/ai-market-agent/",
    demoGuide: "Live Financial Terminal: https://vuongquochoa.github.io/ai-market-agent/",
    tags: ["Python", "LangChain", "OpenAI", "BeautifulSoup4", "Feedparser", "APScheduler", "Telegram Bot"],
    specs: {
      "Agent Framework": "LangChain Map-Reduce Summarization & Catalyst Extraction Chain",
      "Scheduler Architecture": "APScheduler background cron job managing periodic market sweeps",
      "Ingestion Pipeline": "Feedparser RSS ingestion + BeautifulSoup4 HTML content sanitizer",
      "Output Channels": "Automated Telegram Channel broadcast with formatted sentiment scorecards",
      "Terminal Dashboard": "Bloomberg-inspired dark glassmorphism web console with live ticker tape"
    },
    diagram:
`[Financial News RSS Feeds] ──> [Feedparser & BeautifulSoup4 Sanitizer]
                                              │
                                              ▼ (Deduplicated Article Queue)
                              [LangChain Map-Reduce Summarization]
                                              │
                                              ▼ (Sentiment Extraction: Bullish/Bearish)
                            [Structured JSON Market Intelligence]
                                              │
                                              ▼
                             [Telegram Channel Broadcast Dispatcher]`,
    star: {
      situation: "Financial market news is published across dozens of fragmented sources every minute, overwhelming investors and analysts with noise and requiring hours of manual daily synthesis.",
      task: "Automate the complete workflow of scanning economic feeds, distilling key catalysts, evaluating market sentiment, and delivering actionable morning briefings before market open.",
      action: "Created an ingestion pipeline using Feedparser and BeautifulSoup4; engineered LangChain summarization chains assessing macroeconomic implications; automated scheduled runs using APScheduler with instant Telegram channel broadcasting.",
      result: "Reduced daily reading and briefing prep time by 95%, generated concise, high-signal market intelligence cards, and delivered reliable pre-market insights to subscriber channels with zero human intervention."
    }
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projectsData);
  setupFilterAndSearch();
  setupModalHandlers();
});

// Render Projects List in Clean Tech CV Format
function renderProjects(projects) {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
        <p>No projects match your search criteria.</p>
        <button class="btn btn-outline" style="margin-top: 0.75rem;" onclick="resetFilters()">View All Projects</button>
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(p => `
    <article class="project-card-clean" data-category="${p.category}">
      <div class="proj-top">
        <div class="proj-title-group">
          <h3>${p.title}</h3>
          <p class="proj-role-meta">Role: ${p.role}</p>
        </div>
        <span class="proj-metrics">${p.metricPill}</span>
      </div>

      <p class="proj-summary">${p.shortDesc}</p>

      <!-- Demo Info Strip -->
      <div style="background: rgba(56, 189, 248, 0.05); border: 1px dashed rgba(56, 189, 248, 0.25); padding: 0.45rem 0.75rem; border-radius: 4px; font-size: 0.8rem; margin-bottom: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: var(--text-accent); font-weight: 700;">▶ LIVE DEMO / GUIDE:</span>
        <span style="color: #cbd5e1; font-family: var(--font-mono);">${p.demoGuide}</span>
      </div>

      <ul class="star-bullets">
        <li class="star-bullet-item">
          <span class="star-tag tag-s">SITUATION</span>
          <div><strong>Context &amp; Challenge:</strong> ${p.star.situation}</div>
        </li>
        <li class="star-bullet-item">
          <span class="star-tag tag-a">ACTION</span>
          <div><strong>Engineering &amp; Architecture:</strong> ${p.star.action}</div>
        </li>
        <li class="star-bullet-item">
          <span class="star-tag tag-r">RESULT</span>
          <div><strong>Quantifiable Impact:</strong> ${p.star.result}</div>
        </li>
      </ul>

      <div class="proj-footer">
        <div class="proj-tech-badges">
          ${p.tags.map(t => `<span class="tech-tag-sm">${t}</span>`).join("")}
        </div>
        <div class="proj-actions no-print">
          ${p.liveUrl ? `
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="border-color: #00F3FF; color: #00F3FF; background: rgba(0, 243, 255, 0.08); text-decoration: none; font-weight: 700;" title="Open live interactive web app">
            <span>🌐 Live Demo</span>
          </a>` : ''}
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="text-decoration: none;" title="Inspect repository source on GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>GitHub</span>
          </a>
          <button class="btn btn-primary" onclick="openProjectModal('${p.id}')">
            <span>Architecture &amp; Specs</span>
          </button>
          <button class="btn btn-outline" onclick="copyPath('${p.repoPath}')" title="Copy local source workspace path">
            <span>Copy Path</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// Category Filtering and Search Handler
function setupFilterAndSearch() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("projectSearch");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilterAndSearch();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      applyFilterAndSearch();
    });
  }
}

function applyFilterAndSearch() {
  const activeBtn = document.querySelector(".filter-btn.active");
  const category = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
  const searchVal = document.getElementById("projectSearch")?.value.toLowerCase().trim() || "";

  const filtered = projectsData.filter(p => {
    const matchCategory = (category === "all") || (p.category === category);
    const matchSearch = !searchVal || 
      p.title.toLowerCase().includes(searchVal) ||
      p.shortDesc.toLowerCase().includes(searchVal) ||
      p.tags.some(t => t.toLowerCase().includes(searchVal)) ||
      p.metricPill.toLowerCase().includes(searchVal) ||
      (p.star.action && p.star.action.toLowerCase().includes(searchVal));

    return matchCategory && matchSearch;
  });

  renderProjects(filtered);
}

function resetFilters() {
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allBtn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    allBtn.classList.add("active");
  }
  const searchInput = document.getElementById("projectSearch");
  if (searchInput) searchInput.value = "";
  renderProjects(projectsData);
}

// Modal Handlers
function setupModalHandlers() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("closeModalBtn");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeModal());
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const p = projectsData.find(item => item.id === projectId);
  if (!p) return;

  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalBody = document.getElementById("modalBody");

  modalTitle.textContent = p.title;
  modalSubtitle.textContent = `${p.role} • ${p.metricPill}`;

  let specsHtml = "";
  if (p.specs) {
    specsHtml = `
      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size: 0.9rem; color: #ffffff; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.6rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.35rem;">
          Engineering Specifications
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.5rem; font-size: 0.85rem;">
          ${Object.entries(p.specs).map(([k, v]) => `
            <div style="background: rgba(15, 23, 42, 0.6); padding: 0.5rem 0.75rem; border-radius: 4px; border: 1px solid var(--border-color);">
              <span style="color: var(--text-accent); font-weight: 600;">${k}:</span>
              <span style="color: #cbd5e1; margin-left: 0.25rem;">${v}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  let diagramHtml = "";
  if (p.diagram) {
    diagramHtml = `
      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size: 0.9rem; color: #ffffff; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.6rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.35rem;">
          System Flow &amp; Architecture Diagram
        </h4>
        <pre style="background: #020617; border: 1px solid var(--border-color); padding: 1rem; border-radius: 6px; font-family: var(--font-mono); font-size: 0.75rem; color: #38bdf8; overflow-x: auto; line-height: 1.45;">${p.diagram}</pre>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <p style="font-size: 0.95rem; color: #e2e8f0; line-height: 1.6; margin-bottom: 1.25rem;">
      ${p.shortDesc}
    </p>

    ${specsHtml}
    ${diagramHtml}

    <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-color); flex-wrap: wrap;">
      ${p.liveUrl ? `
      <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="border-color: #00F3FF; color: #00F3FF; background: rgba(0, 243, 255, 0.08); text-decoration: none; font-weight: 700;">
        <span>🌐 Open Live Demo</span>
      </a>` : ''}
      <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="text-decoration: none;">
        <span>View on GitHub</span>
      </a>
      <button class="btn btn-primary" onclick="closeModal()">
        <span>Done</span>
      </button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Utility: Copy Local Path to Clipboard
function copyPath(path) {
  navigator.clipboard.writeText(path).then(() => {
    showToast(`Copied path: ${path}`);
  }).catch(() => {
    showToast("Failed to copy path.");
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}
