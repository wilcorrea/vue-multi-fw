import { form } from "../model";

export default (router, layouts) => {
  return [
    {
      path: "",
      component: layouts.form,
      props: route => form(route)
    }
  ];
};
