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

function createUserObj(a) {
    let userObj = {
        name: '',
        email: '',
        uid: user.getUser()
    };
    console.log("userObj", userObj);
    return userObj;
}
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
