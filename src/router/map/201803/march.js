/**
 * Created by Administrator on 2018/3/16.
 */
const index = resolve => {
	require(['@/view/201803/March/index.vue'], resolve)
}

const router = [
	{
		path: '/2018/03/one',
		component: index
	}
]

export default router