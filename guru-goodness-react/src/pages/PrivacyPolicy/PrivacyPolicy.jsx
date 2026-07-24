import { Helmet } from "react-helmet-async";

import "../../styles/extra.css";

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Guru & Goodness</title>
            </Helmet>

            <section className="legal-page-section">
                <div className="legal-container">

                    <div className="legal-header">

                        <span className="legal-tag">
                            PRIVACY POLICY
                        </span>

                        <div className="legal-title">
                            Privacy Policy
                        </div>

                        <p className="legal-updated">
                            Last Updated: June 2026
                        </p>

                    </div>

                    <div className="legal-content">

                        <div className="legal-block">

                            <h2>1. Introduction</h2>

                            <p>
                                At Guru & Goodness, we respect your privacy and are committed
                                to protecting your personal information. This Privacy Policy
                                explains how we collect, use, and protect your information when
                                you visit our website or use our services.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>2. Information We Collect</h2>

                            <p>
                                We may collect the following information when you interact with
                                our website:
                            </p>

                            <ul>

                                <li>
                                    Name, email address, phone number, and shipping details
                                </li>

                                <li>
                                    Order and purchase information
                                </li>

                                <li>
                                    Consultancy booking details
                                </li>

                                <li>
                                    Website usage information and preferences
                                </li>

                            </ul>

                        </div>

                        <div className="legal-block">

                            <h2>3. How We Use Your Information</h2>

                            <p>
                                Your information may be used for:
                            </p>

                            <ul>

                                <li>
                                    Processing and delivering your orders
                                </li>

                                <li>
                                    Providing consultancy services
                                </li>

                                <li>
                                    Improving our products and customer experience
                                </li>

                                <li>
                                    Sending important updates related to your orders
                                </li>

                            </ul>

                        </div>

                        <div className="legal-block">

                            <h2>4. Payment Information</h2>

                            <p>
                                Payments are processed through secure third-party payment
                                gateways. Guru & Goodness does not store your complete payment
                                card or banking information.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>5. Cookies & Website Tracking</h2>

                            <p>
                                Our website may use cookies and similar technologies to improve
                                website performance, remember preferences, and understand user
                                behaviour.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>6. Data Protection</h2>

                            <p>
                                We take reasonable security measures to protect your personal
                                information from unauthorized access, misuse, or disclosure.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>7. Sharing of Information</h2>

                            <p>
                                We do not sell or rent your personal information. Information
                                may only be shared with trusted service providers required for
                                order processing, delivery, payment, or website operations.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>8. Your Rights</h2>

                            <p>
                                You may request access, correction, or deletion of your personal
                                information by contacting us.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>9. Third Party Links</h2>

                            <p>
                                Our website may contain links to third-party websites. We are
                                not responsible for the privacy practices of external websites.
                            </p>

                        </div>

                        <div className="legal-block">

                            <h2>10. Contact Us</h2>

                            <p>
                                If you have any questions regarding this Privacy Policy,
                                please contact Guru & Goodness through our Contact page.
                            </p>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;