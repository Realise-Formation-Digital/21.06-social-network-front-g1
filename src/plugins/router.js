import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Pages
import Home from "../pages/Home";
import Agence from "../pages/Agence";
import Contact from "../pages/Contact";
import Destination from "../pages/Destination";


const routes = [
    { path: '/', component: Home },
    { path: '/agence', component: Agence },
    { path: '/contact', component: Contact },
    { path: '/destination', component: Destination },
]

export default new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
})

