
    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        fetch("https://backend-redf.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect to a success page
            } else {
                alert("Login failed! Redirecting...");
                window.location.href = "error.html"; // Redirect to an error page
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Redirecting...");
            window.location.href = "error.html";
        });
    }
