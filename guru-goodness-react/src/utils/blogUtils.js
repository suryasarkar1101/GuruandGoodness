export const getArticleTime = (date) => {
    const postDate = new Date(date);
    const now = new Date();

    const diffMs = now - postDate;

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (minutes < 60)
        return `${minutes} min ago`;

    if (hours < 24)
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;

    return `${days} day${days > 1 ? "s" : ""} ago`;
};
export const getArticleAge = (date) => {
    const postDate = new Date(date);
    const currentDate = new Date();

    const diffMs = currentDate - postDate;

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
        return {
            value: minutes,
            text: "min ago",
        };
    }

    if (hours < 24) {
        return {
            value: hours,
            text: `hour${hours > 1 ? "s" : ""} ago`,
        };
    }

    return {
        value: days,
        text: `day${days > 1 ? "s" : ""} ago`,
    };
};