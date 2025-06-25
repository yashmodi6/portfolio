// Typing Animation: Starts typing animation after loader finishes
document.addEventListener("DOMContentLoaded", () => {
  

  setTimeout(() => {
    const dynamicNameElement = document.getElementById("dynamic-name");
    
    if (dynamicNameElement) {
      const typewriter = new Typewriter(dynamicNameElement, {
        loop: true,
        delay: 75,
      });
      
      typewriter
        .typeString("Yash Modi")
        .pauseFor(1000)
        .deleteAll()
        .typeString("a Developer")
        .pauseFor(1000)
        .deleteAll()
        .typeString("a Learner")
        .pauseFor(1000)
        .start();
    }
  }, 1700); // Matches the loader delay
});