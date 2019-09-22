export const dashboardStore = {
    namespaced: true,
    state: {
        data: ''
    },
    mutations: {
        updateDashboardData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        fetchDashboardData(context) {
            fetch(process.env.VUE_APP_API_URL + '/users')
                .then(response => response.text())
                .then(function (data) {
                    context.commit('updateDashboardData', data);
                });

        }
    }
}
