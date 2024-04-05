
const baseURL = "https://jr-sorensen.github.io/wdd230/";
const linksURL = "https://jr-sorensen.github.io/wdd230/data/links.json";


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
    
    const activityLinksElement = document.getElementById("learning-activities");
  
    
    data.lessons.forEach((lesson) => {
      
      const lessonListItem = document.createElement("li");
      lessonListItem.textContent = `Lesson ${lesson.number}:`;
      const linksSpan = document.createElement("span");
  
      
      lesson.activities.forEach((activity, index) => {
        
        const linkAnchor = document.createElement("a");
        linkAnchor.href = baseURL + activity.url;
        linkAnchor.textContent = activity.title;
  
        
        linksSpan.appendChild(linkAnchor);
  
        if (index < lesson.activities.length - 1) {
          const separator = document.createElement("span");
          separator.textContent = " | ";
          linksSpan.appendChild(separator);
        }
  });
      
      lessonListItem.appendChild(linksSpan);
      activityLinksElement.appendChild(lessonListItem);
    });
  }
  
  


getLinks();
