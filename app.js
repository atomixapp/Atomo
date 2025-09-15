    const carousel = document.getElementById('carousel');
    let startX, scrollLeft, isDown = false;

    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Desplazamiento más rápido
      carousel.scrollLeft = scrollLeft - walk;
    });

    // Funcionalidad de deslizar con el dedo (Touch Events)
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', (e) => {
      touchEndX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', () => {
      if (touchStartX - touchEndX > 100) {
        carousel.scrollLeft += 150; // Desplazamiento hacia la derecha
      } else if (touchEndX - touchStartX > 100) {
        carousel.scrollLeft -= 150; // Desplazamiento hacia la izquierda
      }
    });
