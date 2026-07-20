import aboutFounder from "../../assets/images/about_founder.png";

import mandalaHalf from "../../assets/images/mandala-half.png";
import leafLong from "../../assets/images/leaf-long.png";
import waveLotus from "../../assets/images/wave_lotus.png";

import footerDivider from "../../assets/images/footer/footer_divider2.png";
import aboutDivider from "../../assets/images/about-divider.png";

import lotusDivider from "../../assets/images/icons/lotus-divider.png";
import aboutBrandLotus from "../../assets/images/icons/about_bran_lotus.png";

import leafLogo from "../../assets/images/icons/leaf_logo_bg.png";
import lotusLogo from "../../assets/images/icons/lotus_logo_bg.png";
import personLogo from "../../assets/images/icons/person_logo_bg.png";
import omLogo from "../../assets/images/icons/om_logo_bg.png";
import sunLogo from "../../assets/images/icons/sun_logo_bg.png";

const Founder = () => {
  return (
    <section className="founder-story-section">
      <img
        src={mandalaHalf}
        className="founder-decor founder-top-decor"
        alt=""
      />

      <img
        src={leafLong}
        className="founder-decor founder-bottom-decor"
        alt=""
      />

      <div className="founder-story-container">
        {/* LEFT CONTENT */}
        <div className="founder-content-area">
          <div className="founder-small-title">
            FOUNDER STORY
          </div>

          <div className="small-divider">
            <img src={footerDivider} alt="Divider" />
          </div>

          <div className="founder-main-title">
            The Heart Behind
            <span>Guru and Goodness</span>
          </div>

          <div className="about-top-label-wrap">
            <img
              src={aboutDivider}
              className="about-divider"
              alt="Divider"
            />

            <img
              src={lotusDivider}
              alt="Lotus Icon"
              className="about-icon"
            />

            <img
              src={aboutDivider}
              className="about-divider"
              alt="Divider"
            />
          </div>

          <div className="founder-description">
            Guru and Goodness was created
            from a deep passion for spirituality,
            mindful living, and positive energy.
            <br />
            <br />
            What started as a personal journey
            toward balance and wellness gradually
            became a vision to help others create
            peaceful spaces, meaningful routines,
            and spiritually enriched lifestyles.
            <br />
            <br />
            Every product, every recommendation,
            and every consultation is guided by
            intention, authenticity, and human connection.
            <br />
            <br />
            The goal is simple — to make goodness,
            wellness, and positivity a beautiful part
            of everyday life.
          </div>

          <div className="founder-quote-box">
            <div className="quote-mark quote-left">“</div>

            <div className="founder-quote-text">
              True wellness begins when
              goodness becomes part of
              everyday life.
            </div>

            <div className="quote-mark quote-right">”</div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="founder-image-area">
          <div className="founder-image-wrapper">
            <img
              src={aboutFounder}
              alt="Founder"
              className="founder-image"
            />

            <div className="founder-quote-badge">
              <div className="quote-badge-icon">
                <img
                  src={aboutBrandLotus}
                  alt="Lotus"
                />
              </div>

              <div className="quote-badge-text">
                A journey of purpose.
                <br />
                A life dedicated to goodness.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="founder-feature-strip">
        <div className="founder-feature-item">
          <div className="founder-feature-icon">
            <img src={leafLogo} alt="" />
          </div>
          <div className="feature-text">
            Authentic Intentions
          </div>
        </div>

        <div className="founder-feature-item">
          <div className="founder-feature-icon">
            <img src={lotusLogo} alt="" />
          </div>
          <div className="feature-text">
            Spiritual Wellness
          </div>
        </div>

        <div className="founder-feature-item">
          <div className="founder-feature-icon">
            <img src={personLogo} alt="" />
          </div>
          <div className="feature-text">
            Guided with Compassion
          </div>
        </div>

        <div className="founder-feature-item">
          <div className="founder-feature-icon">
            <img src={omLogo} alt="" />
          </div>
          <div className="feature-text">
            Quality & Purity
          </div>
        </div>

        <div className="founder-feature-item">
          <div className="founder-feature-icon">
            <img src={sunLogo} alt="" />
          </div>
          <div className="feature-text">
            Positive Energy
            <br />
            in Everything
          </div>
        </div>
      </div>

      <div className="founder-bottom-wave">
        <img src={waveLotus} alt="" />
      </div>
    </section>
  );
};

export default Founder;