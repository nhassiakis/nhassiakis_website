import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/site/Home.vue'
import About from '../views/site/About.vue'
import Contact from '../views/site/Contact.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/site/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
