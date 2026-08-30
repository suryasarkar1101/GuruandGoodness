import { useEffect, useState } from "react";
import offerPopupImage from "../../assets/images/offer-popup.png";
import { WHATSAPP_URL } from "../../utils/constants";

const OfferPopup = () => {
    const [offer, setOffer] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        const loadOffer = async () => {
            try {
                const response = await fetch("/offers.json");
                if (!response.ok) {
                    throw new Error("Failed to load offers.json");
                }
                const data = await response.json();
                setOffer(data);                
            } catch (error) {
                console.error("Offer loading error:", error);
            }
        };
        loadOffer();
    }, []);

    useEffect(() => {
        if (!offer?.endAt) {
            return;
        }

        const endTime = new Date(offer.endAt).getTime();

        const calculateTimeLeft = () => {
            const remaining = endTime - Date.now();

            if (remaining <= 0) {
                setTimeLeft(null);
                setIsOpen(false);
                return false;
            }

            setTimeLeft({
                days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
                hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((remaining / (1000 * 60)) % 60),
                seconds: Math.floor((remaining / 1000) % 60)
            });

            return true;
        };

        if (!calculateTimeLeft()) {
            return;
        }

        const popupTimer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);

        const countdownTimer = setInterval(() => {
            calculateTimeLeft();
        }, 1000);

        return () => {
            clearTimeout(popupTimer);
            clearInterval(countdownTimer);
        };
    }, [offer]);

    if (!isOpen || !timeLeft) {
        return null;
    }
    const whatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(offer.whatsappMessage)}`;

    return (
        <div className="offer-popup-overlay">
            <div className="offer-popup">
                <div className="offer-popup-countdown">
                    <div className="countdown-title">
                        OFFER ENDS IN
                    </div>
                    <div className="countdown-values">
                        <div className="countdown-item">
                            <span>{String(timeLeft.days).padStart(2, "0")}</span>
                            <small>DAYS</small>
                        </div>
                        <div className="countdown-separator">:</div>
                        <div className="countdown-item">
                            <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                            <small>HOURS</small>
                        </div>
                        <div className="countdown-separator">:</div>
                        <div className="countdown-item">
                            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                            <small>MINUTES</small>
                        </div>
                        <div className="countdown-separator">:</div>
                        <div className="countdown-item">
                            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
                            <small>SECONDS</small>
                        </div>
                    </div>
                </div>
                <button type="button" className="offer-popup-close" onClick={() => setIsOpen(false)} aria-label="Close offer">
                    <i className="fa-solid fa-xmark"></i>
                </button>              
                <img src={offerPopupImage} alt="Special Offers" className="offer-popup-image" />                
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="offer-popup-chat">
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>GET NOW</span>
                </a>
            </div>
        </div>
    );
};

export default OfferPopup;