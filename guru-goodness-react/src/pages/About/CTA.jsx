import ctaBg from "../../assets/images/backgrounds/cta-bg.png";
import { WHATSAPP_URL } from "../../utils/constants";

const CTA = () => {
    return (
        <section
            className="cta-section"
            style={{
                backgroundImage: `url(${ctaBg})`,
            }}
        >
            <div className="cta-overlay"></div>

            <div className="cta-content">
                <div className="cta-title">
                    Ready to Begin Your
                    <br />
                    Wellness Journey?
                </div>

                <div className="cta-text">
                    Explore products, ask questions, or connect
                    for guidance directly through WhatsApp.
                </div>

                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                >
                    <i className="fa-brands fa-whatsapp"></i>
                    Chat on WhatsApp
                </a>
            </div>
        </section>
    );
};

export default CTA;