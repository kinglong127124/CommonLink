import Alert from './packages/alert/index.js'
import PlayerPicker from './packages/playerPicker/index.js'

const components = [
    Alert,
    PlayerPicker
]

const install = function(Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
  Alert,
  PlayerPicker
}

export default {
  version: '1.0.0',
  install,
  Alert,
  PlayerPicker
}
