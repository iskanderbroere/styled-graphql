<template>
  <button :class="classes">
    <slot>Hi there!</slot>
  </button>
</template>

<script lang="ts">
import { createComponent, ref, onMounted } from "@vue/composition-api";
import { getClassnames } from "styleql";

export default createComponent({
  setup() {
    const classes = ref([]);
    onMounted(async () => {
      const a = await getClassnames();
      console.log(a);
      classes.value = a;
    });
    return { classes };
  },
  name: "StyleQLButton"
});
</script>
