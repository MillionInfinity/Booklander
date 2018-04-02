"use strict";
console.log("my mainjs");
let $ = require('jquery'),
    firebase= require("./config"),
    user = require("./user"),
    books = require("./books"),
    fapi = require("./api"),
    search= require("./search"),
    xhr= require("./fbook"),
    DOMbuild=require("./user-add"),
    interaction=require("./user-interaction");

<<<<<<< HEAD
function createUserObj(a) {
    let userObj = {
        name: '',
=======
//======================= REQUIRED STAFFS============================//


let $ = require('jquery'),
    firebase = require("./config"),
    user = require("./user"),
    books = require("./books-interaction"),
    fapi = require("./api"),
    search = require("./search"),
    interaction = require("./user-interaction"),
    booksDom = require("./booksDom"),
    eventBooks= require("./eventBooks"),
    meg=require("./meg"),
    alarm = require("./alarm");


///==================USER LOGIN LOGOUT STARTS====================//


$("#login").click(function () {

    user.googleLogIn()
        .then((result) => {
         
            user.setUser(result.user.uid);
            $("#login").addClass("is-hidden");
            $("#userPic").removeClass("d-none").html(`<img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle" style.width='80px'>`);
            console.log("login complete!");
            $("#logout").removeClass("is-hidden");
            user.checkUserFB(result.user.uid);
            sendToFirebase();
        });
});

$("#logout").click(() => {
    console.log("main.logout clicked");
    user.logOut();
    $("#login").removeClass("is-hidden");
    $("#logout").addClass("is-hidden");
});

// $("#add-book").click(() => {
//     console.log("i want to see");
//     loadBooksToDOM();
//     sendToFirebase();
// });

function createUserObj(a) {
    let userObj = {
        name:'',
>>>>>>> ca82b927948b826a526c86db4d056b04850245b8
        email: '',
        uid: user.getUser()
    };
    console.log("userObj", userObj);
    return userObj;
}
<<<<<<< HEAD
//login//
$("#login").click(function () {
    console.log("clicked auth");
    user.googleLogIn()
        .then((result) => {
            user.setUser(result.user.uid);
            $("#login");
            $("#userPic").removeClass("d-none").html(`<img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle" width="50">`);
            // console.log("login complete!");
            sendToFirebase();
        });
});
function sendToFirebase() {
    let userBuild = createUserObj();

    interaction.addUser(userBuild);
}    
=======
function sendToFirebase() {
    let userBuild = createUserObj();
    interaction.addUser(userBuild);
    console.log("my user is saved in firebase", userBuild);
}
// home page

// =============LOGIN AND LOGOUT ENDS======================//

>>>>>>> ca82b927948b826a526c86db4d056b04850245b8
