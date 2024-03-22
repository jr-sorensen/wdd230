document.addEventListener('DOMContentLoaded', function () {
        
    let lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');
    console.log('Last Visit Timestamp:', lastVisitTimestamp);
    
    let currentTimestamp = new Date().getTime();
    console.log('Current Timestamp:', currentTimestamp);

    let timeDifference = currentTimestamp - (lastVisitTimestamp || currentTimestamp);
    console.log('Time Difference:', timeDifference);
    
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    console.log('Days Difference:', daysDifference);
    
    let message;
    if (!lastVisitTimestamp) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        message = (daysDifference === 0) ?
            "You're back! Welcome back!" :
            (daysDifference === 1) ?
            `You last visited 1 day ago.` :
            `You last visited ${daysDifference} days ago.`;
    }
    displayMessage(message);

    localStorage.setItem('lastVisitTimestamp', currentTimestamp);

    let pageVisitCounter = localStorage.getItem('pageVisitCounter') || 0;
    pageVisitCounter++;
    localStorage.setItem('pageVisitCounter', pageVisitCounter);
    document.getElementById('visitCounter').innerText = pageVisitCounter;
});

function displayMessage(message) {
    let messageContainer = document.querySelector('.sidebar .message');
    if (messageContainer) {
        messageContainer.innerText = message;
    }
}
