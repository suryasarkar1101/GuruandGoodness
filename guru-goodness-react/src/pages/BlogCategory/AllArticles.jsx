import { useState, forwardRef } from "react";

import dividerBelow from "../../assets/images/divider_below.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";

import ArticleCard from "../../components/ArticleCard/ArticleCard";

const AllArticles = forwardRef(({ blogs, category }, ref) => {

    const [visibleCount, setVisibleCount] = useState(6);
    const visibleBlogs = blogs.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <section
            className="articles-section"
            id="articlesSection"
            ref={ref}
        >
            <div className="articles-container">

                <div className="knowledge-header">

                    <div className="section-tag">
                        <img
                            src={lotusDivider}
                            alt="Lotus Divider"
                        />
                        KNOWLEDGE LIBRARY
                    </div>

                    <div className="hero-title">
                        Browse All <span>{category.title}</span> Articles
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <p>
                        Explore a growing collection of practical insights
                        designed to help you live with greater awareness,
                        positivity, and balance.
                    </p>

                </div>

                <div className="articles-grid">

                    {visibleBlogs.map((blog) => (
                        <ArticleCard
                            key={blog.id}
                            blog={blog}
                        />
                    ))}

                </div>

                {visibleCount < blogs.length && (
                    <div className="view-section">

                        <div
                            className="view-more-btn"
                            onClick={handleLoadMore}
                        >
                            <span>View More Articles</span>

                            <i className="fa-solid fa-arrow-right"></i>
                        </div>

                    </div>
                )}

            </div>
        </section>
    );
});

export default AllArticles;