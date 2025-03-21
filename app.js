document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        const href = link.getAttribute('href');

        // If it's a section link (e.g., #about), smooth scroll
        if (href.startsWith('#')) {
            event.preventDefault();  
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // If it's a different page (e.g., about.html), navigate normally
        else if (href.endsWith('.html')) {
            window.location.href = href;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});