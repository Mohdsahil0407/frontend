
    async function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const response = await fetch("https://backend-redf.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Login failed. Please check your credentials.");
        }
    }

