const ratingSection = document.querySelector('.rating-section');
const thankYouSection = document.querySelector('.thanks');
const submitBtn = document.querySelector('.submit');
const rateAgainBtn = document.querySelector('.rate-again');
let rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');


submitBtn.addEventListener('click', () => {
  thankYouSection.classList.remove('hidden');
  ratingSection.classList.add('hidden');
});

rateAgainBtn.addEventListener('click', () => {
  thankYouSection.classList.add('hidden');
  ratingSection.classList.remove('hidden');
  rating.innerHTML = 5;
});

rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = rate.innerHTML;    
  });
});
