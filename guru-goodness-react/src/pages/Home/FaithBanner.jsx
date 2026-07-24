import lotusLogo from "../../assets/images/icons/lotus_logo.png";
import { WHATSAPP_URL } from "../../utils/constants";

const FaithBanner = () => {
  return (
    <section className="gg-faith-section">
      <div className="gg-faith-wrapper">
        {/* LEFT SIDE */}
        <div className="gg-left">
          <div className="gg-icon-circle">
            <img
              src={lotusLogo}
              alt="Guru & Goodness"
              className="gg-icon"
            />
          </div>

          <div className="gg-text-content">
            <h2>Guided by Faith. Driven by Purpose.</h2>

            <p>
              At Guru & Goodness, our mission is simple – to help you
              live a balanced, blessed and meaningful life.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="gg-divider"></div>

        {/* RIGHT SIDE */}
        <div className="gg-right">
          <div className="gg-whatsapp-icon">
            <i className="fa-brands fa-whatsapp"></i>
          </div>

          <div className="gg-contact-content">
            <h4>Have Questions?</h4>
            <p>We're here on WhatsApp</p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gg-chat-btn"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>CHAT WITH US</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaithBanner;