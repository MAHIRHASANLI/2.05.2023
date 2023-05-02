let datatime = document.querySelector(".datetime-localf");
let alarmButton = document.querySelector(".setalarm");
let inputisempty=document.querySelector(".input-is-empty")
let alarmItem =document.querySelector(".alarm-item")
let stopalarm = document.querySelector(".stopalarm-item")
let myAudio = document.querySelector('#audio')
var x = document.getElementById("myAudio"); 
function playMusic(){
    let audio = new Audio("./alarm/alarm.mp3");
    audio.play()

}
alarmButton.addEventListener("click",()=>{
   a=  new Date(datatime.value)/1000;
   b=  new Date()/1000;
    if(a<b){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">You Cannot set Alarm from the past! </a>'
          })
          datatime.value=""
          inputisempty.style.opacity="0"
        }
        else if(datatime.value==""){
        inputisempty.style.opacity="1"
    }
    else{
        inputisempty.style.opacity="0"
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Alerm Setted successfully!',
            showConfirmButton: false,
            timer: 1500
        })
        alarmItem.textContent = Math.floor(a - b);
        alarm=Number(alarmItem.textContent);
        intervalID=setInterval(()=>{
            alarmItem.textContent =alarm--;
            if(alarmItem.textContent ==0){
                clearInterval(intervalID);
                datatime.value="";
                playMusic() 
            }
        }, 1000 )
       } 
})

// function playAudio() { 
//   x.play(); 
// } 

// function pauseAudio() { 
//   x.pause(); 
// } 
// let play = document.querySelector("#play")

// play.addEventListener("click",playMusic)