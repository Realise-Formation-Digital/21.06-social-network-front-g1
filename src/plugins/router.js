import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Pages
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Destination from "../pages/Destination";


const routes = [
    { path: '/', component: Home },
    { path: '/about-us', component: AboutUs },
    { path: '/contact', component: Contact },
    { path: '/destination', component: Destination },
]

export default new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
})

