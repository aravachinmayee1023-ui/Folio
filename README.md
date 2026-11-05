# ✨ Folio – AI Portfolio Architect Studio

**Folio** is an AI-powered portfolio creation platform designed to help developers, students, designers, and professionals create modern, responsive, and professional portfolios with ease.

It combines intelligent content enhancement, customizable portfolio sections, and standalone HTML export to make portfolio building simple and efficient.

## 🚀 Features

- **AI-Powered Portfolio Generation:** Uses Google Gemini AI to enhance portfolio descriptions, bios, and professional taglines.
- **Modern UI:** Clean, responsive, and visually appealing interface.
- **Portfolio Customization:** Customize personal information, skills, projects, and professional details.
- **Project Showcase:** Display projects with detailed descriptions, technologies, and case studies.
- **Dark & Light Mode:** Switch between themes for a comfortable browsing experience.
- **HTML Export:** Generate and export standalone HTML portfolios.
- **Contact Section:** Includes a contact form with input validation.
- **Privacy & Cookie Management:** Includes privacy policies, terms, cookie consent, and data-related sections.
- **Responsive Design:** Designed to work across desktop and mobile devices.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend development |
| TypeScript | Type-safe development |
| Vite | Development and build tool |
| Tailwind CSS | Styling and responsive design |
| Node.js | Backend runtime |
| Express.js | Backend API |
| Google Gemini API | AI-powered content enhancement |
| Lucide React | Icons |
| Motion | UI animations |

## 📂 Project Structure

```text
Folio/
│
├── public/
│   └── assets/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── About.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── SkillsMatrix.tsx
│   │   ├── StudioDrawer.tsx
│   │   └── ...
│   │
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── server.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .env.example
└── README.md
```

## ⚙️ Installation & Setup

Follow these steps to run Folio locally.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/Folio.git
```

### 2. Navigate to the Project Folder

```bash
cd Folio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

Add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
APP_URL=http://localhost:3000
```

Get your API key from Google AI Studio:

https://aistudio.google.com/

**Note:** The Gemini API key is optional for basic portfolio functionality but required for AI-powered content enhancement.

Never upload your actual API key to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🔌 API Endpoints

Folio includes backend API endpoints for portfolio generation and HTML export.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/generate-portfolio` | Generates and enhances portfolio content |
| POST | `/api/export-html` | Generates standalone portfolio HTML |

## 🎯 Project Objective

The main objective of Folio is to simplify portfolio development by combining AI-powered content generation with modern web technologies.

Instead of spending hours designing and writing portfolio content, users can create a professional portfolio with customizable sections and export it as a standalone HTML file.

## 🔮 Future Enhancements

- User authentication and personalized accounts.
- Multiple professional portfolio templates.
- Direct portfolio deployment.
- PDF portfolio export.
- More AI-powered customization options.
- Cloud-based portfolio storage.
- Custom domain integration.

## 👩‍💻 Developer

**Developed by: Arava Chinmayee**

B.Tech Computer Science and Engineering Student

Interested in:
- Artificial Intelligence
- Software Development
- Web Development
- AI-Powered Applications

## ⭐ Support

If you find this project interesting or useful, consider giving the repository a ⭐ on GitHub!

---

**Folio – Build Your Professional Identity.**
