document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('favchap');
    const addChapterButton = document.querySelector('button');
    const chapterList = document.getElementById('list');

    addChapterButton.addEventListener('click', function () {
        const validFormat = /^[a-zA-Z]+\s\d+$/; 

        if (!validFormat.test(inputElement.value.trim())) {
           
            alert('Please enter the Book of Mormon chapter in the format "Book + Chapter" (e.g., "Alma 5").');
            inputElement.focus();
            return;
        }

        const listItem = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        listItem.textContent = inputElement.value;
        listItem.appendChild(deleteBtn);
        chapterList.appendChild(listItem);

        deleteBtn.addEventListener('click', function () {
            chapterList.removeChild(listItem);
        });

        inputElement.value = '';
        inputElement.focus();
    });
});
