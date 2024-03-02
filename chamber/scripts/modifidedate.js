document.addEventListener('DOMContentLoaded', function () {
    // Handle modification date in the first HTML
    var modificationDateElement = document.getElementById('lastModified');
    if (modificationDateElement) {
        var lastModifiedDate = document.lastModified;
        modificationDateElement.textContent = 'Modified Date: ' + lastModifiedDate;
    }

    var formLoadDateTimeField = document.getElementById('formLoadDateTime');

    if (formLoadDateTimeField) {
        formLoadDateTimeField.value = Date.now();
    }
});