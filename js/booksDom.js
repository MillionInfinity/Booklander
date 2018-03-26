"use strict";
console.log("print on to dom");
let $ = require('jquery'),
    user=require("./user"),
    book =require("./books-interaction"),
    firebase=require("./config");


function makeBookList(bookList){
    let bookDisplay =
        ` <div class="container">
                <h1>Book of the Week</h1>
                     <div class="row">
                      <div class="col-sm-6 col-md-3">
                      <div class="thumbnail"><img src="" alt="book one" width="123"></div>
                       <div class="caption">
                       </div>
                       </div>
          </div> 
    </div>`;
    $(".primaryCotainer").html(bookDisplay);
    for (let book in bookList){
               let currentBook = bookList[book],
                //    imgs = $("img", {class:"thumbnail"}),
                   title=$("<h3>", {class:"book-title"}).text(currentBook.title),
                   author=$("<h6>",{class:"book-author"}).text(currentBook.author),
                   dueDate=$("<h5>",{class:"book-dueDate"}).text(currentBook.dueDate),
                   read=$("<h6>",{class:"book-read"}).text(currentBook.read),
             //    description=$("<p>",{class:"book-desc"}).text(currentBook.read),
                   bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
                   bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });
   
        $(".caption").append(title).append(author).append(dueDate).append(read).append(bookListEdit).append(bookListDelete);  
        console.log("my currentbook", currentBook);
    }
}
$(".primaryCotainer").html(function () {
    makeBookList();
    console.log();
}); 

// makeBookList(bookList);

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
                <input type="text" id="form-Author" placeholder="Author" value="${bookItem.author}"></input>
                <input type="text" id="form-album" placeholder="Due Date" value="${bookItem.dueDate}"></input>
                <input type="text" id="form-title" placeholder="Place" value="${bookItem.place}"></input>
                <input type="text" id="form-album" placeholder="Type" value="${bookItem.type}"></input>
                <input type="text" id="form-year" placeholder="Description" value="${bookItem.description}"></input><br/>
                <button id="${bookId}" class=${bookItem.btnId}>${bookItem.btnText}</button>`;
        resolve(form);
    });
}
module.exports = { makeBookList, bookForm };



   // bookListItem =$("<li>",{class:"book-list_item"}),
      //  title =$("<span/>",{class:"book-title"}).text(currentBook.title),
    //    bookListData=$("<ul/>",{class:"book-list_item--data"}),
      
    //    bookListData.append(
    //        `<li>${currentBook.title}<li>
    //        <li>${currentBook.author}<li>
    //        <li>${currentBook.dueDate}<li>
    //        <li>${currentBook.read}<li>`);
    //        $(".book-list").append(bookListItem.append(title));
    //        $(".book-list").append(bookListItem.append(bookListData).append(bookListDelete).append(bookListEdit));
    // }
// }



 // <div class="col-sm-6 col-md-3"> */} 
                //     <div class="thumbnail"><img src="${book.img}" alt="book one" width="123"></div>
                //         <div class="caption">
                //             <h3 class="book-title">"${book.title}"</h3>
                //             <h6 class="book-author">"${book.author}"</h6>
                //             <h5 class="book-due-date>"${book.dueDate}"</h5>
                //             <h6 class="book-read">"${book.read}"</h6>
                //             <p class="book-desc">"${book.desc}"</p>
                //             <p>
                //                 <a href="#" class="btn btn-primary" role="button"><img src="imgs/b.png" alt="facebook" width="60px" height="50px"></a>
                //                 <a href="#" class="btn btn-default" role="button">Delete</a>
                //             </p>
                //         </div>
                //    </div>
                //     <div class="co
                //     l-sm-6 col-md-3">
                //     <div class="thumbnail"><img src="${book.img1}" alt="book one" width="123"></div>
                //         <div class="caption">
                //             <h3 class="book-title">"${book.title1}"</h3>
                //             <h6 class="book-author">"${book.author1}"</h6>
                //             <h5 class="book-due-date>"${book.dueDate1}"</h5>
                //             <h6 class="book-read">"${book.read1}"</h6>
                //             <p class="book-desc">"${book.desc1}"</p>
                //             <p>
                //                 <a href="#" class="btn btn-primary" role="button"><img src="imgs/b.png" alt="facebook" width="60px" height="50px"></a>
                //                 <a href="#" class="btn btn-default" role="button">Delete</a>
                //             </p>
                //         </div>
                //    </div> 
                //      <div class="col-sm-6 col-md-3">
                //     <div class="thumbnail"><img src="${book.img2}" alt="book one" width="123"></div>
                //         <div class="caption">
                //             <h3 class="book-title">"${book.title2}"</h3>
                //             <h6 class="book-author">"${book.author2}"</h6>
                //             <h5 class="book-due-date>"${book.dueDate2}"</h5>
                //             <h6 class="book-read">"${book.read2}"</h6>
                //             <p class="book-desc">"${book.desc2}"</p>
                //             <p>
                //                 <a href="#" class="btn btn-primary" role="button"><img src="imgs/b.png" alt="facebook" width="60px" height="50px"></a>
                //                 <a href="#" class="btn btn-default" role="button">Delete</a>
                //             </p>
                //         </div>
                //    </div>
