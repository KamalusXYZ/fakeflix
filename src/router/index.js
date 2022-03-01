import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteView from '@/views/FavoriteView'
import WatchList from '@/views/WatchList'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favoris',
    name: 'favoris',
    component: FavoriteView
  },
  {
    path: '/a-voir',
    name: 'watchlist',
    component: WatchList
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router