export default {
  data: () => ({
    /**
     * Field with the name of prop what is the entrypoint
     */
    entrypoint: "",
    /**
     * Cloak fields
     */
    ready: false,
    /**
     * Result of processment of entrypoint
     */
    rendered: undefined
  }),
  methods: {
    /**
     * Executed after the render to assimilate the rendered entrypoint
     * @param {*} rendered
     */
    done(rendered) {
      this.rendered = rendered;
    },
    /**
     * Get the entry from entrypoint and resolve if
     */
    render() {
      const entry = this[this.entrypoint];
      /* render entrypoint from promise */
      if (entry instanceof Promise) {
        return entry.resolve(this).then(this.done);
      }
      /* render entrypoint from function */
      if (typeof entry === "function") {
        return this.done(entry(this));
      }
      /* render entrypoint from whatever */
      return this.done(entry);
    }
  },
  watch: {
    rendered: {
      /**
       * Emit to parent the rendered status
       */
      handler(rendered) {
        this.$emit("rendered", rendered);
      },
      deep: true
    }
  },
  created() {
    /**
     * Render entrypoint
     */
    this.render();
  }
};
