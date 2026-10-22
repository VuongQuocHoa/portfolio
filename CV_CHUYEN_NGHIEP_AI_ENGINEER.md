# VƯƠNG QUỐC HÒA
**APPLIED AI & FULL-STACK SOFTWARE ENGINEER**

- **Địa điểm:** TP. Hồ Chí Minh, Việt Nam
- **Email:** [hoalkasd@gmail.com](mailto:hoalkasd@gmail.com)
- **Điện thoại / Zalo:** [0399911382](tel:0399911382)
- **GitHub:** [https://github.com/VuongQuocHoa](https://github.com/VuongQuocHoa)
- **Vị trí ứng tuyển:** AI Engineer / Computer Vision Engineer / Full-Stack Software Engineer
- **Tình trạng:** Sẵn sàng tiếp nhận công việc (Full-time / On-site / Remote)

---

## 🌟 01. TÓM TẮT NĂNG LỰC CỐT LÕI (PROFESSIONAL SUMMARY)

Kỹ sư phần mềm tập trung vào **Ứng dụng AI thực chiến (Applied AI)**, **Thị giác máy tính (Computer Vision)** và **Kiến trúc hệ thống Full-Stack**. 
- **Cầu nối AI & Production:** Có năng lực làm chủ trọn vẹn vòng đời sản phẩm từ nghiên cứu mô hình, tối ưu hóa suy luận trên phần cứng biên (Edge AI, Lượng tử hóa INT8 PTQ, OpenVINO, pipeline bất đồng bộ **60 FPS zero-lag**) đến triển khai microservice phân tán (FastAPI, ChromaDB Vector DB) và phát triển ứng dụng người dùng cuối hoàn chỉnh (React 18, Vite, Node.js, Android APK).
- **Tư duy kỹ thuật định lượng (Metrics-Driven):** Luôn đo lường hiệu năng bằng số liệu thực tế (độ trễ <17ms, tiết kiệm 50% RAM, Lighthouse 100/100, triệt tiêu 100% nghẽn cổ chai).
- **Tác phong làm việc:** Chủ động nhận trách nhiệm trọn gói (End-to-End Ownership), cam kết chất lượng mã nguồn tinh gọn và giải quyết triệt để bài toán kinh doanh.

---

## 🛠 02. BẢNG NĂNG LỰC KỸ THUẬT (TECHNICAL COMPETENCIES)

| Danh mục | Công nghệ & Kỹ năng làm chủ |
| :--- | :--- |
| **AI & Computer Vision** | YOLOv11n-seg / YOLOv8, InsightFace (Buffalo_l), OpenCV, ArUco Marker PPM, Perspective Depth Geometry, Ellipse Fitting, MLP Mass Regressor. |
| **Edge AI & Tối ưu hóa** | ONNX Runtime, Post-Training Quantization (PTQ FP32 → INT8), OpenVINO Execution Provider (SIMD), TensorRT, Decoupled Asynchronous Grabber (60 FPS), Anti-ghosting motion filter. |
| **GenAI & Autonomous Agents** | ByteDance Coze API v3 (SSE Streaming), Google Gemini 1.5 Flash, LangChain, ChromaDB Persistent Vector Database, Speech-to-Text integration, Structured Prompt Engineering. |
| **Backend & Microservices** | Python (FastAPI, Uvicorn, Multiprocessing, AsyncIO), Node.js (Express), Prisma ORM, SQLite, PostgreSQL, RESTful API Design, Webhooks & SSE. |
| **Frontend & Nền tảng** | React 18, Vite, Vanilla JavaScript (ES6 Modules thuần, Zero external dependencies), HTML5 Canvas / SVG, Đóng gói ứng dụng di động Android APK. |
| **Tự động hóa & Khác** | Puppeteer, Cheerio, BeautifulSoup4, Telegram Bot Webhook, Facebook Graph API, Git / GitHub, Agile / Scrum. |

---

## 🚀 03. KINH NGHIỆM THỰC CHIẾN & DỰ ÁN KỸ THUẬT (FEATURED PROJECTS)

### 1. Lockheed DACS — Xưởng Lắp Ráp & Đánh Chặn Tên Lửa 3D (WebGL / Three.js)
*Vai trò: Lead 3D Simulation Engineer • Công nghệ: Three.js (WebGL), Pointer Lock API, WebAudio API, Physics Modeling*
- **GitHub Repository:** [https://github.com/VuongQuocHoa/lockheed-dacs](https://github.com/VuongQuocHoa/lockheed-dacs)
- **Trải nghiệm Demo:** Chạy trực tiếp trình duyệt (`http://localhost:8088`) hoặc nhấp đúp file `index.html`.
- **Bối cảnh (Situation):** Khi tên lửa bay ở tốc độ siêu thanh (Mach 3 - Mach 5), cánh lái khí động học truyền thống bị suy giảm hiệu lực lớn do sóng xung kích, khiến việc đánh chặn mục tiêu cơ động cao bị sai lệch.
- **Giải pháp (Action):**
  - Xây dựng hệ thống mô phỏng 3D thời gian thực bằng **Three.js (WebGL)**, mô hình hóa động học bay 6 bậc tự do (6-DOF) và định luật dẫn đường tỷ lệ (Proportional Navigation).
  - Lập trình hệ thống điều hướng xung lực ngang **Lockheed Martin DACS** với 4 vòi xả khí $O_2$ vuông góc trục thân, bẻ góc mũi tên lửa tức thời không có độ trễ cơ học.
  - Tích hợp Pointer Lock API cho cơ chế điều khiển góc nhìn thứ 3 (TPS PUBG/Free Fire), hiệu ứng làm chậm thời gian Bullet-Time (0.2x speed) và bộ tổng hợp âm thanh thủ tục WebAudio API (zero-mp3).
- **Kết quả (Result):** Vận hành mượt mà 60 FPS trên mọi trình duyệt, đánh chặn chính xác mục tiêu di động (UAV siêu thanh, tên lửa hành trình), mang lại trải nghiệm thị giác và kỹ thuật ấn tượng.

---

### 2. Edge AI Predict Mass — Dự Đoán Khối Lượng Vật Thể Qua Camera & AI Học Máy
*Vai trò: Lead AI Engineer • Công nghệ: YOLOv11n-seg, OpenCV, ONNX Runtime INT8, OpenVINO, Python*
- **GitHub Repository:** [https://github.com/VuongQuocHoa/predict-mass](https://github.com/VuongQuocHoa/predict-mass)
- **Trải nghiệm Demo:** Giao diện Streamlit (`http://localhost:8501`) & Luồng camera 60 FPS (`python run_camera.py`).
- **Bối cảnh (Situation):** Dây chuyền công nghiệp cần đo khối lượng sản phẩm trực tiếp trên băng chuyền di động mà không làm dừng luồng di chuyển. Camera đơn thông thường bị sai số lớn do góc nghiêng và khoảng cách quang học thay đổi.
- **Giải pháp (Action):**
  - Thiết kế kiến trúc **Decoupled Asynchronous Pipeline**: Tách riêng luồng Camera Grabber (60 FPS) đẩy khung hình vào hàng đợi bất đồng bộ khỏi luồng AI Worker (35 FPS).
  - Kết hợp phép chiếu hình học phối cảnh (ArUco Marker PPM, bù góc $\cos\theta$) với mạng nơ-ron MLP 12 chiều đặc trưng để bù trừ biến dạng phi tuyến tính.
  - Lượng tử hóa sau huấn luyện (PTQ) từ FP32 sang INT8 bằng ONNX Runtime, cấu hình OpenVINO Execution Provider tăng tốc tập lệnh SIMD trên CPU.
- **Kết quả (Result):** Triệt tiêu 100% hiện tượng trễ tích lũy khung hình, camera đạt 60 FPS mượt mà (<17ms độ trễ hiển thị), dung lượng mô hình giảm gần 50%, thời gian suy luận AI tăng tốc 1.8 lần.

---

### 2. InsightFace FaceID CyberHUD & Microservice (FastAPI + ChromaDB + Android APK)
*Vai trò: Backend & Vision Engineer • Công nghệ: FastAPI, InsightFace Buffalo_l, ChromaDB, Android APK*
- **GitHub Repository:** [https://github.com/VuongQuocHoa/detect-face](https://github.com/VuongQuocHoa/detect-face)
- **Trải nghiệm Demo:** Tài liệu API Swagger (`http://localhost:8000/docs`) & File cài đặt Android APK (`dist/FaceID_CyberHUD.apk`).
- **Bối cảnh (Situation):** Nhu cầu điểm danh và kiểm soát an ninh sinh trắc học thời gian thực đòi hỏi độ chính xác cao, lưu trữ hàng ngàn vector khuôn mặt và hỗ trợ thiết bị di động kết nối nội bộ.
- **Giải pháp (Action):**
  - Trích xuất 512D facial embedding bằng InsightFace Buffalo_l, chuẩn hóa vector và lưu vào ChromaDB persistent collection với khoảng cách Cosine Similarity.
  - Viết thuật toán chống rung lắc (anti-ghosting) và ghim người lạ (stranger pinning filter) khi khuôn mặt di chuyển nhanh.
  - Đóng gói ứng dụng Android APK độc lập cho phép quét tìm và kết nối đến AI Server qua mạng Wi-Fi nội bộ (LAN).
- **Kết quả (Result):** Thời gian phản hồi nhận diện < 50ms cho mỗi khuôn mặt, vận hành mượt mà trên cả trình duyệt PWA và app Android di động.

---

### 3. MobiAgri — Nền Tảng Chuyển Đổi Số Nông Nghiệp & Quản Lý Vùng Nguyên Liệu
*Vai trò: Full-Stack Developer • Công nghệ: React 18, Vite, Node.js, Express, Prisma ORM, SQLite*
- **GitHub Repository:** [https://github.com/VuongQuocHoa/mobiagri-app](https://github.com/VuongQuocHoa/mobiagri-app)
- **Trải nghiệm Demo:** Web App React 18 + Vite (`http://localhost:5173`) & Express RESTful API (`http://localhost:5000`).
- **Bối cảnh (Situation):** Các Hợp tác xã (HTX) ghi chép nhật ký phân bón, thuốc BVTV thủ công trên giấy, dễ thất lạc và không đủ cơ sở dữ liệu kiểm định đạt chuẩn VietGAP khi cung ứng cho chuỗi siêu thị.
- **Giải pháp (Action):**
  - Thiết kế kiến trúc CSDL quan hệ chuẩn với Prisma ORM; xây dựng hệ thống REST API Express phân quyền nhiều cấp (Admin HTX, Xã viên).
  - Phát triển giao diện React Vite hiện đại, tối ưu trải nghiệm nhập liệu trực tiếp trên điện thoại ngoài ruộng.
- **Kết quả (Result):** Số hóa 100% dữ liệu mùa vụ, cắt giảm 80% thời gian tổng hợp báo cáo kiểm định, cung cấp dashboard giúp HTX chủ động đàm phán hợp đồng thu mua trước mùa gặt 2-3 tuần.

---

### 4. Coze AI Agent — Web Chat & API Streaming Gateway (VietGAP Farming Logging)
*Vai trò: AI Agent & Full-Stack Engineer • Công nghệ: ByteDance Coze API v3, SSE Streaming, Node.js Proxy, Vercel Serverless, Python CLI*
- **GitHub Repository:** [https://github.com/VuongQuocHoa/coze-agent](https://github.com/VuongQuocHoa/coze-agent)
- **Trải nghiệm Demo:** Web Chat SPA (`http://localhost:3000`) & Python Terminal Streaming Client (`python chat.py`).
- **Bối cảnh (Situation):** Kỹ thuật viên nông nghiệp và nông dân cần giải pháp số hóa nhật ký canh tác chuẩn VietGAP nhanh chóng; đồng thời việc kết nối trực tiếp ByteDance Coze API v3 từ trình duyệt gặp rào cản nghiêm trọng về bảo mật API Key, lỗi CORS và hiện tượng lặp/giật chữ khi nhận luồng Server-Sent Events (SSE).
- **Giải pháp (Action):**
  - Xây dựng cổng trung gian Reverse Proxy bằng Node.js thuần (Zero-dependency, Hot-reload `.env`) và Vercel Serverless Function (`api/coze.js`) giải quyết triệt để lỗi CORS và bảo mật Token ở phía server.
  - Phát triển thuật toán khử trùng lặp (Deduplication) luồng SSE giữa các sự kiện `conversation.message.delta` và `completed`, tự động lọc bỏ các token hệ thống rác.
  - Thiết lập kịch bản nghiệp vụ VietGAP tự động dẫn dắt và chuẩn hóa thực thể mùa vụ [Cây trồng, Lô thửa, Hoạt động, Liều lượng, Người thực hiện].
  - Xây dựng giao diện Web Chat Dark Mode cao cấp (TailwindCSS, Marked.js, Highlight.js, LocalStorage đa phiên) và client Python độc lập (`chat.py`).
- **Kết quả (Result):** Phản hồi dòng chảy theo thời gian thực với độ trễ tối thiểu (<150ms TTFB), tăng 100% tỷ lệ hoàn thành nhật ký chuẩn VietGAP, hỗ trợ triển khai linh hoạt cả ở máy chủ cục bộ lẫn môi trường Cloud Serverless Vercel.

---

### 5. Chronos Pro Life OS — Hệ Điều Hành Quản Trị Nhịp Sống 24 Giờ
*Vai trò: Frontend Architect • Công nghệ: Pure Vanilla JavaScript (ES6 Modules), HTML5 Canvas/SVG, CSS Glassmorphism*
- **GitHub Repository:** [https://github.com/VuongQuocHoa/chronos-life-os](https://github.com/VuongQuocHoa/chronos-life-os)
- **Trải nghiệm Demo:** Giao diện Web trực quan 24h (`http://localhost:8080`) — Đạt 100/100 Google Lighthouse.
- **Bối cảnh (Situation):** Các ứng dụng quản lý thời gian trên thị trường nặng nề, phụ thuộc vào quá nhiều thư viện ngoài và không đem lại trải nghiệm trực quan theo chu kỳ ngày.
- **Giải pháp (Action):**
  - Tự lập trình toàn bộ thuật toán hình học Canvas/SVG để hiển thị 1.440 phút trong ngày theo vòng tròn năng lượng.
  - Sử dụng kiến trúc module hóa ES6 thuần túy (Zero external dependencies), lưu trữ dữ liệu bền vững trên trình duyệt (localStorage).
  - Tích hợp cảm biến trình duyệt và Native Rule Engine Chatbot tư vấn quản trị nhịp sinh học không độ trễ.
- **Kết quả (Result):** Đạt điểm số tuyệt đối 100/100 trên Google Lighthouse, tốc độ tải trang dưới 50ms, vận hành mượt mà 60 FPS.

---

### 6. Shopee Deal Sniper & High-Frequency Price Scraper
*Vai trò: Automation Engineer • Công nghệ: Node.js, Express, Puppeteer/Cheerio, Telegram Bot API*
- **GitHub Repository:** [https://github.com/VuongQuocHoa/shopee-deal-sniper](https://github.com/VuongQuocHoa/shopee-deal-sniper)
- **Trải nghiệm Demo:** Web Dashboard theo dõi Deal (`http://localhost:3000`) & Cảnh báo tức thời qua Telegram Bot.
- Xây dựng bot cào dữ liệu TMĐT đa luồng quét sản phẩm Flash Sale; phát triển thuật toán lọc và chấm điểm deal hời `filterAndScoreItems`.
- Tích hợp cơ chế ngắt nhịp chống rate-limit IP và Telegram Bot Webhook thông báo deal giá tốt đến điện thoại trong vòng < 3 giây.

---

### 7. Fanpage AI Customer Assistant (Google Gemini 1.5 Flash)
*Vai trò: AI Engineer • Công nghệ: Node.js, Google Gemini API, Facebook Graph API Webhooks*
- **GitHub Repository:** [https://github.com/VuongQuocHoa/fb-ai-bot](https://github.com/VuongQuocHoa/fb-ai-bot)
- **Trải nghiệm Demo:** Dashboard quản trị cấu hình & Live Transaction Logging (`http://localhost:3000`).
- Phát triển chatbot chăm sóc khách hàng tự động trên Facebook Messenger ứng dụng mô hình Google Gemini 1.5 Flash.
- Thiết kế kịch bản prompt theo phễu bán hàng, tự động thấu hiểu ý định mua sắm và thu thập tên cùng số điện thoại đặt hàng 24/7.

---

### 8. Autonomous Market News AI Agent (LangChain + Telegram)
*Vai trò: AI Agent Engineer • Công nghệ: Python, LangChain, OpenAI, BeautifulSoup4, APScheduler*
- **GitHub Repository:** [https://github.com/VuongQuocHoa/ai-market-agent](https://github.com/VuongQuocHoa/ai-market-agent)
- **Trải nghiệm Demo:** Kịch bản quét RSS tự động & Kênh phát tin Telegram định kỳ (`python main.py`).
- Agent AI tự động cào tin tức tài chính thị trường từ các nguồn RSS, sử dụng LangChain và OpenAI để trích xuất các ý chính và tự động phát bản tin lên Telegram.

---

## 🎓 04. HỌC VẤN & THÔNG TIN BỔ SUNG (EDUCATION & DETAILS)

- **Chuyên ngành:** Công nghệ Thông tin / Kỹ thuật Phần mềm (Software Engineering / Computer Science)
- **Hình thức làm việc mong muốn:** Full-time (On-site / Hybrid / Remote)
- **Mức lương mong muốn:** Thỏa thuận theo năng lực và phạm vi đóng góp cho dự án.
- **Thời gian có thể nhận việc:** Bắt đầu ngay lập tức.
