"use strict";


let $ = require("jquery");

// Gets API call from "books-getter.js"
const bookQuery = require("./eventBooks");

let button;
let bookResult = [];
// Saved books will go into the bookshelf
let bookshelf = [];

// This function captures the value typed into the search bar once the "enter" key is pressed
let captureInput = () => {
    // Grabs the "search-bar" element
    const bookSearchBar = document.getElementById("search-bar");
    bookSearchBar.addEventListener("keyup", function (e) {
        if (e.keyCode === 13 && e.target.value != "") {
            // Takes user input and makes it lowercase
            let userInput = e.target.value.toLowerCase();
            bookSearch(userInput);
            // If the "enter" key is pressed, but there is no value entered, an alert is triggered
        } else if (e.keyCode === 13) {
            window.alert("Please enter something to search for.");
        }
    });
};

captureInput();

// From the API Call, get the data and search through it for matches to the parameter passed into it...
let bookSearch = (userInput) => {
    bookQuery.booksGetter(userInput)
        // and return the response once it is done
        .then((response) => {
            // let bookResponse = response;
            bookResult = response.docs;
            bookDisplay(bookResult);
        }).then(() => {
            let books = $(".book-search-result");
            for (let i = 0; i < books.length; i++) {
                button = $(`#save--book--btn-${i}`);
                clickAddToBookshelf(button);
            }
        });
};

// This builds the list of books with their title, author, and the published year
let bookDisplay = (arrayBooks) => {
    let searchResult = "";
    for (let i = 0; i < arrayBooks.length; i++) {
        // Adds thumbnail image of book cover; takes too long to load & sometimes returns no image at all
          searchResult += `<div class="col-sm-3 card">`;


        if (arrayBooks[i].isbn) {
            let bookThumbnail = arrayBooks[i].isbn[0];
            searchResult += `<img src="http://covers.openlibrary.org/b/isbn/${bookThumbnail}-S.jpg" alt="book cover thumbnail image">`;
        }
        searchResult += `<div class="book-search-result"><h4 class="book-title list-headline">${arrayBooks[i].title}</h4>`;
        searchResult += `<p class="author-name list-summary">By: ${arrayBooks[i].author_name}</p>`;
        searchResult += `<footer class="pub-date list-footer">Published: ${arrayBooks[i].first_publish_year}</footer>`;
        searchResult += `<button id="save--book--btn-${i}" type="button" class="btn btn-light btn-sm" aria-pressed="false" autocomplete="off" target="my--btn--news">Add to Bookshelf</button></div>`;
       searchResult +=`</div>`;
    }
    // Grabs the empty <div> from index.html with the ID of "content" and fills it with "newContent"
    document.getElementById('search-results').innerHTML = searchResult;
};

let bookshelfDisplay = (arrayBooks) => {
    let searchResult = "";
    for (let i = 0; i < arrayBooks.length; i++) {
        searchResult += `<div class="book-search-result"><h4 class="book-title list-headline">${arrayBooks[i].title}</h4>`;
        searchResult += `<p class="author-name list-summary">${arrayBooks[i].author_name}</p>`;
        searchResult += `<footer class="pub-date list-footer">${arrayBooks[i].first_publish_year}</footer>`;
        searchResult += `<button id="delete--book--btn-${i}" type="button" class="delete-button btn btn-light btn-sm" aria-pressed="false" autocomplete="off" target="my--btn--news">Delete Book</button></div>`;
    }
    // Grabs the empty <div> from index.html with the ID of "content" and fills it with "newContent"
    document.getElementById('search-results').innerHTML = searchResult;
};

function clickAddToBookshelf(button) {
    $(button).on("click", (e) => {
        let savedBook = {};
        savedBook.title = e.target.parentNode.childNodes[0].innerText;
        savedBook.author_name = e.target.parentNode.childNodes[1].innerText;
        savedBook.first_publish_year = e.target.parentNode.childNodes[2].innerText;
        bookshelf.push(savedBook);
    });
}

function displayBookshelf() {
    $("#bookshelf-button").on("click", (e) => {
        $("#search-results").html("");
        bookshelfDisplay(bookshelf);
    });
}

function deleteBookResult() {
    $(".delete-button").on("click", (e) => {
        console.log(e.target.id);
    });
}

displayBookshelf();
deleteBookResult();

module.exports = { bookSearch };







  let booksGetter=(query)=>{
   return $.ajax({
     url:`https://openlibrary.org/search.json?title=${query}&limit=8`,
     type:'GET',
     data:JSON.stringify
   }).done((searchdata)=>{
    //  console.log("data from api",searchdata);
    //  document.getElementsByClassName('.myNbook').innerHTML=searchdata;
     return searchdata;
   }) .then((response) => {
    //  console.log("response", response);
           let ebook= response;
           let output='';
           $.each(ebook, (index, book) => {
       output += `
         <div class="col-md-3">
           <div class="well text-center">
             <img src="http://covers.openlibrary.org/b/isbn/${book.bookThumbnail}-S.jpg" alt="book cover thumbnail image">
             <h5>${book.title}</h5>
              <p>${book.author_name}</p>
           </div>
         </div>
       `;
     });

       });

 };

booksGetter();




// //
// let button;
// let bookResult = [];
// let bookshelf = [];


// let captureInput = () => {
//     // Grabs the "search-bar" element
//     const bookSearchBar = document.getElementById("search-bar");
//     bookSearchBar.addEventListener("keypress", function(e) {
//         if (e.keyCode === 13 && e.target.value != "")  {
//     // Takes user input and makes it lowercase
//             let userInput = e.target.value.toLowerCase();
//             bookSearch(userInput);
//         // If the "enter" key is pressed, but there is no value entered, an alert is triggered
//         } else if (e.keyCode === 13) {
//                 window.alert("Please enter something to search for.");
//         }
//     });
// };
// //
//
// // search();
// // // From the API Call, get the data and search through it for matches to the parameter passed into it...
// let bookSearch = (userInput) => {
//     bookQuery.booksGetter(userInput)
//     // and return the response once it is done
//     .then((response) => {
//         let bookResponse = response;
//         bookResult = response.docs;
//         bookDisplay(bookResult);
//     }).then(() => {
//         let books = $(".book-search-result");
//         for (let i = 0; i < books.length; i++) {
//             button = $(`#save--book--btn-${i}`);
//             clickAddToBookshelf(button);
//         }
//     });
// };
// // //
// // // This builds the list of books with their title, author, and the published year
// let bookDisplay = (arrayBooks) => {
//     let searchResult = "";
//     for (let i = 0; i < arrayBooks.length; i++) {
//         // Adds thumbnail image of book cover; takes too long to load & sometimes returns no image at all
//         if (arrayBooks[i].isbn) {
//             let bookThumbnail = arrayBooks[i].isbn[0];
//             searchResult += `<img src="http://covers.openlibrary.org/b/isbn/${bookThumbnail}-S.jpg" alt="book cover thumbnail image">`;
//         }
//         searchResult += `<div class="book-search-result"><h4 class="book-title list-headline">${arrayBooks[i].title}</h4>`;
//         searchResult += `<p class="author-name list-summary">By: ${arrayBooks[i].author_name}</p>`;
//         searchResult += `<footer class="pub-date list-footer">Published: ${arrayBooks[i].first_publish_year}</footer>`;
//         searchResult += `<button id="save--book--btn-${i}" type="button" class="btn btn-light btn-sm" aria-pressed="false" autocomplete="off" target="my--btn--news">Add to Bookshelf</button></div>`;
//     }
//     // Grabs the empty <div> from index.html with the ID of "content" and fills it with "newContent"
//     document.getElementById('search-results').innerHTML = searchResult;
// };
// // //
// let bookshelfDisplay = (arrayBooks) => {
//     let searchResult = "";
//     for (let i = 0; i < arrayBooks.length; i++) {
//         searchResult += `<div class="book-search-result"><h4 class="book-title list-headline">${arrayBooks[i].title}</h4>`;
//         searchResult += `<p class="author-name list-summary">${arrayBooks[i].author_name}</p>`;
//         searchResult += `<footer class="pub-date list-footer">${arrayBooks[i].first_publish_year}</footer>`;
//         searchResult += `<button id="delete--book--btn-${i}" type="button" class="delete-button btn btn-light btn-sm" aria-pressed="false" autocomplete="off" target="my--btn--news">Delete Book</button></div>`;
//     }
// //     // Grabs the empty <div> from index.html with the ID of "content" and fills it with "newContent"
// //     document.getElementById('search-results').innerHTML = searchResult;
// };

// function clickAddToBookshelf(button) {
//     $(button).on("click", (e) => {
//         let savedBook = {};
//         savedBook.title = e.target.parentNode.childNodes[0].innerText;
//         savedBook.author_name = e.target.parentNode.childNodes[1].innerText;
//         savedBook.first_publish_year = e.target.parentNode.childNodes[2].innerText;
//         bookshelf.push(savedBook);
//     });
// }

// function displayBookshelf() {
//     $("#bookshelf-button").on("click", (e) => {
//         $("#search-results").html("");
//         bookshelfDisplay(bookshelf);
//     });
// }

// function deleteBookResult() {
//     $(".delete-button").on("click", (e) => {
//         console.log(e.target.id);
//     });
// }
// // //
// displayBookshelf();
// deleteBookResult();

module.exports = {bookSearch};
