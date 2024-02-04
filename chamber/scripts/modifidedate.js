document.addEventListener('DOMContentLoaded', function () {
    
    var lastModifiedDate = document.lastModified;

    
    var modificationDateElement = document.getElementById('modificationDate');
    if (modificationDateElement) {
        modificationDateElement.textContent = 'Page Last Modified: ' + lastModifiedDate;
    }
});