script.js

/* ==================================
   THE PAIN SUPPORT SCRIPT
   FINAL VERSION
   ================================== */


let selectedReason = "";

let selectedScript = "";

let currentType = "";




// ================================
// OPEN / CLOSE DROPDOWN
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

        menu.style.display = "none";

    }





    const scriptButton = document.getElementById("script-button");



    if(reason === "Other"){


        if(scriptButton){

            scriptButton.style.display = "none";

        }


        const box = document.getElementById("ban-message");


        if(box){

            box.value = "";

        }


        return;


    }




    if(scriptButton){

        scriptButton.style.display = "flex";

    }


}







// ================================
// BAN SCRIPT
// ================================

function selectScript(script){


    selectedScript = script;



    const menu = document.getElementById("ban-scripts");


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





    const scriptButton = document.getElementById("unban-script-button");





    if(type === "Other"){



        if(scriptButton){

            scriptButton.style.display = "none";

        }



        const box = document.getElementById("unban-message");



        if(box){

            box.value = "";

        }



        return;



    }





    if(scriptButton){

        scriptButton.style.display = "flex";

    }


}








// ================================
// UNBAN SCRIPT
// ================================

function selectUnbanScript(script){



    selectedScript = script;




    const menu = document.getElementById("unban-scripts");



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
// AUTO MESSAGE
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





        if(selectedReason === "Other") return;







        if(

            MESSAGES &&

            MESSAGES.ban &&

            MESSAGES.ban[selectedReason] &&

            MESSAGES.ban[selectedReason][selectedScript]

        ){



            box.value =

            MESSAGES.ban[selectedReason][selectedScript]

            .replaceAll("{number}", number);



        }



    }









    if(type === "unban"){



        const input = document.getElementById("unban-number");

        box = document.getElementById("unban-message");



        if(input){

            number = input.value;

        }





        if(selectedReason === "Other") return;







        if(

            MESSAGES &&

            MESSAGES.unban &&

            MESSAGES.unban[selectedReason] &&

            MESSAGES.unban[selectedReason][selectedScript]

        ){



            box.value =

            MESSAGES.unban[selectedReason][selectedScript]

            .replaceAll("{number}", number);



        }



    }



}








// ================================
// SUBJECT
// ================================

function getSubject(type){



    if(type === "ban"){



        return (

        "WhatsApp Report - "

        + selectedReason

        + " - "

        + selectedScript

        );


    }







    if(type === "unban"){



        return (

        "WhatsApp Account Review - "

        + selectedReason

        + " - "

        + selectedScript

        );


    }





    return "WhatsApp Support";


}









// ================================
// SEND EMAIL
// ================================

function sendEmail(type){



    let message = "";

    let number = "";





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







    if(message.trim() === ""){


        alert("Select a script or write a message");


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








// ================================
// LIVE NUMBER UPDATE
// ================================


document.addEventListener("input", function(e){



    if(e.target.id === "ban-number"){


        updateMessage("ban");


    }



    if(e.target.id === "unban-number"){


        updateMessage("unban");


    }



});