import { Link } from "react-router-dom";

const ComingSoon = ({
    pagetitle ="Coming Soon",
    title = "Exciting New Collections Are On Their Way",
    description = "We're carefully handcrafting our next collection of premium spiritual and wellness products. Every item is thoughtfully created in small batches to ensure authenticity, quality, and positive energy before it reaches your home.",
    icon = "✨",
}) => {
    return (
        <section className="coming-soon-container">
            <div className="gg-coming-soon-content">
                <div className="coming-soon-icon">
                    {icon} {pagetitle}
                </div>

                <div className="coming-soon-title">
                    {title}
                </div>

                <div className="coming-soon-description">
                    {description}
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;