document.addEventListener("DOMContentLoaded", function () {
  // Get the "Chamber Members" div
  const membersDiv = document.querySelector(".chamber-members");

  // Fetch the JSON data from chamber/data/members.json
  fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
      // Create HTML content for the members
      const membersHTML = data.companies.map(company => `
        <div class="member">
          <img src="${company.image}" alt="${company.name}">
          <h2>${company.name}</h2>
          <p><strong>Address:</strong> ${company.address}</p>
          <p><strong>Phone:</strong> ${company.phone}</p>
          <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
          <p><strong>Membership Level:</strong> ${company.membership_level}</p>
          <p>${company.additional_info}</p>
        </div>
      `).join("");

      // Append the HTML content to the "Chamber Members" div
      membersDiv.innerHTML = membersHTML;
    })
    .catch(error => console.error("Error fetching JSON:", error));
});
