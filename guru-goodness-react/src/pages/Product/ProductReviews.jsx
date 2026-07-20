import ReviewCard from "../../components/ReviewCard/ReviewCard";

const ProductReviews = ({ reviews }) => {

    if (!reviews?.length) {
        return null;
    }

    return (
        <section className="gg-testimonial-product-section">

            <div className="gg-benefits-header">

                <span className="gg-benefits-arrow">
                    <i className="fa-solid fa-angle-right"></i>
                </span>
                <div className="benefits-title">
                    Customer Reviews
                </div>
            </div>

            <div className="gg-testimonial-product-grid">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                    />
                ))}
            </div>

        </section>
    );
};

export default ProductReviews;