var hou = document.querySelector("#hour")
var min = document.querySelector('#minute') 
var sec = document.getElementById("second")


const starHour = parseInt(hou.innerHTML);
const startMinute = parseInt(min.innerHTML);
const startSecond = parseInt(sec.innerHTML);
var time = starHour * 3600 + startMinute *60 + startSecond ; 


var num = (value)=>{
    return value < 10 ? '0'+ value : value;
}

var remainder =(value) => value % 60 ;

function updateCountDown (){
    
    let hour  = Math.floor(time/60/60);
    let minute = Math.floor(time/60);
        minute = remainder(minute);
    let second = remainder(time) ;
    
    hou.innerHTML = num(hour);
    min.innerHTML = num(minute);
    sec.innerHTML = num(second);
    
    //Đổi background theo thời điểm trong ngày
    let img = ['./img/hcmdawn.jpg',`./img/hcmdusk.jpg`,`./img/hcmnight.jpg`];
    if(hour > 5 && hour <= 16){
        changeBackground(img[0]);
    }
    else if(hour >16 && hour <= 19 ){
        changeBackground(img[1]);
    }
    else if (hour >19 && hour <= 24 || hour >=0 && hour <= 5){
        changeBackground(img[2]);
    }

    time-- ;
    if(time < 0){ // Khi đếm ngược kết thúc
        clearInterval(Run);
        endCountdown();
    }
}

function changeBackground(img){
    let changeImg = document.querySelector(".banner1")
    changeImg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)),url(${img})`
}


function endCountdown(){
    //Change background when end countdown
    let endingImg = document.querySelector(".banner1");
    endingImg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)),url(./img/ending.jpg)`
    console.log(endingImg);
    //create new div content when end countdown
    let  p = document.createElement('p');
    p.classList.add('endCountDown-attribute');
    p.innerHTML ='Thanks for waiting ';
    let  p2 = document.createElement('p');
    p2.innerHTML = 'Chờ đợi không đáng sợ , đáng sợ chỉ là không biết chờ đến bao giờ'
    p2.classList.add('waitingEndImg');

    document.querySelector('.clock').replaceChildren(p); // replaceChildren thay thể cho innerHTML khi thêm 1 thẻ div
    document.querySelector('.clock').appendChild(p2); // thêm 1 thẻ p mà không ghi đè
    document.querySelector('.clock').setAttribute("style",
     "flex-direction : column; justify-content: flex-start;background-color : rgba(0, 0, 0, 0.25);")
}


 var Run = setInterval(updateCountDown,1000);
