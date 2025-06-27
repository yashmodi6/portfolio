function filterCards(category) {
  const cards = document.querySelectorAll(".skill-card");
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.order = "1";
      card.classList.remove("hidden");
    } else {
      card.style.order = "2";
      card.classList.add("hidden");
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll('.group');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.35 }
  );
  skillCards.forEach((card) => observer.observe(card));
});