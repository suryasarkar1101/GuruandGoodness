import { randomReviews } from "../utils/randomReviews";

const loadReviews = async (type, count, productId = null) => {
    const response = await fetch("/data/customer-reviews.json");

    if (!response.ok) {
        throw new Error("Review data not found");
    }
    const reviews = await response.json();
    let selectedReviews = [];
    if (type === "home") {
        selectedReviews = reviews.filter(
            review => review.featured
        );
    }
    else if (type === "about") {
        selectedReviews = [...reviews]
            .sort(() => Math.random() - 0.5)
            .slice(0, count);
    }

    else if (type === "product") {
        selectedReviews = reviews.filter(
            review => review.productId === productId
        );
        
    }
    return randomReviews(selectedReviews, count);
};

export default loadReviews;