import { useState } from "react";

const useQuantity = (min = 1, max = 10, initial = 1) => {
    const [quantity, setQuantity] = useState(initial);

    const increaseQuantity = () => {
        setQuantity((prev) => Math.min(prev + 1, max));
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => Math.max(prev - 1, min));
    };

    const resetQuantity = () => {
        setQuantity(initial);
    };

    const setCustomQuantity = (value) => {
        const qty = Number(value);

        if (isNaN(qty)) return;

        setQuantity(
            Math.min(Math.max(qty, min), max)
        );
    };

    return {
        quantity,
        increaseQuantity,
        decreaseQuantity,
        resetQuantity,
        setCustomQuantity,
    };
};

export default useQuantity;