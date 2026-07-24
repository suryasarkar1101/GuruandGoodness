import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import MainLayout from "../../components/Layout/MainLayout";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Guru & Goodness</title>
            </Helmet>

            <section className="notfound-section">
                <div className="notfound-container">

                    <div className="notfound-number">
                        404
                    </div>

                    <div className="notfound-title">
                        Oops! This Page Couldn't Be Found
                    </div>

                    <div className="notfound-divider"></div>

                    <p className="notfound-description">
                        The page you're looking for may have been moved,
                        renamed, or no longer exists.
                        Let's help you get back to your journey of
                        wellness and positivity.
                    </p>

                    <div className="notfound-actions">

                        <Link
                            to="/"
                            className="notfound-btn primary"
                        >
                            <i className="fa-solid fa-house"></i>
                            Back to Home
                        </Link>

                        <Link
                            to="/shop"
                            className="notfound-btn secondary"
                        >
                            <i className="fa-solid fa-store"></i>
                            Visit Shop
                        </Link>

                    </div>

                </div>
            </section>
        </>
    );
};

export default NotFound;