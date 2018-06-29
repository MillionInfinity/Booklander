      'use strict';
           // console.log("print on to dom");
           let $ = require('jquery');




function makeDueList(bookList) {
    let bookDisplay = $(`
                 <h1 class="text-center">Due Books</h1>
    <div class="row" id="toprint">
           </div>`);
    $(".myNbook4").html(bookDisplay);
     for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-md-3 card" }),
            bookListData = $("<div>", { class: "card"}),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "Edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "Delete" });
            bookListData.append(
                `<img class="img-fluid" data-toggle ="modal" data-target ="#myMoal_${currentBook.uid}" src="imgs/${currentBook.image}">
                   <div class="modal fade" id="myMoal_${currentBook.uid}" role="dialog">
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
                      </div>
                  </div >
              </div>
            </div>`);
        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }
    }


   //book not read
function makeBookReadList(bookList) {
    let bookDisplay = $(`
      <h1 class="text-center">Books Ready to Read</h1>
      <div class="row" id="toprint">
    </div>
                      `);
    $(".myNbook4").html(bookDisplay);
     for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-3 col-md-3 card" }),
            bookListData = $("<div>", { class: "card"}),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "Edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "Delete" });
            bookListData.append(
                `<img class="img-fluid" data-toggle ="modal" data-target ="#myMoal_${currentBook.uid}" src="imgs/${currentBook.image}">
                   <div class="modal fade" id="myMoal_${currentBook.uid}" role="dialog">
                          <div class="modal-dialog ">
                            <div class="modal-content">
                                <div class="modal-header">
                                <img class = "img-thumbnail" src="imgs/${currentBook.image}"/>
                                   <h4 class="modal-title">${currentBook.title}</h4>

                                  </div>
                                 <div class="modal-body">
                                <p class="text-left">${book.description}</p >
                           </div>
                        <div class="modal-footer">
                      </div>
                  </div >
              </div>
            </div>`);
        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }
    }


     //Library

function makeLiBookList(bookList) {
    let bookDisplay = $(`
<h1 clas="text-center">A Collection of Library Books</h1>
      <div class="row" id="toprint">
      </div>
                      `);
    $(".myNbook4").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-3 col-md-3 card" }),
            bookListData = $("<div>", { class: "card-body"}),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "Edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "Delete" });
            bookListData.append(
                `<img class="img-fluid" data-toggle ="modal" data-target ="#myMoal_${currentBook.uid}" src="imgs/${currentBook.image}">
                   <div class="modal fade" id="myMoal_${currentBook.uid}" role="dialog">
                          <div class="modal-dialog ">
                            <div class="modal-content">
                                <div class="modal-header">
                                <img class = "img-thumbnail" src="imgs/${currentBook.image}"/>
                                   <h4 class="modal-title">${currentBook.title}</h4>
                                  </div>
                                 <div class="modal-body">
                                <p>${book.description}</p>
                           </div>
                        <div class="modal-footer">
                      </div>
                  </div >
              </div>
            </div>`);
        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }
    }



//Borrowed

function makeBrBookList(bookList) {
    let bookDisplay = $(`
<h1 clas="text-center">A Collection of Borrowed Books</h1>
      <div class="row" id="toprint"></div>
                      `);
    $(".myNbook4").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-3 col-md-3 card" }),
            bookListData = $("<div>", { class: "card" }),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "Edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "Delete" });
        bookListData.append(
            `<img class="img-fluid" data-toggle ="modal" data-target ="#myMoal_${currentBook.uid}" src="imgs/${currentBook.image}">
                   <div class="modal fade" id="myMoal_${currentBook.uid}" role="dialog">
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
                      </div>
                  </div >
              </div>
            </div>`);
        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }

}
//bought

function makeBoBookList(bookList) {
    let bookDisplay = $(`
<h1 clas="text-center">A Collection of Bought Books</h1>
    <div class="row" id="toprint">

    </div>`);
    $(".myNbook4").html(bookDisplay);
    for (let book in bookList) {
        let currentBook = bookList[book],
            bookListItem = $("<div>", { class: "col-sm-3 col-md-3 card " }),
            bookListData = $("<div>", { class: "card"}),
            bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "Edit" }),
            bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "Delete" });
            bookListData.append(
                `<img class="img-fluid" data-toggle ="modal" data-target ="#myMoal_${currentBook.uid}" src="imgs/${currentBook.image}">
                   <div class="modal fade" id="myMoal_${currentBook.uid}" role="dialog">
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
                      </div>
                  </div >
              </div>
            </div>`);
        $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
    }

}
 //all books
 let output=document.getElementById("myNbook");
let makeBookList=(bookarray)=>{
// console.log("make my bookarray",bookarray);
     let bookList='';
     let books;
  for(books in bookarray) {
     let currentBook=bookarray[books];
     console.log(currentBook);
          bookList += `<div class= "col-sm-2 col-md-2">`;
     //   bookList += `<div class= "card ">`;
          bookList += `<img class="img-thumbnail" src="imgs/${currentBook.image}"/>`;
        //   bookList +=`</div>`;
        bookList += `<p class="text-left">${currentBook.title}</p>`;
        bookList += `<p class="text-left">${currentBook.author}</p>`;
        bookList +=`</div>`;
      output.innerHTML = bookList;
}

};







function bookForm(book, bookId) {
            return new Promise((resolve, reject) => {
                let bookItem = {
                   uid:"",
                    title: book ? book.title : "",
                    author: book ? book.author : "",
                    dueDate: book ? book.due : "",
                    image: book ? book.image : "",
                    place: book ? book.place : "",
                    type: book ? book.type : "",
                    read: book ? book.read : "",
                    description: book ? book.description : "",
                    formTitle: book ? `Edit "${book.title}"` : "Add Fresh Book",
                    btnText: book ? "Save Changes" : "Save Book",
                    btnId: book ? "save_edit_btn" : "save_new_btn"
                },
                form = `<div class="modal fade" id="mModal_a" role="dialog">
                                    <div class="modal-dialog">
                                     <div class="modal-content">
                                        <div class="modal-header">
                                      <h2 class="modal-title">${bookItem.formTitle}</h2>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                       </div>
                                        <div class="modal-body">
                                        <p>This will be one of your favorite book</p>
                                           <div class="input-group mb-3">
                                             <input class="form-control" type ="text" id ="form-title" placeholder="Title" value="${bookItem.title}"></input>
                                           </div>
                                           <div class="input-group mb-3">
                                             <input class="form-control" type="text" id="form-author" placeholder="Author" value="${bookItem.author}"></input>
                                           </div>
                                          <div class="input-group mb-3">
                                               <input class="form-control" type="text" id="form-image" placeholder="Photo Name" value="${bookItem.image}"></input>
                                                  </div>
                                                      <div class="input-group mb-3">
                                                            <select class="form-control" name="Type" id="form-type" value="${bookItem.type}">
                                                                    <option value="option">Book Type</option>
                                                                    <option value="library">library</option>
                                                                    <option value="borrow">borrow</option>
                                                                    <option value="bought">bought</option>
                                                                    <option value="e-mail">e-book</option>
                                                            </select>
                                                            <select class="form-control" name="Type" id="form-read" value="${bookItem.read}">
                                                                    <option value="option">Have you read this book?</option>
                                                                    <option value="library">Yes</option>
                                                                    <option value="borrow">No</option>
                                                            </select>
                                                      </div>
                                                    <div class="input-group mb-3">
                                                <input class="form-control" type="date" id="date"  placeholder="Due Date" value="${bookItem.due}"></input>
                                           </div>
                                           <div class="input-group mb-3">
                                           <textarea class="form-control" type="text" id ="form-desc" placeholder = "Description" value = "${bookItem.description}" row="5"> </textarea> <br/>
                                           </div>
                                         </div>
                                       <div class="modal-footer">
                                        <button id="${bookId}" class=${bookItem.btnId}>${bookItem.btnText}</button>
                                      </div>
                                    </div>
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
                            bookForm
                           };
{/* <button type="button" class="btn btn-default">${bookItem.btnText}</button> */}
