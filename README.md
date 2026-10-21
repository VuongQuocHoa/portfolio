# 🌟 Portfolio Kỹ Sư Công Nghệ — Vương Quốc Hòa
**Applied AI & Full-Stack Software Engineer**

Dự án Portfolio chuyên nghiệp được xây dựng để nộp phỏng vấn các vị trí **AI Engineer, Computer Vision Engineer, Full-Stack Developer, và AI Solutions Engineer**, tập hợp các dự án thực chiến từ không gian làm việc của bạn.

---

## 🚀 1. Cách Mở & Xem Portfolio Nhanh Nhất

### Cách 1: Mở trực tiếp trên trình duyệt (Không cần cài đặt gì thêm)
- Nhấp đúp chuột vào tệp `index.html` trong thư mục `d:\PROJECTS\portfolio\index.html` để mở ngay trên Chrome, Edge hoặc Brave.

### Cách 2: Chạy qua HTTP Server cục bộ (Khuyên dùng)
Mở PowerShell tại thư mục `d:\PROJECTS\portfolio`:

```powershell
# Bằng Python (sẵn có trong máy):
python -m http.server 3000

# Hoặc bằng Node.js npx:
npx serve -l 3000
```
Sau đó truy cập trình duyệt tại: **http://localhost:3000**

---

## 🖨️ 2. Cách Xuất Hồ Sơ Thành File PDF Để Nộp Cho Nhà Tuyển Dụng

Portfolio đã được tích hợp bộ định dạng in ấn chuyên dụng (`@media print`):
1. Mở trang web portfolio trên trình duyệt.
2. Bấm vào nút **"Xuất PDF / In CV"** ở thanh điều hướng trên cùng (hoặc bấm tổ hợp phím **Ctrl + P**).
3. Tại mục **Máy in đích (Destination)**: Chọn **"Lưu dưới dạng PDF" (Save as PDF)**.
4. Tùy chọn in:
   - Khổ giấy: **A4**
   - Đồ họa nền (Background graphics): **Bật (Checked)** để giữ màu sắc nét và đẹp mắt.
5. Bấm **Lưu (Save)**. Bạn sẽ có ngay một bản CV/Portfolio chuẩn chuyên nghiệp, sạch đẹp, không bị dính các nút bấm hay hiệu ứng thừa của web.

---

## 🌐 3. Hướng Dẫn Đưa Lên Mạng Miễn Phí (GitHub Pages / Vercel)

### Đưa lên GitHub Pages (Miễn phí vĩnh viễn):
1. Tạo một repository mới trên GitHub: `portfolio`
2. Đẩy toàn bộ các tệp trong thư mục `d:\PROJECTS\portfolio` lên repository:
   ```bash
   git init
   git add .
   git commit -m "feat: release interview portfolio"
   git branch -M main
   git remote add origin https://github.com/VuongQuocHoa/portfolio.git
   git push -u origin main
   ```
3. Trên GitHub, vào **Settings** -> **Pages** -> Chọn nhánh **main** làm nguồn.
4. Bạn sẽ có ngay link trực tuyến đẹp mắt: `https://vuongquochoa.github.io/portfolio`

---

## 📁 4. Cấu Trúc Thư Mục Portfolio

```
d:\PROJECTS\portfolio\
├── index.html                           # Giao diện chính của Portfolio (Chuẩn SEO, Dark Theme)
├── style.css                            # Hệ thống thiết kế Glassmorphism & Print stylesheet
├── app.js                               # Dữ liệu dự án, bộ lọc tương tác, popup STAR & sao chép
├── CV_CHUYEN_NGHIEP_AI_ENGINEER.md      # Bản tóm tắt CV định dạng Markdown nộp nhanh
└── README.md                            # Hướng dẫn chi tiết sử dụng và xuất bản
```

---

## 💡 5. Các Dự Án Được Đưa Vào Hồ Sơ

1. **Edge AI Predict Mass:** Hệ thống thị giác máy tính công nghiệp (YOLOv11n-seg, 60 FPS Decoupled pipeline, Lượng tử hóa INT8 PTQ, OpenVINO).
2. **InsightFace FaceID CyberHUD:** Microservice nhận diện khuôn mặt FastAPI + ChromaDB Vector DB + ứng dụng Android APK độc lập.
3. **MobiAgri:** Nền tảng ERP nông nghiệp quản trị vùng nguyên liệu (React, Vite, Express, Prisma ORM, chuẩn VietGAP).
4. **Edu-Farm IoT Smart Wearable:** Trợ lý ảo thu âm giọng nói tiếng Việt ghi nhật ký nông nghiệp qua Coze API v3 Streaming (SSE) và đồng bộ Google Sheets.
5. **Chronos Pro Life OS:** Hệ điều hành 24 giờ trực quan hóa 1,440 phút trong ngày bằng Canvas/SVG thuần ES Modules (100/100 Lighthouse).
6. **Shopee Deal Sniper:** Bot quét deal giảm giá TMĐT đa luồng với thuật toán chấm điểm và Telegram Webhook.
7. **Facebook Fanpage AI Assistant:** Bot AI hỗ trợ khách hàng và thu thập khách tiềm năng 24/7 tích hợp Google Gemini 1.5 Flash.
8. **Autonomous Market News AI Agent:** Agent AI tự động cào tin tài chính, tóm tắt qua LangChain và phát bản tin định kỳ lên Telegram.
