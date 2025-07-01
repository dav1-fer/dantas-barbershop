 const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".img-slider");

let currentIndex = 0;
let autoSlide = true;
let isSliderVisible = true;
let intervalId = null;

// Show the slide at a given index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

// Advance to next slide
function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

// Start the auto-slide loop
function startAutoSlide() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      if (autoSlide && isSliderVisible) {
        nextSlide();
      }
    }, 2500);
  }
}

// Stop the auto-slide loop
function stopAutoSlide() {
  clearInterval(intervalId);
  intervalId = null;
}

// Handle dot click (user interaction)
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-index"));
    showSlide(index);
    autoSlide = false; // Stop auto-slide on interaction
  });
});

// IntersectionObserver to detect slider visibility
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    isSliderVisible = entry.isIntersecting;

    if (isSliderVisible && autoSlide) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
  });
}, {
  threshold: 0.3 // Consider visible if 30% is in view
});

// Start observing
observer.observe(slider);

// Swipe gesture support
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

slider.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
}, false);

function handleGesture() {
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > 50) { // Mínimo de 50px para ser considerado swipe
    autoSlide = false; // Parar auto-slide após interação manual

    if (swipeDistance < 0) {
      // Swipe para esquerda: próxima imagem
      nextSlide();
    } else {
      // Swipe para direita: imagem anterior
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prevIndex);
    }
  }
}

// Start auto-slide initially
startAutoSlide();