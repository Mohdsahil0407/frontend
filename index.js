
    async function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        console.log("Logging in with:", username, password); // Debugging log

        const response = await fetch("https://backend-redf.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        console.log("Response from backend:", data); // Log response from backend

        alert(data.message);

        if (response.status === 200) {
            window.location.href = "success.html"; // Redirect on success
        } else {
            window.location.href = "error.html"; // Redirect on failure
        }
    }

