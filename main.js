console.log('Tournament site loaded');
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-wrapper');
  const logo = document.querySelector('.logo-overlay');

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Add “scrolled” class when you've scrolled down at all
    if (currentScrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const btnPrev = document.querySelector('.carousel-btn.prev');
  const btnNext = document.querySelector('.carousel-btn.next');

  // amount to scroll each click (one card + gap)
  const cardWidth = document.querySelector('.result-card').offsetWidth + 16;

  btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  btnNext.addEventListener('click', () => {
    track.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const btnPrev = document.querySelector('.carousel-btn.prev');
  const btnNext = document.querySelector('.carousel-btn.next');

  // how much to scroll per click
  const scrollAmount = document.querySelector('.result-card').offsetWidth + 16;

  function updateArrows() {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    // show prev arrow only if scrolled right at all
    btnPrev.style.display = track.scrollLeft > 0 ? 'block' : 'none';
    // show next arrow only if there’s more to scroll right
    btnNext.style.display = track.scrollLeft < maxScrollLeft ? 'block' : 'none';
  }

  // initial check
  updateArrows();

  // on scroll (user dragging or button clicks), re-check
  track.addEventListener('scroll', updateArrows);

  // on arrow clicks, scroll then re-check after animation
  btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    setTimeout(updateArrows, 300);
  });
  btnNext.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(updateArrows, 300);
  });

  // in case window resizes
  window.addEventListener('resize', updateArrows);
});