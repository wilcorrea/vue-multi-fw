<template>
  <v-app>
    <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
    <v-container>
       <router-view/>
    </v-container>
  </v-app>
</template>

<script>
import Vue from "vue";

import Vuetify from "vuetify";

Vue.use(Vuetify);

export default {
  name: "App"
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
