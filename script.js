console.log("❤️ Script loaded");


// Website opened tracking

window.addEventListener("load", () => {


    fetch("/api/opened", {

        method:"GET",

        cache:"no-store"

    })

    .then(res => res.json())

    .then(data => {

        console.log(
            "Website open tracked ❤️"
        );

    })

    .catch(err => {

        console.log(
            "Open tracking error:",
            err
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

const no =
document.getElementById("no");


let count = 0;


if(no){


no.addEventListener("mouseover",()=>{


    count++;


    if(count <= 5){


        no.style.position="fixed";


        no.style.left =
        Math.random()*80+"vw";


        no.style.top =
        Math.random()*80+"vh";


    }

    else{


        no.innerHTML =
        "Okay 🥺";


        no.style.position="relative";

    }


});


}







// YES button

const yes =
document.getElementById("yes");


if(yes){


yes.addEventListener("click",()=>{


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
            "YES tracked ❤️"
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
