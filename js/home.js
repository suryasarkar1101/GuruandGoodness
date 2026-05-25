
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("show");

});

/* CLOSE WHEN CLICK OUTSIDE */

document.addEventListener("click", (e) => {

    if (
        !menuToggle.contains(e.target) &&
        !mobileMenu.contains(e.target)
    ) {
        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("show");
    }

});
// ===============================
// FOOTER ACCORDION
// ===============================
const accordionItems = document.querySelectorAll(
    ".footer-accordion-item"
);

accordionItems.forEach((item) => {

    const header = item.querySelector(
        ".footer-accordion-header"
    );

    if (!header) return;

    header.addEventListener("click", () => {

        accordionItems.forEach((otherItem) => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


// ===============================
// COMMON AUTO SLIDER FUNCTION
// ===============================
function createAutoSlider({
    sliderSelector,
    cardSelector,
    gap = 0,
    interval = 3000,
    mobileWidth = 1200
}) {
    const slider = document.querySelector(
        sliderSelector
    );

    if (
        !slider ||
        window.innerWidth > mobileWidth
    ) return;

    let scrollAmount = 0;
    let autoSlide;

    function startSlider() {

        autoSlide = setInterval(() => {

            const card = slider.querySelector(
                cardSelector
            );

            if (!card) return;

            const cardWidth =
                card.offsetWidth;

            scrollAmount += cardWidth;

            // Reset slider
            if (
                scrollAmount >=
                slider.scrollWidth -
                slider.clientWidth
            ) {

                scrollAmount = 0;

            }

            slider.scrollTo({
                left: scrollAmount + gap,
                behavior: "smooth"
            });

        }, interval);

    }

    startSlider();

    // Pause on touch
    slider.addEventListener(
        "touchstart",
        () => {
            clearInterval(autoSlide);
        }
    );

    // Restart on touch end
    slider.addEventListener(
        "touchend",
        () => {

            clearInterval(autoSlide);
            startSlider();

        }
    );

}


// ===============================
// MODERN CARD GRID SLIDER
// ===============================
createAutoSlider({
    sliderSelector: ".modern-card-grid",
    cardSelector: ".modern-card",
    gap: 20,
    interval: 3000,
    mobileWidth: 1200
});


// ===============================
// PRODUCT SLIDER
// ===============================
createAutoSlider({
    sliderSelector: ".products-slider",
    cardSelector: ".product-card",
    gap: 18,
    interval: 3000,
    mobileWidth: 992
});


// ===============================
// TESTIMONIAL SLIDER
// ===============================
createAutoSlider({
    sliderSelector: ".gg-testimonial-grid",
    cardSelector: ".gg-card",
    gap: 18,
    interval: 3000,
    mobileWidth: 768
});