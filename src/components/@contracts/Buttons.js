// require the Render module to resolve rendering properties
import Render from "./Render";
export default {
  mixins: [Render],
  props: {
    /**
     * The function what will be used to handler actions of buttons
     */
    handler: {
      required: true,
      type: Function
    },
    /**
     * Entrypoint of buttons
     */
    actions: {
      default: () => []
    }
  },
  data: () => ({
    /**
     * Field with the name of prop what is the entrypoint
     */
    entrypoint: "actions",
    /**
     * Supported types of buttons
     */
    types: {
      primary: "",
      secondary: "",
      success: "",
      danger: "",
      warning: "",
      info: "",
      light: "",
      dark: "",
      link: ""
    }
  }),
  methods: {
    /**
     * Get the type of button to be assigned to property of FW what determine style of button
     * ex.: :color="getButtonType(button)"
     */
    getButtonType(button) {
      return this.types[button.type] || button.type;
    }
  }
};
