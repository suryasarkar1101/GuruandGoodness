import { Link } from "react-router-dom";

import lotusDivider from "../../assets/images/icons/lotus-divider.png";
import dividerBelow from "../../assets/images/divider_below.png";

const Hero = ({ category, onExploreClick }) => {
    return (
        <section
            className="category-hero"
            style={{
                backgroundImage: `
                    linear-gradient(
                        90deg,
                        rgba(253,249,243,.97) 0%,
                        rgba(253,249,243,.93) 40%,
                        rgba(253,249,243,.35) 58%,
                        rgba(253,249,243,0) 75%
                    ),
                    url(${category.image})
                `,
            }}
        >
            <div className="category-hero-container">
                <div className="hero-left">

                    <div className="breadcrumb-my">
                        <Link to="/">Home</Link>

                        <span>→</span>

                        <Link to="/blog">Blog</Link>

                        <span>→</span>

                        <span>{category.title}</span>
                    </div>

                    <div className="section-tag">
                        <img
                            src={lotusDivider}
                            alt=""
                        />
                        {category.badge}
                    </div>

                    <div className="hero-title">
                        <span>{category.title}</span>
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <div className="hero-description">
                        {category.description}
                    </div>

                    <div className="hero-stats">

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fa-solid fa-book-open"></i>
                            </div>

                            <h3>{category.totalArticles}</h3>

                            <p>Articles</p>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fa-solid fa-star"></i>
                            </div>

                            <h3>{category.stat2Title}</h3>

                            <p>{category.stat2Value}</p>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fa-brands fa-canadian-maple-leaf"></i>
                            </div>

                            <h3>{category.stat3Title}</h3>

                            <p>{category.stat3Value}</p>
                        </div>

                    </div>

                    <div className="knowledge-buttons">
                        <button className="herobtn-primary" onClick={onExploreClick}>
                            Explore Articles
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;