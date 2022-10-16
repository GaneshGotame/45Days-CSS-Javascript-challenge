function changebgred(){
    document.body.firstElementChild.style.color="green";
    document.body.firstElementChild.style.background="red";
}
let b=document.body;
console.log("The first child of b is ",b.firstChild);
console.log("The first element child of b is ",b.firstElementChild);