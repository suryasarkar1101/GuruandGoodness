import { Link } from "react-router-dom";
import { useRef } from "react";
import useAutoSlider from "../../hooks/useAutoSlider";

import dividerImg from "../../assets/images/divider_below.png";

import omIcon from "../../assets/images/icons/om_icon.png";
import spiritualProducts from "../../assets/images/Spiritual_Products.png";

import starIcon from "../../assets/images/icons/star_icon.png";
import vastuProducts from "../../assets/images/Vastu_Products.png";

import flowerIcon from "../../assets/images/icons/flower_icon.png";
import healingCrystals from "../../assets/images/Healing_Crystals.png";

import leafIcon from "../../assets/images/icons/leaf_icon.png";
import organicWellness from "../../assets/images/Organic_Wellness.png";

import meditationIcon from "../../assets/images/icons/meditation.png";
import consultancyServices from "../../assets/images/Consultancy_Services.png";

import genuineIcon from "../../assets/images/icons/Genuine.png";
import spiritualLogo from "../../assets/images/icons/Spiritual_logo.png";
import organicLogo from "../../assets/images/icons/Organic_logo.png";
import securePackaging from "../../assets/images/icons/Secure_Packaging.png";
import happyCustomers from "../../assets/images/icons/Happy_Customers.png";

const Collections = () => {
    const sliderRef = useRef(null);

    useAutoSlider(sliderRef, ".modern-card", {
        gap: 20,
        interval: 3000,
        mobileWidth: 1200,
    });
    return (
        <section className="collections-section">
            <div className="collections-container">
                <div className="collections-title">
                    Explore Our Spiritual & Wellness Collections
                </div>

                <div className="hero-divider">
                    <img
                        src={dividerImg}
                        alt="Divider"
                        className="divider-img"
                    />
                </div>

                <div className="modern-card-grid" ref={sliderRef}>
                    <div className="modern-card">
                        <div className="modern-card-image">
                            <div className="modern-card-icon">
                                <img src={omIcon} alt="" />
                            </div>
                            <img src={spiritualProducts} alt="" />
                        </div>

                        <div className="modern-card-content">
                            <div className="modern-card-title">
                                Spiritual Products
                            </div>

                            <div className="modern-card-description">
                                Rudraksha, incense, diyas,
                                <br />
                                mantras and sacred essentials
                                <br />
                                for blessings.
                            </div>

                            <Link
                                to="/shop?category=spiritual"
                                className="modern-card-btn orange-btn"
                            >
                                Explore{" "}
                                <span>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="modern-card">
                        <div className="modern-card-image">
                            <div className="modern-card-icon">
                                <img src={starIcon} alt="" />
                            </div>
                            <img src={vastuProducts} alt="" />
                        </div>

                        <div className="modern-card-content">
                            <div className="modern-card-title">
                                Vastu Products
                            </div>

                            <div className="modern-card-description">
                                Bring harmony and balance
                                <br />
                                to your space with vastu
                                <br />
                                essentials.
                            </div>

                            <Link
                                to="/shop?category=vastu"
                                className="modern-card-btn gold-btn"
                            >
                                Explore{" "}
                                <span>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="modern-card">
                        <div className="modern-card-image">
                            <div className="modern-card-icon">
                                <img src={flowerIcon} alt="" />
                            </div>
                            <img src={healingCrystals} alt="" />
                        </div>

                        <div className="modern-card-content">
                            <div className="modern-card-title">
                                Healing Crystals
                            </div>

                            <div className="modern-card-description">
                                Natural healing crystals
                                <br />
                                to restore balance and
                                <br />
                                uplift your spirit.
                            </div>

                            <Link
                                to="/shop?category=crystals"
                                className="modern-card-btn purple-btn"
                            >
                                Explore{" "}
                                <span>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="modern-card">
                        <div className="modern-card-image">
                            <div className="modern-card-icon">
                                <img src={leafIcon} alt="" />
                            </div>
                            <img src={organicWellness} alt="" />
                        </div>

                        <div className="modern-card-content">
                            <div className="modern-card-title">
                                Organic Wellness
                            </div>

                            <div className="modern-card-description">
                                Ayurvedic herbs, teas
                                <br />
                                and wellness essentials
                                <br />
                                for healthy living.
                            </div>

                            <Link
                                to="/shop?category=wellness"
                                className="modern-card-btn green-btn"
                            >
                                Explore{" "}
                                <span>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="modern-card">
                        <div className="modern-card-image">
                            <div className="modern-card-icon">
                                <img src={meditationIcon} alt="" />
                            </div>
                            <img src={consultancyServices} alt="" />
                        </div>

                        <div className="modern-card-content">
                            <div className="modern-card-title">
                                Consultancy Services
                            </div>

                            <div className="modern-card-description">
                                Personalized spiritual
                                <br />
                                guidance and wellness
                                <br />
                                consultations.
                            </div>

                            <Link
                                to="/consultancy"
                                className="modern-card-btn blue-btn"
                            >
                                Explore{" "}
                                <span>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="collections-features features-marquee">
                    <div className="features-track">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img
                                    src={genuineIcon}
                                    alt="Authentic Products Icon"
                                    className="feature-img"
                                />
                            </div>

                            <div className="feature-text">
                                <div className="feature-title">
                                    Authentic & Pure
                                </div>

                                <div className="feature-subtitle">
                                    100% Genuine Products
                                </div>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <img
                                    src={spiritualLogo}
                                    alt="Spiritual Guidance Icon"
                                    className="feature-img"
                                />
                            </div>

                            <div className="feature-text">
                                <div className="feature-title">
                                    Spiritual Guidance
                                </div>

                                <div className="feature-subtitle">
                                    By Experienced Experts
                                </div>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <img
                                    src={organicLogo}
                                    alt="Organic & Natural Icon"
                                    className="feature-img"
                                />
                            </div>

                            <div className="feature-text">
                                <div className="feature-title">
                                    Organic & Natural
                                </div>

                                <div className="feature-subtitle">
                                    Safe & Chemical Free
                                </div>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <img
                                    src={securePackaging}
                                    alt="Secure Packaging Icon"
                                    className="feature-img"
                                />
                            </div>

                            <div className="feature-text">
                                <div className="feature-title">
                                    Secure Packaging
                                </div>

                                <div className="feature-subtitle">
                                    Packed with Care
                                </div>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <img
                                    src={happyCustomers}
                                    alt="Happy Customers Icon"
                                    className="feature-img"
                                />
                            </div>

                            <div className="feature-text">
                                <div className="feature-title">
                                    Happy Customers
                                </div>

                                <div className="feature-subtitle">
                                    Trusted by Thousands
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collections;