const track = document.querySelector('.carousel-track');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

let index = 0;

prevButton.textContent = '◀';
nextButton.textContent = '▶';

prevButton.classList.add('prev');
nextButton.classList.add('next');

document.body.appendChild(prevButton);
document.body.appendChild(nextButton);

prevButton.style.position = 'absolute';
nextButton.style.position = 'absolute';

prevButton.style.top = '50%';
nextButton.style.top = '50%';
prevButton.style.left = '20px';
nextButton.style.right = '20px';
prevButton.style.transform = 'translateY(-50%)';
nextButton.style.transform = 'translateY(-50%)';

nextButton.addEventListener('click', () => {
  if (index < 3) {
    index++;
    track.style.transform = `translateX(-${index * 320}px)`;
  }
});

prevButton.addEventListener('click', () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 320}px)`;
  }
});
