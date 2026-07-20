const ProductSignificance = ({ product }) => {

    if (!product) {
        return null;
    }

    return (
        <section className="gg-significance-section">
            <div className="gg-significance-content">
                <div className="gg-significance-left">
                    <div className="gg-significance-title">
                        {product.significanceTitle}
                    </div>
                    <p className="gg-significance-description">
                        {product.significanceDescription}
                    </p>
                    <div className="gg-significance-tags">
                        {product.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="gg-significance-tag"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSignificance;