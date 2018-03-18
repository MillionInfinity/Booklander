"use strict";
console.log("iam user");
 
        let $ = require('jquery'),
            firebase = require("./config");
    
        var currentUser = null;
        let provider = new firebase.auth.GoogleAuthProvider();
        // var user = firebase.auth().currentUser;


    





                
        
        function googleLogIn() {
            return firebase.auth().signInWithPopup(provider);
        }

        function logOut() {
            return firebase.auth().signOut();
        }

        function getUser() {
            return currentUser;
        }
        
        function setUser(val) {
            currentUser = val;
        }

       
firebase.auth().onAuthStateChanged(function (user) {  //.onAuthStateChanged is a firebase method from firebase
    console.log("onAuthStateChanged", user);
    if (user) {
        currentUser = user.uid;
    } else {
        currentUser = null;
        console.log("you need to sign in");
    }
});

function addUser(Obj) {
    console.log("add user to firebase", Obj);
    return $.ajax({
        url: `${firebase.myConfig().databaseURL}/userInfo.json`,
        type: 'POST',
        data: JSON.stringify(Obj),
        dataType: 'json'

    }).done((userID) => {
        return userID;
    });
}

     module.exports = { googleLogIn, logOut, setUser, getUser, addUser};