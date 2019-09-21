import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        numberOfKimmos: 10
    },
    mutations: {
        incrementNumberOfKimmos(state) {
            state.numberOfKimmos++
        }
    },
    actions: {
        incrementNumberOfKimmos(context) {
            context.commit('incrementNumberOfKimmos');
        }
    }
})