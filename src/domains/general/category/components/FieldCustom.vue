<template>
  <FieldInput v-bind="$props" @input="input">
    <template slot="error">
      <small>Taca-lhe pau</small>
    </template>
  </FieldInput>
</template>

<script type="text/javascript">
import Field from "../../../../components/@contracts/Field";
import FieldInput from "../../../../components/bootstrap/fields/FieldInput.vue";
export default {
  name: "FieldCustom",
  mixins: [Field],
  components: {
    FieldInput
  },
  methods: {
    /**
     * Assign event input of components
     */
    input(value) {
      // update v-model relationship with parent
      this.$emit("input", value);
      // trigger change event on models
      this.$emit("event", "change", this.name, value);
    }
  }
};
</script>
