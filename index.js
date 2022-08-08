const toyo=document.getElementsByTagName("body")[0];

const rata=document.getElementsByClassName("togo")[0];




const tog=Array.from(document.getElementsByClassName("togo"));
console.log(tog);

tog.map((item)=>item.firstElementChild.addEventListener("click",e=>{
    e.target.nextElementSibling.classList.toggle("hide");
    console.log(e.target.nextElementSibling);  
}))

const btc=document.getElementsByClassName("images")[0];

const btn=document.getElementById("friend");
btn.addEventListener("click",e=>{
    e.target.innerText="friend";
e.target.style.backgraundcolor="yellow";
e.target.style.color="red";
btc.classList.toggle("showimages");
})


const body=document.getElementsByTagName("body")[0];
const butt=document.createElement("button");
 butt.classList.add("button");
 butt.innerText="click";
 body.insertBefore(butt,body.children[0]);


 const visa=document.createElement("p");
 visa.classList.add("visa");
 body.insertBefore(visa,body.children[1]);
 console.log(body);
 
 const card=document.createElement("h1");
 card.classList.add("card");
 body.insertBefore(card,visa);
console.log(body);

 butt.addEventListener("click",e=>{
   
    visa.classList.toggle("yaho");
    card.classList.toggle("com");
 })