"use strict";
console.log("i configerate");

let firebase = require("firebase/app"),
    apikeys = require("./api"),
    fData = apikeys.getKey();
    console.log(fData);