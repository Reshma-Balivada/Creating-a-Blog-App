document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = loginForm.Username.value;

        const userInfo = {
            username: username,
            // Add more fields as needed
        };

        localStorage.setItem("user_info", JSON.stringify(userInfo));

        window.location.href = "homepage.html";
    });
});
