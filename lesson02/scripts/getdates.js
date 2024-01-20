document.addEventListener("DOMContentLoaded", function() {

    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedLastModified = lastModified.toLocaleString('en-US', options);

    document.getElementById("lastModified").innerHTML = `Last Modified: ${formattedLastModified}`;
});
