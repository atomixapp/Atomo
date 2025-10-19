const movies = [
    {
        title: "Inception",
        year: 2010,
        poster: "https://image.tmdb.org/t/p/w500/8RyP2z1Zy3k6bG0b6B6nU1z1Zy3k.jpg",
        description: "Un ladrón que roba secretos a través del uso de la tecnología de los sueños es ofrecido la oportunidad de borrar su pasado criminal como pago por implantar una idea en la mente de un CEO."
    },
    {
        title: "Interstellar",
        year: 2014,
        poster: "https://image.tmdb.org/t/p/w500/9z6Q7F6r3C6Vv1I6yGJ7v1U0w2b.jpg",
        description: "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad."
    },
    {
        title: "The Matrix",
        year: 1999,
        poster: "https://image.tmdb.org/t/p/w500/z8p0WZb8fZz1c1b1tU1v1v1v1.jpg",
        description: "Un programador informático descubre que la realidad que conoce es una simulación creada por máquinas que han esclavizado a la humanidad."
    }
];

function displayMovies() {
    const container = document.getElementById('movie-container');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h2>${movie.title} (${movie.year})</h2>
            <p>${movie.description}</p>
        `;
        container.appendChild(movieDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayMovies);
