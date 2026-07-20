import { useEffect, useState } from "react";

const OrderCountdown = () => {

    const getTimeRemaining = () => {

        const now = new Date();
        const target = new Date();
        target.setHours(20, 0, 0, 0);
        if (now >= target) {
            target.setDate(target.getDate() + 1);
        }
        const diff = target - now;
        return {
            hours: String(
                Math.floor(diff / (1000 * 60 * 60))
            ).padStart(2, "0"),

            minutes: String(
                Math.floor(
                    (diff % (1000 * 60 * 60)) /
                    (1000 * 60)
                )
            ).padStart(2, "0"),

            seconds: String(
                Math.floor(
                    (diff % (1000 * 60)) /
                    1000
                )
            ).padStart(2, "0"),
        };
    };
    
    const [time, setTime] = useState(getTimeRemaining());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeRemaining());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="gg-handcrafted-inner">

            <div className="gg-handcrafted-content">

                <div className="gg-handcrafted-info">

                    <div className="gg-info-item">

                        <i className="fa-regular fa-clock"></i>

                        <span>Order within</span>

                        <div className="gg-countdown">

                            <span>{time.hours}</span>

                            :

                            <span>{time.minutes}</span>

                            :

                            <span>{time.seconds}</span>

                        </div>

                    </div>

                    <span className="gg-dot"></span>

                    <div className="gg-info-item">

                        <i className="fa-solid fa-truck-fast"></i>

                        <span>
                            Ships in <strong>5–7 Days</strong>
                        </span>

                    </div>

                    <span className="gg-dot"></span>

                    <div className="gg-info-item">

                        <div className="gg-handcrafted-text">
                            Handcrafted fresh to order for premium quality.
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default OrderCountdown;