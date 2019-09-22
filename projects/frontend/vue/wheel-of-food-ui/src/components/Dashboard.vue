<template>
  <div>
    <h1>Dashboard</h1>
    {{ dashboardData }}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    msg: String
  },
  created: function() {
    this.loadData();
  },
  computed: mapState({
    dashboardData: state => state.dashboard.data
  }),
  methods: mapActions({
    loadData: "dashboard/fetchDashboardData"
  })
};
</script>