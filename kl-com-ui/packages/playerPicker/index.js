import PlayerPicker from './src/playerPicker'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import Vue from 'vue'
Vue.use(WeVue)


PlayerPicker.install = function (Vue) {
  Vue.component(PlayerPicker.name, PlayerPicker)
}
export default PlayerPicker
