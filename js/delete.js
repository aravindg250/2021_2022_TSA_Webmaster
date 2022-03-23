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

//create variables
var memPhone

//set memPhone variable to its corresponding input id
function dataPrep(){
    memPhone = document.getElementById('number2').value;
}

//deletes data of a member from firebase
function DeleteData(){
    remove(ref(db,'member/'+memPhone)) //removes the path member/+memPhone from the firebase
    .then(()=>{
        alert('Trip Cancelled'); //alert that the trip was canceled
    })
    .catch((error)=>{
        alert('unsuccessful,error'+error); //alerts that an error occured
    })
} 
//When the cancel button is clicked, dataPrep() and DeleteData() runs
document.getElementById('delete').onclick = function(){
    dataPrep();
    DeleteData();
}








