document.addEventListener('DOMContentLoaded', function () {
    var lastModifiedDate = document.lastModified;
    var modificationDateElement = document.getElementById('modificationDate');
    if (modificationDateElement) {
        modificationDateElement.textContent = 'Page Last Modified: ' + lastModifiedDate;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var formLoadDateTimeField = document.getElementById('formLoadDateTime');
    var submissionTimeSpan = document.getElementById('submissionTime');

    if (formLoadDateTimeField && submissionTimeSpan) {
        formLoadDateTimeField.value = Date.now();

        var submissionTime = new Date().toLocaleString();
        submissionTimeSpan.textContent = submissionTime;
    }
});