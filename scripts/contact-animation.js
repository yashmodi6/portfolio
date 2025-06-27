document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const contactForm = document.getElementById("contactForm");
  const conatctModal = document.getElementById("conatct-modal");
  const conatctModalContent = conatctModal.querySelector("div");
  const closeModal = document.getElementById("closeModal");
  const conatctModalTitle = document.getElementById("conatctModalTitle");
  const conatctModalMessage = document.getElementById("conatctModalMessage");

  // Form Submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let isValid = true;

    // Validate Name
    if (!name.value.trim()) {
      showError(name, "Name is required.");
      isValid = false;
    } else {
      clearError(name);
    }

    // Validate Email
    if (!email.value.trim()) {
      showError(email, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError(email, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(email);
    }

    // Validate Message
    if (!message.value.trim()) {
      showError(message, "Message is required.");
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, "Message should be at least 10 characters long.");
      isValid = false;
    } else {
      clearError(message);
    }

    if (isValid) {
      showModal("Message Sent!", "Thank you for reaching out. I will get back to you soon!");
      contactForm.reset();
      clearAllErrors();
    }
  });

  // Modal Handling
  closeModal.addEventListener("click", hideModal);

  function showModal(title, message) {
    conatctModalTitle.textContent = title;
    conatctModalMessage.textContent = message;
    conatctModal.classList.remove("hidden");
    setTimeout(() => {
      conatctModalContent.classList.add("scale-100", "opacity-100");
      conatctModalContent.classList.remove("scale-75", "opacity-0");
    }, 10);
  }

  function hideModal() {
    conatctModalContent.classList.remove("scale-100", "opacity-100");
    conatctModalContent.classList.add("scale-75", "opacity-0");
    setTimeout(() => {
      conatctModal.classList.add("hidden");
    }, 300);
  }

  // Helper Functions
  function showError(input, message) {
    let errorElement = input.parentElement.querySelector(".error-message");
    if (!errorElement) {
      errorElement = document.createElement("p");
      errorElement.className = "error-message text-red-500 text-sm mt-1";
      input.parentElement.appendChild(errorElement);
    }
    errorElement.textContent = message;
    input.classList.add("border-red-500");
  }

  function clearError(input) {
    const errorElement = input.parentElement.querySelector(".error-message");
    if (errorElement) {
      errorElement.remove();
    }
    input.classList.remove("border-red-500");
  }

  function clearAllErrors() {
    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    document.querySelectorAll("input, textarea").forEach((el) => el.classList.remove("border-red-500"));
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Animation Handling
  const contactSection = document.querySelector("#contact");
  const elementsToAnimate = contactSection.querySelectorAll(".contact-animate");

  if (contactSection) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply animation to the element
            entry.target.style.transitionDelay = `${Array.from(elementsToAnimate).indexOf(entry.target) * 0.2}s`; // Staggered effect
            entry.target.classList.add("opacity-100", "translate-y-0");

            // Stop observing the animated element
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });
  }
});