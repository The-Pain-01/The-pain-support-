/* ==================================
   THE PAIN SUPPORT SCRIPT
   ================================== */


let selectedReason = "";



// ================================
// DROPDOWN REASON
// ================================

function toggleReason(id) {

    const menu = document.getElementById(id);

    if (!menu) return;


    if (menu.style.display === "block") {

        menu.style.display = "none";

    } else {

        menu.style.display = "block";

    }

}




// ================================
// SELECT REASON
// ================================

function selectReason(reason) {


    selectedReason = reason;


    const display = document.getElementById("selected-reason");


    if(display){

        display.innerHTML = "Selected : " + reason;

    }



    const menu = document.getElementById("ban-reasons");


    if(menu){

        menu.style.display = "none";

    }


}






// ================================
// SUBJECT AUTOMATIQUE
// ================================

function getSubject(type) {


    if(type === "ban"){


        switch(selectedReason){


            case "Spam":

                return "WhatsApp Spam Report - Support Request";


            case "Scam":

                return "WhatsApp Scam Report - Support Request";


            case "Illegal Content":

                return "WhatsApp Safety Report - Support Request";


            case "Impersonation":

                return "WhatsApp Impersonation Report - Support Request";


            case "Other":

                return "WhatsApp Account Report - Support Request";


            default:

                return "WhatsApp Account Suspension Review";


        }


    }




    if(type === "unban"){


        return "WhatsApp Account Unban Request";


    }



    return "WhatsApp Support Request";


}






// ================================
// ENVOI EMAIL
// ================================

function sendEmail(type){


    let number = "";

    let message = "";




    if(type === "ban"){


        const numberInput = document.getElementById("ban-number");

        const messageInput = document.getElementById("ban-message");


        if(numberInput){

            number = numberInput.value;

        }


        if(messageInput){

            message = messageInput.value;

        }


    }






    if(type === "unban"){


        const numberInput = document.getElementById("unban-number");

        const messageInput = document.getElementById("unban-message");


        if(numberInput){

            number = numberInput.value;

        }


        if(messageInput){

            message = messageInput.value;

        }


    }





    if(number.trim() === ""){

        alert("Please enter your WhatsApp number");

        return;

    }






    const subject = encodeURIComponent(

        getSubject(type)

    );





    const body = encodeURIComponent(

`Hello WhatsApp Support,

WhatsApp Number:

${number}


Category:

${selectedReason || "Not selected"}


Message:

${message}


Thank you.`

    );






    window.location.href =

    "mailto:" +

    CONFIG.supportContacts.join(",") +

    "?subject=" +

    subject +

    "&body=" +

    body;



}