import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueDiscordMessage from 'vue-discord-message';

import 'normalize.css/normalize.css';
import 'basscss/css/basscss.css';

Vue.use(VueDiscordMessage);

Vue.config.productionTip = false;

new Vue({
    router,
    render: function(h) {
        return h(App);
    },
}).$mount('#app');
