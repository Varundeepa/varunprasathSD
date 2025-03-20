document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            if (username === "admin" && password === "admin") {
                localStorage.setItem("isAuthenticated", "true");
                window.location.href = "second.html";  // Redirect to movie search
            } else {
                document.getElementById("errorMessage").innerText = "Invalid credentials!";
            }
        });
    }

    // Protect index.html (redirect to login if not authenticated)
    if (window.location.pathname.includes("index.html")) {
        let isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            window.location.href = "index.html";  // Redirect to login
        }
    }
});

