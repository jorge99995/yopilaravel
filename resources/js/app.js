require('./bootstrap');
import Vue from 'vue'
import App from './Components/App.vue'



import VueRouter from 'vue-router'
import { routes } from './router';
Vue.use(VueRouter);


//import buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { Table, Input } from 'buefy'
Vue.use(Buefy)
Vue.use(Table)
Vue.use(Input)

//Import Element Ui
import ElementUI from 'element-ui';
import { Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Button);










const router = new VueRouter({
    mode: 'history',
    routes:routes
});
const app = new Vue({
    el: '#app',
    render: h => h(App),
    router:router
});
