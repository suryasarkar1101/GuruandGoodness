const basePath = window.location.pathname.includes("/GuruandGoodness/") ? "/GuruandGoodness/" : "/";
let productsData = [];
let product;

async function getProducts() {
    if (productsData.length > 0) {
        return productsData;
    }
    const response = await fetch(basePath + "data/allProduct.json");
    productsData = await response.json();
    return productsData;
}

async function loadProducts(containerId, filter = null, limit = null, fullCont = true) {
    try {
        let newproductsData = await getProducts();
        if (filter) {
            newproductsData = productsData.filter(filter);
        }
        if (limit) {
            newproductsData = productsData.slice(0, limit);
        }
        const container = document.getElementById(containerId);
        if (!container) return;
        renderProducts(containerId, newproductsData, fullCont);
    }
    catch (error) {
        console.log("Product Loading Error:", error);
    }
}

function renderProducts(containerId, products, fullCont = true) {
    const container = document.getElementById(containerId);
    products.forEach(product => {
        let cardClass = "";
        if (product.badge === "NEW ARRIVALS") {
            cardClass = "new-card";
        }
        else if (product.badge === "BEST SELLER") {
            cardClass = "bestseller-card";
        }
        else if (product.badge === "POPULAR") {
            cardClass = "popular-card";
        }

        const card = `
            <div class="product-card ${cardClass}">
               ${product.badge ? `<div class="badge">${product.badge}</div>` : ``}
                <div class="product-image">
                    <img src="${basePath + product.images[0]}" alt="${product.name}">
                </div>
                <a href="${basePath}product/?slug=${product.slug}">
                    <div class="product-title">
                        ${product.name}
                    </div>
                    <div class="product-desc">
                        ${product.shortDescription}
                    </div>
                    <div class="product-price">
                        <span class="sale-price">
                            ${product.price}
                        </span>
                        <span class="real-price">
                            ${product.oldPrice}
                        </span>
                    </div>
                    ${fullCont ? `<div class="product-rating">
                        ${generateStars(product.rating)}
                    </div>`: ``}                    
                </a>
                ${fullCont ? `<a href="#" class="buy-btn">
                    <i class="fa-brands fa-whatsapp"></i>
                    Chat to Buy
                </a>`: ``}                
            </div>
            `;
        container.innerHTML += card;
    });
}

function generateStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += `<i class="fa-solid fa-star"></i>`;
        }
        else {
            stars += `<i class="fa-regular fa-star"></i>`;
        }
    }
    return stars;
}

async function loadProduct() {
    let products = await getProducts();
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    product = products.find(item => item.slug === slug);
    if (!product) return;
    document.title = product.name + " | Guru and Goodness";
    document.getElementById("gg-product-name").innerHTML = `${product.name} ${product.badge ? `<span class="gg-product-badge">${product.badge}</span>` : ``}`;
    document.getElementById("gg-price").textContent = product.price;
    document.getElementById("gg-old-price").textContent = product.oldPrice;
    document.getElementById("gg-discount").textContent = product.discount;
    document.getElementById("gg-description").textContent = product.description;
    document.getElementById("gg-main-image").src = basePath + product.images[0];
    document.querySelector('.gg-significance-title').textContent = product.significanceTitle;
    document.querySelector('.gg-significance-description').textContent = product.significanceDescription;
    const tagsContainer = document.getElementById("gg-significance-tags");
    tagsContainer.innerHTML = "";
    product.tags.forEach(tag => { tagsContainer.innerHTML += `<span class="gg-significance-tag">${tag}</span> `; });
    const specContainer = document.getElementById('gg-specification-table');
    specContainer.innerHTML = `
<div class="gg-specification-grid">${product.specifications.map(item => `<div class="gg-spec-item"><div class="gg-spec-label">${item.label}</div><div class="gg-spec-value">${item.value}</div></div>`).join("")}
</div>`;
    const thumbs = document.getElementById("gg-thumbnails");
    thumbs.innerHTML = "";
    product.images.forEach((img, index) => {
        const div = document.createElement("div");
        div.className = "gg-product-thumb";
        if (index === 0)
            div.classList.add("active");
        div.innerHTML = `<img src="${basePath + img}">`;
        div.onclick = () => {
            document.querySelectorAll('.gg-product-thumb').forEach(el => el.classList.remove('active'));
            div.classList.add("active");
            document.getElementById('gg-main-image').src = basePath + img;
        };
        thumbs.appendChild(div);
    });

    document.getElementById("gg-category").textContent = product.category;
    const rating = Number(product.rating);
    document.getElementById("gg-rating").textContent = `(${rating})`;
    document.getElementById("gg-reviews").textContent = product.reviews;
    document.getElementById("gg-stars").innerHTML = generateStars(Math.floor(rating));
    document.querySelectorAll("#gg-benefits span").forEach((item, index) => { item.textContent = product.quickBenefits[index]; });
    document.querySelectorAll("#gg-benefits-grid .gg-benefit-card").forEach((card, index) => {
        card.querySelector("h3").textContent = product.benefitCards[index].title;
        card.querySelector("p").textContent = product.benefitCards[index].description;
    });
    document.getElementById("gg-founder-note").textContent = product.founderNote;

    loadReviews("product", 3, product.id);
    loadProducts("releatedProducts", item => item.categorySlug === product.categorySlug && item.slug !== product.slug, 5, false);
    updateWishlist();
}

function updateWishlist() {
    let isWishlisted = wishlist.includes(product.id);
    if (isWishlisted) {
        wishlistIcon.classList.replace("far", "fas");
        wishlistBtn.classList.add("active");
    } else {
        wishlistIcon.classList.replace("fas", "far");
        wishlistBtn.classList.remove("active");
    }
}