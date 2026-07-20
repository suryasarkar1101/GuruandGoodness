import businessHoursBg from "../../assets/images/backgrounds/business-hours-bg.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";

import { WHATSAPP_URL } from "../../utils/constants";

const BusinessHours = () => {
    return (
        <section className="business-hours-section" >
            <div class="business-hours-bg" style={{
                backgroundImage: `url(${businessHoursBg})`,
            }}></div>
            <div className="hours-content">
                <div className="hours-left">
                    <div className="section-tag">
                        <img
                            src={lotusDivider}
                            alt="Lotus Divider"
                        />
                        We're Here for You
                    </div>

                    <div className="hero-title">
                        <span>Business Hours</span>
                    </div>

                    <div className="hours-card">
                        <div className="hours-row">
                            <div className="hours-day">
                                <i className="fa-regular fa-calendar"></i>
                                Monday – Friday
                            </div>

                            <div className="hours-time">
                                9:00 AM – 8:00 PM
                            </div>
                        </div>

                        <div className="hours-row">
                            <div className="hours-day">
                                <i className="fa-regular fa-clock"></i>
                                Saturday
                            </div>

                            <div className="hours-time">
                                10:00 AM – 6:00 PM
                            </div>
                        </div>

                        <div className="hours-row">
                            <div className="hours-day">
                                <i className="fa-regular fa-clock"></i>
                                Sunday
                            </div>

                            <div className="hours-time">
                                10:00 AM – 2:00 PM
                            </div>
                        </div>
                    </div>

                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                        Talk on WhatsApp
                    </a>
                </div>

                <div className="hours-bottom-badge">
                    <div className="badge-icon">
                        <i className="fa-regular fa-clock"></i>
                    </div>

                    <div className="badge-text">
                        We respond quickly during
                        <br />
                        working hours via WhatsApp &amp; Email
                    </div>

                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </section>
    );
};

export default BusinessHours;