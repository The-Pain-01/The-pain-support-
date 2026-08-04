/* ==================================
   THE PAIN SUPPORT SCRIPT
   ================================== */


let selectedReason = "";

let selectedType = "";





// ================================
// OUVRIR / FERMER MENU
// ================================

function toggleReason(id){


    const menu = document.getElementById(id);


    if(!menu) return;



    if(menu.style.display === "block"){


        menu.style.display = "none";


    }else{


        menu.style.display = "block";


    }


}







// ================================
// CHOIX REASON / SCRIPT
// ================================

function selectReason(value,type){



    selectedReason = value;

    selectedType = type;





    const display = document.getElementById("selected-reason");



    if(display){



        display.innerHTML = value;



    }






    if(type === "ban"){


        const menu = document.getElementById("ban-reasons");


        if(menu){

            menu.style.display = "none";

        }


    }






    if(type === "unban"){


        const menu = document.getElementById("script-list");


        if(menu){

            menu.style.display = "none";

        }


    }





    updateMessage(type);



}







// ================================
// MESSAGE AUTOMATIQUE
// ================================

function updateMessage(type){



    let number = "";



    if(type === "ban"){



        const input = document.getElementById("ban-number");


        if(input){

            number = input.value;

        }





        const box = document.getElementById("ban-message");



        if(!box) return;






        if(selectedReason === "Other"){



            box.value = "";

            return;


        }






        if(

            MESSAGES.ban[selectedReason]

        ){



            box.value =

            MESSAGES.ban[selectedReason]

            .replace("{number}",number);



        }



    }








    if(type === "unban"){



        const input = document.getElementById("unban-number");



        if(input){

            number = input.value;

        }






        const box = document.getElementById("unban-message");



        if(!box) return;







        if(

            MESSAGES.unban[selectedReason]

        ){



            box.value =

            MESSAGES.unban[selectedReason]

            .replace("{number}",number);



        }



    }



}









// ================================
// SUJET EMAIL
// ================================

function getSubject(type){



    if(type === "ban"){


        return "WhatsApp Report - " + selectedReason;


    }






    if(type === "unban"){


        return "WhatsApp Account Review - " + selectedReason;


    }





    return "WhatsApp Support";



}









// ================================
// ENVOI EMAIL
// ================================

function sendEmail(type){



    let number = "";

    let message = "";





    if(type === "ban"){



        number = document.getElementById("ban-number").value;



        message = document.getElementById("ban-message").value;



    }








    if(type === "unban"){



        number = document.getElementById("unban-number").value;



        message = document.getElementById("unban-message").value;



    }







    if(number.trim() === ""){


        alert("Enter your WhatsApp number");


        return;


    }






    const subject = encodeURIComponent(

        getSubject(type)

    );





    const body = encodeURIComponent(message);







    window.location.href =


    "mailto:" +

    CONFIG.supportContacts.join(",") +

    "?subject=" +

    subject +

    "&body=" +

    body;



}