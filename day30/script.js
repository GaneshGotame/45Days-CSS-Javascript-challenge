setInterval(function time2(){
    const d=new Date();
    let hours=d.getHours();
    let minutes=d.getMinutes();
    let seconds=d.getSeconds();
    let ampm;
   

    if(hours>12)
    {
        hours=hours-12;
        ampm="pm";
    }
    else{
        ampm="am";
    }
   
    document.getElementById("mon").style.color="white";
    document.getElementById("hours").innerHTML=hours+":";
    document.getElementById("minutes").innerHTML=minutes+":";
    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("ampm").innerHTML=ampm;

}
,1000);

