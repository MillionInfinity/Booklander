"use strict";
console.log("iam user");
 //VARIABLES AND AS ASSUMPTIONS // 
        let $ = require('jquery'),
            firebase = require("./config");
    
        var currentUser = {
            uid:null
        };
        let provider = new firebase.auth.GoogleAuthProvider();
        var user = firebase.auth().currentUser;
// GOOGLE USERS // 
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

      //Get the currently signed-in user
firebase.auth().onAuthStateChanged((user)=> {  //.onAuthStateChanged is a firebase method from firebase
    console.log("onAuthStateChanged", user);
    if (user) {
        currentUser =user.uid;
        console.log("current user Logged in?", currentUser);
    } else {
        currentUser = null;
        console.log("hmmmm i am  sorry, no user in",currentUser);
    }
});
//////////////////////////
//CREATING A USER INFORMAION//
var name, email, photoUrl, uid, emailVerified;
/////////////////////////
function buildUser(UID) {
    let userObj = {
        // email: .email,
        // fullName: .value,
        name : user.displayName,
        email : user.email,
        photoUrl : user.photoURL,
        emailVerified : user.emailVerified,
        // uid = user.uid,
        uid:getUser()
    };
    return userObj;
}
//ADDING USER INF. TO FIREBASE 
function addUser(Obj) {
    // console.log("add user to firebase", Obj);
    return $.ajax({
        url: `${firebase.myConfig().databaseURL}/userInfo.json`,
        type: 'POST',
        data: JSON.stringify(Obj),
        dataType: 'json'

    }).done((userID) => {
        return userID;
    });
}

module.exports = { googleLogIn, logOut, setUser, getUser, addUser, buildUser};