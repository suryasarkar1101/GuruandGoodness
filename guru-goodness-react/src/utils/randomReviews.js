export const randomReviews = (reviews, count) => {
  const period = Math.floor(
    Date.now() / (1000 * 60 * 60 * 24 * 2)
  );

  let seedValue = period;

  const seed = () => {
    const x = Math.sin(seedValue++) * 10000;
    return x - Math.floor(x);
  };

  const data = [...reviews];

  data.sort(() => seed() - 0.5);

  return data.slice(0, count);
};