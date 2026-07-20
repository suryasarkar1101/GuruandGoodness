import { shopCategories } from "./shopCategories";

const FilterBar = ({
    category,
    filter,
    sort,
    onCategoryChange,
    onFilterChange,
    onSortChange,
}) => {

    const handleFilterClick = (type) => {
        onFilterChange(filter === type ? "" : type);
    };

    return (
        <div className="shop-filter-bar">

            <div className="filter-left">

                <select
                    value={category}
                    onChange={(e) =>
                        onCategoryChange(e.target.value)
                    }
                >
                    {shopCategories.map((item) => (
                        <option
                            key={item.slug}
                            value={item.slug}
                        >
                            {item.title}
                        </option>
                    ))}
                </select>

            </div>

            <div className="filter-tabs">

                <button
                    className={filter === "popular" ? "active" : ""}
                    onClick={() =>
                        handleFilterClick("popular")
                    }
                >
                    🔥 Popular Products
                </button>

                <button
                    className={filter === "new" ? "active" : ""}
                    onClick={() =>
                        handleFilterClick("new")
                    }
                >
                    🔮 New Arrivals
                </button>

                <button
                    className={filter === "best" ? "active" : ""}
                    onClick={() =>
                        handleFilterClick("best")
                    }
                >
                    ⭐ Bestsellers
                </button>

            </div>

            <div className="filter-right">

                <select
                    value={sort}
                    onChange={(e) =>
                        onSortChange(e.target.value)
                    }
                >
                    <option value="">Sort By</option>
                    <option value="az">A to Z</option>
                    <option value="za">Z to A</option>
                    <option value="rating">Rating</option>
                </select>

            </div>

        </div>
    );
};

export default FilterBar;