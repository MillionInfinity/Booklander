"use strict";
console.log("book-interaction");
let $ = require('jquery'),
    firebase = require("./config");
// console.log("firebase", firebase.getFBsettings().dataBaseURL);

function getbooks(user) {
    console.log("find this url ", firebase.getFBsettings().dataBaseURL);
    console.log("user", user);
    return $.ajax({
        url: `${firebase.getFBsettings().dataBaseURL}/book.json?orderBy="uid"&equalTo="${user}"`
        // url: `https://mybook-5c071.firebaseio.com/user.json?orderBy="uid"&equalTo="${user}"`
    }).done((bookData) => {
        console.log("i can able to promise my data", bookData);
        return bookData;
    });
}
// getbooks(user);

function addBook(bookFormObj) {
    console.log("addBook", bookFormObj);
    return $.ajax({
        url: `${firebase.getFBsettings().dataBaseURL}/book.json`,
        type: 'POST',
        data: JSON.stringify(bookFormObj),
        dataType: 'json'
    }).done((bookID) => {
        return bookID;
    });
}
// POST - Submits data to be processed to a specified resource.
// addBook();

function deletebook(bookId) {
    $.ajax({
        url: `${firebase.getFBsettings().dataBaseURL}/book/${bookId}.json`,
        method: "DELETE"
    }).done((data) => {
        return data;
    });
}

function getbook(bookId) {
    return $.ajax({
        url: `${firebase.getFBsettings().dataBaseURL}/book/${bookId}.json`,
    }).done((bookData) => {
        return bookData;
    }).fail((error) => {
        return error;
    });
}

function editbook(bookFormObj, bookId) {
    return $.ajax({
        url: `${firebase.getFBsettings().dataBaseURL}/book/${bookId}.json`,
        type: 'PUT',
        data: JSON.stringify(bookFormObj)
    }).done((data) => {
        return data;
    });
}

module.exports = { getbooks, addBook, getbook, deletebook, editbook };












