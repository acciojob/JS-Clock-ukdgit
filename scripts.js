const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const hourDegrees = 30*hour + mins/2;
    const minsDegrees = 6*mins;
    const secondsDegrees = 6*seconds;
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
