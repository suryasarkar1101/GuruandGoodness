import dividerBelow from "../../assets/images/divider_below.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";

import ArticleCard from "../../components/ArticleCard/ArticleCard";

const RelatedArticles = ({ blogs, category }) => {
    return (
        <section className="articles-section">
            <div className="articles-container">

                <div className="knowledge-header">

                    <div className="section-tag">
                        <img
                            src={lotusDivider}
                            alt=""
                        />
                        CONTINUE READING
                    </div>

                    <div className="hero-title">
                        Explore More <span>{category.title}</span> Articles
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <p>
                        Discover handpicked articles to support your growth,
                        mindfulness, and inner peace.
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

export default RelatedArticles;