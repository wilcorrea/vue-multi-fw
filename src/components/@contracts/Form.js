import { operations } from "../../support/model";

export default {
  props: {
    handler: {
      default() {
        return button => button.handler(this.record, this.schemas, button);
      }
    },
    actions: {
      default() {
        return () => [];
      }
    },
    schemas: {
      default() {
        return () => ({});
      }
    }
  },
  data: () => ({
    record: {},
    buttons: {
      actions: []
    },
    fields: {
      schemas: {}
    }
  }),
  created() {
    this.buttons = {
      handler: this.handler,
      actions: this.actions(this, operations(this))
    };
    this.fields = {
      schemas: this.schemas(this)
    };
  }
};
