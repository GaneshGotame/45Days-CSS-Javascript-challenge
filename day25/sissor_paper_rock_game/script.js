let sissor=0;
let paper=1;
let rock=2;
let computer=Math.floor(Math.random()*3);

// let player;
// do{
let player=prompt("Enter your choice 'sissor' 'paper' or 'rock'");
// player.toLowerCase(player);
// console.error("Invalid choice");
// }while((player!='sissor')||(player!='paper')||(player!='rock'));
console.log("Player:"+player);
console.log("0 means sissor, 1 means paper, 2 means rock")
console.log("Computer:"+computer);
if((player=='sissor' && computer==1)||(player=='paper' && computer==2)||(player=='rock' && computer==0)){
    
    console.log("Congratulation you win");
}
else if(((player=='sissor' && computer==0)||(player=='paper' && computer==1)||(player=='rock' && computer==2))){
    console.log("Draw");
}
else{
    console.log("computer win the game");
}