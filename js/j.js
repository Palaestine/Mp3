 let audio = document.getElementById("audio");
 let progress = document.getElementById("progress");
 let btn = document.getElementById("btn");
 let allbtn =  document.getElementById("allbtn");


 let prev =  document.getElementById("prev");
 let next =  document.getElementById("next");


 let start =  document.getElementById("start");
 let end =  document.getElementById("end");







 audio.onloadedmetadata = function(){
     progress.max = audio.duration;
     progress.value = audio.currentTime;
 };



 allbtn.addEventListener("click" , ()=>{
     if(btn.classList.contains("fa-pause"))
     {
         audio.pause();
         btn.classList.remove("fa-pause");
         btn.classList.add("fa-play");
     }
     else
     {
        audio.play();
        btn.classList.add("fa-pause");
        btn.classList.remove("fa-play");
     }
 });

 prev.addEventListener("click" , ()=>{
    audio.play();
    btn.classList.add("fa-pause");
    btn.classList.remove("fa-play");
    audio.currentTime-=5;
 });

 next.addEventListener("click" , ()=>{
    audio.play();
    btn.classList.add("fa-pause");
    btn.classList.remove("fa-play");
    audio.currentTime+=5;
 });

 
 start.addEventListener("click" , ()=>{
    audio.play();
    btn.classList.add("fa-pause");
    btn.classList.remove("fa-play");
    audio.currentTime=0;
 });

 
 end.addEventListener("click" , ()=>{
    audio.play();
    btn.classList.add("fa-pause");
    btn.classList.remove("fa-play");
    audio.currentTime= audio.duration;
 });




 if(audio.play()){
     setInterval(()=>{
       progress.value = audio.currentTime;
     },500);
 };




 progress.onchange = function(){
    audio.play();
    audio.currentTime =  progress.value;
    btn.classList.add("fa-pause");
    btn.classList.remove("fa-play");
 }






 