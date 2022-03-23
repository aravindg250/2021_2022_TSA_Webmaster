// Import the functions needed from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import{getDatabase,ref,get,child}
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

//Set a variable 
var memPhone

//Set variable to the values enetered into the corresponding ids in html
function dataPrep(){
    memPhone = document.getElementById('number4').value;
}
//selects data for a member to display in table
function SelectData(){
    //sets variables to corresponding table cells in the html file
    const dbref = ref(db);
    const name = document.getElementById('memName'); 
    const phone = document.getElementById('memPhone');
    const duration = document.getElementById('memDuration');
    const packageTrip = document.getElementById('memPackage');

    //take a snapshot of the firebase where the path, member /+memPhone, exists. 
    get(child(dbref,'member/'+ memPhone)).then((snapshot)=>{
        //if the path exists, then execute the code
        if(snapshot.exists()){
            //sets the table cells to the corresponding content in the firebase
            name.textContent = snapshot.val().memberName;
            phone.textContent= snapshot.val().memberPhone;
            duration.textContent = snapshot.val().memberDuration;
            packageTrip.textContent = snapshot.val().memberPackage;
        }
        else{
            alert('No trip found') //alerts user if there is no such trip in database
        }
    })
    .catch((error)=>{
        alert('unsuccessful,error'+error);// alerts user if there is an error while executing
    })
}
//when the select button is pressed, run dataPrep() and then SelectData() functions
document.getElementById('select').onclick=function(){
    dataPrep();
    SelectData()
} 


