import { Link } from "react-router-dom";

const TopicCard = ({ topicKey, topic }) => {
    return (
        <article className="topic-card">
            <Link to={`/blog/category/${topicKey}`}>
                <div className="topic-image">
                    <img
                        src={topic.smallImage}
                        alt={topic.title}
                    />
                </div>

                <div className="topic-icon">
                    <img
                        src={topic.icon}
                        alt={topic.title}
                    />
                </div>

                <div className="topic-content">
                    <div className="topic-title">
                        {topic.title}
                    </div>

                    <p>
                        {topic.shortDescription}
                    </p>

                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </Link>
        </article>
    );
};

export default TopicCard;