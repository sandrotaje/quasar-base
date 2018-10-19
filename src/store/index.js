import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

let initState = {
    title: "List"
}

export default new Vuex.Store({
    state: initState,
    mutations: mutations,
    actions: actions,
    getters: getters
})