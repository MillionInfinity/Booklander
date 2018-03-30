     "use strict";
           console.log("print on to dom");
           let $ = require('jquery');
   
function makeBookList(bookList) {
     let bookDisplay =$(`<div class="container">
                       <h1>Book of the Week</h1>

                      <div class="col">
                     </div> </div>`);

    $(".uiContainer--wrapper").html(bookDisplay);          
   for (let book in bookList) {
        let currentBook = bookList[book],
             bookListItem = $("<div>", {class: "col-sm-6 col-md-3"}),
        //      image = $(class:"thumbnail").prepend($("<img>", {src:"imgs/1.png"})),
                title = $("<span>", { class: "book-titl" }).text(currentBook.title),
                bookListData = $("<div/>", { class: "caption" }),
                bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-light btn", text: "edit" }),
                bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });

    bookListData.append(
               `<h5>${currentBook.author}</h5>
                <h6>${currentBook.type}</h6>
                <h5>${currentBook.place}</h5>`);

                    //$(".row").append(bookListItem.append(image));
       $(".col").append(bookListItem.append(title));
       $(".col").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    
    }
  
}
//    $(".uiContainer--wrapper").html(function(){
//       makeBookList();
// });
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
        //  var img =document.createElement("img");
        //  img.src="img/1.png";
        //  var src=document.getElementById("h");
        //  src.appendChild(img);
         module.exports = { makeBookList, bookForm };



  

