<template>
  <div>
    <!-- Content goes here -->
    {{ data }}
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  // Define your props here
  data: {
    default: "abc",
    type: string,
  },
});
</script>

<style scoped>
/* Styles go here */
</style>
