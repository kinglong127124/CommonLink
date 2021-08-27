import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import klComUi from 'kl-com-ui/index'
// import { PlayerPicker } from 'kl-com-ui'

Vue.use(WeVue)
Vue.use(klComUi)
// klComUi.install(Vue)
console.log('klComklCom', klComUi)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
