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

$(document).on("click", ".edit-btn", function () {
    console.log("click edit book");
    let bookID = $(this).data("edit-id");
    bookInter.getBook(bookID)
        .then((book) => {
            const key = Object.keys(book)[0];
            return booksDom.bookForm(book[key], bookID);
        })
        .then((finishedForm) => {
            $("#toprint").html(finishedForm);
        });
});

           //save about edit
$(document).on("click", ".save_edit_btn", function () {
    let bookObj = buildBookObj(),
        bookID = $(this).attr("id");
    console.log("i am saving my a bookID", bookID);
    bookInter.editBook(bookObj, bookID)
        .then((data) => {
            loadBookToDOM();
        });
});

           //save delete
$(document).on("click", ".delete-btn", function () {
    console.log("you are about to delete a book", $(this).data("delete-id"));
    let bookID = $(this).data("delete-id");
    bookInter.deleteBook(bookID)
        .then(() => {
            loadBookToDOM();
        });
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
            $(".uniContainer-wrapper").html("");
            loadToReadDOM();
            meg.blue();
         

        });

       // library listner
    $("#library").click(function () {
        $(".uniContainer-wrapper").html("");
              $("#welcome").remove();
               loadLibBookToDOM();
                meg.green();
               
        });

        //bought listner
    $("#bought").click(function () {
              $("#welcome").remove();
               $(".uniContainer-wrapper").html("");
                loadBoughtBookToDOM();
                meg.purple();
        });
        
        //borrow listner
    $("#borrowed").click(function () {
        $("#welcome").remove();
        $(".uniContainer-wrapper").html("");
                loadBorrowBookToDOM();
                meg.yellow();
         }); 

        //view all books to dom
    $("#all-book").click(function () {
        $("#welcome").remove();
        $(".uniContainer-wrapper").html("");

               loadBookToDOM();
                meg.purple();
        });



         //addbooks listner
    $("#add-book").click(function () {
        console.log("clicked to add book");
        var bookForm = booksDom.bookForm()
            .then((bookForm) => {
                $("#toprint").html(bookForm);
                   });
    // setTimeout(callback, 1000);
});

   //due books li
$("#over-book").click(function () {
     $("#welcome").remove();
         $(".uniContainer-wrapper").html("");
              loadDueBooksDOM();
    // $("#login").addClass("is-hidden");
        });




      