// Si deseas cargar películas dinámicamente, aquí puedes agregar código
document.addEventListener("DOMContentLoaded", () => {
    const movieData = [
        { img: "https://via.placeholder.com/200x300", title: "Película 1" },
        { img: "https://via.placeholder.com/200x300", title: "Película 2" },
        { img: "https://via.placeholder.com/200x300", title: "Película 3" },
        { img: "https://via.placeholder.com/200x300", title: "Película 4" },
        // Agregar más películas si es necesario
    ];

    const movieGallery = document.querySelector('.movie-gallery');
    movieGallery.innerHTML = movieData.map(movie => `
        <div class="movie-card">
            <img src="${movie.img}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        </div>
    `).join('');
});
