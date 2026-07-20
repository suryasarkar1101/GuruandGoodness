import ProductCard from "../../components/ProductCard/ProductCard";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const ProductGrid = ({ products }) => {
    if (products.length === 0) {
        return <ComingSoon />;
    }

    return (
        <div className="product-grid">

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}

        </div>
    );
};

export default ProductGrid;