document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("goBackBtn").addEventListener("click", function () {
        window.history.back(); // ✅ Works without inline JS
    });
});
