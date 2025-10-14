// script.js
const categories = [
    {
        title: 'Acción',
        movies: [
            { title: 'Película 1', img: 'img/pelicula1.jpg' },
            { title: 'Película 2', img: 'img/pelicula2.jpg' }
        ]
    },
    {
        title: 'Comedia',
        movies: [
            { title: 'Película A', img: 'img/peliculaA.jpg' },
            { title: 'Película B', img: 'img/peliculaB.jpg' }
        ]
    }
];

const movieGalleryElements = document.querySelectorAll('.movie-gallery');

categories.forEach((category, index) => {
    const gallery = movieGalleryElements[index];
    category.movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        const movieImg = document.createElement('img');
        movieImg.src = movie.img;
        
        movieCard.appendChild(movieImg);
        gallery.appendChild(movieCard);
    });
});
