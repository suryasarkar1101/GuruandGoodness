import dividerBelow from "../../assets/images/divider_below.png";
import consultationBg from "../../assets/images/backgrounds/consultation-bg.png";

import spiritualWisdomLogo from "../../assets/images/icons/spiritual-wisdom-logo.png";
import clotusStar from "../../assets/images/icons/clotus_star.png";
import crystalGuidesLogo from "../../assets/images/icons/crystal-guides-logo.png";
import organicWellnessLogo from "../../assets/images/icons/organic-wellness-logo.png";
import cenergyLogo from "../../assets/images/icons/cenergy_logo.png";
import cheartLogo from "../../assets/images/icons/cheart_logo.png";
import useInfiniteSlider from "../../hooks/useInfiniteSlider";

const Services = () => {
    const services = [
        {
            title: "Spiritual Guidance",
            description:
                "Awaken your inner wisdom and align with your higher purpose.",
            icon: spiritualWisdomLogo,
        },
        {
            title: "Vastu Consultation",
            description:
                "Balance your space and invite harmony, prosperity and positivity.",
            icon: clotusStar,
        },
        {
            title: "Crystal Recommendation",
            description:
                "Personalized crystal guidance to support healing and clarity.",
            icon: crystalGuidesLogo,
        },
        {
            title: "Wellness Guidance",
            description:
                "Holistic guidance for mind, body and emotional well-being.",
            icon: organicWellnessLogo,
        },
        {
            title: "Positive Energy Consultation",
            description:
                "Remove blockages and invite positive energy, peace and abundance.",
            icon: cenergyLogo,
        },
        {
            title: "Lifestyle Guidance",
            description:
                "Practical advice to create a balanced, meaningful and fulfilling life.",
            icon: cheartLogo,
        },
    ];

    const trackRef = useInfiniteSlider(0.3);

    return (
        <section className="consultation-services"
            style={{
                backgroundImage: `linear-gradient(
      rgba(250, 246, 239, .10),
      rgba(250, 246, 239, .10)
    ), url(${consultationBg})`,
            }}>
            <div className="section-heading">
                <div className="hero-title">
                    <span className="golden-title">Our Consultation{" "}</span>
                    <span>Services</span>
                </div>

                <div className="hero-divider">
                    <img
                        src={dividerBelow}
                        alt="Divider"
                        className="divider-img"
                    />
                </div>

                <div className="consultation-text">
                    Holistic guidance for every aspect of your life.
                </div>
            </div>

            <div className="consultation-slider">
                <div
                    className="consultation-track"
                    id="consultationTrack"
                    ref={trackRef}
                >
                    {[...services, ...services].map((service, index) => (
                        <div className="consultation-card" key={index}>
                            <div className="service-icon">
                                <img src={service.icon} alt={service.title} />
                            </div>

                            <div className="gold-divider">
                                <span></span>
                                <div className="diamond"></div>
                                <span></span>
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;