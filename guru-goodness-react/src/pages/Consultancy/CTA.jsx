import { Link } from "react-router-dom";

import dividerBelow from "../../assets/images/divider_below.png";
import ctaBg from "../../assets/images/backgrounds/cta-bg_colcu.png";

import { WHATSAPP_URL } from "../../utils/constants";

const CTA = () => {
    return (
        <section
            className="conte-cta-section"
            style={{
                backgroundImage: `url(${ctaBg})`,
            }}
        >
            <div className="conte-cta-overlay">
                <div className="conte-cta-content">
                    <div className="hero-title">
                        <span className="golden-title">
                            A Better You Awaits
                        </span>
                        <br />
                        <span>Let's Begin Your Transformation</span>
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <p>
                        Guidance. Balance. Positive Energy.
                        <br />
                        We're here to support your journey to a more
                        purposeful and fulfilling life.
                    </p>

                    <div className="conte-cta-buttons">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="conte-cta-btn primary"
                        >
                            Start Your Journey
                        </a>

                        <Link
                            to="/shop"
                            className="conte-cta-btn secondary"
                        >
                            Explore Products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;