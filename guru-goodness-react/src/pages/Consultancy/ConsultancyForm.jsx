import { useState } from "react";

import dividerBelow from "../../assets/images/divider_below.png";

import treeSingle from "../../assets/images/tree_single.png";
import bellLeaf from "../../assets/images/bell_leaf.png";
import lotusBottom from "../../assets/images/lotus-bottom.png";

import whatsappLogo from "../../assets/images/icons/whatsapp_logo_bg.png";
import genuineIcon from "../../assets/images/icons/Genuine.png";
import spiritualLogo from "../../assets/images/icons/Spiritual_logo.png";
import securePackaging from "../../assets/images/icons/Secure_Packaging.png";
import happyCustomers from "../../assets/images/icons/Happy_Customers.png";

import { WHATSAPP_URL } from "../../utils/constants";
import { sendConsultancyRequest } from "../../utils/whatsapp";

const ConsultancyForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendConsultancyRequest(formData);
    };

    return (
        <section className="consultancy-section">
            <img
                src={treeSingle}
                className="gg-leaf-right"
                alt=""
            />

            <img
                src={bellLeaf}
                className="floating-leaf leaf-left"
                alt=""
            />

            <img
                src={lotusBottom}
                className="gg-lotus-bottom-right"
                alt=""
            />

            <img
                src={lotusBottom}
                className="gg-lotus-bottom-left"
                alt=""
            />

            <div className="consultancy-container">
                <div className="consultancy-form-card">
                    <div className="section-heading">
                        <div className="hero-title">
                            <span className="golden-title">
                                Begin Your Journey
                            </span>

                            <br />

                            <span>We're Here to Guide You</span>
                        </div>

                        <div className="hero-divider">
                            <img
                                src={dividerBelow}
                                alt="Divider"
                                className="divider-img"
                            />
                        </div>

                        <p>
                            Share your concerns and our experts will
                            <br />
                            help you find the right path forward.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="gg-input">
                            <i className="fa-regular fa-user"></i>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="gg-grid">
                            <div className="gg-input">
                                <i className="fa-solid fa-phone"></i>

                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="gg-input">
                                <i className="fa-brands fa-font-awesome"></i>

                                <select
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                >
                                    <option value="">
                                        Consultation Type
                                    </option>

                                    <option>
                                        Wellness Guidance
                                    </option>

                                    <option>
                                        Crystal Recommendation
                                    </option>

                                    <option>
                                        Vastu Consultation
                                    </option>

                                    <option>
                                        Lifestyle Guidance
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="gg-input textarea">
                            <i className="fa-solid fa-pen"></i>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="gg-submit-btn"
                        >
                            <span>Send Message</span>

                            <div className="gg-btn-icon">
                                <i className="fa-solid fa-paper-plane"></i>
                            </div>
                        </button>
                    </form>
                </div>

                <div className="consultancy-image">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-card"
                    >
                        <img
                            src={whatsappLogo}
                            alt="WhatsApp"
                        />

                        <div>
                            <h4>Prefer WhatsApp?</h4>

                            <p>
                                Chat with us instantly for quick
                                assistance and guidance.
                            </p>
                        </div>

                        <i className="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </div>

            <div className="consultancy-features">
                <div className="consultancy-features-item">
                    <img
                        src={genuineIcon}
                        alt="Confidential Consultation"
                    />
                    <span>Confidential Consultation</span>
                </div>

                <div className="consultancy-features-item">
                    <img
                        src={spiritualLogo}
                        alt="Personalized Guidance"
                    />
                    <span>Personalized Guidance</span>
                </div>

                <div className="consultancy-features-item">
                    <img
                        src={securePackaging}
                        alt="Trusted Support"
                    />
                    <span>Trusted Support</span>
                </div>

                <div className="consultancy-features-item">
                    <img
                        src={happyCustomers}
                        alt="Human Assistance"
                    />
                    <span>Human Assistance</span>
                </div>
            </div>
        </section>
    );
};

export default ConsultancyForm;