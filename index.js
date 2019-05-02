'use strict';

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.sec-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;  
  // we take our seconds, divide that by 60 to get a percentage, and multiply that by 360 to get the value that is the percentage of 360
  // for example, if seconds is 59, then 59/60 = .9833, then multiplying .9833 by 360 gives us the value that is .9833 of 360 degrees
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);