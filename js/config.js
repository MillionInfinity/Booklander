"use strict";
console.log("i configarate");
<<<<<<< HEAD
let firebase = require("firebase/app"),
    fb = require("./api"),
    fbData = fb.getKey();
// console.log(fb);
=======

let firebase = require("firebase/app"),
    apikeys = require("./api"),
    fData = apikeys.getKey();
// console.log(fData);

>>>>>>> ca82b927948b826a526c86db4d056b04850245b8

require("firebase/auth");
require("firebase/database");

var config = {
<<<<<<< HEAD
    apiKey: fbData.apiKey,
    authDomain: fbData.authDomain,
    databaseURL: fbData.databaseURL
=======

    apiKey: fData.apiKey,
    authDomain: fData.authDomain,
    databaseURL: fData.databaseURL,
    storageBucket: fData.storageBucket
>>>>>>> ca82b927948b826a526c86db4d056b04850245b8
};


firebase.initializeApp(config);

firebase.getFBsettings = () => {
    console.log("getFBsettings", config);
    return config;
};
console.log("eyesus yegeba sew");


<<<<<<< HEAD
=======

>>>>>>> ca82b927948b826a526c86db4d056b04850245b8
module.exports = firebase;