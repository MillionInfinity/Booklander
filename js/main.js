"use strict";
console.log("my mainjs");
let $ = require('jquery'),
    config = require("./config"),
    user = require("./user"),
    books = require("./books"),
    fapi = require("./api"),
    search= require("./search");


function createUserObj(a) {
    let userObj = {
        name: '',
        location: '',
        uid: user.getUser()
    };
    console.log("userObjMilion", userObj);
    return userObj;
}

//login//
$("#login").click(function (){
    console.log("user clicked login");
    user.googleLogIn()
        .then((result) => {
            console.log("UID result from login: ", result.user.uid);
            user.setUser(result.user.uid);
            // $("#secondaryLogin").addClass("d-none");
            $("#login");
            $("#logout");
            $("#userPic").removeClass("d-none").html(`<img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle">`);
            // console.log("login complete!");
            sendToFirebase();
        });
        });
function sendToFirebase() {
    let userBuild = createUserObj();
    user.addUser(userBuild);
}  