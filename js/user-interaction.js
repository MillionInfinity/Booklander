"use strict";
let $=require("jquery"),
    user=require("./user-add"),
    firebase=require("./config");
//FIREB
function addUser(userObj) {
    console.log("add user to firebase", userObj);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/userInfo.json`,
        type: 'POST',
        data: JSON.stringify(userObj),
        dataType: 'json'
    }).done((userID) => {
        return userID;
    });
}


module.exports = { addUser };