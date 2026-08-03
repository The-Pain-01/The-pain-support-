/* ==================================
   THE PAIN SUPPORT SCRIPT
   ================================== */


let selectedReason = "";




// Ouvrir / fermer menu raison

function toggleReason(id){


    const menu = document.getElementById(id);


    if(menu.style.display === "block"){

        menu.style.display = "none";

    }

    else{

        menu.style.display = "block";

    }


}






// Choisir une raison

function selectReason(reason){


    selectedReason = reason;


    document.getElementById("selected-reason").innerHTML =

    "Selected : " + reason;



    document.getElementById("ban-reasons").style.display = "none";


}






// Envoyer vers Gmail

function sendEmail(type){



let number = "";

let message = "";





if(type === "ban"){


    number = document.getElementById(
        "ban-number"
    ).value;



    message = document.getElementById(
        "ban-message"
    ).value;



}





if(type === "unban"){


    number = document.getElementById(
        "unban-number"
    ).value;



    message = document.getElementById(
        "unban-message"
    ).value;



}






const subject = encodeURIComponent(

"WhatsApp Support Request"

);






const body = encodeURIComponent(

`Hello Support,

WhatsApp Number:

${number}


Reason:

${selectedReason}


Message:

${message}

`

);







window.location.href =

"mailto:" +

CONFIG.supportContacts.join(",") +

"?subject=" +

subject +

"&body=" +

body;



}