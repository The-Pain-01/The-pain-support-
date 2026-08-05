/* ==================================
   THE PAIN SUPPORT SCRIPT
   FINAL PREMIUM VERSION
   ================================== */

let selectedReason = "";
let selectedScript = "";
let currentType = "";


/* ================================
PAGE ACCESS PROTECTION
================================ */

function checkAccess(){

if(sessionStorage.getItem("authorized") !== "true"){

window.location.href="index.html";

}

}


/* ================================
DROPDOWN SYSTEM
================================ */

function toggleReason(id){

const menu = document.getElementById(id);

if(!menu) return;

menu.style.display =
menu.style.display === "block"
? "none"
: "block";

}


/* ================================
BAN REASON
================================ */

function selectReason(reason){

selectedReason = reason;

currentType = "ban";

selectedScript = "";

const display = document.getElementById("selected-reason");

if(display){

display.innerHTML = reason;

}


const menu = document.getElementById("ban-reasons");

if(menu){

menu.style.display="none";

}


const scriptButton = document.getElementById("script-button");


if(reason === "Other"){

if(scriptButton){

scriptButton.style.display="none";

}

const box=document.getElementById("ban-message");

if(box){

box.value="";

}

return;

}


if(scriptButton){

scriptButton.style.display="flex";

}

}


/* ================================
BAN SCRIPT
================================ */

function selectScript(script){

selectedScript = script;


const menu = document.getElementById("ban-scripts");

if(menu){

menu.style.display="none";

}


const display = document.getElementById("selected-reason");

if(display){

display.innerHTML =
selectedReason +
" - " +
script;

}


updateMessage("ban");

}


/* ================================
UNBAN TYPE
================================ */

function selectSuspension(type){

selectedReason = type;

currentType = "unban";

selectedScript = "";


const menu = document.getElementById("suspension-list");

if(menu){

menu.style.display="none";

}


const display = document.getElementById("selected-reason");

if(display){

display.innerHTML = type;

}


const scriptButton =
document.getElementById("unban-script-button");


if(type === "Other"){


if(scriptButton){

scriptButton.style.display="none";

}


const box=document.getElementById("unban-message");

if(box){

box.value="";

}

return;

}


if(scriptButton){

scriptButton.style.display="flex";

}

}


/* ================================
UNBAN SCRIPT
================================ */

function selectUnbanScript(script){

selectedScript = script;


const menu =
document.getElementById("unban-scripts");


if(menu){

menu.style.display="none";

}


const display =
document.getElementById("selected-reason");


if(display){

display.innerHTML =
selectedReason +
" - " +
script;

}


updateMessage("unban");

}


/* ================================
MESSAGE GENERATOR
================================ */

function updateMessage(type){

let number="";
let box=null;


if(type==="ban"){

const input=document.getElementById("ban-number");

box=document.getElementById("ban-message");


if(input){

number=input.value;

}


if(selectedReason==="Other") return;


if(
typeof MESSAGES !== "undefined" &&
MESSAGES.ban &&
MESSAGES.ban[selectedReason] &&
MESSAGES.ban[selectedReason][selectedScript]
){


box.value =
MESSAGES.ban[selectedReason][selectedScript]
.replaceAll("{number}",number);


}

}



if(type==="unban"){


const input=document.getElementById("unban-number");


box=document.getElementById("unban-message");


if(input){

number=input.value;

}


if(selectedReason==="Other") return;


if(
typeof MESSAGES !== "undefined" &&
MESSAGES.unban &&
MESSAGES.unban[selectedReason] &&
MESSAGES.unban[selectedReason][selectedScript]
){


box.value =
MESSAGES.unban[selectedReason][selectedScript]
.replaceAll("{number}",number);


}

}

}



/* ================================
EMAIL SYSTEM
================================ */


function getSubject(type){


if(type==="ban"){

return "WhatsApp Report - "
+ selectedReason
+ " - "
+ selectedScript;

}



if(type==="unban"){

return "WhatsApp Account Review - "
+ selectedReason
+ " - "
+ selectedScript;

}



return "WhatsApp Support";

}



function sendEmail(type){

let number="";
let message="";


if(type==="ban"){

number =
document.getElementById("ban-number").value;


message =
document.getElementById("ban-message").value;

}



if(type==="unban"){

number =
document.getElementById("unban-number").value;


message =
document.getElementById("unban-message").value;

}



if(number.trim()===""){

alert("Enter WhatsApp number");

return;

}



if(message.trim()===""){

alert("Select a script or write a message");

return;

}



const subject =
encodeURIComponent(getSubject(type));


const body =
encodeURIComponent(message);



window.location.href =

"mailto:" +

CONFIG.supportContacts.join(",") +

"?subject=" +

subject +

"&body=" +

body;


}



/* ================================
PASSWORD ACCESS
================================ */


function checkPassword(){


const input=document.getElementById("password");

const box=document.getElementById("password-box");

const message=document.getElementById("access-message");



if(!input) return;



if(input.value === CONFIG.password){


sessionStorage.setItem(
"authorized",
"true"
);



message.innerHTML =
"✅ Access Granted - Welcome to THE PAIN SUPPORT";


message.style.color="white";



setTimeout(()=>{

message.classList.add("success-animation");

},100);



setTimeout(()=>{

document.body.classList.add("fade-out");

},1500);



setTimeout(()=>{

window.location.href="home.html";

},2000);



}else{


if(box){

box.classList.remove("shake");

void box.offsetWidth;

box.classList.add("shake");

}


input.value="";


message.innerHTML =
"❌ Wrong Password - Access Denied";


message.style.color="white";


}


}