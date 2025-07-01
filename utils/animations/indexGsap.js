document.addEventListener("DOMContentLoaded", (event) => {
    let tlHero = gsap.timeline();
    tlHero.from('.line', {
        yPercent: -100,
        opacity: 0,
        ease: "power2",
        stagger: {
            from: "center",
            amount: 0.2,
        },
        duration: 0.8
    });
    tlHero.from('h1', {
        y: 24,
        opacity: 0,
        ease: "power2.out",
        duration: 0.6
    }, "<=0.2");
    tlHero.from('.hero-label', {
        y: 24,
        opacity: 0,
        ease: "power2.out",
        duration: 0.6 
    }, "<=0.1");

});


gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', ()=> {
    ScrollTrigger.create({
        trigger: ".result-wrapper",
        start: "top top",
        end: "+=900vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
            gsap.to(".result-wrapper", {
                x: `${-210 * self.progress}vw`,
                duration: 0.8,
                ease: "power3.out",
            })
        }
    });

});