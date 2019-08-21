import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index.vue'
import Command from './components/Command.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/commands',
            name: 'commands',
            component: function () {
                return import('./pages/Commands.vue')
            }
        }
    ]
})
