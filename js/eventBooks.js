"use strict";
// console.log("event listners for book");
let $ = require('jquery'),
    firebase = require("./config"),
    bookInter=require("./books-interaction"),
    booksDom =require("./booksDom"),
    interaction=require("./user-interaction"),
    search =require("./search"),
    user = require("./user");

// ================================

    //   loading all books
    function loadBookToDOM(){
    let currentUser=user.getUser();
        bookInter.getBook(currentUser)
           .then((bookData)=>{
               booksDom.makeBookList(bookData);
    });
}

//view all books to dom
$("#all-book").click(function () {
    $(".myNbook").html();
  loadBookToDOM();
});

//clicked the main edit button
// $(document).on("click", ".edit-btn", function () {
//     console.log("edit button clicked");
//     let bookObj = buildEditBookObj(this.id);
//       bookInter.editBook(bookObj,this.id);
// });
// ==============================================
// create Edit book





         // delete
$(document).on("click", ".btn-outline-danger_delete", function () {
    console.log("Good by mr bookiy",this.id);
          bookInter.deleteBook(this.id)
    .then(()=>{
        loadBookToDOM();
    });
        });



//saves New Book

$(document).on("click", ".save_new_btn", function () {
    console.log("click and save new book");
    let bookObj = buildBookObj();
    bookInter.addBook(bookObj)
        .then((bookId) => {
            loadBookToDOM();
        });
});


//addbooks listner
$("#add-book").click(function () {
        console.log("clicked to add book");
        var bookForm = booksDom
            .bookForm()
            .then((bookForm) => {
                $(".container-fluid_add").html(bookForm);
            });
        // setTimeout(callback, 1000);
    });


    // save after editing button
    $(document).on("click", ".save_edit_btn", function () {
        let bookObj = buildBookObj(this.id);
        console.log("bookObj", bookObj);
                bookInter.editBook(bookObj,this.id)
                .then((data) => {
                   console.log("save edit data", data);
                   loadBookToDOM();
                });
        });

        function buildBookObj() {
            let bookObj = {

                title: $("#form-title").val(),
                author: $("#form-author").val(),
                due: $("#form-date").val(),
                image: $("#form-image").val(),
                place: $("#form-place").val(),
                read: $("#form-read").val(),
                type: $("#form-type").val(),
                description: $("#form-desc").val(),
                // status: false,
                uid: user.getUser()
            };
            // console.log("bookObj",bookObj);
            return bookObj;
        }
   
// let buildEditBookObj = (uid) => {
//     let bookObj = {
//         title: $("#title").val(),
//         author: $("#form-author").val(),
//         due: $("#form-date").val(),
//         image: $("#form-image").val(),
//         place: $("#form-place").val(),
//         read: $("#form-read").val(),
//         type: $("#form-type").val(),
//         description: $("#form-desc").val(),
//         uid: uid ? uid : ""
//     };
//     console.log("editbookObj", bookObj);
//     return bookObj;
// };
      


module.exports={
    loadBookToDOM,

                };






















                //due books li
             // $("#over-book").click(function () {
             //      $(".myNbook1").remove();
             //     $("..myNbook").html("");
             //               loadDueBooksDOM();
             //     // $("#login").addClass("is-hidden");
             //         });
             //ready to read
          //  $("#read-book").click(function () {
          //      $(".myNbook").remove();
          //         $(".myNbook1").html("");
          //         loadToReadDOM();

          //     });

             // library listner
          // $("#library").click(function () {
          //     $(".myNbook").html("");
          //           $(".myNbook1").remove();
          //            loadLibBookToDOM();
          //               });

              //bought listner
          // $("#bought").click(function () {
          //     $(".myNbook1").remove();
          //            $(".myNbook3").html("");
          //             loadBoughtBookToDOM();
          //             });

              //borrow listner
          // $("#borrowed").click(function () {
          //     $(".myNbook1").remove();
          //     $(".myNbook2").html("");
          //             loadBorrowBookToDOM();
          //      });

                     //loaing bought books

          // function loadBoughtBookToDOM(){
          //     let currentUser=user.getUser();
          //     bookInter.getBuyBook(currentUser)
          //             .then((bookData)=>{
          //                 booksDom.makeBoBookList(bookData);
          //             });
          // }
                   //loaing borrow books

          // function loadBorrowBookToDOM() {
          //   console.log("borrow book clicked");
          //     let currentUser = user.getUser();
          //     bookInter.getBrBook(currentUser)
          //         .then((bookData) => {
          //             booksDom.makeBrBookList(bookData);
          //         });
          // }

                    //loaing library books

          // function loadLibBookToDOM() {
          //   console.log("library button clicked");
          //     let currentUser = user.getUser();
          //     bookInter.getLibBook(currentUser)
          //         .then((bookData) => {
          //             booksDom.makeLiBookList(bookData);
          //         });
          // }
              //   loading due books
          // function loadDueBooksDOM() {
          //     let currentUser = user.getUser();
          //     bookInter.getDueBook(currentUser)
          //         .then((bookData) => {
          //             booksDom.makeDueList(bookData);
          //         });
          // }

          //       //loaing ready to read
          //
          // function loadToReadDOM() {
          //     let currentUser = user.getUser();
          //       bookInter.getReadBook(currentUser)
          //         .then((bookData) => {
          //             booksDom.makeBookReadList(bookData);
          //       });
          //   }
