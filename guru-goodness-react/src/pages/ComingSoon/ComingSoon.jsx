import { useEffect, useState } from "react";
import "../../styles/comingsoon.css";
import logo from "../../assets/images/logo/logo.png";
import soonBg from "../../assets/images/backgrounds/soon_bg.png";
import { WHATSAPP_URL } from "../../utils/constants";
import { Helmet } from "react-helmet-async";

export default function ComingSoon({ config }) {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        if (!config?.launchDate) return;

        const launchDate = new Date(config.launchDate).getTime();

        const updateCountdown = () => {
            const now = Date.now();
            const distance = launchDate - now;

            if (distance <= 0) {
                setTimeLeft({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                });
                window.location.reload();
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) /
                (1000 * 60)
            );
            const seconds = Math.floor(
                (distance % (1000 * 60)) /
                1000
            );

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            });
        };

        updateCountdown();

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [config]);

    return (
        <>
            <Helmet>
                <title>Coming Soon | Guru & Goodness</title>
                <meta
                    name="description"
                    content="Guru & Goodness is launching soon. Join us on a spiritual wellness journey."
                />
            </Helmet>
            <section className="coming-hero"
                style={{ backgroundImage: `url(${soonBg})` }}>
                <div className="coming-overlay">

                    <img
                        className="coming-logo"
                        src={logo}
                        alt="Guru & Goodness"
                    />

                    <div className="coming-title">
                        A Beautiful Spiritual Experience
                        <span>is Coming Soon</span>
                    </div>

                    <p className="coming-description">
                        We're preparing something beautiful for your spiritual wellness journey.
                    </p>

                    <div className="coming-countdown">

                        <div className="coming-time-card">
                            <span>{timeLeft.days}</span>
                            <div className="coming-divider"></div>
                            <p>Days</p>
                        </div>

                        <div className="coming-time-card">
                            <span>{timeLeft.hours}</span>
                            <div className="coming-divider"></div>
                            <p>Hours</p>
                        </div>

                        <div className="coming-time-card">
                            <span>{timeLeft.minutes}</span>
                            <div className="coming-divider"></div>
                            <p>Minutes</p>
                        </div>

                        <div className="coming-time-card">
                            <span>{timeLeft.seconds}</span>
                            <div className="coming-divider"></div>
                            <p>Seconds</p>
                        </div>

                    </div>

                    <div className="coming-buttons">

                        <div className="btn-primary-comming">
                            <i className="fa-regular fa-bell"></i>
                            Notify Me
                        </div>

                        <a
                            href={WHATSAPP_URL}
                            className="btn-outline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                            Contact on WhatsApp
                        </a>

                    </div>

                </div>
            </section>

        </>
    );
}