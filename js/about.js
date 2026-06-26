const basePath = window.location.pathname.includes("/GuruandGoodness/")
    ? "/GuruandGoodness/"
    : "/";
fetch(basePath + "data/customer-reviews.json")
    .then(response => response.json())
    .then(reviews => {
        let container = document.getElementById("reviewContainer");
        let aboutReviews = reviews
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);
        aboutReviews.forEach(review => {
            container.innerHTML += `
        <div class="gg-card">
            <div class="gg-user">
                <img src="${review.image}" alt="${review.name}">
                <div>
                    <h4>${review.name}</h4>
                    <span>${review.location}</span>

                    <div class="gg-stars">
                        ${"<i class='fa-solid fa-star'></i>".repeat(review.rating)}
                    </div>
                </div>
            </div>
            <p>${review.review}</p>
            <div class="gg-bottom-quote">
                <i class="fa-solid fa-quote-right"></i>
            </div>
        </div>`;
        });
        initTestimonialSlider();
    });

function initTestimonialSlider() {

    const track = document.querySelector(".testimonial-track");
    const cards = document.querySelectorAll(".gg-card");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");
    const dotsWrap = document.querySelector(".testimonial-dots");

    if (!track || cards.length === 0) return;
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
        for (let i = 0; i <= getMaxSlide(); i++) {
            let dot = document.createElement("span");
            dot.classList.add("testimonial-dot");
            if (i === current)
                dot.classList.add("active");
            dot.onclick = () => {
                current = i;
                updateSlider();
            };
            dotsWrap.appendChild(dot);
        }
    }

    function updateSlider() {
        let move = current * (cards[0].offsetWidth + 40);
        track.style.transform = `translateX(-${move}px)`;
        document.querySelectorAll(".testimonial-dot")
            .forEach((dot, index) => {
                dot.classList.toggle("active", index === current);
            });
    }

    nextBtn.onclick = () => {
        current++;
        if (current > getMaxSlide())
            current = 0;
        updateSlider();
    };
    prevBtn.onclick = () => {
        current--;
        if (current < 0)
            current = getMaxSlide();
        updateSlider();
    };

    window.addEventListener("resize", () => {
        if (current > getMaxSlide())
            current = getMaxSlide();
        createDots();
        updateSlider();
    });
    createDots();
    updateSlider();
    setInterval(() => {
        current++;
        if (current > getMaxSlide())
            current = 0;
        updateSlider();
    }, 5000);
}