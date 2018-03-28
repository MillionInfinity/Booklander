"use strict";
console.log("book-interaction");
let $ = require('jquery'),
    firebase = require("./config"),
    aBook = {},
    myBookArr = [];

// cuseronsole.log("firebase", firebase.getFBsettings().dataBaseURL);

function getBook() {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/book.json`
    }).done((bookData) => {
        return bookData;
    });
}
function getUserBook(user) {
       return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/book.json?orderBy="uid"&equalTo="${user}"`
       
    }).done((resolve) => {
        return resolve;
    }).fail((error) => {
        return error;
    });
}

function getLibBook(){
    return getBook().then((lib) => {
        const library = [];
        for (let key in lib) {
            if (lib[key].type === "library") {
                library.push(lib[key]);
            } else {
                alert("sorry i couldnt find book");
            }
        }
        return library;
    });
}



function ajaxCalls(myBooks) {
    console.log("myBooks", myBooks);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/book/${myBooks.fbID}.json?`
    }).done((aooks) => {
        console.log("calling + ajax + users book", aBook);
        myBookArr.push(aBook);
        return aBook;
    });
}

function getSameBook(array) {
    console.log("getSameBook", array);
    let promiseArr = [];
    for (var i = 0; i < array.length; i++) {
        console.log("array[i]", array[i]);
        promiseArr.push(ajaxCalls(array[i]));
    }
    return Promise.all(promiseArr);
}

function deleteBook(bookId) {
    $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/book/${bookId}.json`,
        method: "DELETE"
    }).done((data) => {
        return data;
    });
}

function addBook(bookObj) {
    console.log("addBook", bookObj);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/book.json`,
        type: 'POST',
        data: JSON.stringify(bookObj),
        dataType: 'json'
    }).done((bookID) => {
        return bookID;
    });
}
function addUserBook(bookObj) {
    console.log("addBook", bookObj);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/user.json`,
        type: 'POST',
        data: JSON.stringify(bookObj),
        dataType: 'json'
    }).done((bookObj) => {
        console.log("use book obj", bookObj);
        return bookObj;
    });
}


function editBook(bookObj, bookId) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/book/${bookId}.json`,
        type: 'PUT',
        data: JSON.stringify(bookObj)
    }).done((data) => {
        return data;
    });
}

module.exports = {
    getBook,
    getLibBook,
    getUserBook,
    ajaxCalls,
    addBook,
    addUserBook,
    getSameBook,
    deleteBook,
    editBook
};












