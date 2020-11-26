const clock = document.querySelector(".js-clock .clock__text");


function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    clock.innerHTML =time;
}
    
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();