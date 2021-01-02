import Vue from 'vue'
import App from './App.vue'
import Textra from 'vue-textra'
import VueRouter from "vue-router";
import Main from "./components/main/Main.vue"
import PortfolioDetails from "./components/portfolio/PortfolioDetails.vue"
import ServiceDetails from "./components/services/ServiceDetails.vue"
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

const routes = [
    { path: '', component: Main },
    { path: '/', component: Main },
    { path: '/portfolio/:slug', component: PortfolioDetails },
    { path: '/service/:slug', component: ServiceDetails }

]
Vue.use(Textra)
const router = new VueRouter({
    "routes": routes
})
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')