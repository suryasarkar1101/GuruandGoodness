function loadReviews(type, count, productId = null) {
    fetch("../data/customer-reviews.json")
        .then(response => response.json())
        .then(reviews => {
            let container = document.getElementById("reviewContainer");
            let selectedReviews = [];
            // Home page
            if (type === "home") {
                selectedReviews = reviews
                    .filter(review => review.featured);
            }           
            // Product Details page
            if (type === "product") {
                selectedReviews = reviews
                    .filter(review => review.productId == productId);
            }
            // Random every 2 days
            selectedReviews = randomReviews(
                selectedReviews,
                count
            );
            selectedReviews.forEach(review => {
                container.innerHTML += `
        <div class="gg-card">
            <div class="gg-user">
                <img src="${review.image}" alt="${review.name}">
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
        });
}
function randomReviews(reviews, count) {
    let period = Math.floor(
        new Date().getTime() /
        (1000 * 60 * 60 * 24 * 2)
    );
    function seed() {
        let x = Math.sin(period++) * 10000;
        return x - Math.floor(x);
    }
    let data = [...reviews];
    data.sort(() => seed() - 0.5);
    return data.slice(0, count);
}
