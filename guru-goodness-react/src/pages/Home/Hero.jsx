import { Link } from "react-router-dom";
import { WHATSAPP_URL } from "../../utils/constants";

import divider from "../../assets/images/divider_below.png";
import authenticProduct from "../../assets/images/icons/auth_product.png";
import yogi from "../../assets/images/icons/yogi.png";
import leafProduct from "../../assets/images/icons/leaf_product.png";

import heroBg from "../../assets/images/backgrounds/hero-home-bg.png";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
            <div className="dark-overlay"></div>

            <div className="hero-content">
                <div className="hero-title">
                    Ancient Wisdom for Modern Wellness
                </div>

                <div className="hero-divider">
                    <img src={divider} alt="Divider" className="divider-img" />
                </div>

                <div className="hero-description">
                    Spiritual products, healing crystals, vastu products
                    and organic wellness essentials for a balanced,
                    positive and harmonious life.
                </div>

                <div className="hero-buttons">
                    <Link to="/shop" className="hero-btn primary-btn">
                        Explore Products <i className="fa-solid fa-bag-shopping"></i>
                    </Link>

                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hero-btn secondary-btn">
                        <i className="fa-brands fa-whatsapp"></i>
                        WhatsApp Us
                    </a>
                </div>

                <div className="hero-features">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <img
                                src={authenticProduct}
                                alt="Authentic Products Icon"
                                className="feature-img"
                            />
                        </div>
                        <span>Authentic Products</span>
                    </div>

                    <div className="divider"></div>

                    <div className="feature-box">
                        <div className="feature-icon">
                            <img
                                src={yogi}
                                alt="Spiritual Guidance Icon"
                                className="feature-img"
                            />
                        </div>
                        <span>Spiritual Guidance</span>
                    </div>

                    <div className="divider"></div>

                    <div className="feature-box">
                        <div className="feature-icon">
                            <img
                                src={leafProduct}
                                alt="Organic Wellness Icon"
                                className="feature-img"
                            />
                        </div>
                        <span>Organic Wellness</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;