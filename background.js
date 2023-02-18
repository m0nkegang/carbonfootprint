console.log("Hello world")
chrome.runtime.sendMessage({ action: 'start' });
let his = JSON.parse(localStorage.getItem("myEmissionHistory"));
let duration = localStorage.getItem('duration');
let stats = localStorage.getItem('stats')



console.log(his);
console.log(duration);
document.getElementById("durationtotal").innerText = duration + " Minutes";

console.log(stats);

let total;

//var obj = {a: 1, b: 2};
for (var key in his[0][0]) {
  if (his.hasOwnProperty(key)) {
    var val = his[key];
    //console.log("this is the val" +val);
    total += Number(val);
    //console.log(val);
  }
}
console.log(total);

