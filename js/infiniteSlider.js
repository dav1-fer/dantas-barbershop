document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".testimonial-slider");

  sliders.forEach(slider => {
    const cards = Array.from(slider.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      slider.appendChild(clone);
    });
  });
});
