     "use strict";
           console.log("print on to dom");
           let $ = require('jquery');
         
 

function makeEditList(bookList) {
    let bookDisplay = $(`<div class="container" id="readground">
                     
                     <div class="row" id="toprint">
                     
                     </div> </div>`);

    $(".uiContainer-wrapper").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-6 col-md-3" }),
            bookListData = $("<div/>", { class: "caption" }),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });


        bookListData.append(
            `<img src="imgs/${currentBook.image}">
                <h4>${(currentBook.title)}</h4>
                <h5>${currentBook.author}</h5>
                <h5>${currentBook.type}</h5>
                <h5>${currentBook.due}</h5>`);

        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }

} 
function makeBookReadList(bookList) {
    let bookDisplay = $(`<div class="container" id="readground">
                       <h1> My Books Ready To Read</h1>
                     <div class="row" id="toprint">
                     
                     </div> </div>`);

    $(".uiContainer-wrapper").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-6 col-md-3" }),
            bookListData = $("<div/>", { class: "caption" }),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });


        bookListData.append(
            `<img src="imgs/${currentBook.image}">
                <h4>${(currentBook.title)}</h4>
                <h5>${currentBook.author}</h5>
                <h5>${currentBook.due}</h5>`);

        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }

}
     //Library

function makeLiBookList(bookList) {
    let bookDisplay = $(`<div class="container" id="libground">
                       <h1> My Library Books</h1>
                     <div class="row" id="toprint">
                     
                     </div> </div>`);

    $(".uiContainer-wrapper").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-6 col-md-3" }),
            bookListData = $("<div/>", { class: "caption" }),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });


        bookListData.append(
            `<img src="imgs/${currentBook.image}">
                <h4>${(currentBook.title)}</h4>
                <h5>${currentBook.author}</h5>
                <h5>${currentBook.type}</h5>
                <h5>${currentBook.due}</h5>`);

        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }

}

//Borrowed

function makeBrBookList(bookList) {
    let bookDisplay = $(`<div class="container" id="brground">
                       <h1> My Borrowed Books</h1>
                     <div class="row" id="toprint">
                     
                     </div> </div>`);

    $(".uiContainer-wrapper").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-6 col-md-3" }),
            bookListData = $("<div/>", { class: "caption" }),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });


        bookListData.append(
            `<img src="imgs/${currentBook.image}">
                <h4>${(currentBook.title)}</h4>
                <h5>${currentBook.author}</h5>
                <h5>${currentBook.type}</h5>
                <h5>${currentBook.due}</h5>`);

        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }

}
//bought

function makeBoBookList(bookList) {
    let bookDisplay = $(`<div class="container" id="bouground">
                       <h1> My Own Books</h1>
                     <div class="row" id="toprint">
                     
                     </div> </div>`);

    $(".uiContainer-wrapper").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-6 col-md-3" }),
            bookListData = $("<div/>", { class: "caption" }),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });


        bookListData.append(
            `<img src="imgs/${currentBook.image}">
                <h4>${(currentBook.title)}</h4>
                <h5>${currentBook.author}</h5>
                <h5>${currentBook.type}</h5>
                <h5>${currentBook.place}</h5>`);

        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }
}
 //all books
function makeBookList(bookList) {
    let bookDisplay = $(`<div class="container">
                       <h1> Your Book Shelf</h1>
                     <div class="row" id="toprint">
                     
                     </div> </div>`);

    $(".uiContainer-wrapper").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-6 col-md-3" }),
            bookListData = $("<div/>", { class: "caption" }),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });


        bookListData.append(
            `<img src="imgs/${currentBook.image}">
                <h4>${(currentBook.title)}</h4>
                <h5>${currentBook.author}</h5>
                <h5>${currentBook.type}</h5>
                <h5>${currentBook.place}</h5>`);

        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }

}



function bookForm(book, bookId) {
            return new Promise((resolve, reject) => {
                let bookItem = {
                    title: book ? book.title : "",
                    author: book ? book.author : "",
                    due: book ? book.due : "",
                    image: book ? book.image : "",
                    place: book ? book.place : "",
                    type: book ? book.type : "",
                    read: book ? book.read : "",
                    description: book ? book.description : "",
                    formTitle: book ? `Edit "${book.title}"` : "Add Fresh Book",
                    btnText: book ? "Save Changes" : "Save Book",
                    btnId: book ? "save_edit_btn" : "save_new_btn"
                },
                    form =
                        `<h3>${bookItem.formTitle}</h3>
                        
                        <input type="text" id="form-title" placeholder="Title" value="${bookItem.title}"></input>
                        <input type="text" id="form-author" placeholder="Author" value="${bookItem.author}"></input>
                        <input type="date" id="date"  placeholder="Due Date" value="${bookItem.due}"></input>
                        <input type="text" id="form-image" placeholder="Photo Name" value="${bookItem.image}"></input>
                        <input type="text" id="form-place" placeholder="Place" value="${bookItem.place}"></input>
                        <select name="Type" id="form-type" value="${bookItem.type}">
                           <option value="option">Book Type</option>
                            <option value="library">library</option>
                            <option value="borrow">borrow</option>
                            <option value="bought">bought</option>
                            <option value="e-mail">e-book</option>
                        </select>
                         <select name="Type" id="form-read" value="${bookItem.read}">
                           <option value="option">Have you read this book?</option>
                            <option value="library">Yes</option>
                            <option value="borrow">No</option>
                        </select>
                        <input type="text" id="form-desc" placeholder="Description" value="${bookItem.description}"></input><br/>
                        <button id="${bookId}" class=${bookItem.btnId}>${bookItem.btnText}</button>`;
                resolve(form);
             
                var types = $('#form-type').find('option:selected').text();
                bookItem.type=types;
    });
}
{/* <input type="text" id="form-read" placeholder="Do you Read it?" value="${bookItem.read}"></input> */}


       
         module.exports = { 
                            // welcomeH,
                            makeBookReadList,
                            makeBookList,
                            makeLiBookList,
                            makeBrBookList,
                            makeBoBookList,
                            bookForm };



  

