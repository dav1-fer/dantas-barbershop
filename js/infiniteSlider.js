const sliderWrapper = document.querySelectorAll(".testimonial-slider");

if(!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
    addAnimation();
}

function addAnimation() {
    sliderWrapper.forEach(slider => {
        slider.setAttribute('data-animate', true);

        const sliderContainer = slider.querySelector(".testimonial-content");
        const sliderContent = Array.from(sliderContainer.children);


        sliderContent.forEach(item => {
            const cloneItem = item.cloneNode(true);
            cloneItem.setAttribute("aria-hidden", true);
            sliderContainer.appendChild(cloneItem);
        })
    })
}
