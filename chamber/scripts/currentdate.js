// document.addEventListener("DOMContentLoaded", function() {

//     const currentDate = new Date();
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     const formattedCurrentDate = currentDate.toLocaleDateString('en-US', options);

//     document.getElementById("currentDate").innerHTML = `${formattedCurrentDate} and Beyond`;


//     const lastModified = new Date(document.lastModified);
//     const formattedLastModified = lastModified.toLocaleString('en-US', options);

//     document.getElementById("lastModified").innerHTML = `Last Modified: ${formattedLastModified}`;
// });

document.addEventListener('DOMContentLoaded', function () {
    
    var calendarBody = document.querySelector('.stats .calendar tbody');
    var monthHeader = document.querySelector('.stats h3');

   
    function generateCalendar() {
        
        calendarBody.innerHTML = '';
        var currentDate = new Date();

       
        currentDate.setDate(1);
        var startDay = currentDate.getDay();

        
        var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        
        monthHeader.textContent = currentDate.toLocaleString('default', { month: 'long' }) + ' ' + currentDate.getFullYear();

        
        var row, cell;

        
        var headerRow = document.createElement('tr');
        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

        for (var i = 0; i < 7; i++) {
            cell = document.createElement('th');
            cell.textContent = daysOfWeek[i];
            headerRow.appendChild(cell);
        }

        calendarBody.appendChild(headerRow);

        
        for (var i = 0; i < 6; i++) {
            row = document.createElement('tr');

            for (var j = 0; j < 7; j++) {
                cell = document.createElement('td');

                
                var dayNumber = i * 7 + j - startDay + 2;

                
                if (dayNumber < 1 || dayNumber > lastDay) {
                    cell.textContent = '';
                } else {
                    cell.textContent = dayNumber;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

   
    generateCalendar();
});


