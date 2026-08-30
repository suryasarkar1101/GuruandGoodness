import { Helmet } from "react-helmet-async";
import { useMemo, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getProducts, getProductsByCategory } from "../../api/productApi";
import { heroData } from "./shopHero";

import "../../styles/shop.css";
import Hero from "./Hero";
import CategoryCards from "./CategoryCards";
import FaithBanner from "../Home/FaithBanner";
import CTA from "../About/CTA";
import FilterBar from "./FilterBar";
import ProductGrid from "./ProductGrid";
import OfferPopup from "../../components/OfferPopup/OfferPopup";

const Shop = () => {
    const { category = "all" } = useParams();

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        const loadProducts = async () => {
            const data =
                category === "all"
                    ? await getProducts()
                    : await getProductsByCategory(category);

            setProducts(data);
        };

        loadProducts();
    }, [category]);

    const displayProducts = useMemo(() => {
        let result = [...products];

        switch (filter) {
            case "popular":
                result = result.filter(
                    (product) => product.badge === "POPULAR"
                );
                break;

            case "new":
                result = result.filter(
                    (product) => product.badge === "NEW ARRIVALS"
                );
                break;

            case "best":
                result = result.filter(
                    (product) => product.badge === "BEST SELLER"
                );
                break;

            default:
                break;
        }

        switch (sort) {
            case "az":
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;

            case "za":
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;

            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;

            default:
                break;
        }

        return result;
    }, [products, filter, sort]);

    const navigate = useNavigate();

    const handleCategoryChange = (newCategory) => {
        if (newCategory === "all") {
            navigate("/shop/");
        } else {
            navigate(`/shop/${newCategory}`);
        }
    };

    const hero = heroData[category] || heroData.all;

    return (
        <>
            <Helmet>
                <title>{`${hero.brTitle} | Guru & Goodness`}</title>
            </Helmet>
            <Hero hero={hero} />
            <CategoryCards currentCategory={category} />
            <section className="shop-products-section">
                <FilterBar category={category} filter={filter} sort={sort} onCategoryChange={handleCategoryChange} onFilterChange={setFilter} onSortChange={setSort} />
                <ProductGrid products={displayProducts} />
            </section>
            <FaithBanner />
            <CTA />
            <OfferPopup/>
        </>
    );
};

export default Shop;