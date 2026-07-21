import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "../components/Layout/MainLayout";
import RouteLoader from "../components/Loading/RouteLoader";
import Loading from "../components/Loading/Loading";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Consultancy = lazy(() => import("../pages/Consultancy/Consultancy"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const BlogCategory = lazy(() => import("../pages/BlogCategory/BlogCategoty"));
const BlogArticle = lazy(() => import("../pages/BlogArticle/BlogArticle"));
const Shop = lazy(() => import("../pages/Shop/Shop"));
const ProductDetails = lazy(() => import("../pages/Product/ProductDetails"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy"));
const TermsConditions = lazy(() => import("../pages/TermsConditions/TermsConditions"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading text="Preparing your experience" />}>
      <Routes>
        <Route element={<RouteLoader />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/category/:topic" element={<BlogCategory />} />
            <Route path="/blog/article/:slug" element={<BlogArticle />} />

            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/shop/product/:slug" element={<ProductDetails />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;