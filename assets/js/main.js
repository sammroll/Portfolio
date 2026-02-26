// Smooth reveal animation (runs once)
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));