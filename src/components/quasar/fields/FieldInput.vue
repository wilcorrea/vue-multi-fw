<template>
  <div :class="className">
    <q-input
      ref="input"
      class="input"
      :name="name"
      v-bind="bind"
      @input="input"
    />
  </div>
</template>

<script type="text/javascript">
import field from "../../@contracts/Field";
export default {
  name: "input-text",
  mixins: [field],
  data: () => ({
    extraClassNames: "field"
  }),
  computed: {
    bind() {
      return {
        ...this.$props,
        "float-label": this.$props.label
      };
    }
  },
  methods: {
    input(value) {
      this.$emit("input", value);
      this.$emit("event", "change", this.name, value);
    }
  },
  mounted() {
    if (this.default) {
      // this.$refs.input.value = this.default;
    }
  }
};
</script>

<style scoped>
.input-text {
  margin: 0 0 10px 0;
}
</style>
