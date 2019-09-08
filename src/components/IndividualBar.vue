<template>
  <div
    id="individual-bar-chart"
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
function getAllDayForTheMonth() {
  const currentDate = new Date();
  const year = currentDate.getYear();
  const month = currentDate.getMonth();
  const date = new Date(Date.UTC(year, month, 1));
  const days = [];
  const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  while (date.getMonth() === month) {
    const newDate = new Date(date);
    days.push(`${daysName[newDate.getDay()]} ${newDate.getDate()} ${monthNames[newDate.getMonth()]}`);
    date.setDate(date.getDate() + 1);
  }
  return days;
}

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
        el: 'individual-bar-chart',
        title: {
          text: 'Daily Consumption Trend Analysis',
          align: 'left',
          style: {
            color: '#444',
          },
        },
        xaxis: {
          categories: getAllDayForTheMonth(),
        },
        yaxis: {
          labels: {
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
          offsetY: -30,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
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
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
      };
    },
    formattedData() {
      const stockSeries = [{
        name: 'Daily consumption',
        data: [
          1722.3,
          0,
          0,
          1720.1,
          524.0,
          5423.6,
          2723.2,
          3722.3,
          0,
          0,
          2722.3,
          2723.1,
          2724.0,
          1720.1,
          2724.0,
          0,
          0,
          1722.3,
          1721.4,
          2720.8,
          3722.3,
          3723.1,
          0,
          0,
          3724.0,
          3723.6,
          3723.2,
          2722.3,
          2721.4,
          222.9,
          0,
        ],
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
.individual-bar .apexcharts-datalabel {
  writing-mode: tb;
}
</style>
