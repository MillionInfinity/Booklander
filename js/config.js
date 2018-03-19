"use strict";
console.log("i configarate");
let firebase = require("firebase/app"),
    fb = require("./api"),
    fbData = fb.getKey();
// console.log(fb);

require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: fbData.apiKey,
    authDomain: fbData.authDomain,
    databaseURL: fbData.databaseURL
};


firebase.initializeApp(config);

firebase.getFBsettings = () => {
    console.log("getFBsettings", config);
    return config;
};
console.log("eyesus yegeba sew");


module.exports = firebase;