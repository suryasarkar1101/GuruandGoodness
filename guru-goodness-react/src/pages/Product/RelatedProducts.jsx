import ProductCard from "../../components/ProductCard/ProductCard";

const RelatedProducts = ({ products }) => {

    if (!products?.length) {
        return null;
    }

    return (
        <section className="shop-products-section">

            <div className="gg-benefits-header">

                <span className="gg-benefits-arrow">
                    <i className="fa-solid fa-angle-right"></i>
                </span>

                <div className="benefits-title">
                    Related Products
                </div>

            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        fullContent={false}
                    />
                ))}

            </div>

        </section>
    );
};

export default RelatedProducts;