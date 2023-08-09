function submitRating() {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        const ratingValue = selectedRating.value;
        alert('Thank you for rating! You rated: ' + ratingValue + ' stars.');
    } else {
        alert('Please select a rating before submitting.');
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const accountInfo = document.getElementById("account-info");

    // Check if user information is available in local storage
    const userInfo = JSON.parse(localStorage.getItem("user_info"));
    if (userInfo && userInfo.username) {
        const username = userInfo.username;

        // Display the account information with animation
        const greeting = document.createElement("h2");
        greeting.textContent = "Hello, " + username + "! Welcome to your beautiful account page.";
        accountInfo.appendChild(greeting);

        // Apply animation class after a brief delay
        setTimeout(function () {
            accountInfo.classList.add("fade-in");
        }, 300);
    } else {
        // If user information is not available, show a message
        const loginMessage = document.createElement("p");
        loginMessage.textContent = "Please log in to view your account.";
        accountInfo.appendChild(loginMessage);

        // You can also add a button for redirection to the login page
        const loginButton = document.createElement("button");
        loginButton.textContent = "Log In";
        loginButton.addEventListener("click", function () {
            // Redirect to login page
            window.location.href = "login.html";
        });
        accountInfo.appendChild(loginButton);
    }
});