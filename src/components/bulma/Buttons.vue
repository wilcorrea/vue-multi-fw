<template>
  <div>
    <button
      v-for="(button, key) in rendered" 
      :key="key"
      class="button"
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
      primary: "is-primary",
      secondary: "is-secondary", // undefined
      success: "is-success",
      danger: "is-danger",
      warning: "is-warning",
      info: "is-info",
      light: "is-light",
      dark: "is-dark",
      link: "is-text"
    }
  })
};
</script>

<style scoped>
.button {
  margin: 0 8px 0 0;
}
</style>
