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
//===================================
        
        //   loading due books
        
     function loadDueBooksDOM() {
         let currentUser = user.getUser();
          booksDom.getAlarm(currentUser);
       }

                //due books li
             $("#over-book").click(function () {
                     $(".myNbook").html("");
                 $('#bcolor div').css({'background-color':'red'});
                           loadDueBooksDOM();
                 });
//====================================
        
//  loading read books
     
  function loadReadBooksDOM(){
                let currentUser=user.getUser();
                   booksDom.readclick(currentUser);
               }
            //    read books 
            $("#read-book").click(function(){
                // console.log("read book clicked");
                $(".myNbook").html("");
                       loadReadBooksDOM();
            });  
//=================================     
  function loadboughtBooksDOM(){
       let currentUser=user.getUser();
            booksDom.boughtclick(currentUser);
               }
            //    read books 
            $("#bought").click(function(){
                // console.log("read book clicked");
                $(".myNbook").html("");
                       loadboughtBooksDOM();
            }); 

//==========================
function loadborrowBooksDOM() {
    let currentUser = user.getUser();
    booksDom.borrowclick(currentUser);
}
//    read books 
$("#borrow").click(function () {
    // console.log("read book clicked");
    $(".myNbook").html("");
    loadborrowBooksDOM();
}); 

//==========================
function loadlibraryBooksDOM() {
    let currentUser = user.getUser();
    booksDom.libraryclick(currentUser);
}
//    read books 
$("#library").click(function () {
    // console.log("read book clicked");
    $(".myNbook").html("");
    loadlibraryBooksDOM();
}); 


//=========================
         // delete
$(document).on("click", ".btn-outline-danger_delete", function () {
    console.log("Good by mr bookiy",this.id);
          bookInter.deleteBook(this.id)
    .then(()=>{
        loadBookToDOM();
    });
        });



//addbooks brings the module to the front
$("#add-book").click(function (event) {
        console.log("clicked to add book");
        let bookForm = booksDom.bookForm()
            .then((bookForm) => {
                $(".container-fluid_add").html(bookForm);
                event.preventDefault();
            });
     
    });

// takes/saves the add module content
$(document).on("click", ".save_new_btn", function () {
       let bookObj = buildBookObj();
        bookInter.addBook(bookObj).then(() => {
                loadBookToDOM();
            });
    });


    // save after editing button
    $(document).on("click", ".save_edit_btn", function (event) {
        let bookObj = buildBookObj(this.id);
           bookInter.editBook(bookObj,this.id);
               loadBookToDOM();
        event.preventDefault();
              
        });

        function buildBookObj() {
            let bookObj = {

                title: $("#form-title").val(),
                author: $("#form-author").val(),
                alarm: $("#form-alarm").val(),
                image: $("#form-image").val(),
                place: $("#form-place").val(),
                read: $("#form-read").val(),
                type: $("#form-type").val(),
                description: $("#form-desc").val(),
                uid: user.getUser()
            };
            // console.log("bookObj",bookObj);
            return bookObj;
        }
   
     


module.exports={
    loadBookToDOM,

                };









