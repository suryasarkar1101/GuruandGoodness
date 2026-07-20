let blogsCache = null;

export const getBlogs = async () => {
    if (blogsCache) {
        return blogsCache;
    }
    const response = await fetch("/data/blogs.json");
    if (!response.ok) {
        throw new Error("Failed to load blogs.");
    }
    blogsCache = await response.json();
    return blogsCache;
};

/**
 * Get Latest Blogs
 */
export const getLatestBlogs = async (limit = 6) => {
    const blogs = await getBlogs();
    return blogs.slice(0, limit);
};

/**
 * Get Featured Blogs
 */
export const getFeaturedBlogs = async (categorySlug, limit = 3) => {
    const blogs = await getBlogs();

    return blogs
        .filter(
            (blog) =>
                blog.categorySlug === categorySlug &&
                blog.featured
        )
        .slice(0, limit);
};

/**
 * Get Blogs By Category
 */
export const getAllBlogsByCategory = async (topic) => {
    const blogs = await getBlogs();

    return blogs.filter(
        (blog) => blog.categorySlug === topic
    );
};

/**
 * Get Related Blogs
 */
export const getRelatedBlogs = async (slug, limit = 3) => {
    const blogs = await getBlogs();

    const currentBlog = blogs.find(
        (blog) => blog.slug === slug
    );

    if (!currentBlog) {
        return [];
    }

    return blogs
        .filter(
            (blog) =>
                blog.categorySlug === currentBlog.categorySlug &&
                blog.slug !== slug
        )
        .slice(0, limit);
};

/**
 * Get Blog By Slug
 */
export const getBlogBySlug = async (slug) => {
    const blogs = await getBlogs();
    return blogs.find((blog) => blog.slug === slug) || null;
};

export const getArticleContent = async (path) => {
    const response = await fetch(path);
    return await response.text();
};