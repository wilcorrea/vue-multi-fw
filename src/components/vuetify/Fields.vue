<template>
  <div>
    <template 
      v-for="(schema, key) in rendered"
      v-if="ready"
    >
      <component
        :key="key"
        :name="key"
        :is="schema.component"
        v-bind="schema.bind"
        v-model="record[key]"
        @event="event"
      />
    </template>
  </div>
</template>

<script type="text/javascript">
import Fields from "../@contracts/Fields";
export default {
  name: "fields",
  mixins: [Fields]
};
</script>
