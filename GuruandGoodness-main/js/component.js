async function loadComponent(id, file) {
    const response = await fetch(file);
    let html = await response.text();
    html = html.replaceAll(
        "{{BASE_PATH}}",
        BASE_PATH || ""
    );
    document.getElementById(id).innerHTML = html;
    if (id === "header") {
        setActiveMenu();
        initMobileMenu();
    }
    if (id === "footer") {
        initFooter()
    }
}
function setActiveMenu() {
    let currentPath = window.location.pathname;
    if (currentPath.endsWith("index.html")) {
        currentPath = currentPath.replace("index.html", "");
    }
    // Desktop Menu
    const desktopLinks = document.querySelectorAll(".nav-menu a");
    // Mobile Menu
    const mobileLinks = document.querySelectorAll(".mobile-menu-link");
    const menus = [
        { links: desktopLinks, activeClass: "active" },
        { links: mobileLinks, activeClass: "active-link" }
    ];
    menus.forEach(menu => {
        // We convert the collection to a true array using [...]
        [...menu.links].forEach(link => {
            let linkPath = new URL(link.href).pathname;
            if (linkPath.endsWith("index.html")) {
                linkPath = linkPath.replace("index.html", "");
            }
            if (
                currentPath === linkPath ||
                (linkPath !== "/" && currentPath.startsWith(linkPath))
            ) {
                link.classList.add("active", menu.activeClass);
            }
        });
    });
}
function initMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("show");

    });
}
function initFooter() {
    const accordionItems = document.querySelectorAll(
        ".footer-accordion-item"
    );
    accordionItems.forEach((item) => {
        const header = item.querySelector(
            ".footer-accordion-header"
        );
        if (!header) return;
        header.addEventListener("click", () => {
            accordionItems.forEach((otherItem) => {

                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }

            });
            item.classList.toggle("active");
        });
    });
}

loadComponent("mobileMenu", `${BASE_PATH}components/mobile_menu.html`);
loadComponent("header", `${BASE_PATH}components/header.html`);
loadComponent("footer", `${BASE_PATH}components/footer.html`);