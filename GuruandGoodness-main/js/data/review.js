function loadReviews(type, count, productId = null) {
    const basePath = window.location.pathname.includes("/GuruandGoodness/")
        ? "/GuruandGoodness/"
        : "/";

    fetch(basePath + "data/customer-reviews.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Review data not found");
            }
            return response.json();
        })
        .then(reviews => {
            const container = document.getElementById("reviewContainer");
            if (!container) return;
            let selectedReviews = [];
            // Home page
            if (type === "home") {
                selectedReviews = reviews
                    .filter(review => review.featured);
            }
            // Product Details page
            if (type === "product") {
                selectedReviews = reviews
                    .filter(review => review.productId === productId);
            }
            // Random every 2 days
            selectedReviews = randomReviews(
                selectedReviews,
                count
            );
            let html = "";
            selectedReviews.forEach(review => {
                html += `
        <div class="gg-card">
            <div class="gg-user">
                <img src="${basePath + review.image}" alt="${review.name}">
                <div>
                    <h4>${review.name}</h4>
                    <span>${review.location}</span>
                    <div class="gg-stars">
                    ${"<i class='fa-solid fa-star'></i>"
                        .repeat(review.rating)
                    }
                    </div>
                </div>
            </div>
            <p>${review.review}</p>
            <div class="gg-bottom-quote">
                <i class="fa-solid fa-quote-right"></i>
            </div>
        </div>
        `;
            });
            container.innerHTML = html;
        });
}
function randomReviews(reviews, count) {
    let period = Math.floor(
        new Date().getTime() /
        (1000 * 60 * 60 * 24 * 2)
    );
    let seedValue = period;
    function seed() {
        let x = Math.sin(seedValue++) * 10000;
        return x - Math.floor(x);
    }
    let data = [...reviews];
    data.sort(() => seed() - 0.5);
    return data.slice(0, count);
}
