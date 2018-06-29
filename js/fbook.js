"use strict";
console.log("hello xhr");

// THIS ARE MY ARMY IN FIREBASE.WE CALL THEM VIRIABLES
let firebase= require("./config"),
          $ = require('jquery');

        require("firebase/auth");
        require("firebase/database");

//WE ARE GOING TO USE THIS WEAPONS (method)..i never use this words before.kkk
function getbooks(user){
    // console.log("hey url", firebase.myConfig().dataBaseURL);
    return $.ajax({
        url:`{firebase.myConfig().dataBaseURL}/books.json?orderBy="uid"&equalTo="${user}"`
    }).done((bookData)=>{
        // console.log("i am expecting...",bookData);
    });
}
// getbooks();
// console.log("hmm");



// function bookForm(books, )


module.exports= getbooks;