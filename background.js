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
    var table = document.getElementById("mynewtable");
    for (const property in history) {
        console.log(history);
        var row = `<tr class="text-gray-700 dark:text-gray-400">
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          
                          <div>
                            <p class="font-semibold">${property}</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        TO be Added in grams
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span
                          class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                        >
                          Approved
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm">
                        ${history[property]} B
                      </td>
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

