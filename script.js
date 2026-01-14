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
    // TODO
  }

  deleteSelf() {
    // TODO
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