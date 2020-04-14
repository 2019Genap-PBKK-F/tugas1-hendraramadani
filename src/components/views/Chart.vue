<template>
    <div>
        <div id="content">
            <canvas ref="chart"></canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  mounted() {
    var chart = this.$refs.chart
    var ctx = chart.getContext('2d')
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        onClick: (event) => {
          var activePoints = myChart.getElementsAtEventForMode(event, 'point', myChart.options)
          if (activePoints.length > 0) {
            var firstPoint = activePoints[0]
            var label = myChart.data.labels[firstPoint._index]
            var value = myChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index]
            alert(label + ': ' + value)
          }
        }
      }
    })
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #content {
        margin: auto;
        width: 1024px;
        background-color: #FFFFFF;
        padding: 20px;
    }
</style>
