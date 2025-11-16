const library = [];
const displayArea = document.querySelector("main");

function Book(title, description) {
  this.title = title;
  this.description = description;
  this.id = crypto.randomUUID();

  this.addToDisplayArea = function() {
    //TODO
  }
  this.deleteSelf = function() {
    //TODO
  }
}