console.log("Hello world")
chrome.runtime.sendMessage({ action: 'start' });
let his = JSON.parse(localStorage.getItem("myEmissionHistory"));
let duration = localStorage.getItem('duration');
let stats = localStorage.getItem('stats')
let arr = JSON.parse(his[0])

console.log(arr);
console.log(his);
console.log(duration);
document.getElementById("durationtotal").innerText = duration + " Minutes";
//document.getElementById("Overall_footprint").innerHTML = "Footprint (gm) = 5000";



