import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const hostName="Vuetify test"
Vue.use(Router)

export default new Router({
  // mode: 'history',/* 使用history模式就不能自定义输出路径publicPath  */
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: hostName
      },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title:hostName+' - about'
      },
      component: () => import( './views/About.vue')
    },
    {
      path: '/help',
      name: 'help',
      meta: {
        title: hostName+' - 测试组件'
      },
      component: () => import( './views/help.vue')
    }
  ]
})
