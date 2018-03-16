// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTouch from 'vue-touch'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

//使用vue-touch插件
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
