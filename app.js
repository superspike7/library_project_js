let myLibrary = [];

const addBtn = document.querySelector('#book-btn');
const bookForm = document.querySelector('#book-form'); 
const formBtn = document.querySelector('#form-button');
const bookShelf = document.querySelector('#bookshelf');

let bookTemplate = `
    <div id="book" class="bg-blue-100 rounded shadow-lg h-40 text-center p-1 flex flex-col justify-around">
      <h1 class="text-2xl font-bold">Title</h1>
      <p class="text-md">Author Author</p>
      <p class="text-md">Pages: 69</p>
    </div>
`;

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
  bookShelf.insertAdjacentElement('beforeend', '<div>hello</div>');
}


function booksFormat() {

}

const hideShow = () => {
  bookForm.classList.toggle("hidden")
}



addBtn.addEventListener('click', hideShow);
formBtn.addEventListener('click', addBookToLibrary);
