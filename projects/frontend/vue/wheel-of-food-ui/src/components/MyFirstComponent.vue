<template>
  <div v-on:click="greet">Kimmo {{number}} {{fromFunction() | reverse}}</div>
</template>

<script>
export default {
  props: {
    number: Number
  },
  data: function() {
    return { name: "myfirstcomponent" };
  },
  methods: {
    greet: function() {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
    },
    fromFunction: function() {
      return "This comes from function";
    }
  },
  filters: {
    reverse: function(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>