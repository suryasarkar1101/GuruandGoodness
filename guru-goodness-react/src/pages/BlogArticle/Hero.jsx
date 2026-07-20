import { Link } from "react-router-dom";

import dividerBelow from "../../assets/images/divider_below.png";
import authorImage from "../../assets/images/author.png";

import { topicData } from "../Blog/blogTopics";

import { getArticleAge } from "../../utils/blogUtils";

const Hero = ({ article }) => {
    const category = topicData[article.categorySlug];
    const articleAge = getArticleAge(article.date);
    return (
        <section
            className="article-hero"
            style={{
                backgroundImage: `linear-gradient(
                    90deg,
                    rgba(253,249,243,.97) 0%,
                    rgba(253,249,243,.93) 40%,
                    rgba(253,249,243,.35) 58%,
                    rgba(253,249,243,0) 75%
                ),
                url(${article.image})`,
            }}
        >
            {/* LEFT CONTENT */}

            <div className="article-content-article">

                <div className="breadcrumb-my">
                    <Link to="/">Home</Link>

                    <span>→</span>

                    <Link to="/blog">Blog</Link>

                    <span>→</span>

                    <Link to={`/blog/category/${article.categorySlug}`}>
                        {article.category}
                    </Link>

                    <span>→</span>

                    <span className="currentCategory">
                        {article.smallTitle}
                    </span>
                </div>

                <div className="article-category">
                    <img
                        src={category.icon}
                        alt={article.category}
                    />

                    <span>
                        {article.category.toUpperCase()}
                    </span>
                </div>

                <div className="hero-title">
                    <span>{article.title}</span>
                </div>

                <div className="hero-divider">
                    <img
                        src={dividerBelow}
                        alt="Divider"
                        className="divider-img"
                    />
                </div>

                <div className="hero-description">
                    {article.shortDescription}
                </div>

                <div className="article-author">
                    <img
                        src={authorImage}
                        alt="Author"
                        className="article-author-img"
                    />

                    <div>
                        <div className="article-author-by">
                            By Guru and Goodness Editorial Team
                        </div>

                        <div className="author-meta">
                            <span>
                                {new Date(article.date).toLocaleDateString(
                                    "en-GB",
                                    {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </span>

                            <span>•</span>

                            <span className="author-read-time">
                                {article.readTime}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            {/* RIGHT IMAGE */}

            <div
                className="article-hero-image"
                style={{
                    backgroundImage: `url(${article.image})`,
                }}
            >
                <div className="read-time-card" id="articleAge">
                    <i className="fa-regular fa-clock"></i>
                    <span>{articleAge.value}</span> {articleAge.text}
                </div>
            </div>

        </section>
    );
};

export default Hero;