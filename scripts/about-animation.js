document.addEventListener("DOMContentLoaded", () => {
  // Select elements only if they exist
  const animateElements = document.querySelectorAll(".animate-on-scroll, .shape");
  
  if (animateElements.length > 0) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.9 });

    animateElements.forEach((el) => io.observe(el));
  }
});