"use strict";
// console.log("i configarate");


let firebase = require("firebase/app"),
    apikeys = require("./api"),
    fData = apikeys.getKey();
// console.log(fData);


require("firebase/auth");
require("firebase/database");

var config = {


    apiKey: fData.apiKey,
    authDomain: fData.authDomain,
    databaseURL: fData.databaseURL,
    storageBucket: fData.storageBucket

};


firebase.initializeApp(config);

firebase.getFBsettings = () => {
    // console.log("getFBsettings", config);
    return config;
};
// console.log("eyesus yegeba sew");



module.exports = firebase;