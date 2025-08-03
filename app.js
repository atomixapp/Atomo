// Función para controlar el menú (en este caso, solo simula la acción)
function toggleMenu() {
  alert('Menú desplegable activado');
}

// Función para mover el carrusel
let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = totalItems - 1;
  if (currentIndex >= totalItems) currentIndex = 0;

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
