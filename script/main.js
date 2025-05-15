const slider = document.getElementById('slider');
slider.innerHTML += slider.innerHTML; // дублируем

let position = 0;
const speed = 0.5;

function animate() {
  position -= speed;
  // длина оригинального блока (до дублирования)
  const resetWidth = slider.scrollWidth / 2;
  if (Math.abs(position) >= resetWidth) {
    position = 0;
  }
  slider.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();


const offerSlides = document.querySelectorAll('.special-offers-item');
const offerPrev = document.querySelector('.btn-prev');
const offerNext = document.querySelector('.btn-next');
const offerDots = document.querySelectorAll('.dotes-2-button');
let offerIndex = 0;

function updateOfferSlider() {
  offerSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === offerIndex);
    if (offerDots[i]) {
      offerDots[i].classList.toggle('active', i === offerIndex);
    }
  });

  offerPrev.disabled = offerIndex === 0;
  offerNext.disabled = offerIndex === offerSlides.length - 1;
}

offerPrev.addEventListener('click', () => {
  if (offerIndex > 0) {
    offerIndex--;
    updateOfferSlider();
  }
});

offerNext.addEventListener('click', () => {
  if (offerIndex < offerSlides.length - 1) {
    offerIndex++;
    updateOfferSlider();
  }
});

offerDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    offerIndex = i;
    updateOfferSlider();
  });
});

updateOfferSlider();

document.addEventListener('DOMContentLoaded', function() {
  const openB = document.querySelectorAll(".open-button");
  const closeB = document.querySelectorAll(".close");
  const modals = document.querySelectorAll(".modal");

  openB.forEach(button => {
    button.addEventListener("click", function () {
      const modalId = button.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "flex";
    });
  });

  closeB.forEach(button => {
    button.addEventListener("click", function () {
      button.closest(".modal").style.display = "none";
    });
  });

  modals.forEach(modal => {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});


const reviewSlides = document.querySelectorAll('.home-reviews-row-item');
const reviewPrev = document.querySelector('.arrow-prev');
const reviewNext = document.querySelector('.arrow-next');
const reviewDots = document.querySelectorAll('.dotes-button');
let currentIndex = 0;
const slidesToShow = 3;

function updateReviewSlider() {
  reviewSlides.forEach((slide, i) => {
    slide.style.display = (i >= currentIndex && i < currentIndex + slidesToShow) ? 'block' : 'none';
  });

  reviewDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });

  reviewPrev.disabled = currentIndex === 0;
  reviewNext.disabled = currentIndex + slidesToShow >= reviewSlides.length;
}

reviewPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateReviewSlider();
  }
});

reviewNext.addEventListener('click', () => {
  if (currentIndex + slidesToShow < reviewSlides.length) {
    currentIndex++;
    updateReviewSlider();
  }
});

reviewDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    // ограничиваем, чтобы не вылезало за границы
    if (i <= reviewSlides.length - slidesToShow) {
      currentIndex = i;
    } else {
      currentIndex = reviewSlides.length - slidesToShow;
    }
    updateReviewSlider();
  });
});

updateReviewSlider();

// const animatedBlocks = document.querySelectorAll('.anime');

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       observer.unobserve(entry.target); // если нужно один раз
//     }
//   });
// }, {
//   threshold: 0.2,
//   rootMargin: '0px 0px -20% 0px'
// });

// animatedBlocks.forEach(block => observer.observe(block));


document.addEventListener('DOMContentLoaded', () => {
  const animatedBlocks = document.querySelectorAll('.anime');
  if (animatedBlocks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  animatedBlocks.forEach(block => observer.observe(block));
});


console.log("qqqqqq")