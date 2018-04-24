import Vue from "vue";
import bootstrap from "./bootstrap";
import router from "./infra/router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
bootstrap(new Vue({ router }));
