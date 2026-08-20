import { Link } from "react-router-dom";

import dividerBelow from "../../assets/images/divider_below.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";

import omLogo from "../../assets/images/icons/om_logo_bg.png";
import leafLogo from "../../assets/images/icons/leaf_logo_bg.png";
import lotusLogo from "../../assets/images/icons/lotus_logo_bg.png";
import sunLogo from "../../assets/images/icons/sun_logo_bg.png";

import heroBg from "../../assets/images/backgrounds/blog-hero-bg.png";

const Hero = ({ onExploreClick }) => {
    return (
        <section
            className="knowledge-section"
            style={{
                background: `linear-gradient(
            90deg,
            rgba(251, 247, 240, .98) 0%,
            rgba(251, 247, 240, .96) 30%,
            rgba(251, 247, 240, .80) 42%,
            rgba(251, 247, 240, .25) 58%,
            rgba(251, 247, 240, 0) 68%
        ), url(${heroBg}) center center / cover no-repeat`,
            }}
        >
            <div className="knowledge-bg-overlay"></div>

            <div className="knowledge-content">
                <div className="section-tag">
                    <img src={lotusDivider} alt="Lotus Divider" />
                    KNOWLEDGE CENTER
                </div>

                <div className="hero-title">
                    <span>Wisdom</span> for a Balanced,
                    <br />
                    <span>Positive &amp; </span>
                    <span className="golden-title">
                        Meaningful Life
                    </span>
                </div>

                <div className="hero-divider">
                    <img
                        src={dividerBelow}
                        alt="Divider"
                        className="divider-img"
                    />
                </div>

                <div className="hero-description">
                    Explore expert insights on spiritual wellness,
                    Vastu guidance, healing crystals, organic wellness
                    and simple practices that bring more positivity,
                    harmony and purpose to your life.
                </div>

                {/* Buttons */}

                <div className="knowledge-buttons">
                    <button
                        type="button"
                        id="exploreBtn"
                        className="herobtn-primary"
                        onClick={onExploreClick}
                    >
                        Explore Articles
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>

                    <Link
                        to="/consultancy"
                        className="btn-outline"
                    >
                        Book Consultancy
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>

                {/* Features */}

                <div className="knowledge-features">
                    <div className="feature">
                        <img src={omLogo} alt="Expert Wellness" />

                        <div>
                            <div className="feature-title">
                                Expert
                            </div>

                            <div className="feature-description">
                                Wellness Insights
                            </div>
                        </div>
                    </div>

                    <div className="feature">
                        <img src={leafLogo} alt="Crystal Guidance" />

                        <div>
                            <div className="feature-title">
                                Crystal
                            </div>

                            <div className="feature-description">
                                Guidance
                            </div>
                        </div>
                    </div>

                    <div className="feature">
                        <img src={lotusLogo} alt="Authentic Vastu" />

                        <div>
                            <div className="feature-title">
                                Authentic
                            </div>

                            <div className="feature-description">
                                Vastu Knowledge
                            </div>
                        </div>
                    </div>

                    <div className="feature">
                        <img src={sunLogo} alt="Positive Lifestyle" />

                        <div>
                            <div className="feature-title">
                                Positive
                            </div>

                            <div className="feature-description">
                                Lifestyle Resources
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;