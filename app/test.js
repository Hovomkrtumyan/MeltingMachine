

var ctx = document.getElementById('myChart').getContext('2d');
var maxlength=20;
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
  var d = new Date();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var Time= m + ":" + s ;
  myChart.data.datasets[0].data.push(Math.floor(Math.random() * 50 + 500));
  myChart.data.datasets[1].data.push(Math.floor(Math.random() * 50 + 550));
  myChart.data.labels.push(Time );
  if(myChart.data.datasets[0].data.length > maxlength) {
     myChart.data.datasets[0].data.splice(1,1);
  };
  if(myChart.data.datasets[1].data.length > maxlength) {
     myChart.data.datasets[1].data.splice(1,1);
  };
  if (myChart.data.labels.length>maxlength){
    myChart.data.labels.splice(1,1);
  };
  myChart.update();
}
