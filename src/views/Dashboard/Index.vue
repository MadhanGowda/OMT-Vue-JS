<template>
  <div>
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li class="sidebar-brand">
            <a href="/">
              <img
                src="@/assets/images/gale_logo.png"
                height="35"
                class="align-self-start"
                alt="GALE Logo"
              >
            </a>
          </li>
          <li>
            <a
              class="sidebar-link"
              data-slug="pantry_consumables"
            >
              Pantry Consumables
            </a>
          </li>
          <li>
            <a
              class="sidebar-link"
              data-slug="stationary_items"
            >
              Stationary Items
            </a>
          </li>
          <li>
            <a
              class="sidebar-link"
              data-slug="coffee_vending_items"
            >
              Coffee vending items
            </a>
          </li>
          <li>
            <a
              class="sidebar-link"
              data-slug="cleaning_consumables"
            >
              Cleaning Consumables
            </a>
          </li>
          <li>
            <a
              class="sidebar-link"
              data-slug="toiletries"
            >
              Toiletries
            </a>
            <a
              class="sidebar-link"
              href="http://192.168.3.136:8000/admin/"
            >
              Admin
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="dashboard-main">
      <div class="top-bar">
        <h2 class="project-title">Operations Management Tool</h2>
      </div>
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="graph-col bar-graph col-6">
              <div class="spinner-border justify-content-center">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="graph-cont d-none">
                <bar-graph
                  :chart-data="chartData"
                  :animations="animations"
                />
              </div>
            </div>
            <div class="graph-col series-bar-graph col-6">
              <div class="spinner-border justify-content-center">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="graph-cont  d-none">
                <series-bar-graph
                  :chart-data="monthlyData"
                  :animations="animations"
                />
              </div>
            </div>
            <div class="graph-col individual-bar col-6">
              <div class="spinner-border justify-content-center">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="graph-cont d-none">
                <individual-bar
                  :chart-data="dailyData"
                  :animations="animations"
                />
              </div>
            </div>
            <div class="graph-col line-chart col-6">
              <div class="spinner-border justify-content-center">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="graph-cont  d-none">
                <line-chart
                  :chart-data="chartData"
                  :animations="animations"
                />
              </div>
            </div>
            <div class="graph-col table-card-r col-3">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th class="header" colspan="2">
                      Out of Stock
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="col">Item Description</th>
                    <th scope="col">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Coco Cola</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Fanta</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Butter milk</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="graph-col table-card-l col-3">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th class="header" colspan="3">
                      Product Expiries
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="col">Item Description</th>
                    <th scope="col">Expiry Date</th>
                    <th scope="col">Validity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-danger">
                    <td>Coco Cola</td>
                    <td>2019-08-31</td>
                    <td>Expired</td>
                  </tr>
                  <tr class="table-danger">
                    <td>Fanta</td>
                    <td>2019-08-31</td>
                    <td>Expired</td>
                  </tr>
                  <tr>
                    <td>Butter milk</td>
                    <td>2019-08-31</td>
                    <td>25 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="graph-col table-card-r col-3">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th class="header" colspan="3">
                      Minimum Balance Alert
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="col">Item Description</th>
                    <th scope="col">Min. Balance</th>
                    <th scope="col">Available</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fanta</td>
                    <td>3</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Coco Cola</td>
                    <td>3</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Sprite</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="graph-col table-card-l col-3">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th class="header" colspan="3">
                      Monthly Purchase Request - Reminder
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="col">Item Description</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Days Left</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-success">
                    <td>Fanta</td>
                    <td>2019-09-25</td>
                    <td>20 Days</td>
                  </tr>
                  <tr>
                    <td>Coco Cola</td>
                    <td>2019-09-25</td>
                    <td>20 Days</td>
                  </tr>
                  <tr>
                    <td>Sprite</td>
                    <td>2019-09-25</td>
                    <td>20 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import chartData from '@/assets/data.json';
import CandleStick from '@/components/CandleStick.vue';
import BarGraph from '@/components/BarGraph.vue';
import SeriesBarGraph from '@/components/SeriesBarGraph.vue';
import IndividualBar from '@/components/IndividualBar.vue';
import LineChart from '@/components/LineChart.vue';

function addlink() {
  jQuery('.sidebar-link').on('click', (el) => {
    const ele = jQuery(el.target);
    const currentLink = window.location.href;
    const from = currentLink.indexOf('?category');
    const url = `${currentLink.slice(0, from)}?category=${ele.attr('data-slug')}`;
    window.location.replace(url);
  });
}

function getslugValue() {
  const currentLink = window.location.href;
  const from = currentLink.indexOf('?category=');
  const to = currentLink.length;
  const slug = currentLink.slice(from + 10, to);
  return slug;
}
function updateSelected() {
  const slug = getslugValue();
  jQuery(`.sidebar-link[data-slug="${slug}"]`).addClass('selected');
}

export default {
  name: 'DashboardIndex',
  components: {
    CandleStick,
    BarGraph,
    SeriesBarGraph,
    IndividualBar,
    LineChart,
  },
  data() {
    return {
      animations: true,
      chartData: Object.freeze(chartData),
      monthlyData: [],
      dailyData: [],
    };
  },
  mounted() {
    addlink();
    updateSelected();
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      var state = this;
      const slug = getslugValue();
      jQuery('.spinner-border').addClass('d-none');
      jQuery('.graph-cont').removeClass('d-none');
      // axios.get(`http://192.168.3.186:8000/api/get_all_data?category=${slug}`).then(response => {
      //   jQuery('.spinner-border').addClass('d-none');
      //   jQuery('.graph-cont').removeClass('d-none');
      //   state.monthlyData = response.data.category_expenses;
      //   state.dailyData = response.data.category_expenses;
      //   // response.data.tableData.map(graph => {
      //   //   var prices = []
      //   //   graph.map(data => {
      //   //     prices.push(data[4])
      //   //   })
      //   //   state.graphOptions.push({
      //   //     title: {
      //   //       text: 'Company Close Price',
      //   //       x: -20 //center
      //   //     },
      //   //     yAxis: {
      //   //       title: {
      //   //         text: 'Price ($)'
      //   //       },
      //   //       plotLines: [{
      //   //         value: 0,
      //   //         width: 1,
      //   //         color: '#808080'
      //   //       }]
      //   //     },
      //   //     tooltip: {
      //   //       valueSuffix: '$'
      //   //     },
      //   //     series: [{
      //   //       data: prices
      //   //     }]
      //   //   })
      //   // })
      //   console.log(response);
      // })
      // .catch(error => {
      //   console.log('ERROR', error)
      //   jQuery('.spinner-border').addClass('d-none');
      //   jQuery('.graph-cont').removeClass('d-none');
      // })
    },
  },
};
</script>

<style>
.graph-col {
  padding: 30px;
  height: 400px;
}
body {
  background-color: #c4d6fe;
}
.container {
  max-width: 1440px;
}
.dashboard-main {
  padding: 30px;
}
.dashboard-main .top-bar {
  position: relative;
  height: 60px;
  margin-left: 250px;
}
.dashboard-main .top-bar .project-title {
  font-family: 'Heebo', sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  vertical-align: middle;
  margin: 0;
  display: inline-block;
  color: #2f364f;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.wrapper {
  display: flex;
  width: 100%;
}
#sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}
body {
  overflow-x: hidden;
}
/* Toggle Styles */
#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
#wrapper.toggled {
  padding-left: 250px;
}
#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 250px;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #ecf1ff;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}
#page-content-wrapper {
  width: 90%;
  padding: 20px;
  position: relative;
  margin-left: 220px;
}
#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}
/* Sidebar Styles */
.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
  cursor: pointer;
}
.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #2f364e;
  font-family: 'Heebo', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 2.5;
}

.sidebar-nav li .sidebar-link.selected {
  background-color: #a9b0c1;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #5c5d5f;
  background-color: #c8cede;
}
.sidebar-nav li a:active, .sidebar-nav li a:focus {
  text-decoration: none;
}
.sidebar-nav > .sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
  margin-bottom: 40px;
}
.sidebar-nav > .sidebar-brand a {
  color: #2f364e;
}
.sidebar-nav > .sidebar-brand a:hover {
  color: #5c5d5f;
  background: none;
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: .25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border .75s linear infinite;
  animation: spinner-border .75s linear infinite;
  position: absolute;
  top: 47%;
  left: 47%;
}

@keyframes spinner-border {
  to { transform: rotate(360deg); }
}
.table {
  background: white;
  border-radius: 20px;
}
.table th.header {
  text-align: center;
}
.table-card-r {
  padding-right: 10px;
}
.table-card-l {
  padding-left: 10px;
}

</style>
