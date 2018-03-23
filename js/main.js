"use strict";
console.log("my mainjs");

//======================= REQUIRED STAFFS============================//


let $ = require('jquery'),
    firebase = require("./config"),
    user = require("./user"),
    books = require("./books-interaction"),
    fapi = require("./api"),
    search = require("./search"),
    interaction = require("./user-interaction"),
    booksDom = require("./booksDom");


///==================USER LOGIN LOGOUT STARTS====================//


$("#login").click(function () {
    // console.log("user clicked login");
    user.googleLogIn()
        .then((result) => {
            // console.log("UID result from login: ", result.user.uid);
            user.setUser(result.user.uid);
            $("#login").addClass("is-hidden");
            $("#userPic").removeClass("d-none").html(`<img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle">`);
            console.log("login complete!");
            $("#logout").removeClass("is-hidden");
            user.checkUserFB(result.user.uid);
            loadBooksToDOM();
            sendToFirebase();
        });
});

$("#logout").click(() => {
    console.log("main.logout clicked");
    user.logOut();
    $("#login").removeClass("is-hidden");
    $("#logout").addClass("is-hidden");
});

$("#viewBook").click(() => {
    console.log("i want to see");
    loadBooksToDOM();
    sendToFirebase();
});

function createUserObj(a) {
    let userObj = {
        name: '',
        email: '',
        uid: user.getUser()
    };
    console.log("userObj", userObj);
    return userObj;
}
function sendToFirebase() {
    let userBuild = createUserObj();
    interaction.addUser(userBuild);
    console.log("sent to on main firebase", userBuild);
}

// =============LOGIN AND LOGOUT ENDS======================//

//==================BOOKS start======================//
function loadBooksToDOM() {
    // console.log("load some books is on progress,");
    let currentUser = user.getUser(); //add once we have login
    console.log("currentUser is loading books", currentUser);
    books.getbooks(currentUser)
        .then((bookData) => {
            console.log("got bookdata", bookData);
            booksDom.makeBookList(bookData);
        });
}

function buildBookObj() {
    let bookObj = {
        title: $("#form--title").val(),
        author: $("#form--author").val(),
        dueDate: $("#form--dueDate").val(),
        image: $("#form--image").val(),
        place: $("#form--place").val(),
        read: $("form-read").val(),
        type: $("form-read").val(),
        description: $("form-description").val(),

        uid: user.getUser() // include uid to the object only if a user is logged in.
    };
    return bookObj;
}

// Load the new book form
$("#add-book").click(function () {
    console.log("get your book");
    var bookForm = booksDom.bookForm()
        .then((bookForm) => {
            $(".uiContainer--wrapper").html(bookForm);
        });
});

//==================BOOKS ENDS======================//