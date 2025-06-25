// Theme Toggle: Switches between light and dark themes
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  
  if (themeToggle) {
    themeToggle.innerHTML = '<i class="fas fa-moon text-xl"></i>';
    
    themeToggle.addEventListener("click", () => {
      const isDarkTheme = root.classList.toggle("theme-dark");
      root.classList.toggle("theme-light", !isDarkTheme);
      
      themeToggle.innerHTML = isDarkTheme ?
        '<i class="fas fa-sun text-xl"></i>' :
        '<i class="fas fa-moon text-xl w-2 h-auto"></i>';
    });
  }
});