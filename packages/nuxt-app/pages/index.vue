<template>
  <div class="container">
    <StyleQLButton>Click me</StyleQLButton>
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import StyleQLButton from "../components/StyleQLButton.vue";

export default createComponent({
  components: {
    StyleQLButton
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
