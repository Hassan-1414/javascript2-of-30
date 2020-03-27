var secondsHand = document.querySelector(".seconds");
var minsHand = document.querySelector(".mins");
var hoursHand = document.querySelector(".hours");

setInterval(function() {
  let now = new Date();
  let second = now.getSeconds();
  let secondDegree = (second / 60) * 365 + 90;
  let min = now.getMinutes();
  let mindDegree = (min / 60) * 365 + 90;
  let hour = now.getHours();
  let hourDegree = (hour / 12) * 365 + 90;

  secondsHand.style.transform = `rotate(${secondDegree}deg)`;
  minsHand.style.transform = `rotate(${mindDegree}deg)`;
  hoursHand.style.transform = `rotate(${hourDegree}deg)`;

  if (second == 0) {
    secondsHand.style.transitionDuration = "0s";
    minsHand.style.transitionDuration = "0s";
    hoursHand.style.transitionDuration = "0s";
  } else {
    secondHand.style.transitionDuration = "0.05s";
    minsHand.style.transitionDuration = "0.05s";
    hoursHand.style.transitionDuration = "0.05s";
  }
}, 1000);
