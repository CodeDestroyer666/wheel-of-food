export const miscStore = {
    namespaced: true,
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
}
