import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import mandalaHalf from "../../assets/images/mandala-half.png";
import mandalaLeaf from "../../assets/images/mandala-leaf.png";

import focusIcon from "../../assets/images/icons/focus.png";
import stressIcon from "../../assets/images/icons/stress.png";
import peaceIcon from "../../assets/images/icons/peace.png";
import protectionIcon from "../../assets/images/icons/protection.png";

import authenticIcon from "../../assets/images/icons/authentic.png";
import blessedIcon from "../../assets/images/icons/blessed.png";
import packageIcon from "../../assets/images/icons/package.png";
import StarRating from "../../components/StarRating/StarRating";

const ProductHero = ({
    product,
    quantity,
    isWishlisted,
    onIncrease,
    onDecrease,
    onWishlist,
    onWhatsApp,
}) => {

    const [selectedImage, setSelectedImage] = useState(
        product?.images?.[0] ?? null
    );

    useEffect(() => {
        setSelectedImage(product?.images?.[0] ?? null);
    }, [product]);

    const benefitIcons = [
        focusIcon,
        stressIcon,
        peaceIcon,
        protectionIcon,
    ];

    return (
        <section className="gg-product-details">

            <img
                src={mandalaHalf}
                className="about-decor about-decor-left2"
                alt=""
                loading="lazy"
            />

            <img
                src={mandalaLeaf}
                className="about-decor about-decor-right"
                alt=""
                loading="lazy"
            />

            <div className="gg-product-container">

                {/* Gallery */}

                <div className="gg-product-gallery">

                    <div className="gg-product-thumbnails">

                        {product.images?.map((image, index) => (

                            <div
                                key={index}
                                className={`gg-product-thumb ${selectedImage === image ? "active" : ""
                                    }`}
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image}
                                    alt={`${product.name} ${index + 1}`}
                                    loading="lazy"
                                />
                            </div>

                        ))}

                    </div>
                    <div className="gg-product-main-image">
                        {selectedImage && (
                            <img
                                id="gg-main-image"
                                src={selectedImage}
                                alt={product.name}
                                loading="lazy"
                            />
                        )}
                        <button className="gg-image-zoom">
                            <i className="fas fa-search-plus"></i>
                        </button>
                    </div>
                </div>

                {/* Content */}

                <div className="gg-product-content">

                    <div className="breadcrumb-my">
                        <Link to="/">Home</Link>
                        <span>›</span>
                        <Link to={`/shop/${product.categorySlug}`}>
                            {product.category}
                        </Link>
                    </div>

                    <div className="gg-product-title-row">
                        <div className="gg-product-name">
                            {product.name}
                            {product.badge && (
                                <span className="gg-product-badge">
                                    {product.badge}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="gg-product-rating-row">
                        <div className="gg-stars" id="gg-stars">
                            <StarRating rating={product.rating} />
                        </div>
                        <span className="gg-rating-score">
                            ({product.rating})
                        </span>

                        <span className="gg-divider-product">|</span>

                        <span className="gg-review-count">
                            {product.reviews}
                        </span>

                    </div>

                    <div className="gg-price-area">
                        <div className="gg-current-price">
                            {product.price}
                        </div>
                        {product.oldPrice && (
                            <div className="gg-old-price">
                                {product.oldPrice}
                            </div>
                        )}
                        {product.discount && (
                            <div className="gg-discount-badge">
                                {product.discount}
                            </div>
                        )}
                    </div>

                    <p className="gg-tax-text">
                        Inclusive of all taxes
                    </p>
                    <p className="gg-product-description">
                        {product.description}
                    </p>
                    <div className="gg-product-benefits">
                        {product.quickBenefits?.map((benefit, index) => (
                            <div
                                className="gg-benefit-tag"
                                key={index}
                            >
                                <img
                                    src={benefitIcons[index]}
                                    alt={benefit}
                                    loading="lazy"
                                />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <div className="gg-product-actions">

                        <div className="gg-product-top">

                            <div className="gg-qty">
                                <button onClick={onDecrease}>
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button onClick={onIncrease}>
                                    +
                                </button>
                            </div>

                            <button
                                className={
                                    isWishlisted
                                        ? "gg-wishlist-btn active"
                                        : "gg-wishlist-btn"
                                }
                                onClick={onWishlist}
                            >
                                <i
                                    className={
                                        isWishlisted
                                            ? "fa-solid fa-heart"
                                            : "fa-regular fa-heart"
                                    }
                                />
                            </button>
                        </div>

                        <div
                            className="gg-whatsapp-btn"
                            onClick={() =>
                                onWhatsApp(product, quantity)
                            }
                        >
                            <i className="fab fa-whatsapp"></i>
                            Chat to Buy
                        </div>

                    </div>

                    <div className="gg-product-features">

                        <div className="gg-feature-item">
                            <img
                                src={authenticIcon}
                                alt=""
                                loading="lazy"
                            />
                            <span>100% Authentic</span>
                        </div>

                        <div className="gg-feature-item">
                            <img
                                src={blessedIcon}
                                alt=""
                                loading="lazy"
                            />
                            <span>Energized & Blessed</span>
                        </div>

                        <div className="gg-feature-item">
                            <img
                                src={packageIcon}
                                alt=""
                                loading="lazy"
                            />
                            <span>Secure Packaging</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProductHero;