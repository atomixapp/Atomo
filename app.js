// Variables del carrusel de plataformas
const platformsCarousel = document.querySelector('.platforms-carousel');
const platformItems = document.querySelectorAll('.platform-item');
let itemWidth = platformItems[0].offsetWidth + 20; // Incluye el margen de 10px por lado
let currentIndex = 0; // Índice de los elementos del carrusel de plataformas
let isTouching = false;
let touchStartX = 0;
const totalItems = platformItems.length;

// Función para actualizar el carrusel de plataformas
function updatePlatformCarouselPosition() {
  const offset = -currentIndex * itemWidth;
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
  platformsCarousel.style.transform = `translateX(${(-currentIndex * itemWidth) - touchDiff}px)`;
});

platformsCarousel.addEventListener('touchend', (e) => {
  if (!isTouching) return;
  isTouching = false;

  const touchEndX = e.changedTouches[0].clientX; // Posición final del toque
  const touchDiff = touchStartX - touchEndX; // Distancia que ha recorrido el toque

  // Si el movimiento fue suficientemente grande, cambiar el índice
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

// Automatizar la navegación del carrusel principal cada 6 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalItems; // Avanza al siguiente ítem
  updatePlatformCarouselPosition();
}, 6000);
