// Import the functions needed from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import{getDatabase,ref,set,get,child,update,remove}
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
 
//Web app's Firebase configuration
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

//Set a database variable associated with firebase database
const db = getDatabase();

//Sets variables
var memName, memPhone, memDuration, memPackage
 
//Set variable to the values enetered into the corresponding ids in html
function dataPrep(){
    memName = document.getElementById('name3').value;
    memPhone = document.getElementById('number3').value;
    memDuration = document.getElementById('duration3').value;
    memPackage = document.getElementById('package3').value;
}

//updates data for a member to display in table
function UpdateData(){
    update(ref(db,'member/'+memPhone),{
        //sets values in database to the entered values by the user
        memberName: memName,
        memberDuration: memDuration,
        memberPackage: memPackage
    })
 
    .then(()=>{
        alert('Trip info updated successfully'); //alerts user if there trip is updated successfully
    })
    .catch((error)=>{
        alert('unsuccessful,error'+error);// alerts user if there is an error while executing
    });
}
//when the update button is pressed, run dataPrep() and then SelectData() functions
document.getElementById('update').onclick = function(){
    dataPrep();
    UpdateData();
}
 

