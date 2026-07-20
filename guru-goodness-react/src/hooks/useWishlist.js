import { useEffect, useState } from "react";

const STORAGE_KEY = "wishlist";

const useWishlist = (productId) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedWishlist =
            JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        setWishlist(savedWishlist);
    }, []);

    const isWishlisted = wishlist.includes(productId);

    const toggleWishlist = () => {
        let updatedWishlist;

        if (isWishlisted) {
            updatedWishlist = wishlist.filter(
                (id) => id !== productId
            );
        } else {
            updatedWishlist = [...wishlist, productId];
        }

        setWishlist(updatedWishlist);

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(updatedWishlist)
        );
    };

    return {
        wishlist,
        isWishlisted,
        toggleWishlist,
    };
};

export default useWishlist;