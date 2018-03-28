"use strict";
console.log("print on to dom");
let $ = require('jquery');
    // user=require("./user"),
    // book =require("./books-interaction"),
    // firebase=require("./config");


// function makeBookList(book){
//     console.log("book with phontip",book);
//     let bookDisplay =
//         ` <div class="primaryCotainer">

//                 <h1>Book of the Week</h1>
//                      <div class="row">
//                       <div class="col-sm-6 col-md-3">
//                       <div class="thumbnail"><img src="" alt="book one" width="123"></div>
//                        <div class="caption">
//                   </div>
//               </div>
//           </div> 
//     </div>`;
//     $(".container").html(bookDisplay);
//     for (let book in bookList){
//                let currentBook = bookList[item],
//                 //    imgs = $("img", {class:"thumbnail"}),
//                    title=$("<h3>", {class:"book-title"}).text(currentBook.title),
//                    author=$("<h6>",{class:"book-author"}).text(currentBook.author),
//                    dueDate=$("<h5>",{class:"book-dueDate"}).text(currentBook.dueDate),
//                    read=$("<h6>",{class:"book-read"}).text(currentBook.read),
//              //    description=$("<p>",{class:"book-desc"}).text(currentBook.read),
//                    bookListEdit = $("<a>", { "data-edit-id": item, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
//                    bookListDelete = $("<a>", { "data-delete-id": item, class: "delete-btn waves-effect waves-light btn", text: "delete" });
   
//         $(".caption").append(title).append(author).append(dueDate).append(read).append(bookListEdit).append(bookListDelete);  
//         console.log("my bookDom js line 35currentbook", currentBook);
//     }
// }
// $(".container").html(function () {
//     makeBookList();
//     console.log();
// }); 
function makeBookList(bookList) {
                console.log("bookDom makebooklist", bookList);
let bookDisplay =
    $(`  <div class="container">
            <h1>Book of the Week</h1>
<div class="row">`);
                $(".uiContainer--wrapper").html(bookDisplay);
                for (let book in bookList) {
                    let currentBook = bookList[book],
                        bookListItem = $("<div>", {class: "col-sm-6 col-md-3"}),
                        //image = $(class:"thumbnail").prepend($("<img>", {src:"imgs/1.png"})),
                        title = $("<span>", { class: "book-titl" }).text(currentBook.title),
                        bookListData = $("<div/>", { class: "caption" }),
                        bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-light btn", text: "edit" }),
                        bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });

                        bookListData.append(
                            `<h5>${currentBook.author}</h5>
                             <h6>${currentBook.type}</h6>
                             <h5>${currentBook.place}</h5>`);

                    //$(".row").append(bookListItem.append(image));
                    $(".row").append(bookListItem.append(title));
                    $(".row").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
                }

            }
   $(".uiContainer--wrapper").html(function(){
      makeBookList();
});

function bookForm(book, bookId) {
            return new Promise((resolve, reject) => {
                let bookItem = {
                    title: book ? book.title : "",
                    author: book ? book.author : "",
                    dueDate: book ? book.dueDate : "",
                    place: book ? book.place : "",
                    type: book ? book.type : "",
                    description: book ? book.description : "",
                    formTitle: book ? `Edit "${book.title}"` : "Add a new book",
                    btnText: book ? "save changes" : "save book",
                    btnId: book ? "save_edit_btn" : "save_new_btn"
                },
                    form =
                        `<h3>${bookItem.formTitle}</h3>
                        <input type="text" id="form-title" placeholder="Title" value="${bookItem.title}"></input>
                        <input type="text" id="form-author" placeholder="Author" value="${bookItem.author}"></input>
                        <input type="text" id="form-dueDate" placeholder="Due Date" value="${bookItem.dueDate}"></input>
                        <input type="text" id="form-place" placeholder="Place" value="${bookItem.place}"></input>
                        <input type="text" id="form-type" placeholder="Type" value="${bookItem.type}"></input>
                        <input type="text" id="form-desc" placeholder="Description" value="${bookItem.description}"></input><br/>
                        <button id="${bookId}" class=${bookItem.btnId}>${bookItem.btnText}</button>`;
                resolve(form);
    });
}

module.exports = { makeBookList, bookForm };



  

