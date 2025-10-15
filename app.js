// Aquí iría la lógica para cargar las películas desde Firestore y mostrarlas en la galería
document.addEventListener('DOMContentLoaded', () => {
  // Función para cargar las películas (simulada aquí)
  loadMovies();
});

function loadMovies() {
  const gallery = document.querySelector('.gallery');
  // Simulación de las películas, deberás sustituir esto por la lógica de Firestore
  const movies = [
    { title: 'Película 1', image: 'https://via.placeholder.com/200x300' },
    { title: 'Película 2', image: 'https://via.placeholder.com/200x300' },
    { title: 'Película 3', image: 'https://via.placeholder.com/200x300' }
  ];

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="card-info">
        <h3>${movie.title}</h3>
      </div>
    `;
    gallery.appendChild(card);
  });
}
