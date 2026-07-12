import { useEffect, useRef, useState } from "react";

import leafImage from "../../assets/images/bell_leaf.png";
import dividerImg from "../../assets/images/divider_below.png";
import footerDivider from "../../assets/images/footer/footer_divider2.png";

import ProductCard from "../../components/ProductCard/ProductCard";
import { getFeaturedProducts } from "../../api/productApi";
import useAutoSlider from "../../hooks/useAutoSlider";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    const sliderRef = useRef(null);

    useAutoSlider(sliderRef, ".product-card", {
        gap: 18,
        interval: 3000,
        mobileWidth: 992,
    });

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await getFeaturedProducts(6);
                setProducts(data);
            } catch (error) {
                console.error("Failed to load featured products:", error);
            }
        };

        loadProducts();
    }, []);

    return (
        <section className="best-selling-section">
            {/* Decorative Background */}
            <div className="floating-leaf leaf-left">
                <img src={leafImage} alt="" />
            </div>

            <div className="floating-leaf leaf-right">
                <img src={leafImage} alt="" />
            </div>

            <div className="best-selling-container">
                <div className="top-label-wrap">
                    <span className="line"></span>

                    <div className="top-label">
                        OUR TOP PICKS
                    </div>

                    <span className="line"></span>
                </div>

                <div className="collections-title">
                    Best Selling Spiritual & Wellness Essentials
                </div>

                <div className="hero-divider">
                    <img
                        src={dividerImg}
                        alt="Divider"
                        className="divider-img"
                    />
                </div>

                <div
                    className="products-slider"
                    id="featuredProducts"
                    ref={sliderRef}
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

                <div className="footer-divider-image">
                    <img
                        src={footerDivider}
                        alt="Divider"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;