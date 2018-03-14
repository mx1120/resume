import Vue from 'vue'
import Router from 'vue-router'

let routes = require('./routesMaker').default

Vue.use(Router)

export default new Router({
	routes
})
