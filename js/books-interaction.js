"use strict";
console.log("book-interaction");
let $ = require('jquery'),
    firebase = require("./config");
// console.log("firebase", firebase.getFBsettings().dataBaseURL);

function getBook() {
       return $.ajax({
       url: `${firebase.getFBsettings().dataBaseURL}/book.json`
    }).done((bookData) => {
       console.log("i can able to promise all kinds of books", bookData);
       return bookData;
    });
}

function getAllTypeBook() {
    return $.ajax({
        url: `${firebase.getFBsettings().dataBaseURL}/book-type.json`
    }).done((bookData) => {
        console.log("i can able to promise all kinds of books", bookData);
        return bookData;
    });
}

function getUserBook() {
    return $.ajax({
        url: `${firebase.getFBsettings().dataBaseURL}/book.json`
    }).done((bookData) => {
        console.log("i can able to promise all kinds of books", bookData);
        return bookData;
    });
}

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

function deleteBook(bookId) {
    $.ajax({
        url: `${firebase.getFBsettings().dataBaseURL}/book/${bookId}.json`,
        method: "DELETE"
    }).done((data) => {
        return data;
    });
}

function getBook(bookId) {
    return $.ajax({
        url: `${firebase.getFBsettings().dataBaseURL}/book/${bookId}.json`,
    }).done((bookData) => {
        return bookData;
    }).fail((error) => {
        return error;
    });
}

function editBook(bookFormObj, bookId) {
    return $.ajax({
        url: `${firebase.getFBsettings().dataBaseURL}/book/${bookId}.json`,
        type: 'PUT',
        data: JSON.stringify(bookFormObj)
    }).done((data) => {
        return data;
    });
}

module.exports = { getBook, getAllTypeBook, getUserBook, addBook,  deleteBook, editBook };












