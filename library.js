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

function render() {
  let tableBody = document.querySelector('tbody')
  library.forEach((book, bookNumber) => {
    let row = document.createElement('tr')
    
    let rowHeader = document.createElement('th')
    rowHeader.setAttribute("scope", "row")
    rowHeader.textContent(`${bookNumber + 1}`)
    row.appendChild(rowHeader)

    for (key in book) {
      let bookDetail = document.createElement('td')
      bookDetail.textContent(book.key)
      row.appendChild(bookDetail)
    }
    
    tableBody.appendChild(row)
  })
}

