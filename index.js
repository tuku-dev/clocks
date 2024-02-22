let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hour.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;

  /**
   * Digital Clock
   */

  let hourBox = document.getElementById("hourBox");
  let minuteBox = document.getElementById("minuteBox");
  let secondBox = document.getElementById("secondBox");

  hourBox.textContent = hh < 10 ? "0" + hh : hh;
  minuteBox.textContent = mm < 10 ? "0" + mm : mm;
  secondBox.textContent = ss < 10 ? "0" + ss : ss;
}

setInterval(displayTime, 1000);
