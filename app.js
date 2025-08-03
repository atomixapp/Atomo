let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  // Mueve el carrusel al índice actual
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Actualiza el punto activo
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Event listeners para los puntos
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => changeSlide(index));
});

// Desplazamiento automático cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);
