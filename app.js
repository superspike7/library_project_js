let myLibrary = [];

const addBtn = document.querySelector("#book-btn");
const bookForm = document.querySelector("#book-form");
const formBtn = document.querySelector("#form-button");
const bookShelf = document.querySelector("#bookshelf");
const readBtn = document.querySelector("#read-btn");

class Book {
  static bookId = 0;

  constructor(title, author, pages) {
    this.id = Book.bookId;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    Book.bookId++;
  }
}

function addBookToLibrary() {
  var inputs = [...document.querySelectorAll("input")];
  if (inputs.every((input) => input.validity.valid)) {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;

    let book = new Book(title, author, pages);

    myLibrary.push(book);
    clearForm();
    bookForm.classList.toggle("hidden");
    showBooksFromLibrary();
    document.querySelector(".error").textContent = "";
  } else {
    document.querySelector(".error").textContent =
      "please fill all the inputs to add book";
  }
}

function clearForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
}

function showBooksFromLibrary() {
  // clear books that is not in the myLibrary Array
  bookShelf.innerHTML = "";

  myLibrary.forEach((book) => {
    let bookTemplate = `<div id="book" class="relative bg-blue-100 rounded shadow-lg h-60 text-center p-1 flex flex-col justify-around">
        <span class="hidden" id="book-id">${book.id}</span>
        <h1 class="text-2xl font-bold mt-5">${book.title}</h1>
        <p class="text-md">${book.author}</p>
        <p class="text-md">Pages: ${book.pages}</p>
        <div class=" ${
          book.read ? "bg-blue-500" : "bg-red-500"
        } h-6 w-20 text-white rounded-lg mx-auto cursor-pointer" id="read-btn">read</div>
        <button class="absolute left-1 top-1 bg-red-500 rounded-md text-white block" id="remove-btn" >remove</button>
        <span class="hidden" id="read">false</span>
      </div>`;

    bookShelf.insertAdjacentHTML("beforeend", bookTemplate);
  });
}

// for dynamic elements event listener
const removeBookFromLibrary = (e) => {
  if (e.target && e.target.matches("button#remove-btn")) {
    let targetBookId = e.target.parentNode.firstElementChild.textContent;

    myLibrary = myLibrary.filter(({ id }) => id != targetBookId);

    showBooksFromLibrary();
    console.log(myLibrary);
  }
};

const toggleRead = (e) => {
  if (e.target && e.target.matches("div#read-btn")) {
    let targetBookId = e.target.parentNode.firstElementChild.textContent;

    // directly change the myLibrary Array
    myLibrary[`${Number(targetBookId)}`].read = myLibrary[
      `${Number(targetBookId)}`
    ].read
      ? false
      : true;

    showBooksFromLibrary();
  }
};

const hideShow = () => {
  bookForm.classList.toggle("hidden");
};

addBtn.addEventListener("click", hideShow);
formBtn.addEventListener("click", addBookToLibrary);

bookShelf.addEventListener("click", removeBookFromLibrary);
bookShelf.addEventListener("click", toggleRead);

// seed book
let test = new Book("Example", "John Doe", 1);
myLibrary.push(test);
showBooksFromLibrary();
