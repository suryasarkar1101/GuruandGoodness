export const getImagePath = (path) => {
    return new URL(`../${path}`, import.meta.url).href;
};