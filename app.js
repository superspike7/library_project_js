let myLibrary = [];

const addBtn = document.querySelector('#book-btn');
const bookForm = document.querySelector('#book-form'); 
const formBtn = document.querySelector('#form-button');
const bookShelf = document.querySelector('#bookshelf');


function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = false
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let book = new Book(title, author, pages);

  myLibrary.push(book);
  clearForm();
  showBooksFromLibrary();
}

function clearForm() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
}

function showBooksFromLibrary() {
  // clear books that is not in the myLibrary Array
  bookShelf.innerHTML = '';
  
  myLibrary.forEach((book) => {
    
    let bookTemplate = `<div id="book" class="relative bg-blue-100 rounded shadow-lg h-40 text-center p-1 flex flex-col justify-around">
        <h1 class="text-2xl font-bold">${book.title}</h1>
        <p class="text-md">${book.author}</p>
        <p class="text-md">Pages: ${book.pages}</p>
        <button class="absolute left-1 top-1 bg-red-500 rounded-md text-white block" id="remove-btn" >remove</button>
      </div>`;

    bookShelf.insertAdjacentHTML('beforeend', bookTemplate);
  });
}


const removeBookFromLibrary = e => {
  if(e.target && e.target.matches("button#remove-btn")) {
    let bookTitle = e.target.parentNode.firstElementChild.textContent;

    myLibrary = myLibrary.filter( ({ title }) => title !== bookTitle);

    showBooksFromLibrary();
    console.log(myLibrary);
  }
};


const hideShow = () => {
  bookForm.classList.toggle("hidden")
}



addBtn.addEventListener('click', hideShow);
formBtn.addEventListener('click', addBookToLibrary);
bookShelf.addEventListener('click', removeBookFromLibrary);

// seed book

let test = new Book('Example', 'John Doe', 1);
myLibrary.push(test);