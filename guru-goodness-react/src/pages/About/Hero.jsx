import { Link } from "react-router-dom";

import dividerBelow from "../../assets/images/divider_below.png";
import heroAboutBg from "../../assets/images/hero-about-bg.png";
import { WHATSAPP_URL } from "../../utils/constants";

const Hero = () => {
    return (
        <section className="about-highlight-section">
            <div className="about-highlight-bg" style={{
                backgroundImage: `url(${heroAboutBg})`,
            }}></div>
            <div className="about-highlight-overlay"></div>
            <div className="about-highlight-container">
                {/* LEFT CONTENT */}
                <div className="about-highlight-content">
                    <div className="hero-title">
                        Rooted in
                        <span>Ancient Wisdom,</span>
                        Designed for
                        Modern Living
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <div className="hero-description">
                        At Guru & Goodness,
                        we bring together spirituality,
                        wellness, healing, and conscious living —
                        helping you create balance,
                        positivity, and goodness in everyday life.
                    </div>

                    {/* BUTTONS */}
                    <div className="about-highlight-buttons">
                        <Link
                            to="/shop"
                            className="about-btn explore-btn"
                        >
                            Explore Products{" "}
                            <i className="fa-solid fa-bag-shopping"></i>
                        </Link>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-about-btn about-btn"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                            {" "}Talk on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
