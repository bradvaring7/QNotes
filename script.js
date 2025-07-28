const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.querySelector('.navbar-links');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navbar-links a');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Show only the active section when a menu link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // For anchor navigation, prevent default scroll
    e.preventDefault();
    const targetId = this.getAttribute('href').replace('#', '');
    sections.forEach(section => {
      if (section.id === targetId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
    // Optionally close mobile menu after selection
    navbarLinks.classList.remove('active');
    // Update hash in URL
    window.location.hash = targetId;
  });
});

// Show the correct section on initial load based on hash
window.addEventListener('DOMContentLoaded', () => {
  let hash = window.location.hash.replace('#', '');
  if (!hash) hash = 'home';
  sections.forEach(section => {
    if (section.id === hash) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});