document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll Functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fade-In Sections on Scroll
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
        threshold: 0.1, // As soon as 10% of the element is visible, it will appear
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Scroll-To-Top Button
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    const rootElement = document.documentElement;

    function handleScroll() {
        const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.1) {
            scrollToTopBtn.classList.add("showBtn");
        } else {
            scrollToTopBtn.classList.remove("showBtn");
        }
    }

    scrollToTopBtn.addEventListener("click", () => {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    document.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("showNav");
    });
});