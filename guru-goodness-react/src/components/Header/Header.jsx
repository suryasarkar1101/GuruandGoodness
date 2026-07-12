import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { navLinks, socialLinks, topBar } from "./headerData";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header-wrapper" id="header">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="left-content">
                    <i className={topBar.icon}></i>
                    <span>{topBar.text}</span>
                </div>

                <div className="right-content">
                    <div className="social-icons">

                        {socialLinks.map((social, index) => (
                            <div key={social.label} className="social-item">
                                <a href={social.href} aria-label={social.label}>
                                    <i className={social.icon}></i>
                                </a>

                                {index !== socialLinks.length - 1 && (
                                    <div className="divider"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="navbar">
                {/* Left */}
                <div className="logo-area">
                    <a href="/">
                        <img
                            src={logo}
                            alt="Guru and Goodness Logo"
                            className="logo-img"
                        />
                    </a>
                </div>

                {/* Center */}
                <div className="nav-menu">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.title}
                            to={link.href}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </div>

                {/* Hamburger */}
                <button className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            <MobileMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </div>
    );
};

export default Header;