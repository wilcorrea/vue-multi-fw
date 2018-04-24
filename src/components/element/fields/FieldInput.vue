<template>
  <div :class="className">
    <label class="el-form-item__label">
      {{ label }}
    </label>
    <el-input
      ref="input"
      class="input"
      :name="name"
      v-bind="$props"
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
.label {
  display: block;
}
</style>
