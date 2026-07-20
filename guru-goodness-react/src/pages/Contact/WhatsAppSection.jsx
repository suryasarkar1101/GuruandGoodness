import chatLogo from "../../assets/images/icons/chat_logo.png";
import contactLogo from "../../assets/images/icons/contact_logo.png";
import crystalLogo from "../../assets/images/icons/cystral_logo.png";
import suitcaseLogo from "../../assets/images/icons/cutcase_logo.png";
import whatsappBg from "../../assets/images/backgrounds/whatsapp-bg.png";

import { WHATSAPP_URL } from "../../utils/constants";

const WhatsAppSection = () => {
    return (
        <section className="whatsapp-section"
            style={{
                backgroundImage: `url(${whatsappBg})`,
            }}>
            <div className="whatsapp-content">
                <div className="whatsapp-badge">
                    <i className="fa-solid fa-headset"></i>
                    INSTANT SUPPORT
                </div>

                <div className="whatsapp-title">
                    Chat with us on
                    <span>WhatsApp</span>
                    <i className="fa-brands fa-whatsapp"></i>
                </div>

                <div className="whatsapp-desc">
                    Get instant answers, personalized guidance and support
                    from our spiritual wellness experts.
                </div>

                <div className="whatsapp-features">
                    <div className="wa-feature">
                        <img src={chatLogo} alt="Instant Responses" />
                        Instant responses
                    </div>

                    <div className="wa-feature">
                        <img src={contactLogo} alt="Expert Guidance" />
                        Expert guidance
                    </div>

                    <div className="wa-feature">
                        <img
                            src={crystalLogo}
                            alt="Personalized Recommendations"
                        />
                        Personalized recommendations
                    </div>

                    <div className="wa-feature">
                        <img src={suitcaseLogo} alt="Order Support" />
                        Order &amp; product support
                    </div>
                </div>

                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-btn"
                >
                    <i className="fa-brands fa-whatsapp"></i>
                    Chat on WhatsApp Now
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </section>
    );
};

export default WhatsAppSection;