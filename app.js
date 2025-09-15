// Variables para el carrusel de plataformas y géneros
const platformsCarousel = document.querySelector('.platforms-carousel');
const actionCarousel = document.querySelector('.movies-carousel');

const platformItems = document.querySelectorAll('.platform-item');
const movieItems = document.querySelectorAll('.movie-item');

let platformIndex = 0;
let movieIndex = 0;

let isTouching = false;
let touchStartX = 0;

// Función para actualizar la posición del carrusel (plataformas y géneros)
function updateCarouselPosition(carousel, index, itemWidth) {
  const offset = -index * itemWidth;
  carousel.style.transition = 'transform 0.3s ease';
  carousel.style.transform = `translateX(${offset}px)`;
}

// Funciones de deslizamiento para carruseles de plataformas y géneros
function handleTouchStart(e, carouselType) {
  isTouching = true;
  touchStartX = e.touches[0].clientX;
}

function handleTouchMove(e, carouselType, itemWidth, index) {
  if (!isTouching) return;

  const touchMoveX = e.touches[0].clientX;
  const touchDiff = touchStartX - touchMoveX;

  carouselType.style.transition = 'none'; // Desactivar la transición mientras se mueve con el dedo
  carouselType.style.transform = `translateX(${(-index * itemWidth) - touchDiff}px)`; // Mover solo el contenido del carrusel
}

function handleTouchEnd(e, carouselType, itemWidth, index) {
  if (!isTouching) return;
  isTouching = false;

  const touchEndX = e.changedTouches[0].clientX;
  const touchDiff = touchStartX - touchEndX;

  // Ajustar el índice dependiendo de la distancia del deslizamiento
  if (touchDiff > 50) {
    index = Math.min(index + 1, carouselType === platformsCarousel ? platformItems.length - 1 : movieItems.length - 1);
  } else if (touchDiff < -50) {
    index = Math.max(index - 1, 0);
  }

  // Actualizar la posición del carrusel
  updateCarouselPosition(carouselType, index, itemWidth);
}

// Funciones para manejar el deslizamiento
platformsCarousel.addEventListener('touchstart', (e) => handleTouchStart(e, platformsCarousel));
platformsCarousel.addEventListener('touchmove', (e) => handleTouchMove(e, platformsCarousel, platformItems[0].offsetWidth + 15, platformIndex));
platformsCarousel.addEventListener('touchend', (e) => handleTouchEnd(e, platformsCarousel, platformItems[0].offsetWidth + 15, platformIndex));

actionCarousel.addEventListener('touchstart', (e) => handleTouchStart(e, actionCarousel));
actionCarousel.addEventListener('touchmove', (e) => handleTouchMove(e, actionCarousel, movieItems[0].offsetWidth + 15, movieIndex));
actionCarousel.addEventListener('touchend', (e) => handleTouchEnd(e, actionCarousel, movieItems[0].offsetWidth + 15, movieIndex));
