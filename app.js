// Variables del carrusel principal
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const carousel = document.querySelector('.carousel');

// Variables del carrusel de plataformas
const platformsCarousel = document.querySelector('.platforms-carousel');
const platformItems = document.querySelectorAll('.platform-item');
let itemWidth = platformItems[0].offsetWidth + 20; // Incluye el margen de 10px por lado
let isTouching = false;
let touchStartX = 0;
const totalItems = platformItems.length;

// Función para actualizar el carrusel principal
function updateCarousel() {
  // Desactivar todos los puntos
  dots.forEach(dot => dot.classList.remove('active'));

  // Activar el punto correspondiente
  dots[currentIndex].classList.add('active');

  // Desplazar el carrusel principal (mover a la imagen correspondiente)
  const offset = -currentIndex * 100;
  carousel.style.transition = "transform 0.5s ease"; // Asegura que la transición sea suave
  carousel.style.transform = `translateX(${offset}%)`;
}

// Función para navegar al siguiente ítem (carrusel principal)
function goToNext() {
  currentIndex = (currentIndex + 1) % carouselItems.length; // Avanza al siguiente
  updateCarousel();
}

// Función para retroceder al anterior ítem (carrusel principal)
function goToPrev() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; // Retrocede al anterior
  updateCarousel();
}

// Hacer que los puntos naveguen al hacer clic (carrusel principal)
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Función para manejar el desplazamiento del mouse (scroll)
function handleScroll(event) {
  if (event.deltaY > 0) {
    goToNext(); // Desplazamiento hacia abajo (avanzar)
  } else {
    goToPrev(); // Desplazamiento hacia arriba (retroceder)
  }
}

// Agregar el detector de eventos para el desplazamiento del mouse (carrusel principal)
document.querySelector('.carousel-container').addEventListener('wheel', handleScroll);

// Navegación con teclas del teclado (flechas)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    goToNext();
  } else if (e.key === 'ArrowLeft') {
    goToPrev();
  }
});

// Función para actualizar el carrusel de plataformas (táctil)
function updatePlatformCarouselPosition() {
  const offset = -currentIndex * itemWidth;
  platformsCarousel.style.transform = `translateX(${offset}px)`;
}

// Deslizar con el dedo (en pantallas pequeñas)
platformsCarousel.addEventListener('touchstart', (e) => {
  isTouching = true;
  touchStartX = e.touches[0].clientX;
});

platformsCarousel.addEventListener('touchmove', (e) => {
  if (!isTouching) return;
  const touchMoveX = e.touches[0].clientX;
  const touchDiff = touchStartX - touchMoveX;

  // Mover el carrusel de plataformas dependiendo del desplazamiento táctil
  platformsCarousel.style.transform = `translateX(${(-currentIndex * itemWidth) - touchDiff}px)`;
});

platformsCarousel.addEventListener('touchend', (e) => {
  if (!isTouching) return;
  isTouching = false;

  const touchEndX = e.changedTouches[0].clientX;
  const touchDiff = touchStartX - touchEndX;

  if (touchDiff > 50) {
    // Deslizar hacia la derecha
    currentIndex = Math.min(currentIndex + 1, totalItems - 1);
  } else if (touchDiff < -50) {
    // Deslizar hacia la izquierda
    currentIndex = Math.max(currentIndex - 1, 0);
  }

  // Actualizar la posición después de deslizar
  updatePlatformCarouselPosition();
});

// Configuración inicial (carrusel principal y plataformas)
updateCarousel();
updatePlatformCarouselPosition();

// Automatizar la navegación del carrusel principal cada 6 segundos
setInterval(goToNext, 6000);
