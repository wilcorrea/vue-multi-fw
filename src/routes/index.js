import { FW } from "../env";
import category from "../domains/general/category/routes";

/* eslint-disable no-undef */
const App = require(`../components/${FW}/App.vue`);
/* eslint-disable no-undef */
const Form = require(`../components/${FW}/Form.vue`);

const layouts = {
  form: Form
};

export default router => {
  return [
    {
      path: "/",
      component: App,
      children: [...category(router, layouts)]
    }
  ];
};
