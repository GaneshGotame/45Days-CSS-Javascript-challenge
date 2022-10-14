// console.log(document.title);//it doesnot works

// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[0]);
// console.log(document.body.childNodes[document.body.childNodes.length-1]);

let arr=Array.from(document.body.childNodes);
console.log(arr);
console.log(arr.reverse());

console.log(document.head.childNodes);

let a=document.body.firstChild;
console.log(a);
console.log(a.nextSibling);
console.log(a.parentNode);
console.log(a.parentElement);