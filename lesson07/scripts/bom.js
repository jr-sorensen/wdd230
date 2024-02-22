
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

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

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const chapterList = document.querySelector('#list');


let chaptersArray = getChapterList() || [];


chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener('click', () => {
    const inputValue = input.value.trim();

    if (inputValue === '') {
                alert('Please enter a chapter before adding.');
        input.focus();
    } else if (!/^[a-zA-Z]+\s\d+$/.test(inputValue)) {
               alert('Please enter the chapter in the format "Book Chapter" (e.g., "Alma 5").');
        input.focus();

    } else { 
        displayList(inputValue);
        chaptersArray.push(inputValue);
        setChapterList();
        input.value = '';
        input.focus();
    }
});
