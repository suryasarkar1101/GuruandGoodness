import authorImage from "../../assets/images/author.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";
import leafLeft from "../../assets/images/leaf-left.png";
import crystalRight from "../../assets/images/crystal-right.png";

const AuthorSection = () => {
    return (
        <section className="author-section">
            <div className="author-card">

                <div className="author-info">

                    <div className="author-image">
                        <img
                            src={authorImage}
                            alt="Author"
                        />
                    </div>

                    <div className="author-content">

                        <span className="author-label">
                            <img
                                src={lotusDivider}
                                alt=""
                            />
                            GURU INSIGHT
                        </span>

                        <h2>About the Author</h2>

                        <p className="author-name">
                            Guru and Goodness Editorial Team
                        </p>

                        <p className="author-text">
                            We share practical spiritual wisdom, authentic guidance,
                            and wellness insights to help you live a balanced,
                            meaningful, and positive life every day.
                        </p>

                    </div>

                </div>

                <div className="author-tags">
                    <span>Spiritual Wellness</span>
                    <span>Vastu Guidance</span>
                    <span>Crystal Knowledge</span>
                    <span>Organic Wellness</span>
                    <span>Positive Living</span>
                </div>

                <div className="author-features">

                    <div className="feature-item">
                        <i className="fa-regular fa-circle-check"></i>
                        Expert-Curated Content
                    </div>

                    <div className="feature-item">
                        <i className="fa-regular fa-circle-check"></i>
                        Authentic Wellness Guidance
                    </div>

                    <div className="feature-item">
                        <i className="fa-regular fa-circle-check"></i>
                        Practical Spiritual Insights
                    </div>

                    <div className="feature-item">
                        <i className="fa-regular fa-circle-check"></i>
                        Community-Focused Learning
                    </div>

                </div>

            </div>

            <img
                src={leafLeft}
                className="author-decor-left"
                alt=""
            />

            <img
                src={crystalRight}
                className="author-decor-right"
                alt=""
            />
        </section>
    );
};

export default AuthorSection;