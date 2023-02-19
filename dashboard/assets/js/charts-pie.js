// Pie Chart
let pdata = {
  labels : [],
  data : [],
  backgroundColor : []
};

const pieConfig = {
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: pdata.data,

        backgroundColor: pdata.backgroundColor,
        label: 'Dataset 1',
      },
    ],
    labels: pdata.labels,
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,

    legend: {
      display: false,
    },
  },
}

function randomColor() {
  let color = "rgb(";
  for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * 256);
    color = color.concat(String(num));
    if (i < 2) {
      color = color.concat(", ");
    }
  }
  color = color.concat(")");
  return color;
}

for (const property in history) {
  pdata["labels"].push(property);
  pdata["data"].push(history[property]);
  pdata["backgroundColor"].push(randomColor());
}

// change this to the id of your chart element in HMTL
const pieCtx = document.getElementById('pie')
window.myPie = new Chart(pieCtx, pieConfig)
