let blogsData = [];
let currentArticleIndex = 6;
const basePath = window.location.pathname.includes("/GuruandGoodness/") ? "/GuruandGoodness/" : "/";

async function getBlogs() {
    if (blogsData.length > 0) {
        return blogsData;
    }
    const response = await fetch(basePath + "data/blogs.json");
    blogsData = await response.json();
    return blogsData;
}

//All Article 
async function loadBlogs(container, type = "latest") {

    try {
        const blogs = await getBlogs();
        const articleContainer = document.getElementById(container);
        if (!articleContainer) return;
        // Show Latest 6 Articles
        let displayBlogs = [];
        if (type === "latest") {
            displayBlogs = blogs.slice(0, 6);
        }
        else if (type === "featured") {
            const useTopic = new URLSearchParams(window.location.search).get("topic");
            displayBlogs = blogs.filter(blog => blog.categorySlug === useTopic && blog.featured === true).slice(0, 3);
        }
        else if (type === "all") {
            const topic = new URLSearchParams(window.location.search).get("topic");
            const allCategoryBlogs = blogs.filter(blog => blog.categorySlug === topic);
            displayBlogs = allCategoryBlogs.slice(0, currentArticleIndex);
        }
        else if (type === "related") {
            const slug = new URLSearchParams(window.location.search).get("slug");
            const currentBlog = blogs.find(blog => blog.slug === slug);
            displayBlogs = blogs.filter(blog => blog.categorySlug === currentBlog.categorySlug && blog.slug !== slug).slice(0, 3);
        }
        displayBlogs.forEach(blog => {
            const articleCard = `
            <div class="article-card">
                <div class="article-image">
                    <img src="${basePath + blog.image}" alt="${blog.title}">
                </div>
                <div class="article-content">
                    <div class="article-top">
                        <div class="article-category">
                            <img src="${topicData[blog.categorySlug].icon}" alt="${blog.category}">
                            <span>
                                ${blog.category}
                            </span>
                        </div>
                        <div class="article-date">
                            <i class="fa-regular fa-clock"></i>
                            <span class="time-counter" data-date="${blog.date}">
                            </span>
                        </div>
                    </div>
                    <div class="article-title">
                        ${blog.title}
                    </div>
                    <div class="article-body">
                        ${blog.shortDescription}
                    </div>
                    <a href="../blog/article.html?slug=${blog.slug}" 
                    class="read-more">
                        Read Article
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>`;
            articleContainer.innerHTML += articleCard;
        });
        updateArticleTime();
    } catch (error) {
        console.log("Blog Loading Error:", error);
    }
}

//Single Article 
async function loadArticleHero() {
    const blogs = await getBlogs();
    const slug = new URLSearchParams(window.location.search).get("slug");
    const article = blogs.find(blog => blog.slug === slug);
    if (!article) return;
    const category = topicData[article.categorySlug];
    const postDate = new Date(article.date);
    document.querySelector(".article-category img").src = category.icon;
    document.querySelector(".article-category span").textContent = category.title.toUpperCase();
    document.querySelector(".currentCategory").textContent = article.smallTitle;
    document.querySelector("#article-link")?.setAttribute("href", `category.html?topic=${article.categorySlug}`);
    document.querySelector("#article-link").textContent = article.category;
    document.querySelector(".hero-title span").textContent = article.title;
    document.querySelector(".hero-description").textContent = article.shortDescription;
    document.querySelector(".author-meta span").textContent = postDate.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
    document.querySelector(".author-read-time").textContent = article.readTime;
    const articleHeroImage = document.querySelector(".article-hero-image");
    articleHeroImage.style.backgroundImage = `url(${basePath + article.image})`;

    const currentDate = new Date();
    const diffMs = currentDate - postDate;
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let ageText = "";
    if (minutes < 60) {
        ageText = `<span>${minutes}</span> min ago`;
    }
    else if (hours < 24) {
        ageText = `<span>${hours}</span> hour${hours > 1 ? "s" : ""} ago`;
    }
    else {
        ageText = `<span>${days}</span> day${days > 1 ? "s" : ""} ago`;
    }
    document.getElementById("articleAge").innerHTML = "<i class=\"fa-regular fa-clock\"></i>" + ageText;

    document.getElementById("articleIntro").innerHTML = article.intro;
    fetch(article.content).then(res => res.text()).then(html => {
        document.getElementById("article-body").innerHTML = html;
        generateTOC();
    });

    document.title = `${article.title} | Guru and Goodness`;
}

// Article Time Counter
function updateArticleTime() {
    document.querySelectorAll(".time-counter")
        .forEach(item => {
            const postDate = new Date(item.dataset.date);
            const currentDate = new Date();
            const diffMs = currentDate - postDate;
            const minutes = Math.floor(diffMs / (1000 * 60));
            const hours = Math.floor(diffMs / (1000 * 60 * 60));
            const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            if (minutes < 60) {
                item.textContent = `${minutes} min ago`;
            }
            else if (hours < 24) {
                item.textContent = `${hours} hour${hours > 1 ? "s" : ""} ago`;

            }
            else {
                item.textContent = `${days} day${days > 1 ? "s" : ""} ago`;
            }
        });
}
// Article Topic
function loadTopicCards(containerId, excludeTopic = null) {

    const container = document.getElementById(containerId);
    if (!container) return;
    Object.entries(topicData)
        .filter(([key]) => key !== excludeTopic)
        .forEach(([key, data]) => {
            container.innerHTML += `<article class="topic-card">
            <a href="category.html?topic=${key}">
                <div class="topic-image">
                    <img src="${data.smallImage}" 
                    alt="${data.title}">
                </div>
                <div class="topic-icon">
                    <img src="${data.icon}" 
                    alt="${data.title}">
                </div>
                <div class="topic-content">
                    <div class="topic-title">
                        ${data.title}
                    </div>
                    <p>
                        ${data.shortDescription}
                    </p>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </a>
        </article>`;
        });
}

//Table Content
function generateTOC() {
    const content = document.getElementById("article-body");
    const toc = document.getElementById("articleToc");
    if (!content || !toc) return;
    const headings = content.querySelectorAll("h2");
    headings.forEach(heading => {
        let id = heading.id;
        if (!id) {
            id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            heading.id = id;
        }
        toc.innerHTML += `
        <li>
            <a href="#${id}">
            ${heading.textContent}
            </a>
        </li>
        `;
    });
}