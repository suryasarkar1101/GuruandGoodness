import { Helmet } from "react-helmet-async";

import "../../styles/consultancy.css";

import Hero from "./Hero";
import Services from "./Services";
import Steps from "./Steps";
import ConsultancyForm from "./ConsultancyForm";
import CTA from "./CTA";

const Consultancy = () => {
  return (
    <>
      <Helmet>
        <title>Consultancy | Guru and Goodness</title>
      </Helmet>

      <Hero />
      <Services />
      <Steps />
      <ConsultancyForm />
      <CTA />
    </>
  );
};

export default Consultancy;