/* ==================================
   THE PAIN SUPPORT SCRIPT
   ================================== */


let selectedReason = "";





// Ouvrir / fermer le menu Reason

function toggleReason(id) {

    const menu = document.getElementById(id);

    if (menu.style.display === "block") {

        menu.style.display = "none";

    } else {

        menu.style.display = "block";

    }

}







// Sélectionner une raison

function selectReason(reason) {


    selectedReason = reason;


    document.getElementById("selected-reason").innerHTML =
        "Selected : " + reason;



    document.getElementById("ban-reasons").style.display = "none";


}








// Créer l'objet automatiquement

function getSubject(type) {


    if (type === "ban") {


        switch (selectedReason) {


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

                return "WhatsApp Support Request";


        }



    }





    if (type === "unban") {


        return "WhatsApp Account Review Request";

    }



}








// Envoyer vers l'application mail

function sendEmail(type) {



    let number = "";

    let message = "";





    if (type === "ban") {


        number =
        document.getElementById("ban-number").value;



        message =
        document.getElementById("ban-message").value;



    }





    if (type === "unban") {


        number =
        document.getElementById("unban-number").value;



        message =
        document.getElementById("unban-message").value;



    }





    const subject = encodeURIComponent(
        getSubject(type)
    );





    const body = encodeURIComponent(

`Hello Support,

WhatsApp Number:

${number}


Category:

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