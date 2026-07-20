// Calculate reading progress
export const calculateProgress = (content) => {
    if (!content) return 0;

    const contentTop = content.getBoundingClientRect().top + window.scrollY;
    const contentHeight = content.offsetHeight;
    const maxScroll = contentHeight - window.innerHeight;

    if (maxScroll <= 0) return 100;

    const scrollPosition = window.scrollY - contentTop;

    const progress = Math.max(
        0,
        Math.min((scrollPosition / maxScroll) * 100, 100)
    );

    return Math.round(progress);
};

// Save progress
export const saveReadingProgress = (slug, progress) => {
    const oldProgress =
        Number(localStorage.getItem(`reading_${slug}`)) || 0;

    if (progress > oldProgress) {
        localStorage.setItem(`reading_${slug}`, progress);
    }

    localStorage.setItem(
        `last_read_${slug}`,
        new Date().toISOString()
    );
};

// Get saved progress
export const getSavedProgress = (slug) => {
    return Number(localStorage.getItem(`reading_${slug}`)) || 0;
};

// Restore scroll position
export const restoreReadingProgress = (content, slug) => {
    const progress = getSavedProgress(slug);

    if (!content || progress === 0) return;

    const contentTop = content.getBoundingClientRect().top + window.scrollY;
    const contentHeight = content.offsetHeight;
    const maxScroll = contentHeight - window.innerHeight;

    window.scrollTo({
        top: contentTop + (maxScroll * progress) / 100,
        behavior: "instant",
    });

    return progress;
};

// Reset progress
export const resetReadingProgress = (slug) => {
    localStorage.removeItem(`reading_${slug}`);
    localStorage.removeItem(`last_read_${slug}`);
};

// Last read text
export const getLastReadText = (slug) => {
    const lastRead = localStorage.getItem(`last_read_${slug}`);

    if (!lastRead) {
        return "Today";
    }

    const date = new Date(lastRead);
    const today = new Date();

    const diff = Math.floor(
        (today - date) / (1000 * 60 * 60 * 24)
    );

    if (diff === 0) return "Today";
    if (diff === 1) return "Yesterday";

    return `${diff} days ago`;
};