import { Helmet } from "react-helmet-async";
import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

import useQuantity from "../../hooks/useQuantity";
import useWishlist from "../../hooks/useWishlist";

import loadReviews from "../../api/reviewApi";
import { getProductBySlug, getRelatedProducts } from "../../api/productApi";

import { orderOnWhatsApp } from "../../utils/whatsapp"

const RelatedProducts = lazy(() => import("./RelatedProducts"));
const ProductReviews = lazy(() => import("./ProductReviews"));

import MainLayout from "../../components/Layout/MainLayout";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

import "../../styles/product.css";
import Loading from "../../components/Loading/Loading";
import ProductHero from "./ProductHero";
import OrderCountdown from "./OrderCountdown";
import ProductBenefits from "./ProductBenefits";
import ProductSignificance from "./ProductSignificance";
import ProductSpecification from "./ProductSpecification";
const ProductDetails = () => {

    const { slug } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const loadProduct = async () => {
            setLoading(true);
            const data = await getProductBySlug(slug);
            setProduct(data);
            setLoading(false);
        };
        loadProduct();
    }, [slug]);

    useEffect(() => {
        if (!product) return;

        const loadExtraData = async () => {
            const [related, reviews] = await Promise.all([
                getRelatedProducts(product.categorySlug, product.slug),
                loadReviews("product", 3, product.id),
            ]);

            setRelatedProducts(related);
            setReviews(reviews);
        };

        loadExtraData();
    }, [product?.categorySlug, product?.slug]);

    const { quantity, increaseQuantity, decreaseQuantity, } = useQuantity();
    const { isWishlisted, toggleWishlist, } = useWishlist(product?.id);

    if (loading) {
        return <Loading text="Preparing your experience" />;
    }

    if (!product) {
        return (
            <MainLayout>
                <ComingSoon
                    pagetitle="Product Not Found"
                    title="No Product With this Name"
                    description="The product you're looking for doesn't exist or may have been removed. Please browse our other spiritual and wellness products."
                    icon="🛍️"
                />
            </MainLayout>
        );
    }

    return (
        <>
            <Helmet>
                <title>{`${product.name} | Guru and Goodness`}</title>
                <meta name="description" content={product.shortDescription} />
            </Helmet>

            <ProductHero
                product={product}
                quantity={quantity}
                isWishlisted={isWishlisted}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onWishlist={toggleWishlist}
                onWhatsApp={orderOnWhatsApp}
            />
            <OrderCountdown />
            <ProductBenefits product={product} />
            <ProductSignificance product={product} />
            <ProductSpecification product={product} />
            <Suspense fallback={null}>
                <RelatedProducts products={relatedProducts} />
            </Suspense>

            <Suspense fallback={null}>
                <ProductReviews reviews={reviews} />
            </Suspense>
        </>
    );
};

export default ProductDetails;