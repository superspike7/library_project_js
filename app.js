let myLibrary = [];

const addBtn = document.querySelector('#book-btn');
const bookForm = document.querySelector('#book-form'); 

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = false
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function showBooksFromLibrary() {
  
}

const hideShow = () => {
  bookForm.classList.toggle("hidden")
}



addBtn.addEventListener('click', hideShow);
