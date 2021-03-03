let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secondsEl = document.getElementById("seconds");

const newYears = "1 June 2021";

let countdown = () => {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

countdown();

setInterval(countdown, 1000);
