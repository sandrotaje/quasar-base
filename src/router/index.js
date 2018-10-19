import Vue from 'vue'
import VueRouter from 'vue-router'
import UserService from 'src/services/UserService'
import { Loading } from 'quasar'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })


  Router.beforeEach(async (to, from, next) => {
    // await UserService.init()
    Loading.show();
    const authorizedOperations = to.meta.authorizedOperations;
    if (!authorizedOperations || authorizedOperations.length <= 0) {
      throw "Operations not defined for next state";
    }
    if (authorizedOperations.indexOf("NO_OP") < 0) {
      if (!UserService.isAuthorized(authorizedOperations)) {
        console.log("Missing operation: ", authorizedOperations);
        if (UserService.isAuthenticated()) {
          //TODO emit event not has permission
          Loading.hide()
          next(false)
        } else {
          //TODO emit event notAuthenticated
          Loading.hide()
          next("login")
        }
      } else {
        Loading.hide()
        next();
      }
    } else { // if no op
      if (to.path == "/login") {
        if (UserService.isAuthenticated()) {
          next("/")
        } else {
          next()
        }
      } else {
        next()
      }
    }
  });
  Router.afterEach((to, from) => {
    Loading.hide();
  })

  return Router
}
