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

  // Actualizar los puntos de navegación
  updateDots();
}

// Función para cambiar a una imagen específica con los puntos
function setCarousel(index) {
  currentIndex = index;
  const carousel = document.querySelector('.carousel-container');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Actualizar los puntos de navegación
  updateDots();
}

// Función para actualizar la clase 'active' en los puntos
function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Inicializar los puntos de navegación
updateDots();
