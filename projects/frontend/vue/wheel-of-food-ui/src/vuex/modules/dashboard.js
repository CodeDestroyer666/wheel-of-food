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
            fetch('http://localhost:3000/users')
                .then(response => response.text())
                .then(function (data) {
                    context.commit('updateDashboardData', data);
                });

        }
    }
}
