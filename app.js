document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggleButton.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";

    
    localStorage.setItem("darkMode", document.body.classList.contains("light-mode") ? "light" : "dark");
});


if (localStorage.getItem("darkMode") === "light") {
    document.body.classList.add("light-mode");
    toggleButton.textContent = "🌙";
}


const text = "Web Developer | Designer | Freelancer";
let index = 0;
function typeEffect() {
    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
        typingElement.textContent = text.substring(0, index++);
        if (index <= text.length) setTimeout(typeEffect, 150);
    }
}
typeEffect();


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name && email.match(emailPattern) && message) {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";

        
        document.getElementById("contactForm").reset();
    } else {
        formMessage.textContent = "Please fill all fields correctly!";
        formMessage.style.color = "red";
    }
});


const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆️";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


window.addEventListener("error", (e) => {
    console.warn("Caught an error:", e.message);
});
