// Define baseURL and linksURL
const baseURL = "https://jr-sorensen.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

// Asynchronous function to get links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Error fetching links:", error);
  }
}

// Function to display links
function displayLinks(weeks) {
  // Assuming you have an existing HTML element with the id "activity-links"
  const activityLinksElement = document.getElementById("learning-activities");

  // Loop through each week
  weeks.forEach((week) => {
    // Create a new list item for the week
    const weekListItem = document.createElement("li");
    weekListItem.textContent = `Week ${week.week}:`;

    // Create an unordered list for the links
    const linksList = document.createElement("ul");

    // Loop through each link in the week
    week.links.forEach((link) => {
      // Create a list item for each link
      const linkListItem = document.createElement("li");
      
      // Create an anchor element for the link
      const linkAnchor = document.createElement("a");
      linkAnchor.href = baseURL + link.url;
      linkAnchor.textContent = link.title;

      // Append the link to the list item
      linkListItem.appendChild(linkAnchor);

      // Append the list item to the links list
      linksList.appendChild(linkListItem);
    });

    // Append the links list to the week list item
    weekListItem.appendChild(linksList);

    // Append the week list item to the activityLinksElement
    activityLinksElement.appendChild(weekListItem);
  });
}

// Call the getLinks function to fetch and display the links
getLinks();
