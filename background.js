console.log("Hello world")
chrome.runtime.sendMessage({ action: 'start' });
let his = JSON.parse(localStorage.getItem("myEmissionHistory"));
let duration = localStorage.getItem('duration');
let stats = localStorage.getItem('stats')
let arr = JSON.parse(his[0])

// calculate total data transferred
let history = JSON.parse(his[0]);
console.log(history);

let totalData = 0;

for (const property in history) {
   totalData += history[property];
}



function buildTable(data) {
    var table = document.getElementById("myTable");
    for (const property in history) {
        console.log(history);
        var row = `<tr>
                          <td>${String(history)}</td>
                          <td>${history[property]}</td>
                          
                    </tr>`;
        table.innerHTML += row;
     }
     
    for (var i = 0; i < data.length; i++) {
      var row = `<tr>
                          <td>${data}</td>
                          <td>${data[i]}</td>
                          
                    </tr>`;
      table.innerHTML += row;
    }
  }
  
buildTable(arr);

let roundedoff = Math.round(totalData / (1024 * 1024));
document.getElementById("Overall_footprint").innerHTML = "Carbon Emission  = " + String(roundedoff) + " gm";

console.log(arr);
console.log(his);
console.log(duration);
console.log("Total Data : " + totalData);
//document.getElementById("durationtotal").innerText = duration + " Minutes";

//document.getElementById("totalfootprint").innerText = String(getdata());
//document.getElementById("Overall_footprint").innerHTML = "Footprint (gm) = 5000";

