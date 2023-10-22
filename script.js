document.addEventListener("DOMContentLoaded", function () {
    // Added animation to the submit button
    const submitButton = document.querySelector("input[type='submit']");
    submitButton.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "#0056b3";
        this.style.transform = "scale(1.1)";
    });
    submitButton.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "#007BFF";
        this.style.transform = "scale(1)";
    });
});
