let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  // Move the carousel to the current index
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => changeSlide(index));
});

// Auto slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);
