import { Link } from "react-router-dom";

import { topicData } from "../../pages/Blog/blogTopics";
import { getArticleTime } from "../../utils/blogUtils";

const ArticleCard = ({ blog }) => {
    const topic = topicData[blog.categorySlug];

    return (
        <div className="article-card">
            <div className="article-image">
                <img
                    src={blog.image}
                    alt={blog.title}
                />
            </div>

            <div className="article-content">

                <div className="article-top">

                    <div className="article-category">
                        <img
                            src={topic.icon}
                            alt={blog.category}
                        />
                        <span>{blog.category}</span>
                    </div>

                    <div className="article-date">
                        <i className="fa-regular fa-clock"></i>
                        <span>
                            {getArticleTime(blog.date)}
                        </span>
                    </div>

                </div>

                <div className="article-title">
                    {blog.title}
                </div>

                <div className="article-body">
                    {blog.shortDescription}
                </div>

                <Link
                    to={`/blog/article/${blog.slug}`}
                    className="read-more"
                >
                    Read Article
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>

            </div>
        </div>
    );
};

export default ArticleCard;