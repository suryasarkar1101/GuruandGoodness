import spiritualHealingIcon from "../../assets/images/icons/spiritual-healing.png";
import peaceIcon from "../../assets/images/icons/peace.png";
import meditationSupportIcon from "../../assets/images/icons/meditation-support.png";
import stressIcon from "../../assets/images/icons/stress.png";
import protectionIcon from "../../assets/images/icons/protection.png";

const benefitIcons = [
    spiritualHealingIcon,
    peaceIcon,
    meditationSupportIcon,
    stressIcon,
    protectionIcon,
];

const ProductBenefits = ({ product }) => {

    if (!product?.benefitCards?.length) {
        return null;
    }

    return (
        <section className="gg-benefits-section">

            <div className="gg-benefits-header">
                <span className="gg-benefits-arrow">
                    <i className="fa-solid fa-angle-right"></i>
                </span>
                <div className="benefits-title">
                    Benefits
                </div>
            </div>

            <div className="gg-benefits-grid">
                {product.benefitCards.map((benefit, index) => (
                    <div
                        key={index}
                        className="gg-benefit-card"
                    >
                        <div className="gg-benefit-icon">
                            <img
                                src={
                                    benefitIcons[index] ??
                                    spiritualHealingIcon
                                }
                                alt={benefit.title}
                            />
                        </div>

                        <div className="gg-benefit-content">
                            <h3>
                                {benefit.title}
                            </h3>
                            <p>
                                {benefit.description}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default ProductBenefits;