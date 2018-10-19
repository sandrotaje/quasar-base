import Vue from 'vue'
import { date } from 'quasar'

export default Vue.filter('date', function (val, timeString) {
    return date.formatDate(val, timeString)
})