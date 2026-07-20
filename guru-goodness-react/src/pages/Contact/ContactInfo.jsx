import { Link } from "react-router-dom";

import contactTeam from "../../assets/images/contact-team.png";
import dividerBelow from "../../assets/images/divider_below.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";

import {
    WHATSAPP_URL,
    EMAIL,
    MAP_URL,
} from "../../utils/constants";


const ContactInfo = () => {
    return (
        <section className="contact-info-section">
            <div className="connect-wrapper">
                <div className="connect-image">
                    <img src={contactTeam} alt="Contact Team" />
                </div>

                <div className="connect-content">
                    <div className="section-tag">
                        <img src={lotusDivider} alt="Lotus Divider" />
                        PERSONAL GUIDANCE
                    </div>

                    <div className="hero-title">
                        Meaningful Connections.
                        <span>Guidance that Matters.</span>
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <div className="connect-text">
                        At Guru and Goodness, we believe in the power of
                        personal connection. Our team is dedicated to
                        understanding your needs and guiding you towards
                        the best spiritual and wellness solutions.
                    </div>
                </div>
            </div>

            <div className="contact-info-card-section">
                <div className="hero-title">
                    <span>Contact Information</span>
                </div>

                <div className="hero-divider">
                    <img
                        src={dividerBelow}
                        alt="Divider"
                        className="divider-img"
                    />
                </div>

                <div className="contact-cards">

                    {/* WhatsApp */}

                    <div className="contact-card phone-card">
                        <div className="contact-card-top">
                            <div className="contact-icon">
                                <i className="fa-brands fa-whatsapp"></i>
                            </div>

                            <div className="contact-card-content">
                                <div className="contact-card-title">
                                    Phone / WhatsApp
                                </div>

                                <div className="contact-card-text">
                                    Talk directly with our team
                                </div>
                            </div>
                        </div>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn"
                        >
                            CHAT NOW
                        </a>
                    </div>

                    {/* Email */}

                    <div className="contact-card email-card">
                        <div className="contact-card-top">
                            <div className="contact-icon">
                                <i className="fa-regular fa-envelope"></i>
                            </div>

                            <div className="contact-card-content">
                                <div className="contact-card-title">
                                    Email Support
                                </div>

                                <div className="contact-card-text">
                                    For product inquiries and support
                                </div>
                            </div>
                        </div>

                        <a
                            href={`mailto:${EMAIL}`}
                            className="contact-btn"
                        >
                            SEND EMAIL
                        </a>
                    </div>

                    {/* Consultancy */}

                    <div className="contact-card consultancy-card">
                        <div className="contact-card-top">
                            <div className="contact-icon">
                                <i className="fa-solid fa-seedling"></i>
                            </div>

                            <div className="contact-card-content">
                                <div className="contact-card-title">
                                    Consultancy Support
                                </div>

                                <div className="contact-card-text">
                                    Guidance & Consultation Requests
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/consultancy"
                            className="contact-btn"
                        >
                            BOOK CONSULTATION
                        </Link>
                    </div>

                    {/* Location */}

                    <div className="contact-card location-card">
                        <div className="contact-card-top">
                            <div className="contact-icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>

                            <div className="contact-card-content">
                                <div className="contact-card-title">
                                    Business Location
                                </div>

                                <div className="contact-card-text">
                                    Jaipur, Rajasthan, India
                                </div>
                            </div>
                        </div>

                        <a
                            href={MAP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn"
                        >
                            GET DIRECTIONS
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactInfo;