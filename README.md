# 📟 PortfolioOS — Interactive Terminal Portfolio

Welcome to **PortfolioOS**, a retro CRT terminal-themed interactive portfolio website built for **Chaxu Patel**, a **Jr. Unity Developer** based in Ahmedabad, Gujarat.

🔗 **Live Demo:** [chaxupatel.github.io/portfolio-page](https://chaxupatel.github.io/portfolio-page/)

---

## 🖥️ About the Project

This repository contains the source code for a custom terminal emulator webpage simulation. Rather than a traditional scroll-and-read portfolio, it presents a simulated console interface with boot sequences, typing animations, scanline overlays, and responsive CLI command inputs to explore professional details.

### 🌟 Key Features
- **Boot Sequence Simulation:** Simulates visual mounting and loading of kernel parameters on start.
- **Interactive Command Router:** Parse keyboard events to navigate professional information via custom text inputs.
- **Retro CRT Aesthetics:** Vanilla CSS configuration utilizing scanlines and radial vignette shadow gradients for an immersive old-school display.
- **Mobile Responsive Input:** Employs a hidden native viewport input listener, allowing full keyboard support across touchscreens and mobile web browsers.
- **SEO & Google Search Optimized:** Built-in Open Graph tags, Twitter card components, canonical URLs, and structured JSON-LD micro-data schema markup for maximum discovery.

---

## ⌨️ Available CLI Commands

Type any of the following commands in the console prompt and hit `Enter`:

| Command | Action / Information Displayed |
| :--- | :--- |
| `help` | Lists all available system commands. |
| `about` / `whoami` | Displays Chaxu Patel's bio, handle, and professional summary. |
| `work` / `experience` | Loads active employment records and day-to-day responsibilities. |
| `education` | Accesses academic archives showing university, degree, and coursework. |
| `skills` | Scans registry for programming languages, ML/AI libraries, and tools. |
| `projects` / `ls` | Retrieves a database of completed software and machine learning projects. |
| `contact` | Establishes connection to email, GitHub, and LinkedIn handles. |
| `resume` / `cv` | Fetches Google Drive download link for full Résumé document. |
| `clear` | Clears all prior inputs and print blocks from the terminal container. |

---

## 🛠️ Tech Stack & Setup

The website is lightweight and built without heavy libraries or framework wrappers to ensure blazing-fast load speeds and lightweight static hosting.

- **Frontend Core:** HTML5, Vanilla JavaScript (ES6+), CSS3
- **Fonts:** `Fira Code` (via Google Fonts)

### Running Locally

Since the site consists of standard static files, you can host and test it locally with zero build dependencies:

1. Clone this repository:
   ```bash
   git clone https://github.com/Chaxupatel/portfolio-page.git
   cd portfolio-page
   ```
2. Simply double-click and open the [index.html](index.html) file in any web browser, or run a local server:
   ```bash
   # Using python
   python3 -m http.server 8000
   
   # Or using Node.js / npm
   npx serve .
   ```
3. Open `http://localhost:8000` (or the port outputted by your local server) in your browser.

---

## 👨‍💻 About Chaxu Patel

*   **Role:** Jr. Unity Developer (SE-1)
*   **Specialization:** Mobile Game Development (C# & Unity), Web Technologies, Machine Learning
*   **Education:** B.Tech (ICT) from Dhirubhai Ambani University, Gandhinagar
*   **Location:** Ahmedabad, Gujarat, India
*   **Email:** caxu2003@gmail.com
*   **GitHub:** [@Chaxupatel](https://github.com/Chaxupatel)
*   **LinkedIn:** [Chaxu Patel](https://www.linkedin.com/in/chaxu-patel-8b4a78224/)
