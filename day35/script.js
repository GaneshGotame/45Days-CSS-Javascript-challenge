let flag=0;
slidershow(flag);
// autoshow(flag);

function controller(x){

    flag=flag+x;
    if(flag<0)
    {
        flag=4;
    }
    else if(flag>4){
        flag=0;
    }
    slidershow(flag);
}

function slidershow(num){
    
    let slides=document.getElementsByClassName('slide');
    for(let y of slides){
        y.style.display="none";
    }

    slides[num].style.display="block";
    
    
}

// function autoshow(flag){
//     setInterval(function auto(){
//         flag=flag+1;
//         if(flag<0)
//         {
//             flag=4;
//         }
//         else if(flag>4){
//             flag=0;
//         }
//     let slides=document.getElementsByClassName('slide');
//     for(let y of slides){
//         y.style.display="none";
//     }
//     slides[flag].style.display="block";
//     },3000);   
// }
