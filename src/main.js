import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios';

var VueMaterial = require('vue-material')

Vue.use(VueMaterial)
Vue.use(VueRouter)

import Users from './components/User/Users.vue'
import UserProfile from './components/User/UserProfile.vue'
import Home from './components/Home.vue'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            name: 'leden',
            path: '/leden',
            component: Users
        },
//        {//            path: '/leden/new',
//            component: User
//        },
        {
            name: 'profile',
            path: '/leden/:id/profile',
            component: UserProfile
        }
  ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})