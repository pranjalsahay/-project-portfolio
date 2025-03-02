document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const backToTopButton = document.getElementById("backToTop");
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");
    const liveClock = document.getElementById("liveClock");

    // Dark mode toggle
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Show/hide back to top button
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll back to top
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Form validation
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formFeedback.textContent = "All fields are required.";
            formFeedback.style.color = "red";
        } else {
            formedback.textContent = "Message sent successfully!";
            formFeedback.style.color = "green";
            contactForm.reset();
        }
    });

    // Live clock
    function updateClock() {
        const now = new Date();
        liveClock.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();
});
