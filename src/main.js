// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTouch from 'vue-touch'
import fastClick from 'fastclick'
import { baseConfig } from './utils/global'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

//使用vue-touch插件
Vue.use(VueTouch, {name: 'v-touch'})
//解决移动端手机点击30毫秒延迟
fastClick.attach(document.body)
//swiper插件
Vue.use(VueAwesomeSwiper)

Vue.use(baseConfig, router)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
	store,
    components: { App },
    template: '<App/>'
})
