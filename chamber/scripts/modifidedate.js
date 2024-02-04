document.addEventListener('DOMContentLoaded', function () {
    // Get the last modified date of the current page
    var lastModifiedDate = document.lastModified;

    // Display the last modified date in the specified element
    var modificationDateElement = document.getElementById('modificationDate');
    if (modificationDateElement) {
        modificationDateElement.textContent = 'Page Last Modified: ' + lastModifiedDate;
    }
});