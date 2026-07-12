const StarRating = ({ rating }) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => {
        const star = index + 1;

        if (rating >= star) {
          return (
            <i
              key={star}
              className="fa-solid fa-star"
            ></i>
          );
        }

        if (rating >= star - 0.25) {
          return (
            <i
              key={star}
              className="fa-solid fa-star-half-stroke"
            ></i>
          );
        }

        return (
          <i
            key={star}
            className="fa-regular fa-star"
          ></i>
        );
      })}
    </>
  );
};

export default StarRating;