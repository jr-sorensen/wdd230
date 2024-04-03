const lastModified = new Date(document.lastModified);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
const formattedDate = lastModified.toLocaleDateString('en-US', options);

document.getElementById('lastModified').textContent += formattedDate;