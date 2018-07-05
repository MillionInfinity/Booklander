"use strict";
console.log("hello xhr");

let firebase= require("./config"),
          $ = require('jquery');

        require("firebase/auth");
        require("firebase/database");


function getbooks(user){
    return $.ajax({
        url:`{firebase.myConfig().dataBaseURL}/books.json?orderBy="uid"&equalTo="${user}"`
    }).done((bookData)=>{
         });
}

module.exports= getbooks;