// Datos de las películas por categoría
const peliculas = {
  accion: [
    { titulo: 'Película de Acción 1', imagen: 'https://via.placeholder.com/250x400?text=Acción+1' },
    { titulo: 'Película de Acción 2', imagen: 'https://via.placeholder.com/250x400?text=Acción+2' },
    { titulo: 'Película de Acción 3', imagen: 'https://via.placeholder.com/250x400?text=Acción+3' },
  ],
  comedia: [
    { titulo: 'Película de Comedia 1', imagen: 'https://via.placeholder.com/250x400?text=Comedia+1' },
    { titulo: 'Película de Comedia 2', imagen: 'https://via.placeholder.com/250x400?text=Comedia+2' },
    { titulo: 'Película de Comedia 3', imagen: 'https://via.placeholder.com/250x400?text=Comedia+3' },
  ],
  drama: [
    { titulo: 'Película de Drama 1', imagen: 'https://via.placeholder.com/250x400?text=Drama+1' },
    { titulo: 'Película de Drama 2', imagen: 'https://via.placeholder.com/250x400?text=Drama+2' },
    { titulo: 'Película de Drama 3', imagen: 'https://via.placeholder.com/250x400?text=Drama+3' },
  ],
  aventura: [
    { titulo: 'Película de Aventura 1', imagen: 'https://via.placeholder.com/250x400?text=Aventura+1' },
    { titulo: 'Película de Aventura 2', imagen: 'https://via.placeholder.com/250x400?text=Aventura+2' },
    { titulo: 'Película de Aventura 3', imagen: 'https://via.placeholder.com/250x400?text=Aventura+3' },
  ]
};

// Función para mostrar las películas de una categoría
function showCategory(category) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // Limpiar galería antes de agregar nuevas películas

  peliculas[category].forEach(pelicula => {
    const imgElement = document.createElement('img');
    imgElement.src = pelicula.imagen;
    imgElement.alt = pelicula.titulo;
    gallery.appendChild(imgElement);
  });
}

// Mostrar la primera categoría por defecto
showCategory('accion');
