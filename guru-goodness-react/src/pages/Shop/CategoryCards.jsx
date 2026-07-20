import { Link } from "react-router-dom";

import { shopCategories } from "./shopCategories";

const CategoryCards = ({ currentCategory }) => {
    return (
        <section className="shop-category-section">
            <div className="shop-category-nav">

                {shopCategories.map((category) => (
                    <Link
                        key={category.slug}
                        to={
                            category.slug === "all"
                                ? "/shop/"
                                : `/shop/${category.slug}`
                        }
                        className={`shop-category-card ${
                            currentCategory === category.slug
                                ? "active"
                                : ""
                        }`}
                    >
                        <img
                            src={category.image}
                            alt={category.title}
                        />

                        <span>
                            {category.title}
                        </span>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default CategoryCards;