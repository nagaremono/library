"use strict"

let library = []

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary() {
  let title = document.getElementById('title').value
  let author = document.getElementById('author').value
  let pages = document.getElementById('pages').value
  
  let haveRead = document.getElementsByName('haveRead')
  if (haveRead[0].checked) haveRead = haveRead[0].value
  else haveRead = haveRead[1].value
  
  let newBook = new Book(title, author, pages, haveRead)
  library.push(newBook)
}

function render() {
  let tableBody = document.querySelector('tbody')
  tableBody.innerHTML = ''
  library.forEach((book, bookNumber) => {
    let row = document.createElement('tr')
    row.setAttribute("data-book-number", bookNumber)
    
    let rowHeader = document.createElement('th')
    rowHeader.setAttribute("scope", "row")
    rowHeader.textContent = `${bookNumber + 1}`
    row.appendChild(rowHeader)
  
    for (let key in book) {
      let bookDetail = document.createElement('td')
      bookDetail.textContent = book[key]
      row.appendChild(bookDetail)
    }
    
    let removeColumn = document.createElement('td')
    let removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.setAttribute("class", "remove")
    removeButton.addEventListener('click', () => {
      let libraryIndex = row.getAttribute("data-book-number")
      library.splice(libraryIndex, 1)
      render()
    })

    removeColumn.appendChild(removeButton)
    row.appendChild(removeColumn)

    tableBody.appendChild(row)
  })

}

document.querySelector('#addbook').addEventListener('click', addBookToLibrary)
document.querySelector('#addbook').addEventListener('click', render)
document.querySelector('#newbook').addEventListener('click', () => {
  let form = document.querySelector('form')
  if (form.style.display === "none") {
    form.style.display = "block"
  } else {
    form.style.display = "none"
  }

  let button = document.querySelector('#addbook')
  if (button.style.display === "none") {
    button.style.display = "block"
  } else {
    button.style.display = "none"
  }
})