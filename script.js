// ================================
// Back4App Configuration
// ================================


// Replace these with your keys

Parse.initialize(
    "2dKeGdhUZo4lXLACkSrBmyhkm4BR4yqRA3FT9trx",
    "eQGefzQjGURXcVLOPCkyervAw8KXkHby0SC2yuRG"
);


Parse.serverURL =
"https://parseapi.back4app.com/";




// ================================
// Scroll button
// ================================

function scrollToStory(){

    document
    .getElementById("story")
    .scrollIntoView({
        behavior:"smooth"
    });

}





// ================================
// Scroll reveal animation
// ================================


const cards =
document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


    cards.forEach(card=>{


        let top =
        card.getBoundingClientRect().top;


        if(top < window.innerHeight - 100){

            card.classList.add("active");

        }


    });


});






// ================================
// Floating hearts
// ================================


function createHeart(){


    let heart =
    document.createElement("div");


    heart.innerHTML="❤️";


    heart.className="heart-float";


    heart.style.left =
    Math.random()*100+"vw";


    heart.style.fontSize =
    Math.random()*20+15+"px";



    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },6000);


}



setInterval(createHeart,500);







// ================================
// Not Yet button
// ================================


const no =
document.getElementById("no");


let moves = 0;



no.addEventListener("mouseover",()=>{


    moves++;


    if(moves < 6){


        no.style.position="fixed";


        no.style.left =
        Math.random()*80+"vw";


        no.style.top =
        Math.random()*80+"vh";


    }


    else{


        no.innerHTML =
        "Okay... 🥺";


        no.style.position="relative";


    }


});







// ================================
// YES Button
// ================================


const yes =
document.getElementById("yes");



yes.addEventListener("click", async ()=>{


    // Save response to Back4App

    const ApologyResponse =
    Parse.Object.extend("ApologyResponse");


    const response =
    new ApologyResponse();



    response.set(
        "answer",
        "yes"
    );



    try{


        await response.save();


        console.log(
            "Saved ❤️"
        );


    }

    catch(error){


        console.log(
            "Save failed:",
            error.message
        );


    }





    document
    .querySelector(".question")
    .style.display="none";



    document
    .getElementById("success")
    .style.display="flex";



    confetti();


});







// ================================
// Heart Confetti
// ================================


function confetti(){


    for(let i=0;i<100;i++){


        let heart =
        document.createElement("div");


        heart.innerHTML="❤️";


        heart.style.position="fixed";


        heart.style.left =
        Math.random()*100+"vw";


        heart.style.top="-20px";


        heart.style.fontSize =
        Math.random()*25+10+"px";


        heart.style.transition="3s";


        document.body.appendChild(heart);



        setTimeout(()=>{


            heart.style.top =
            "100vh";


            heart.style.transform =
            `rotate(${Math.random()*720}deg)`;


        },100);



        setTimeout(()=>{


            heart.remove();


        },4000);



    }


}
