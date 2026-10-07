# Arman Hossain — Software Engineer Portfolio Website 🚀

A modern, high-performance, dark/light theme portfolio website designed for **Arman Hossain** (Computer Science & Engineering Student | Software Engineer).

---

## 🌟 Key Features

- **Hero Section**: Dynamic typewriter role presentation, avatar card with floating tech badges, quick CTA buttons, and direct social links.
- **About Me**: Academic background at PSTU, engineering focus (AI/ML + Cross-Platform + IoT Hardware), and key stats counters.
- **Skills Matrix**: Categorized tech stack with interactive category tabs (Languages, Frameworks, AI & ML, Databases, IoT & Hardware, Dev Tools).
- **Featured Projects**: Filterable project showcase (All, AI & IoT, Mobile / Flutter, Web & Desktop) featuring:
  1. **VitalSense** — AI-Powered Remote Health Monitoring & Disease Prediction
  2. **PSTU Blended Learning Center (Flutter App)**
  3. **PSTU Blended Learning Center (C# / .NET Enterprise System)**
  4. **ElektroVote** — Secure Digital Voting Platform
  5. **ShebaBondhu** — Smart Personal Assistant App
- **Certificates & Achievements**: Image gallery with zoom lightbox preview for your certificates.
- **Research & Current Interests**: Interactive cards covering AI/ML, Computer Vision, IoT & Embedded Systems, Robotics, Flutter, and Competitive Programming.
- **Contact & Connect**: Direct WhatsApp one-click chat, direct call/email links, and an interactive message form.
- **Resume Modal**: Printable / downloadable CV view directly accessible from the navigation bar or hero section.
- **Dark / Light Mode**: Seamless theme switching with local storage memory.

---

## 📁 File Structure

```
d:/Arman Hossain/Portfolio website/
├── index.html            # Main HTML5 semantic structure & content
├── css/
│   └── style.css         # Modern styling, responsive breakpoints & animations
├── js/
│   └── main.js           # Filtering, animations, modals, theme switch & contact form
└── assets/
    ├── images/           # All your images (Profile, Projects, Certificates)
    │   ├── profile.jpg
    │   ├── vitalsense.jpg
    │   ├── pstu-blc.jpg
    │   ├── pstu-dotnet.jpg
    │   ├── elektrovote.jpg
    │   ├── shebabondhu.jpg
    │   ├── certificate-1.jpg
    │   └── certificate-2.jpg
    └── resume/           # Place your PDF resume here (e.g. Arman_Hossain_Resume.pdf)
```

---

## 🖼️ How to Replace Images with Your Own Photos

All images are conveniently located in `assets/images/`. Simply save your own images with the same names (or update the filenames in `index.html`):

1. **Your Profile Photo**: Save your photo as `assets/images/profile.jpg`.
2. **Project Screenshots**: Save your project screenshots as `vitalsense.jpg`, `pstu-blc.jpg`, `pstu-dotnet.jpg`, `elektrovote.jpg`, `shebabondhu.jpg`.
3. **Your Certificates**: Save your certificates as `certificate-1.jpg`, `certificate-2.jpg` (you can duplicate the card in `index.html` to add as many as you want).
4. **Your Resume PDF**: Place your PDF file inside `assets/resume/`.

---

## 💻 How to View & Run Locally

### Option 1: Double-click
Simply open `index.html` in Chrome, Edge, or Firefox.

### Option 2: Local HTTP Server (Recommended)
Open a terminal in this folder and run:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

---

## 🌐 Free Hosting Options (Live on Internet)

1. **GitHub Pages (Free & Recommended)**:
   - Create a repository on GitHub (e.g., `Arman11217.github.io` or `portfolio`).
   - Push these files to the repository.
   - Go to **Settings** > **Pages** > Select `main` branch > Click **Save**.
   - Your site will be live at `https://Arman11217.github.io`!

2. **Vercel or Netlify**:
   - Drag and drop this folder directly into [netlify.com/drop](https://app.netlify.com/drop) or import from GitHub on [vercel.com](https://vercel.com) for instant SSL deployment.
