import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

import { miscStore } from './modules/misc';
import { dashboardStore } from './modules/dashboard';

export const store = new Vuex.Store({
    modules: {
        dashboard: dashboardStore,
        misc: miscStore
    }
})
