import founderImage from "../../assets/images/founder.png";

const ProductSpecification = ({ product }) => {

    if (!product) {
        return null;
    }

    return (
        <section className="gg-product-specification-section">

            <div className="gg-section-heading">

                <span className="gg-benefits-arrow">
                    <i className="fa-solid fa-angle-right"></i>
                </span>

                <div className="benefits-title">
                    Product Details
                </div>

            </div>

            <div className="gg-specification-layout">

                <div className="gg-specification-card">

                    <div className="gg-specification-grid">

                        {product.specifications?.map((item, index) => (

                            <div
                                key={index}
                                className="gg-spec-item"
                            >

                                <div className="gg-spec-label">
                                    {item.label}
                                </div>

                                <div className="gg-spec-value">
                                    {item.value}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <div className="gg-product-extra-card">
                    <div className="founder-note-card">
                        <div className="founder-image-product">
                            <img
                                src={founderImage}
                                alt="Founder"
                            />
                        </div>
                        <div className="founder-content">
                            <div className="founder-card-title">
                                Founder’s Note
                            </div>
                            <p>
                                {product.founderNote}
                            </p>
                            <div className="founder-name">
                                – Astro Swarna Santra
                                <span className="founder-role">
                                    {" "}(Founder)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProductSpecification;