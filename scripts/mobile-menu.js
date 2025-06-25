// Mobile Menu Toggle: Toggles the mobile navigation menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  
  if (menuToggle && menu) {
    const menuLinks = menu.querySelectorAll("a");
    
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("open");
      menuToggle.classList.toggle("open");
    });
    
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        menuToggle.classList.remove("open");
      });
    });
  }
});