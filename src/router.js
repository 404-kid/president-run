import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Washington from './views/Washington.vue'
import Lincon from './views/Lincon.vue'
import Bush from './views/Bush.vue'
import Obama from './views/Obama.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/washington',
      name: 'washington',
      component: Washington
    },
    {
      path: '/lincon',
      name: 'lincon',
      component: Lincon
    },
    {
      path: '/bush',
      name: 'bush',
      component: Bush
    },
    {
      path: '/obama',
      name: 'obama',
      component: Obama
    }
  ]
})
