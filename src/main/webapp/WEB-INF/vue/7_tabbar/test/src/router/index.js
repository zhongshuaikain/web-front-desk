import Vue from 'vue'
import Router from 'vue-router'

const home =()=>import('../views/home')
const my =()=>import('../views/my')
const classify =()=>import('../views/classify')
const car =()=>import('../views/car')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/car',
      component: car
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/my',
      component: my
    },
  ],
  mode:'history'
})
