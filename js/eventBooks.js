"use strict";
console.log("event listners for book");
let $ = require('jquery'),
    firebase = require("./config"),
    bookInter=require("./books-interaction"),
    booksDom =require("./booksDom"),
    interaction=require("./user-interaction"),
    meg =require("./meg"),
    user = require("./user");

      //loading all books

function loadBookToDOM(){
    let currentUser=user.getUser();
        bookInter.getBook(currentUser)
           .then((bookData)=>{
               booksDom.makeBookList(bookData);
    });
}
        //loaing ready to read

        function loadToReadDOM() {
            let currentUser = user.getUser();
            bookInter.getReadBook(currentUser)
                .then((bookData) => {
                    booksDom.makeBookReadList(bookData);
                });
        }

           //loaing bought books

function loadBoughtBookToDOM(){
    let currentUser=user.getUser();
    bookInter.getBuyBook(currentUser)
            .then((bookData)=>{
                booksDom.makeBoBookList(bookData);
            });
}
         //loaing borrow books

function loadBorrowBookToDOM() {
    let currentUser = user.getUser();
    bookInter.getBrBook(currentUser)
        .then((books) => {
            booksDom.makeBrBookList(books);
        });
}

          //loaing library books

function loadLibBookToDOM() {
    let currentUser = user.getUser();
    bookInter.getLibBook(currentUser)
        .then((books) => {
            booksDom.makeLiBookList(books);
        });
}
    //   loading edit books
function loadDueBooksDOM() {
    let currentUser = user.getUser();
    bookInter.getDueBook(currentUser)
        .then((bookData) => {
            booksDom.makeDueList(bookData);
        });
}

              //save about edit
$(document).on("click", ".save_edit_btn", function () {
    let bookObj = buildBookObj(),
        bookID = $(this).attr("id");
   bookInter.editBook(bookObj, bookID)
        .then((data) => {
            loadBookToDOM();
        });
});

//addbooks listner
$("#add-book").click(function () {
    console.log("clicked to add book");
    var bookForm = booksDom.bookForm()
        .then((bookForm) => {
            $(".container-add").html(bookForm);
               
        });
    // setTimeout(callback, 1000);
});

         //save listner

$(document).on("click", ".save_new_btn", function(){
    console.log("click and save new book");
    let bookObj=buildBookObj();
    bookInter.addBook(bookObj)
    .then((bookId)=>{
    loadBookToDOM();
});
});

            //edit listner

$(document).on("click", ".btn btn-outline-info", function () {

    let bookID = $(this).data("edit-id");
    bookInter.getBook(bookID)
        .then((book) => {
            const key = Object.keys(book)[0];
            return booksDom.bookForm(book[key], bookID);
        })
        .then((finishedForm) => {
            $("#myNbook1").html(finishedForm);
        });
});


           // delete
$(document).on("click", ".btn, .btn-secondary", function () {
    console.log("you are about to delete a book", $(this).data("delete-id"));
    let bookID = $(this).data("delete-id");
    bookInter.deleteBook(bookID);
        });

       // book object
     function buildBookObj() {
    let bookObj = {
        title: $("#form-title").val(),
        author: $("#form-author").val(),
        due: $("#date").val(),
        image: $("#form-image").val(),
        place: $("#form-place").val(),
        read: $("#form-read").val(),
        type: $("#form-type").val(),
        description: $("#form-desc").val(),
        status: false,
        uid: user.getUser()
    };
    return bookObj;
}
       //ready to read
     $("#read-book").click(function () {
            $("#welcome").remove();
            $(".myNbook1").html("");
            loadToReadDOM();
            // meg.blue();


        });

       // library listner
    $("#library").click(function () {
        $(".myNbook1").html("");
              $("#welcome").remove();
               loadLibBookToDOM();
                // meg.green();

        });

        //bought listner
    $("#bought").click(function () {
              $("#welcome").remove();
               $(".myNbook1").html("");
                loadBoughtBookToDOM();
                // meg.purple();
        });

        //borrow listner
    $("#borrowed").click(function () {
        $("#welcome").remove();
        $(".myNbook1").html("");
                loadBorrowBookToDOM();

         });

        //view all books to dom
    $("#all-book").click(function () {
        $("#welcome").remove();
        $(".myNbook").html("");

               loadBookToDOM();

        });

   //due books li
$("#over-book").click(function () {
     $("#welcome").remove();
         $(".container").html("");
              loadDueBooksDOM();
    // $("#login").addClass("is-hidden");
        });
