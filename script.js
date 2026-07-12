// ===============================
// Website Open Tracking
// ===============================

window.addEventListener("load", () => {

    fetch("/api/opened", {
        method: "GET",
        cache: "no-store"
    })
    .then(response => response.json())
    .then(data => {

        console.log("Open event sent ❤️");

    })
    .catch(error => {

        console.log(
            "Open tracking failed:",
            error
        );

    });

});




// ===============================
// Open Story Button
// ===============================

function openStory(){

    document
    .getElementById("story")
    .scrollIntoView({
        behavior:"smooth"
    });

}




// ===============================
// Not Yet Button
// ===============================

const noButton = document.getElementById("no");

let moveCount = 0;


if(noButton){

    noButton.addEventListener("mouseover",()=>{


        moveCount++;


        if(moveCount < 5){

            noButton.style.position = "fixed";

            noButton.style.left =
            Math.random()*80 + "vw";


            noButton.style.top =
            Math.random()*80 + "vh";


        }
        else{

            noButton.innerHTML =
            "Okay 🥺";


            noButton.style.position =
            "relative";

        }


    });

}




// ===============================
// YES Button
// ===============================


const yesButton =
document.getElementById("yes");



if(yesButton){

    yesButton.addEventListener("click",()=>{


        fetch("/api/yes", {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify({

                clicked:true

            })

        })

        .then(response=>response.json())

        .then(data=>{

            console.log(
                "YES event sent ❤️"
            );

        })

        .catch(error=>{

            console.log(
                "YES tracking failed:",
                error
            );

        });



        document
        .getElementById("question")
        .style.display="none";


        document
        .getElementById("success")
        .style.display="flex";


    });

}
