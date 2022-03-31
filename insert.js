// Import the needed functions from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import{getDatabase,ref,set,get,child,update,remove}
    from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
 
//web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCm7RN-R7coucvIjCT60kJkVzJxNNaYZ_Q",
    authDomain: "tsawebmaster-27e93.firebaseapp.com",
    projectId: "tsawebmaster-27e93",
    storageBucket: "tsawebmaster-27e93.appspot.com",
    messagingSenderId: "553626844807",
    appId: "1:553626844807:web:c2aa68a6eccf16c1310222"
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

