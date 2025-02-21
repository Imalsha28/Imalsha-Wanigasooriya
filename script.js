document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    function scrollToProjects() {
        document.getElementById("projects").scrollIntoView({
            behavior: "smooth"
        });
    }
    