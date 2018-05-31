//var Chart = require('chart.js');

var ctx = document.getElementById('myChart').getContext('2d');
var maxlength=10;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'apples',
            data: [],
            backgroundColor: "rgba(153,255,51,0.4)"
        }, {
            label: 'oranges',
            data: [],
            backgroundColor: "rgba(255,153,0,0.4)"
        }]
    }
});

setInterval(delay, 1000);
function delay(x) {
    myChart.data.datasets[0].data.push(Math.floor(Math.random() * 50));
    myChart.data.datasets[1].data.push(Math.floor(Math.random() * 50));
    newdata:myChart.data.datasets[0].data;
    if(myChart.data.datasets[0].data.length > maxlength) {
        myChart.data.datasets[0].data.shift();
    };
    if(myChart.data.datasets[1].data.length > maxlength) {
        myChart.data.datasets[1].data.shift();
    };
    myChart.data.labels.push(new Date().getSeconds());
    
    myChart.update();
}
