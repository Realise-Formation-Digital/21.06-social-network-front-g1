import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Pages
import Home from "../pages/Home";
import Agence from "../pages/Agence";
import Contact from "../pages/Contact";
import Destination from "../pages/Destination";

//Pages for  users
import Poster from "../pages/Poster";
import List from "../pages/List";
import Register from "../pages/Register";
import Login from "../pages/Login";


const routes = [
    { path: '/', component: Home, name: "home" },
    { path: '/agence', component: Agence },
    { path: '/contact', component: Contact },
    { path: '/destination', component: Destination },
    //for users
    { path: '/poster', component: Poster },
    { path: '/list', component: List },
    { path: '/register', component: Register },
    { path: '/login', component: Login }
]

export default new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
})