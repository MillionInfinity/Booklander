"use strict";

let $ = require('jquery'),
    firebase = require("./config");

function getbooks(user) {
    console.log("url", firebase.getFBsettings().databaseURL);
    // console.log("user", user);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/books.json?orderBy="uid"&equalTo="${user}"`
        // url: `https://mybook-5c071.firebaseio.com/user.json?orderBy="uid"&equalTo="${user}"`
    }).done((bookData) => {
        console.log("bookData in promise", bookData);
        return bookData;
    });
}
// getbooks(user);

function addBook(bookFormObj) {
    console.log("addBook", bookFormObj);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/books.json`,
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
        url: `${firebase.getFBsettings().databaseURL}/books/${bookId}.json`,
        method: "DELETE"
    }).done((data) => {
        return data;
    });
}

function getbook(bookId) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/books/${bookId}.json`,
    }).done((bookData) => {
        return bookData;
    }).fail((error) => {
        return error;
    });
}

function editbook(bookFormObj, bookId) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/books/${bookId}.json`,
        type: 'PUT',
        data: JSON.stringify(bookFormObj)
    }).done((data) => {
        return data;
    });
}

module.exports = { getbooks, addBook, getbook, deletebook, editbook };












