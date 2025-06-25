document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll('.group');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-75', 'translate-y-0');
        }
      });
    }, { threshold: 0.25 }
  );
  skillCards.forEach((card) => observer.observe(card));
});