// Import the needed functions from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import{getDatabase,ref,set,get,child,update,remove}
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
 
//web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIZPJuyR_xWzdpMXilWA1VUL7mF2PEZQ8",
    authDomain: "mars-website-afaac.firebaseapp.com",
    databaseURL: "https://mars-website-afaac-default-rtdb.firebaseio.com",
    projectId: "mars-website-afaac",
    storageBucket: "mars-website-afaac.appspot.com",
    messagingSenderId: "1065376750927",
    appId: "1:1065376750927:web:d2ed3253b947918c05f93a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getDatabase();
//set variables 
var memName, memPhone, memDuration, memPackage

// Sets variables to the values entered into the corresponding ids in html
function dataPrep(){
    memName = document.getElementById('name').value;
    memPhone = document.getElementById('number').value;
    memDuration = document.getElementById('duration').value;
    memPackage = document.getElementById('package').value;
}

//inserts data for a member into the database
function InsertData(){
    //sets the reference paths in firebase to member/+memPhone
    set(ref(db,'member/'+ memPhone),{
        //set firebase data values to the variables from data prep
        memberName: memName, 
        memberPhone: memPhone,
        memberDuration: memDuration,
        memberPackage: memPackage
    })
    .then(()=>{
        alert('Trip Ordered'); //alert successful order
    })
    .catch((error)=>{
        alert('unsuccessful, error'+error); //alert if an error occurred.
    });
}

//When the submit button is clicked, dataPrep() and InsertData() runs
document.getElementById('submit').onclick = function(){
    dataPrep();
    InsertData();
}

