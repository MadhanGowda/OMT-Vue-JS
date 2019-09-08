<template>
  <div
    id="series-bar-chart"
    class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8 graph-wrap"
  >
    <apexchart
      :series="formattedData"
      :options="chartOptions"
      height="300"
      type="bar"
    />
  </div>
</template>

<script>
export default {
  name: 'SeriesBarGraph',
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
        el: 'series-bar-chart',
        title: {
          text: 'Monthly Trend Analysis',
          align: 'left',
          style: {
            color: '#444',
          },
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          labels: {
            formatter: (val) => {
              const aa = `${val}%`;
              return aa;
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        chart: {
          animations: {
            enabled: this.animations,
          },
          zoom: {
            autoScaleYaxis: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
          },
        },
        stroke: {
          show: true,
          width: 4,
          colors: ['transparent'],
        },
      };
    },
    formattedData() {
      const stockSeries = [{
        name: 'Pantry Consumables',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Office Consumables',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Cofee vending machine',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      }];
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
