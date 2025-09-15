// Variables del carrusel de plataformas
const platformsCarousel = document.querySelector('.platforms-carousel');
const platformItems = document.querySelectorAll('.platform-item');
let itemWidth = platformItems[0].offsetWidth + 15; // Incluye el margen entre elementos
let currentIndex = 0; // Índice de los elementos del carrusel de plataformas
let isTouching = false;
let touchStartX = 0;
const totalItems = platformItems.length;

// Función para actualizar la posición del carrusel
function updatePlatformCarouselPosition() {
  // Aseguramos que el desplazamiento no se mueva más allá del límite
  const offset = Math.min(0, Math.max(-(totalItems - 1) * itemWidth, -currentIndex * itemWidth));
  platformsCarousel.style.transition = 'transform 0.3s ease'; // Transición suave al mover el carrusel
  platformsCarousel.style.transform = `translateX(${offset}px)`;
}

// Deslizar con el dedo (en pantallas táctiles)
platformsCarousel.addEventListener('touchstart', (e) => {
  isTouching = true;
  touchStartX = e.touches[0].clientX; // Guardar la posición inicial del toque
});

platformsCarousel.addEventListener('touchmove', (e) => {
  if (!isTouching) return;

  const touchMoveX = e.touches[0].clientX; // Posición actual del toque
  const touchDiff = touchStartX - touchMoveX; // Distancia que ha recorrido el toque

  // Mover el carrusel de plataformas dependiendo del desplazamiento táctil
  platformsCarousel.style.transition = 'none'; // Desactivar la transición mientras se mueve con el dedo
  platformsCarousel.style.transform = `translateX(${(-currentIndex * itemWidth) - touchDiff}px)`;
});

platformsCarousel.addEventListener('touchend', (e) => {
  if (!isTouching) return;
  isTouching = false;

  const touchEndX = e.changedTouches[0].clientX; // Posición final del toque
  const touchDiff = touchStartX - touchEndX; // Distancia que ha recorrido el toque

  // Avanzar o retroceder según la distancia del toque
  if (touchDiff > 50) {
    // Deslizar hacia la derecha (pasar al siguiente elemento)
    currentIndex = Math.min(currentIndex + 1, totalItems - 1);
  } else if (touchDiff < -50) {
    // Deslizar hacia la izquierda (pasar al anterior elemento)
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  // Actualizar la posición después de deslizar
  updatePlatformCarouselPosition();
});

// Configuración inicial (carrusel de plataformas)
updatePlatformCarouselPosition();
