document.addEventListener("DOMContentLoaded", function() {

    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedCurrentDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById("currentDate").innerHTML = `${formattedCurrentDate} and Beyond`;


    const lastModified = new Date(document.lastModified);
    const formattedLastModified = lastModified.toLocaleString('en-US', options);

    document.getElementById("lastModified").innerHTML = `Last Modified: ${formattedLastModified}`;
});