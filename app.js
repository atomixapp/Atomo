// Variables
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

// Función para actualizar el carrusel
function updateCarousel() {
  // Desactivar todos los puntos
  dots.forEach(dot => dot.classList.remove('active'));

  // Activar el punto correspondiente
  dots[currentIndex].classList.add('active');

  // Desplazar el carrusel
  const offset = -currentIndex * 100;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Función para manejar la navegación del carrusel
function goToNext() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

function goToPrev() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

// Configuración inicial
updateCarousel();

// Automatizar la navegación del carrusel cada 3 segundos
setInterval(goToNext, 3000);
