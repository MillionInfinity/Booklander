     "use strict";
           console.log("print on to dom");
           let $ = require('jquery');




function makeDueList(bookList) {

    let bookDisplay = $(`<div class="col-md-4 id="readground">

                     <div class="row" id="toprint">

                     </div> </div>`);

    $(".Nbook1").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-6 col-md-3" }),
            bookListData = $("<div/>", { class: "caption" }),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });


        bookListData.append(
            `<img src="imgs/${currentBook.image}">
                <h5>${currentBook.title}</h5>
                <p>${currentBook.author}</p>
                <p>${currentBook.due}</p>
                <div class="card-footer">
                  <div class="d-flex">`);

        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }

}
   //book not read
function makeBookReadList(bookList) {
    let bookDisplay = $(`<div class="container" id="readground">
                       <h1> My Books Ready To Read</h1>
                     <div class="row" id="toprint">

                     </div> </div>`);

    $(".Nbook1").html(bookDisplay);
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

    $(".myNbook1").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-12 col-md-3" }),
            bookListData = $("<div/>", { class: "caption" }),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });


        bookListData.append(
            `<img src="imgs/${currentBook.image}">
                <h4>${(currentBook.title)}</h4>
                <h5>${currentBook.author}</h5>
                <div class="card-body"></div>

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

$(".myNbook1").html(bookDisplay);
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
//bought

function makeBoBookList(bookList) {
    let bookDisplay = $(`<div class="container" id="bouground">
                       <h1> My Own Books</h1>
                     <div class="row" id="toprint">

                     </div> </div>`);

    $(".Nbook1").html(bookDisplay);
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
 //all books
function makeBookList(bookList) {
    let bookDisplay = $(`<div class="row" id="toprint"></div>
                      `);

    $(".myNbook").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-3 col-md-3" }),
            bookListData = $("<div>", { class: "card"});
        // bookListData.append(
        //   for (let book in bookList) {
        //       let currentBook = bookList[book],
        //           bookListItem = $("<div>", { class: "col-sm-6 col-md-" }),
        //           bookListData = $("<div/>", { class: "caption" }),
        //           bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
        //           bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "delete" });


              bookListData.append(
`<img class="img-fluid" src="imgs/${currentBook.image}">
                  <button type ="button" class ="btn btn-info btn-lg" data-toggle ="modal" data-target ="#myModal_${currentBook.uid}"> Open Large Modal </button>
                      <div class="modal fade" id="myModal_${currentBook.uid}" role="dialog">
                          <div class="modal-dialog ">
                            <div class="modal-content">
                                <div class="modal-header">
                                 <img class = "img-thumbnail" src="imgs/${currentBook.image}"/>
                                  <h4 class="modal-title">${currentBook.title}</h4>
                                  </div>
                                 <div class="modal-body">
                                <p>${book.description}</p >
                           </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-secondary">Secondary</button>
                     </div>
                  </div >
              </div>
            </div>`);
//   $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
        $("#toprint").append(bookListItem.append(bookListData));
    }

}



function bookForm(book, bookId) {
            return new Promise((resolve, reject) => {
                let bookItem = {
                    title: book ? book.title : "",
                    author: book ? book.author : "",
                    dueDate: book ? book.due : "",
                    image: book ? book.image : "",
                    // place: book ? book.place : "",
                    type: book ? book.type : "",
                    read: book ? book.read : "",
                    description: book ? book.description : "",
                    formTitle: book ? `Edit "${book.title}"` : "Add Fresh Book",
                    btnText: book ? "Save Changes" : "Save Book",
                    btnId: book ? "save_edit_btn" : "save_new_btn"
                },
                form =
                                    `    <div>
                                     <div class="modal-header_addb">
                                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                            <h4 class="modal-title">${bookItem.formTitle}</h4>
                                                        </div>
                                                        <div class="modal-body">
                                                            <p>This is a large modal.</p>
                                                            <input type="text" id="form-title" placeholder="Title" value="${bookItem.title}"></input>
                                                                               <input type="text" id="form-author" placeholder="Author" value="${bookItem.author}"></input>
                                                                                    <input type="text" id="form-image" placeholder="Photo Name" value="${bookItem.image}"></input>
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
                                                                                     <input type="date" id="date"  placeholder="Due Date" value="${bookItem.due}"></input>
                                                                                     <input type="text" id="form-desc" placeholder="Description" value="${bookItem.description}"  align="right" width="48" height="48"></input><br/>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" id="${bookId}" class=${bookItem.btnId}>${bookItem.btnText}</button>
                                                     </div>
                                        </div>`;
                                    resolve(form);
                        });
                    }




         module.exports = {
                            makeDueList,
                            makeBookReadList,
                            makeBookList,
                            makeLiBookList,
                            makeBrBookList,
                            makeBoBookList,
                            bookForm };




                            //
                            // function bookForm(book, bookId) {
                            //             return new Promise((resolve, reject) => {
                            //                 let bookItem = {
                            //                     title: book ? book.title : "",
                            //                     author: book ? book.author : "",
                            //                     dueDate: book ? book.due : "",
                            //                     image: book ? book.image : "",
                            //                     // place: book ? book.place : "",
                            //                     type: book ? book.type : "",
                            //                     read: book ? book.read : "",
                            //                     description: book ? book.description : "",
                            //                     formTitle: book ? `Edit "${book.title}"` : "Add Fresh Book",
                            //                     btnText: book ? "Save Changes" : "Save Book",
                            //                     btnId: book ? "save_edit_btn" : "save_new_btn"
                            //                 },
                            //                     form =
                            //                         `<h3>${bookItem.formTitle}</h3>
                            //
                            //                         <input type="text" id="form-title" placeholder="Title" value="${bookItem.title}"></input>
                            //                         <input type="text" id="form-author" placeholder="Author" value="${bookItem.author}"></input>
                            //
                            //
                            //
                            //                         <input type="text" id="form-image" placeholder="Photo Name" value="${bookItem.image}"></input>
                            //
                            //                         <select name="Type" id="form-type" value="${bookItem.type}">
                            //                            <option value="option">Book Type</option>
                            //                             <option value="library">library</option>
                            //                             <option value="borrow">borrow</option>
                            //                             <option value="bought">bought</option>
                            //                             <option value="e-mail">e-book</option>
                            //                         </select>
                            //                          <select name="Type" id="form-read" value="${bookItem.read}">
                            //                            <option value="option">Have you read this book?</option>
                            //                             <option value="library">Yes</option>
                            //                             <option value="borrow">No</option>
                            //                         </select>
                            //                         <input type="date" id="date"  placeholder="Due Date" value="${bookItem.due}"></input>
                            //                         <input type="text" id="form-desc" placeholder="Description" value="${bookItem.description}"  align="right" width="48" height="48"></input><br/>
                            //                         <button id="${bookId}" class=${bookItem.btnId}>${bookItem.btnText}</button>
                            //
                            //
                            //
                            //
                            //                         `;
                            //                 resolve(form);
                            //
                            //     });
                            // }
