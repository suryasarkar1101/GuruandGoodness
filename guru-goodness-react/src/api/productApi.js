const PRODUCT_JSON = "/data/allProduct.json";

let productsCache = null;

const getProducts = async () => {
  if (productsCache) {
    return productsCache;
  }

  const response = await fetch(PRODUCT_JSON);

  if (!response.ok) {
    throw new Error("Product JSON not found");
  }
  productsCache = await response.json();
  return productsCache;
};

const getFeaturedProducts = async (limit = null) => {
  let products = await getProducts();
  products = products.filter((product) => product.featured);
  if (limit) {
    products = products.slice(0, limit);
  }
  return products;
};

const getProductBySlug = async (slug) => {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
};

const getRelatedProducts = async (
  categorySlug,
  currentSlug,
  limit = 5
) => {
  let products = await getProducts();
  products = products.filter(
    (product) =>
      product.categorySlug === categorySlug &&
      product.slug !== currentSlug
  );

  return products.slice(0, limit);
};

const getProductsByCategory = async (categorySlug) => {
  const products = await getProducts();

  if (!categorySlug || categorySlug === "all") {
    return products;
  }

  return products.filter(
    (product) => product.categorySlug === categorySlug
  );
};

export {
  getProducts,
  getFeaturedProducts,
  getProductBySlug,
  getRelatedProducts,
  getProductsByCategory,
};