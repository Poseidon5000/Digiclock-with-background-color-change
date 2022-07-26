//Timer
setInterval(()=>{
const timer = document.getElementById('timer');

let date = new Date();
let hours = date.getHours()
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let night = "AM"

if(hours>12){
    hours = hours - 12;
    
 }
    
 if (hours = 12){
     night = "AM"

 if(hours < 10){
    hours = "0" + hours;
 }

 if(minutes< 10){
    minutes = "0" + minutes
 };

 if(seconds < 10){
    seconds = "0" + seconds
 }

timer.textContent = hours + ":" + minutes +":"  + seconds + " " + night;
 
})

//Background

let i = 0;

let colorBox = ["red", "blue", "black", "yellow", "green", "purple", "indigo", 'violet', 'orange', 'grey', 'pink', 'gold', 'crimson', 'khaki', 'springgreen', 'olive', 'aqua', 'teal', ]

function changeColor(){
   document.body.style.backgroundColor = colorBox[i];
   i++;
   if(i>colorBox.length){
      i=0;
   }

   setTimeout("changeColor()", 1000)
}
