import dividerBelow from "../../assets/images/divider_below.png";

import TopicCard from "../../components/TopicCard/TopicCard";
import ctaBgBlog from "../../assets/images/backgrounds/cta-bg_blog.png";

const OtherCategories = ({ topics }) => {
    return (
        <section
            className="knowledge-topics-section"
            id="catagory-topic"
            style={{
                backgroundImage: `url(${ctaBgBlog})`,
            }}
        >
            <div className="knowledge-topics-container">

                <div className="knowledge-header">

                    <div className="hero-title">
                        Explore
                        <span> Other Wellness </span>
                        Categories
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <p>
                        Expand your learning journey through additional wellness
                        and lifestyle topics.
                    </p>

                </div>

                <div className="topics-grid">
                    {topics.map((topic) => (
                        <TopicCard
                            key={topic.key}
                            topicKey={topic.key}
                            topic={topic}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OtherCategories;