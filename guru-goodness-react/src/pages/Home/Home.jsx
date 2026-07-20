import { Helmet } from "react-helmet-async";
import "../../styles/homepage.css";

import AboutSection from "./AboutSection";
import Collections from "./Collections";
import FaithBanner from "./FaithBanner";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Guru and Goodness - Home Page</title>
      </Helmet>

      <Hero />
      <Collections />
      <AboutSection />
      <FeaturedProducts />
      <FaithBanner />
      <Testimonials />
    </>
  );
};

export default Home;