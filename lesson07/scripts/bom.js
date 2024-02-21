// Function to get the chapter list from localStorage or return an empty array
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

// Function to set the chapter list in localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to display a chapter in the list
function displayList(item) {
    const listItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    listItem.textContent = item;
    listItem.appendChild(deleteBtn);
    chapterList.appendChild(listItem);

    deleteBtn.addEventListener('click', function () {
        chapterList.removeChild(listItem);
        deleteChapter(item);
        input.focus();
    });
}

// Function to delete a chapter from the array and update localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const chapterList = document.querySelector('#list');

// Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList
// Add a compound OR condition to assign it an empty array in case this is the user's first visit or if the localStorage item is missing
let chaptersArray = getChapterList() || [];

// Populate the displayed list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Update the button click event listener
button.addEventListener('click', () => {
    const inputValue = input.value.trim();

    if (inputValue === '') {
        // Display error message for empty input
        alert('Please enter a chapter before adding.');
        input.focus();
    } else if (!/^[a-zA-Z]+\s\d+$/.test(inputValue)) {
        // Display error message for incorrect format
        alert('Please enter the chapter in the format "Book Chapter" (e.g., "Alma 5").');
        input.focus();
    } else {
        // If the input is valid, proceed with adding the chapter
        displayList(inputValue);
        chaptersArray.push(inputValue);
        setChapterList();
        input.value = '';
        input.focus();
    }
});
