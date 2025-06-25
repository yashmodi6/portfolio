// About Section Animation: Animates content when section enters the viewport
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#about");
  
  if (aboutSection) {
    const children = aboutSection.querySelectorAll(".child-animate");
    
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("animate-fade-in");
          
          children.forEach((child, index) => {
            child.style.animationDelay = `${index * 0.2}s`; // Staggered delay
            child.style.animationPlayState = "running";
          });
          
          aboutObserver.unobserve(aboutSection); // Stop observing after animation
        }
      }, { threshold: 0.3 } // Trigger when 30% of the section is visible
    );
    
    aboutObserver.observe(aboutSection);
  }
});