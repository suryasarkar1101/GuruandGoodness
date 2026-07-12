import mandala from "../../assets/images/backgrounds/mandala.png";
import lotusWave from "../../assets/images/backgrounds/lotus_wave.png";

import { socialLinks } from "./headerData";
import { mobileMenuLinks } from "./mobileMenuData";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu-overlay ${isOpen ? "show" : ""}`}>
      <div className="mobile-menu-panel">

        {/* Background Images */}
        <img src={mandala} className="menu-mandala" alt="" />
        <img src={lotusWave} className="menu-lotus" alt="" />

        {/* Menu Links */}
        <div className="mobile-menu-links">
          {mobileMenuLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="mobile-menu-link"
              onClick={onClose}
            >
              <div className="menu-link-left">
                <i className={`${link.icon} menu-icon`}></i>
                <span>{link.title}</span>
              </div>

              <i className="fa-solid fa-chevron-right menu-arrow"></i>
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="mobile-social-wrapper">
          <div className="mobile-social-title">
            Follow Us
          </div>

          <div className="mobile-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MobileMenu;