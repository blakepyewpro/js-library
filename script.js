const library = [];
const displayArea = document.querySelector("main");

function Book(title, description, isExample = false) {
  this.title = title;
  this.description = description;
  if (isExample) {
    this.id = 1;
  } else {
    this.id = crypto.randomUUID();
  }

  this.addToDisplayArea = function() {
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

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.textContent = "Delete";
    buttons.appendChild(deleteButton);

    displayArea.appendChild(book);
  }
  this.deleteSelf = function() {
    //TODO
  }
}