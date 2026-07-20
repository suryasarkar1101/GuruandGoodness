import { Link } from "react-router-dom";

import dividerBelow from "../../assets/images/divider_below.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";
import contactHeroBg from "../../assets/images/backgrounds/contact-hero-bg.png";

import { WHATSAPP_URL } from "../../utils/constants";

const Hero = () => {
    return (
        <section className="contact-hero-section">
            <div class="contact-hero-bg" style={{
                backgroundImage: `url(${contactHeroBg})`,
            }}></div>
            <div className="contact-highlight-overlay"></div>

            <div className="contact-hero-container">
                <div className="contact-hero-content">

                    <div className="section-tag">
                        <img
                            src={lotusDivider}
                            alt="Lotus Divider"
                        />
                        WE'RE HERE
                    </div>

                    <div className="hero-title">
                        To <span>Support Your Wellness</span> Journey
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <div className="hero-description">
                        Whether you have a question, need guidance, or
                        want to explore our spiritual products, we are
                        always here for you.
                    </div>

                    <div className="contact-hero-buttons">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-whatsapp-btn"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                            CHAT ON WHATSAPP
                        </a>

                        <Link
                            to="/consultancy"
                            className="contact-book-btn"
                        >
                            <i className="fa-regular fa-calendar"></i>
                            BOOK CONSULTATION
                        </Link>
                    </div>

                    <div className="contact-features">

                        <div className="contact-feature">
                            <i className="fa-solid fa-bolt"></i>
                            <span>Quick Response</span>
                        </div>

                        <div className="contact-feature">
                            <i className="fa-solid fa-user-doctor"></i>
                            <span>Personalized Guidance</span>
                        </div>

                        <div className="contact-feature">
                            <i className="fa-solid fa-shield-heart"></i>
                            <span>Trusted Recommendations</span>
                        </div>

                        <div className="contact-feature">
                            <i className="fa-solid fa-heart-pulse"></i>
                            <span>Human Support</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;