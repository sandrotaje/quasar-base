import Vue from 'vue'

export default Vue.filter('number', function(val, prec = 0) {
    let div = Math.pow(10, prec);
    return Math.round(val*div)/div
})