document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("mobile-nav-links");
    const links = document.querySelectorAll(".mobile-nav-links a");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    links.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});
