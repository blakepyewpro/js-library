const library = [];
const displayArea = document.querySelector("main");
const dialog = document.querySelector("dialog");

const addBookButton = document.querySelector("button#create");
addBookButton.addEventListener("click", () => dialog.showModal());

const titleInput = document.querySelector("#title");
const descInput = document.querySelector("#description");

const modalConfirmBtn = document.querySelector ('button[type="submit"]');
modalConfirmBtn.addEventListener ("click", () => {
  if (titleInput.value.length >= 1 && descInput.value.length >= 1) {
    addBookToLibrary(titleInput.value, descInput.value);
    titleInput.value = "";
    descInput.value = "";
  } else {
    console.log("Attempted to add book without title or description.")
  }
});

const modalCancelBtn = document.querySelector('button[type="reset"]');
modalCancelBtn.addEventListener("click", () => dialog.close());

const deleteAllButton = document.querySelector("button#delete-all");
deleteAllButton.addEventListener("click", () => deleteLibrary());

class Book {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.id = crypto.randomUUID();
  }

  addToDisplayArea() {
    const book = document.createElement("div");
    book.setAttribute("class", "book")
    book.dataset.id = this.id;
    book.dataset.status = "unread";

    const text = document.createElement("div");
    text.setAttribute("class", "book-text");
    book.appendChild(text);

    const title = document.createElement("span");
    title.setAttribute("class", "title");
    title.textContent = this.title;
    text.appendChild(title);

    const status = document.createElement("span");
    status.setAttribute("class", "status");
    status.textContent = "Unread";
    text.appendChild(status);

    const description = document.createElement("span");
    description.setAttribute("class", "description");
    description.textContent = this.description;
    text.appendChild(description);

    const buttons = document.createElement("div");
    buttons.setAttribute("class", "book-buttons");
    book.appendChild(buttons);
    
    const statusButton = document.createElement("button");
    statusButton.setAttribute("class", "status");
    statusButton.textContent = "Read";
    buttons.appendChild(statusButton);

    statusButton.addEventListener("click", () => {
      if (book.dataset.status === "unread") {
        book.dataset.status = "read";
        status.textContent = "Read";
        statusButton.textContent = "Unread";
      } else if (book.dataset.status === "read") {
        book.dataset.status = "unread";
        status.textContent = "Unread";
        statusButton.textContent = "Read";
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.textContent = "Delete";
    buttons.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      this.deleteSelf();
    });

    displayArea.appendChild(book);
  }

  deleteSelf() {
    const selfElement = document.querySelector(`[data-id="${this.id}"]`);
    selfElement.remove();
    const libIndex = library.findIndex((element) => element.id === this.id);
    if (libIndex > -1) {
      console.log("removed book id: " + library[libIndex].id);
      library.splice(libIndex, 1);
    }
  }
}

function addBookToLibrary(title, description) {
  const addedBook = new Book(title, description);
  addedBook.addToDisplayArea();
  library.push(addedBook);
  console.log("added book id: " + library.at(-1).id);
}

function deleteLibrary() {
  const arrayLength = library.length;
  for (let i = 0; i <= arrayLength; i++) {
    library.pop();
  }
  console.log("Library trimmed to length " + library.length);
  displayArea.replaceChildren();
}

addBookToLibrary("Your First Book", "Lorem Ipsum et cetera...")