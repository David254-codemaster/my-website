document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted successfully!');
  form.reset();
});