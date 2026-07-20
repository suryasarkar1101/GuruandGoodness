import { useEffect, useState } from "react";

const useAboutTestimonialSlider = (totalCards) => {
    const [current, setCurrent] = useState(0);

    const getVisibleCards = () => {
        if (window.innerWidth <= 767) return 1;
        if (window.innerWidth <= 991) return 2;
        return 4;
    };

    const getMaxSlide = () =>
        Math.max(totalCards - getVisibleCards(), 0);

    const next = () => {
        setCurrent((prev) =>
            prev >= getMaxSlide() ? 0 : prev + 1
        );
    };

    const prev = () => {
        setCurrent((prev) =>
            prev <= 0 ? getMaxSlide() : prev - 1
        );
    };

    useEffect(() => {
        const handleResize = () => {
            setCurrent((prev) =>
                Math.min(prev, getMaxSlide())
            );
        };

        window.addEventListener("resize", handleResize);

        return () =>
            window.removeEventListener("resize", handleResize);
    }, [totalCards]);

    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 5000);

        return () => clearInterval(timer);
    }, [totalCards, current]);

    return {
        current,
        setCurrent,
        next,
        prev,
        visibleCards: getVisibleCards(),
        maxSlide: getMaxSlide(),
    };
};

export default useAboutTestimonialSlider;