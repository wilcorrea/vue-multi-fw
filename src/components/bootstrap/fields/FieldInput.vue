<template>
  <div :class="className">
    <slot name="label">
      <label :for="name" v-html="label"/>
    </slot>
    <slot name="component">
      <div class="control">
        <input
          ref="input"
          class="form-control"
          :name="name"
          v-bind="$props"
          @input="input"
        />
      </div>
    </slot>
    <slot name="error">
    </slot>
  </div>
</template>

<script type="text/javascript">
import field from "../../@contracts/Field";
export default {
  name: "input-text",
  mixins: [field],
  data: () => ({
    extraClassNames: "form-group"
  }),
  mounted() {
    if (this.default) {
      // this.$refs.input.value = this.default;
    }
  }
};
</script>

<style scoped>
label {
  display: block;
}
</style>
