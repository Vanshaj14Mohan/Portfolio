# Vanshaj P Mohan - Professional Developer Portfolio

A sleek, modern, and high-performance developer portfolio built with React and Vite. Designed with a premium "cyberpunk/neon" dark mode aesthetic, it features glassmorphism UI elements, smooth animations, and interactive components.

## 🚀 Live Demo
*(Live URL here => https://vanshaj-portfolio-one.vercel.app/)*

## 🛠 Tech Stack

This project was built using modern web technologies to ensure optimal performance and a seamless developer experience:

- **Core Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/) - For lightning-fast Hot Module Replacement (HMR) and highly optimized production builds.
- **Styling:** Vanilla CSS 
  - Centralized design system using CSS variables (`index.css`).
  - Features a dark theme with Neon Cyan (`#00e5ff`) and Neon Blue (`#4f8aff`) accents.
  - Implements modern techniques like `backdrop-filter` for glassmorphism and data-inspired subtle grid backgrounds.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Used for fluid page transitions, scroll-triggered animations, and interactive element states.
- **Icons:** [Lucide React](https://lucide.dev/) - Clean, consistent, open-source SVG icons.
- **Code Quality:** [ESLint](https://eslint.org/) - Configured specifically for React hooks and strict codebase quality.

## ✨ Key Features

- **Premium Dark Mode Design:** High-contrast neon aesthetics tailored to look incredible to tech recruiters and peers.
- **Custom Cursor:** A bespoke interactive cursor that reacts to hover states (`CustomCursor.jsx`).
- **Interactive UI Components:**
  - **Live Status Widget:** A real-time ticking clock and "Available for work" glowing indicator built seamlessly into the footer.
  - **Project & Certificate Modals:** Detailed overlay views for deep-diving into case studies without disrupting the scroll flow.
- **Hidden Easter Egg:** A custom-built Matrix digital rain effect (`MatrixRain.jsx`) that triggers when clicking the copyright (`©`) symbol 3 times!
- **Fully Responsive:** Adapts flawlessly across mobile, tablet, and desktop devices.

## 💻 Running Locally

To get a local copy up and running, follow these simple steps:

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Vanshaj14Mohan/Portfolio.git
   ```
2. Navigate to the project directory
   ```bash
   cd portfolio
   ```
3. Install NPM packages
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open your browser and visit the local link provided by Vite (usually `http://localhost:5173`)

## 🏗 Project Structure

```text
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── assets/          # Images, PDFs, SVGs
│   ├── components/      # Modular React components (Navbar, Hero, Projects, Footer, MatrixRain, etc.)
│   ├── App.jsx          # Main application layout
│   ├── index.css        # Global CSS variables and global styling rules
│   └── main.jsx         # React application entry point
├── package.json         # Project dependencies and NPM scripts
└── vite.config.js       # Vite build configuration
```


*Designed & Developed by Vanshaj P Mohan*
