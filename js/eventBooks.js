"use strict";
console.log("event listners for book");
let $ = require('jquery'),
    firebase = require("./config"),
    bookInter=require("./books-interaction"),
    booksDom =require("./booksDom"),
    interaction=require("./user-interaction"),
    user = require("./user");


function loadBookToDOM(){
console.log("from eventBook to see books on dom");
let currentUser=user.getUser();
console.log("eventbook loadbook",currentUser);
bookInter.getBook(currentUser)
.then((bookData)=>{
console.log("i get my data eventbook",bookData);
booksDom.makeBookList(bookData);
});
}
// loadBookToDOM();

$(document).on("click", ".save_new_btn", function(){
    console.log("click and save new book");
    let bookObj=buildBookObj();
    bookInter.addBook(bookObj)
    .then((bookId)=>{
    loadBookToDOM();
});
});

$(document).on("click", ".edit-btn", function () {
    console.log("click edit book");
    let bookID = $(this).data("edit-id");
    bookInter.getBook(bookID)
        .then((book) => {
            return booksDom.bookForm(book, bookID);
        })
        .then((finishedForm) => {
            $(".uiContainer--wrapper").html(finishedForm);
        });
});

$(document).on("click", ".save_edit_btn", function () {
    let bookObj = buildBookObj(),
        bookID = $(this).attr("id");
    console.log("do i have a bookID", bookID);
    bookInter.editSong(bookObj, bookID)
        .then((data) => {
            loadBookToDOM();
        });
});

$(document).on("click", ".delete-btn", function () {
    console.log("you can delete a book", $(this).data("delete-id"));
    let bookID = $(this).data("delete-id");
    bookInter.deleteBook(bookID)
        .then(() => {
            loadBookToDOM();
        });
});
        $("#all").click(function () {
        $(".uiContainer--wrapper").html("");
            loadBookToDOM();
        });


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


$("#add-book").click(function () {
    console.log("clicked to add book");
    var bookForm = booksDom.bookForm()
        .then((bookForm) => {
            $(".container-add").html(bookForm);
        });
});