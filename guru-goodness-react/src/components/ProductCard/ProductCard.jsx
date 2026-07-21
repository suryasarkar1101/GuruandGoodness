import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { orderOnWhatsApp } from "../../utils/whatsapp"
import { memo } from "react";

const ProductCard = ({ product, fullContent = true }) => {
    let cardClass = "";

    if (product.badge === "NEW ARRIVALS") {
        cardClass = "new-card";
    } else if (product.badge === "BEST SELLER") {
        cardClass = "bestseller-card";
    } else if (product.badge === "POPULAR") {
        cardClass = "popular-card";
    }

    return (
        <div className={`product-card ${cardClass}`}>
            {product.badge && (
                <div className="badge">
                    {product.badge}
                </div>
            )}

            <div className="product-image">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                />
            </div>

            <Link to={`/shop/product/${product.slug}`}>
                <div className="product-title">
                    {product.name}
                </div>

                <div className="product-desc">
                    {product.shortDescription}
                </div>

                <div className="product-price">
                    <span className="sale-price">
                        {product.price}
                    </span>

                    <span className="real-price">
                        {product.oldPrice}
                    </span>
                </div>

                {fullContent && (
                    <div className="product-rating">
                        <StarRating rating={product.rating} />
                    </div>
                )}
            </Link>

            {fullContent && (
                <div className="buy-btn"
                    onClick={() => orderOnWhatsApp(product, "1")}>
                    <i className="fa-brands fa-whatsapp"></i>
                    Chat to Buy
                </div>
            )}
        </div>
    );
};

export default memo(ProductCard);