import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/Layout/MainLayout";
import RouteLoader from "../components/Loading/RouteLoader";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Consultancy from "../pages/Consultancy/Consultancy";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import BlogCategory from "../pages/BlogCategory/BlogCategoty";
import BlogArticle from "../pages/BlogArticle/BlogArticle";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/Product/ProductDetails";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;