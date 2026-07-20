import { useState } from "react";

import dividerBelow from "../../assets/images/divider_below.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";

import treeSingle from "../../assets/images/tree_single.png";
import bellLeaf from "../../assets/images/bell_leaf.png";
import lotusBottom from "../../assets/images/lotus-bottom.png";

import { sendContactInquiry } from "../../utils/whatsapp";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        type: "Inquiry Type",
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

        sendContactInquiry(formData);

        setFormData({
            name: "",
            email: "",
            phone: "",
            type: "",
            message: "",
        });
    };

    return (
        <section className="gg-contact-section">
            {/* Decorative Assets */}

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

            <div className="gg-contact-wrapper">

                {/* LEFT SIDE */}

                <div className="gg-contact-left">
                    <div className="gg-left-content">

                        <div className="hero-title">
                            <span>Have a Question?</span>
                        </div>

                        <p>
                            We would love to hear from you.
                        </p>

                        <div className="hero-divider">
                            <img
                                src={dividerBelow}
                                alt="Divider"
                                className="divider-img"
                            />
                        </div>

                        <div className="gg-feature-list">

                            <div className="gg-feature">
                                <i className="fa-regular fa-circle-question"></i>
                                <span>Ask anything</span>
                            </div>

                            <div className="gg-feature">
                                <i className="fa-solid fa-user-doctor"></i>
                                <span>Get expert guidance</span>
                            </div>

                            <div className="gg-feature">
                                <i className="fa-regular fa-handshake"></i>
                                <span>We're happy to help</span>
                            </div>

                            <div className="gg-feature">
                                <i className="fa-solid fa-spa"></i>
                                <span>Your journey matters to us</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}

                <div className="gg-form-box">

                    <div className="gg-form-title">
                        <img
                            src={lotusDivider}
                            alt="Lotus Divider"
                        />

                        <div className="hero-title">
                            <span>Send Us Your </span>
                            Inquiry
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="gg-input">
                            <i className="fa-regular fa-user"></i>

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="gg-input">
                            <i className="fa-regular fa-envelope"></i>

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="gg-grid">
                            <div className="gg-input">
                                <i className="fa-solid fa-phone"></i>

                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="gg-input">
                                <i className="fa-brands fa-font-awesome"></i>

                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" >Inquiry Type</option>
                                    <option value="Product">Product</option>
                                    <option value="Consultation">Consultation</option>
                                    <option value="Support">Support</option>
                                </select>
                            </div>

                        </div>

                        <div className="gg-input textarea">
                            <i className="fa-solid fa-pen"></i>

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
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

                        <div className="gg-secure">
                            <i className="fa-solid fa-lock"></i>

                            <span>
                                Your information is safe and secure with us
                            </span>
                        </div>

                    </form>

                </div>

            </div >
        </section >
    );

};

export default ContactForm;