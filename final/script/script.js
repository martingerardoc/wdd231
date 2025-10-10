// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Carousel logic
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const imagesContainer = carousel.querySelector('.carousel-images');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let index = 0;

  function showSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;
    imagesContainer.style.transform = `translateX(${-index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => showSlide(index - 1));
  nextBtn.addEventListener('click', () => showSlide(index + 1));

  // Auto-slide every 4 seconds
  setInterval(() => showSlide(index + 1), 4000);
});