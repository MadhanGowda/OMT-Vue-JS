<template>
  <div
    id="line-chart"
    class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8 graph-wrap"
  >
    <apexchart
      :series="formattedData"
      :options="chartOptions"
      height="300"
      type="line"
    />
  </div>
</template>

<script>

export default {
  name: 'LineChart',
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
    animations: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {};
  },

  computed: {
    chartOptions() {
      return {
        el: 'line-chart',
        title: {
          text: 'Fiscal Year v/s Previous Year Trend Analysis',
          align: 'left',
          style: {
            color: '#444',
          },
        },
        chart: {
          shadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ['#31e7a7', '#2da1fc'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth',
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 6,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          title: {
            text: 'Month',
          },
        },
        yaxis: {
          title: {
            text: 'Money',
          },
          min: 5,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      };
    },
    formattedData() {
      const stockSeries = [
        {
          name: '2018',
          data: [28332, 29234, 32123, 32126, 32213, 32535, 53533, 53535, 23139, 33133, 33136, 42332],
        },
        {
          name: '2019',
          data: [13442, 12441, 44314, 17678, 48877, 59793, 19893, 29788, 20899, 39973, 42978, 87899],
        },
      ];
      return stockSeries;
    },
  },
};
</script>
<style>
.graph-wrap {
  background-color: white;
  border-radius: 15px;
}
.apexcharts-toolbar {
  display: none;
}
</style>
