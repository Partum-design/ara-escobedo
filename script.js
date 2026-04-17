document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle & Offcanvas Overlay
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.classList.add('offcanvas-overlay');
  document.body.appendChild(overlay);

  const toggleMenu = () => {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking overlay
  overlay.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) toggleMenu();
  });

  // Close menu when clicking a nav link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) toggleMenu();
    });
  });

  // Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }
});
