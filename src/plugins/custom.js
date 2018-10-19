import MainTitle from 'src/directives/MainTitle'
import MillisecondsToTimeString from 'src/filters/MillisecondsToTimeString'
import Date from 'src/filters/Date'
import Number from 'src/filters/Number'
// import ECharts from 'vue-echarts/components/ECharts'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/dataZoom'
// import 'echarts/lib/component/dataZoomInside'

export default ({ app, store, Vue }) => {
  app.directives = {MainTitle};
  app.filters = { MillisecondsToTimeString, Number, Date }

  // Vue.component('v-chart', ECharts)



}
