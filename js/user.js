"use strict";

let $ = require('jquery'),
    firebase = require("./config"),
    books = require("./books-interaction"),
    fapi = require("./api"),
    interaction = require("./user-interaction"),
    provider = new firebase.auth.GoogleAuthProvider(),
    currentUser = {
        uid: null,
        displayName: null,
        email: null,
        bookId: null
    };

firebase.auth().onAuthStateChanged(function (user) {  //.onAuthStateChanged is a firebase method from firebase
    console.log("onAuthStateChanged", user);
    if (user) {
        currentUser = user.uid;
    } else {
        currentUser.uid = null;
        currentUser.displayName = null;
        currentUser.email = null;
        currentUser.bookId = null;

        console.log("NO USER LOGGED IN", currentUser);
    }
});

function getUser() {
    return currentUser;
}

function setUser(val) {
    currentUser = val;
}
function getUserObj() {
    return currentUser;
}


function setUserVars(obj) {
    console.log("user.setUserVars: obj", obj);
    return new Promise((resolve, reject) => {
        currentUser.displayName = obj.displayName ? obj.displayName : currentUser.displayName;
        currentUser.email = obj.email ? obj.email : currentUser.email;
        currentUser.fbID = obj.fbID ? obj.fbID : currentUser.fbID;
        currentUser.uid = obj.uid ? obj.uid : currentUser.uid;
        currentUser.book = obj.book ? obj.book : currentUser.book;
        resolve(currentUser);
    });
}
function showUser(obj) {
    let userDetails = getUserObj();
    console.log("user.showUser: userDetails:", userDetails);
}

function checkUserFB(uid) {
    interaction.getFBDetails(uid)
        .then((result) => {
            let data = Object.values(result);
            console.log("user: any data?", data.length);
            if (data.length === 0) {
                console.log("need to add this user to FB", data);
                interaction.addUser(makeUserObj(uid))
                    .then((result) => {
                        console.log("user: user added", uid, result.name);
                        let tmpUser = {
                            fbID: result.name,
                            uid: uid
                        };
                        return tmpUser;
                    }).then((tmpUser) => {
                        return setUserVars(tmpUser);
                    });
            } else {
                console.log("user: already a user", data);
                var key = Object.keys(result);
                data[0].fbID = key[0];
                setUserVars(data[0]);
            }
            $("#zip-container").removeClass("is-hidden");
        });

}

function makeUserObj(a) {
    let userObj = {
        uid: null,
        displayName: null,
        email: null,
        fbID:null
    };
    console.log("userObj", userObj);
    return userObj;
}

function googleLogIn() {
    return firebase.auth().signInWithPopup(provider);

}
function logOut() {
    return firebase.auth().signOut();
}





module.exports = {
    googleLogIn,
    logOut, setUser,
    getUser,
    makeUserObj, checkUserFB,
    showUser, setUserVars, getUserObj
};