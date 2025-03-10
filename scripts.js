document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("navbar-toggle");
    const navbarMenu = document.getElementById("navbar-menu");
    
    toggleButton.addEventListener("click", () => {
        console.log("Toggle button clicked"); // Log statement to confirm button click
        navbarMenu.classList.toggle("active");
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            navbarMenu.classList.remove("active"); // Hide the menu after clicking
        });
    });

    // Simple form validation
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        this.reset();
    });

    // Blog post hover effect
    document.querySelectorAll(".blog-post").forEach(post => {
        post.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s";
        });
        post.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Testimonial highlight effect
    document.querySelectorAll(".testimonial").forEach(testimonial => {
        testimonial.addEventListener("click", function() {
            this.style.backgroundColor = "#f4b400";
            this.style.color = "white";
            setTimeout(() => {
                this.style.backgroundColor = "#f8f8f8";
                this.style.color = "black";
            }, 2000);
        });
    });
});
