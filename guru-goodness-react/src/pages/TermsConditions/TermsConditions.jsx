import { Helmet } from "react-helmet-async";
import "../../styles/extra.css";

const TermsConditions = () => {
    return (
        <>
            <Helmet>
                <title>Terms & Conditions | Guru & Goodness</title>
            </Helmet>
            <section className="legal-page-section">

                <div className="legal-container">

                    <div className="legal-header">

                        <span className="legal-tag">
                            TERMS & CONDITIONS
                        </span>

                        <div className="legal-title">
                            Terms & Conditions
                        </div>

                        <p className="legal-updated">
                            Last Updated: June 2026
                        </p>

                    </div>

                    <div className="legal-content">

                        <div className="legal-block">

                            <h2>1. Introduction</h2>

                            <p>
                                Welcome to Guru & Goodness. By accessing and using our
                                website, products, and services, you agree to comply with
                                and be bound by these Terms & Conditions.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>2. Products & Services</h2>

                            <p>
                                We strive to ensure that all product descriptions, images,
                                and pricing information are accurate. However, minor
                                variations may occur due to natural materials,
                                photography, or screen settings.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>3. Orders & Payments</h2>

                            <ul>

                                <li>
                                    All orders are subject to availability.
                                </li>

                                <li>
                                    Prices are displayed in INR and include applicable
                                    taxes unless otherwise stated.
                                </li>

                                <li>
                                    Orders will be processed after successful payment
                                    confirmation.
                                </li>

                            </ul>

                        </div>

                        <div className="legal-block">

                            <h2>4. Shipping & Delivery</h2>

                            <p>
                                Delivery timelines are estimates and may vary depending
                                on location, courier services, or unforeseen
                                circumstances.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>5. Returns & Refunds</h2>

                            <p>
                                Eligible products may be returned according to our
                                Refund & Return Policy. Customized or personalized
                                products may not be eligible for returns.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>6. Consultancy Services</h2>

                            <p>
                                Guidance and consultancy sessions provided through Guru
                                and Goodness are intended for informational and
                                spiritual wellness purposes only and should not be
                                considered professional medical, legal, or financial
                                advice.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>7. Intellectual Property</h2>

                            <p>
                                All website content including text, graphics, logos,
                                images, designs, and digital assets are the property of
                                Guru & Goodness and may not be copied or reproduced
                                without permission.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>8. Privacy</h2>

                            <p>
                                Your use of this website is also governed by our Privacy
                                Policy.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>9. Limitation of Liability</h2>

                            <p>
                                Guru & Goodness shall not be liable for any indirect,
                                incidental, or consequential damages arising from the use
                                of our products, services, or website.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>10. Contact Information</h2>

                            <p>
                                For any questions regarding these Terms & Conditions,
                                please contact us through our Contact Page.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default TermsConditions;