//                      "use strict";
//          console.log("Alarm! wake up early");
// let $ = require('jquery'),
//   firebase = require("./config"),
//   user = require("./user"),
//   books = require("./books-interaction"),
//   fapi = require("./api"),
//
//   interaction = require("./user-interaction"),
//   booksDom = require("./booksDom"),
//   eventBooks = require("./eventBooks"),
//   meg = require("./meg");
//

// var bookRef = firebase.database().ref("book/");

// bookRef.orderByChild("due").on("child_added", function dueds(due){
//   if(typeof(dueDate) !== 'undefined'){
//     console.log(dueDate);

//   }

// });




// var types=$('#form-type').find('option:selected').text();



// var finput = document.get.getElementById("form-dueDate");

//                   function dueDate(){
// var y = "2018-5-30";
//                       var x = new Date();
//                      x.setFullYear(y);
//                      var today = new Date();

//                      if (x < today) {
//                          alert("You missed the day.");
//                      }
//                      else if (x > today) {
//                          alert("you have 5 more days");
//                      }
//                      else {
//                          alert("This is the day");
// }

                // }


// let booky = books.getBook().val;

// function getDueDate() {

//   return books.getDueBook().then((l) => {
//       console.log("interactionetbook()", l);
    // const dueddate = [];
    // let x = new Date();
    // x.setFullYear = finput;
    // var today = new Date();
    // for (let key in dues) {
    //   if (x < today) {
    //     alert("You missed the day.");
    //   }
    //   else if (x > today) {
    //     alert("you have 5 more days");
    //   }
    //   else {
    //     alert("This is the day");
    //   }

    // }



//   });
// }
// getDueDate();

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

                            //                         <input type="text" id="form-title" placeholder="Title" value="${bookItem.title}"></input>
                            //                         <input type="text" id="form-author" placeholder="Author" value="${bookItem.author}"></input>



                            //                         <input type="text" id="form-image" placeholder="Photo Name" value="${bookItem.image}"></input>

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




                            //                         `;
                            //                 resolve(form);

                            //     });
                            // }
