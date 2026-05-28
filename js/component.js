async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
    if (id === "header") {
        setActiveMenu();
        initMobileMenu();
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
    [...desktopLinks, ...mobileLinks].forEach(link => {
        let linkPath = new URL(link.href).pathname;
        if (linkPath.endsWith("index.html")) {
            linkPath = linkPath.replace("index.html", "");
        }
        if (
            currentPath === linkPath ||
            currentPath.startsWith(linkPath)
        ) {

            link.classList.add("active");
            link.classList.add("active-link");

        }
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

loadComponent("mobileMenu", "components/mobile_menu.html");
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");