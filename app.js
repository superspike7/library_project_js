let myLibrary = [];

const addBtn = document.querySelector('#book-btn');
const bookForm = document.querySelector('#book-form'); 
const formBtn = document.querySelector('#form-button');

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
}

function clearForm() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
}

function showBooksFromLibrary() {
  
}

const hideShow = () => {
  bookForm.classList.toggle("hidden")
}



addBtn.addEventListener('click', hideShow);
formBtn.addEventListener('click', addBookToLibrary);
