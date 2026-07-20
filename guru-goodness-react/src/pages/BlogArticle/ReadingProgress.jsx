import { useEffect, useRef, useState } from "react";

import lotusDivider from "../../assets/images/icons/lotus-divider.png";

import {
    calculateProgress,
    saveReadingProgress,
    getSavedProgress,
    restoreReadingProgress,
    resetReadingProgress,
    getLastReadText,
} from "../../utils/readingProgress";

const ReadingProgress = ({ slug }) => {
    const [progress, setProgress] = useState(0);
    const [lastRead, setLastRead] = useState("Today");
    const isResetting = useRef(false);

    useEffect(() => {
        if (!slug) return;

        const content = document.querySelector(".gg-read-content");

        if (!content) return;

        const handleScroll = () => {
            if (isResetting.current) return;
            const currentProgress = calculateProgress(content);
            setProgress(currentProgress);
            saveReadingProgress(slug, currentProgress);
            setLastRead(getLastReadText(slug));
        };

        setTimeout(() => {
            restoreReadingProgress(content, slug);
            setProgress(getSavedProgress(slug));
            setLastRead(getLastReadText(slug));
        }, 500);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [slug]);

    const handleReset = () => {
        isResetting.current = true;
        resetReadingProgress(slug);
        setProgress(0);
        setLastRead("Today");
        window.scrollTo({ top: 0, behavior: "smooth", });
        setTimeout(() => { isResetting.current = false; }, 1000);
    };

    return (
        <div className="gg-progress-card">
            <div className="gg-progress-top">
                <div className="gg-progress-title">
                    <div className="gg-progress-icon">
                        <img
                            src={lotusDivider}
                            alt="Lotus Divider"
                        />
                    </div>

                    <div>
                        <h3>READING PROGRESS</h3>

                        <div className="sub-progress-title">
                            Keep going! You're doing great.
                        </div>
                    </div>
                </div>

                <div className="gg-progress-count">
                    <span className="gg-progress-percent">
                        {progress}%
                    </span>

                    <small>Completed</small>
                </div>
            </div>

            <div className="gg-progress-wrapper">
                <div className="gg-progress-bar">
                    <div
                        className="gg-progress-fill"
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>
            </div>

            <div className="gg-progress-bottom">
                <div className="gg-last-read">
                    <div className="gg-read-icon">
                        <i className="fa-solid fa-signal"></i>
                    </div>

                    <div>
                        <h4>
                            Last read: {lastRead}
                        </h4>
                    </div>
                </div>

                <button
                    className="gg-reset-progress"
                    onClick={handleReset}
                >
                    ↻ Reset Progress
                </button>
            </div>
        </div>
    );
};

export default ReadingProgress;