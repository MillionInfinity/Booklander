                     "use strict";
         console.log("Alarm! wake up early");
let $ = require('jquery'),
  firebase = require("./config"),
  user = require("./user"),
  books = require("./books-interaction"),
  fapi = require("./api"),
  search = require("./search"),
  interaction = require("./user-interaction"),
  booksDom = require("./booksDom"),
  eventBooks = require("./eventBooks"),
  meg = require("./meg");
  

var bookRef = firebase.database().ref("book/");

bookRef.orderByChild("due").on("child_added", function dueds(due){
  if(typeof(dueDate) !== 'undefined'){
    console.log(dueDate);
  
  }

});
           



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