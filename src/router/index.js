import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/mainPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/contact',
    name:'Contact',
    component: ()=> import(/* webpackChunkName: "contact" */ '../views/contactPage.vue')
  },
  {
    path:'/email',
    name:'email',
    component: ()=> import(/* webpackChunkName: "success" */ '../views/emailSuccess.vue')
  },

  {
    path:'/team',
    name:'team',
    component: ()=> import(/* webpackChunkName: "team" */ '../views/burtulateam.vue')
  },
  {
    path:'/projects',
    name:'projects',
    component: ()=> import(/* webpackChunkName: "team" */ '../views/projects.vue'),
    children:[
      {
        path:':id',
        component: () => import( /* webpackChunkName: "table" */  '../views/projects.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
