let pageVisitCounter = localStorage.getItem('pageVisitCounter') || 0;

        pageVisitCounter++;

        localStorage.setItem('pageVisitCounter', pageVisitCounter);

        document.getElementById('visitCounter').innerText = pageVisitCounter;

