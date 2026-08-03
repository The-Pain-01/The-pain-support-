/* ==================================
   THE PAIN SUPPORT SCRIPT
   ================================== */


let selectedReason = "";




// Open BAN page

function openBan(){


    document.getElementById("home-menu")
    .classList.add("hidden");


    document.getElementById("ban-section")
    .classList.remove("hidden");


}





// Open UNBAN page

function openUnban(){


    document.getElementById("home-menu")
    .classList.add("hidden");


    document.getElementById("unban-section")
    .classList.remove("hidden");


}





// Back button

function goBack(){


    document.getElementById("ban-section")
    .classList.add("hidden");


    document.getElementById("unban-section")
    .classList.add("hidden");


    document.getElementById("home-menu")
    .classList.remove("hidden");


}





// Channel

function openChannel(){


    window.open(
        CONFIG.channel,
        "_blank"
    );


}






// Dropdown

function toggleReason(id){


    const menu =
    document.getElementById(id);



    if(menu.style.display==="block"){

        menu.style.display="none";

    }

    else{

        menu.style.display="block";

    }


}





function selectReason(reason){


    selectedReason = reason;


    document.getElementById(
        "selected-reason"
    ).innerHTML =
    "Selected : " + reason;



    document.getElementById(
        "ban-reasons"
    ).style.display="none";


}







// Open email

function sendEmail(type){



let number;
let message;



if(type==="ban"){


    number =
    document.getElementById(
        "ban-number"
    ).value;



    message =
    document.getElementById(
        "ban-message"
    ).value;


}



else{


    number =
    document.getElementById(
        "unban-number"
    ).value;



    message =
    document.getElementById(
        "unban-message"
    ).value;


}






const subject =
encodeURIComponent(
"WhatsApp Support Request"
);




const body =
encodeURIComponent(

`Hello WhatsApp Support,

Number:
${number}

Reason:
${selectedReason}

Message:

${message}

`

);






window.location.href =

"mailto:"+

CONFIG.supportEmail+

"?subject="+

subject+

"&body="+

body;



}