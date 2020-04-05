import Vue from 'vue'
import Router from 'vue-router'
import tabBar from '../components/tabBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: tabBar,
      // children: [
      //   {
      //     path: 'user',
      //     name: 'user',
      //
      //   }
      //
      // ]
    },

  ]
})
