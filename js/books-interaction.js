 "use strict";
           console.log("book-interaction");
let $ = require('jquery'),
            firebase = require("./config"),
            aBook={},
            myBookArr=[];
        // console.log("firebase", firebase.getFBsettings().dataBaseURL);

function getBook() {
              return $.ajax({
            url: `${firebase.getFBsettings().dataBaseURL}/book.json`
            }).done((bookData) => {
            console.log("i can able to get all books without user", bookData);
               return bookData;
            });
}

function getAllTypeBook() {
            return $.ajax({
            url: `${firebase.getFBsettings().dataBaseURL}/book-type.json`
         }).done((bookData) => {
            console.log("i can able to get with its type", bookData);
            return bookData;
            });
}

function getUserBook(user) {
              return $.ajax({
            url: `${firebase.getFBsettings().dataBaseURL}/book.json?orderBy="uid"&equalTo="${user}"`
         }).done((bookData) => {
            console.log("get my user book", bookData);
               return bookData;
            }).fail((error) => {
               return error;
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


function addBook(bookObj) {
                console.log("addBook", bookObj);
                return $.ajax({
                    url: `${firebase.getFBsettings().dataBaseURL}/book.json`,
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
                url: `${firebase.getFBsettings().dataBaseURL}/user.json`,
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
                url: `${firebase.getFBsettings().dataBaseURL}/book/${bookId}.json`,
                type: 'PUT',
                data: JSON.stringify(bookObj)
             }).done((data) => {
                return data;
            });
        }

 module.exports = { getBook,
                    getAllTypeBook, 
                    getUserBook,
                    ajaxCalls, 
                    addBook, 
                    addUserBook,
                    getSameBook,
                    deleteBook,
                    editBook 
                };












