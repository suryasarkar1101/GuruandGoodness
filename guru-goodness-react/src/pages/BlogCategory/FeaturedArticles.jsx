import dividerBelow from "../../assets/images/divider_below.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";


import ArticleCard from "../../components/ArticleCard/ArticleCard";

const FeaturedArticles = ({ blogs, category }) => {
    return (
        <section className="articles-section">
            <div className="articles-container">

                <div className="knowledge-header">

                    <div className="section-tag">
                        <img
                            src={lotusDivider}
                            alt="Lotus Divider"
                        />
                        EDITOR'S SELECTION
                    </div>

                    <div className="hero-title">
                        Featured <span>{category.title}</span> Articles
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <p>
                        Discover our most valuable and popular insights on
                        mindfulness, meditation, personal growth, inner peace,
                        and conscious living.
                    </p>

                </div>

                <div className="articles-grid">

                    {blogs.map((blog) => (
                        <ArticleCard
                            key={blog.id}
                            blog={blog}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default FeaturedArticles;