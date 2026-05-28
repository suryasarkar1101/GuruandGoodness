async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}
setActiveMenu();
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


loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
loadComponent("mobileMenu", "components/mobile_menu.html");