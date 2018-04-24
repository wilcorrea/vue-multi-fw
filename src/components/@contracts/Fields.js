// require the Render module to resolve rendering properties
import Render from "./Render";
export default {
  mixins: [Render],
  props: {
    /**
     * Entrypoint of schemas
     */
    schemas: {
      default: () => []
    }
  },
  data: () => ({
    /**
     * Field with the name of prop what is the entrypoint
     */
    entrypoint: "schemas",
    /**
     * The v-model index property
     * Is updated by method `done`
     */
    record: {}
  }),
  methods: {
    /**
     * Triggered after Render.render resolve the entrypoint
     * @param {*} rendered
     */
    done(rendered) {
      if (typeof rendered !== "object") {
        throw Error("The value of rendered MUST be an object");
      }

      /* rendered is updated with $get & $set methods */
      this.rendered = this.configureRendered(rendered);

      /* v-model index */
      this.record = this.configureRecord(rendered);
    },
    /**
     * @param {Object} rendered
     */
    configureRendered(rendered) {
      const configure = (accumulate, key) => {
        accumulate[key].$set = (property, value) => {
          accumulate[key].bind[property] = value;
        };
        accumulate[key].$get = property => {
          return accumulate[key].bind[property];
        };
        return accumulate;
      };
      return Object.keys(rendered).reduce(configure, rendered);
    },
    /**
     * @param {Object} rendered
     */
    configureRecord(rendered) {
      return Object.keys(rendered).reduce((accumulate, key) => {
        if (rendered[key].bind) {
          accumulate[key] = rendered[key].bind.default;
        }
        return accumulate;
      }, {});
    },
    /**
     * Method used to catch events of template of Fields
     * @param {string} event
     * @param {string} name
     * @param {*} payload
     */
    event(event, name, payload) {
      const schema = this.rendered[name];
      try {
        if (!schema.events) {
          return;
        }
        const action = schema.events[event];
        action(this.record, this.rendered, payload);
      } catch (error) {
        throw Error(`Can not handler with '${event}' of '${name}'`);
      }
    }
  },
  watch: {
    record: {
      /**
       * Emit to parent the record status
       */
      handler(record) {
        this.$emit("input", record);
      },
      deep: true
    }
  },
  mounted() {
    /**
     * Cloak fields
     */
    this.ready = true;
  }
};
