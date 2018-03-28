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

function loadLibBookToDOM() {
    // console.log("from eventBook library books" ,a);
    let currentUser = user.getUser();
    console.log("eventbook loadboo lib books", currentUser);
    bookInter.getLibBook(currentUser)
        .then((bookData) => {
            console.log("i get my data eventbook", bookData);
            booksDom.makeBookList(bookData);
        });
}
// loadLibBookToDOM();

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
            $(".container").html(finishedForm);
        });
});

$(document).on("click", ".save_edit_btn", function () {
    let bookObj = buildBookObj(),
        bookID = $(this).attr("id");
    console.log("i am saving my a bookID", bookID);
    bookInter.editBook(bookObj, bookID)
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

     $("#library").click(function(){
        $(".lib-book").html("");
         bookInter.getLibBook();
        //  loadLibBookToDOM();
       });

function buildBookObj() {
    let bookObj = {
        title: $("#form-title").val(),
        author: $("#form-author").val(),
        dueDate: $("#form-dueDate").val(),
        image: $("#form-image").val(),
        place: $("#form-place").val(),
        read: $("form-read").val(),
        type: $("form-type").val(),
        description: $("form-desc").val(),
        status: false,
        uid: user.getUser()
    };
    return bookObj;
}

let callback="";
$("#add-book").click(function () {
    console.log("clicked to add book");
    var bookForm = booksDom.bookForm()
        .then((bookForm) => {
            $(".uiContainer--wrapper").html(bookForm);
        });
    // setTimeout(callback, 1000);
});