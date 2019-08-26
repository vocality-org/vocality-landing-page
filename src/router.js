import Vue from 'vue'
import Router from 'vue-router'

import Index from './pages/Index.vue'

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
        },
        {
            path: '/donate',
            name: 'donate',
            component: function () {
                return import('./pages/Donate.vue')
            }
        },
        {
            path: '/faq',
            name: 'faq',
            component: function () {
                return import('./pages/Faq.vue')
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: function () {
                return import('./pages/Contact.vue')
            }
        }
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})
