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
    const thisBook = document.createElement("div");
    thisBook.setAttribute("class", "book")
    thisBook.dataset.id = this.id;
    thisBook.dataset.status = "unread";

    const thisTitle = document.createElement("span");
    thisTitle.setAttribute("class", "title");
    thisTitle.textContent = this.title;
    thisBook.appendChild(thisTitle);

    const thisDescription = document.createElement("span");
    thisDescription.setAttribute("class", "description");
    thisDescription.textContent = this.description;
    thisBook.appendChild(thisDescription);
    
    const thisStatusButton = document.createElement("button");
    thisStatusButton.setAttribute("class", "status");
    thisStatusButton.textContent = "Mark as Read";
    thisBook.appendChild(thisStatusButton);

    const thisDeleteButton = document.createElement("button");
    thisDeleteButton.setAttribute("class", "delete");
    thisDeleteButton.textContent = "Delete";
    thisBook.appendChild(thisDeleteButton);

    displayArea.appendChild(thisBook);
  }
  this.deleteSelf = function() {
    //TODO
  }
}