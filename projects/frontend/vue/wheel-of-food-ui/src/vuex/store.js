import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

import { miscStore } from './modules/misc';

export const store = new Vuex.Store({
    modules: {
        misc: miscStore
    }
})
