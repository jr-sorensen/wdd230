document.addEventListener('DOMContentLoaded', function () {
        
        let lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');
    
        
        let currentTimestamp = new Date().getTime();
    
        
        let timeDifference = currentTimestamp - (lastVisitTimestamp || currentTimestamp);
    
        
        let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
        
        if (!lastVisitTimestamp) {
            
            displayMessage("Welcome! Let us know if you have any questions.");
        } else if (daysDifference < 1) {
            
            displayMessage("Back so soon! Awesome!");
        } else {
            
            let message = (daysDifference === 1) ?
                `You last visited 1 day ago.` :
                `You last visited ${daysDifference} days ago.`;
    
            displayMessage(message);
        }
    
        
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
    