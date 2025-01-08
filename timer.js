let timerInterval;

function startTimer() {
let duration = parseInt(document.getElementById("duration").value);
updateCountdown(duration);
timerInterval = setInterval(() => {
    duration--;
    updateCountdown(duration);
    if (duration <= 0) {
    clearInterval(timerInterval);
    alert("Timer finished!");
    }
}, 1000);
}

function updateCountdown(seconds) {
document.getElementById("countdown").textContent = "Time Remaining: " + seconds;
}

startTimer(timerInterval)

function showRepeatedNotification(message, interval) {
    let notificationId = null; 
  
    function displayNotification() {
      if (Notification.permission === "granted") {
        if (notificationId !== null) {
          // Close the previous notification before showing a new one
          notification = new Notification(message);
        } else {
          notificationId = new Notification(message).onclick = () => {
            clearInterval(intervalId); // Stop the notifications when clicked
          };
        }
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            displayNotification();
          }
        });
      }
    }
  
    // Check if notifications are supported
    if ("Notification" in window) {
      displayNotification();
      const intervalId = setInterval(displayNotification, interval);
    } else {
      console.error("Notifications are not supported in this browser.");
    }
  }
  
  // Example usage:
  showRepeatedNotification("Important reminder!", 5000); // Display every 5 seconds