
    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        // Your backend API endpoint
        const backendUrl = "https://backend-redf.onrender.com/login"; 

        fetch(backendUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect to dashboard on success
            } else {
                alert("Login failed. Redirecting...");
                window.location.href = "error.html"; // Redirect to error page on failure
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Redirecting...");
            window.location.href = "error.html"; // Redirect to error page on failure
        });
    }
