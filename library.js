"use strict"

let library = []

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

MakeBook.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`
}

function addBookToLibrary() {
  let title = prompt("Book title", "title")
  let author = prompt("Book author", "author")
  let pages = prompt("Book number of pages", "0")
  let haveRead = prompt("Have you read it?", "yes")
  let newBook = new Book(title, author, pages, haveRead)
  library.push(newBook)
}



