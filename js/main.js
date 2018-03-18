"use strict";
console.log("my mainjs");
let $ = require('jquery'),
    config = require("./config"),
    user = require("./user"),
    books = require("./books"),
    fapi = require("./api"),
    search = require("./search");


function createUserObj(a) {
    let userObj = {
        name: '',
        location: '',
        uid: user.getUser()
    };
    console.log("userObjMilion", userObj);
    return userObj;
}
function buildUserObj(UID) {
    let userInfo = {
        //    email: user.email,
        //    fullName: user.value,
        zipCode: "",
        uid: user.getUser()

    };
    console.log("userInfo", userInfo);
    console.log("i cant figureout");
    return userInfo;
}


//login//
$(document).on("click", "#logout", () => {
    // console.log("logout clicked");
    user.googleLogOut();
    $("#userPic").addClass("d-none");
    $("#login").removeClass("d-none");
    $("#logout").addClass("d-none");
    $("#secondaryLogin").removeClass("d-none");
});

$(document).on("click", "#secondaryLogin", () => {
    // console.log("user clicked login");
    user.googleLogIn()
        .then((result) => {
            console.log("UID result from login: ", result.user.uid);
            user.setUser(result.user.uid);
            $("#secondaryLogin").addClass("d-none");
            $("#login").addClass("d-none");
            $("#logout").removeClass("d-none");
            $("#userPic").removeClass("d-none").html(`<img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle">`);
            console.log("login complete!");
            sendToFirebase();
        });
});


function sendToFirebase() {
    let userBuild = createUserObj();
    user.addUser(userBuild);
}    
