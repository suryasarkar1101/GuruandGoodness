import { useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";

import dividerBelow from "../../assets/images/divider_below.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";

import { getLatestBlogs } from "../../api/blogApi";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const Articles = ({ ref }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getLatestBlogs(6);
            setBlogs(data);
        };

        fetchBlogs();
    }, []);

    return (
        <section
            className="articles-section"
            id="articlesSection"
            ref={ref}
        >
            <div className="articles-container">

                <div className="articles-header">

                    <div className="section-tag">
                        <img
                            src={lotusDivider}
                            alt="Lotus Divider"
                        />
                        FRESH INSIGHTS
                    </div>

                    <div className="hero-title">
                        Latest <span>Articles & Wellness</span> Guides
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <p>
                        Explore the latest knowledge on spiritual wellness,
                        Vastu guidance, healing crystals, organic living,
                        and positive lifestyle practices.
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

export default Articles;