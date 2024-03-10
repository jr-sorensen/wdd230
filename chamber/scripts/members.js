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
