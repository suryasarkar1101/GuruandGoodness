import { Helmet } from "react-helmet-async";

import "../../styles/contact.css";

import Hero from "./Hero";
import ContactInfo from "./ContactInfo";
import BusinessHours from "./BusinessHours";
import WhatsAppSection from "./WhatsAppSection";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Guru & Goodness</title>
            </Helmet>

            <Hero />
            <ContactInfo />
            <BusinessHours/>
            <WhatsAppSection/>
            <ContactForm/>
        </>
    );
};

export default Contact;