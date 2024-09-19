document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simple client-side validation
        if (username === "yourusername" && password === "yourpassword") {
            // Successful login, you can redirect or perform other actions here.
            errorMessage.textContent = "Login successful!";
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    });
});