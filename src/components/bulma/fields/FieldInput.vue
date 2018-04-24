<template>
  <div :class="className">
    <label :for="name" v-html="label"/>
    <div class="control">
      <input
        ref="input"
        class="input"
        :name="name"
        v-bind="$props"
        @input="input"
      />
    </div>
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
