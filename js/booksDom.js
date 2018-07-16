      'use strict';
           // console.log("print on to dom");
           let $ = require('jquery'),
          bookInt=require('./books-interaction'),
          firebase = require("./config");



 //all books

// let output = document.getElementById("myNbook");
// const makeBookList=(bookarray)=> {
//     let bookList = "";
//     bookarray.forEach((books)=>{
//         let currentBook = bookarray[books];
//         console.log(currentBook);
//         bookList += `<p class="text-left">${currentBook.title}</p>`;
//         bookList += `<img src="imgs/${currentBook.image}" id="${books}-infobtn"  class="info-btn img-thumbnail" alt="image" data-toggle ="modal" data-target="#${books}-infoModal" >`;

//     });
//     $("#myNbook").html(bookList);

// }

const outputDiv = document.getElementById('myNbook');


function makeBookList(bookarray){
  // console.log("line29",bookarray);
let strang = '';
 for(let books in bookarray){
   let currentBook=bookarray[books];
  //  console.log('line33', currentBook);
   strang += `<div id="bookcolor"class="col-md-3 col-sm-3">`;
   strang += `<img src="imgs/${currentBook.image}" id="${books}-infobtn"  class="info-btn img-thumbnail" alt="image" data-toggle ="modal" data-target="#${books}-infoModal" >`;
   strang += `<h3  class="text-left"> ${currentBook.title}</h3>`;
   strang += `<p  class="text-left"> ${currentBook.author}</p>`;

  //  strang += `<p  class="text-left"> ${currentBook.description}</p>`;
   strang +=`<hr>`;
   strang +=`<vr>`;
   strang += `</div>`;
   strang += `<div class="modal fade modalStyle" id="${books}-infoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">`;
   strang += `<div class="modal-dialog" role="document">`;
   strang += `<div class="modal-content">`;
   strang += '<div class="modal-header">';
   strang += `<h5 class="modal-title" id="exampleModalLabel">${currentBook.title}</h5>`;
   strang += `<button type="button" class="close" data-dismiss="modal" aria-label="Close">`;
   strang += `<span aria-hidden="true">&times;</span>`;
   strang += `</button>`;
   strang += `</div>`;
strang += `<div class="modal-body" background='blue'>`;
   strang +=`<div class="container">`;
   strang += `<div class="row">`;
   strang += `<div class="col-md-4">`;
   strang += `<img src="imgs/${currentBook.image}" alt="a copy of your book" class="img-thumbanil" width='250px'>`;
   strang +=`</div>`;
   strang += `<div class="col-md-4 ml-auto">`;
   strang += `<p  class="text-left"> ${currentBook.author}</p>`;
   strang += `<p  class="text-left"> ${currentBook.description}</p>`;

   strang += `</div>`;
   strang += `</div>`;
   strang += `</div>`;
   strang += `</div>`;
   strang += `<div class="modal-footer">`;
   strang += `<p class="text-left">${currentBook.alarm}</p>`;
   strang += `<button type="button" id="${books}" class="btn btn-outline-secondary btn-outline-danger_delete">Delete</button>`;
   strang += `<button id="${books}" data-toggle="modal" data-target="#${books}-editItemModal" class="btn btn-success">Edit Book</button>`;
  //  strang += `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
   strang += `</div>`;
   strang += `</div>`;
   strang += `</div>`;
   strang += `</div>`;

   strang += `<div class="modal fade modalStyle" id="${books}-editItemModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">`;
   strang += `<div class="modal-dialog" role="document">`;
   strang += `<div class="modal-content">`;
   strang += `<div class="modal-header">`;
   strang += `<h5 class="modal-title" id="exampleModalLabel">You are Editing a book title <em> "${currentBook.title}"</em></h5>`;
   strang += `<button type="button" class="close" data-dismiss="modal" aria-label="Close">`;
   strang += `<span aria-hidden="true">&times;</span>`;
   strang += `</button>`;
   strang += `</div>`;
   strang += `<div class="modal-body">`;
   strang += `<div class="input-group mb-3">`;
strang += `<input class="form-control" type ="text" id ="form-title" placeholder="Title" value="${currentBook.title}"maxlength="17"></input>`;
   strang += `</div>`;
   strang += `<div class="input-group mb-3">`;
   strang += `<input class="form-control" type="text" id="form-author" placeholder="Author" value="${currentBook.author}"></input>`;
   strang += `</div>`;
   strang += `<div class="input-group mb-3">`;
   strang += `<input class="form-control" type="text" id="form-image" placeholder="Photo Name"  value="${currentBook.image}"></input>`;
   strang += `</div>`;
   strang += `<div class="input-group mb-3">`;
   strang += `<select class="form-control" name="Type" id="form-type" value="${currentBook.type}">`;
   strang += `<option value="option">Book Type</option>`;
   strang += `<option value="library">library</option>`;
   strang += `<option value="borrow">borrow</option>`;
   strang += `<option value="bought">bought</option>`;
   strang += `<option value="e-mail">e-book</option>`;
   strang += `</select>`;
   strang += `<select class="form-control" name="Type" id="form-read" value="${currentBook.read}">`;
   strang += `<option value="option">Have you read this book?</option>`;
   strang += `<option value="Yes">Yes</option>`;
   strang += `<option value="No">No</option>`;
   strang += `</select>`;
   strang += `</div>`;
   strang += `<div class="input-group mb-3">`;
   strang += `<input class="form-control" type="date" id="form-alarm"  placeholder="Due Date" value="${currentBook.alarm}"></input>`;
   strang += `</div>`;
   strang += `<div class="input-group mb-3">`;
   strang += `<textarea class="form-control" type="text" id ="form-desc" placeholder="Description" value="${currentBook.description}" row="5"> </textarea>`;
   
   strang += `</div>`;
   strang += `</div>`;
   strang += `<div class="modal-footer">`;
   strang += `<button type="button" id="${books}" class="btn btn-outline-secondary btn-outline-danger_delete">Delete</button>`;
   strang +=`<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>`;
   strang += ` <button type="submit" id="${books}" class="btn btn-primary save_edit_btn" data-dismiss="modal">Submit</button>`;
   strang += `</div>`;
   strang += `</div>`;
   strang += `</div>`;
   strang += `</div>`;
 
   $("#myNbook").html(strang);
 }

}

function getAlarm() {
  // console.log("alarm books", books.getBook());
  return bookInt.getBook().then((ala) => {
    let alarms = [];
    for (let alarmbook in ala) {
      // console.log(alarmbook);
      let currentalarm = ala[alarmbook];
      // console.log("line 80 main", currentalarm.alarm);
      // alarms +=`<P>hi alarm</P>`;
    
      alarms += `<div class="col-md-3 col-sm-3">`;
      alarms += `<img src="imgs/${currentalarm.image}" id="${alarmbook}-infobtn"  class="info-btn img-thumbnail" alt="image" data-toggle ="modal" data-target="#${alarmbook}-infoModal" >`;
      alarms +=`<div>`;
      alarms += `<h3  class="text-left_title"> ${currentalarm.title}</h3>`;
      alarms += `<p  class="text-left"> ${currentalarm.author}</p>`;
      alarms += `</div>`;
      alarms += `<p>Due on ${currentalarm.alarm}</p>`;
      let duedate = `${currentalarm.alarm}`;
      let newDate = new Date(duedate);
      let today = new Date();
      // console.log("duedate", today);
    
      //  console.log(colors);
      
      if (newDate > today) {
             alarms += `<p>you have more days</p>`;

             }
      else if(newDate < today){
        alarms += `<p>you book is due.</p>`;
          }
       else {
            alarms += `<p>today</p>`;
           }
      //  strang += `<p  class="text-left"> ${currentBook.description}</p>`;
      alarms += `<hr>`;
      alarms += `<vr>`;
      alarms += `</div>`;
      $("#myNbook").html(alarms);
    }
   
  }
  );
}

///////////////reAD/////////////////////////////////////////
function getReadbook() {
  return $.ajax({
    url: `${firebase.getFBsettings().databaseURL}/book.json`
  }).then((reading) => {
    let re = [];
    for (let reads in reading) {
         if (reading[reads].read === "No"){ 
          //  console.log("reERE",reading[reads]);
            re.push(reading[reads]);
         }
      // console.log("getreadbook:", re);
      // return re;
     
    }
    
    console.log("getreadb:", re);
    return re;
  }
    );
}

function readclick(){
  return getReadbook().then((reads)=>{
    console.log("line 199",reads);
    let readu=[];
    for (let bookr in reads){
       let readers=reads[bookr];
        console.log("reading-203", readers);
      readu += `<div id="bookcolor"class="col-md-3 col-sm-3">`;
      readu += `<img src="imgs/${readers.image}" class="img-thumbnail" alt="image">`;
      readu += `<h3  class="text-left"> ${readers.title}</h3>`;
      readu += `<p  class="text-left"> ${readers.author}</p>`;
//       //  strang += `<p  class="text-left"> ${currentBook.description}</p>`;
      readu += `<hr>`;
      readu += `<vr>`;
      readu += `</div>`;
    }
    $("#myNbook").html(readu);
  });
}
readclick();

function bookForm(book, bookId) {
  return new Promise((resolve, reject) => {
    let bookItem = {
      uid: "",
      title: book ? book.title : "",
      author: book ? book.author : "",
      alarm: book ? book.alarm : "",
      image: book ? book.image : "",
      place: book ? book.place : "home",
      type: book ? book.type : "",
      read: book ? book.read : "",
      description: book ? book.description : "",

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
                                                                    <option value="Yes">Yes</option>
                                                                    <option value="No">No</option>
                                                            </select>
                                                      </div>
                                                    <div class="input-group mb-3">
                                                <input class="form-control" type="date" id="form-alarm"  placeholder="Due Date" value=""${bookItem.alarm}""></input>
                                           </div>
                                           <div class="input-group mb-3">
                                           <textarea class="form-control" type="text" id ="form-desc" placeholder = "Description" value = "${bookItem.description}" row="5"> </textarea> <br/>
                                           </div>
                                         </div>
                                       <div class="modal-footer">
                                        <button id="${bookId}" class="btn btn-outline-secondary save_new_btn">Save</button>
                                      </div>
                                    </div>
                                     </div>
                                 </div>`;

    resolve(form);
  });
}


module.exports = {
  getAlarm,
  getReadbook,
  makeBookList,
  bookForm,
  // readclick
};





      // let datedue=duedate.toString();
      // var countDownDate = new Date(duedate).getTime();
      // console.log("countdate",countDownDate);
       
          //  // Update the count down every 1 second
          // // let x = setInterval(function () {
          //   // console.log("counterdate")
          //     // Get todays date and time
          //     var now = new Date().getTime();
          //     // Find the distance between now an the count down date
          //     var distance = countDownDate - now;
          //     // Time calculations for days, hours, minutes and seconds
          //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          //     // Output the result in an element with id="demo"
          //     document.getElementById("myNbook").innerHTML = "you left" + days + "Days " + hours + "h " + minutes + "m " + seconds + "s ";
          //     // If the count down is over, write some text 
          //     // if (distance < 0) {
          //     //     clearInterval(x);
          //     //     document.getElementById("myNbook").innerHTML = "You will pay for your lost";
          //     // }
          // // }, 1000);




  


// function getReadBook() {
//   return getBook().then((rea) => {
//     const read = [];
//     for (let key in rea) {
//       if (rea[key].read === "No") {
//         read.push(rea[key]);

//       }
//     } return read;

//   });
// }





// function getReadbook(){
//   return getBook().then((reading) =>{
//     let read='';
//     for (let key in reading){
//       // console.log("read",key);
//     }

//   }
// );
// }











{/* <button type="button" class="btn btn-default">${bookItem.btnText}</button> */}


// let alarms = bookInt.getBook(book);
// console.log("alarms",alarms);

// var countDownDate = new Date("Jul 21, 2018 15:37:25").getTime();
// // Update the count down every 1 second
// var x = setInterval(function () {
//     // Get todays date and time
//     var now = new Date().getTime();
//     // Find the distance between now an the count down date
//     var distance = countDownDate - now;
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     // Output the result in an element with id="demo"
//     document.getElementById("myNbook").innerHTML = "you left" + days + "Days " + hours + "h " + minutes + "m " + seconds + "s ";
//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("myNbook").innerHTML = "You will pay for your lost";
//     }
// }, 1000);

// 


// function makeDueList(bookList) {
//     let bookDisplay = $(`
//                  <h1 class="text-center">Due Books</h1>
//     <div class="row" id="toprint">
//            </div>`);
//     $(".myNbook4").html(bookDisplay);
//      for (let book in bookList) {
//         let currentBook = bookList[book],
//             bookListItem = $("<div>", { class: "col-md-3 card" }),
//             bookListData = $("<div>", { class: "card"}),
//             bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "Edit" }),
//             bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "Delete" });
//             bookListData.append(
//                 `<img class="img-fluid" data-toggle ="modal" data-target ="#myMoal_${currentBook.uid}" src="imgs/${currentBook.image}">
//                    <div class="modal fade" id="myMoal_${currentBook.uid}" role="dialog">
//                           <div class="modal-dialog ">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                 <img class = "img-thumbnail" src="imgs/${currentBook.image}"/>
//                                    <h4 class="modal-title">${currentBook.title}</h4>
//
//                                   </div>
//                                  <div class="modal-body">
//                                 <p>${book.description}</p >
//                            </div>
//                         <div class="modal-footer">
//                       </div>
//                   </div >
//               </div>
//             </div>`);
//         $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
//     }
//     }


   //book not read
// function makeBookReadList(bookList) {
//     let bookDisplay = $(`
//       <h1 class="text-center">Books Ready to Read</h1>
//       <div class="row" id="toprint">
//     </div>
//                       `);
//     $(".myNbook4").html(bookDisplay);
//      for (let book in bookList) {
//         let currentBook = bookList[book],
//             bookListItem = $("<div>", { class: "col-sm-3 col-md-3 card" }),
//             bookListData = $("<div>", { class: "card"}),
//             bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "Edit" }),
//             bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "Delete" });
//             bookListData.append(
//                 `<img class="img-fluid" data-toggle ="modal" data-target ="#myMoal_${currentBook.uid}" src="imgs/${currentBook.image}">
//                    <div class="modal fade" id="myMoal_${currentBook.uid}" role="dialog">
//                           <div class="modal-dialog ">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                 <img class = "img-thumbnail" src="imgs/${currentBook.image}"/>
//                                    <h4 class="modal-title">${currentBook.title}</h4>
//
//                                   </div>
//                                  <div class="modal-body">
//                                 <p class="text-left">${book.description}</p >
//                            </div>
//                         <div class="modal-footer">
//                       </div>
//                   </div >
//               </div>
//             </div>`);
//         $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
//     }
//     }


     //Library

// function makeLiBookList(bookList) {
//     let bookDisplay = $(`
// <h1 clas="text-center">A Collection of Library Books</h1>
//       <div class="row" id="toprint">
//       </div>
//                       `);
//     $(".myNbook4").html(bookDisplay);
//     for (let book in bookList) {
//         let currentBook = bookList[book],
//             bookListItem = $("<div>", { class: "col-sm-3 col-md-3 card" }),
//             bookListData = $("<div>", { class: "card-body"}),
//             bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "Edit" }),
//             bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "Delete" });
//             bookListData.append(
//                 `<img class="img-fluid" data-toggle ="modal" data-target ="#myMoal_${currentBook.uid}" src="imgs/${currentBook.image}">
//                    <div class="modal fade" id="myMoal_${currentBook.uid}" role="dialog">
//                           <div class="modal-dialog ">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                 <img class = "img-thumbnail" src="imgs/${currentBook.image}"/>
//                                    <h4 class="modal-title">${currentBook.title}</h4>
//                                   </div>
//                                  <div class="modal-body">
//                                 <p>${book.description}</p>
//                            </div>
//                         <div class="modal-footer">
//                       </div>
//                   </div >
//               </div>
//             </div>`);
//         $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
//     }
//     }



//Borrowed

// function makeBrBookList(bookList) {
//     let bookDisplay = $(`
// <h1 clas="text-center">A Collection of Borrowed Books</h1>
//       <div class="row" id="toprint"></div>
//                       `);
//     $(".myNbook4").html(bookDisplay);
//     for (let book in bookList) {
//         let currentBook = bookList[book],
//             bookListItem = $("<div>", { class: "col-sm-3 col-md-3 card" }),
//             bookListData = $("<div>", { class: "card" }),
//             bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "Edit" }),
//             bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "Delete" });
//         bookListData.append(
//             `<img class="img-fluid" data-toggle ="modal" data-target ="#myMoal_${currentBook.uid}" src="imgs/${currentBook.image}">
//                    <div class="modal fade" id="myMoal_${currentBook.uid}" role="dialog">
//                           <div class="modal-dialog ">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                 <img class = "img-thumbnail" src="imgs/${currentBook.image}"/>
//                                    <h4 class="modal-title">${currentBook.title}</h4>
//
//                                   </div>
//                                  <div class="modal-body">
//                                 <p>${book.description}</p >
//                            </div>
//                         <div class="modal-footer">
//                       </div>
//                   </div >
//               </div>
//             </div>`);
//         $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
//     }
//
// }
//bought

// function makeBoBookList(bookList) {
//     let bookDisplay = $(`
// <h1 clas="text-center">A Collection of Bought Books</h1>
//     <div class="row" id="toprint">
//
//     </div>`);
//     $(".myNbook4").html(bookDisplay);
//     for (let book in bookList) {
//         let currentBook = bookList[book],
//             bookListItem = $("<div>", { class: "col-sm-4 col-md-4 card " }),
//             bookListData = $("<div>", { class: "card"}),
//             bookListEdit = $("<a>", { "data-edit-id": book, class: "edit-btn waves-effect waves-light btn", text: "Edit" }),
//             bookListDelete = $("<a>", { "data-delete-id": book, class: "delete-btn waves-effect waves-light btn", text: "Delete" });
//             bookListData.append(
//                 `<img class="img-fluid" data-toggle ="modal" data-target ="#myMoal_${currentBook.uid}" src="imgs/${currentBook.image}">
//                    <div class="modal fade" id="myMoal_${currentBook.uid}" role="dialog">
//                           <div class="modal-dialog ">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                 <img class = "img-thumbnail" src="imgs/${currentBook.image}"/>
//                                    <h4 class="modal-title">${currentBook.title}</h4>
//                                   </div>
//                                  <div class="modal-body">
//                                 <p>${book.description}</p >
//                            </div>
//                         <div class="modal-footer">
//                       </div>
//                   </div >
//               </div>
//             </div>`);
//         $("#toprint").append(bookListItem.append(bookListData).append(bookListEdit).append(bookListDelete));
//     }
//
// }
