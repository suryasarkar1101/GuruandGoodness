import { useEffect } from "react";

const useAutoSlider = (
  sliderRef,
  cardSelector,
  {
    gap = 0,
    interval = 3000,
    mobileWidth = 1200,
  } = {}
) => {
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    if (window.innerWidth > mobileWidth) return;

    let scrollAmount = 0;
    let autoSlide;

    const startSlider = () => {
      autoSlide = setInterval(() => {
        const card = slider.querySelector(cardSelector);

        if (!card) return;

        const cardWidth = card.offsetWidth;

        scrollAmount += cardWidth;

        if (
          scrollAmount >=
          slider.scrollWidth - slider.clientWidth
        ) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });

          scrollAmount = 0;
          return;
        }

        slider.scrollTo({
          left: scrollAmount + gap,
          behavior: "smooth",
        });
      }, interval);
    };

    startSlider();

    const handleTouchStart = () => {
      clearInterval(autoSlide);
    };

    const handleTouchEnd = () => {
      clearInterval(autoSlide);
      startSlider();
    };

    slider.addEventListener(
      "touchstart",
      handleTouchStart
    );

    slider.addEventListener(
      "touchend",
      handleTouchEnd
    );

    return () => {
      clearInterval(autoSlide);

      slider.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      slider.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [sliderRef, cardSelector, gap, interval, mobileWidth]);
};

export default useAutoSlider;