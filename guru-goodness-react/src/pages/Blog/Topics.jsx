import dividerBelow from "../../assets/images/divider_below.png";
import lotusDivider from "../../assets/images/icons/lotus-divider.png";

import { topicData } from "./blogTopics"
import TopicCard from "../../components/TopicCard/TopicCard"
import ctaBg from "../../assets/images/backgrounds/cta-bg_blog.png";

const Topics = () => {
    return (
        <section className="knowledge-topics-section"
            style={{
                backgroundImage: `url(${ctaBg})`
            }}>
            <div className="knowledge-topics-container">

                <div className="knowledge-header">

                    <div className="section-tag">
                        <img
                            src={lotusDivider}
                            alt="Lotus Divider"
                        />
                        BROWSE KNOWLEDGE
                    </div>

                    <div className="hero-title">
                        Explore
                        <span> Wellness & Spiritual Living </span>
                        <span className="golden-title">
                            Topics
                        </span>
                    </div>

                    <div className="hero-divider">
                        <img
                            src={dividerBelow}
                            alt="Divider"
                            className="divider-img"
                        />
                    </div>

                    <p>
                        Discover expert guidance across spirituality,
                        Vastu, healing crystals, organic wellness,
                        and positive living practices.
                    </p>

                </div>

                <div className="topics-grid">
                    {Object.entries(topicData).map(([key, topic]) => (
                        <TopicCard
                            key={key}
                            topicKey={key}
                            topic={topic}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Topics;