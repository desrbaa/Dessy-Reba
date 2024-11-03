const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();  
  
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);  
  
      const targetPosition = targetElement.offsetTop;
  
      window.scrollTo({
        top: targetPosition,
        behavior:  
   'smooth'
      });
    });
  });