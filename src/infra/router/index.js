import Vue from "vue";
import VueRouter from "vue-router";
import routes from "../../routes";

console.log("~> routes", routes);

Vue.use(VueRouter);

const router = new VueRouter({});

router.addRoutes(routes(router));

export default router;
