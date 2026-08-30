import { Helmet } from "react-helmet-async";

import "../../styles/consultancy.css";

import Hero from "./Hero";
import Services from "./Services";
import Steps from "./Steps";
import ConsultancyForm from "./ConsultancyForm";
import CTA from "./CTA";
import OfferPopup from "../../components/OfferPopup/OfferPopup";

const Consultancy = () => {
  return (
    <>
      <Helmet>
        <title>Consultancy | Guru & Goodness</title>
      </Helmet>

      <Hero />
      <Services />
      <Steps />
      <ConsultancyForm />
      <CTA />
      <OfferPopup/>
    </>
  );
};

export default Consultancy;