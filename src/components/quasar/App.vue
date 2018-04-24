<template>
  <div>
    <link href="https://unpkg.com/quasar-framework@%5E0.15.1/dist/umd/quasar.mat.min.css" rel="stylesheet">
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
/* eslint-disable no-undef */
const Quasar = require("quasar-framework/dist/umd/quasar.mat.umd.min.js");

Vue.use(Quasar);

export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px;
}
hr {
  margin: 10px 0;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.04),
    #ddd,
    #ddd,
    rgba(0, 0, 0, 0.04)
  );
}
</style>
