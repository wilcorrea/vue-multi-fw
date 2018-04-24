<template>
  <div>
    <q-btn
      v-for="(button, key) in rendered" 
      :key="key"
      :color="getButtonType(button)"
      @click="handler(button)"
    >
      {{ button.label }}
    </q-btn>
  </div>
</template>

<script type="text/javascript">
import Buttons from "../@contracts/Buttons";
export default {
  name: "buttons",
  mixins: [Buttons],
  data: () => ({
    types: {
      primary: "primary",
      secondary: "secondary", // undefined
      success: "success",
      danger: "danger",
      warning: "warning",
      info: "info",
      light: "light",
      dark: "dark",
      link: "text"
    }
  })
};
</script>

<style scoped>
.q-btn {
  margin: 0 8px 0 0;
}
</style>
