// Projects Section Animation: Animates cards when section enters the viewport
document.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.querySelector("#projects");
  const cards = document.querySelectorAll(".card");

  if (projectsSection && cards.length) {
    const projectsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projectsSection.style.opacity = "1";
          projectsSection.style.transform = "translateY(0) scale(1)";

          cards.forEach((card) => {
            card.style.animationPlayState = "running";
          });

          projectsObserver.unobserve(projectsSection);
        }
      },
      { threshold: 0.25 }
    );

    projectsObserver.observe(projectsSection);
  }
});