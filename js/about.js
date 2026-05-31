const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".gg-card");
const prevBtn = document.querySelector(".testimonial-prev");
const nextBtn = document.querySelector(".testimonial-next");
const dotsWrap = document.querySelector(".testimonial-dots");

let current = 0;

function getVisibleCards() {
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 991) return 2;
    return 4;
}

function getMaxSlide() {
    return cards.length - getVisibleCards();
}

function createDots() {
    dotsWrap.innerHTML = "";
    const totalDots = getMaxSlide() + 1;
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("span");
        dot.classList.add("testimonial-dot");
        if (i === current) dot.classList.add("active");
        dot.addEventListener("click", () => {
            current = i;
            updateSlider();
        });
        dotsWrap.appendChild(dot);
    }
}

function updateSlider() {
    const card = cards[0];
    const gap = 40;
    const move = current * (card.offsetWidth + gap);
    track.style.transform = `translateX(-${move}px)`;
    document.querySelectorAll(".testimonial-dot").forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === current
        );
    });
}

nextBtn.addEventListener("click", () => {
    if (current < getMaxSlide()) {
        current++;
    } else {
        current = 0;
    }
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    if (current > 0) {
        current--;
    } else {
        current = getMaxSlide();
    }
    updateSlider();
});

window.addEventListener("resize", () => {
    if (current > getMaxSlide()) {
        current = getMaxSlide();
    }
    createDots();
    updateSlider();
});

createDots();
updateSlider();

setInterval(() => {
    if (current < getMaxSlide()) {
        current++;
    } else {
        current = 0;
    }
    updateSlider();
}, 5000);

function createAutoSlider({
    sliderSelector,
    cardSelector,
    gap = 0,
    interval = 3000,
    mobileWidth = 1200
}) {
    const slider = document.querySelector(sliderSelector);

    if (
        !slider ||
        window.innerWidth > mobileWidth
    ) return;

    let scrollAmount = 0;
    let autoSlide;

    function startSlider() {

        autoSlide = setInterval(() => {

            const card = slider.querySelector(cardSelector);
            if (!card) return;
            const cardWidth = card.offsetWidth;
            scrollAmount += cardWidth;
            // Reset slider
            if (
                scrollAmount >=
                slider.scrollWidth -
                slider.clientWidth
            ) {
                scrollAmount = 0;
            } else {
                scrollAmount = scrollAmount + gap;
            }
            slider.scrollTo({
                left: scrollAmount,
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

createAutoSlider({
    sliderSelector: ".about-features",
    cardSelector: ".about-feature-card",
    gap: 20,
    interval: 3000,
    mobileWidth: 1200
});