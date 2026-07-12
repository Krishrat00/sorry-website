console.log("SCRIPT LOADED ❤️");



// Website opened log

window.addEventListener("load",()=>{


fetch("/api/opened")

.then(res=>res.json())

.then(()=>{

console.log("OPEN TRACKED");

})

.catch(err=>{

console.log(err);

});


});





// Open My Heart button


const openButton =
document.getElementById("openHeart");


if(openButton){


openButton.addEventListener("click",()=>{


console.log("OPEN HEART CLICKED ❤️");


document
.getElementById("story")
.scrollIntoView({

behavior:"smooth"

});


});


}






// YES button


const yesButton =
document.getElementById("yes");



if(yesButton){


yesButton.addEventListener("click",()=>{


console.log("YES CLICKED ❤️");


// send log

fetch("/api/yes",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

clicked:true

})

});




// change screen


document
.getElementById("question")
.style.display="none";



document
.getElementById("success")
.style.display="flex";



});


}






// NO button move


const noButton =
document.getElementById("no");


let count=0;


if(noButton){


noButton.addEventListener("mouseover",()=>{


count++;


if(count<5){


noButton.style.position="fixed";


noButton.style.left =
Math.random()*80+"vw";


noButton.style.top =
Math.random()*80+"vh";


}


});


}
