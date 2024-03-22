document.addEventListener("DOMContentLoaded", function () {
  const membersDiv = document.querySelector(".chamber-members");
  const gridButton = document.getElementById("grid");
  const listButton = document.getElementById("list");

  fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
      function renderMembers(viewType) {
        const membersHTML = data.companies.map(company => {
          const commonContent = `
            <img src="${company.image}" alt="${company.name}">
            <h2>${company.name}</h2>
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
            <p><strong>Membership Level:</strong> ${company.membership_level}</p>
            <p>${company.additional_info}</p>
          `
          
          const listContent = `
            <h2>${company.name}</h2>
            <p><strong></strong> ${company.phone}</p>
            <p><strong></strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
          `;

          if (viewType === "grid") {
            return `<div class="member">${commonContent}</div>`;
          } else {
            return `<div class="list-member">${listContent}</div>`;
          }
        }).join("");

        membersDiv.innerHTML = membersHTML;
      }

      renderMembers("grid");
      membersDiv.classList.add("grid-view");

      function toggleView(event) {
        const viewType = event.target.id;
        renderMembers(viewType);
        membersDiv.className = `chamber-members ${viewType}-view`;
      }

      gridButton.addEventListener("click", toggleView);
      listButton.addEventListener("click", toggleView);
    })
    .catch(error => console.error("Error fetching JSON:", error));
});
// Load JSON data
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    // Filter companies with silver or gold status
    const silverGoldCompanies = data.companies.filter(company => company.membership_level === "Silver" || company.membership_level === "Gold");

    // Shuffle the filtered companies randomly
    const shuffledCompanies = shuffleArray(silverGoldCompanies);

    // Get the spotlight section
    const spotlightSection = document.querySelector('.spotlights-section');

    // Remove existing spotlight cards
    spotlightSection.innerHTML = '';

    // Iterate through the first two or three shuffled companies
    const numCompaniesToShow = Math.min(shuffledCompanies.length, Math.floor(Math.random() * 2) + 2);
    for (let i = 0; i < numCompaniesToShow; i++) {
      const company = shuffledCompanies[i];

      // Create elements
      const spotlightCard = document.createElement('div');
      spotlightCard.classList.add('spotlight-card');

      const companyName = document.createElement('h3');
      const companyLink = document.createElement('a');
      companyLink.href = company.website;
      companyLink.textContent = company.name;
      companyName.appendChild(companyLink);

      const companyDescription = document.createElement('p');
      companyDescription.textContent = company.additional_info;

      const companyImage = document.createElement('img');
      companyImage.src = company.image;
      companyImage.alt = company.name + ' Image';
      companyImage.style.width = '50%';

      // Contact information
      const contactInfo = document.createElement('p');
      contactInfo.innerHTML = `<strong>Address:</strong> ${company.address}<br><strong>Phone:</strong> ${company.phone}<br><strong>Website:</strong> <a href="${company.website}">${company.website}</a>`;

      // Append elements to spotlight card
      spotlightCard.appendChild(companyName);
      spotlightCard.appendChild(companyDescription);
      spotlightCard.appendChild(companyImage);
      spotlightCard.appendChild(contactInfo);

      // Append spotlight card to spotlight section
      spotlightSection.appendChild(spotlightCard);
    }
  })
  .catch(error => console.error('Error fetching JSON:', error));

// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
