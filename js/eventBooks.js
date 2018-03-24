"use strict";
console.log("event listners for book");
let $ = require('jquery'),
    firebase = require("./config"),
    bookInter=require("./books-interaction"),
    booksDom =require("./booksDom"),
    interaction=require("./user-interaction"),
    user = require("./user");



// var form = document.getElementById("addForm");
// var song = document.getElementById("items");

// //form submit event//
// form.addEventListener('submit', addItem);
// //delete event//
// song.addEventListener('click', removeItem);
// //add item//
// function addItem(s) {
//     s.preventDefault();
//     var newItem = document.getElementById('item').value;

//     //create new li element//
//     var li = document.createElement('li');
//     //add class//
//     li.className = 'list-group-item';
//     //add text node with input value//
//     li.appendChild(document.createTextNode(newItem));
//     //create del button element//
//     var deleteBtn = document.createElement('button');
//     //add classes to del button//
//     deleteBtn.className = 'btn btn-danger btn-sm floate-right delete';

//     //append text node//
//     deleteBtn.appendChild(document.createTextNode('X'));

//     //append button to li//
//     li.appendChild(deleteBtn);

//     //Append li to list//
//     song.appendChild(li);
// }
// function removeItem(s) {
//     if (s.target.classList.contains('delete')) {
//         if (confirm('are you sure?')) {
//             var li = s.target.parentElement;
//             song.removeChild(li);

//         }
//     }

// }