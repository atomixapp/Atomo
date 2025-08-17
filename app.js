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

  // Desplazar el carrusel (mover a la imagen correspondiente)
  const offset = -currentIndex * 100;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Función para manejar la navegación del carrusel
function goToNext() {
  currentIndex = (currentIndex + 1) % carouselItems.length; // Avanza al siguiente
  updateCarousel();
}

function goToPrev() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; // Retrocede al anterior
  updateCarousel();
}

// Hacer que los puntos naveguen al hacer clic
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

// Agregar el detector de eventos para el desplazamiento del mouse
document.querySelector('.carousel-container').addEventListener('wheel', handleScroll);

// Configuración inicial
updateCarousel();

// Automatizar la navegación del carrusel cada 3 segundos
setInterval(goToNext, 3000);
