/**
 * Created by Administrator on 2018/3/16.
 */

import store from '../stores'

const baseConfig = {}

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

baseConfig.install = (Vue, router) => {
	//promise原型链新增finally方法，用于loading状态控制,或者自定义的异常捕获
	Promise.prototype.finally = callback => {
		let Pro = this.constructor
		return this.then(
			value => Pro.resolve(callback()).then(() => value),
			reason => Pro.resolve(callback()).then(() => { throw reason})
		)
	}

	//全局路由钩子
	router.beforeEach((to, from, next) => {
		/*
		 * to下一个路由路径
		 * from上一个路由路径
		 * 需要调用next()生效
		 */
		/*全局过渡动画*/
		const toIndex = history.getItem(to.path)
		const fromIndex = history.getItem(from.path)
		if(toIndex){
			if(!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')){
				store.commit('COUNT_DIRECTION', {direction: 'forward'})
			}else {
				store.commit('COUNT_DIRECTION', {direction: 'reverse'})
			}
		}else {
			++historyCount
			history.setItem('count', historyCount)
			to.path !== '/' && history.setItem(to.path, historyCount)
			store.commit('COUNT_DIRECTION', {direction: 'forward'})
		}
		next()
	})
}

export { baseConfig }