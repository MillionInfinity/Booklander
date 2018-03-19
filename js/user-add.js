"use strict";

let firebase = require("./config"),
        user = require("./user"),
           $ = require('jquery');
// ADD COMMANDER HU HU..//




function buildUserObj(UID) {
    let userObj = {
        // email: .email,
        // fullName: .value,
        name: "",
        uid: user.getUser()
    };
    return userObj;
}

module.exports = { buildUserObj };