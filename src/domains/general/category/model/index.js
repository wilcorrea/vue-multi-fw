import Vue from "vue";
import FieldCustom from "../components/FieldCustom.vue";

Vue.component("FieldCustom", FieldCustom);

export const actions = route => ($this, operations) => {
  operations.push({
    type: "",
    label: "Customizado",
    id: "custom",
    handler: record => console.log("~> save", $this.$options.name, record)
  });
  return operations;
};

export const schemas = route => $this => {
  const change = (record, schemas) => {
    schemas.name.$set("label", `${record["name"]} / ${record["age"]}`);
  };
  return {
    name: {
      component: "field-input",
      bind: {
        label: "Nome",
        placeholder: "Informe o nome",
        default: "William"
      },
      events: {
        change
      }
    },
    age: {
      component: "field-input",
      bind: {
        label: "Idade",
        placeholder: "Informe a idade",
        type: "number",
        default: 0
      },
      events: {
        change
      }
    },
    custom: {
      component: "field-custom",
      bind: {
        label: "Customizado"
      }
    }
  };
};

export const form = route => {
  return {
    actions: actions(route),
    schemas: schemas(route)
  };
};
