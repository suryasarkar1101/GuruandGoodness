import { useState } from "react";

// Images (update filenames if different)
import footerLogo from "../../assets/images/logo/logo_footer.png";
import footerDivider from "../../assets/images/footer/footer_divider2.png";
import footerSideDivider from "../../assets/images/footer/footer-side-divider.png";
import lotusLogo from "../../assets/images/icons/lotus_logo.png";
import { quickLinks, categories, contactInfo, socialLinks, } from "./footerData";

const Footer = () => {
    const [activeAccordion, setActiveAccordion] = useState("contact");

    const toggleAccordion = (section) => {
        setActiveAccordion((prev) =>
            prev === section ? "" : section
        );
    };

    return (
        <footer className="footer-section">
            <div className="footer-bg"></div>
            <div className="footer-container">
                <div className="footer-column footer-brand">
                    <img src={footerLogo} alt="Guru and Goodness" className="footer-logo" />
                    <div className="footer-about">
                        We bring together ancient wisdom
                        and modern living through soulful
                        products, mindful practices and
                        pure intentions.
                    </div>
                    <div className="footer-socials">
                        {socialLinks.map((social) => (
                            <a key={social.label} href={social.href} aria-label={social.label}>
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-divider-image mobile-divider">
                    <img src={footerDivider} alt="Divider" />
                </div>

                <div className={`footer-column footer-column-divider footer-accordion-item ${activeAccordion === "quick" ? "active" : ""}`}>

                    <div className="footer-side-divider">
                        <img src={footerSideDivider} alt="" />
                    </div>

                    <div className="footer-accordion-header" onClick={() => toggleAccordion("quick")}>
                        <div className="footer-title">
                            <img src={lotusLogo} alt="" />
                            QUICK LINKS
                        </div>
                        <div className="footer-plus">+</div>
                    </div>
                    <div className="footer-links footer-accordion-content">
                        {quickLinks.map((link) => (
                            <a key={link.title} href={link.href}>
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>

                <div className={`footer-column footer-column-divider footer-accordion-item ${activeAccordion === "categories" ? "active" : ""}`}>
                    <div className="footer-side-divider">
                        <img src={footerSideDivider} alt="" />
                    </div>
                    <div className="footer-accordion-header" onClick={() => toggleAccordion("categories")}>
                        <div className="footer-title">
                            <img src={lotusLogo} alt="" />
                            CATEGORIES
                        </div>
                        <div className="footer-plus">+</div>
                    </div>
                    <div className="footer-links footer-accordion-content">
                        {categories.map((category) => (
                            <a key={category.title} href={category.href}>
                                {category.title}
                            </a>
                        ))}
                    </div>
                </div>
                <div className={`footer-column footer-column-divider footer-accordion-item ${activeAccordion === "contact" ? "active" : ""}`}>
                    <div className="footer-side-divider">
                        <img src={footerSideDivider} alt="" />
                    </div>
                    <div className="footer-accordion-header" onClick={() => toggleAccordion("contact")} >
                        <div className="footer-title">
                            <img src={lotusLogo} alt="" />
                            CONTACT
                        </div>
                        <div className="footer-plus">+</div>
                    </div>

                    <div className="footer-contact footer-accordion-content">
                        {contactInfo.map((item) => (
                            <div className="contact-item" key={item.text}>
                                <i className={item.icon}></i>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-divider-image">
                <img src={footerDivider} alt="Divider" />
            </div>

            <div className="footer-bottom">

                <div>
                    © 2026 Guru and Goodness. All Rights Reserved.
                </div>
                <div className="footer-bottom-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <span>|</span>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                </div>
                <div>
                    Designed by Guru and Goodness
                </div>
            </div>

        </footer>
    );
};

export default Footer;