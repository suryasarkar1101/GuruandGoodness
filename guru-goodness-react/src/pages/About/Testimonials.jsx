import { useEffect, useRef, useState } from "react";

import dividerBelow from "../../assets/images/divider_below.png";

import useAboutTestimonialSlider from "../../hooks/useAboutTestimonialSlider";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import loadReviews from "../../api/reviewApi";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const { current, setCurrent, next, prev, maxSlide, } = useAboutTestimonialSlider(reviews.length);
    const trackRef = useRef(null);

    useEffect(() => {
        if (!trackRef.current) return;

        const firstCard = trackRef.current.querySelector(".gg-card");
        if (!firstCard) return;

        const gap = 40; // Same as your CSS gap
        const move = current * (firstCard.offsetWidth + gap);

        trackRef.current.style.transform = `translateX(-${move}px)`;
    }, [current, reviews]);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const data = await loadReviews("about", 9);
                setReviews(data);
            } catch (error) {
                console.error(error);
            }
        };

        getReviews();
    }, []);
    return (
        <section className="testimonial-section">
            <div className="testimonial-heading">
                What People Feel with Guru and Goodness
            </div>

            <div className="hero-divider">
                <img
                    src={dividerBelow}
                    alt="Divider"
                    className="divider-img"
                />
            </div>

            <div className="testimonial-wrapper">
                <button
                    className="testimonial-arrow testimonial-prev"
                    onClick={prev}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <div className="testimonial-track-container">
                    <div ref={trackRef} className="testimonial-track">
                        {reviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                review={review}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className="testimonial-arrow testimonial-next"
                    onClick={next}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>

            <div className="testimonial-dots">
                {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                    <span
                        key={index}
                        className={`testimonial-dot ${current === index ? "active" : ""
                            }`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;