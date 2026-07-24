import lotusIcon from "../../assets/images/icons/lotus-divider.png";
import aboutDivider from "../../assets/images/about-divider.png";
import dividerImg from "../../assets/images/divider_below.png";

import lotusLogoBg from "../../assets/images/icons/lotus_logo_bg.png";
import sunLogoBg from "../../assets/images/icons/sun_logo_bg.png";
import leafLogoBg from "../../assets/images/icons/leaf_logo_bg.png";
import personLogoBg from "../../assets/images/icons/person_logo_bg.png";
import omLogoBg from "../../assets/images/icons/om_logo_bg.png";
import whatsappLogoBg from "../../assets/images/icons/whatsapp_logo_bg.png";

import aboutBg from "../../assets/images/backgrounds/home-bg-2.png";

const AboutSection = () => {
  return (
    <section className="about-guru-section">
      {/* BACKGROUND IMAGE */}
      <div className="about-bg-image" style={{ backgroundImage: `url(${aboutBg})` }}></div>

      <div className="container">
        <div className="about-content-area">
          <div className="about-top-label-wrap">
            <img
              src={lotusIcon}
              alt="Lotus Icon"
              className="about-icon"
            />
          </div>

          <div className="about-subtitle">
            <img
              src={aboutDivider}
              className="about-divider"
              alt="Divider"
            />
            ABOUT Guru & Goodness
            <img
              src={aboutDivider}
              className="about-divider"
              alt="Divider"
            />
          </div>

          <div className="about-title">
            Where Spiritual Wisdom
            <span>Meets Conscious Living</span>
          </div>

          <div className="hero-divider no-mobile">
            <img
              src={dividerImg}
              alt="Divider"
              className="divider-img"
            />
          </div>

          <div className="about-description">
            <p>
              Guru & Goodness is created to bring spirituality,
              wellness, positivity, and mindful living into modern
              lifestyles.
            </p>

            <p>
              We carefully curate spiritual products, vastu
              solutions, healing crystals, organic wellness
              essentials, and personalized guidance designed to
              support balance, peace, and positive energy.
            </p>

            <p>
              Inspired by Indian traditions and modern wellness
              culture, the brand combines authenticity, simplicity,
              and meaningful living into one trusted experience.
            </p>
          </div>

          <div className="about-feature-icons features-marquee">
            <div className="features-track">
              <div className="feature-icon-box">
                <div className="about-feature-icon">
                  <img
                    src={lotusLogoBg}
                    alt="Authentic Products Icon"
                    className="feature-logo-img"
                  />
                </div>

                <div className="feature-text">
                  Authentic Spiritual Products
                </div>
              </div>

              <div className="feature-icon-box">
                <div className="about-feature-icon">
                  <img
                    src={sunLogoBg}
                    alt="Positive Energy Icon"
                    className="feature-logo-img"
                  />
                </div>

                <div className="feature-text">
                  Positive Energy Focus
                </div>
              </div>

              <div className="feature-icon-box">
                <div className="about-feature-icon">
                  <img
                    src={leafLogoBg}
                    alt="Organic Wellness Icon"
                    className="feature-logo-img"
                  />
                </div>

                <div className="feature-text">
                  Organic Wellness Inspired
                </div>
              </div>

              <div className="feature-icon-box">
                <div className="about-feature-icon">
                  <img
                    src={personLogoBg}
                    alt="Personalized Guidance Icon"
                    className="feature-logo-img"
                  />
                </div>

                <div className="feature-text">
                  Personalized Guidance
                </div>
              </div>

              <div className="feature-icon-box">
                <div className="about-feature-icon">
                  <img
                    src={omLogoBg}
                    alt="Indian Spiritual Wisdom Icon"
                    className="feature-logo-img"
                  />
                </div>

                <div className="feature-text">
                  Indian Spiritual Wisdom
                </div>
              </div>

              <div className="feature-icon-box">
                <div className="about-feature-icon">
                  <img
                    src={whatsappLogoBg}
                    alt="WhatsApp Human Support Icon"
                    className="feature-logo-img"
                  />
                </div>

                <div className="feature-text">
                  WhatsApp Human Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;