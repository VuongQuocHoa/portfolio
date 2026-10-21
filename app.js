/**
 * MINIMALIST TECH CV & PORTFOLIO ENGINE
 * Candidate: Quốc Hòa
 * Target: Applied AI & Full-Stack Software Engineer
 */

const projectsData = [
  {
    id: "predict-mass",
    title: "Edge AI Predict Mass — Dự Đoán Khối Lượng Vật Thể Qua Camera & AI",
    role: "Lead AI Engineer",
    category: "vision",
    metricPill: "60 FPS Pipeline • INT8 PTQ (-50% RAM) • <17ms Latency",
    shortDesc: "Hệ thống thị giác máy tính công nghiệp đo lường kích thước 3D và ước lượng khối lượng vật thể thời gian thực qua camera đơn, kết hợp quang học chiều sâu phối cảnh và mạng nơ-ron hồi quy bù sai số.",
    repoPath: "d:\\PROJECTS\\predict-mass",
    tags: ["YOLOv11n-seg", "OpenCV", "ONNX Runtime", "OpenVINO", "PTQ INT8", "Perspective Geometry", "Streamlit", "Python"],
    specs: {
      "Mô hình AI": "YOLOv11n-seg (Nano) + MLP Regressor 12D",
      "Kỹ thuật đo quang học": "ArUco Marker PPM & Bù góc phối cảnh cos(θ)",
      "Tăng tốc phần cứng": "OpenVINO Execution Provider (CPU SIMD) / TensorRT",
      "Lượng tử hóa": "Post-Training Quantization (FP32 → INT8)",
      "Kiến trúc luồng": "Decoupled Asynchronous Grabber (60 FPS zero-lag)"
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
    tags: ["FastAPI", "InsightFace Buffalo_l", "ChromaDB", "Cosine Similarity", "Android APK", "OpenVINO", "PWA WebAPK"],
    specs: {
      "Mô hình": "InsightFace Buffalo_l (Face Detection + 512D Embedding)",
      "Cơ sở dữ liệu Vector": "ChromaDB Persistent Collection (Cosine Distance)",
      "Kiến trúc giao tiếp": "FastAPI RESTful Endpoints (Multipart upload)",
      "Nền tảng Client": "Android APK độc lập & Giao diện PWA WebAPK",
      "Thuật toán ổn định": "Anti-ghosting motion filter & Stranger pinning tracking"
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
    tags: ["React 18", "Vite", "Node.js", "Express", "Prisma ORM", "SQLite", "REST API", "Responsive CSS"],
    specs: {
      "Kiến trúc Frontend": "React 18 + Vite, Component-driven, CSS Variables",
      "Backend": "Node.js Express RESTful Architecture",
      "Quản trị CSDL": "Prisma ORM với mô hình quan hệ chặt chẽ",
      "Tính năng cốt lõi": "Nhật ký canh tác, Dự báo sản lượng, Quản lý kho",
      "Đối tượng sử dụng": "Hợp tác xã nông nghiệp, Nông dân, Thương lái & Siêu thị"
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
    title: "Edu-Farm IoT Smart Wearable & Voice-to-Coze AI Agent",
    role: "AI Agent Engineer",
    category: "agent",
    metricPill: "Voice-to-Text • Coze API v3 Streaming (SSE) • Google Sheets Sync",
    shortDesc: "Hệ thống mô phỏng thiết bị đeo IoT thu âm giọng nói tiếng Việt tự nhiên của nông dân ngoài đồng, tự động trích xuất thực thể canh tác có cấu trúc bằng Coze LLM và đồng bộ Google Sheets.",
    repoPath: "d:\\PROJECTS\\coze-agent",
    tags: ["Coze API v3", "LLM Streaming SSE", "Python", "Speech-to-Text", "Google Sheets API", "IoT Simulation"],
    specs: {
      "Mô hình AI": "ByteDance Coze Bot API v3 (Streaming Mode)",
      "Đầu vào": "Giọng nói tiếng Việt tự nhiên (Speech Audio Stream)",
      "Đầu ra cấu trúc": "JSON Schema: [Thửa đất, Loại phân bón, Liều lượng, Thời gian]",
      "Tích hợp tự động": "Webhook đồng bộ bảng tính Google Sheets thời gian thực",
      "Độ trễ": "Phản hồi dòng chảy (Server-Sent Events) tức thì"
    },
    diagram:
      `[Giọng nói nông dân] ──> [Speech-to-Text] ──> [Python Streaming Gateway]
                                                    │
                                                    ▼ (Coze API v3 SSE Stream)
                                            [Coze AI Agent Engine]
                                                    │
                        ┌───────────────────────────┴───────────────────────────┐
                        ▼                                                       ▼
            [Trích xuất Entities JSON]                              [Phản hồi xác nhận giọng nói]
        (Thửa đất, Loại thuốc, Liều lượng)                              (Tự động đọc lại)
                        │
                        ▼
              [Google Sheets Sync]`,
    star: {
      situation: "Nông dân lao động ngoài đồng tay lấm lem khó gõ điện thoại để nhập nhật ký canh tác theo lịch kiểm định nghiêm ngặt.",
      task: "Tạo giải pháp rảnh tay (hands-free) bằng giọng nói tiếng Việt, tự động bóc tách dữ liệu chuẩn hóa và lưu trữ trực tuyến.",
      action: "Tích hợp Speech-to-Text với Coze API v3 Streaming (Server-Sent Events), thiết kế Structured Prompt trích xuất thực thể theo mẫu VietGAP và tự động ghi vào Google Sheets API.",
      result: "Giảm 90% thời gian nhập liệu, tỷ lệ hoàn thành nhật ký canh tác đạt 100%, nông dân chỉ cần nói tự nhiên 1 câu là dữ liệu đã được lưu chuẩn xác."
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
    tags: ["Vanilla JS (ES6 Modules)", "HTML5 Canvas/SVG", "CSS Glassmorphism", "Browser Sensors", "Rule Engine", "Node.js"],
    specs: {
      "Công nghệ": "Pure JavaScript ES6 Modules (Không framework cồng kềnh)",
      "Hiệu năng": "60 FPS rendering, < 50KB kích thước tệp tải",
      "Bảo mật": "100% Client-side local persistence (localStorage)",
      "Tính năng": "Native Rule Chatbot, Live Tracker, Circular Geometry Math"
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
    tags: ["Node.js", "Express", "Telegram Bot API", "Web Scraping", "Data Filtering", "Anti Rate-limit"],
    specs: {
      "Thuật toán": "filterAndScoreItems (Đánh giá chiết khấu, uy tín shop)",
      "Cơ chế tránh khóa IP": "Adaptive polling & Ring buffer ID de-duplication",
      "Hệ thống thông báo": "Telegram Bot Webhook gửi kèm ảnh, giá gốc & giá sale",
      "Kiểm soát bộ nhớ": "Buffer vòng tròn 100 deals bảo vệ RAM"
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
    tags: ["Node.js", "Google Gemini API", "Facebook Graph API", "Webhooks", "Live Logging", "Prompt Engineering"],
    specs: {
      "Mô hình": "Google Gemini 1.5 Flash",
      "Giao tiếp": "Facebook Messenger Graph API Webhook",
      "Mục tiêu": "Tự động tư vấn & Thu thập Lead (Tên + Số điện thoại)",
      "Giám sát": "Live Transaction Logging Dashboard"
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
    tags: ["Python", "LangChain", "OpenAI", "BeautifulSoup4", "Feedparser", "APScheduler", "Telegram Bot"],
    specs: {
      "Khung Agent": "LangChain Summarization Chain",
      "Lập lịch tác vụ": "APScheduler định kỳ tự động",
      "Trích xuất": "Feedparser (RSS) + BeautifulSoup4 HTML parser",
      "Kênh phát hành": "Telegram Channel / Group Bot Dispatcher"
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
        <span style="font-family: var(--font-mono); font-size: 0.775rem; color: #6b7280;">
          📁 Local Repo: <code>${p.repoPath}</code>
        </span>
        <button class="btn btn-primary" onclick="copyPath('${p.repoPath}')">
          Sao chép đường dẫn
        </button>
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
