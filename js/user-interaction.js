"use strict";

// console.log("user-interaction");
let $ = require("jquery"),
    user = require("./user"),
    firebase = require("./config"),
    provider = new firebase.auth.GoogleAuthProvider();
//DO YOU HAVE AN ID?



function getFBDetails(user) {
    // console.log("user", user);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/user.json?orderBy="uid"&equalTo="${user}"`
    }).done((resolve) => {
        return resolve;
    }).fail((error) => {
        return error;
    });
}

//FIREBASE KNOCK KNOCK //
function addUser(userObj) {

    // console.log("add user tofirebase", userObj);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/user.json`,
        type: 'POST',
        data: JSON.stringify(userObj),
        dataType: 'json'
    }).done((userID) => {
        // console.log("userID line-33",userID);
        return userID;
    });
}

function updateUserFB(userObj) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/user/${userObj.userID}.json`,
        type: 'PUT',
        data: JSON.stringify(userObj),
        dataType: 'json'
    }).done((userID) => {
        return userID;
    });
}
function createUser(userObj) {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            // console.log("error:", errorCode, errorMessage);
        });
}
function loginUser(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            // console.log("error:", errorCode, errorMessage);
        });
}




module.exports = { addUser, getFBDetails, updateUserFB, createUser, loginUser };

