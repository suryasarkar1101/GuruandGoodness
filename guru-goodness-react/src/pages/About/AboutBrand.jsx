import dividerBelow from "../../assets/images/divider_below.png";

import leafLong from "../../assets/images/leaf-long.png";
import mandalaHalf from "../../assets/images/mandala-half.png";
import mandalaLeaf from "../../assets/images/mandala-leaf.png";

import aboutGuru from "../../assets/images/about_guru.png";

import aboutBrandLotus from "../../assets/images/icons/about_bran_lotus.png";
import aboutBrandYoga from "../../assets/images/icons/about_bran_yoga.png";
import aboutBrandGems from "../../assets/images/icons/about_bran_gems.png";
import aboutBrandHealth from "../../assets/images/icons/about_bran_health.png";

const AboutBrand = () => {
  return (
    <section className="about-us-section">
      <img
        src={leafLong}
        className="about-decor about-decor-left"
        alt=""
      />

      <img
        src={mandalaHalf}
        className="about-decor about-decor-left2"
        alt=""
      />

      <img
        src={mandalaLeaf}
        className="about-decor about-decor-right"
        alt=""
      />

      <div className="about-us-container">
        <div className="about-us-top">
          <div className="about-us-image">
            <img src={aboutGuru} alt="About Guru & Goodness" />
          </div>

          <div className="about-us-content">
            <div className="about-small-title">
              ABOUT US
            </div>

            <div className="about-main-title">
              <span>About</span> Guru & Goodness
            </div>

            <div className="hero-divider">
              <img
                src={dividerBelow}
                alt="Divider"
                className="divider-img"
              />
            </div>

            <div className="about-description">
              Guru & Goodness was created
              to bring spirituality, wellness,
              positivity, and mindful living
              into modern everyday life.
              <br />
              <br />
              We carefully curate spiritual products,
              healing crystals, vastu essentials,
              wellness collections, and guidance
              experiences that help people create
              peaceful spaces and balanced lifestyles.
              <br />
              <br />
              Our mission is to make goodness,
              wellness, and conscious living feel
              simple, authentic, and beautifully
              connected to daily life.
            </div>
          </div>
        </div>

        <div className="why-section">
          <div className="why-title">
            Why We Started
          </div>

          <div className="hero-divider">
            <img
              src={dividerBelow}
              alt="Divider"
              className="divider-img"
            />
          </div>

          <div className="about-features">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <img
                  src={aboutBrandLotus}
                  alt="Positive Energy"
                />
              </div>

              <div className="about-feature-title">
                Positive Energy
              </div>

              <div className="about-feature-text">
                To help people invite positivity,
                peace, and higher vibrations.
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <img
                  src={aboutBrandYoga}
                  alt="Modern Spiritual Wellness"
                />
              </div>

              <div className="about-feature-title">
                Modern Spiritual Wellness
              </div>

              <div className="about-feature-text">
                To make ancient wisdom relevant,
                practical, and beautiful for today.
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <img
                  src={aboutBrandGems}
                  alt="Authentic Products"
                />
              </div>

              <div className="about-feature-title">
                Authentic Products
              </div>

              <div className="about-feature-text">
                To offer carefully curated,
                high-quality products you can
                trust completely.
              </div>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <img
                  src={aboutBrandHealth}
                  alt="Human Guidance"
                />
              </div>

              <div className="about-feature-title">
                Human Guidance
              </div>

              <div className="about-feature-text">
                To provide real guidance and
                support on your wellness journey.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;