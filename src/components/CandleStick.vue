<template>
  <div
    id="candlestick-chart"
    class="border-2 rounded-lg py-4 px-1 shadow-lg mb-8 graph-wrap"
  >
    <apexchart
      :series="formattedData"
      :options="chartOptions"
      height="300"
      type="candlestick"
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
  name: 'CandleStick',

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
        el: 'candlestick-chart',
        title: {
          text: 'AAPL',
          align: 'left',
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          tooltip: {
            enabled: false,
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
      const stockSeries = this.chartData.map((d) => {
        const aa = {
          x: new Date(d.date),
          y: [d.open, d.high, d.low, d.close],
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
