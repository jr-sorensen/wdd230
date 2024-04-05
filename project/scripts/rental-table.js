document.addEventListener("DOMContentLoaded", function() {
    
    fetch('data/rental-info.json')
      .then(response => response.json())
      .then(data => {
        const rentals = data.max_rental_pricing;
  
        
        const tableBody = document.getElementById('rentalTableBody');
  
        
        rentals.forEach(rental => {
          const row = document.createElement('tr');
  
          const reservationCell = document.createElement('td');
          reservationCell.textContent = rental.reservation;
          row.appendChild(reservationCell);
  
          const rentalTypeCell = document.createElement('td');
          rentalTypeCell.textContent = rental.rental_type;
          row.appendChild(rentalTypeCell);
  
          const maxPersonsCell = document.createElement('td');
          maxPersonsCell.textContent = rental.max_persons;
          row.appendChild(maxPersonsCell);
  
          const halfDayPriceCell = document.createElement('td');
          halfDayPriceCell.textContent = rental.half_day.price;
          row.appendChild(halfDayPriceCell);
  
          const fullDayPriceCell = document.createElement('td');
          fullDayPriceCell.textContent = rental.full_day.price;
          row.appendChild(fullDayPriceCell);
  
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  