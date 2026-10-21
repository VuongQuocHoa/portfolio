/**
 * MINIMALIST TECH CV & PORTFOLIO ENGINE
 * Candidate: Vương Quốc Hòa (Junior AI & Full-Stack Software Engineer)
 * GitHub: https://github.com/VuongQuocHoa
 */

const projectsData = [
  {
    id: "lockheed-dacs",
    title: "Lockheed DACS — Xưởng Lắp Ráp Tên Lửa & Đánh Chặn 3D (WebGL / Three.js)",
    role: "Lead 3D Simulation Engineer",
    category: "simulation",
    metricPill: "Three.js WebGL • 60 FPS • DACS O2 Divert • WebAudio",
    shortDesc: "Hệ thống mô phỏng 3D khí động học thời gian thực: Tự tay lắp ráp 6 mô-đun tên lửa, mô phỏng xung lực khí nén ngang Lockheed Martin DACS, điều khiển góc nhìn thứ ba TPS (Pointer Lock) và làm chậm thời gian Bullet-Time.",
    repoPath: "d:\\PROJECTS\\lockheed-dacs",
    githubUrl: "https://github.com/VuongQuocHoa/lockheed-dacs",
    demoGuide: "Chạy trực tiếp: http://localhost:8088 hoặc nhấp đúp file index.html",
    tags: ["Three.js (r128)", "WebGL", "Pointer Lock API", "WebAudio API", "Proportional Navigation", "Physics Engine", "JavaScript ES6"],
    specs: {
      "Đồ họa & Dựng hình": "Three.js r128 (Shaders, PBR Materials, Particle Fog)",
      "Vật lý dẫn đường": "Định luật dẫn đường tỷ lệ (Proportional Navigation)",
      "Hệ thống DACS": "Vòng 8 vòi phun O₂ áp suất cao bẻ hướng ngang tức thời",
      "Góc nhìn Camera": "4 Chế độ: TPS PUBG/Free Fire, FPV Seeker HUD, Orbit 360°, Side",
      "Âm thanh": "WebAudio procedural audio (không dùng file mp3 ngoài)"
    },
    diagram: 
`[User Mouse / Keyboard (TPS Look / WASD)]
       │ (Pointer Lock API + Bullet-Time Time Dilation)
       ▼
[Three.js Simulation Loop (60 FPS)]
       │
       ├──> Modular Assembly Manager (6 Mô-đun: Nozzle, Fins, Fuselage, Strakes, DACS, Nose)
       ├──> Lockheed DACS Lateral Jet Controller (Xả khí O₂ vuông góc thân)
       ├──> Proportional Navigation Guidance Law (Bám đuổi mục tiêu di động UAV / Cruise)
       │
       ▼
[AI Seeker Canvas HUD + WebAudio Sound Synthesizer]`,
    star: {
      situation: "Khi tên lửa bay ở tốc độ siêu thanh (Mach 3 - Mach 5), cánh lái cơ học truyền thống bị giảm sút hiệu lực nghiêm trọng do sóng xung kích, khiến việc đánh chặn mục tiêu di động cơ động cao gặp sai số lớn.",
      task: "Mô phỏng 3D chính xác cơ chế hoạt động của hệ thống xung lực ngang Lockheed Martin DACS (Divert and Attitude Control System) trên trình duyệt web ở tốc độ 60 FPS mượt mà.",
      action: "Lập trình bằng Three.js thuần kết hợp thuật toán tính góc hình học 6 bậc tự do (6-DOF); thiết kế 4 vòi phun khí O₂ vuông góc bẻ góc tức thời; tích hợp Pointer Lock API cho phép điều khiển TPS như game PUBG/Free Fire và tổng hợp âm thanh thủ tục bằng WebAudio API.",
      result: "Hệ thống vận hành mượt mà 60 FPS trên mọi trình duyệt mà không cần cài đặt plugin, đánh chặn mục tiêu chính xác với độ trễ phản hồi tức thời."
    }
  },
  {
    id: "predict-mass",
    title: "Edge AI Predict Mass — Dự Đoán Khối Lượng Vật Thể Qua Camera & AI",
    role: "Lead AI Engineer",
    category: "vision",
    metricPill: "60 FPS Pipeline • INT8 PTQ (-50% RAM) • <17ms Latency",
    shortDesc: "Hệ thống thị giác máy tính công nghiệp đo lường kích thước 3D và ước lượng khối lượng vật thể thời gian thực qua camera đơn, kết hợp quang học chiều sâu phối cảnh và mạng nơ-ron hồi quy bù sai số.",
    repoPath: "d:\\PROJECTS\\predict-mass",
    githubUrl: "https://github.com/VuongQuocHoa/predict-mass",
    demoGuide: "Streamlit Live Dashboard (http://localhost:8501) | Camera 60 FPS (python run_camera.py)",
    tags: ["YOLOv11n-seg", "OpenCV", "ONNX Runtime", "OpenVINO", "PTQ INT8", "Perspective Geometry", "Streamlit", "Python"],
    specs: {
      "Mô hình AI": "YOLOv11n-seg (Nano) + MLP Regressor 12D",
      "Kỹ thuật đo quang học": "ArUco Marker PPM & Bù góc phối cảnh cos(θ)",
      "Tăng tốc phần cứng": "OpenVINO Execution Provider (CPU SIMD) / TensorRT",
      "Lượng tử hóa": "Post-Training Quantization (FP32 → INT8)",
      "Kiến trúc luồng": "Decoupled Asynchronous Grabber (60 FPS zero-lag)",
      "Demo khả dụng": "Streamlit Web Dashboard & Industrial Camera Grabber"
    },
    diagram: 
`[Camera Input (60 FPS)] 
       │
       ├── (Luồng 1) Decoupled Grabber (Async Queue) ──────> Giao diện Zero-lag (<17ms)
       │
       └── (Luồng 2) Inference Worker (35 FPS)
               │
               ├──> Phát hiện ArUco Marker ──> Tính Pixel-Per-Metric (PPM) & Góc θ
               ├──> YOLOv11n-seg ─────────────> Tách Mask & Khớp Ellipse Fitting
               │
               └──> Trích xuất Vector 12D [Area, Axes, Aspect, Solidity, ...]
                       │
                       └──> Mạng Hồi Quy MLP (ONNX INT8) ──> Khối lượng (Gram) & Thể tích 3D`,
    star: {
      situation: "Dây chuyền phân loại công nghiệp cần đo khối lượng vật thể trực tiếp trên băng chuyền mà không làm dừng luồng di chuyển. Camera thông thường bị sai lệch lớn khi khoảng cách và góc nghiêng thay đổi.",
      task: "Thiết kế pipeline thị giác máy tính biên (Edge AI) chạy ở tần số 60 FPS, độ trễ phản hồi < 20ms, sai số ước lượng khối lượng dưới 3%.",
      action: "Thiết kế kiến trúc Decoupled Asynchronous Pipeline (tách luồng Camera Grabber khỏi luồng AI Worker); kết hợp hình học chiều sâu phối cảnh (ArUco PPM) với mạng MLP 12 đặc trưng; lượng tử hóa mô hình sang INT8 bằng ONNX PTQ.",
      result: "Triệt tiêu 100% hiện tượng trễ tích lũy khung hình, camera đạt 60 FPS mượt mà, dung lượng mô hình giảm 50%, thời gian suy luận tăng tốc 1.8x."
    }
  },
  {
    id: "detect-face",
    title: "InsightFace FaceID CyberHUD & Microservice (FastAPI + ChromaDB)",
    role: "Backend & Vision Engineer",
    category: "vision",
    metricPill: "<50ms Nhận diện • ChromaDB Vector Search • Android APK",
    shortDesc: "Dịch vụ nhận diện khuôn mặt sinh trắc học chuẩn microservice hiệu năng cao, trích xuất 512D facial embedding, lưu trữ và đối soát vector bằng ChromaDB, kèm client Android CyberHUD độc lập.",
    repoPath: "d:\\PROJECTS\\detect-face",
    githubUrl: "https://github.com/VuongQuocHoa/detect-face",
    demoGuide: "FastAPI Swagger Docs (http://localhost:8000/docs) | File APK cài đặt: dist/FaceID_CyberHUD.apk",
    tags: ["FastAPI", "InsightFace Buffalo_l", "ChromaDB", "Cosine Similarity", "Android APK", "OpenVINO", "PWA WebAPK"],
    specs: {
      "Mô hình": "InsightFace Buffalo_l (Face Detection + 512D Embedding)",
      "Cơ sở dữ liệu Vector": "ChromaDB Persistent Collection (Cosine Distance)",
      "Kiến trúc giao tiếp": "FastAPI RESTful Endpoints (Multipart upload)",
      "Nền tảng Client": "Android APK độc lập & Giao diện PWA WebAPK",
      "Thuật toán ổn định": "Anti-ghosting motion filter & Stranger pinning tracking",
      "Demo khả dụng": "FastAPI Swagger UI & Android CyberHUD APK"
    },
    diagram:
`[Android Phone / Webcam Client]
       │ (Stream frames qua HTTP Multipart / WebSocket)
       ▼
[FastAPI Gateway (Uvicorn / OpenVINO)]
       │
       ├──> InsightFace Detector ──────> Bounding box & Landmark 5 điểm
       │
       ├──> Trích xuất 512D Vector ───> Chuẩn hóa L2-norm
       │
       └──> ChromaDB Collection Query ──> Cosine Distance Matching
               │
               ├── Khoảng cách < Threshold ──> Nhận diện danh tính
               └── Khoảng cách >= Threshold ─> Gắn nhãn 'Stranger' & Khóa tọa độ`,
    star: {
      situation: "Hệ thống kiểm soát an ninh hoặc điểm danh sinh trắc học thường bị giật lag, rung khung nhận diện khi người dùng di chuyển nhanh và khó kết nối thiết bị cầm tay.",
      task: "Xây dựng microservice backend nhận diện khuôn mặt độ trễ thấp, tích hợp vector database có khả năng mở rộng và đóng gói ứng dụng di động cho nhân viên.",
      action: "Xây dựng REST API bằng FastAPI, trích xuất 512D embedding bằng InsightFace Buffalo_l và truy vấn Cosine Similarity trên ChromaDB; tối ưu bộ nhớ đệm OpenVINO; lập trình thuật toán anti-ghosting và đóng gói file APK Android.",
      result: "Thời gian phản hồi nhận diện < 50ms, vận hành ổn định trên mạng LAN nội bộ, loại bỏ hoàn toàn hiện tượng rung giật khung hình."
    }
  },
  {
    id: "mobiagri-app",
    title: "MobiAgri — Nền Tảng Chuyển Đổi Số Nông Nghiệp & Quản Lý Vùng Trồng",
    role: "Full-Stack Developer",
    category: "fullstack",
    metricPill: "Full-Stack React + Prisma • Chuẩn VietGAP • B2B Dashboard",
    shortDesc: "Hệ thống ERP số hóa vùng nguyên liệu cho Hợp tác xã (HTX) và đội sản xuất: quản lý hộ nông dân, nhật ký phân bón/thuốc bảo vệ thực vật, theo dõi chu kỳ mùa vụ và dashboard dự báo sản lượng cho siêu thị.",
    repoPath: "d:\\PROJECTS\\mobiagri-app",
    githubUrl: "https://github.com/VuongQuocHoa/mobiagri-app",
    demoGuide: "React 18 + Vite Farm ERP (http://localhost:5173) & Express RESTful API Backend",
    tags: ["React 18", "Vite", "Node.js", "Express", "Prisma ORM", "SQLite", "REST API", "Responsive CSS"],
    specs: {
      "Kiến trúc Frontend": "React 18 + Vite, Component-driven, CSS Variables",
      "Backend": "Node.js Express RESTful Architecture",
      "Quản trị CSDL": "Prisma ORM với mô hình quan hệ chặt chẽ",
      "Tính năng cốt lõi": "Nhật ký canh tác, Dự báo sản lượng, Quản lý kho",
      "Demo khả dụng": "Giao diện quản trị HTX & Xã viên thời gian thực"
    },
    diagram:
`[Nông dân / HTX / Siêu thị]
       │ (Giao diện React / Vite tương tác tức thời)
       ▼
[Express.js RESTful API Controller]
       │
       ├──> Authentication & Role-based Access Control
       ├──> VietGAP Farming Diary Engine (Validation lịch bón phân/phun thuốc)
       ├──> Yield Forecaster (Tính toán sản lượng theo hecta & thời vụ)
       │
       ▼
[Prisma ORM Layer] ──> [Relational SQLite / PostgreSQL Storage]`,
    star: {
      situation: "Hợp tác xã ghi chép mùa vụ thủ công trên giấy tờ rời rạc, dễ thất lạc, không chứng minh được nguồn gốc minh bạch theo tiêu chuẩn VietGAP khi cung ứng cho các chuỗi bán lẻ.",
      task: "Xây dựng nền tảng quản trị tập trung số hóa toàn bộ dữ liệu nông hộ và chu kỳ mùa vụ, tự động tổng hợp báo cáo kiểm định.",
      action: "Thiết kế schema dữ liệu quan hệ với Prisma ORM, xây dựng REST API Express phân quyền nhiều cấp và giao diện React thân thiện với người nông dân.",
      result: "Số hóa 100% hồ sơ canh tác, cắt giảm 80% thời gian làm báo cáo cuối vụ, cung cấp dashboard giúp HTX chốt hợp đồng thu mua trước mùa gặt 2-3 tuần."
    }
  },
  {
    id: "coze-agent",
    title: "Coze AI Agent — Web Chat & API Streaming Gateway",
    role: "AI Agent & Full-Stack Engineer",
    category: "agent",
    metricPill: "Coze API v3 • SSE Real-Time Streaming • Node.js Proxy & Vercel Edge",
    shortDesc: "Hệ sinh thái kết nối ByteDance Coze API v3 toàn diện: Giao diện Web SPA cao cấp, Reverse Proxy chống CORS không phụ thuộc thư viện ngoài, Serverless Edge Function và Client Python Terminal cho nghiệp vụ số hóa nhật ký canh tác VietGAP.",
    repoPath: "d:\\PROJECTS\\coze-agent",
    githubUrl: "https://github.com/VuongQuocHoa/coze-agent",
    demoGuide: "Web Chat (http://localhost:3000) & Python Terminal (python chat.py)",
    tags: ["Coze API v3", "LLM Streaming SSE", "Node.js", "Python", "Vercel Serverless", "VietGAP Farm Logging"],
    specs: {
      "Mô hình AI": "ByteDance Coze Bot API v3 (Streaming Mode)",
      "Kiến trúc Proxy": "Node.js Native HTTP Reverse Proxy + Vercel Serverless Function",
      "Giao thức mạng": "Server-Sent Events (SSE) với thuật toán Deduplication khử lặp chữ",
      "Giao diện người dùng": "Single Page App (TailwindCSS, Marked.js, Highlight.js, Dark Mode)",
      "Độ trễ": "Phản hồi dòng chảy tức thời (<150ms TTFB)",
      "Kịch bản nghiệp vụ": "Số hóa nhật ký nông nghiệp VietGAP tự động trích xuất thực thể"
    },
    diagram:
`[Web Chat SPA / Python CLI] ──> [Node.js Proxy / Vercel Function] (CORS & Token Masking)
                                                │
                                                ▼ (SSE Stream POST /v3/chat)
                                       [Coze AI Agent Cloud]
                                                │
                    ┌───────────────────────────┴───────────────────────────┐
                    ▼                                                       ▼
        [Deduplication Filter]                                 [VietGAP Entity Parsing]
    (Khử lặp delta & token rác)                          (Cây trồng, Lô thửa, Liều lượng)
                    │                                                       │
                    ▼                                                       ▼
        [Hiển thị gõ chữ mượt mà]                             [Chuẩn hóa dữ liệu mùa vụ]`,
    star: {
      situation: "Nông dân và cán bộ nông nghiệp cần công cụ số hóa nhật ký mùa vụ chuẩn VietGAP; đồng thời kết nối trực tiếp Coze API v3 từ trình duyệt gặp rào cản về bảo mật API Key, lỗi CORS và xung đột lặp chữ khi nhận SSE.",
      task: "Xây dựng hệ thống Web Chat & Gateway bảo mật, tối ưu luồng truyền tải thời gian thực và tự động hóa quy trình ghi chép nhật ký nông nghiệp.",
      action: "Phát triển Reverse Proxy Node.js thuần (Zero-dependency, Hot-reload .env) và Vercel Serverless; lập trình thuật toán SSE Deduplication lọc token rác; xây dựng Web SPA Dark Mode và client Python dòng lệnh.",
      result: "Cắt giảm 90% thời gian nhập liệu, độ trễ hiển thị tức thì (<150ms), hỗ trợ triển khai linh hoạt cả ở máy chủ cục bộ lẫn môi trường Cloud Serverless Vercel."
    }
  },
  {
    id: "follow-chronos",
    title: "Chronos Pro Life OS — Hệ Điều Hành 24 Giờ & Cân Bằng Năng Lượng",
    role: "Frontend Architect",
    category: "fullstack",
    metricPill: "100/100 Lighthouse • 0 External Dependencies • Pure ES6 Modules",
    shortDesc: "Ứng dụng web trực quan hóa 1.440 phút trong ngày theo vòng tròn năng lượng 24h, tích hợp cảm biến trình duyệt, thuật toán phân bổ góc Canvas/SVG và chatbot quy tắc nội bộ không độ trễ.",
    repoPath: "d:\\PROJECTS\\follow",
    githubUrl: "https://github.com/VuongQuocHoa/chronos-life-os",
    demoGuide: "Trải nghiệm trực tiếp trên trình duyệt: http://localhost:8080 (100/100 Lighthouse)",
    tags: ["Vanilla JS (ES6 Modules)", "HTML5 Canvas/SVG", "CSS Glassmorphism", "Browser Sensors", "Rule Engine", "Node.js"],
    specs: {
      "Công nghệ": "Pure JavaScript ES6 Modules (Không framework cồng kềnh)",
      "Hiệu năng": "60 FPS rendering, < 50KB kích thước tệp tải",
      "Bảo mật": "100% Client-side local persistence (localStorage)",
      "Tính năng": "Native Rule Chatbot, Live Tracker, Circular Geometry Math",
      "Demo khả dụng": "Giao diện Web 24h Circular Life OS chạy tức thì"
    },
    diagram:
`[Browser Sensors & Time Engine] ──> [Chronos Core State Manager]
                                             │
                       ┌─────────────────────┼─────────────────────┐
                       ▼                     ▼                     ▼
              [24h Circular Wheel]    [Balance Metrics]     [Native Rule AI Chat]
               (SVG/Canvas Math)     (Productivity score)  (Zero-latency NLP)`,
    star: {
      situation: "Ứng dụng quản trị thời gian truyền thống thường nặng nề, phụ thuộc nhiều thư viện bên thứ ba và khó hình dung chu kỳ 24 giờ một cách trực quan.",
      task: "Phát triển Life OS siêu nhẹ, visual hóa 1.440 phút trong ngày với tốc độ mở trang tức thì và hoạt ảnh 60 FPS.",
      action: "Tự viết toàn bộ logic toán học hình học SVG/Canvas, xây dựng ứng dụng bằng ES Modules thuần túy không dùng framework, tích hợp rule-based chatbot ngay trong trình duyệt.",
      result: "Đạt điểm tối đa 100/100 trên Google Lighthouse, khởi động trong < 100ms, mang lại trải nghiệm thị giác ấn tượng."
    }
  },
  {
    id: "shopee-sniper",
    title: "Shopee Deal Sniper & High-Frequency Price Scraper",
    role: "Automation Engineer",
    category: "automation",
    metricPill: "Realtime Telegram Alert • Deal Scoring Engine • Anti Rate-Limit",
    shortDesc: "Bot cào dữ liệu đa luồng quét sản phẩm Flash Sale trên sàn TMĐT Shopee, áp dụng thuật toán chấm điểm deal hời và bắn cảnh báo tức thời về điện thoại qua Telegram Webhook.",
    repoPath: "d:\\PROJECTS\\shopee-deal-sniper",
    githubUrl: "https://github.com/VuongQuocHoa/shopee-deal-sniper",
    demoGuide: "Giao diện giám sát Deal thời gian thực (http://localhost:3000) & Bot Telegram Alert",
    tags: ["Node.js", "Express", "Telegram Bot API", "Web Scraping", "Data Filtering", "Anti Rate-limit"],
    specs: {
      "Thuật toán": "filterAndScoreItems (Đánh giá chiết khấu, uy tín shop)",
      "Cơ chế tránh khóa IP": "Adaptive polling & Ring buffer ID de-duplication",
      "Hệ thống thông báo": "Telegram Bot Webhook gửi kèm ảnh, giá gốc & giá sale",
      "Kiểm soát bộ nhớ": "Buffer vòng tròn 100 deals bảo vệ RAM",
      "Demo khả dụng": "Web Dashboard kiểm soát & Bot Telegram thời gian thực"
    },
    diagram:
`[Shopee API / Web Endpoints] ──> [Scraper Module] ──> [Filter & Scoring Engine]
                                                              │
                                      ┌───────────────────────┴───────────────────────┐
                                      ▼                                               ▼
                         [Ring Buffer (100 Deals)]                       [Telegram Bot Webhook Alert]`,
    star: {
      situation: "Các deal giảm giá sốc trên sàn TMĐT thường biến mất trong vài phút khiến người mua bỏ lỡ cơ hội.",
      task: "Xây dựng hệ thống tự động quét liên tục, chấm điểm mức độ hời và gửi cảnh báo về điện thoại ngay khi deal mở.",
      action: "Thiết kế backend Node.js với thuật toán chấm điểm deal, cơ chế lọc trùng lặp ID bộ nhớ và tích hợp Telegram Bot Webhook API.",
      result: "Bắt trọn các deal giảm sâu > 50%, thông báo đến điện thoại người dùng trong vòng < 3 giây sau khi sản phẩm lên kệ."
    }
  },
  {
    id: "fb-ai-bot",
    title: "Fanpage AI Customer Assistant (Google Gemini 1.5 Flash)",
    role: "AI Engineer",
    category: "agent",
    metricPill: "Google Gemini 1.5 Flash • Auto Lead Collection • 24/7 Operations",
    shortDesc: "Trợ lý bán hàng thông minh tích hợp Facebook Messenger qua Graph API, sử dụng Google Gemini 1.5 Flash để tự động tư vấn sản phẩm, thấu hiểu ngữ cảnh và thu thập số điện thoại đặt hàng.",
    repoPath: "d:\\PROJECTS\\fb-ai-bot",
    githubUrl: "https://github.com/VuongQuocHoa/fb-ai-bot",
    demoGuide: "Messenger Graph Webhook & Giao diện Live Transaction Logger: http://localhost:3000",
    tags: ["Node.js", "Google Gemini API", "Facebook Graph API", "Webhooks", "Live Logging", "Prompt Engineering"],
    specs: {
      "Mô hình": "Google Gemini 1.5 Flash",
      "Giao tiếp": "Facebook Messenger Graph API Webhook",
      "Mục tiêu": "Tự động tư vấn & Thu thập Lead (Tên + Số điện thoại)",
      "Giám sát": "Live Transaction Logging Dashboard",
      "Demo khả dụng": "Giao diện mô phỏng hội thoại Messenger & Giám sát Live Logs"
    },
    diagram:
`[Khách hàng nhắn tin Messenger] ──> [Node.js Express Webhook] ──> [Google Gemini 1.5 Flash]
                                                                            │
                                                                            ▼
                                                                [Phản hồi khách hàng < 1.5s]
                                                                [Lưu trữ Lead & Live Log]`,
    star: {
      situation: "Fanpage bán hàng bị quá tải tin nhắn vào ban đêm và giờ cao điểm, dẫn đến mất khách hàng tiềm năng do không ai trực trả lời.",
      task: "Tích hợp mô hình ngôn ngữ lớn (LLM) phản hồi tự nhiên, giải đáp thắc mắc và tự động xin số điện thoại để nhân viên chốt đơn.",
      action: "Tích hợp Google Gemini 1.5 Flash vào webhook của Facebook Messenger, tinh chỉnh System Prompt theo phễu bán hàng và thiết kế hệ thống Live Transaction Logging.",
      result: "Phản hồi tin nhắn 100% trong 1-2 giây, tự động thu thập hàng trăm số điện thoại khách hàng tiềm năng mà không cần nhân sự trực ca đêm."
    }
  },
  {
    id: "d-fake-agent",
    title: "Autonomous Market News AI Agent (LangChain + Telegram)",
    role: "AI Agent Engineer",
    category: "agent",
    metricPill: "LangChain • RSS Web Scraping • APScheduler",
    shortDesc: "Agent AI tự động cào tin tức tài chính thị trường từ các nguồn RSS, sử dụng LangChain và OpenAI để trích xuất các ý chính và tự động phát bản tin lên Telegram.",
    repoPath: "d:\\PROJECTS\\d-fake",
    githubUrl: "https://github.com/VuongQuocHoa/ai-market-agent",
    demoGuide: "LangChain RSS Pipeline & Kênh phát tin Telegram tự động (python main.py)",
    tags: ["Python", "LangChain", "OpenAI", "BeautifulSoup4", "Feedparser", "APScheduler", "Telegram Bot"],
    specs: {
      "Khung Agent": "LangChain Summarization Chain",
      "Lập lịch tác vụ": "APScheduler định kỳ tự động",
      "Trích xuất": "Feedparser (RSS) + BeautifulSoup4 HTML parser",
      "Kênh phát hành": "Telegram Channel / Group Bot Dispatcher",
      "Demo khả dụng": "Kịch bản cào tin tức & Tóm tắt phát sóng Telegram"
    },
    diagram:
`[Financial News RSS / Web] ──> [Feedparser & BeautifulSoup4] ──> [LangChain Agent] ──> [Telegram Dispatcher]`,
    star: {
      situation: "Khối lượng tin tức tài chính mỗi ngày quá lớn, gây quá tải thông tin và mất nhiều giờ để chắt lọc biến động quan trọng.",
      task: "Tự động hóa quy trình thu thập tin, tóm tắt theo gạch đầu dòng chiến lược và gửi bản tin mỗi sáng.",
      action: "Ứng dụng LangChain tạo chuỗi tóm tắt tóm lược sự kiện nổi bật, lập lịch tự động bằng APScheduler và đẩy thông báo sang kênh Telegram.",
      result: "Tiết kiệm 95% thời gian đọc báo mỗi ngày, tạo báo cáo súc tích với góc nhìn thị trường sắc bén."
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
        <p>Không tìm thấy dự án phù hợp với từ khóa.</p>
        <button class="btn btn-outline" style="margin-top: 0.75rem;" onclick="resetFilters()">Xem tất cả dự án</button>
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(p => `
    <article class="project-card-clean" data-category="${p.category}">
      <div class="proj-top">
        <div class="proj-title-group">
          <h3>${p.title}</h3>
          <p class="proj-role-meta">Vai trò: ${p.role}</p>
        </div>
        <span class="proj-metrics">${p.metricPill}</span>
      </div>

      <p class="proj-summary">${p.shortDesc}</p>

      <!-- Demo Info Strip -->
      <div style="background: rgba(56, 189, 248, 0.05); border: 1px dashed rgba(56, 189, 248, 0.25); padding: 0.45rem 0.75rem; border-radius: 4px; font-size: 0.8rem; margin-bottom: 0.9rem; display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: var(--text-accent); font-weight: 700;">▶ DEMO / TRẢI NGHIỆM:</span>
        <span style="color: #cbd5e1; font-family: var(--font-mono);">${p.demoGuide}</span>
      </div>

      <ul class="star-bullets">
        <li class="star-bullet-item">
          <span class="star-tag tag-s">BỐI CẢNH</span>
          <div><strong>Vấn đề & Bối cảnh:</strong> ${p.star.situation}</div>
        </li>
        <li class="star-bullet-item">
          <span class="star-tag tag-a">GIẢI PHÁP</span>
          <div><strong>Kiến trúc & Kỹ thuật:</strong> ${p.star.action}</div>
        </li>
        <li class="star-bullet-item">
          <span class="star-tag tag-r">KẾT QUẢ</span>
          <div><strong>Chỉ số đo lường:</strong> ${p.star.result}</div>
        </li>
      </ul>

      <div class="proj-footer">
        <div class="proj-tech-badges">
          ${p.tags.map(t => `<span class="tech-tag-sm">${t}</span>`).join("")}
        </div>
        <div class="proj-actions no-print">
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="text-decoration: none;" title="Xem mã nguồn trên GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>GitHub</span>
          </a>
          <button class="btn btn-primary" onclick="openProjectModal('${p.id}')">
            <span>Chi tiết &amp; Sơ đồ</span>
          </button>
          <button class="btn btn-outline" onclick="copyPath('${p.repoPath}')" title="Sao chép đường dẫn mã nguồn cục bộ">
            <span>📁 Mã nguồn</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// Filter & Search Logic
let currentFilter = "all";
function setupFilterAndSearch() {
  const buttons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("projectSearch");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFilterAndSearch();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilterAndSearch);
  }
}

function applyFilterAndSearch() {
  const searchInput = document.getElementById("projectSearch");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filtered = projectsData.filter(p => {
    const matchCategory = (currentFilter === "all") || (p.category === currentFilter);
    const matchQuery = !query || 
      p.title.toLowerCase().includes(query) ||
      p.shortDesc.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query));

    return matchCategory && matchQuery;
  });

  renderProjects(filtered);
}

function resetFilters() {
  currentFilter = "all";
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(b => {
    if (b.dataset.filter === "all") b.classList.add("active");
    else b.classList.remove("active");
  });
  const searchInput = document.getElementById("projectSearch");
  if (searchInput) searchInput.value = "";
  renderProjects(projectsData);
}

// Modal Handlers
function openProjectModal(id) {
  const p = projectsData.find(item => item.id === id);
  if (!p) return;

  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalBody = document.getElementById("modalBody");

  if (modalTitle) modalTitle.textContent = p.title;
  if (modalSubtitle) modalSubtitle.textContent = `Vị trí: ${p.role} • ${p.metricPill}`;

  if (modalBody) {
    modalBody.innerHTML = `
      <div style="margin-bottom: 1rem; color: #9ca3af; font-size: 0.9rem; line-height: 1.6;">
        ${p.shortDesc}
      </div>

      <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.3); padding: 0.75rem 1rem; border-radius: 6px; margin-bottom: 1.25rem;">
        <div style="font-size: 0.75rem; text-transform: uppercase; color: #38bdf8; font-weight: 700; font-family: var(--font-mono);">
          ▶ Hướng dẫn chạy thử Demo:
        </div>
        <div style="font-size: 0.875rem; color: #ffffff; margin-top: 0.25rem; font-family: var(--font-mono);">
          ${p.demoGuide}
        </div>
      </div>

      <h4 style="font-size: 0.95rem; color: #38bdf8; margin: 1rem 0 0.5rem; text-transform: uppercase; font-family: var(--font-mono);">
        📐 Thông Số Kỹ Thuật (Technical Specs)
      </h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.6rem; margin-bottom: 1.25rem;">
        ${Object.entries(p.specs).map(([label, val]) => `
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 0.6rem; border-radius: 4px;">
            <div style="font-size: 0.7rem; color: #6b7280; font-family: var(--font-mono); text-transform: uppercase;">${label}</div>
            <div style="font-size: 0.85rem; color: #f9fafb; font-weight: 500; margin-top: 0.2rem;">${val}</div>
          </div>
        `).join("")}
      </div>

      <h4 style="font-size: 0.95rem; color: #38bdf8; margin: 1rem 0 0.5rem; text-transform: uppercase; font-family: var(--font-mono);">
        ⚡ Sơ Đồ Kiến Trúc Hệ Thống (Architecture Flow)
      </h4>
      <pre class="diagram-block">${p.diagram}</pre>

      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; gap: 0.5rem;">
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="text-decoration: none;">
            Xem GitHub Repository ↗
          </a>
          <button class="btn btn-primary" onclick="copyPath('${p.repoPath}')">
            Sao chép đường dẫn cục bộ
          </button>
        </div>
      </div>
    `;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function setupModalHandlers() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("closeModalBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

// Copy Helper & Toast
function copyPath(path) {
  navigator.clipboard.writeText(path).then(() => {
    showToast(`Đã sao chép đường dẫn: ${path}`);
  }).catch(() => {
    showToast(`Đường dẫn dự án: ${path}`);
  });
}

function showToast(text) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
