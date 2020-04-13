<template>
  <button :class="classes">
    <slot>Hi there!</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "@vue/composition-api";
// @ts-ignore
import { getClassnames } from "styleql";

export default defineComponent({
  setup() {
    const classes = ref<string>(null);
    onMounted(async () => {
      const a = await getClassnames();
      console.log(a) 
      classes.value = a;
    });
    return { classes };
  },
  name: "StyleQLButton"
});
</script>
