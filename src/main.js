import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css'
import 'basscss/css/basscss.css'

Vue.config.productionTip = false

new Vue({
    router,
    render: function (h) { return h(App) }
}).$mount('#app')
