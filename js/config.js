"use strict";
console.log("i configarate");

let firebase = require("firebase/app"),
    apikeys = require("./api"),
    fData = apikeys.myKey();
    // fData=apikeys();
    console.log(fData);
    
require("firebase/auth");
require("firebase/database");

var config={
apiKey:fData.apiKey,
authDomain:fData.authDomain,
 dataBaseURL: fData.databaseURL
};

firebase.initializeApp(config);
firebase.myConfig = () => {
    console.log ("myConfig",config);
      return config;
};
// console.log("this is",config);

module.exports= firebase;
