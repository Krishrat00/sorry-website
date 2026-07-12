function scrollToStory(){

    document
    .getElementById("story")
    .scrollIntoView({
        behavior:"smooth"
    });

}



// Reveal animations

const cards=document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let position=
card.getBoundingClientRect().top;


if(position < window.innerHeight-100){

card.classList.add("active");

}


});


});




// Floating hearts

function createHeart(){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart-float";


heart.style.left=
Math.random()*100+"vw";


heart.style.fontSize=
Math.random()*20+15+"px";


document
.body
.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);


}


setInterval(createHeart,500);




// No button playful movement

const no=document.getElementById("no");

let count=0;


no.addEventListener("mouseover",()=>{


count++;


if(count<6){


no.style.position="fixed";


no.style.left=
Math.random()*80+"vw";


no.style.top=
Math.random()*80+"vh";


}


else{


no.innerHTML="Okay... 🥺";

no.style.position="relative";


}


});




// Yes button

const yes=document.getElementById("yes");


yes.addEventListener("click",()=>{


document.querySelector(".question")
.style.display="none";


document
.getElementById("success")
.style.display="flex";



confetti();


});




// Simple confetti

function confetti(){


for(let i=0;i<100;i++){


let piece=document.createElement("div");


piece.innerHTML="❤️";


piece.style.position="fixed";

piece.style.left=
Math.random()*100+"vw";


piece.style.top="-20px";


piece.style.fontSize=
Math.random()*25+10+"px";


piece.style.transition="3s";


document.body.appendChild(piece);



setTimeout(()=>{

piece.style.top="100vh";

piece.style.transform=
`rotate(${Math.random()*720}deg)`;


},100);



setTimeout(()=>{

piece.remove();

},4000);



}


}
