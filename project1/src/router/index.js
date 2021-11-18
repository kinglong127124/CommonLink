import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import User from '../views/User.vue'
// import PlayerPicker from 'kl-com-ui/packages/playerPicker/src/playerPicker.vue'
Vue.use(VueRouter)
const User = {
  template: '<div>User33333333333</div>'
}
const UserId = {
  props: ['id'],
  template: '<div>User{{ id }} </div>'
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/user1/:id*',
    name: 'UserId',
    component: UserId,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
