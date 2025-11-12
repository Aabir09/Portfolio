// Mobile hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
      }
    }
  });
});

// Modal open on CTA buttons
const modal = document.getElementById("modal");
const ctaButtons = document.querySelectorAll(".cta-btn");
const modalClose = document.getElementById("modalClose");

ctaButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Animate skill circles on scroll
const skills = document.querySelectorAll(".skill");

window.addEventListener("scroll", () => {
  const bottomScreen = window.innerHeight + window.scrollY;
  skills.forEach(skill => {
    if (skill.offsetTop < bottomScreen - 80) {
      const circle = skill.querySelector(".progress");
      const skillText = skill.querySelector(".skill-text");

      const percentageText = skillText.textContent;
      const percentage = +percentageText.match(/\d+/)[0];
      const totalLength = circle.getTotalLength();

      const offset = totalLength - (totalLength * percentage) / 100;
      circle.style.strokeDashoffset = offset;
    }
  });
});

// Contact form handling
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const message = contactForm.querySelector("textarea").value.trim();

  if (name && email && message) {
    alert(`Thanks ${name}! Your message has been sent.`);
    contactForm.reset();
    modal.style.display = "none";
  } else {
    alert("Please fill in all fields.");
  }
});
