{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script */}
const notificationsContainer = document.getElementById('notifications');

function createNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <span>${message}</span>
        <span class="close-btn" onclick="dismissNotification(this)">&times;</span>
    `;
    notificationsContainer.appendChild(notification);

    // Automatically remove notification after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function dismissNotification(closeBtn) {
    closeBtn.parentElement.remove();
}

// Example usage: Create notifications
createNotification("We have added new pictures to your favourtite blogs");
createNotification("explore the new blogs especially added for you");
