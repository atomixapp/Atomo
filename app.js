// Variables para el carrusel principal
const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

// Variables para los carruseles de plataformas y géneros
const platformsCarousel = document.querySelector('.platforms-carousel');
const actionCarousel = document.querySelector('.movies-carousel');

const platformItems = document.querySelectorAll('.platform-item');
const movieItems = document.querySelectorAll('.movie-item');

let platformIndex = 0;
let movieIndex = 0;

let isTouching = false;
let touchStartX = 0;

// Función para actualizar el carrusel principal
function updateCarousel() {
  // Desplazar el carrusel a la imagen correspondiente
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Actualizar los puntos de navegación
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Función para actualizar los carruseles de plataformas y géneros
function updateCarouselPosition(carousel, index, itemWidth) {
  const offset = -index * itemWidth;
  carousel.style.transition = 'transform 0.3s ease';
  carousel.style.transform = `translateX(${offset}px)`;
}

// Cambiar al siguiente carrusel principal
function nextCarousel() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

// Cambiar al carrusel principal anterior
function prevCarousel() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

// Eventos de los puntos de navegación del carrusel principal
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.getAttribute('data-index'));
    updateCarousel();
  });
});

// Iniciar carrusel principal (cada 5 segundos)
setInterval(nextCarousel, 5000);

// Inicializar carrusel principal al cargar la página
updateCarousel();

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
  carouselType.style.transform = `translateX(${(-index * itemWidth) - touchDiff}px)`;
}

function handleTouchEnd(e, carouselType, itemWidth, index) {
  if (!isTouching) return;
  isTouching = false;

  const touchEndX = e.changedTouches[0].clientX;
  const touchDiff = touchStartX - touchEndX;

  if (touchDiff > 50) {
    index = Math.min(index + 1, carouselType === platformsCarousel ? platformItems.length - 1 : movieItems.length - 1);
  } else if (touchDiff < -50) {
    index = Math.max(index - 1, 0);
  }

  updateCarouselPosition(carouselType, index, itemWidth);
}

// Eventos de deslizamiento para carrusel de plataformas
platformsCarousel.addEventListener('touchstart', (e) => handleTouchStart(e, platformsCarousel));
platformsCarousel.addEventListener('touchmove', (e) => handleTouchMove(e, platformsCarousel, platformItems[0].offsetWidth + 15, platformIndex));
platformsCarousel.addEventListener('touchend', (e) => handleTouchEnd(e, platformsCarousel, platformItems[0].offsetWidth + 15, platformIndex));

// Eventos de deslizamiento para carrusel de géneros (acción)
actionCarousel.addEventListener('touchstart', (e) => handleTouchStart(e, actionCarousel));
actionCarousel.addEventListener('touchmove', (e) => handleTouchMove(e, actionCarousel, movieItems[0].offsetWidth + 15, movieIndex));
actionCarousel.addEventListener('touchend', (e) => handleTouchEnd(e, actionCarousel, movieItems[0].offsetWidth + 15, movieIndex));
