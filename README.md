# 💼 Jewel D. Binueza Portfolio

A clean, responsive, and minimal developer portfolio built with **HTML**, **CSS**, **Bootstrap**, and **JavaScript**, focused on clarity, accessibility, and modern user experience.

---

## 🚀 Overview

This portfolio highlights my background, skills, and sample works as a **Computer Science graduate** and aspiring **web developer**. It's designed with:

- ✨ Simplicity and responsiveness
- 🧩 Smooth user interactions
- 🧠 Semantic HTML
- 🎨 Modern CSS (with transitions and keyframes)
- ⚡ JavaScript enhancements

---

## ✨ Features

- ✅ **Single Page Application (SPA)**: Seamless navigation through smooth scrolling
- 📱 **Responsive Design**: Looks great on all screen sizes (mobile, tablet, desktop)
- ♿ **Accessible**: Semantic HTML with alt texts and keyboard-friendly nav
- 💅 **Modern UI/UX**: Animated components and clean, elegant layout
- 🔄 **Reusable Structure**: Easy to update sections like Skills, Education, and Projects
- 🎞️ **On-Scroll Animations**: Dynamic animations triggered as users scroll

---

## 🛠️ Tech Stack

- **HTML5** – Semantic structure and clean markup
- **CSS3** – Custom styles, transitions, animations
- **Bootstrap** – Grid system and responsive utilities
- **JavaScript (ES6)** – Interaction handling and dynamic UI
- **jQuery** – DOM manipulation and event helpers
- **Slick Carousel** – Responsive slider for project galleries

---

## 📁 Project Structure
 ``` 
Portfolio/
  css/           # Modular CSS for each section
  js/            # Modular JS views and templates
  assets/        # Images, icons, resume, and other assets
  index.html     # Main HTML file
  README.md      # This file
 ``` 
---

## 🖥️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jill-22/jill-22.github.io.git
Open the project:

Navigate to the folder

Open index.html in any browser (no build tools required)

Dependencies:

Ensure jQuery and Slick Carousel are included in your HTML for slider functionality

---

## 🧩 How to Add or Update Content

You can easily modify the content by editing the `index.html` file. Here's a quick guide for common sections:

### ➕ Add a New Project

1. Find the `<!-- Project Card -->` section inside the `#projects` section.
2. Copy one `.project-card` block and paste below the last one.
3. Update:

   * Image(s) path inside `<img src="...">`
   * Project title and description
   * (Optional) Add project link buttons

```html
<div class="project-card">
  <div class="carousel-container">
    <div class="carousel">
      <img src="assets/images/my-new-project.png" class="carousel-img" />
    </div>
  </div>
  <h3 class="project-title">My New Project</h3>
  <p class="project-description">A brief description of the project.</p>
</div>
```

### 🧑‍🎓 Add Education or Skills

* **Education**: Look for the `.education-list` inside the `#education` section
* **Skills**: Locate the `.skills-icons` or `.skills-list` and add `<li>` or icons

```html
<!-- Education Example -->
<div class="education-item">
  <span class="edu-icon">🎓</span>
  <p>New Certificate – Year</p>
</div>

<!-- Skill Example -->
<li><i class="fab fa-python"></i> Python</li>
```

### 📞 Update Contact Info

Edit the content inside the `#contact` section at the bottom of the `index.html` file.

---

## 🌐 Live Demo

🔗 [[https://jill-22.github.io](https://jill-22.github.io)](https://jill-22.github.io/portfolio/)

---

## 👤 Author

**Jewel D. Binueza**
📍 Ormoc City, Philippines
📧 [binuezajewel@gmail.com](mailto:binuezajewel@gmail.com)
🌐 [GitHub Profile](https://github.com/jill-22)

---

## 📝 License

This project is open-source and available for personal use and inspiration.
If you fork or adapt major sections, **credit is appreciated**.
