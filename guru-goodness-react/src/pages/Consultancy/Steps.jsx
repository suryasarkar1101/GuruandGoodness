import dividerBelow from "../../assets/images/divider_below.png";

import how1 from "../../assets/images/icons/how1.png";
import how2 from "../../assets/images/icons/how2.png";
import how3 from "../../assets/images/icons/how3.png";
import how4 from "../../assets/images/icons/how4.png";

const Steps = () => {
    return (
        <section className="consultation-steps">
            <div className="steps-heading">
                <div className="hero-title">
                    How It Works
                </div>

                <div className="hero-divider">
                    <img
                        src={dividerBelow}
                        alt="Divider"
                        className="divider-img"
                    />
                </div>

                <p>
                    Your journey to clarity and transformation in 4 simple
                    steps.
                </p>
            </div>

            <div className="full-step">
                <div className="steps-line"></div>

                <div className="steps-grid">
                    <div className="step-card active">
                        <div className="step-icon">
                            <img
                                src={how1}
                                alt="Start on WhatsApp"
                            />
                        </div>

                        <span className="step-number">
                            STEP 01
                        </span>

                        <h3>Start on WhatsApp</h3>

                        <div className="gold-divider">
                            <span></span>
                            <div className="diamond"></div>
                            <span></span>
                        </div>

                        <p>
                            Share your query with us on WhatsApp.
                        </p>
                    </div>

                    <div className="step-card">
                        <div className="step-icon">
                            <img
                                src={how2}
                                alt="Connect with Expert"
                            />
                        </div>

                        <span className="step-number">
                            STEP 02
                        </span>

                        <h3>Connect with Expert</h3>

                        <div className="gold-divider">
                            <span></span>
                            <div className="diamond"></div>
                            <span></span>
                        </div>

                        <p>
                            Our expert understands your needs and guides you.
                        </p>
                    </div>

                    <div className="step-card">
                        <div className="step-icon">
                            <img
                                src={how3}
                                alt="Schedule Session"
                            />
                        </div>

                        <span className="step-number">
                            STEP 03
                        </span>

                        <h3>Schedule Session</h3>

                        <div className="gold-divider">
                            <span></span>
                            <div className="diamond"></div>
                            <span></span>
                        </div>

                        <p>
                            Choose a suitable consultation time.
                        </p>
                    </div>

                    <div className="step-card">
                        <div className="step-icon">
                            <img
                                src={how4}
                                alt="Receive Personalized Guidance"
                            />
                        </div>

                        <span className="step-number">
                            STEP 04
                        </span>

                        <h3>Receive Personalized Guidance</h3>

                        <div className="gold-divider">
                            <span></span>
                            <div className="diamond"></div>
                            <span></span>
                        </div>

                        <p>
                            Get practical advice and begin your transformation
                            journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;