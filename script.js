document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const sendButton = document.querySelector("#send-btn");

    // Navigation Section Switching
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            alert(`Navigating to ${link.textContent}...`);
        });
    });

    // Chat Button Action (Example Functionality)
    if (sendButton) {
        sendButton.addEventListener("click", () => {
            alert("Chat message sent!");
        });
    }
});
