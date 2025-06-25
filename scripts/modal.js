document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalCta = document.getElementById("modalCta");
  
  // Function to open the modal
  const openModal = (trigger) => {
    const title = trigger.getAttribute("data-title");
    const image = trigger.getAttribute("data-image");
    const description = trigger.getAttribute("data-description");
    const link = trigger.getAttribute("data-link");
    
    modalTitle.textContent = title;
    modalImage.src = image;
    modalDescription.innerHTML = description;
    modalCta.href = link;
    
    modal.classList.remove("hidden");
    modal.style.animation = "fadeIn 0.3s forwards";
    modalContent.style.animation = "modalOpen 0.3s forwards";
  };
  
  // Function to close the modal
  const closeModal = () => {
    modal.style.animation = "fadeOut 0.3s forwards";
    modalContent.style.animation = "modalClose 0.3s forwards";
    modalContent.addEventListener("animationend", () => {
      modal.classList.add("hidden");
    }, { once: true });
  };
  
  // Attach event listeners to modal-trigger buttons
  document.querySelectorAll(".modal-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => openModal(trigger));
  });
  
  // Close the modal on clicking the close button or outside the modal
  document.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("close-modal") ||
      event.target === modal
    ) {
      closeModal();
    }
  });
});