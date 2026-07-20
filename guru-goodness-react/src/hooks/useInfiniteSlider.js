import { useEffect, useRef } from "react";

const useInfiniteSlider = (speed = 0.3) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    let animationId;

    const animate = () => {
      position += speed;

      if (position >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(-${position}px)`;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  return trackRef;
};

export default useInfiniteSlider;