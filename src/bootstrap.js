import Vue from "vue";
import { FW } from "./env";

export default app => {
  // TODO: require SASS, STYLUS, SCSS, whatever from FW
  const components = ["FieldInput"];

  window.app = app;

  components.forEach(name => {
    /* eslint-disable no-undef */
    Vue.component(name, require(`./components/${FW}/fields/${name}.vue`));
  });
  app.$mount("#app");
};
