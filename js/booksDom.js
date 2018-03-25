"use strict";
console.log("print on to dom");
let $ = require('jquery'),
    user=require("./user"),
    book =require("./books-interaction"),
    firebase=require("./config"),
// bookRef = firebase.database().ref().child('book');
 bookRef = firebase.database().ref('user-book');



function buildBookObj() {
    let bookObj = {
        title: $("#form-title").val(),
        author: $("#form-author").val(),
        dueDate: $("#select-dueDate").val(),
        image: $("#form-image").val(),
        place: $("#form-place").val(),
        read: $("form-read").val(),
        type: $("select-type").val(),
        description: $("form-description").val(),
        status: false,
        uid: user.getUser() 
    };
    return bookObj;
}

// ======CLICK TO FIREBASE=============//

$("#add-book").click(function () {
    console.log("get your book");
    var bookForm = buildBookObj();
    book.addBook(bookObj).then((bookForm) => {
    console.log("the book is sending to firebase",bookForm)
        });
});

//===============FIREBASE DONE==========//
{/* <div class="container">
    <h5 class="brand">
        <span>Add</span> New Books</h5>
    <div class="wrapper">
        <form id="contactForm">
            <p><label>Title</label><br><input type="text" name="title" id="title" required></p>
                <p><label>Author</label><input type="text" name="author" id="author"></p>
                    <p><label>Type</label><input type="text" name="type" id="type" required></p>
                        <p><label>Phone Number</label><input type="text" name="dueDate" id="duedate"></p>
                            <p class="full"><label>Description</label><textarea name="description" rows="5" id="description"></textarea></p>
                            <p class="add-book"><button type="submit">Submit</button></p>
                </form>
            </div>
        </div> */}
// ================read==============//

// function setStatus(bookID) {
//     return $.ajax({
//         url: `${firebase.getFBsettings().databaseURL}/book/${bookID}.json`,
//         type: 'PATCH',
//         data: JSON.stringify({ status: true }),
//         dataType: 'json'
//     }).done((userID) => {
//         return userID;
//     }).fail((error) => {
//         console.log("error", error);
//         return error;
//     });
// }
// $(document).on("click", ".check-in", function () {
//     let checkintoReso = $(this).attr("id");
//     console.log("check in", checkintoReso);
//     setStatus(checkintoReso);
//     // .then(() => {
//     //   checkStatus();
//     //   console.log("CHECK IN BUTTON CLICKED");

// });

// ------------------------------------


//============== Load the new book form to firebase==========//
// function loadBooksToDOM() {
//     // console.log("load some books is on progress,")
//     let currentUser = user.getUser(); //add once we have login
//     console.log("currentUser is loading books", currentUser);
//     book.getbook(currentUser)
//         .then((bookData) => {
//             console.log("got bookdata", bookData);
//             makeBookList(bookData);
//         });
// }
// function makeBookList(bookList) {
//     console.log(bookList);
//     let booksDisplay =
//         $(`<div class="uiContainer__book-list box col s12">
//     <ul class="book-list">
//     </ul>
//   </div>`);
//     $(".items").html(booksDisplay);
//     for (let book in bookList) {
//         let currentBook = bookList[book],
//             bookListItem = $("<li>", { class: "book-list__item" }),
//             title = $("<span/>", { class: "book-title" }).text(currentBook.title),
//             bookListData = $("<ul/>", { class: "book-list__item--data" }),
//             bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
//             bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });
//         // Same as `<a id="${song}" class="delete-btn waves-effect waves-light btn">delete</a>`

//         bookListData.append(
//             `<li>${currentBook.title}</li>
//                     <li>${currentBook.author}</li>
//                     <li>${currentBook.dueDate}</li>`);

//         $(".book-list").append(bookListItem.append(title));
//         $(".book-list").append(bookListItem.append(bookListData).append(bookListDelete).append(bookListEdit));
//     }
// }

// function bookForm(book, bookId) {
//     return new Promise((resolve, reject) => {
//         let bookItem = {
//             title: book ? book.title : "",
//             author: book ? book.author : "",
//             dueDate: book ? book.dueDate : "",
//             place: book ? book.place : "",
//             type: book ? book.type : "",
//             description: book ? book.description : "",
//             formTitle: book ? `Edit "${book.title}"` : "Add a new book",
//             btnText: book ? "save changes" : "save book",
//             btnId: book ? "save_edit_btn" : "save_new_btn"
//         },
//             form =
//                 `<h3>${bookItem.formTitle}</h3>
//                 <input type="text" id="form--title" placeholder="Title" value="${bookItem.title}"></input>
//                 <input type="text" id="form--Author" placeholder="Author" value="${bookItem.author}"></input>
//                 <input type="text" id="form--album" placeholder="Due Date" value="${bookItem.dueDate}"></input>
//                 <input type="text" id="form--title" placeholder="Place" value="${bookItem.place}"></input>
//                 <input type="text" id="form--album" placeholder="Type" value="${bookItem.type}"></input>
//                 <input type="text" id="form--year" placeholder="Description" value="${bookItem.description}"></input><br/>
//                 <button id="${bookId}" class=${bookItem.btnId}>${bookItem.btnText}</button>`;
//         resolve(form);
//     });
// }

// module.exports = { makeBookList, bookForm};