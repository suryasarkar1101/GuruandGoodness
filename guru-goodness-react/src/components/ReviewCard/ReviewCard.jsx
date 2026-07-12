const ReviewCard = ({ review }) => {
  return (
    <div className="gg-card">
      <div className="gg-user">
        <img
          src={review.image}
          alt={review.name}
        />

        <div>
          <h4>{review.name}</h4>

          <span>{review.location}</span>

          <div className="gg-stars">
            {Array.from({ length: review.rating }, (_, index) => (
              <i
                key={index}
                className="fa-solid fa-star"
              ></i>
            ))}
          </div>
        </div>
      </div>

      <p>{review.review}</p>

      <div className="gg-bottom-quote">
        <i className="fa-solid fa-quote-right"></i>
      </div>
    </div>
  );
};

export default ReviewCard;