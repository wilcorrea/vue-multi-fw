<template>
  <div>
    <buttons v-bind="buttons"/>
    <hr>
    <fields v-bind="fields" v-model="record"/>
    <hr>
    <buttons v-bind="buttons"/>
    --
    <pre>{{ record }}</pre>
  </div>
</template>

<script type="text/javascript">
import Form from "../@contracts/Form";
import Buttons from "./Buttons.vue";
import Fields from "./Fields.vue";

export default {
  name: "BootstrapForm",
  mixins: [Form],
  components: {
    Buttons,
    Fields
  }
};
</script>
