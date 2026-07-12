import { useEffect, useState, useRef } from "react";
import loadReviews from "../../api/reviewApi";
import useAutoSlider from "../../hooks/useAutoSlider";

import ReviewCard from "../../components/ReviewCard/ReviewCard";

import dividerImg from "../../assets/images/divider_below.png";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const sliderRef = useRef(null);
    useAutoSlider(sliderRef, ".gg-card", {
        gap: 18,
        interval: 3000,
        mobileWidth: 768,
    });
    useEffect(() => {
        const getReviews = async () => {
            try {
                const data = await loadReviews("home", 4);
                setReviews(data);
            } catch (error) {
                console.error(error);
            }
        };
        getReviews();
    }, []);

    return (
        <section className="gg-testimonial-section">
            <div className="gg-floating-quote gg-quote-left">
                <i className="fa-solid fa-quote-left"></i>
            </div>

            <div className="gg-floating-quote gg-quote-right">
                <i className="fa-solid fa-quote-right"></i>
            </div>

            <div className="gg-testimonial-container">
                <div className="hero-divider">
                    <img
                        src={dividerImg}
                        alt="Divider"
                        className="divider-img"
                    />
                </div>

                <div className="collections-title">
                    Experiences Shared by Our Community
                </div>

                <p>
                    Stories of positivity, healing, mindful living, and spiritual wellness
                    from people who connected with Guru and Goodness.
                </p>

                {/* Testimonials */}
                <div
                    className="gg-testimonial-grid"
                    id="reviewContainer"
                    ref={sliderRef}
                >
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="gg-stats features-marquee">
                    <div className="features-track">
                        <div className="gg-stat-item">
                            <i className="fa-solid fa-users"></i>

                            <div>
                                <h5>10,000+</h5>
                                <p>Happy Customers</p>
                            </div>
                        </div>

                        <div className="gg-stat-item">
                            <i className="fa-regular fa-star"></i>

                            <div>
                                <h5>4.9/5</h5>
                                <p>Average Rating</p>
                            </div>
                        </div>

                        <div className="gg-stat-item">
                            <i className="fa-solid fa-shield-heart"></i>

                            <div>
                                <h5>100%</h5>
                                <p>Trusted & Loved</p>
                            </div>
                        </div>

                        <div className="gg-stat-item">
                            <i className="fa-solid fa-spa"></i>

                            <div>
                                <h5>Positive Impact</h5>
                                <p>Mindful Living</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;