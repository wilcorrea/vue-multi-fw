<template>
  <div>
    <button
      v-for="(button, key) in rendered" 
      :key="key"
      class="btn"
      :class="getButtonType(button)"
      @click="handler(button)"
    >
      {{ button.label }}
    </button>
  </div>
</template>

<script type="text/javascript">
import Buttons from "../@contracts/Buttons";
export default {
  name: "buttons",
  mixins: [Buttons],
  data: () => ({
    types: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      success: "btn-success",
      danger: "btn-danger",
      warning: "btn-warning",
      info: "btn-info",
      light: "btn-light",
      dark: "btn-dark",
      link: "btn-link"
    }
  })
};
</script>

<style scoped>
.btn {
  margin: 0 8px 0 0;
}
</style>
