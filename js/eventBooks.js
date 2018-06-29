"use strict";
// console.log("event listners for book");
let $ = require('jquery'),
    firebase = require("./config"),
    bookInter=require("./books-interaction"),
    booksDom =require("./booksDom"),
    interaction=require("./user-interaction"),
    search =require("./search"),
    user = require("./user");


function buildBookObj() {
    let bookObj = {
        title: $("#form-title").val(),
        author: $("#form-author").val(),
        // due: $("#date").val(),
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
  console.log("borrow book clicked");
    let currentUser = user.getUser();
    bookInter.getBrBook(currentUser)
        .then((bookData) => {
            booksDom.makeBrBookList(bookData);
        });
}

          //loaing library books

function loadLibBookToDOM() {
  console.log("library button clicked");
    let currentUser = user.getUser();
    bookInter.getLibBook(currentUser)
        .then((bookData) => {
            booksDom.makeLiBookList(bookData);
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


// $(document).on("click", ".edit-btn", function () {
//  console.log("edit button clicked");
//     let bookID = $(this).data("edit-id");
//     bookInter.getBook(bookID)
//         .then((book) => {
//             const key = Object.keys(book)[0];
//             return booksDom.bookForm(book[key], bookID);
//         })
//         .then((finishedForm) => {
// $(".container-fluid_add ").html(finishedForm);
//         });
// });


           // delete
$(document).on("click", ".btn-outline-danger_delete", function () {
    console.log("you are about to delete a book", $(this).data("delete-id"));
    let bookID = $(this).data("delete-id");
    bookInter.deleteBook(bookID);
        });

       //ready to read
     $("#read-book").click(function () {
         $(".myNbook").remove();
            $(".myNbook1").html("");
            loadToReadDOM();

        });

       // library listner
    $("#library").click(function () {
        $(".myNbook").html("");
              $(".myNbook1").remove();
               loadLibBookToDOM();
                  });

        //bought listner
    $("#bought").click(function () {
        $(".myNbook1").remove();
               $(".myNbook3").html("");
                loadBoughtBookToDOM();
                });

        //borrow listner
    $("#borrowed").click(function () {
        $(".myNbook1").remove();
        $(".myNbook2").html("");
                loadBorrowBookToDOM();
         });

        //view all books to dom
    $("#all-book").click(function () {
$(".myNbook1").remove();
        $(".myNbook4de").html("");
            loadBookToDOM();
        });

   //due books li
$("#over-book").click(function () {
     $(".myNbook1").remove();
    $("..myNbook").html("");
              loadDueBooksDOM();
    // $("#login").addClass("is-hidden");
        });

$(document).on("click", ".save_edit_btn", function () {
    let bookObj = buildBookObj(),
        bookID = $(this).attr("id");
    bookInter.editBook(bookObj, bookID)
        .then((data) => {
            loadBookToDOM();
        });
});

//save listner

$(document).on("click", ".save_new_btn", function () {
    console.log("click and save new book");
    let bookObj = buildBookObj();
    bookInter.addBook(bookObj)
        .then((bookId) => {
            loadBookToDOM();
        });
});
//edit listner

$(document).on("click", ".edit-btn", function () {
  // console.log("edit button clicked");
    let bookID = $(this).data("edit-id");
    // console.log("edit-id", bookID);
    bookInter.getBook(bookID)
        .then((book) => {
          // console.log("book tobe edited",book);
            const key = Object.keys(book)[0];
            var finishedForm=booksDom.bookForm(book[key], bookID);

        // .then((finishedForm) => {
            $("#edit").html(finishedForm);
        })
        .catch((error)=>{
          console.log("error edit",error);
        });

});
//addbooks listner
$("#add-book")
    .click(function () {
        console.log("clicked to add book");
        var bookForm = booksDom
            .bookForm()
            .then((bookForm) => {
                $(".container-fluid_add").html(bookForm);
            });
        // setTimeout(callback, 1000);
    });

module.exports={loadBookToDOM,
                 loadBorrowBookToDOM,
                };
