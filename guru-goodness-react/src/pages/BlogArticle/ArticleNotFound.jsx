import { Link } from "react-router-dom";

const ArticleNotFound = () => {
    return (
        <section className="article-not-found-section">
            <div className="article-not-found-container">

                <div className="hero-title golden-title">
                    Article Not Found
                </div>

                <div className="hero-title">
                    Oops! <span>This Article Doesn't Exist</span>
                </div>

                <div className="hero-description">
                    The article you're looking for may have been moved,
                    removed, or the link you followed is incorrect.
                </div>

                <div className="article-not-found-buttons">
                    <Link to="/blog" className="herobtn-primary">
                        Browse All Articles
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                    <Link to="/" className="btn-outline">
                        Back to Home
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ArticleNotFound;