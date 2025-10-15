// Aquí iría la lógica para cargar las películas desde Firestore y mostrarlas en la galería
document.addEventListener('DOMContentLoaded', () => {
  // Función para cargar las películas (simulada aquí)
  loadMovies();
});

function loadMovies() {
  const gallery = document.querySelector('.gallery');
  // Simulación de las películas, deberás sustituir esto por la lógica de Firestore
  const movies = [
    { title: 'Película 1', image: 'https://image.tmdb.org/t/p/original/huvM6PcelNHpL3ldtgDpxstQWqN.jpg' },
    { title: 'Película 2', image: 'https://image.tmdb.org/t/p/original/tgKYnJlze79IUKkPmtsW2nSUeeB.jpg' },
    { title: 'Película 3', image: 'https://image.tmdb.org/t/p/original/fSRRH7UasrE6q240H00dww3vE1c.jpg' }
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
