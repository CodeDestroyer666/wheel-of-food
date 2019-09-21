<template>
  <div id="app" v-if="initialized">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Moro" />
    <MyFirstComponent v-for="n in numberOfKimmos" :key="n" :number="n" />
    <button @click="incrementNumberOfKimmos">Add 1 Kimmo</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import HelloWorld from "./components/HelloWorld.vue";
import MyFirstComponent from "./components/MyFirstComponent.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    MyFirstComponent
  },
  data: function() {
    return {
      initialized: true
    };
  },
  computed: mapState({
    numberOfKimmos: state => state.numberOfKimmos
  }),
  methods: mapActions(["incrementNumberOfKimmos"])
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
