let first=document.getElementById("home").firstElementChild;
first.style.color="red";

let bbox=document.querySelectorAll(".body-box");
console.log(bbox);
bbox[1].style.background="red";

let a=document.querySelector(".body-box").nextElementSibling.nextElementSibling;
a.style.color="coral";

let b=document.getElementsByTagName('li');
b[2].style.background="white";