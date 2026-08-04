/* ==================================
   THE PAIN SUPPORT SCRIPT
   ================================== */


let selectedReason = "";

let selectedScript = "";

let currentType = "";






// ================================
// OPEN / CLOSE MENUS
// ================================

function toggleReason(id){


    const menu = document.getElementById(id);


    if(!menu) return;



    menu.style.display =

    menu.style.display === "block"

    ? "none"

    : "block";


}







// ================================
// BAN REASON
// ================================

function selectReason(reason,type){



    selectedReason = reason;

    currentType = type;

    selectedScript = "";






    const display = document.getElementById("selected-reason");



    if(display){

        display.innerHTML = reason;

    }







    const reasonMenu = document.getElementById("ban-reasons");


    if(reasonMenu){

        reasonMenu.style.display = "none";

    }







    const scriptBox = document.getElementById("script-container");





    if(type === "ban"){



        if(reason === "Other"){



            if(scriptBox){

                scriptBox.style.display = "none";

            }


            document.getElementById("ban-message").value = "";


        }else{



            if(scriptBox){

                scriptBox.style.display = "block";

            }



        }



    }




}







// ================================
// BAN SCRIPT
// ================================

function selectScript(script){



    selectedScript = script;





    const menu = document.getElementById("script-list");



    if(menu){

        menu.style.display = "none";

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








// ================================
// UNBAN TYPE
// ================================

function selectSuspension(type){



    selectedReason = type;

    currentType = "unban";

    selectedScript = "";






    const menu = document.getElementById("suspension-list");



    if(menu){

        menu.style.display = "none";

    }







    const display = document.getElementById("selected-reason");



    if(display){

        display.innerHTML = type;

    }







    const scriptBox = document.getElementById("unban-script-container");





    if(type === "Other"){



        if(scriptBox){

            scriptBox.style.display = "none";

        }


        document.getElementById("unban-message").value = "";



    }else{



        if(scriptBox){

            scriptBox.style.display = "block";

        }



    }



}








// ================================
// UNBAN SCRIPT
// ================================

function selectUnbanScript(script){



    selectedScript = script;





    const menu = document.getElementById("unban-script-list");



    if(menu){

        menu.style.display = "none";

    }







    const display = document.getElementById("selected-reason");



    if(display){


        display.innerHTML =

        selectedReason +

        " - " +

        script;



    }






    updateMessage("unban");



}








// ================================
// GENERATE MESSAGE
// ================================

function updateMessage(type){



    let number = "";

    let box = "";







    if(type === "ban"){



        const input = document.getElementById("ban-number");

        box = document.getElementById("ban-message");



        if(input){

            number = input.value;

        }





        if(selectedReason === "Other"){


            box.value = "";

            return;


        }





        if(

        MESSAGES.ban[selectedReason]

        &&

        MESSAGES.ban[selectedReason][selectedScript]

        ){



            box.value =

            MESSAGES.ban[selectedReason][selectedScript]

            .replace("{number}",number);



        }



    }









    if(type === "unban"){



        const input = document.getElementById("unban-number");

        box = document.getElementById("unban-message");



        if(input){

            number = input.value;

        }







        if(selectedReason === "Other"){



            box.value = "";

            return;


        }







        if(

        MESSAGES.unban[selectedReason]

        &&

        MESSAGES.unban[selectedReason][selectedScript]

        ){



            box.value =

            MESSAGES.unban[selectedReason][selectedScript]

            .replace("{number}",number);



        }



    }




}









// ================================
// SUBJECT
// ================================

function getSubject(type){



    if(type === "ban"){


        return "WhatsApp Report - "

        + selectedReason

        + " - "

        + selectedScript;


    }






    if(type === "unban"){



        return "WhatsApp Account Review - "

        + selectedReason

        + " - "

        + selectedScript;


    }




    return "WhatsApp Support";



}








// ================================
// SEND EMAIL
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


        alert("Enter WhatsApp number");


        return;


    }







    const subject = encodeURIComponent(

        getSubject(type)

    );






    const body = encodeURIComponent(

        message

    );







    window.location.href =


    "mailto:" +

    CONFIG.supportContacts.join(",") +

    "?subject=" +

    subject +

    "&body=" +

    body;



}