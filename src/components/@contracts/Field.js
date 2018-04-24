export default {
  props: {
    name: {
      required: true,
      type: String
    },
    value: {
      required: true
    },
    label: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    width: {
      type: Number
    },
    prefix: {
      default: ""
    },
    extraClassName: {
      default: ""
    }
  },
  computed: {
    /**
     * Generate HTML class
     */
    className() {
      const className = [this.$options.name];
      if (this.extraClassName) {
        className.push(this.extraClassName);
      }
      if (!this.width) {
        return className;
      }
      if (!Array.isArray(this.prefix)) {
        className.push(`${this.prefix}-${this.width}`);
        return className;
      }
    }
  },
  methods: {
    /**
     * Assign event input of components
     */
    input($event) {
      const value = $event.target.value;
      // update v-model relationship with parent
      this.$emit("input", value);
      // trigger change event on models
      this.$emit("event", "change", this.name, value);
    }
  }
};
