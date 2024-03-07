// Define baseURL and linksURL
const baseURL = "https://jr-sorensen.github.io/wdd230/";
const linksURL = "https://jr-sorensen.github.io/wdd230/data/links.json";

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

function displayLinks(data) {
    // Assuming you have an existing HTML element with the id "learning-activities"
    const activityLinksElement = document.getElementById("learning-activities");
  
    // Loop through each lesson
    data.lessons.forEach((lesson) => {
      // Create a new list item for the lesson
      const lessonListItem = document.createElement("li");
      lessonListItem.textContent = `Lesson ${lesson.number}:`;
  
      // Create a span to hold the links for better styling
      const linksSpan = document.createElement("span");
  
      // Loop through each activity in the lesson
      lesson.activities.forEach((activity, index) => {
        // Create an anchor element for the link
        const linkAnchor = document.createElement("a");
        linkAnchor.href = baseURL + activity.url;
        linkAnchor.textContent = activity.title;
  
        // Append the link to the links span
        linksSpan.appendChild(linkAnchor);
  
        // Add a separator (|) if it's not the last activity
        if (index < lesson.activities.length - 1) {
          const separator = document.createElement("span");
          separator.textContent = " | ";
          linksSpan.appendChild(separator);
        }
      });
  
      // Append the links span to the lesson list item
      lessonListItem.appendChild(linksSpan);
  
      // Append the lesson list item to the activityLinksElement
      activityLinksElement.appendChild(lessonListItem);
    });
  }
  
  

// Call the getLinks function to fetch and display the links
getLinks();
