var clock =document.querySelector(".clock");
    

function tick(){

const digi_clock =new Date();

const hour =digi_clock.getHours();
const min= digi_clock.getMinutes() ;
const sec =digi_clock.getSeconds();




const html='<span>'+hour+'</span>:<span>'+min+'</span>:<span>'+sec+'</span>';


clock.innerHTML= html;
}

setInterval(tick,1000);

