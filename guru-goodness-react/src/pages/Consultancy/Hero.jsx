import { Link } from "react-router-dom";

import dividerBelow from "../../assets/images/divider_below.png";
import consultancyHeroBg from "../../assets/images/consultancy_hero.png";
import consultancyLeaf from "../../assets/images/icons/consultancy_leaf.png";
import consultancyLotus from "../../assets/images/icons/consultancy_lotus.png";
import consultancyStar from "../../assets/images/icons/consultancy_star.png";

import { WHATSAPP_URL } from "../../utils/constants";

const Hero = () => {
    return (
        <section
            className="consultancy-hero"
            style={{
                backgroundImage: `linear-gradient(
      90deg,
      rgba(251, 247, 240, .98) 0%,
      rgba(251, 247, 240, .96) 30%,
      rgba(251, 247, 240, .80) 42%,
      rgba(251, 247, 240, .25) 58%,
      rgba(251, 247, 240, 0) 68%
    ), url(${consultancyHeroBg})`,
            }}
        >
            <div className="consultancy-overlay"></div>

            <div className="consultancy-content">
                <div className="hero-title">
                    <span className="golden-title">Guidance for{" "}</span>
                    <span>a Better You</span>
                </div>

                <div className="hero-divider">
                    <img
                        src={dividerBelow}
                        alt="Divider"
                        className="divider-img"
                    />
                </div>

                <div className="hero-description">
                    Spiritual clarity. Personal growth. Purposeful living.
                    <br />
                    Trusted consultations for your inner transformation.
                </div>

                <div className="hero-buttons">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="herobtn-primary"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                        {" "}Book a Session
                    </a>

                    <Link
                        to="/shop"
                        className="herobtn-secondary"
                    >
                        Explore Products{" "}
                        <i className="fa-solid fa-bag-shopping"></i>
                    </Link>
                </div>

                <div className="hero-features-contact">
                    <div className="hero-feature-item">
                        <img
                            src={consultancyLeaf}
                            alt="Holistic Approach"
                        />
                        <span>Holistic Approach</span>
                    </div>

                    <div className="hero-feature-item">
                        <img
                            src={consultancyLotus}
                            alt="Personalized Guidance"
                        />
                        <span>Personalized Guidance</span>
                    </div>

                    <div className="hero-feature-item">
                        <img
                            src={consultancyStar}
                            alt="Trusted Consultancy"
                        />
                        <span>Trusted Consultancy</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;