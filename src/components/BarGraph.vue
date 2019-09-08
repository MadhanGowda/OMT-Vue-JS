<template>
  <div
    id="bar-chart"
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
/* ============
 * Card Component
 * ============
 *
 * A basic card component.
 *
 * Gives an idea how components work.
 */

export default {
  /**
   * The name of the component.
   */
  name: 'BarChart',

  /**
   * The properties that the component accepts.
   */

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
        el: 'bar-chart',
        title: {
          text: 'Quaterly Trend Analysis',
          align: 'left',
          style: {
            color: '#444',
          },
        },
        xaxis: {
          type: 'datetime',
          labels: {
            offsetX: 60,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: (val) => {
              const aa = val;
              return aa;
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => {
            const aa = val;
            return aa;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },
        plotOptions: {
          bar: {
            columnWidth: '40%',
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        chart: {
          animations: {
            enabled: this.animations,
          },
          zoom: {
            autoScaleYaxis: false, // https://github.com/apexcharts/apexcharts.js/issues/566
          },
        },
      };
    },
    formattedData() {
      const trimmedData = this.chartData.slice(0, 3);
      const stockSeries = trimmedData.map((d) => {
        const aa = {
          x: new Date(d.date),
          y: d.close,
        };
        return aa;
      });
      return [{ data: stockSeries }];
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
