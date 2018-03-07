// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootswatch/dist/spacelab/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
