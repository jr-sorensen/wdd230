document.addEventListener("DOMContentLoaded", function() {
    
    const copyrightYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = `&copy; ${copyrightYear} Jessica Sorensen, California`;

    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedLastModified = lastModified.toLocaleString('en-US', options);

    document.getElementById("lastModified").innerHTML = `Last Modified: ${formattedLastModified}`;
});
