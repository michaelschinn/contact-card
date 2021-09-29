const time = document.getElementById('time')

function formatNumber(number){
    if(number<10){
        return `0${number}`;
    }else{
        return `${number}`;
    }
}

function updateTime(){
    let date = new Date();
    date.hours = date.getHours();
    date.minutes = date.getMinutes();
    date.seconds = date.getSeconds();
    if(date.hours > 12){
        date.hours = date.hours - 12;
        date.time = `${formatNumber(date.hours)}:${formatNumber(date.minutes)} PM`;
    }else if(date.hours == `00`){
        date.hours = `12`;
        date.time = `${formatNumber(date.hours)}:${formatNumber(date.minutes)} AM`;
    }else {
        date.time = `${formatNumber(date.hours)}:${formatNumber(date.minutes)} AM`;
    }
    time.textContent = `${date.time}`;
}

function loop(){
    setInterval(updateTime,1000);
}

function main(){
    loop();
}

main();