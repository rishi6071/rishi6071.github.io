// Template for a Book
function Book(id, title, author, genre) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
}


// Display Book Object Constructor
function Display() {
}

// Add methods to Display prototype
Display.prototype.add = function (book) {
    const library_books_list = document.querySelector('#library_books_list');

    const bookRow = document.createElement('tr');
    const bookID = document.createElement('th');
    bookID.scope = "row";
    bookID.innerText = book.id;

    const bookTitle = document.createElement('td');
    bookTitle.innerText = book.title;

    const bookAuthor = document.createElement('td');
    bookAuthor.innerText = book.author;

    const bookGenre = document.createElement('td');
    bookGenre.innerText = '@' + book.genre;

    bookRow.append(bookID, bookTitle, bookAuthor, bookGenre);
    library_books_list.appendChild(bookRow);
}

Display.prototype.clear = function () {
    const libraryForm = document.querySelector('form[name="addBookForm"]');
    libraryForm.reset();
}

// Show Status Toast Message
Display.prototype.showStatus = function(status, message, color) {
    const status_box = document.querySelector('#statusMessage');
    status_box.innerHTML = `<div class="container toast_box me-auto" style="background-color: ${color}">
                                <strong>${status}!</strong> 
                                <span class="ms-2">${message}.</span>
                                <button type="button" onclick="removeStatus()" class="btn-close" aria-label="Close"></button>
                            </div>`;
}

// Remove Status Toast Message
Display.prototype.removeStatus = function() {
    const status_box = document.querySelector('#statusMessage');
    status_box.innerHTML = '';
}


// Will call when the "Add Book" button is clicked
const addBook = () => {
    // Input values by User
    let book_id = document.querySelector('#bookId').value;
    let book_title = document.querySelector('#bookTitle').value.trim();
    let book_author = document.querySelector('#bookAuthor').value.trim();

    let book_genre;
    try {
        book_genre = document.querySelector('input[name="bookGenre"]:checked').value;
    }
    catch(message) {
        // Nothing
    }

    const displayBook = new Display();

    if (book_id == '' || book_title.length<2 || book_author.length<2 || book_genre == undefined) {
        displayBook.showStatus("Warning", "Empty/Wrong Value", "#fff3cd");
        setTimeout(displayBook.removeStatus, 2500);
        return false;
    }
    else {
        displayBook.showStatus("Success", "Book has been Added", "#d1e7dd");        
        setTimeout(displayBook.removeStatus, 2500);
    }

    const book = new Book(book_id, book_title, book_author, book_genre);
    console.log(displayBook);

    displayBook.add(book);
    displayBook.clear();
}