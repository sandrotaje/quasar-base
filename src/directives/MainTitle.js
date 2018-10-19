import Vue from 'vue'
import store from 'src/store'

export default Vue.directive("MainTitle", {
    bind(el, binding, vnode) {
        store.commit("CHANGE_TITLE", binding.value)
    },
    update(el, binding, vnode) {
        store.commit("CHANGE_TITLE", binding.value)
    }
})
