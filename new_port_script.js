// =========================
// Portfolio JavaScript
// =========================

// -------------------------
// Dynamic text animation
// -------------------------
const textAnimation = document.querySelector(".text-animation span");
const roles = ["Developer", "Problem Solver", "Innovator", "Learner"];
let roleIndex = 0;

function changeText() {
  if (textAnimation) {
    textAnimation.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
  }
}

// Recursive timeout (better than setInterval for performance)
function loopText() {
  changeText();
  setTimeout(loopText, 2000);
}
loopText();

// -------------------------
// Navbar toggle for mobile
// -------------------------
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });
}

// -------------------------
// Scroll spy (active navbar links)
// -------------------------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollY >= sectionTop - sectionHeight / 3 &&
      scrollY < sectionTop + sectionHeight - sectionHeight / 3
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// -------------------------
// Certificates View More / Less
// -------------------------
const viewMoreBtn = document.getElementById("view-more");
const certificateContent = document.querySelector(".certificate-content");

if (viewMoreBtn && certificateContent) {
  viewMoreBtn.addEventListener("click", () => {
    certificateContent.classList.toggle("show-all");

    if (certificateContent.classList.contains("show-all")) {
      viewMoreBtn.textContent = "View Less";
    } else {
      viewMoreBtn.textContent = "View More";
    }
  });
}