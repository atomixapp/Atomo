const track = document.querySelector('.carousel-track');
let index = 0;

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.style.position = 'absolute';
nextButton.style.right = '20px';
nextButton.style.top = '50%';
nextButton.style.transform = 'translateY(-50%)';

const prevButton = document.createElement('button');
prevButton.textContent = 'Prev';
prevButton.style.position = 'absolute';
prevButton.style.left = '20px';
prevButton.style.top = '50%';
prevButton.style.transform = 'translateY(-50%)';

document.body.appendChild(nextButton);
document.body.appendChild(prevButton);

nextButton.addEventListener('click', () => {
  if (index < 3) {
    index++;
    track.style.transform = `translateX(-${index * 220}px)`;
  }
});

prevButton.addEventListener('click', () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 220}px)`;
  }
});
