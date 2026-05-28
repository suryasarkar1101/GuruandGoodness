async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
    if (id === "header") {
        setActiveMenu();
    }
}

function setActiveMenu() {

    let currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        let linkPath = new URL(link.href).pathname;
        if (
            currentPath === linkPath ||
            currentPath.startsWith(linkPath)
        ) {
            link.classList.add("active");
        }
    });
}


loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");