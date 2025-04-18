// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const sections = document.querySelector(".sections");

mobileMenuBtn.addEventListener("click", () => {
  sections.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!sections.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    sections.classList.remove("active");
  }
});

// Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  modeToggle.textContent = body.classList.contains("dark-mode")
    ? "☀️ Mode"
    : "🌙 Mode";
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu after clicking
      sections.classList.remove("active");
    }
  });
});
