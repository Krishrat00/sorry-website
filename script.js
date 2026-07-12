console.log("SCRIPT LOADED ❤️");



// Website opened tracking

window.addEventListener(
"load",
()=>{


    fetch("/api/opened",{

        method:"GET",

        cache:"no-store"

    })

    .then(response=>response.json())

    .then(data=>{


        console.log(
            "OPEN EVENT SENT"
        );


    })

    .catch(error=>{


        console.log(
            "OPEN ERROR:",
            error
        );


    });


});






// Open story button

function openStory(){


    document
    .getElementById("story")
    .scrollIntoView({

        behavior:"smooth"

    });


}






// No button movement

const noButton =
document.getElementById("no");


let moves = 0;


if(noButton){


noButton.addEventListener(
"mouseover",
()=>{


moves++;


if(moves < 5){


noButton.style.position="fixed";


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







// YES button


const yesButton =
document.getElementById("yes");



if(yesButton){


yesButton.addEventListener(
"click",
()=>{


    fetch("/api/yes",{

        method:"POST",

        headers:{

            "Content-Type":
            "application/json"

        },

        body:JSON.stringify({

            clicked:true

        })

    })

    .then(res=>res.json())

    .then(()=>{


        console.log(
            "YES EVENT SENT ❤️"
        );


    })

    .catch(err=>{


        console.log(
            "YES ERROR:",
            err
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
