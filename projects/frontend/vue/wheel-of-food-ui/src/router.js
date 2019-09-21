import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import Dashboard from './components/Dashboard'

const routes = [
    { path: '/dashboard', component: Dashboard }
];

export const router = new VueRouter({
    routes // short for `routes: routes`
});
