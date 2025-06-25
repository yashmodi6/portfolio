document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector("#contact");
  const childElements = contactSection.querySelectorAll(".child-animate");
  
  if (contactSection) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate section
          contactSection.classList.add("opacity-100", "translate-y-0");
          
          // Animate child elements
          childElements.forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.2}s`; // Add staggered effect
            child.classList.add("opacity-100", "translate-y-0");
          });
          
          observer.unobserve(contactSection); // Stop observing once animation is complete
        }
      }, { threshold: 0.3 } // Trigger when 30% of the section is visible
    );
    
    observer.observe(contactSection);
  }
});