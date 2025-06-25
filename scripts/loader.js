// Loader: Ensures the loader stays visible for at least 1.7 seconds
window.onload = () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1700); // Matches the loader duration
};