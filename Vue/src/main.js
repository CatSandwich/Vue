import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';

Vue.use(VueRouter)

const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>Bar</div>' }

const routes = [
    { path: '/', component: App },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes: routes
})

new Vue({
    router
}).$mount('#app')
