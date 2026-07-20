import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

import MainLayout from "../../components/Layout/MainLayout";
import Hero from "./Hero";
import AboutBrand from "./AboutBrand";
import Founder from "./Founder";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

import "../../styles/about.css";

const About = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading text="Preparing your experience" />;
    }
    return (
        <>
            <Helmet>
                <title>About Us | Guru and Goodness</title>
            </Helmet>
            <Hero />
            <AboutBrand />
            <Founder />
            <Testimonials />
            <CTA />
        </>
    );
};

export default About;