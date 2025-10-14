// script.js
document.querySelector('.sidebar-search').addEventListener('input', function(event) {
    let searchTerm = event.target.value.toLowerCase();
    let allCards = document.querySelectorAll('.movie-card');

    allCards.forEach(card => {
        let text = card.querySelector('img').alt.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
