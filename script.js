function multiply() {
    document.querySelector("#result").innerHTML = document.querySelector("#number1").value * document.querySelector("#number2").value;
}

function divide() {
    document.querySelector("#result").innerHTML = document.querySelector("#number1").value / document.querySelector("#number2").value;
}

let today = new Date();
const day = today.getDay();
var dayOfWeeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const y = today.getFullYear();
const d = today.getDate();
const m = today.getMonth() + 1;
let time = (today.getHours() < 10 ? "0" : '') + today.getHours() + ":" + (today.getMinutes() < 10 ? "0" : '') + today.getMinutes() + ":" + (today.getSeconds() < 10 ? "0" : '') + today.getSeconds();
document.getElementById("CurrentDate").innerHTML = 'Year: ' + y + '<br>' + 'Today is: ' + dayOfWeeks[day] + '<br>' + 'Date: ' + d + '<br>' + 'Month: ' + m + '<br>' + 'Current time is: ' + time;

let date1 = new Date("01/09/2021");
let date2 = new Date("01/07/2024");
const Remaining = date2.getTime() - date1.getTime();
const TimeRemaining = Remaining / 8.64e7;
document.getElementById("HowRem").innerHTML = TimeRemaining + ' day' + (TimeRemaining > 1 ? "s" : '') + "  left until the freedom!";