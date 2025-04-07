// JavaScript for the portfolio

// Dynamic text animation for "I'm a <span>"
const textAnimation = document.querySelector('.text-animation span');
const roles = ["Developer", "Problem Solver", "Innovator", "Learner"];
let roleIndex = 0;

function changeText() {
    textAnimation.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length; // Loop through the roles
}

// Change text every 2 seconds
setInterval(changeText, 2000);

// Menu toggle for smaller screens
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x"); // Toggle menu icon to a close (x) icon
});

// Update active class on navbar links while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
