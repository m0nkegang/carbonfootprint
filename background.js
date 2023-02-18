console.log("Hello world")
chrome.runtime.sendMessage({ action: 'start' });
let his = localStorage.getItem("myEmissionHistory");

console.log(his);