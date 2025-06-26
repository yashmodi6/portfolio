  // Modal logic
  const modal = document.getElementById('project-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalTechStack = document.getElementById('modal-tech-stack');
  const modalDemo = document.getElementById('modal-demo');
  
  document.querySelectorAll('.modal-trigger').forEach(button => {
    button.addEventListener('click', () => {
      const projectData = JSON.parse(button.closest('[data-project]').dataset.project);
      
      modalTitle.textContent = projectData.name;
      modalImage.src = projectData.mockup;
      modalDescription.textContent = projectData.description;
      modalTechStack.innerHTML = projectData.techStack.map(tech => `<li>- ${tech}</li>`).join('');
      modalDemo.href = projectData.demo;
      
      backdrop.classList.add('active');
      setTimeout(() => backdrop.classList.remove('hidden'), 10);
      
      modal.classList.add('active');
      setTimeout(() => modal.classList.remove('hidden'), 10);
    });
  });
  
  document.getElementById('modal-close').addEventListener('click', () => {
    modal.classList.add('hidden');
    backdrop.classList.add('hidden');
    setTimeout(() => {
      modal.classList.remove('active');
      backdrop.classList.remove('active');
    }, 300);
  });
  
  backdrop.addEventListener('click', () => {
    modal.classList.add('hidden');
    backdrop.classList.add('hidden');
    setTimeout(() => {
      modal.classList.remove('active');
      backdrop.classList.remove('active');
    }, 300);
  });
  
  // Scroll animations
  document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll('.card-animation');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 0.2}s`; // Stagger effect
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Unobserve to prevent re-trigger
        }
      });
    }, { threshold: 0.4 });
    
    animateElements.forEach(element => observer.observe(element));
  });